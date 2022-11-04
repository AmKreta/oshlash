import styled from "styled-components";

const DropdownItemContainer = styled.div`
  display: flex;
  align-items: center;
  height:auto;
  padding:${props=>`${props.theme.spacing(1.8)}px ${props.theme.spacing(1.5)}px`};
  &:not(:last-child){
    border-bottom:${(props) => `1px solid ${props.theme.palette.border.light}`};
  }

  & > img {
    height: 40px;
    width: 40px;
    margin-right:${props=>props.theme.spacing(2)}px;
  }

  & > .writtenContent {
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    flex-grow: 1;
    & > .title {
      font-size: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      color: ${(props) => props.theme.palette.text.dark};
    }
    & > .subTitle {
      overflow: hidden;
      text-overflow: ellipsis;
      color: ${(props) => props.theme.palette.text.light};
      font-size: 14px;
    }
  }
`;

export default DropdownItemContainer;
