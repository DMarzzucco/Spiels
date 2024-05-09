import { useState, useEffect, KeyboardEvent } from 'react';
import { Counter, MenuPause, MenuWin, Plus } from '../components/share';

const Game = () => {
    const [ballPosition, setBallPosition] = useState({ x: 395, y: 195 });
    const [ballSpeed, setBallSpeed] = useState({ x: -5, y: 5 });
    const [paddleLeftTop, setPaddleLeftTop] = useState<number>(160);
    const [paddleRightTop, setPaddleRightTop] = useState<number>(160);
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const [plusFirst, setPlusFirst] = useState<boolean | string>(false);
    const [plusSecond, setPlusSecond] = useState<boolean | string>(false)
    const paddleSpeed = 25;
    const [keyState, setKeyState] = useState({
        w: false,
        s: false,
        ArrowUp: false,
        ArrowDown: false
    })
    const [showMenuPause, setShowMenuPause] = useState<boolean>(false);
    const [showMenuWin, setShowMenuWin] = useState<boolean>(false);
    const [sCounter, setSCounter] = useState<number>(0);
    const [fCounter, setFCounter] = useState<number>(0);


    // controls and bars
    const resetButton = () => { resetGame(); setShowMenuPause(false); }
    const menuResume = () => {
        setShowMenuPause(false);
        setIsPaused(false);
    }
    const winResume = () => {
        setShowMenuWin(false);
        resetGame();
    }
    // first -f
    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        const key = event.key;
        setKeyState((prevKeysState) => ({
            ...prevKeysState, [key]: true
        }));
        if (event.key === " ") {
            setIsPaused(!isPaused);
            setShowMenuPause(!showMenuPause)
        }
        else if (event.key === "w") {
            setPaddleLeftTop(prevTop => Math.max(prevTop - paddleSpeed, 0));
        } else if (event.key === "s") {
            setPaddleLeftTop(prevTop => Math.min(prevTop + paddleSpeed, 320));
        } else if (event.key === "ArrowUp") {
            setPaddleRightTop(prevTop => Math.max(prevTop - paddleSpeed, 0));
        } else if (event.key === "ArrowDown") {
            setPaddleRightTop(prevTop => Math.min(prevTop + paddleSpeed, 320));
        }
    };
    // ball
    let limit: number = 2;
    const moveBall = () => {
        if (!isPaused) {
            // console.log("ball", ballPosition);
            // console.log("L-T", paddleLeftTop);
            // console.log("R-T", paddleRightTop);

            setBallPosition(prevPosition => ({
                x: prevPosition.x + ballSpeed.x,
                y: prevPosition.y + ballSpeed.y
            }));
            // T and B 
            if (ballPosition.y <= 0 || ballPosition.y >= 390) { ballSpeed.y *= -1; }
            // L and R
            if (ballPosition.x < 0 || ballPosition.x >= 790) {
                ballSpeed.x *= -1;
                if (ballPosition.x <= 0) {
                    // alert("1")
                    setPlusFirst(true);
                    setTimeout(() => setPlusFirst(false), 1000);
                    setFCounter(prevCounter => {
                        const newCounter = prevCounter + 1;
                        if (newCounter === limit) {
                            setIsPaused(!isPaused);
                            setShowMenuWin(!showMenuWin);
                        }
                        return newCounter;
                    });
                    // setBallSpeed({ x: ballSpeed.x * -1, y: ballSpeed.y * 1.2 })
                } else {
                    // alert("2")
                    setPlusSecond(true);
                    setTimeout(() => setPlusSecond(false), 1000);
                    setSCounter(prevCounter => {
                        const newCounter = prevCounter + 1;
                        if (newCounter === limit) {
                            setIsPaused(!isPaused);
                            setShowMenuWin(!showMenuWin);
                        }
                        return newCounter;
                    });

                    // setBallSpeed({ x: ballSpeed.x * -1, y: ballSpeed.y * 1.2 })
                }
                backBall();
            }

            if (
                // colision -LT
                (ballPosition.x < 20 && ballPosition.y + 10 >=
                    paddleLeftTop && ballPosition.y <= paddleLeftTop + 80) ||
                // colision -RT
                (ballPosition.x > 770 && ballPosition.y + 10 >=
                    paddleRightTop && ballPosition.y <= paddleRightTop + 80)
            ) {
                ballSpeed.x *= -1;
            }

        }
    };
    const backBall = () => {
        setBallPosition({ x: 395, y: 195 });
        setPaddleLeftTop(160);
        setPaddleRightTop(160);
        setIsPaused(false);
    }
    const resetGame = () => {
        setBallPosition({ x: 395, y: 195 });
        setPaddleLeftTop(160);
        setPaddleRightTop(160);
        setIsPaused(false);
        setBallSpeed({ x: -5, y: 5 });
        setFCounter(0);
        setSCounter(0);
    };


    useEffect(() => {
        const interval = setInterval(() => {
            moveBall();
        }, 10);

        return () => clearInterval(interval);
    }, [ballPosition, paddleLeftTop, paddleRightTop, isPaused]);

    return (
        <section className='flex flex-col justify-center items-center h-screen '
            tabIndex={0}
            onKeyDown={handleKeyDown}
        >
            <div className='flex flex-row justify-center items-center w-full'>
                <Counter color={{ "background": "#2719e4" }} counter={sCounter}></Counter>
                <Counter color={{ "background": "#06a106", }} counter={fCounter}></Counter>


            </div>
            <div
                className="relative bg-blue-300 w-800 h-400"
                style={{ pointerEvents: 'all' }}
            >
                <div className=" absolute bg-white h-80 w-10 left-0" style={{ top: paddleLeftTop }} />
                <div className=" absolute bg-black h-80 w-10 right-0" style={{ top: paddleRightTop }} />
                <div className="absolute bg-red-500 w-20 h-20 rounded-full" style={{ left: ballPosition.x, top: ballPosition.y }} />
            </div>
            <div className='flex flex-row justify-center items-center '>
                <button className='p-2 border bg-slate-400 m-2' onClick={menuResume}>Menu</button>
            </div>
            {plusFirst ?
                <Plus title='Uno' style={{ "background": "#06a106", "border": "1px solid #006400" }} />
                : null
            }
            {plusSecond ?
                <Plus title='Dos' style={{ "background": "#2719e4", "border": "1px solid #1006a1" }} />
                : null
            }
            {showMenuPause ?
                <MenuPause click={menuResume} restartClick={resetButton} />
                : null
            }
            {showMenuWin ?
                <MenuWin restartClick={winResume} />
                : null
            }
        </section>
    );
};

export default Game;
