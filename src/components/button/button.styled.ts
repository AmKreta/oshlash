import styled from "styled-components";
import { BUTTON_STYLE } from "../../types/customComponents";

const StyledButton = styled.button<BUTTON_STYLE>`
  padding: ${(props) =>
    `${props.theme.spacing(1.5)}px ${props.theme.spacing(2.5)}px`};
  font-size: 14px;
  font-weight: 500;
  background-color: ${(props) =>
    props.lite
      ? props.theme.palette.border.light
      : props.theme.palette.text.dark};
  color: ${(props) =>
    props.lite
      ? props.theme.palette.text.main
      : props.theme.palette.paper.light};
  border: none;
  border-radius: ${(props) => props.borderRadius || props.theme.spacing()}px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: ".25s ease-in-out";
  height: 36px;
  width: 95px;

  & > .buttonIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    & > svg {
      height: 14px;
      width: 14px;
    }
  }

  & > .startIcon {
    margin-right: ${(props) => props.theme.spacing(0.5)}px;
  }

  & > .endIcon {
    margin-left: ${(props) => props.theme.spacing(0.5)}px;
  }

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export default StyledButton;
