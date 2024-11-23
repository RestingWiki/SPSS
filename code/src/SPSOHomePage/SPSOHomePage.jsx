import React from "react";
import Metadata from "../Metadata/Metada";
import SPSONavBar from "./SPSONavBar/SPSONavbar";
import SPSOHero from "./SPSOHero/SPSOHero";

function SPSOHomePage(){
    return(
        <>
            <Metadata/>
            <SPSONavBar/>
            <SPSOHero/>
        </>
    );
}

export default SPSOHomePage