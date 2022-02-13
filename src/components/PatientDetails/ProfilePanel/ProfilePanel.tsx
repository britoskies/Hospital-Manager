import React from 'react';
import { useState, useEffect } from 'react';

// Material imports
import { Avatar, IconButton, Menu, MenuItem, Paper, Typography, Box } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

type Props = {
    name: string
};

function ProfilePanel({ name }: Props) {

    // Optional
    const [apptDate, setApptDate] = useState<string>("Jan, 17th 2:00PM");

    // Menu icon config
    const options = [
        'Edit profile name',
        'Edit next appointment'
    ];

    const ITEM_HEIGHT = 48;

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Paper sx={{
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
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                        },
                    }}
                >
                    {options.map((option) => (
                        <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
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
                {apptDate}
            </Typography>
        </Paper>
    );
}

export default ProfilePanel;