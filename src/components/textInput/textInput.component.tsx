import React from "react";
import { TEXT_INPUT } from "../../types/customComponents";
import StyledInput from "./textInput.styles";

const TextInput: React.FC<TEXT_INPUT> = (props: TEXT_INPUT) => {
  return (
    <StyledInput>
      {props.startComponent}
      <div className="inputContainer">
        {props.startIcon ? (
          <span>
            <props.startIcon />
          </span>
        ) : null}
        <input onFocus={props.onFocus} onChange={props.onChange} onBlur={props.onBlur}/>
        {props.endIcon ? (
          <span>
            <props.endIcon />
          </span>
        ) : null}
      </div>
      {props.endComponent}
    </StyledInput>
  );
};

export default TextInput;
