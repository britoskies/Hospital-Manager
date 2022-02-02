// Router imports
import { CircularProgress } from "@mui/material";
import { Navigate, RouteObject } from "react-router-dom"
import { AppointmentsView, DashboardView, PatientDetailsView, PatientsView } from "../views";

// Layouts imports
import { LoggedLayout, LoginLayout } from "../views/layouts"
import SignInView from './../views/SignInView/SignInView';

// Hooks Imports

import { useAuthStatus } from "../hooks";

const routerConfig = (isAuth: Function): RouteObject[] => {
    const { loggedIn, checkingStatus } = useAuthStatus();
    return([
        {
            path: "/",
            element: checkingStatus ? <CircularProgress /> : loggedIn ? <LoggedLayout /> : <Navigate to="/login" />,
            children: [
                {
                    path: "/dashboard",
                    element: <DashboardView />,
                },
                {
                    path: "/patients",
                    element: <PatientsView />,
                },
                {
                    path: "/patient",
                    element: <Navigate to="/patients" />
                },
                {
                    path: "/patient/:id",
                    element: <PatientDetailsView />,
                },
                {
                    path: "/appointments",
                    element: <AppointmentsView />,
                },
                {
                    path: "/",
                    element: <Navigate to="/dashboard" />,
                },
            ]
        },
        {
            path: '/login',
            element: loggedIn ? <Navigate to="/" /> : <LoginLayout />,
            children: [
                {
                    index: true,
                    element: <SignInView />
                }
            ]
        },
        {
            path: "*",
            element: <Navigate to="/" />,
        }
    ])
}

export default routerConfig