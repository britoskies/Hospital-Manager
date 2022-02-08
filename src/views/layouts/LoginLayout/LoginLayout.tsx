import React from 'react';

// Router imports
import { Outlet } from 'react-router';

// Components
import { Header } from '../../../components';

// Mui components
import { Box } from '@mui/material'

type Props = {};

function LoginLayout({}: Props) {
  return (
    <Box className="layout login-layout" sx={{ px: 3 }}>
        <Header />
        <Outlet />
    </Box>
  );
}

export default LoginLayout;
