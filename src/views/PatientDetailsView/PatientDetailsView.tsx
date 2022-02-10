import React from 'react';
import ProfilePanel from './../../components/PatientDetails/ProfilePanel';
import Patients from './../../models/patient/PatientModel';
import InfoPanel from './../../components/PatientDetails/InfoPanel';
import NotesPanel from './../../components/PatientDetails/NotesPanel';
import DiagnosesPanel from './../../components/PatientDetails/DiagnosesPanel';
import { Box, Grid } from '@mui/material';
import ViewTitle from './../../components/common/ViewTitle/ViewTitle';
import ApptPanel from './../../components/PatientDetails/ApptPanel';

type Props = {};

function PatientDetailsView({ }: Props) {

  const [patient, ptLoading, ptError] = Patients.findById("RATfJrCiemTKZYhZPIR0");

  return (
    <React.Fragment>
      <Box sx={{ width: '100%' }}>
        <ViewTitle title='Patient Details' setSearchTerm={() => ""} />
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <ProfilePanel name={patient?.data()?.name} />
            <InfoPanel
              bornDate={new Date(patient?.data()?.born_date.seconds * 1000).toLocaleDateString()}
              ssn={patient?.data()?.social_number}
              address={patient?.data()?.address}
              // maritalStatus={patient?.data().marital_status}
              phoneNumber={patient?.data()?.phone_number}
              gender={patient?.data()?.gender}
            // insurance={patient?.data()?.insurance}
            // registrationDate={patient?.data().}
            />
          </Grid>
          <Grid item xs>
            <ApptPanel/>
          </Grid>
          <Grid item xs>
            <DiagnosesPanel />
            <NotesPanel />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default PatientDetailsView;
