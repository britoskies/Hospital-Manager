import React, { useContext } from 'react';

// Context
import { AppContext } from "../../../persistence/context";

// Firebase
import { DocumentData } from 'firebase/firestore';

// MUI imports
import { IconButton, Menu, MenuItem, Box, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

type Props = {
    apptData: DocumentData | undefined;
};

function ApptItem({ apptData }: Props) {

    const { defaultDoctor } = useContext(AppContext);

    // Menu icon config
    const options = [
        'Edit Appointment'
    ];

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

    const formatTime = () => {
        let hh = (((new Date(apptData?.date.seconds * 1000).getHours()) + 11) % 12 + 1);
        let dd = "AM";
        let h = hh;
        if (h >= 12) { h = hh - 12; dd = "PM"; }
        if (h === 0) { h = 12; }

        return `${hh}${dd}`
    }

    // Icon menu handling
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        MenuListProps={{
                            'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        {options.map((option) => (
                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

            </Box>
            <Box sx={{ display: 'flex', marginTop: '10px' }}>
                <Typography sx={{ color: '#C0C0C0', fontSize: '11px', marginRight: '62px' }}>
                    {
                     //(((new Date(apptData?.date.seconds * 1000).getHours()) + 11) % 12 + 1)
                        formatTime()
                    }
                </Typography>
                <Box sx={{ display: 'flex', gap: '8px' }}>
                    <Typography sx={{ color: '#C0C0C0', fontSize: '11px' }}> Doctor </Typography>
                    <Typography sx={{ color: '#C0C0C0', fontSize: '12px', fontWeight: 500 }}>
                        {defaultDoctor.name}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default ApptItem;