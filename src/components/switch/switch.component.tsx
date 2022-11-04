import React, { useState } from "react";
import { SWITCH } from "../../types/customComponents";
import StyledSwitch from "./switch.style";

const Switch: React.FC<SWITCH> = (props: SWITCH) => {
  const [isOn, setIsOn] = useState<boolean>(false);

  function shouldAddOnClassName() {
    if (typeof props.on !== "undefined") return props.on;
    return isOn;
  }

  const clickHandler = function (e: React.MouseEvent<HTMLSpanElement>) {
    setIsOn((prevState) => !prevState);
  };

  return (
    <StyledSwitch
      className={shouldAddOnClassName() ? "on" : undefined}
      onClick={props.onClick || clickHandler}
    />
  );
};

export default Switch;
