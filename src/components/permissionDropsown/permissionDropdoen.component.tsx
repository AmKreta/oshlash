import React, { useMemo, useCallback, useState } from "react";
import {
  PERMISSIONS,
  PERMISSION_DROPDOWN,
  PERMISSION_DROPDOWN_OPTION,
  SELECT_DROPDOWN_MENU_OPTION,
} from "../../types/customComponents";
import { share_permission_display_val } from "../../constants/constants";
import SelectDropdownMenu from "../selectDropdownMenu/selectDropdownMenu.component";

const PermissionDropdown: React.FC<PERMISSION_DROPDOWN> = (props:PERMISSION_DROPDOWN) => {
  const dropdownOptions = useMemo<
    SELECT_DROPDOWN_MENU_OPTION<PERMISSION_DROPDOWN_OPTION>[]
  >(() => {
    return [
      {
        value: {
          title: PERMISSIONS.FULL_ACESS,
          displayVal: share_permission_display_val[PERMISSIONS.FULL_ACESS],
        },
      },
      {
        value: {
          title: PERMISSIONS.CAN_EDIT,
          displayVal: share_permission_display_val[PERMISSIONS.CAN_EDIT],
        },
      },
      {
        value: {
          title: PERMISSIONS.CAN_VIEW,
          displayVal: share_permission_display_val[PERMISSIONS.CAN_VIEW],
        },
      },
      {
        value: {
          title: PERMISSIONS.NO_ACCESS,
          displayVal: share_permission_display_val[PERMISSIONS.NO_ACCESS],
        },
        style:{color:'red'}
      },
    ];
  }, []);

  const valueExtractor = useCallback((props: PERMISSION_DROPDOWN_OPTION) => {
    return props.displayVal;
  }, []);

  const [val,setVal]=useState(props.initial_permission||'');

  const onChange=(clickedIndex:number)=>{
    const clickedItem=dropdownOptions[clickedIndex].value;
    if(!clickedItem) return;
    const newPermission=valueExtractor(clickedItem) as PERMISSIONS;
    setVal(newPermission);
    props.onPermissionChange?.(newPermission);
  }

  return (
    <SelectDropdownMenu
      options={dropdownOptions}
      value={val}
      valueExtractor={valueExtractor}
      commonClickHandler={onChange}
      placeholder='No Access'
    />
  );
};

export default PermissionDropdown;
