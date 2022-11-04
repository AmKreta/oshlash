import React from 'react';
import { PILL } from '../../types/customComponents';
import PillContainer from './pill.styles';

const Pill:React.FC<PILL>=(props:PILL)=>{
    return (
        <PillContainer>
            pill container
        </PillContainer>
    );
}

export default Pill;