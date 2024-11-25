import React from "react";
import { Link } from "react-router-dom";
import './StudentHero.css'

function StudentHero(){
    return(
        <>
            <section class="hero-student">
                <div class="hero-student-overlay"></div>
                <div class="hero-student-content">
                    <h1>Chào mừng sinh viên quay trở lại với</h1>
                    <h1>Hệ Thống In Bách Khoa</h1>
                </div>
            </section>
        </>
    )
}

export default StudentHero