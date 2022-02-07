import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Paper } from '@mui/material'
import { DataGrid, GridColDef, GridSelectionModel, GridValueGetterParams } from '@mui/x-data-grid';
import Patients from '../../models/patient/PatientModel';
import Appointments from '../../models/appointments/ApptModel';
import { AppContext } from '../../persistence/context';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70, hide: true },
  { field: 'name', headerName: 'Full Name', width: 220 },
  { field: 'phone', headerName: 'Phone Number', width: 200 },
  { field: 'email', headerName: 'Email', width: 260, type: 'date' },
  { field: 'gender', headerName: 'Gender', width: 100 },
  { field: 'status', headerName: 'Status', width: 100 },
];

type Props = {
  searchTerm: string;
};

export default function DataTable({searchTerm}: Props) {
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);

  const [patients, ptloading, pterror] = Patients.findAll()

  const [rows, setRows] = useState<any[]>([])

  const [filteredRows, setFilteredRows] = useState<any[]>(rows)

  const navigate = useNavigate()

  function formatPhoneNumber(phoneNumberString: string) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = (match[1] ? '+1 ' : '');
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }
    return null;
  }

  useEffect(() => {
    if(patients){
      let tmprows: any[] = []

      patients.docs.map(doc => {
        tmprows.push({
          id: doc.id,
          name: doc.data().name,
          phone: formatPhoneNumber(doc.data().phone_number),
          email: doc.data().email,
          gender: (doc.data().gender == "M" ? "Male" : (doc.data().gender == "F" ? "Female" : "Other")),
          status: (doc.data().active_status ? "Active" : "Inactive")
        })
      })

      setRows(tmprows)
      setFilteredRows(tmprows)
    }
  }, [patients])

  useEffect(() => {
    let filtered = rows.filter((r: any) => {
      return (
        r.name.toLowerCase().includes(searchTerm) ||
        r.email.toLowerCase().includes(searchTerm)
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
        rowsPerPageOptions={[6]}
        onRowClick={(r) => navigate(`/patient/${r.id}`)}
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
