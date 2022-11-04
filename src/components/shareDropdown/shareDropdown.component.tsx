import React from "react";
import ShareDropdownItemContainer from "../shareDropdownItem/shareDropdownItem.component";
import StyledDiv from "./shareDropdown.style";
import ShareTOWebTitleIcon from "../../assets/shareToWebTitleIcon.svg";
import Switch from "../switch/switch.component";
import TextInput from "../textInput/textInput.component";
import Button from "../button/button.component";
import { SHARE_DROPDOWN } from "../../types/customComponents";

const ShareDropdown: React.FC<SHARE_DROPDOWN> = (props:SHARE_DROPDOWN) => {
  return (
    <StyledDiv>
      <ShareDropdownItemContainer
        title="Share to web"
        subtitle="Publish and share link with anyone123"
        image={ShareTOWebTitleIcon}
        imageStyle={{ marginLeft: "12px", height: "36px", width: "36px" }}
        rightComponent={<Switch />}
      />
      <TextInput
        endComponent={<Button title="invite" lite borderRadius={2} />}
        onFocus={props.openSelectAccountDropdown as any}
      />
    </StyledDiv>
  );
};

export default ShareDropdown;
