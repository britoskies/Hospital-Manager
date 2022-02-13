import React from 'react';
import DiagnosesItem from './DiagnosesItem';
import Patients from './../../models/patient/PatientModel';
import { Timestamp } from 'firebase/firestore';

type Props = {
    date: Timestamp,
    symptoms: string,
    diagnosis: string,
    diagnosisDesc: string
};

function DiagnosesSlider({ date, symptoms, diagnosis, diagnosisDesc  }: Props) {
    return (
        <div>
            <DiagnosesItem
                date={date}
                symptoms={symptoms}
                diagnosis={diagnosis}
                diagnosisDesc={diagnosisDesc}
            />
        </div>
    )
}

export default DiagnosesSlider;