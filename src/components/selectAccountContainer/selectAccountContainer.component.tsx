import React from "react";
import { SELECT_ACCOUNT } from "../../types/customComponents";
import SelectableAccount from "../selectableAccountInfo/selectableAccountInfo.component";
import SelectAccountContainer from "./selectAccountContainer.styles";

const SelectAccount: React.FC<SELECT_ACCOUNT> = (props: SELECT_ACCOUNT) => {

    const onClick=function(e:React.MouseEvent<HTMLDivElement>){
        const index=parseInt(e.currentTarget.dataset['index']!);
        const clickedItem=props.accountsList[index];
        props.onAccountClick(clickedItem);
    }

  return (
    <SelectAccountContainer>
      <div className="header">{props.heading}</div>
      <div className="accountsContainer">
        {props.accountsList.map((account, index) => (
          <SelectableAccount
            account={account}
            key={account.id}
            data_attributes={{ "data-index": index }}
            onClick={onClick}
            selected={props.selectedAccounts?.has(account.id)}
          />
        ))}
      </div>
    </SelectAccountContainer>
  );
};

export default SelectAccount;
