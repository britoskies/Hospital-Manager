import React from 'react';

import { Box, Paper } from '@mui/material'

type Props = {
  title: string, 
  SearchBar?: any
};

function ViewTitle({ title, SearchBar }: Props) {
  return (
    <React.Fragment>
      <Paper
        sx={{
          height: 80,
          background: 'linear-gradient(90deg, #1D3557 0%, rgba(9,9,121,1) 35%, #457B9D 91%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3, 
          color: 'white'
        }}
      >
        <h3>{title}</h3>
        {SearchBar && <SearchBar />}
      </Paper>
    </React.Fragment>
  );
}

export default ViewTitle;