import React, { useState } from "react";
import ReactDom from "react-dom";
import { SELECT_DROPDOWN_MENU } from "../../types/customComponents";
import SelectDropdownMenuContainer, {
  Dropdown, Overlay,
} from "./selectDropdownMenu.styles";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IconContext } from "react-icons";

const SelectDropdownMenu: React.FC<SELECT_DROPDOWN_MENU<any>> = (
  props: SELECT_DROPDOWN_MENU<any>
) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0, display: false });

  const toggleDropdown = (e: React.MouseEvent<HTMLDivElement> | null) => {
    if (!e) {
      setIsExpanded(false);
      setPos((prevState) => ({ ...prevState, display: false }));
    } else {
      const el = e.currentTarget as HTMLDivElement;
      const { top, left } = el.getBoundingClientRect();
      setPos({ x: left, y: top, display: true });
      setIsExpanded(true);
    }
  };

  const clickHandler = function (e: React.MouseEvent<HTMLDivElement>) {
    const el = e.currentTarget as HTMLDivElement;
    const clickedIndex = parseInt(el.dataset["index"]!);
    props.commonClickHandler?.(clickedIndex);
    toggleDropdown(null);
  };

  return (
    <SelectDropdownMenuContainer>
      <div className="valueContainer" onClick={toggleDropdown}>
        <span>{props.value || props.placeholder}</span>
        <IconContext.Provider value={{ className: "downArrowIcon" }}>
          <MdKeyboardArrowDown />
        </IconContext.Provider>
      </div>
      {isExpanded
        ? ReactDom.createPortal(
            <>
              <Dropdown
                className="dropdown"
                style={{
                  top: pos.y,
                  left: pos.x,
                  opacity: pos.display ? 1 : 0,
                }}
              >
                {props.header}
                <div className="menuOptions">
                  {props.options?.map((item, index) => {
                    if (item.renderer) return item.renderer;
                    return (
                      <div
                        data-index={index}
                        className="menuOption"
                        onClick={item.onClick || clickHandler}
                      >
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
              </Dropdown>
              <Overlay className="overlay" onClick={()=>toggleDropdown(null)} />
            </>,
            document.body
          )
        : null}
    </SelectDropdownMenuContainer>
  );
};

export default SelectDropdownMenu;
