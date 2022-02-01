import React, { useContext, useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridSelectionModel, GridValueGetterParams } from '@mui/x-data-grid';
import Patients from '../../models/patient/PatientModel';
import Appointments from '../../models/appointments/ApptModel';
import { AppContext } from '../../persistence/context';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70, hide: true },
  { field: 'patient', headerName: 'Patient', width: 160 },
  { field: 'doctor', headerName: 'Doctor', width: 160 },
  { field: 'date', headerName: 'Date', width: 120, type: 'date' },
  { field: 'treatment', headerName: 'Treatment', width: 200 },
];
type Props = {
  searchTerm: string;
};

export default function DataTable({searchTerm}: Props) {
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);

  const [patients, ptloading, pterror] = Patients.findAll()
  const [appointments, apptloading, appterror] = Appointments.findAll()
  const { defaultDoctor } = useContext(AppContext)

  const [rows, setRows] = useState<any[]>([])

  const getPatientName = (patient_id: string) => {
    return patients?.docs.find(x => x.id == patient_id)?.data().name
  }

  useEffect(() => {
    if(appointments && patients){
      let tmprows: any[] = []

      appointments.docs.map(doc => {
        tmprows.push({
          id: doc.id,
          date: new Date(doc.data().date.seconds * 1000).toLocaleDateString(),
          patient: getPatientName(doc.data().patient_id),
          doctor: defaultDoctor.name,
          treatment: doc.data().treatment
        })
      })

      setRows(tmprows)
    }
  }, [patients, appointments])

  
  //selectionModel.map(s => console.log(rows[s-1]))

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
        selectionModel={selectionModel}
        //checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
