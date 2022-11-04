import React from "react";
import { IconType } from "react-icons";

export interface BUTTON_STYLE {
  lite?: boolean;
  borderRadius?: number;
}
export interface BUTTON extends BUTTON_STYLE {
  startIcon?: IconType;
  title: string;
  endIcon?: IconType;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
  onMouseDown?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseUp?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  iconSize?: number;
}

export interface PILL {
  startIcon?: IconType;
  title: string;
  endIcon?: IconType;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
  disabled?: boolean;
  iconSize?: number;
}

export interface SWITCH_STYLES {
  onColor?: string;
  offColor?: string;
  sliderColor?: string;
  height?: string;
  width?: string;
  disabled?: boolean;
}
export interface SWITCH extends SWITCH_STYLES {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  on?: boolean;
}

export interface SHARE_DROPDOWN_ITEM {
  title: string;
  subtitle: string;
  image?: string;
  rightComponent?: JSX.Element;
  imageStyle?: React.CSSProperties;
}

export interface TEXT_INPUT_STYLE {
  transparent?: boolean;
  error?: boolean;
  noBorder?: boolean;
}
export interface TEXT_INPUT extends TEXT_INPUT_STYLE {
  startComponent?: JSX.Element;
  endComponent?: JSX.Element;
  startIcon?: IconType;
  endIcon?: IconType;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export interface SHARE_DROPDOWN {
  openSelectAccountDropdown: Function;
}
