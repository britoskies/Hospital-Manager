import React, { useContext, useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridSelectionModel, GridValueGetterParams } from '@mui/x-data-grid';
import Patients from '../../models/patient/PatientModel';
import Appointments from '../../models/appointments/ApptModel';
import { AppContext } from '../../persistence/context';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70, hide: true },
  { field: 'name', headerName: 'Full Name', width: 180 },
  { field: 'phone', headerName: 'Phone Number', width: 160 },
  { field: 'email', headerName: 'Email', width: 180, type: 'date' },
  { field: 'gender', headerName: 'Gender', width: 100 },
  { field: 'status', headerName: 'Status', width: 100 },
];

export default function DataTable() {
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);

  const [patients, ptloading, pterror] = Patients.findAll()

  const [rows, setRows] = useState<any[]>([])

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
    }
  }, [patients])

  
  //selectionModel.map(s => console.log(rows[s-1]))

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
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
