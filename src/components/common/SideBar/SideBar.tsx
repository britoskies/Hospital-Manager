import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

function SideBar({}: Props) {
  return (
    <React.Fragment>
        <div>SideBar Works!</div>
        <Link to="/dashboard">Go to Dashboard</Link>
        <Link to="/patients">Go to Patients</Link>
        <Link to="/Appointments">Go to Appointments</Link>
    </React.Fragment>
  );
}

export default SideBar;
