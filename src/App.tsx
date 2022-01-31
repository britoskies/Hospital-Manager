// React imports
import React, { ReactElement } from 'react';

// Roting imports
import { BrowserRouter } from 'react-router-dom';
import { AppContext } from './persistence/context';
import Routes from './routes/Routes';

// Styles
import './App.css'

type Props = {};

function App({ }: Props): ReactElement {
  return (
    <React.Fragment>
      <AppContext.Provider value={{defaultDoctor: { name: "Sasha Hill", id: "40NlIuRASffNoTUU9qdm"}}}>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </AppContext.Provider>
    </React.Fragment>
  );
}

export default App;
