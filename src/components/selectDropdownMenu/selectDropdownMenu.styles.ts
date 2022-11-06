import styled from "styled-components";

const SelectDropdownMenuContainer = styled.div`
  position: relative;

  & > .valueContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 7px 9px 7px 11px;
    gap: 8px;
    width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 30px;
    & > span {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: ${(props) => props.theme.palette.text.light};
    }
    & > .downArrowIcon {
      color: ${(props) => props.theme.palette.text.light};
    }
    &:hover {
      cursor: pointer;
    }
  }

  & > .dropdown {
    position: absolute;
    top: calc(100% + 2px);
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px;
    gap: 4px;
    position: absolute;
    width: 172px;
    height: 172px;
    background: #ffffff;
    border: 1px solid #f3f4f6;
    box-shadow: ${(props) => props.theme.boxShadow[3]};
    border-radius: 4px;
    z-index: 2;

    & > .menuOptions {
      & > .menuOption {
        display: flex;
        align-items: flex-start;
        padding: 8px;
        width: 156px;
        height: 36px;
        background: #ffffff;
        border-radius: 4px;
        transition: 0.25s ease-in-out;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        display: flex;
        align-items: center;
        color: #111827;

        & > .val {
          width: 100%;
          flex-grow: 1;
          text-align: left;
          display: inline-block;
        }

        &:hover {
          background: #f3f4f6;
          cursor: pointer;
        }
      }
    }
  }

  & > .overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    position: fixed;
  }
`;

export default SelectDropdownMenuContainer;
