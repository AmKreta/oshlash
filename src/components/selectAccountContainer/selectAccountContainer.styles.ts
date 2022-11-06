import styled from "styled-components";

const SelectAccountContainer = styled.div`
  padding: ${(props) => props.theme.spacing(1)}px;
  & > .header {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #374151;
  }
`;

export default SelectAccountContainer;
