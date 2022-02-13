import React from 'react';
import './scrollbar.css';

import ApptItem from './ApptItem';

// MUI imports
import { Box} from '@mui/material';

type Props = {
    apptData: [
        doctor: string,
        treatment: string
    ]
};

function ApptItemsList({ apptData }: Props) {
    return (
        <Box className='items-list' sx={{ display: 'flex', flexDirection: 'column', height: '420px', gap: '10px', marginTop: '30px', overflowY: 'auto' }}>
            <ApptItem apptData={apptData} ></ApptItem>
            <ApptItem apptData={apptData} ></ApptItem>
            <ApptItem apptData={apptData} ></ApptItem>
            <ApptItem apptData={apptData} ></ApptItem>
            <ApptItem apptData={apptData} ></ApptItem>
            <ApptItem apptData={apptData} ></ApptItem>         
        </Box>
    );
}

export default ApptItemsList;