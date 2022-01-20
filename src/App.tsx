// React imports
import React, { ReactElement } from 'react';

// Roting imports
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';

// firebase imports
import app from './services/firebase/firebase'

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
