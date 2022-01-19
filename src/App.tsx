// React imports
import React, { ReactElement, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header, SideBar } from './components';
import Routes from './routes/Routes';

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
