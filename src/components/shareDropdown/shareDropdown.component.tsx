import React from "react";
import ShareDropdownItemContainer from "../shareDropdownItem/shareDropdownItem.component";
import StyledDiv from "./shareDropdown.style";
import ShareTOWebTitleIcon from '../../assets/shareToWebTitleIcon.svg';
import Switch from "../switch/switch.component";

const ShareDropdown: React.FC = () => {
  return (
    <StyledDiv>
      <ShareDropdownItemContainer
        title="Share to web"
        subtitle="Publish and share link with anyone123"
        image={ShareTOWebTitleIcon}
        imageStyle={{marginLeft:'12px', height:'36px', width:'36px'}}
        rightComponent={<Switch />}
      />
       <ShareDropdownItemContainer
        title="Share to web"
        subtitle="Publish and share link with anyone"
        image={ShareTOWebTitleIcon}
      />
    </StyledDiv>
  );
};

export default ShareDropdown;
