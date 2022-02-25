import React from 'react';

// MUI imports
import { Box, Paper, Typography } from '@mui/material';

type Props = {};

function TextPanel({ }: Props) {
    return (
        <Box>
            <Paper
                elevation={0}
                sx={{
                    background: 'linear-gradient(90deg, #1D3557 0%, #457B9D 91%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    justifyContent: 'left',
                    px: 3,
                    p: '50px 30px',
                    color: 'white'
                }}
            >
                <Typography sx={{ fontSize: '13px', fontWeight: 400 }}>
                    Welcome to Dashboard
                </Typography>
                <Typography sx={{ fontSize: '18px', fontWeight: 900 }}>
                    Lorem Ipsum
                </Typography>

                <Typography sx={{ width: 400, fontSize: '13px', fontWeight: 300, fontStyle: 'italic', marginTop: '30px' }}>
                    Lorem ipsum dolor amet, amet lorem ipsim dolor,
                    a met dolor ipsum lorem dolor ipsum lorem amet lorem dolor
                </Typography>
            </Paper>
        </Box>
    )
}

export default TextPanel;