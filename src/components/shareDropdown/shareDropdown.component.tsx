import React from "react";
import ShareDropdownItemContainer from "../shareDropdownItem/shareDropdownItem.component";
import StyledDiv from "./shareDropdown.style";
import ShareTOWebTitleIcon from "../../assets/shareToWebTitleIcon.svg";
import Switch from "../switch/switch.component";
import TextInput from "../textInput/textInput.component";
import Button from "../button/button.component";
import { SHARE_DROPDOWN } from "../../types/customComponents";
import { useSelector } from "react-redux";
import { selectedAccountSelectorAsObj } from "../../selector/selectedAccountSelector";
import PermissionDropdown from "../permissionDropsown/permissionDropdoen.component";
import { ACCOUNT, GROUP, PERSON } from "redux-store";

const ShareDropdown: React.FC<SHARE_DROPDOWN> = (props: SHARE_DROPDOWN) => {
  const selectedAccounts = useSelector(selectedAccountSelectorAsObj);

  return (
    <StyledDiv>
     <div className="fixed">
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
     </div>
      <ShareDropdownItemContainer
        title="Everyone at workspace"
        subtitle="25 workspace members"
        rightComponent={
          <PermissionDropdown onPermissionChange={(newPermission) => {}} />
        }
      />
      {Object.keys(selectedAccounts).map((id) => {
        const account=selectedAccounts[id] as any as ACCOUNT;
        return (
          <ShareDropdownItemContainer
            title={`${account.first_name} ${
              (account as PERSON).last_name || ""
            }`}
            subtitle={(account as GROUP).members?`${(account as GROUP).members} workspace members`:null}
            rightComponent={
              <PermissionDropdown onPermissionChange={(newPermission) => {}} initial_permission={(account as any).permission}/>
            }
            image={account.profilePicture}
          />
        );
      })}
    </StyledDiv>
  );
};

export default ShareDropdown;
