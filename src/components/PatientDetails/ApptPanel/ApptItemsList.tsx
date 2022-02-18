import React from 'react';
import './scrollbar.css';

import ApptItem from './ApptItem';

// Firebase imports
import { DocumentData, QuerySnapshot } from 'firebase/firestore';

// MUI imports
import { Box } from '@mui/material';

type Props = {
    apptData: QuerySnapshot<DocumentData> | undefined;
};

function ApptItemsList({ apptData }: Props) {

    let key = 0;

    return (
        <Box className='items-list' sx={{ display: 'flex', flexDirection: 'column', height: '420px', gap: '10px', marginTop: '30px', overflowY: 'auto' }}>
            {
                apptData?.docs.map(doc => <ApptItem key={key++} apptData={doc.data()} ></ApptItem>)
            }
        </Box>
    );
}

export default ApptItemsList;