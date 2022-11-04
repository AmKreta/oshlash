import styled from "styled-components";
import { SWITCH_STYLES } from "../../types/customComponents";

const StyledSwitch = styled.span<SWITCH_STYLES>`
  height: ${(props) => props.height || "24px"};
  width: ${(props) => props.height || "44px"};
  border-radius: 12px;
  background-color: ${(props) =>
    props.offColor || props.theme.palette.border.light};
  position: relative;
  display: inline-block;
  transition: 0.25s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    height: 90%;
    aspect-ratio: 1/1;
    box-shadow: ${(props) => props.theme.boxShadow[1]};
    background-color: white;
    border-radius: 50%;
    transition: 0.25s ease-in-out;
  }

  &.on {
    background-color: ${(props) =>
      props.onColor || props.theme.palette.primary.main};
    &::after {
      left: calc(100%);
      transform: translate(-105%, -50%);
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

export default StyledSwitch;
