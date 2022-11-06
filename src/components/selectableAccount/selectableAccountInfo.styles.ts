import styled, { css } from "styled-components";
import { SELECTABLE_ACCOUNT_INFO_STYLES } from "../../types/customComponents";

const SelectableAccountContainer = styled.div<SELECTABLE_ACCOUNT_INFO_STYLES>`
  display: flex;
  align-items: center;
  transition: 0.25s ease-in-out;
  padding:${props=>props.theme.spacing(.5)}px 0;
  border-radius: ${props=>props.theme.spacing(.5)}px;

  ${props=>props.selected
    ?css`
        background: #f3f4f6;
    `
    :''}

  &:hover {
    background: #f3f4f6;
    cursor: pointer;
  }
  & > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: ${(props) => props.theme.spacing(1)}px;
    object-fit: cover;
    object-position: center;
  }

  & > span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #111827;
    flex-grow: 1;
  }
`;

export default SelectableAccountContainer;
