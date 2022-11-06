import React from "react";
import { IconType } from "react-icons";
import { ACCOUNT } from "redux-store";

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
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties;
  disabled?: boolean;
  iconSize?: number;
  data_attributes?:{[key:`data-${string}`]:string|number};
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
export interface SELECT_DROPDOWN_MENU_STYLE {}

export interface SELECT_DROPDOWN_MENU_OPTION<T> {
  renderer?: JSX.Element;
  startIcon?: IconType;
  value: T;
  endIcon?: IconType;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  style?:React.CSSProperties;
}
export interface SELECT_DROPDOWN_MENU<T> extends SELECT_DROPDOWN_MENU_STYLE {
  header?: JSX.Element;
  commonClickHandler?: (clickedIndex: number) => void;
  valueExtractor?: (props: T) => string;
  options: SELECT_DROPDOWN_MENU_OPTION<T>[];
  footer?: JSX.Element;
  placeholder?: string;
  value: string;
}

export enum PERMISSIONS {
  FULL_ACESS = "FULL_ACCESS",
  CAN_EDIT = "CAN_EDIT",
  CAN_VIEW = "CAN_VIEW",
  NO_ACCESS = "NO_ACCESS",
}
export interface PERMISSION_DROPDOWN_OPTION {
  title: PERMISSIONS;
  displayVal: string;
}

export interface PERMISSION_DROPDOWN {
  onPermissionChange: (newPermission: PERMISSIONS) => any;
}

export interface SELECT_ACCOUNT{
  heading:string;
  accountsList:ACCOUNT[];
  onAccountClick:(clickedAccount:ACCOUNT)=>any;
  selectedAccounts?:Map<string,ACCOUNT>
}

export interface SELECTABLE_ACCOUNT_INFO_STYLES{
  selected?:boolean;
}
export interface SELECTABLE_ACCOUNT_INFO extends SELECTABLE_ACCOUNT_INFO_STYLES{
  account:ACCOUNT;
  onClick?:(e:React.MouseEvent<HTMLDivElement>)=>any;
  data_attributes?:{[key:`data-${string}`]:string|number};
}





