// React imports
import React, { ReactElement, useState } from 'react';

// Roting imports
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';

// firebase imports
import app from './services/firebase/firebase'
import UserAuth from './models/userauth/UserAuth'

// firestore imports
import PatientModel from './models/patient/PatientModel';
import ApptModel from './models/appointments/ApptModel';
import { Timestamp } from 'firebase/firestore';

type Props = {};

function App({ }: Props): ReactElement {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
