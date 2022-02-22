import React from 'react';
import './scrollbar.css'

// MUI imports
import { Box, Typography } from '@mui/material';
import { Icon } from '@mdi/react';
import { mdiAlertCircle } from '@mdi/js';

// Component imports
import ApptItem from './ApptItem';

// Firebase imports
import { DocumentData, DocumentSnapshot, QuerySnapshot } from 'firebase/firestore';

// Model imports
import { iPatient } from '../../../models/patient/PatientSchema';
import Appointments from '../../../models/appointments/ApptModel';
import Patients from './../../../models/patient/PatientModel';


type Props = {
    filteredAppts: any[] | undefined
};

function ApptItemsList({ filteredAppts }: Props) {

    let key = 0;

    return (
        <Box className='items-list-dashboard' sx={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '395px', overflowY: 'auto' }}>
            {
                filteredAppts && filteredAppts?.map((appt) => {
                    return <ApptItem key={key++} patientId={appt.patient_id} />
                })
            }

            {
                (filteredAppts?.length == 0) &&
                <Typography sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: '10px',
                    gap: '5px',
                    background: '#ebc9c5',
                    borderRadius: '8px',
                    color: '#ae3a44',
                    fontWeight: 500
                }}>
                    <Icon path={mdiAlertCircle} size={'20px'} color={'#af332e'} />
                    No appointments for this date
                </Typography>
            }

        </Box>
    )
}

export default ApptItemsList;