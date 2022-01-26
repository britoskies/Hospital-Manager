import React from 'react';

// Router imports
import { Outlet } from 'react-router';

// Components
import { Header, SideBar } from '../../../components';

// Firebase imports
import UserAuth from '../../../models/userauth/UserAuth';

type Props = {};

function LoggedLayout({ }: Props) {
  
  const signout = () => {
    UserAuth.signOut()
  }

  return (
    <React.Fragment>
        LoggedLayout Works!
        <Header />
        <button onClick={() => signout()}>SignOut</button>
        <div>
            <SideBar />
            <Outlet />
        </div>
    </React.Fragment>
  );
}

export default LoggedLayout;
