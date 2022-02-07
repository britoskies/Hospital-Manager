import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Paper } from '@mui/material'
import { DataGrid, GridColDef, GridSelectionModel, GridValueGetterParams } from '@mui/x-data-grid';
import Patients from '../../models/patient/PatientModel';
import Appointments from '../../models/appointments/ApptModel';
import { AppContext } from '../../persistence/context';
import { Spinner } from '../common';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70, hide: true },
  { field: 'patient', headerName: 'Patient', width: 220 },
  { field: 'doctor', headerName: 'Doctor', width: 200 },
  { field: 'date', headerName: 'Date', width: 120, type: 'date' },
  { field: 'treatment', headerName: 'Treatment', width: 500 },
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

  const [filteredRows, setFilteredRows] = useState<any[]>(rows)

  const navigate = useNavigate()

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
      setFilteredRows(tmprows)
    }
  }, [patients, appointments])

  useEffect(() => {
    let filtered = rows.filter((r: any) => {
      return (
        r.patient.toLowerCase().includes(searchTerm) ||
        r.treatment.toLowerCase().includes(searchTerm) ||
        r.doctor.toLowerCase().includes(searchTerm)
      )
    })
    setFilteredRows(filtered)
  }, [searchTerm])

  
  //selectionModel.map(s => console.log(rows[s-1]))

  return (
    <Paper sx={{ height: "370px", width: '100%', mt: 2, mb: 3 }} elevation={0}>
      <DataGrid
        rows={filteredRows}
        columns={columns}
        pageSize={6}
        components={{NoRowsOverlay: Spinner}}
        rowsPerPageOptions={[6]}
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
        selectionModel={selectionModel}
        //checkboxSelection
        disableSelectionOnClick
      />
    </Paper>
  );
}
