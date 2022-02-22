import React from 'react';

// MUI imports
import { Box, Grid, Paper } from '@mui/material';

// Components imports
import TextPanel from '../../components/Dashboard/MainPanel/TextPanel';
import Overview from '../../components/Dashboard/MainPanel/Overview';
import Calendar from '../../components/Dashboard/ApptPanel/Calendar';
import ApptColumn from '../../components/Dashboard/ApptPanel/ApptColumn';

type Props = {};

function DashboardView({}: Props) {
  return (
    <React.Fragment>
      <Box sx={{ width: '100%' }}>
        <Grid container spacing={2}>
          <Grid item xs={7.5}>
            <TextPanel/>
            <Overview/>
          </Grid>
          <Grid item xs={4.5}>
            <ApptColumn/>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default DashboardView;
