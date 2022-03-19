import React from 'react';
import { useParams } from 'react-router-dom';

// MUI
import { Paper, Box, Typography, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Components and utils
import DetailsPanelDialog from './DetailsPanelDialog';
import { formatDate } from '../../../utils/formatDate';

// Model
import Patients from '../../../models/patient/PatientModel';

type Props = {
    bornDate: string,
    ssn: number,
    address: string,
    phoneNumber: string,
    gender: string,
};

function InfoPanel({ bornDate, ssn, address, phoneNumber, gender }: Props) {

    let { id } = useParams();
    const [patients] = Patients.findById(`${id}`);

    const patientDoB = patients?.data()?.born_date;
    const formatedDoB = formatDate(new Date(patientDoB?.seconds * 1000));
    const patientSsn = patients?.data()?.social_number;
    const patientAddress = patients?.data()?.address;
    const patientPhone = patients?.data()?.phone_number;
    const patientGender: string = patients?.data()?.gender;

    const [dateOfBirth, setDateOfBirth] = React.useState<string>(formatedDoB);
    const [ssnState, setSsn] = React.useState<string>(patientSsn);
    const [addressState, setAddress] = React.useState<string>(patientAddress);
    const [phoneState, setPhone] = React.useState<string>(patientPhone);
    const [genderState, setGender] = React.useState<string>(patientGender);

    const [open, setOpen] = React.useState<boolean>(false);

    const handleClickOpen = () => {
        setDateOfBirth(formatedDoB);
        setSsn(patientSsn);
        setAddress(patientAddress);
        setPhone(patientPhone);
        setGender(patientGender);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Paper elevation={0} sx={{
                width: 'auto',
                height: 'auto',
                p: '24px'
            }}>
                <Typography component='div' sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: '#333',
                    fontWeight: 500,
                    fontSize: '20px'
                }}>
                    Details
                    <IconButton id="long-button" onClick={handleClickOpen}>
                        <MoreVertIcon />
                    </IconButton>
                </Typography>
                <Box className='info-container' sx={{ marginTop: '15px', display: 'flex', gap: '33px' }}>
                    <Box className='left-container'>
                        <Box sx={{ marginBottom: '10px' }}>
                            <Typography sx={{ color: '#C0C0C0', fontSize: '14px' }}> Date of Birth </Typography>
                            <Typography sx={{ fontWeight: 900, fontSize: '16px' }}> {bornDate} </Typography>
                        </Box>
                        <Box sx={{ marginBottom: '10px' }}>
                            <Typography sx={{ color: '#C0C0C0', fontSize: '14px' }}> Social Number </Typography>
                            <Typography sx={{ fontWeight: 900, fontSize: '16px' }}> {ssn} </Typography>
                        </Box>
                        <Box sx={{ marginBottom: '10px' }}>
                            <Typography sx={{ color: '#C0C0C0', fontSize: '14px' }}> Address </Typography>
                            <Typography sx={{ fontWeight: 900, fontSize: '16px' }}> {address} </Typography>
                        </Box>
                    </Box>
                    <Box className='right-container'>
                        <Box sx={{ marginBottom: '10px' }}>
                            <Typography sx={{ color: '#C0C0C0', fontSize: '14px' }}> Phone </Typography>
                            <Typography sx={{ fontWeight: 900, fontSize: '16px' }}> {phoneNumber} </Typography>
                        </Box>
                        <Box sx={{ marginBottom: '10px' }}>
                            <Typography sx={{ color: '#C0C0C0', fontSize: '14px' }}> Gender </Typography>
                            <Typography sx={{ fontWeight: 900, fontSize: '16px' }}> {gender} </Typography>
                        </Box>
                        <Box sx={{ marginBottom: '10px' }}>
                            <Typography sx={{ color: '#C0C0C0', fontSize: '14px' }}> Insurance </Typography>
                            <Typography sx={{ fontWeight: 900, fontSize: '16px' }}> N/A </Typography>
                        </Box>
                    </Box>
                </Box>
            </Paper>
            <DetailsPanelDialog
                open={open}
                onClose={handleClose}
                dateOfBirth={dateOfBirth}
                ssn={ssnState}
                address={addressState}
                phone={phoneState}
                gender={genderState}
                setDoB={setDateOfBirth}
                setSsn={setSsn}
                setAddress={setAddress}
                setPhone={setPhone}
                setGender={setGender}
            />
        </>
    );
}

export default InfoPanel;