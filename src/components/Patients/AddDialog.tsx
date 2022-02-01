//React Imports
import React, { useContext, useState } from "react";

// Patients models
import Patients from "../../models/patient/PatientModel";

// Material imports
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormLabel,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  FormGroup,
} from "@mui/material";

import { Timestamp } from "firebase/firestore";
import { Label } from "@mui/icons-material";

type Props = {
  open: boolean;
  onClose: () => void;
};

function AddDialog({ onClose, open }: Props) {

  const [active, setActive] = useState(false);
  const [bornDate, setBornDate] = useState(new Date().toLocaleDateString("sv-SE"));
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("M");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [ssn, setSsn] = useState("");

  const handleClose = () => {
    setActive(false)
    setBornDate(new Date().toLocaleDateString("sv-SE"))
    setEmail("")
    setGender("M")
    setName("")
    setPhoneNumber("")
    setAddress("")
    setSsn("")
    return onClose();
  };

  const handleCancel = () => {
    return handleClose();
  };

  const handleAccept = () => {
    if (
      bornDate &&
      email &&
      gender &&
      name &&
      phoneNumber &&
      address &&
      ssn
    ) {
      save();
      return handleClose();
    }
  };

  const save = async () => {
    const newpatientBornDate = ~~(new Date(bornDate).getTime() / 1000);
    const newpatient = {
      name: name,
      email: email,
      address: address,
      social_number: ssn,
      phone_number: phoneNumber,
      born_date: new Timestamp(newpatientBornDate, 0),
      gender: gender,
      active_status: active,
      diagnoses: []
    };

    await Patients.create(newpatient);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Add New Patient</DialogTitle>
      <DialogContent>
        <FormControl sx={{ mb: 3, mt: 3 }} fullWidth>
          <TextField
            id="name"
            label="Full Name"
            fullWidth
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ mb: 3 }} fullWidth>
          <TextField
            id="email"
            label="Email"
            fullWidth
            variant="outlined"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ mb: 3 }} fullWidth>
          <TextField
            id="address"
            label="Address"
            fullWidth
            variant="outlined"
            value={address}
            type="text"
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ mb: 3 }} fullWidth>
          <TextField
            id="ssn"
            label="Social Security Number"
            fullWidth
            variant="outlined"
            value={ssn}
            placeholder="07314689"
            type="number"
            onChange={(e) => setSsn(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ mb: 3 }} fullWidth>
          <TextField
            id="phoneNumber"
            label="Phone Number"
            fullWidth
            variant="outlined"
            value={phoneNumber}
            placeholder="4155552671"
            type="number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ mb: 3 }} fullWidth>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            id="gender"
            value={gender}
            label="Gender"
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem value="M">Male</MenuItem>
            <MenuItem value="F">Female</MenuItem>
            <MenuItem value="O">Other</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ mb: 3 }} fullWidth>
          <TextField
            id="borndate"
            label="Born Date"
            type="date"
            defaultValue={bornDate}
            onChange={(e) => setBornDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </FormControl>
        <FormGroup>
          <FormLabel>Active Status</FormLabel>
          <FormControlLabel
            sx={{ mb: 3}} 
            control={<Switch checked={active} onChange={(e) => setActive(e.target.checked)} />} 
            label={active ? "Active" : "Inactive"} 
          />
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button 
          onClick={handleAccept}
          disabled={!(
            bornDate &&
            email &&
            gender &&
            name &&
            phoneNumber &&
            address &&
            ssn
          )}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddDialog;
