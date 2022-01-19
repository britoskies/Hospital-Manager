// Router imports
import React from 'react';
import { Navigate, RouteObject, Outlet, useParams } from "react-router-dom"
import { LoggedLayout, LoginLayout } from "../views/layouts"

const LoginView = () => <div>LoginView works</div>

const routerConfig = (guard: Function):RouteObject[] => [
    {
        path: "/",
        children: [
            {
                path: "/",
                element: guard() ? <LoggedLayout /> : <Navigate to="/login" />,
                children: [
                    {
                        path: "/dashboard",
                        element: <div>Dashboard Works</div>,
                    },
                    {
                        path: "/patients",
                        element: <div>Patients Works</div>,
                    },
                    {
                        path: "/appointments",
                        element: <div>Appointments Works</div>,
                    },
                    {
                        path: "/dashboard",
                        element: <div>Dashboard Works</div>,
                    },
                    {
                        path: "/patient",
                        element: <Navigate to="/patients" />
                    },
                    {
                        path: "/patient/:id",
                        element: <div>Patient Details Works</div>,
                    },
                    {
                        path: "/",
                        element: <Navigate to="/dashboard" />,
                    },
                ]
            },
            {
                path: '/login',
                element: !guard() ? <LoginLayout /> : <Navigate to="/" />,
            },
            {
                path: "*",
                element: <Navigate to="/" />,
            }
        ]
    }
]

export default routerConfig