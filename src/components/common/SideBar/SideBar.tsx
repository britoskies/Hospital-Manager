import React from "react";
import { Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import {
  Home as HomeIcon,
  CalendarToday as CalendarIcon,
} from "@mui/icons-material";
import { mdiHome, mdiAccountClock, mdiCalendarBlank } from "@mdi/js";
import { Icon } from "@mdi/react";

type Props = {};

import "./SideBar.css";

function SideBar({ }: Props) {
  const location = useLocation();

  const activeRoute: string = location.pathname.replace('/', '')

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        bgcolor: '#1D3557',
        mr: 3,
        p: 3
      }}
      className="sidebar">
      <Box sx={{position: 'relative', height: '48px', width: '24px', mb: '20px'}} className="sidebar-img-container">
        <img src="/src/assets/img/logo.png" height="40" className="sidebar-img"/>
      </Box>
      <ul className="sidebar-icon-list">
        <li className="sidebar-icon">
          <Link to="/dashboard" className={`sidebar-icon ${activeRoute == "dashboard" ? "active":""}`}>
            <Icon path={mdiHome} size={1.3} />
          </Link>
        </li>
        <li className="sidebar-icon">
          <Link to="/patients" className={`sidebar-icon ${activeRoute == "patients" ? "active":""}`}>
            <Icon path={mdiAccountClock} size={1.3} />
          </Link>
        </li>
        <li className="sidebar-icon">
          <Link to="/appointments" className={`sidebar-icon ${activeRoute == "appointments" ? "active":""}`}>
            <Icon path={mdiCalendarBlank} size={1.3} />
          </Link>
        </li>
      </ul>
    </Box>
  );
}

export default SideBar;
