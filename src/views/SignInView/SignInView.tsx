import React from 'react';
import { useState } from 'react';
import SignIn from './../../components/SignIn/SignIn';


type Props = {};

function SignInView({ }: Props) {
  return (
    <div className='signin'>
      <SignIn />
    </div>
  )
}

export default SignInView;