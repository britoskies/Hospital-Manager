import React from 'react';

// Router imports
import { Outlet } from 'react-router';

// Components
import { Header, SideBar } from '../../../components';

type Props = {};

function LoggedLayout({}: Props) {
  return (
    <React.Fragment>
        LoggedLayout Works!
        <Header />
        <div>
            <SideBar />
            <Outlet />
        </div>
    </React.Fragment>
  );
}

export default LoggedLayout;
