import { useState, useEffect, KeyboardEvent } from 'react';

const Game = () => {
    const [ballPosition, setBallPosition] = useState({ x: 395, y: 195 });
    const [ballSpeed, setBallSpeed] = useState({ x: -2, y: 2 });
    const [paddleLeftTop, setPaddleLeftTop] = useState(0);
    const [paddleRightTop, setPaddleRightTop] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const paddleSpeed = 25;
    const [keyState, setKeyState] = useState({
        w: false,
        s: false,
        ArrowUp: false,
        ArrowDown: false
    })

    // controls and bars
    const pauseButton = () => {
        setIsPaused(!isPaused)
    }
    const resetButton = () => {
        resetGame()
    }
    // 
    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === " ") {
            setIsPaused(!isPaused);
        } else if (event.key === "w") {
            // setPaddleLeftTop(prevTop => Math.max(prevTop - 10, 0));
            setPaddleLeftTop(prevTop => Math.max(prevTop - paddleSpeed, 0));
        } else if (event.key === "s") {
            // setPaddleLeftTop(prevTop => Math.min(prevTop + 10, 320));
            setPaddleLeftTop(prevTop => Math.min(prevTop + paddleSpeed, 320));
        } else if (event.key === "ArrowUp") {
            setPaddleRightTop(prevTop => Math.max(prevTop - 10, 0));
        } else if (event.key === "ArrowDown") {
            setPaddleRightTop(prevTop => Math.min(prevTop + 10, 320));
        }
        const key = event.key;
        setKeyState(prevKeysState => ({
            ...prevKeysState, [key]: true
        }))
    };
    // 
    const handleKeyUp = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "w" || event.key === "s") {
            setPaddleLeftTop(0);
        } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
            setPaddleRightTop(0);
        }
        const key = event.key;
        setKeyState(prevKeysState => ({
            ...prevKeysState, [key]: true
        }))

    };

    // ball
    const moveBall = () => {
        if (!isPaused) {
            console.log("ball", ballPosition);
            // console.log("L-T", paddleLeftTop);
            // console.log("R-T", paddleRightTop);

            setBallPosition(prevPosition => ({
                x: prevPosition.x + ballSpeed.x,
                y: prevPosition.y + ballSpeed.y
            }));

            // T and B 
            if (ballPosition.y <= 0 || ballPosition.y >= 390) {
                ballSpeed.y *= -1;
            }

            // L and R
            if (ballPosition.x < 0 || ballPosition.x >= 790) {
                ballSpeed.x *= -1;
                // if (ballPosition.x <= 0) {
                //     alert("Punto 1")
                // } else {
                //     alert("punto 2")
                // }
                // resetGame();
            }

            if (
                // colision -LT
                (ballPosition.x < 20 && ballPosition.y + 10 >=
                    paddleLeftTop && ballPosition.y <= paddleLeftTop + 80) ||
                // colision -RT
                (ballPosition.x > 770 && ballPosition.y + 10 >=
                    paddleRightTop && ballPosition.y <= paddleRightTop + 80)
            ) {
                setBallSpeed(prevSpeed => ({ ...prevSpeed, x: -prevSpeed.x }));
            }
        }
    };


    const resetGame = () => {
        setBallPosition({ x: 395, y: 195 });
        setBallSpeed({ x: -2, y: 2 });
        setPaddleLeftTop(160);
        setPaddleRightTop(160);
        setIsPaused(false);
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
            onKeyUp={handleKeyUp}>
            <div
                className="relative bg-blue-300 w-800 h-400"
                style={{ pointerEvents: 'all' }}
            >
                <div className=" absolute bg-white h-80 w-10 left-0" style={{ top: paddleLeftTop }} />
                <div className=" absolute bg-black h-80 w-10 right-0" style={{ top: paddleRightTop }} />
                <div className="absolute bg-red-500 w-20 h-20 rounded-full" style={{ left: ballPosition.x, top: ballPosition.y }} />
            </div>
            <div className='flex flex-row justify-center items-center '>
                <button className='p-2 border bg-slate-400 m-2' onClick={pauseButton}>Pause</button>
                <button className='p-2 border bg-slate-400 m-2' onClick={resetButton}>Resset</button>
            </div>

        </section>
    );
};

export default Game;
