import React from "react";
import StyledButton from "./button.styled";
import { BUTTON } from "../../types/customComponents";

const Button: React.FC<BUTTON> = (props: BUTTON) => {
  return (
    <StyledButton {...props}>
      {props.startIcon ? (
        <span className="buttonIcon startIcon">
          <props.startIcon />
        </span>
      ) : null}
      <span>{props.title}</span>
      {props.endIcon ? (
        <span className="buttonIcon endIcon">
          <props.endIcon />
        </span>
      ) : null}
    </StyledButton>
  );
};

export default Button;
