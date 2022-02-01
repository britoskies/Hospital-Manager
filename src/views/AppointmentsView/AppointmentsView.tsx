// React imports
import React, { useState } from 'react';

// Mui Components
import {
  Button,
  Box
} from '@mui/material';

// Appointments Components
import AddDialog from '../../components/Appointments/AddDialog';
import Table from '../../components/Appointments/Table';
import { SearchBar, ViewTitle } from '../../components';

type Props = {};

function AppointmentsView({}: Props) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className="appointments-view">
      <div>AppointmentsView Works!</div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <Button
          variant="contained"
          onClick={handleClickOpen}
          sx={{
            my: 3
          }}
        >Add Appointment</Button>
      </Box>
      <AddDialog
        open={open}
        onClose={handleClose}
      />
      <ViewTitle 
        title="Appointments" 
        SearchBar={() => <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
      />
      <Table searchTerm={searchTerm}/>
    </Box>
  );
}

export default AppointmentsView;
