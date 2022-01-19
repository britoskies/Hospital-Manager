import React from 'react';
import { Outlet } from 'react-router';
import { Header, SideBar } from '../../../components';

type Props = {};

function LoginLayout({}: Props) {
  return (
    <React.Fragment>
        LoggedLayout Works!
        <Header />
        <div>
            <Outlet />
        </div>
    </React.Fragment>
  );
}

export default LoginLayout;
