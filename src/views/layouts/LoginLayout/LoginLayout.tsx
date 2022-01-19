import React from 'react';
import { Outlet } from 'react-router';
import { Header } from '../../../components';

type Props = {};

function LoginLayout({}: Props) {
  return (
    <React.Fragment>
        LoginLayout Works!
        <Header />
        <div>
            <Outlet />
        </div>
    </React.Fragment>
  );
}

export default LoginLayout;
