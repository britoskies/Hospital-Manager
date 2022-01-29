import React from 'react';
import ApptItemsList from './ApptItemsList';
import Calendar from './Calendar';

type Props = {};

function ApptColumn({ }: Props) {
    return (
        <div>
            Appointment Column Works!
            <Calendar />
            <p> 23 appointments </p>
            <button></button>
            <ApptItemsList/>
        </div>
    )
}

export default ApptColumn;