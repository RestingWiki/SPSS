import React from "react";
import Metadata from "../Metadata/Metada";
import NavBar from "../NavBar/NavBar";
import HeroSection from "./HeroSection/HeroSection";
import Footer from "../Footer/Footer";

function HomePage(){
    return(
        <>
            <Metadata/>
            <NavBar></NavBar>
            <HeroSection/>
            <Footer/>
        </>
    );
}

export default HomePage