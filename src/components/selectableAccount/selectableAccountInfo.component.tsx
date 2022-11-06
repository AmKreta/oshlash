import React from 'react';
import { PERSON } from 'redux-store';
import { SELECTABLE_ACCOUNT_INFO } from '../../types/customComponents';
import SelectableAccountContainer from './selectableAccountInfo.styles';

const SelectableAccount:React.FC<SELECTABLE_ACCOUNT_INFO>=(props:SELECTABLE_ACCOUNT_INFO)=>{
    return (
        <SelectableAccountContainer onClick={props.onClick}{...props.data_attributes} selected={props.selected}>
           <img src={props.account.profilePicture} />
           <span>{props.account.first_name} {(props.account as PERSON).last_name || ''}</span>
        </SelectableAccountContainer>
    );
}

export default SelectableAccount;