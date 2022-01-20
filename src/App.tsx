// React imports
import React, { ReactElement } from 'react';

// Roting imports
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';

// firebase imports
import app from './services/firebase/firebase'

import UserAuth from './models/userauth/UserAuth'

type Props = {};

function App({ }: Props): ReactElement {
  const auth = () => {
    UserAuth.authUser('victor@gmail.com', '12345678')
  }

  const [value, loading, error] = UserAuth.getAuthState()

  const verify = () => {
    console.log(value);
  }

  const signout = () => {
    UserAuth.signOut()
  }

  return (
    <React.Fragment>
      <input type="email" placeholder="email" />
      <input type="password" placeholder='pass' />
      <button onClick={() => auth()}>SignIn</button>
      <button onClick={() => verify()}>Verify</button>
      <button onClick={() => signout()}>SignOut</button>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </React.Fragment> 
  );
}

export default App;
