import React from 'react';
import { useState } from 'react';
import UserAuth from '../../models/userauth/UserAuth';

type Props = {};

function SignInView({ }: Props) {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [value, loading, error] = UserAuth.getAuthState()
  
  const auth = () => {
    if (email === "" || password === "") {
      alert("Please enter your username and password");
      return;
    }
    UserAuth.authUser(email, password);
  }

  const verify = () => {
    console.log(value);
  }

  return (
    <React.Fragment>
      <div>SignInView Works!</div>
      <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder='pass' onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => auth()}>SignIn</button>
      <button onClick={() => verify()}>Verify</button>
    </React.Fragment>
  );
}

export default SignInView;
