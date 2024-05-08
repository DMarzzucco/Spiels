import React, { CSSProperties } from "react"
import { Link } from "react-router-dom";

interface plusProps {
    title: string,
    style?: CSSProperties
}
export const Plus: React.FC<plusProps> = ({ title, style }) => {
    return (
        <div className=" absolute p-2 w-200 flex justify-center rounded-xl items-center text-slate-300 text-center text-20 "
            style={style}>
            <p className="p-2">Punto para el jugador <br /> {title}</p>
        </div>
    )
}
// 
interface MenuProps {
    click?: () => void;
    restartClick?: () => void;
}
export const MenuPause: React.FC<MenuProps> = ({ click, restartClick }) => {
    return (
        <div className="absolute flex flex-col justify-center items-center p-2 w-300 h-400 bg-green-600 rounded-xl shadow-xl shadow-slate-900">
            <Link className="rounded-xl border p-3 hover:bg-slate-400 hover:text-slate-800" to={"/"}>Exit</Link>
            <div className="border-t mt-2 pt-3  flex flex-col w-full  ">
                <button className="m-2 p-2 border rounded-xl hover:bg-slate-300 hover:text-slate-800 hover:shadow-xl hover:shadow-slate-900" onClick={click}>Return</button>
                <button className="m-2 p-2 border rounded-xl hover:bg-slate-300 hover:text-slate-800 hover:shadow-xl hover:shadow-slate-900" onClick={restartClick}> Restart Game</button>
            </div>
        </div>
    )
}

// Link 
interface LinkHomeProp {
    path: string,
    title: string
}
export const LinkHome: React.FC<LinkHomeProp> = ({ path, title }) => {
    return (
        <Link className="m-2 p-2 border rounded-xl hover:bg-slate-300 hover:shadow-xl hover:shadow-slate-700" to={path}>
            <p>{title}</p>
        </Link>
    )
}