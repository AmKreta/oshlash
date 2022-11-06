import React from "react";
import { SHARE_DROPDOWN_ITEM } from "../../types/customComponents";
import DropdownItemContainer from "./shareDropdownItem.styles";

const ShareDropdownItemContainer: React.FC<SHARE_DROPDOWN_ITEM> = (
  props: SHARE_DROPDOWN_ITEM
) => {
  return (
    <DropdownItemContainer>
      {props.image ? <img src={props.image} style={props.imageStyle} /> : null}
      <div className="writtenContent">
        <div className="title">{props.title}</div>
        {props.subtitle ? (
          <div className="subTitle">{props.subtitle}</div>
        ) : null}
      </div>
      {props.rightComponent}
    </DropdownItemContainer>
  );
};

export default ShareDropdownItemContainer;
