import React from 'react';
import { useNavigate } from 'react-router-dom';

// Component imports
import ApptItemsList from './ApptItemsList';
import Calendar from './Calendar';

// MUI imports
import { Paper, Typography, Box, IconButton } from '@mui/material';
import { mdiArrowRightThin } from '@mdi/js';
import { Icon } from '@mdi/react';

// Model imports
import Patients from './../../../models/patient/PatientModel';
import Appointments from '../../../models/appointments/ApptModel';

type Props = {};

function ApptColumn({ }: Props) {

    const navigateTo = useNavigate();

    const [appointments, sptLoading, sptError] = Appointments.findAll();
    const [inputDate, setInputDate] = React.useState('');

    const appts = appointments?.docs.map(doc => doc.data());
    const filteredAppts = appts?.filter(appt => new Date(appt?.date.seconds * 1000).toLocaleDateString("sv-SE") == inputDate);

    return (
        <Paper sx={{ width: '100%', p: '16px' }}>
            <Typography sx={{ color: '#333', fontWeight: 700, fontSize: '18px' }}>
                Appointments
            </Typography>
            <Calendar date={inputDate} setDate={setInputDate} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0px 0px 15px 0px' }}>
                <Typography>
                    <strong> {filteredAppts?.length} </strong> appointments
                </Typography>
                <IconButton onClick={() => navigateTo('../appointments')}>
                    <Icon path={mdiArrowRightThin} size={'30px'}/>
                </IconButton>
            </Box>
            <ApptItemsList filteredAppts={filteredAppts}/>
        </Paper>
    )
}

export default ApptColumn;