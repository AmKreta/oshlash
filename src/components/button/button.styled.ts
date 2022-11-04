import styled from "styled-components";

const StyledButton=styled.button`
    padding: ${(props)=>`${props.theme.spacing(1.5)}px ${props.theme.spacing(2.5)}px`};
    font-size: 14px;
    font-weight:500;
    background-color:${props=>props.theme.palette.text.dark};
    color:${props=>props.theme.palette.paper.light};
    border:none;
    border-radius:${props=> props.theme.spacing()}px;
    display:flex;
    align-items:center;
    transition:'.25s ease-in-out';
    height:36px;
    width:95px;

    &>.buttonIcon{
        display:flex;
        align-items:center;
        justify-content:center;
        &>svg{
            height:14px;
            width:14px;
        }
    }

    &>.startIcon{
        margin-right:${props=>props.theme.spacing(.5)}px;
    }

    &>.endIcon{
        margin-left:${props=>props.theme.spacing(.5)}px;
    }

    &:hover{
        box-shadow:${props=>`0 1px 2px ${props.theme.palette.text.light}`};
        cursor:pointer;
    }

    &:active{
        transform:scale(.98);
    }

    &:focus{
        outline:${props=>`3px solid ${props.theme.palette.text.light}`};
    }
`;

export default StyledButton;