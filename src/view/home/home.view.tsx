import React from 'react';
import Button from '../../components/button/button.component';
import {MdShare} from 'react-icons/md';

const Home:React.FC=()=>{
    return (
        <Button title='Share' endIcon={MdShare}/>
    );
}

export default Home;