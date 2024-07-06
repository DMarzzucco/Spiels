import React, { KeyboardEvent, createContext, useCallback, useContext, useReducer, useRef, useState } from "react";
import { AuthProviderProps, CounterProps, GameContextProps, inputProps, keyProps, spielProps } from "../ts/interfaces/interfaces";
import { booleansItems, CounterItems, ErrorMess, intSpiel, keyboard, paddleSpeed, Values } from "../components/functions/comps";
import { booleansReducer } from "../components/functions/booleanReducers";

export const GameContext = createContext<GameContextProps | undefined>(undefined)

export const gameState = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error("gameState must be used within an AuthProvider")
    }
    return context;
}
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

    const [spielState, setSpielState] = useState<spielProps>(intSpiel)
    const [keyState, setKeyState] = useState<keyProps>(keyboard)
    const [inputValue, setInputValue] = useState<inputProps>(Values)
    const [winner, setWinner] = useState<string | number | null>(null)
    const [vCounter, setVCounter] = useState<CounterProps>(CounterItems)
    const [booleanState, dispatch] = useReducer(booleansReducer, booleansItems)

    // take input value 
    const handleInput = (player: 'one' | 'two') => (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue((prev) => ({
            ...prev,
            players: {
                ...prev.players,
                [player]: e.target.value
            }
        }))
    }
    // controls and bars
    const handleKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
        if (!booleanState.menu.starting) {
            const key = e.key;
            setKeyState((prevKeysState) => ({
                ...prevKeysState, [key]: true
            }));
            setSpielState((prev) => ({
                ...prev,
                paddle: {
                    left: e.key === "w" ? Math.max(prev.paddle.left - paddleSpeed, 0) :
                        e.key === "s" ? Math.min(prev.paddle.left + paddleSpeed, 320) :
                            prev.paddle.left,
                    right: e.key === "i" ? Math.max(prev.paddle.right - paddleSpeed, 0) :
                        e.key === "k" ? Math.min(prev.paddle.right + paddleSpeed, 320) :
                            prev.paddle.right
                }
            }))
            if (e.key === " ") { dispatch({ type: 'OPEN_MENU_PAUSED' }) }
        }
        return
    }, [setSpielState, setKeyState, booleanState.menu.starting,])

    const limit: number = inputValue.limit;
    const animationsRef = useRef<number>();

    const moveBall = useCallback(() => {
        if (!booleanState.paused) {
            setSpielState(prev => {

                const newX = prev.ball.position.x + prev.ball.speed.x;
                const newY = prev.ball.position.y + prev.ball.speed.y;
                const leftPaddle = prev.paddle.left;
                const rightPaddle = prev.paddle.right
                // colision T & B
                let newSpeedy = prev.ball.speed.y;
                if (newY <= 0 || newY >= 390) {
                    newSpeedy *= -1;
                }
                // colision L and R
                let newSpeedX = prev.ball.speed.x;
                if (newX < 0 || newX >= 790) {
                    newSpeedX *= -1;
                    // winner
                    if (newX <= 0) {
                        setVCounter((prev) => {
                            const newCounter = { ...prev, one: prev.one + 1 }
                            if (newCounter.one === limit) {
                                dispatch({ type: 'OPEN_MENU_WIN' })
                                setWinner(inputValue.players.one);
                            }
                            return newCounter
                        })
                        setSpielState(intSpiel)
                        dispatch({ type: 'SHOW_POINT_ONE' });
                        setTimeout(() => dispatch({ type: 'HIDEN_POINT_ONE' }), 1000)
                    } else {
                        setVCounter((prev) => {
                            const newCounter = { ...prev, two: prev.two + 1 }
                            if (newCounter.two === limit) {
                                dispatch({ type: 'OPEN_MENU_WIN' })
                                setWinner(inputValue.players.two);
                            }
                            return newCounter
                        })
                        setSpielState(intSpiel)
                        dispatch({ type: 'SHOW_POINT_TWO' })
                        setTimeout(() => dispatch({ type: 'HIDEN_POINT_TWO' }), 1000)
                    }
                }
                // paddle collision
                if (
                    (newX < 20 && newY + 10 >= leftPaddle && newY <= leftPaddle + 80) ||
                    (newX > 770 && newY + 10 >= rightPaddle && newY <= rightPaddle + 80)
                ) {
                    newSpeedX *= -1;
                }
                return {
                    ...prev,
                    ball: {
                        ...prev.ball,
                        position: { x: newX, y: newY },
                        speed: { x: newSpeedX, y: newSpeedy }
                    },
                }
            })
        }
        animationsRef.current = requestAnimationFrame(moveBall)
    }, [booleanState, inputValue, spielState]);
    // button
    const startButton = () => {
        const value: number = parseFloat(inputValue.limit.toString())
        let errorMessage: string = '';
        console.log(errorMessage)
        const errorValue = ErrorMess.value
        const errorInpt = ErrorMess.input;
        const playerOne = inputValue.players.one
        const playerTwo = inputValue.players.two

        if (playerOne === '' || playerTwo === '') {
            errorMessage = errorInpt;
            dispatch({ type: 'SHOW_ERROR_INPUTS' })
            const timer = setTimeout(() => dispatch({ type: 'HIDEN_ERROR_INPUTS' }), 1000);
            return () => clearTimeout(timer);
        }
        if (isNaN(value) || value <= 0) {
            errorMessage = errorValue;
            dispatch({ type: 'SHOW_ERROR_VALUE' })
            const timer = setTimeout(() => dispatch({ type: 'HIDEN_ERROR_VALUE' }), 1000)
            return () => clearTimeout(timer)
        }
        resetGame();
        dispatch({ type: 'CLOSE_MENU_STARTING' })
        const timer = setTimeout(() => dispatch({ type: 'HIDEN_VERSUS' }), 500)
        return () => clearTimeout(timer)
    }

    const menuResume = () => {
        dispatch({ type: 'CLOSE_MENU_PAUSED' })
        return
    }
    const NewGame = () => {
        dispatch({ type: "OPEN_MENU_STARTING" })
        setSpielState(intSpiel)
        setInputValue(Values)
        return
    }
    const winResume = () => {
        resetGame()
        dispatch({ type: 'SHOW_REMATCH' })
        const timer = setTimeout(() => dispatch({ type: 'HIDEN_REMATCH' }), 500)
        return () => clearTimeout(timer)
    }
    const resetButton = () => {
        resetGame();
        dispatch({ type: 'SHOW_REMATCH' })
        const timer = setTimeout(() => dispatch({ type: 'HIDEN_REMATCH' }), 500)
        return () => clearTimeout(timer)
    }
    const playGame = () => {
        dispatch({ type: 'OPEN_MENU_STARTING' })
        setSpielState(intSpiel);
        setVCounter(CounterItems)
        setInputValue(Values)
    }

    const resetGame = () => {
        dispatch({ type: 'RESET' })
        setSpielState(intSpiel);
        setVCounter(CounterItems)
    }

    const changeValue = (operation: 'sum' | 'rest') => {
        setInputValue((prev) => {
            const newLimit = operation === 'sum' ? prev.limit + 1 :
                prev.limit > 0 ? prev.limit - 1 : prev.limit;
            return {
                ...prev,
                limit: newLimit
            }
        })
    }

    return (
        <GameContext.Provider value={
            {
                spielState, booleanState, keyState, winner, menuResume,
                NewGame, winResume, resetButton, startButton,
                handleKeyDown, moveBall, playGame, animationsRef,
                inputValue, vCounter, handleInput, changeValue
            }
        }>
            {children}
        </GameContext.Provider>
    )
}

export default AuthProvider