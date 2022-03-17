import React from 'react';
import { useParams } from 'react-router-dom';

// Components imports
import ProfilePanel from '../../components/PatientDetails/ProfilePanel/ProfilePanel';
import InfoPanel from '../../components/PatientDetails/DetailsPanel/InfoPanel';
import NotesPanel from '../../components/PatientDetails/NotesPanel/NotesPanel';
import DiagnosesPanel from '../../components/PatientDetails/DiagnosesPanel/DiagnosesPanel';
import ViewTitle from './../../components/common/ViewTitle/ViewTitle';
import ApptPanel from '../../components/PatientDetails/ApptPanel/ApptPanel';

// Model imports
import Patients from './../../models/patient/PatientModel';
import Appointments from '../../models/appointments/ApptModel';

// MUI imports
import { Box, Grid } from '@mui/material';

type Props = {};

function PatientDetailsView({ }: Props) {

  let { id } = useParams();
  
  // Patient data
  const [patient] = Patients.findById(`${id}`);
  const patientName = patient?.data()?.name;
  const bornDate = new Date(patient?.data()?.born_date.seconds * 1000).toLocaleDateString();
  const ssn = patient?.data()?.social_number;
  const address = patient?.data()?.address;
  const phoneNumber = patient?.data()?.phone_number;
  const gender = patient?.data()?.gender;
  const notes = patient?.data()?.notes;

  // Appointments data
  const [appointments] = Appointments.findByPatientId(`${id}`);
  const appts = appointments?.docs.map(doc => doc.data());
  const pastAppts = appts?.filter(appt => new Date(appt?.date.seconds * 1000).getTime() < Date.now());
  const dueAppts = appts?.filter(appt => new Date(appt?.date.seconds * 1000).getTime() >= Date.now());

  const dates = dueAppts?.map(appt => new Date(appt.date.seconds * 1000).toLocaleDateString());
  let sortedDates: any = dates?.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
  let nextApptDate: any = sortedDates?.slice(0, 1).toLocaleString();
  let nextApptObj: any = appts?.find(appt => new Date(appt?.date.seconds * 1000).toLocaleDateString() == nextApptDate);

  return (
    <React.Fragment>
      <Box sx={{ width: '100%' }}>
        <ViewTitle title='Patient Details' setSearchTerm={() => ""}/>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <ProfilePanel name={patientName} time={nextApptObj?.time} nextAppt={nextApptDate}/>
            <InfoPanel
              bornDate={bornDate}
              ssn={ssn}
              address={address}
              phoneNumber={phoneNumber}
              gender={gender}
            />
          </Grid>
          <Grid item xs>
            <ApptPanel pastAppts={pastAppts} dueAppts={dueAppts}/>
          </Grid>
          <Grid item xs>
            <DiagnosesPanel />
            <NotesPanel notes={notes} />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default PatientDetailsView;
