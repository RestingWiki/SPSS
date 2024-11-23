import React from 'react';
import Metadata from '../Metadata/Metada';
import NavBar from '../NavBar/NavBar';
import LoginSelectionPane from './LoginSelectionPane/LoginSelectionPane';

function LoginSelectionPage(){
    return(
        <>
            <Metadata/>
            <NavBar/>   
            <LoginSelectionPane/>      
        </>

    )
}


export default LoginSelectionPage