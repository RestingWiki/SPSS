import React from "react";
import Metadata from "../Metadata/Metada";
import NavBar from "../NavBar/NavBar";
import HeroSection from "./HeroSection/HeroSection";

function HomePage(){
    return(
        <>
            <Metadata/>
            <NavBar></NavBar>
            <HeroSection/>
        </>
    );
}

export default HomePage