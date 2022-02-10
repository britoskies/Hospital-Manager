import { TabPanel } from '@mui/lab';
import { Box, Typography } from '@mui/material';
import React from 'react';
import ApptItem from './ApptItem';

type Props = {
    apptData: [
        doctor: string,
        treatment: string
    ]
};

function ApptItemsList({ apptData }: Props) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '30px'}}>
            <ApptItem apptData={apptData} ></ApptItem>
            <ApptItem apptData={apptData} ></ApptItem>
            <ApptItem apptData={apptData} ></ApptItem>
        </Box>
    );
}

export default ApptItemsList;