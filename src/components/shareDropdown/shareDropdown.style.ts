import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top:8px;
  height:252px;
  width:512px;
  border: ${(props) => `1px solid ${props.theme.palette.border.light}`};
  overflow: hidden;
  border-radius: ${(props) => props.theme.spacing(1)}px;
  box-shadow: ${(props) => props.theme.boxShadow[0]};

`;

export default StyledDiv;
