import React, { CSSProperties, HTMLAttributes } from "react"

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
}
export const MenuPause: React.FC<MenuProps> = ({ click }) => {
    return (
        <div className="absolute flex flex-col justify-center items-center p-2 w-300 h-400 bg-green-300">
            <button onClick={click}>Return</button>
        </div>
    )
}