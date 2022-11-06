import React from "react";
import { PILL } from "../../types/customComponents";
import PillContainer from "./pill.styles";

const Pill: React.FC<PILL> = (props: PILL) => {
  return (
    <PillContainer onClick={props.onClick} {...props.data_attributes}>
      {props.startIcon ? (
        <div className="icon startIcon">
          <props.startIcon />
        </div>
      ) : null}
      <div className="title">{props.title}</div>
      {props.endIcon ? (
        <div className="icon endIcon">
          <props.endIcon />
        </div>
      ) : null}
    </PillContainer>
  );
};

export default Pill;
