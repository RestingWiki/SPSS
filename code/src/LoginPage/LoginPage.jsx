import React, {useEffect} from 'react';
import Metadata from '../Metadata/Metada';
import NavBar from '../NavBar/NavBar';
import LoginPane from './LoginPane/LoginPane';
function LoginPage(){
    return(
        <>
            <Metadata/>
            <NavBar/>   
            <LoginPane/>         
        </>

    )
}


export default LoginPage