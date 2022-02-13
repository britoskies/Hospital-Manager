import React from 'react';

// MUI imports
import { IconButton, Menu, MenuItem, Box, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

type Props = {
    apptData: [
        doctor: string,
        treatment: string
    ]
};

function ApptItem({ apptData }: Props) {

    // Menu icon config
    const options = [
        'Edit Appointment'
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
        <Box sx={{ display: 'flex', flexDirection: 'column', background: '#F5F5F5', p: '16px', borderRadius: '8px' }}>
            <Box sx={{ display: 'flex', position: 'relative' }}>
                <Typography sx={{ color: '#333', fontWeight: 900, marginRight: '30px' }}>
                    24, Nov <br /> Tue
                </Typography>
                <Box>
                    <Typography sx={{ color: '#C0C0C0', fontSize: '11px' }}> Treatment </Typography>
                    <Typography sx={{ color: '#333', fontWeight: 900, fontSize: '20px' }}> {apptData[1]} </Typography>
                </Box>
                <Box sx={{position: 'absolute', right: 0}}>
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
                <Typography sx={{ color: '#C0C0C0', fontSize: '11px', marginRight: '65px' }}> 9AM </Typography>
                <Box sx={{ display: 'flex', gap: '8px' }}>
                    <Typography sx={{ color: '#C0C0C0', fontSize: '11px' }}> Doctor </Typography>
                    <Typography sx={{ color: '#C0C0C0', fontSize: '12px', fontWeight: 500 }}> {apptData[0]} </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default ApptItem;