import React from 'react';
import './scrollbar.css';

import ApptItem from './ApptItem';

// Firebase imports
import { DocumentData, QuerySnapshot } from 'firebase/firestore';

// MUI imports
import { Box } from '@mui/material';

type Props = {
    pastAppts?: any[] | undefined;
    dueAppts?: any[] | undefined;
};

function ApptItemsList({ pastAppts, dueAppts }: Props) {

    let key = 0;

    return (
        <Box className='items-list' sx={{ display: 'flex', flexDirection: 'column', height: '420px', gap: '10px', marginTop: '30px', overflowY: 'auto' }}>
            {
               pastAppts && pastAppts?.map(appt => { 
                   return <ApptItem key={key++} apptData={appt} />
                })
            }
            {
                dueAppts && dueAppts?.map(appt => {
                    return <ApptItem key={key++} apptData={appt} />
                })
            }
        </Box>
    );
}

export default ApptItemsList;