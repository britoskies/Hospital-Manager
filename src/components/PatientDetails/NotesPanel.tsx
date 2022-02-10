import React from 'react';
import { IconButton, Menu, MenuItem, Paper, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

type Props = {};

function NotesPanel({ }: Props) {

    // Menu icon config
    const options = [
        'Edit notes'
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
            margin: '16px 0px 16px 0px'
        }}>
            <Typography sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#333',
                fontWeight: 500,
                fontSize: '20px'
            }}>
                Notes
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
            <Typography sx={{ color: '#333', fontWeight: 400, fontSize: '14px', marginTop: '10px' }}>
                High risk patient. Food allergies to coconut,
                peanut, egg and dust. Topical allergy to latex. Lactose intolerant.
                Heart transplant. Metallic fiber on the left knee.
            </Typography>
        </Paper>
    );
}

export default NotesPanel;