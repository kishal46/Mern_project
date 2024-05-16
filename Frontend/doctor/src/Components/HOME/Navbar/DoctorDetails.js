import React from 'react';

const DoctorDetails = ({ doctorData }) => {
    return (
        <div>
            <h2>Doctor Details</h2>
            <p>Name: {doctorData.doctorName}</p>
            <p>Qualification: {doctorData.qualification}</p>
            <p>Specialist: {doctorData.specialist}</p>
            <p>Timing: {doctorData.timing}</p>
        </div>
    );
}

export default DoctorDetails;
