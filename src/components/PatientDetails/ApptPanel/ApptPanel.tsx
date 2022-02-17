import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Firebase imports
import { DocumentData, QuerySnapshot } from 'firebase/firestore';

// Components imports
import ApptItemsList from './ApptItemsList'
import ApptTimeSlider from '../DiagnosesPanel/ApptTimeSlider'

// MUI imports
import { Box, Typography, Paper } from '@mui/material';
import AddDialog from './AddDialog';

type Props = {
    apptData: QuerySnapshot<DocumentData> | undefined;
};

function ApptPanel({ apptData }: Props) {

    const [value, setValue] = React.useState<number>(0);
    const [open, setOpen] = React.useState<boolean>(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <Paper sx={{ width: 'auto', height: 'auto', p: '24px', marginTop: '16px' }}>
                <Box className='top-container' sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography sx={{ display: 'flex', alignItems: 'center',color: '#333',fontWeight: 500, fontSize: '20px' }}>
                        Appointments
                    </Typography>

                    <ApptTimeSlider value={value} setValue={setValue} />
                    
                    <Box sx={{ position: 'relative', top: 13}}>
                        <button onClick={handleClickOpen} style={{
                            background: '#F5F5F5',
                            color: '#717171',
                            fontSize: '20px',
                            border: 'none',
                            borderRadius: '8px',
                            width: '32px',
                            height: '32px',
                            cursor: 'pointer'
                        }}> + </button>
                        <AddDialog open={open} onClose={handleClose}/>
                    </Box>
                </Box>
                <Box className='bottom-container'>
                    {value === 0 && (<ApptItemsList apptData={apptData} />)}
                    {value === 1 && (<ApptItemsList apptData={apptData} />)}
                </Box>
            </Paper>
        </Box >
    )
}

export default ApptPanel;