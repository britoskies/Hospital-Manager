import React from 'react';

// MUI imports
import { Box, Paper, Typography } from '@mui/material';

// MUI icons imports
import Icon from '@mdi/react';
import { mdiAccountMultipleCheck, mdiCalendarMonth } from '@mdi/js';
import { mdiAccountClock } from '@mdi/js';

// Model imports
import Appointments from '../../../models/appointments/ApptModel';

type Props = {};

function DiagnosesPanel({ }: Props) {

    const [appointments, sptLoading, sptError] = Appointments.findAll();
    const appts = appointments?.docs.map(doc => new Date(doc.data().date.seconds*1000).toLocaleDateString());

    return (
        <Paper sx={{ p: '20px', margin: '16px 0px 16px 0px' }}>
            <Typography sx={{ color: '#333', fontWeight: 700, fontSize: '18px' }}>
                Overview
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center'}}>
                    <Icon path={mdiAccountMultipleCheck} size={'50px'} color={'#4A5D79'}/>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ color: '#333333', fontSize: '20px', fontWeight: 700 }}>
                            8
                        </Typography>
                        <Typography sx={{ color: '#333333', fontSize: '13px', fontWeight: 700 }}>
                            Patients treated
                        </Typography>
                        <Typography sx={{ color: '#C0C0C0', fontSize: '9px', fontWeight: 700 }}>
                            TODAY
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <Icon path={mdiAccountClock} size={'45px'} color={'#4A5D79'} />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ color: '#333333', fontSize: '20px', fontWeight: 700 }}>
                            15
                        </Typography>
                        <Typography sx={{ color: '#333333', fontSize: '13px', fontWeight: 700 }}>
                            Patients left
                        </Typography>
                        <Typography sx={{ color: '#C0C0C0', fontSize: '9px', fontWeight: 700 }}>
                            TODAY
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <Icon path={mdiCalendarMonth} size={'45px'} color={'#4A5D79'} />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ color: '#333333', fontSize: '20px', fontWeight: 700 }}>
                            { appts?.length }
                        </Typography>
                        <Typography sx={{ color: '#333333', fontSize: '13px', fontWeight: 700 }}>
                            Patients scheduled
                        </Typography>
                        <Typography sx={{ color: '#C0C0C0', fontSize: '9px', fontWeight: 700 }}>
                            IN TOTAL
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}

export default DiagnosesPanel;