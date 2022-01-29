// Router imports
import { Navigate, RouteObject } from "react-router-dom"
import { AppointmentsView, DashboardView, PatientDetailsView, PatientsView } from "../views";

// Layouts imports
import { LoggedLayout, LoginLayout } from "../views/layouts"
import SignInView from './../views/SignInView/SignInView';

const routerConfig = (isAuth: Function):RouteObject[] => [
    {
        path: "/",
        children: [
            {
                path: "/",
                element: isAuth() ? <LoggedLayout /> : <Navigate to="/login" />,
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
                element: !isAuth() ? <LoginLayout /> : <Navigate to="/" />,
                children: [
                    {
                        index: true,
                        element: <SignInView/>
                    }
                ]
            },
            {
                path: "*",
                element: <Navigate to="/" />,
            }
        ]
    }
]

export default routerConfig