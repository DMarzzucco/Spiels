import React, { useState, useEffect, KeyboardEvent } from 'react';
import { Counter, MenuPause, MenuWin, Plus } from '../components/share';
import { Link } from 'react-router-dom';

const Game = () => {
    const [ballPosition, setBallPosition] = useState({ x: 395, y: 195 });
    const [ballSpeed, setBallSpeed] = useState({ x: -5, y: 5 });
    const [paddleLeftTop, setPaddleLeftTop] = useState<number>(160);
    const [paddleRightTop, setPaddleRightTop] = useState<number>(160);
    const [isPaused, setIsPaused] = useState<boolean>(true);
    const [plusFirst, setPlusFirst] = useState<boolean | string>(false);
    const [plusSecond, setPlusSecond] = useState<boolean | string>(false)
    const [showMenuPause, setShowMenuPause] = useState<boolean>(false);
    const [showMenuWin, setShowMenuWin] = useState<boolean>(false);
    const [sCounter, setSCounter] = useState<number>(0);
    const [fCounter, setFCounter] = useState<number>(0);
    const [inpPut, setInpPut] = useState<boolean>(true);
    const [valueInp1, setValueInp1] = useState<string | number>('');
    const [valueInp2, setValueInp2] = useState<string | number>('');
    const [valueLimit, setValueLimit] = useState<number>(0);
    const [winner, setWinner] = useState<string | number | null>(null);
    const [showError, setShowError] = useState<boolean>(false);
    const [keyState, setKeyState] = useState({
        w: false,
        s: false,
        ArrowUp: false,
        ArrowDown: false
    })
    const paddleSpeed: number = 25;
    // buttons 
    const resetButton = () => { resetGame(); setShowMenuPause(false); }
    const menuResume = () => { setShowMenuPause(false); setIsPaused(false); }
    const winResume = () => { setShowMenuWin(false); resetGame(); }
    const startButton = () => {
        const valimt: number = parseFloat(valueLimit.toString());
        if (valueInp1 === '' || valueInp2 === '') {
            setShowError(true);
            setTimeout(() => setShowError(false), 1000);
            return;
        }
        else if (isNaN(valimt)) {
            setShowError(true);
            setTimeout(() => setShowError(false), 1000);
            return;
        }
        resetGame();
        setIsPaused(false);
        setInpPut(!inpPut);
    }
    // take input value
    const takeFvalueChange = (event: React.ChangeEvent<HTMLInputElement>) => { setValueInp1(event.target.value); }
    const takeSvalueChange = (event: React.ChangeEvent<HTMLInputElement>) => { setValueInp2(event.target.value); }
    const takeLimitValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        setValueLimit(value);
    }
    // controls and bars
    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {

        if (inpPut === false) {
            const key = event.key;
            setKeyState((prevKeysState) => ({
                ...prevKeysState, [key]: true
            }));
            if (event.key === " ") { setIsPaused(!isPaused); setShowMenuPause(!showMenuPause) }
            else if (event.key === "w") {
                setPaddleLeftTop(prevTop => Math.max(prevTop - paddleSpeed, 0));
            } else if (event.key === "s") {
                setPaddleLeftTop(prevTop => Math.min(prevTop + paddleSpeed, 320));
            } else if (event.key === "ArrowUp") {
                setPaddleRightTop(prevTop => Math.max(prevTop - paddleSpeed, 0));
            } else if (event.key === "ArrowDown") {
                setPaddleRightTop(prevTop => Math.min(prevTop + paddleSpeed, 320));
            }
        } else if (inpPut === true) { }
    };
    // ball
    const limit: number = valueLimit;
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
                    setPlusFirst(true);
                    setTimeout(() => setPlusFirst(false), 1000);
                    setFCounter(prevCounter => {
                        const newCounter = prevCounter + 1;
                        if (newCounter === limit) {
                            setIsPaused(!isPaused);
                            setWinner(valueInp1);
                            setShowMenuWin(!showMenuWin);
                        }
                        return newCounter;
                    });
                    // setBallSpeed({ x: ballSpeed.x * -1, y: ballSpeed.y * 1.2 })
                } else {
                    setPlusSecond(true);
                    setTimeout(() => setPlusSecond(false), 1000);
                    setSCounter(prevCounter => {
                        const newCounter = prevCounter + 1;
                        if (newCounter === limit) {
                            setIsPaused(!isPaused);
                            setWinner(valueInp2);
                            setShowMenuWin(!showMenuWin);
                        }
                        return newCounter;
                    });
                    // setBallSpeed({ x: ballSpeed.x * -1, y: ballSpeed.y * 1.2 })
                }
                backBall();
            }
            if (
                // collision -LT
                (ballPosition.x < 20 && ballPosition.y + 10 >=
                    paddleLeftTop && ballPosition.y <= paddleLeftTop + 80) ||
                // collision -RT
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
        const interval = setInterval(() => { moveBall(); }, 10);
        return () => clearInterval(interval);
    }, [ballPosition, paddleLeftTop, paddleRightTop, isPaused]);

    return (
        <section className='flex flex-col justify-center items-center h-screen '
            tabIndex={0}
            onKeyDown={handleKeyDown}
        >
            {!inpPut ?
                <div className='flex flex-row justify-center items-center w-full'>
                    <Counter name={valueInp2} color={{ "background": "#2719e4" }} counter={sCounter}></Counter>
                    <div>{valueLimit}</div>
                    <Counter name={valueInp1} color={{ "background": "#06a106", }} counter={fCounter}></Counter>
                </div> : null
            }
            <div
                className="relative bg-blue-300 w-800 h-400"
                style={{ pointerEvents: 'all' }}
            >
                <div className=" absolute bg-white h-80 w-10 left-0" style={{ top: paddleLeftTop }} />
                <div className=" absolute bg-black h-80 w-10 right-0" style={{ top: paddleRightTop }} />
                <div className="absolute bg-red-500 w-20 h-20 rounded-full" style={{ left: ballPosition.x, top: ballPosition.y }} />
            </div>
            {plusFirst ?
                <Plus title={valueInp1} style={{
                    "background": "#06a106",
                    "border": "1px solid #006400"
                }} />
                : null
            }
            {plusSecond ?
                <Plus title={valueInp2} style={{
                    "background": "#2719e4",
                    "border": "1px solid #1006a1"
                }} />
                : null
            }
            {showMenuPause ? <MenuPause click={menuResume} restartClick={resetButton} /> : null}
            {showMenuWin ? <MenuWin name={winner} restartClick={winResume} /> : null}
            {inpPut ?
                <div className="rounded-xl w-full h-full absolute flex flex-col justify-center items-center bg-slate-300 bg-opacity-30 text-slate-900">
                    <input className='bg-slate-700 text-slate-300 w-40 h-40 text-center rounded-xl m-2 ' type="text" value={valueLimit} onChange={takeLimitValue} placeholder="Name" />
                    <input type="text" value={valueInp1} onChange={takeFvalueChange} placeholder="Name" />
                    <input type="text" value={valueInp2} onChange={takeSvalueChange} placeholder="Name" />
                    {showError ? <h1>Error </h1> : null}
                    <button onClick={startButton}>
                        Start
                    </button>
                    <Link className="rounded-xl border p-3 hover:bg-slate-400 hover:text-slate-800" to={"/"}>Exit</Link>
                </div> : null
            }
        </section>
    );
};

export default Game;
