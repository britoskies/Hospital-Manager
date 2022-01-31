// React imports
import React, { useState } from 'react';

// Mui Components
import { 
  Button
} from '@mui/material';

// Appointments Components
import AddDialog from '../../components/Appointments/AddDialog';
import Table from '../../components/Appointments/Table';

type Props = {};

function AppointmentsView({}: Props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
        <div>AppointmentsView Works!</div>
        <Button variant="contained" onClick={handleClickOpen}>Add Appointment</Button>
        <AddDialog
          open={open}
          onClose={handleClose}
        />
        <Table />
    </React.Fragment>
  );
}

export default AppointmentsView;
