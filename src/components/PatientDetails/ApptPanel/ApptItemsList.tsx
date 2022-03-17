import React from 'react';
import './scrollbar.css';

// Component imports
import ApptItem from './ApptItem';
import { ApptAlert } from '../..';


// MUI imports
import { Box } from '@mui/material';

type Props = {
    pastAppts?: any[];
    dueAppts?: any[];
};

function ApptItemsList({ pastAppts, dueAppts }: Props) {

    let key: number = 0;

    return (
        <Box className='items-list' sx={{ display: 'flex', flexDirection: 'column', height: '420px', gap: '10px', marginTop: '30px', overflowY: 'auto' }}>
            {
               pastAppts && pastAppts?.map(appt => { 
                   return <ApptItem key={key++} apptData={appt}/>
                })
            }
            {
                dueAppts && dueAppts?.map(appt => {
                    return <ApptItem key={key++} apptData={appt}/>
                })
                
            }
            {
                (pastAppts?.length == 0)
                    ? <ApptAlert text='Empty appointments history' />
                    : ''
            }
            {
                (dueAppts?.length == 0)
                    ? <ApptAlert text='No appointments scheduled' />
                    : ''
            }
        </Box>
    );
}

export default ApptItemsList;