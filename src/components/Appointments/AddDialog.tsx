//React Imports
import React, { useContext, useState } from "react";

// Patients models
import PatientModel from "../../models/patient/PatientModel";

// Material imports
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
import MobileDatePicker from "@mui/lab/MobileDatePicker";

// Context
import { AppContext } from "../../persistence/context";
import { Timestamp } from "firebase/firestore";
import Appointments from "../../models/appointments/ApptModel";

type Props = {
  open: boolean;
  onClose: () => void;
};

function AddDialog({ onClose, open }: Props) {
  const { defaultDoctor } = useContext(AppContext);

  const [date, setDate] = useState(new Date().toLocaleDateString("sv-SE"));
  const [doctorId, setDoctorId] = useState(defaultDoctor.id);
  const [patientId, setPatientId] = useState("");
  const [treatment, setTreatment] = useState("");

  const [patients, loading, error] = PatientModel.findAll();

  const handleClose = () => {
    setDate(new Date().toLocaleDateString("sv-SE"));
    setDoctorId(defaultDoctor.id);
    setPatientId("");
    setTreatment("");
    return onClose();
  };

  const handleCancel = () => {
    return handleClose();
  };

  const handleAccept = () => {
    if (date && doctorId && patientId && treatment) {
      save();
      return handleClose();
    }
  };

  const save = async () => {
    const newapptDate = ~~(new Date(date).getTime() / 1000);
    const newappt = {
      date: new Timestamp(newapptDate, 0),
      patient_id: patientId,
      doctor_id: doctorId,
      treatment: treatment,
    };

    await Appointments.create(newappt);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Add New Appointment</DialogTitle>
      <DialogContent>
        <FormControl sx={{ mb: 3, mt: 3 }} fullWidth>
          <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue={date}
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
          disabled={!(date && doctorId && patientId && treatment)}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddDialog;
