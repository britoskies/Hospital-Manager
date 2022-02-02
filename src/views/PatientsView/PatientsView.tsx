// React imports
import React, { useState } from 'react';

// Mui Components
import { 
  Button,
  Box
} from '@mui/material';

// Patients Components
import AddDialog from '../../components/Patients/AddDialog';
import Table from '../../components/Patients/Table';
import { ViewTitle, SearchBar } from '../../components';


type Props = {};

function PatientsView({}: Props) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className="patients-view" sx={{width: "100%", p:3}}>
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
              mb: 3
            }}
          >Add Patient</Button>
        </Box>
        <AddDialog
          open={open}
          onClose={handleClose}
        />
        <ViewTitle 
          title="Patients" 
          SearchBar={() => <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} 
        />
        <Table searchTerm={searchTerm} />
    </Box>
  );
}

export default PatientsView;
