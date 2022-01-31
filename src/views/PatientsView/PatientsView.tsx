// React imports
import React, { useState } from 'react';

// Mui Components
import { 
  Button
} from '@mui/material';

// Patients Components
import AddDialog from '../../components/Patients/AddDialog';
import Table from '../../components/Patients/Table';


type Props = {};

function PatientsView({}: Props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
        <div>PatientsView Works!</div>
        <Button variant="contained" onClick={handleClickOpen}>Add Patient</Button>
        <AddDialog
          open={open}
          onClose={handleClose}
        />
        <Table />
    </React.Fragment>
  );
}

export default PatientsView;
