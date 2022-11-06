import styled, { css } from "styled-components";
import { TEXT_INPUT_STYLE } from "../../types/customComponents";

const StyledInput = styled.div<TEXT_INPUT_STYLE>`
  border: ${(props) =>
    props.noBorder ? "none" : `1px solid ${props.theme.palette.border.main}`};
  display: flex;
  align-items: center;
  padding: 0px;
  height: 38px;
  width: 488px;
  margin: ${(props) => props.theme.spacing(2)}px auto;
  background: "#ffffff";
  box-shadow: ${(props) => props.theme.boxShadow[2]};
  border-radius: 6px;
  overflow: hidden;
  ${(props) =>
    props.transparent
      ? css`
          background: transparent;
          box-shadow: none;
          border-bottom: 1px solid ${props.theme.palette.border.main};
          border-radius: 0;
        `
      : null}

  & > .inputContainer {
    flex-grow: 1;
    display: flex;
    align-items: center;
    height: 100%;
    & > input {
      flex-grow: 1;
      height: 100%;
      border: none;
      outline: none;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      padding: 0 ${(props) => props.theme.spacing(2)}px;
      background: "#ffffff";
      ${(props) =>
        props.transparent
          ? css`
              background: transparent;
              box-shadow: none;
            `
          : null}
    }
  }

  &:active {
    border-color: ${(props) => props.theme.palette.primary.main};
  }
`;

export default StyledInput;
