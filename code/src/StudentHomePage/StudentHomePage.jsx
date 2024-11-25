import React from "react";
import Metadata from "../Metadata/Metada";
import StudentNavBar from "./StudentNavBar/StudentNavBar";
import StudentHero from "./StudentHero/StudentHero";


function StudentHomePage(){
    return(
        <>
            <Metadata/>
            <StudentNavBar/>
            <StudentHero/>
        </>
    );
}

export default StudentHomePage