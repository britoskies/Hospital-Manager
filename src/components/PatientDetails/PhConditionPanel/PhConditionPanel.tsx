import React from 'react';
import { useParams } from 'react-router-dom';

// Components and utils
import PhConditionItem from './PhConditionItem';
import PhConditionDialog from './PhConditionDialog';
import { formatDate } from '../../../utils/formatDate';

// Model
import Patients from '../../../models/patient/PatientModel';

// Mui
import { Paper, Typography, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

type Props = {};

function PhConditionPanel({ }: Props) {

    const { id } = useParams();
    const [phCondition] = Patients.findById(`${id}`);

    const date = phCondition?.data()?.physical_condition?.date;
    const formatedDate = formatDate(new Date(date?.seconds * 1000));
    const blood = phCondition?.data()?.physical_condition?.blood_pressure;
    const sugar = phCondition?.data()?.physical_condition?.sugar_level;
    const cholesterol = phCondition?.data()?.physical_condition?.cholesterol;

    const [dateState, setDate] = React.useState<string>(formatedDate);
    const [bloodState, setBlood] = React.useState<string>(blood);
    const [sugarState, setSugar] = React.useState<string>(sugar);
    const [cholesterolState, setCholesterol] = React.useState<string>(cholesterol);

    const [open, setOpen] = React.useState<boolean>(false);

    const handleClickOpen = () => {
        setDate(formatedDate);
        setBlood(blood);
        setSugar(sugar);
        setCholesterol(cholesterol);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Paper elevation={0} sx={{
            width: 'auto',
            height: 'auto',
            p: '24px',
            margin: '16px 0px 16px 0px'
        }}>
            <Typography component='div' sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#333',
                fontWeight: 500,
                fontSize: '20px'
            }}>
                Physical Condition
                <IconButton
                    id="moreverticon"
                    aria-haspopup="true"
                    onClick={handleClickOpen}
                >
                    <MoreVertIcon />
                </IconButton>
            </Typography>
            <PhConditionItem
                date={new Date(formatedDate).toLocaleDateString()}
                blood={blood}
                sugar={sugar}
                cholesterol={cholesterol}
            />
            <PhConditionDialog
                open={open}
                onClose={handleClose}
                date={dateState}
                blood={bloodState}
                sugar={sugarState}
                cholesterol={cholesterolState}
                setDate={setDate}
                setBlood={setBlood}
                setSugar={setSugar}
                setCholesterol={setCholesterol}
            />
        </Paper>
    )
}

export default PhConditionPanel;