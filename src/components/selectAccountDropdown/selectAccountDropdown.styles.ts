import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 8px;
  min-height: 252px;
  width: 512px;
  border: ${(props) => `1px solid ${props.theme.palette.border.light}`};
  overflow: hidden;
  border-radius: ${(props) => props.theme.spacing(1)}px;
  box-shadow: ${(props) => props.theme.boxShadow[0]};
  display: flex;
  flex-flow: column nowrap;

  & > .main {
    flex-grow: 1;
  }

  & > .header {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    gap: 10px;
    height: 58px;
    background: #f3f4f6;
    border-bottom: 1px solid #e5e7eb;
    border-radius: 8px 8px 0px 0px;
  }

  & > .footer {
    padding: 8px 12px;
    gap: 10px;
    height: 36px;
    background: #f3f4f6;
    border-top: 1px solid #e5e7eb;
    border-radius: 0px 0px 8px 8px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & > .icon {
      color: ${(props) => props.theme.palette.text.light};
    }
    
    & > span {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: ${(props) => props.theme.palette.text.light};
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

export default StyledDiv;
