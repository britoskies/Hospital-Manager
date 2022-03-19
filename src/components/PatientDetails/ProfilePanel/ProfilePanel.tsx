import React from 'react';

// Components
import ProfileDialog from './ProfileDialog';

// Mui
import { Avatar, IconButton, Paper, Typography, Box } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';


type Props = {
    name: string;
    time: string
    nextAppt: string;
};

function ProfilePanel({ name, time, nextAppt }: Props) {

    const generateMonth = () => {
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let month = months[new Date(nextAppt)?.getMonth()];
        if (month == undefined) return '';
        return `${month}`
    }

    const generateDayNumber = () => {
        let dayNum = new Date(nextAppt)?.getDate();
        if (isNaN(dayNum)) return '';
        return `${dayNum}`
    }

    const [open, setOpen] = React.useState<boolean>(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Paper elevation={0} sx={{
                width: 'auto',
                height: 'auto',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                p: '24px',
                margin: '16px 0px 16px 0px',
                position: 'relative'
            }}>
                <Box sx={{
                    position: 'absolute',
                    zIndex: 10,
                    right: 24,
                    top: 24
                }}>
                    <IconButton
                        id="long-button"
                        onClick={handleClickOpen}
                    >
                        <MoreVertIcon />
                    </IconButton>
                </Box>
                <Box>
                    <Avatar
                        alt={name}
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 100, height: 100, fontSize: '35px' }}
                    />
                </Box>
                <Typography component="div" sx={{ color: '#333', fontWeight: 'bold', fontSize: '24px', margin: '15px' }}>
                    {name}
                </Typography>
                <Typography sx={{ color: '#C0C0C0', fontSize: '12px' }}>
                    Next Appointment
                </Typography>
                <Typography sx={{ color: '#333', fontWeight: 'bold', fontSize: '16px' }}>
                    {
                        (generateMonth() || generateDayNumber())
                            ? `${generateMonth()}, ${generateDayNumber()}th ${time}`
                            : 'N/A'
                    }
                </Typography>
            </Paper>
            <ProfileDialog open={open} onClose={handleClose}/>
        </>
    );
}

export default ProfilePanel;