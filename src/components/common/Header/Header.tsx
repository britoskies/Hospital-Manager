import React from 'react';

import {AppBar, Toolbar, IconButton, Typography, Box} from '@mui/material'

import {Menu as MenuIcon, AccountCircle, Logout as Logout} from '@mui/icons-material'
import UserAuth from '../../../models/userauth/UserAuth';

import Logo from '../../../assets/img/logo.png'
import { useNavigate } from 'react-router-dom';

type Props = {};

function Header({}: Props) {
  const [user, loading, error] = UserAuth.getAuthState()
  const navigate = useNavigate()

  const handleSignOut = () => {
    UserAuth.signOut()
    navigate('/login')
  }

  const appTitle = "Hospital Manager"

  return (
    <AppBar position="static" color="inherit" elevation={0}>
        
          {user && (
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {appTitle}
              </Typography>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleSignOut}
                color="inherit"
              >
                <Logout />
              </IconButton>
            </Toolbar>
          )}
          {!user && (
            <Toolbar sx={{display: 'flex', justifyContent: 'center'}}>
              <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                <img src={Logo} alt="" height="45"/>
                <Typography variant="h6" component="h6" sx={{ height: 'min-content' }}>
                  {appTitle}
                </Typography>
              </Box>
            </Toolbar>
          )}
        
      </AppBar>
  );
}

export default Header;
