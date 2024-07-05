import { useEffect } from 'react';
import { BtnEc, Counter, ErrorMes, MenuPause, MenuWin, Plus, Rematch, VersusComp } from '../components/assets/share.tsx';
import { faHouse, faPlay } from "../icons/icons.ts";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { gameState } from '../context/Game.context.tsx';
import { ErrorMess } from '../components/functions/comps.ts';

function Game() {
    const {
        spielState, inputValue, winner, menuResume, NewGame, winResume,
        resetButton, startButton, handleInput, changeValue, handleKeyDown,
        moveBall, animationsRef, vCounter, booleanState
    } = gameState()

    useEffect(() => {
        animationsRef.current = requestAnimationFrame(moveBall)
        return () => {
            if (animationsRef.current) {
                cancelAnimationFrame(animationsRef.current)
            }
        }
    }, [moveBall, animationsRef])
    return (
        <section className='flex flex-col justify-center items-center h-screen '
            tabIndex={0}
            onKeyDown={handleKeyDown}>
            <div
                className="relative bg-blue-300 w-800 h-400"
                style={{ pointerEvents: 'all' }}>
                <div className=" absolute bg-blue-600 border border-black h-80 w-10 left-0"
                    style={{ top: spielState.paddle.left }} />
                <div className=" absolute bg-green-600 border border-black h-80 w-10 right-0"
                    style={{ top: spielState.paddle.right }} />
                <div className="absolute bg-red-500 border border-black w-20 h-20 rounded-full"
                    style={{ left: spielState.ball.position.x, top: spielState.ball.position.y }} />
            </div>
            {booleanState.menu.starting ?
                <div className="rounded-xl w-full h-full absolute flex flex-col justify-center items-center  text-slate-900">
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='m-0 font-bold text-20 text-slate-700 '>L I M I T</h1>
                        <div className='flex flex-row justify-center items-center'>
                            <BtnEc click={() => changeValue('rest')} name='-' />
                            <input
                                className='bg-slate-700 text-slate-300 w-40 h-40 text-center rounded-xl m-2 '
                                type="text"
                                value={inputValue.limit}
                                readOnly placeholder="Name" />
                            <BtnEc click={() => changeValue("sum")} name='+' />
                        </div>
                    </div>
                    {booleanState.errors.value ? <ErrorMes mes={ErrorMess.value} /> : null}
                    <input
                        className='border-4 font-bold text-center text-slate-300 rounded-xl p-3 bg-green-800 border-green-400 my-2'
                        type="text"
                        value={inputValue.players.one}
                        onChange={handleInput("one")}
                        placeholder="P L A Y E R  1"
                    />
                    <input
                        className='border-4 font-bold text-center text-slate-300 rounded-xl p-3 bg-blue-800 border-blue-400'
                        type="text"
                        value={inputValue.players.two}
                        onChange={handleInput("two")}
                        placeholder="P L A Y E R  2"
                    />
                    {booleanState.errors.players ? <ErrorMes mes={ErrorMess.input} /> : null}
                    <div className='flex flex-row justify-center items-center my-2'>
                        <button className="m-2 p-2 text-20 border rounded-xl hover:bg-slate-300 hover:text-slate-800 hover:shadow-xl hover:shadow-slate-900"
                            onClick={startButton}>
                            <FontAwesomeIcon icon={faPlay} />
                        </button>
                        <Link className="m-2 p-2 text-20 border rounded-xl hover:bg-slate-300 hover:text-slate-800 hover:shadow-xl hover:shadow-slate-900" to={"/"}>
                            <FontAwesomeIcon icon={faHouse} />
                        </Link>
                    </div>
                </div>
                :
                <div className='flex flex-row justify-center items-center w-full'>
                    <Counter
                        name={inputValue.players.two}
                        color={{ "background": "#2719e4" }}
                        counter={vCounter.two}>
                    </Counter>
                    <div className='border rounded-full w-40 h-40 p-3 m-1 flex justify-center items-center'>
                        <b>{inputValue.limit}</b>
                    </div>
                    <Counter
                        name={inputValue.players.one}
                        color={{ "background": "#06a106", }}
                        counter={vCounter.one}>
                    </Counter>
                </div>
            }
            {booleanState.points.one ?
                (<Plus title={inputValue.players.one} style={{
                    "background": "#06a106",
                    "border": "1px solid #006400"
                }} />) : null
            }
            {booleanState.points.two ?
                (<Plus title={inputValue.players.two} style={{
                    "background": "#2719e4",
                    "border": "1px solid #1006a1"
                }} />)
                : null
            }
            {!booleanState.menu.starting && booleanState.menu.paused ? <MenuPause newCLick={NewGame} click={menuResume} restartClick={resetButton} /> : null}
            {!booleanState.menu.starting && booleanState.menu.win ? <MenuWin name={winner} newCLick={NewGame} restartClick={winResume} /> : null}
            {booleanState.cards.versus ? <VersusComp playerOne={inputValue.players.one} playerTwo={inputValue.players.two} /> : null}
            {booleanState.cards.rematch ? <Rematch playerOne={inputValue.players.one} playerTwo={inputValue.players.two} /> : null}
        </section>
    );
};

export default Game;
