import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

function SideBar({}: Props) {
  return (
    <React.Fragment>
        <div>SideBar Works!</div>
        <ul>
            <li><Link to="/dashboard">Go to Dashboard</Link></li>
            <li><Link to="/patients">Go to Patients</Link></li>
            <li><Link to="/appointments">Go to Appointments</Link></li>
        </ul>
    </React.Fragment>
  );
}

export default SideBar;
