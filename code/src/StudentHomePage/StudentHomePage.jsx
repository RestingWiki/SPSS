import React from "react";
import Metadata from "../Metadata/Metada";
import StudentNavBar from "./StudentNavBar/StudentNavBar";
import StudentHero from "./StudentHero/StudentHero";
import Footer from "../Footer/Footer";

function StudentHomePage(){
    return(
        <>
            <Metadata/>
            <StudentNavBar/>
            <StudentHero/>
            <Footer/>
        </>
    );
}

export default StudentHomePage