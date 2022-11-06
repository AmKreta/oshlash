import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 8px;
  min-height: 252px;
  width: 512px;
  max-height: 500px;
  overflow-y: scroll;
  border: ${(props) => `1px solid ${props.theme.palette.border.light}`};
  border-radius: ${(props) => props.theme.spacing(1)}px;
  box-shadow: ${(props) => props.theme.boxShadow[0]};

  & > .fixed {
    position: sticky;
    top: 0;
    background-color:white;
    z-index:2;
    padding-bottom:4px;
  }
`;

export default StyledDiv;
