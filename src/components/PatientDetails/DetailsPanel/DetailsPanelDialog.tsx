import React from "react";
import { useParams } from "react-router-dom";
  
// Patients models
import Patients from '../../../models/patient/PatientModel';

// Material imports
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

type Props = {
  open: boolean;
  onClose: () => void;
  dateOfBirth: string
  ssn: string
  address: string
  phone: string
  gender: string
  setDoB: React.Dispatch<React.SetStateAction<string>>
  setSsn: React.Dispatch < React.SetStateAction<string>>
  setAddress: React.Dispatch < React.SetStateAction<string>>
  setPhone: React.Dispatch < React.SetStateAction<string>>
  setGender: React.Dispatch<React.SetStateAction<string>>
};

function DetailsPanelDialog({
  onClose, open, dateOfBirth, ssn, address, phone, gender,
  setDoB, setSsn, setAddress, setPhone, setGender }: Props) {

  let { id } = useParams();

  const handleClose = () => {
    setDoB(dateOfBirth);
    setSsn(ssn);
    setAddress(address);
    setPhone(phone);
    setGender(gender)
    return onClose();
  }

  const handleAccept = () => {
    if (dateOfBirth || ssn || address || phone || gender) {
      save();
      return handleClose();
    }
  };

  const save = async () => {
    const newDetails = {
      born_date: new Date(new Date(dateOfBirth).getTime() + 86400000),
      social_number: ssn,
      address,
      phone_number: phone,
      gender
    }

    await Patients.updateById(`${id}`, newDetails);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Details</DialogTitle>
      <DialogContent>
        <FormControl sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3, mt: 3 }} fullWidth>
          <FormControl sx={{ mb: 3 }} fullWidth>
            <TextField
              id="born-date"
              label="New birthdate"
              variant="outlined"
              type="date"
              defaultValue={dateOfBirth}
              onChange={(e) => setDoB(e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </FormControl>
          <FormControl sx={{ mb: 3 }} fullWidth>
            <TextField
              id="social-number"
              label="New SSN"
              variant="outlined"
              type="text"
              defaultValue={ssn}
              onChange={(e) => setSsn(e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </FormControl>
          <FormControl sx={{ mb: 3 }} fullWidth>
            <TextField
              id="address"
              label="New address"
              variant="outlined"
              type="text"
              defaultValue={address}
              onChange={(e) => setAddress(e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </FormControl>
          <FormControl sx={{ mb: 3 }} fullWidth>
            <TextField
              id="phone-number"
              label="New phone number"
              variant="outlined"
              type="text"
              multiline
              defaultValue={phone}
              onChange={(e) => setPhone(e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </FormControl>
          <FormControl sx={{ mb: 3 }} fullWidth>
            <InputLabel id="gender-label"> New gender</InputLabel>
            <Select
              labelId="gender-label"
              id="gender"
              defaultValue={gender}
              label="New gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value="M">Male</MenuItem>
              <MenuItem value="F">Female</MenuItem>
              <MenuItem value="O">Other</MenuItem>
            </Select>
          </FormControl>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={handleAccept}
          disabled={!(dateOfBirth && ssn && address && phone && gender)}
        >
          save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DetailsPanelDialog;
