import React from 'react';
import { Timestamp } from 'firebase/firestore';
import { Box, Typography } from '@mui/material';

type Props = {
    date: Timestamp,
    symptoms: string,
    diagnosis: string,
    diagnosisDesc: string
};

function DiagnosesItem({ date, symptoms, diagnosis, diagnosisDesc }: Props) {
    return (
        <Box className='info-container'>
            <Box>
                <Typography sx={{ color: '#C0C0C0', fontSize: '14px', marginTop: '15px' }}> Date </Typography>
                <Typography sx={{ fontWeight: 900, fontSize: '16px', marginBottom: '10px' }}> 20 October 2021 </Typography>
            </Box>
            <Box>
                <Typography sx={{ color: '#C0C0C0', fontSize: '14px' }}> Symptoms </Typography>
                <Typography sx={{ fontWeight: 900, fontSize: '16px', marginBottom: '10px' }}> Cough, Phlegm, Sore throat </Typography>
            </Box>
            <Box>
                <Typography sx={{ color: '#C0C0C0', fontSize: '14px' }}> Diagnosis </Typography>
                <Typography sx={{ fontWeight: 900, fontSize: '16px', marginBottom: '10px' }}> Common flu </Typography>
            </Box>
            <Box>
                <Typography sx={{ color: '#C0C0C0', fontSize: '14px' }}> Diagnosis </Typography>
                <Typography sx={{ fontWeight: 900, fontSize: '16px', marginBottom: '10px', p: '4px' }}>
                    Ibuprofen, 1 tab, daily <br />
                    Acetaminofen, 15 cc, twice daily <br />
                </Typography>
            </Box>
        </Box>
    );
}

export default DiagnosesItem;