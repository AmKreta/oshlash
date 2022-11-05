import React from "react";
import { IconContext } from "react-icons";
import Button from "../button/button.component";
import StyledDiv from "./selectAccountDropdown.styles";
import { BiHelpCircle } from "react-icons/bi";
import PermissionDropdown from "../permissionDropsown/permissionDropdoen.component";

const SelectAccountDropdown: React.FC = () => {
 
  const onPermissionChange=(newPermission:string)=>{
    console.log(newPermission);
  }

  return (
    <StyledDiv>
      <div className="header">
        <PermissionDropdown onPermissionChange={onPermissionChange}/>
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

      <div className="main"></div>

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
