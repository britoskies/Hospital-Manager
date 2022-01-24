// React imports
import React, { ReactElement, useState } from 'react';

// Roting imports
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';

// firebase imports
import app from './services/firebase/firebase'

import UserAuth from './models/userauth/UserAuth'

type Props = {};

function App({ }: Props): ReactElement {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const auth = () => {
    UserAuth.authUser(email, password)
  }

  const [value, loading, error] = UserAuth.getAuthState()

  const verify = () => {
    console.log(value?.email);
  }

  const signout = () => {
    UserAuth.signOut()
  }

  return (
    <React.Fragment>
      <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder='pass' onChange={(e) => setPassword(e.target.value)} />
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
