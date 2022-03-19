//React Imports
import React, { useContext, useState } from "react";

// Model
import PatientModel from "../../models/patient/PatientModel";
import Appointments from "../../models/appointments/ApptModel";

// MUI
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

// Persistence
import { AppContext } from "../../persistence/context";
import { formatDateWithNums } from "../../utils/formatDate";

type Props = {
  open: boolean;
  onClose: () => void;
};

function AddDialog({ onClose, open }: Props) {

  const { defaultDoctor } = useContext(AppContext);
  
  const [date, setDate] = useState(new Date().toLocaleDateString('sv-SE'));
  const [time, setTime] = useState<string>('12:00');
  const [doctorId, setDoctorId] = useState(defaultDoctor.id);
  const [patientId, setPatientId] = useState("");
  const [treatment, setTreatment] = useState("");

  const [patients, loading, error] = PatientModel.findAll();

  const handleClose = () => {
    setDate(new Date().toLocaleDateString('sv-SE'));
    setTime('12:00');
    setDoctorId(defaultDoctor.id);
    setPatientId("");
    setTreatment("");
    return onClose();
  };

  const handleCancel = () => handleClose();

  const handleAccept = () => {
    if (date && time && doctorId && patientId && treatment) {
      save();
      return handleClose();
    }
  };

  const save = async () => {
    const newAppt = {
      date: new Date(new Date(date).getTime() + 86400000),
      time,
      patient_id: patientId,
      doctor_id: doctorId,
      treatment,
    };
    await Appointments.create(newAppt);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>New Appointment</DialogTitle>
      <DialogContent>
        <FormControl sx={{ display: 'flex', flexDirection: 'row', gap: 1, mb: 3, mt: 3 }} fullWidth>
          <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue={date}
            InputProps={{ inputProps: { min: formatDateWithNums(new Date()) } }}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
          <TextField
            id="time"
            label="Time"
            type="time"
            defaultValue={time}
            onChange={(e) => setTime(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </FormControl>
        <FormControl sx={{ mb: 3 }} fullWidth>
          <InputLabel id="doctorid-label">Doctor</InputLabel>
          <Select
            labelId="doctorid-label"
            id="doctorid"
            value={doctorId}
            label="Doctor"
            onChange={(e) => setDoctorId(e.target.value)}
          >
            <MenuItem value={defaultDoctor.id}>
              {defaultDoctor.name}
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ mb: 3 }} fullWidth>
          <InputLabel id="patientid-label">Patient</InputLabel>
          <Select
            labelId="patientid-label"
            id="patientid"
            value={patientId}
            label="Patient"
            onChange={(e) => setPatientId(e.target.value)}
          >
            {patients &&
              patients.docs.map((doc) => (
                <MenuItem key={doc.id} value={doc.id}>
                  {doc.data().name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl sx={{ mb: 3 }} fullWidth>
          <TextField
            id="treatment"
            label="Treatment"
            fullWidth
            variant="outlined"
            value={treatment}
            onChange={(e) => setTreatment(e.target.value)}
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button 
          onClick={handleAccept}
          disabled={!(date && time && doctorId && patientId && treatment)}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddDialog;
