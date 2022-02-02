import React from 'react';

// Router imports
import { Outlet } from 'react-router';

// Components
import { Header, SideBar } from '../../../components';

// Mui components
import { Box } from '@mui/material'

// Firebase imports
import UserAuth from '../../../models/userauth/UserAuth';

type Props = {};

function LoggedLayout({ }: Props) {

  return (
    <React.Fragment>
        LoggedLayout Works!
        <SideBar /> 
        <div>
          <Header />
          <Box sx={{display: 'flex', width: "100%"}}>
            <Outlet />
          </Box>
        </div>
    </React.Fragment>
  );
}

export default LoggedLayout;
