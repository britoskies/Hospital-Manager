import React from 'react';
import ApptItemsList from './ApptItemsList'
import ApptTimeSlider from './ApptTimeSlider'

type Props = {};

function ApptPanel({ }: Props) {
    return (
        <div>
            Appointment Panel Works!
            <ApptTimeSlider />
            <button></button>
            <ApptItemsList />
        </div>
    )
}

export default ApptPanel;