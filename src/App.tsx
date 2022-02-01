// React imports
import React, { ReactElement } from 'react';

// Roting imports
import { BrowserRouter } from 'react-router-dom';
import { AppContext } from './persistence/context';
import Routes from './routes/Routes';

// Styles
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material';


// Theme
const theme = createTheme({
  shape: {
    borderRadius: 8
  },
  palette: {
    primary: {
      main: '#457B9D'
    }
  }
});

type Props = {};

function App({ }: Props): ReactElement {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={{defaultDoctor: { name: "Sasha Hill", id: "40NlIuRASffNoTUU9qdm"}}}>
          <BrowserRouter>
            <Routes/>
          </BrowserRouter>
        </AppContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
