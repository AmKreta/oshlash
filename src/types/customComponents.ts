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
