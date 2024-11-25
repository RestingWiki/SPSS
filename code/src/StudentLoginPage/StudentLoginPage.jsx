import React, {useEffect} from 'react';
import Metadata from '../Metadata/Metada';
import NavBar from '../NavBar/NavBar';
import StudentLoginPane from './StudentLoginPane/StudentLoginPane';
function StudentLoginPage(){
    return(
        <>
            <Metadata/>
            <NavBar/>   
            <StudentLoginPane/>         
        </>

    )
}


export default StudentLoginPage