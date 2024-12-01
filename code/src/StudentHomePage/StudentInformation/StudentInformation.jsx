import React from 'react';
import Metadata from '../../Metadata/Metada';
import StudentNavBar from '../StudentNavBar/StudentNavBar';
import StudentInfoPane from './StudentInfoPane/StudentInfoPane';

function StudentInformation() {
    return (
        <>
            <Metadata />
            <StudentNavBar />
            <StudentInfoPane />
        </>
    );
}

export default StudentInformation;
