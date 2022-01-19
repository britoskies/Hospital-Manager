// Router imports
import { Navigate, RouteObject } from "react-router-dom"

// Layouts imports
import { LoggedLayout, LoginLayout } from "../views/layouts"

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
                element: !isAuth() ? <LoginLayout /> : <Navigate to="/" />,
            },
            {
                path: "*",
                element: <Navigate to="/" />,
            }
        ]
    }
]

export default routerConfig