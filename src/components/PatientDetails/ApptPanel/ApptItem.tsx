import React from 'react';
import { useNavigate } from 'react-router-dom';

// Context and Models
import { AppContext } from "../../../persistence/context";
import Appointments from './../../../models/appointments/ApptModel';

// Firebase
import { DocumentData } from 'firebase/firestore';

// MUI
import { IconButton, Box, Typography } from '@mui/material';
import { mdiEyeArrowRight } from '@mdi/js';
import { Icon } from '@mdi/react';

type Props = {
    apptData: DocumentData;
};

function ApptItem({ apptData }: Props) {
    
    const { defaultDoctor } = React.useContext(AppContext);
    const navigateTo = useNavigate();

    // Date management
    const generateMonth = () => {
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let month = months[new Date(apptData?.date.seconds * 1000).getMonth()];
        return `${month}`;
    };

    const generateDay = () => {
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let day = days[new Date(apptData?.date.seconds * 1000).getDay()];
        return `${day}`;
    }

    const generateDayNumber = () => {
        let dayNum = new Date(apptData?.date.seconds * 1000).getDate();
        return `${dayNum}`
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', background: '#F5F5F5', p: '16px', borderRadius: '8px' }}>
            <Box sx={{ display: 'flex', position: 'relative' }}>
                <Typography component="div" sx={{ color: '#333', fontWeight: 900, marginRight: '15px', width: '70px', fontSize: '15px' }}>
                    {generateDayNumber()} {`${generateMonth()},`} <br />
                    {generateDay()}
                </Typography>
                <Box>
                    <Typography sx={{ color: '#C0C0C0', fontSize: '11px' }}> Treatment </Typography>
                    <Typography sx={{ color: '#333', fontWeight: 900, fontSize: '17px' }}>
                        {
                            apptData?.treatment.length > 30
                                ? apptData?.treatment.substring(0, 30) + "..."
                                : apptData?.treatment
                        }
                    </Typography>
                </Box>
                <Box sx={{ position: 'absolute', right: 0 }}>
                    <IconButton
                        aria-haspopup="true"
                        onClick={() => navigateTo('../appointments')}
                    >
                        <Icon path={mdiEyeArrowRight} size={1} />
                    </IconButton>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <Typography sx={{ color: '#C0C0C0', fontSize: '11px', marginRight: '62px' }}>
                    {apptData?.time}
                </Typography>
                <Box sx={{ display: 'flex', gap: '8px' }}>
                    <Typography sx={{ color: '#C0C0C0', fontSize: '12px' }}> Doctor : </Typography>
                    <Typography sx={{ color: '#C0C0C0', fontSize: '12px', fontWeight: 500 }}>
                        {defaultDoctor.name}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default ApptItem;