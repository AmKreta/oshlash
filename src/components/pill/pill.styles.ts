import styled from "styled-components";

const PillContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 4px;
  height: 28px;
  background: #e5e7eb;
  border-radius: 4px;
  box-sizing: border-box;
  flex-wrap: nowrap;
  
  margin:0 4px;

  & > .startIcon {
    margin-right: 4px;
  }

  & > .endIcon {
    margin-left: 4px;
  }

  & > .icon {
    display: flex;
  justify-content: center;
  align-items: center;
  }

  & > .title {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #111827;
    white-space: nowrap;
  }

  &:hover{
    cursor: pointer;
  }
`;

export default PillContainer;
