import React from 'react';
import Metadata from '../../Metadata/Metada';
import StudentNavBar from '../StudentNavBar/StudentNavBar';
import StudentInfoPane from './StudentInfoPane/StudentInfoPane';
import Footer from '../../Footer/Footer';
function StudentInformation() {
    return (
        <>
            <Metadata />
            <StudentNavBar />
            <StudentInfoPane />
            <Footer/>
        </>
    );
}

export default StudentInformation;
