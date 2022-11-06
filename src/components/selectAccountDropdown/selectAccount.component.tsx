import React, { useState } from "react";
import { IconContext } from "react-icons";
import Button from "../button/button.component";
import StyledDiv from "./selectAccountDropdown.styles";
import { BiHelpCircle } from "react-icons/bi";
import PermissionDropdown from "../permissionDropsown/permissionDropdoen.component";
import TextInput from "../textInput/textInput.component";
import { useSelector } from "react-redux";
import personAndGroupSelecttor from "../../selector/personAndGroupSelecttor";
import SelectAccount from "../selectAccountContainer/selectAccountContainer.component";
import { ACCOUNT } from "redux-store";

const SelectAccountDropdown: React.FC = () => {
  const { person, group } = useSelector(personAndGroupSelecttor);

  const [selectedAccount, setSelectedAccount] = useState(new Map<string,ACCOUNT>());

  const onPermissionChange = (newPermission: string) => {
    console.log(newPermission);
  };

  const onAccountAdd = (newAccount: ACCOUNT) => {
    setSelectedAccount((prevState) => {
      if (prevState.has(newAccount.id)) prevState.delete(newAccount.id);
      else prevState.set(newAccount.id, newAccount);
      return new Map(prevState);
    });
  };

  return (
    <StyledDiv>
      <div className="header">
        <TextInput transparent noBorder />
        <PermissionDropdown onPermissionChange={onPermissionChange} />
        <Button
          title="invite"
          lite
          style={{
            backgroundColor: "white",
            padding: "9px 13px",
            border: "1px solid #D1D5DB",
            width: "63px",
          }}
        />
      </div>

      <div className="main">
        <SelectAccount
          heading="Select a person"
          accountsList={person}
          onAccountClick={onAccountAdd}
          selectedAccounts={selectedAccount}
        />
        <SelectAccount
          heading="Select a group"
          accountsList={group}
          onAccountClick={onAccountAdd}
          selectedAccounts={selectedAccount}
        />
      </div>

      <div className="footer">
        <IconContext.Provider value={{ className: "icon" }}>
          <BiHelpCircle />
        </IconContext.Provider>
        <span>learn about sharing</span>
      </div>
    </StyledDiv>
  );
};

export default SelectAccountDropdown;
