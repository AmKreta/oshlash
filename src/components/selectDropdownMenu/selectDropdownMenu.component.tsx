import React, { useState } from "react";
import { SELECT_DROPDOWN_MENU } from "../../types/customComponents";
import SelectDropdownMenuContainer from "./selectDropdownMenu.styles";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IconContext } from "react-icons";

const SelectDropdownMenu: React.FC<SELECT_DROPDOWN_MENU<any>> = (
  props: SELECT_DROPDOWN_MENU<any>
) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDropdown = () => setIsExpanded((prevState) => !prevState);

  const clickHandler=function(e:React.MouseEvent<HTMLDivElement>){
    const el=e.currentTarget as HTMLDivElement;
    const clickedIndex=parseInt(el.dataset['index']!);
    props.commonClickHandler?.(clickedIndex);
    toggleDropdown();
  }

  return (
    <SelectDropdownMenuContainer>
      <div className="valueContainer" onClick={toggleDropdown}>
        <span>{props.value || props.placeholder}</span>
        <IconContext.Provider value={{ className: "downArrowIcon" }}>
          <MdKeyboardArrowDown />
        </IconContext.Provider>
      </div>
      {isExpanded ? (
        <>
          <div className="dropdown">
            {props.header}
            <div className="menuOptions">
              {props.options?.map((item, index) => {
                if (item.renderer) return item.renderer;
                return (
                  <div data-index={index} className="menuOption" onClick={item.onClick || clickHandler}>
                    {item.startIcon ? (
                      <span>
                        <item.startIcon />
                      </span>
                    ) : null}
                    <span className="val" style={item.style}>
                      {props.valueExtractor?.(item.value) || item.value}
                    </span>
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
          </div>
          <div className="overlay" onClick={toggleDropdown} />
        </>
      ) : null}
    </SelectDropdownMenuContainer>
  );
};

export default SelectDropdownMenu;
