// React imports
import React, { ReactElement, useState } from 'react';

// Roting imports
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';

// firebase imports
import app from './services/firebase/firebase'

import UserAuth from './models/userauth/UserAuth'
import PatientModel from './models/patient/PatientModel';
import ApptModel from './models/appointments/ApptModel';
import { Timestamp } from 'firebase/firestore';

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

  // const funcion = () => {
  //   PatientModel.create({
  //     name: "Array Peña",
  //     email: "arr@gmail.com",
  //     address: "índice -1",
  //     social_number: 58376584,
  //     phone_number: 8099999991,
  //     born_date: new Timestamp(999999988,0),
  //     gender: "M",
  //     active_status: false,
  //     diagnoses: []
  //   });
  // }



  // function funcionTwo() { 
  //   ApptModel.create({
  //     patient_id: 2,
  //     doctor_id: 2,
  //     date: new Timestamp(999999988, 0),
  //     treatment: "Masajearle la espalda everyday"
  //   })
  // }


  return (
    <React.Fragment>
      <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder='pass' onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => auth()}>SignIn</button>
      <button onClick={() => verify()}>Verify</button>
      <button onClick={() => signout()}>SignOut</button>
      {/* <button onClick={() => funcionTwo()}> Update </button> */}
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
