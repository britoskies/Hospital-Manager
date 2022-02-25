import React, { Dispatch, SetStateAction, useContext, useEffect } from 'react';

// MUI imports
import { Box, FormControl, TextField, Typography } from '@mui/material';
import CalendarPicker from '@mui/lab/CalendarPicker';
import { PickerSelectionState } from '@mui/lab/internal/pickers/hooks/usePickerState';

// Model imports
import Appointments from '../../../models/appointments/ApptModel';
import Patients from '../../../models/patient/PatientModel';

// App Context
import { AppContext } from '../../../persistence/context';

type Props = {
    date: string
    setDate: Dispatch<SetStateAction<string>>
};

function Calendar({ date, setDate }: Props) {

    const [textFieldDate, setTextFieldDate] = React.useState(new Date().toLocaleDateString("sv-SE"));

    const handleChange = (e: any) => { 
        setTextFieldDate(e.target.value);
        setDate(e.target.value);
    }

    return (
        <Box>
            <FormControl sx={{ mb: 3, mt: 5 }} fullWidth>
                <TextField
                    id="date"
                    label="Date"
                    type="date"
                    defaultValue={textFieldDate}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    fullWidth
                />
            </FormControl>
        </Box>
    )
}

export default Calendar;