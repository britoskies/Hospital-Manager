import React from 'react';

import SignIn from './../../components/SignIn/SignIn';

// Mui components
import { Box } from '@mui/material'

import './SignInView.css'

type Props = {};

function SignInView({ }: Props) {
  return (
    <Box className='signin-view'>
      <SignIn />
    </Box>
  )
}

export default SignInView;