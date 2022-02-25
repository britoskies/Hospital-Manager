import React, { useContext } from 'react';

// MUI imports
import { Avatar, Box, Typography } from '@mui/material';

// App context
import { AppContext } from '../../../persistence/context';
import Patients from '../../../models/patient/PatientModel';

type Props = {
    patientId: string
};

function ApptItem({ patientId }: Props) {

    const { defaultDoctor } = useContext(AppContext)

    const [patient, ptLoading, ptError] = Patients.findById(`${patientId}`);

    return (
        <Box sx={{ background: '#F5F5F5', p: '20px', borderRadius: '10px' }}>
            <Typography sx={{ fontSize: '12px', fontWeight: 500, marginBottom: '10px' }}>
                {'8:00 am to 8:30 am'}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                <Avatar
                    alt={patient?.data()?.name}
                    src="/static/images/avatar/1.jpg"
                    variant="square"
                    sx={{ width: 38, height: 38, borderRadius: '5px', fontSize: '20px' }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '10px' }}>
                    <Typography sx={{ fontSize: '13px', fontWeight: 900 }}>
                        {patient?.data()?.name}
                    </Typography>
                    <Typography sx={{ fontSize: '11px', fontWeight: 400 }}>
                        Consultation with Dr. {defaultDoctor.name}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ApptItem;