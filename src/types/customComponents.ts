import { IconType } from "react-icons";


export interface BUTTON {
    startIcon?: IconType,
    title: string,
    endIcon?: IconType,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    style?: React.CSSProperties;
    onMouseDown?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseUp?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    iconSize?: number
}

export interface PILL {
    startIcon?: IconType,
    title: string,
    endIcon?: IconType,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    style?: React.CSSProperties;
    disabled?: boolean;
    iconSize?: number
}

export interface SWITCH {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onColor?: string;
    offColor?: string;
    sliderColor?: string;
    height?: string;
    width?: string;
    on?:boolean;
    disabled?:boolean;
}

export interface SWITCH_STYLES{
    onColor?: string;
    offColor?: string;
    sliderColor?: string;
    height?: string;
    width?: string;
    disabled?:boolean;
}
