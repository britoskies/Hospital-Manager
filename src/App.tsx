// React imports
import React, { ReactElement, useState } from 'react';
import { Header, SideBar } from './components';

type Props = {};

function App({}: Props): ReactElement {

  return (
    <div>
      <Header />
      <SideBar />
    </div>
  );
}

export default App;
