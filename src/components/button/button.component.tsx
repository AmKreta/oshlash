import React from 'react';
import StyledButton from './button.styled';
import { BUTTON } from "../../types/customComponents";

const Button: React.FC<BUTTON> = (props: BUTTON) => {
    return <StyledButton {...props} >
        {props.title}
    </StyledButton>;
}

export default Button;