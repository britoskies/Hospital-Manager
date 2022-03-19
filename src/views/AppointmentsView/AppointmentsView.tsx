import React from 'react';

// Mui
import { Button, Box, Typography } from '@mui/material';

// Components
import AddDialog from '../../components/Appointments/AddDialog';
import Table from '../../components/Appointments/Table';
import { ViewTitle } from '../../components';

type Props = {};

function AppointmentsView({ }: Props) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [searchTerm, setSearchTerm] = React.useState<string>("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearchTerm = (e: any) => {
    setSearchTerm(e.target.value.toLowerCase())
  };

  return (
    <Box className="appointments-view" sx={{ width: "100%" }}>
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <Button variant="contained" onClick={handleClickOpen} sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Typography sx={{ fontSize: '15px', fontWeight: 'bold', mr: 1 }}> + </Typography>
          Add Appointment
        </Button>
      </Box>
      <AddDialog open={open} onClose={handleClose} />
      <ViewTitle title="Appointments" withSearchBar searchTerm={searchTerm} setSearchTerm={handleSearchTerm} />
      <Table searchTerm={searchTerm} />
    </Box>
  );
}

export default AppointmentsView;
