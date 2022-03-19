import React from "react";
import { useParams } from "react-router-dom";

// Patients models
import Patients from '../../../models/patient/PatientModel';

// Mui
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  TextField,
} from "@mui/material";
import { formatDateWithNums } from "../../../utils/formatDate";

type Props = {
  open: boolean;
  onClose: () => void;
  date: string
  blood: string
  sugar: string
  cholesterol: string
  setDate: React.Dispatch<React.SetStateAction<string>>
  setBlood: React.Dispatch<React.SetStateAction<string>>
  setSugar: React.Dispatch<React.SetStateAction<string>>
  setCholesterol: React.Dispatch<React.SetStateAction<string>>
};

function PhConditionDialog({
  onClose, open, date, blood, sugar, cholesterol,
  setDate, setBlood, setSugar, setCholesterol }: Props) {

  let { id } = useParams();

  const handleClose = () => {
    setDate(date);
    setBlood(blood);
    setSugar(sugar);
    setCholesterol(cholesterol);
    return onClose();
  }

  const handleAccept = () => {
    if (date || blood || sugar || cholesterol) {
      save();
      return handleClose();
    }
  };

  const save = async () => {
    const newPhCondition = {
      physical_condition: {
        date: new Date(new Date(date).getTime() + 86400000),
        blood_pressure: blood,
        sugar_level: sugar,
        cholesterol
      }
    }

    await Patients.updateById(`${id}`, newPhCondition);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Physical Condition</DialogTitle>
      <DialogContent>
        <FormControl sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3, mt: 3 }} fullWidth>
          <FormControl sx={{ mb: 3 }} fullWidth>
            <TextField
              id="evaluation-date"
              label="New evaluation date"
              variant="outlined"
              type="date"
              InputProps={{ inputProps: { max: formatDateWithNums(new Date()) } }}
              defaultValue={date}
              onChange={(e) => setDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </FormControl>
          <FormControl sx={{ mb: 3 }} fullWidth>
            <TextField
              id="blood"
              label="New blood pressure"
              variant="outlined"
              type="text"
              defaultValue={blood}
              onChange={(e) => setBlood(e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </FormControl>
          <FormControl sx={{ mb: 3 }} fullWidth>
            <TextField
              id="sugar-level"
              label="New sugar level"
              variant="outlined"
              type="text"
              defaultValue={sugar}
              onChange={(e) => setSugar(e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </FormControl>
          <FormControl sx={{ mb: 3 }} fullWidth>
            <TextField
              id="cholesterol"
              label="New cholesterol"
              variant="outlined"
              type="text"
              multiline
              defaultValue={cholesterol}
              onChange={(e) => setCholesterol(e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </FormControl>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={handleAccept}
          disabled={!(date && blood && sugar && cholesterol)}
        >
          save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default PhConditionDialog;
