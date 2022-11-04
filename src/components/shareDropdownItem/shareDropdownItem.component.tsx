import React from "react";
import DropdownItemContainer from "./shareDropdownItem.styles";

interface SHARE_ITEM_DROPDOWN_ITEM {
  title: string;
  subtitle: string;
  image?: string;
  rightComponent?: JSX.Element;
  imageStyle?: React.CSSProperties;
}

const ShareDropdownItemContainer: React.FC<SHARE_ITEM_DROPDOWN_ITEM> = (
  props: SHARE_ITEM_DROPDOWN_ITEM
) => {
  return (
    <DropdownItemContainer>
      {props.image ? <img src={props.image} style={props.imageStyle} /> : null}
      <div className="writtenContent">
        <div className="title">{props.title}</div>
        <div className="subTitle">{props.subtitle}</div>
      </div>
      {props.rightComponent}
    </DropdownItemContainer>
  );
};

export default ShareDropdownItemContainer;
