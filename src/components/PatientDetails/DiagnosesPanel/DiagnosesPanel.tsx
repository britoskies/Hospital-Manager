import React from 'react';

// Components and Views imports
import DiagnosesSlider from './DiagnosesItem';
import Patients from '../../../models/patient/PatientModel';

// Mui imports
import { Paper, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

type Props = {};

function DiagnosesPanel({ }: Props) {

    const [date, dLoading, dError] = Patients.findById("RATfJrCiemTKZYhZPIR0");

    // Menu icon config
    const options = [
        'Edit date',
        'Edit symptoms',
        'Edit diagnosis',
        'Edit diagnosis description',
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
        <Paper elevation={0} sx={{
            width: 'auto',
            height: 'auto',
            p: '24px',
            margin: '16px 0px 16px 0px'
        }}>
            <Typography component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#333',
                fontWeight: 500,
                fontSize: '20px'
            }}>
                Diagnoses

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
            <DiagnosesSlider
                date={date?.data()?.diagnoses[0]}
                symptoms={date?.data()?.diagnoses[1]}
                diagnosis={date?.data()?.diagnoses[2]}
                diagnosisDesc={date?.data()?.diagnoses[3]}
            />
        </Paper>
    )
}

export default DiagnosesPanel;