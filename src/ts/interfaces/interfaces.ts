import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import React, { CSSProperties, KeyboardEvent } from "react";

export interface plusProps {
    title: string | number;
    style?: CSSProperties
}
export interface MenuProps {
    click?: () => void;
    restartClick?: () => void;
    newCLick?: () => void;
    name?: string | number | null;
}
export interface LinkHomeProp {
    click: () => void;
    title: string;
}
export interface compCounterProps {
    counter: number;
    color: CSSProperties;
    name?: string | number | null;
}
export interface FooterProps {
    path: string;
    icon: IconDefinition;
    title: string;
}
export interface VersusProps {
    playerOne: string | number;
    playerTwo: string | number;
}

export interface ErrorProps { mes: string | boolean; }
export interface AuthProviderProps { children: JSX.Element }

export interface keyProps {
    w: boolean;
    s: boolean;
    i: boolean;
    k: boolean;
}
export interface paramasProp {
    x: number;
    y: number;
}
export interface CounterProps {
    one: number;
    two: number
}
export interface errorMessProps {
    value: string;
    input: string
}
export interface inputProps {
    limit: number;
    players: {
        one: string | number;
        two: string | number;
    }
}
export interface spielProps {
    ball: {
        position: paramasProp,
        speed: paramasProp,
    },
    paddle: {
        left: number,
        right: number
    }
}
export interface booleansProps {
    paused: boolean;
    menu: {
        paused: boolean;
        // starting is inpPut
        starting: boolean;
        win: boolean;
    }
    // point is setplusSecond and First
    points: {
        one: boolean | string;
        two: boolean | string;
    }
    errors: {
        players: boolean;
        value: boolean;
    }
    cards: {
        versus: boolean;
        rematch: boolean;
    }
}
export interface GameContextProps {
    spielState: spielProps
    vCounter: CounterProps
    inputValue: inputProps;
    winner: string | number | null;
    keyState: keyProps;
    animationsRef: React.MutableRefObject<number | undefined>;
    booleanState: booleansProps
    menuResume: () => void;
    NewGame: () => void;
    winResume: () => void;
    resetButton: () => void;
    startButton: () => void;
    changeValue: (operation: 'sum' | 'rest') => void;
    handleKeyDown: (e: KeyboardEvent<HTMLDivElement>) => void
    moveBall: () => void;
    playGame: () => void;
    handleInput: (player: 'one' | 'two') => (e: React.ChangeEvent<HTMLInputElement>) => void;
}