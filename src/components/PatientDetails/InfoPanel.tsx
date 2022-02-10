import React, { useState } from 'react';

// MUI imports
import { Paper, Box, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

type Props = {
    bornDate: string,
    ssn: number,
    address: string,
    // maritualStatus: string,
    phoneNumber: string,
    gender: string,
    // insurance: string,
    // registrationDate: string
};

function InfoPanel({ bornDate, ssn, address, phoneNumber, gender }: Props) {

    // Menu icon config
    const options = [
        'Edit date of birth',
        'Edit social number',
        'Edit address',
        'Edit phone number',
        'Edit gender',
        'Edit insurance',
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
            p: '24px',
            margin: '16px 0     px 16px 0px'
        }}>
            <Typography component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#333',
                fontWeight: 500,
                fontSize: '20px'
            }}>
                Details
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
            </Typography>

            <Box className='info-container' sx={{ marginTop: '15px', display: 'flex', gap: '33px' }}>
                <Box className='left-container'>
                    <Box sx={{ marginBottom: '10px' }}>
                        <Typography sx={{ color: '#C0C0C0', fontSize: '14px' }}> Date of Birth </Typography>
                        <Typography sx={{ fontWeight: 900, fontSize: '16px' }}> {bornDate} </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '10px' }}>
                        <Typography sx={{ color: '#C0C0C0', fontSize: '14px' }}> Social Number </Typography>
                        <Typography sx={{ fontWeight: 900, fontSize: '16px' }}> {ssn} </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '10px' }}>
                        <Typography sx={{ color: '#C0C0C0', fontSize: '14px' }}> Address </Typography>
                        <Typography sx={{ fontWeight: 900, fontSize: '16px' }}> {address} </Typography>
                    </Box>
                    {/* <Box sx={{ marginBottom: '10px' }}>
                            <Typography sx={{ color: '#C0C0C0', fontSize: '14px' }}> Marital status </Typography>
                            <Typography sx={{ fontWeight: 900, fontSize: '16px' }}> Married </Typography>
                        </Box> */}
                </Box>

                <Box className='right-container'>
                    <Box sx={{ marginBottom: '10px' }}>
                        <Typography sx={{ color: '#C0C0C0', fontSize: '14px' }}> Phone </Typography>
                        <Typography sx={{ fontWeight: 900, fontSize: '16px' }}> {phoneNumber} </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '10px' }}>
                        <Typography sx={{ color: '#C0C0C0', fontSize: '14px' }}> Gender </Typography>
                        <Typography sx={{ fontWeight: 900, fontSize: '16px' }}> {gender} </Typography>
                    </Box>
                    <Box sx={{ marginBottom: '10px' }}>
                        <Typography sx={{ color: '#C0C0C0', fontSize: '14px' }}> Insurance </Typography>
                        <Typography sx={{ fontWeight: 900, fontSize: '16px' }}> Senasa </Typography>
                    </Box>
                    {/* <Box sx={{ marginBottom: '10px' }}>
                            <Typography sx={{ color: '#C0C0C0', fontSize: '14px' }}> Registered On </Typography>
                            <Typography sx={{ fontWeight: 900, fontSize: '16px' }}> 12/8/2022 </Typography>
                        </Box> */}
                </Box>
            </Box>
        </Paper>
    );
}

export default InfoPanel;