import React from 'react';
import ApptItemsList from '../ApptPanel/ApptItemsList';
import ApptItem from '../../Dashboard/ApptItem';

// MUI imports
import { Box, Tab, Tabs } from '@mui/material';
import { Icon } from "@mdi/react";
import { mdiCalendarMonth, mdiClockTimeFour } from '@mdi/js';

type Props = {
    value: number
    setValue: (newValue: number) => void
};

function ApptTimeSlider({ value, setValue }: Props) {

    const a11yProps = (index: number) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const style = {
        width: '150px',
        marginLeft: '10px'
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label="tabs" centered>
                    <Tab icon={<Icon path={mdiCalendarMonth} size={'17px'}/>} {...a11yProps(0)} />
                    <Tab icon={<Icon path={mdiClockTimeFour} size={'17px'} />} {...a11yProps(1)} />
                </Tabs>
            </Box>
        </Box>
    );
}

export default ApptTimeSlider;