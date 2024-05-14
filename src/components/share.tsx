import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faRotateLeft } from "../items/icons.ts";
import React, { CSSProperties } from "react"
import { Link } from "react-router-dom";

interface plusProps {
    title: string | number,
    style?: CSSProperties
}
export const Plus: React.FC<plusProps> = ({ title, style }) => {
    return (
        <div className=" absolute p-2 w-200 flex justify-center rounded-xl items-center text-slate-300 text-center text-20 "
            style={style}>
            <p className="p-2">Punto para  <br /><i className="font-bold text-30 border-b">{title}</i></p>
        </div>
    )
}
// Menu Pause
interface MenuProps {
    click?: () => void;
    restartClick?: () => void;
    newClick?: () => void;
    name?: string | number | null;
}
export const MenuPause: React.FC<MenuProps> = ({ click, newClick, restartClick }) => {
    return (
        <div className="absolute flex flex-col  items-center  w-300 h-400 bg-green-700 bg-opacity-80 rounded-xl shadow-xl shadow-slate-900">
            <div className="bg-slate-700 rounded-t-xl mb-3 w-full flex flex-row justify-center items-center">
                <img width="60" height="60" src="https://img.icons8.com/ios/50/c0c0c0/xbox-controller.png" alt="xbox-controller" />
                <div className="flex flex-col justify-center items-start mx-1 mt-2">
                    <i className="font-bold text-30 border-b border-slate-300 m-0">SpielPack</i>
                    <b className="text-10">TENNIS</b>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center p-2">
                <div className="flex flex-col justify-center items-center">
                    <Link className="m-2 p-2 border rounded-xl hover:bg-slate-300 hover:text-slate-800 hover:shadow-xl hover:shadow-slate-900 group" to={"/"}>
                        <FontAwesomeIcon icon={faHouse} />
                        <span className="absolute hidden group-hover:ml-6 group-hover:mt-2 group-hover:text-slate-300 group-hover:block">Exit</span>
                    </Link>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <button className="m-2 p-2 border rounded-xl hover:bg-slate-300 hover:text-slate-800 hover:shadow-xl hover:shadow-slate-900 group" onClick={restartClick}>
                        <FontAwesomeIcon icon={faRotateLeft} />
                        <span className="absolute hidden group-hover:-ml-10 group-hover:mt-2 group-hover:text-slate-300 group-hover:block">Reset</span>
                    </button>
                </div>
            </div>
            <div className="border-t mt-2 pt-3  flex flex-col w-full  ">
                <button className="m-2 p-2 border rounded-xl hover:bg-slate-300 hover:text-slate-800 hover:shadow-xl hover:shadow-slate-900" onClick={click}><p className="text-20">Return</p></button>
                <button className="m-2 p-2 border rounded-xl hover:bg-slate-300 hover:text-slate-800 hover:shadow-xl hover:shadow-slate-900" onClick={newClick}><p className="text-20">New Game</p></button>
            </div>
        </div>
    )
}
//MenuWin 
export const MenuWin: React.FC<MenuProps> = ({ newClick, restartClick, name }) => {
    return (
        <div className="absolute flex flex-col justify-center items-center p-2 w-300 h-400 bg-blue-600 rounded-xl shadow-xl shadow-slate-900">
            <h1 className="text-center border-b my-3 text-20"> V I C T O R I A <br /> TO <br /> <i className="font-bold text-50">!!{name}!!</i></h1>
            {/* <Link className="rounded-xl border p-3 hover:bg-slate-400 hover:text-slate-800" to={"/"}>Exit</Link> */}
            <div className="flex flex-row justify-center items-center p-2">
                <div className="flex flex-col justify-center items-center">
                    <Link className="m-2 p-2 border rounded-xl hover:bg-slate-300 hover:text-slate-800 hover:shadow-xl hover:shadow-slate-900 group" to={"/"}>
                        <FontAwesomeIcon icon={faHouse} />
                        <span className="absolute hidden group-hover:ml-5 group-hover:mt-2 group-hover:text-slate-300 group-hover:block">Exit</span>
                    </Link>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <button className="m-2 p-2 border rounded-xl hover:bg-slate-300 hover:text-slate-800 hover:shadow-xl hover:shadow-slate-900 group" onClick={restartClick}>
                        <FontAwesomeIcon icon={faRotateLeft} />
                        <span className="absolute hidden group-hover:-ml-10 group-hover:mt-2 group-hover:text-slate-300 group-hover:block">Reset</span>
                    </button>
                </div>
            </div>
            <div className="border-t mt-2 pt-3  flex flex-col w-full  ">
                <button className="m-2 p-2 text-20 border rounded-xl hover:bg-slate-300 hover:text-slate-800 hover:shadow-xl hover:shadow-slate-900" onClick={newClick}>New Game</button>
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
// counter
interface CounterProps {
    counter: number,
    color: CSSProperties,
    name?: string | number | null;
}
export const Counter: React.FC<CounterProps> = ({ counter, name, color }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <i className="font-bold border-b">{name}</i>
            <div style={color} className="border p-2 m-3 flex flex-col justify-center items-center rounded-full w-40 h-40">
                <b className="text-xl">
                    {counter}
                </b>
            </div>
        </div>
    )
}
// footer
interface FooterProps {
    path: string;
    icon: IconDefinition;
    title: string;
}
export const LinkFut: React.FC<FooterProps> = ({ path, icon, title }) => {
    return (
        <Link className="mx-3 flex flex-col justify-center items-center" to={path}>
            <FontAwesomeIcon icon={icon} className="text-30" />
            <p className="text-15">{title}</p>
        </Link>
    )

}
