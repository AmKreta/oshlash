import React from "react";
import { SELECT_DROPDOWN_MENU } from "../../types/customComponents";
import SelectDropdownMenuContainer from "./selectDropdownMenu.styles";

const SelectDropdownMenu: React.FC<SELECT_DROPDOWN_MENU> = (
  props: SELECT_DROPDOWN_MENU
) => {
  return (
    <SelectDropdownMenuContainer>
      {props.header}
      <div className="menuOptions">
        {props.options?.map((item, index) => {
          if (item.renderer) return item.renderer;
          return (
            <div data-index={index}>
              {item.startIcon ? (
                <span>
                  <item.startIcon />
                </span>
              ) : null}
              <span>{props.valueExtractor?.(item.value) || item.value}</span>
              {item.endIcon ? (
                <span>
                  <item.endIcon />
                </span>
              ) : null}
            </div>
          );
        })}
      </div>
      {props.footer}
    </SelectDropdownMenuContainer>
  );
};

export default SelectDropdownMenu;
