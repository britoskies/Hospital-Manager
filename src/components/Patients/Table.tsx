import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

// Components
import { Spinner } from '../common';

// Mui
import { Paper, Box } from '@mui/material'
import { DataGrid, GridColDef, GridSelectionModel, GridRenderCellParams } from '@mui/x-data-grid';

// Model
import Patients from '../../models/patient/PatientModel';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70, hide: true, headerClassName: 'patients-table-header' },
  { field: 'name', headerName: 'Full Name', width: 220, headerClassName: 'patients-table-header' },
  { field: 'phone', headerName: 'Phone Number', width: 200, headerClassName: 'patients-table-header' },
  { field: 'email', headerName: 'Email', width: 260, type: 'date', headerClassName: 'patients-table-header' },
  { field: 'gender', headerName: 'Gender', width: 140, headerClassName: 'patients-table-header' },
  {
    field: 'status',
    headerName: 'Status',
    width: 140,
    headerClassName: 'patients-table-header',
    renderCell: (params: GridRenderCellParams<string>) => (
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Box
          sx={{
            bgcolor: `${params.value == "Active" ? "green" : "red"}`,
            display: 'flex',
            height: 12,
            width: 12,
            borderRadius: '50%',
            mr: 1
          }}
        />
        {params.value}
      </Box>
    )
  },
];

type Props = {
  searchTerm: string;
};

export default function DataTable({ searchTerm }: Props) {
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
    if (patients) {
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

  return (
    <Paper sx={{
      height: "475px",
      width: '100%',
      mt: 2,
      px: 2,
      py: 0.5,
      '& .patients-table': {
        border: 0,
        '& *': {
          border: 0
        }
      },
      '& .patients-table-header': {
        bgcolor: 'white',
        px: 4,
      },
      '& .patients-table-row': {
        cursor: 'pointer',
        my: 0.8,
        px: 3,
        borderRadius: '8px',
        transition: 'all 0.1s ease-out 0s',
        '&.patients-table-row--0': {
          bgcolor: "#f5f5f5",
        },
        '&.patients-table-row--1': {
          bgcolor: "white",
        },
        '&:hover': {
          bgcolor: "#f0f0f0",
        },
      }
    }}
      elevation={0}
    >
      <DataGrid
        rows={filteredRows}
        columns={columns}
        pageSize={6}
        components={{ NoRowsOverlay: Spinner }}
        rowsPerPageOptions={[6]}
        onRowClick={(r) => navigate(`/patient/${r.id}`)}
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
        getRowClassName={(params) => `patients-table-row patients-table-row--${(filteredRows.findIndex(row => row.id == params.id)) % 2}`}
        selectionModel={selectionModel}
        //checkboxSelection
        disableSelectionOnClick
        className="patients-table"
      />
    </Paper>
  );
}
