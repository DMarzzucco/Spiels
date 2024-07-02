import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { CSSProperties } from "react";

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
    path: string;
    title: string;
}

export interface CounterProps {
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