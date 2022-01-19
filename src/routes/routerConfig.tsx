// Router imports
import { Navigate, RouteObject, Outlet } from "react-router-dom"
import { LoggedLayout } from "../views/layouts"

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
                        path: "/",
                        element: <Navigate to="/dashboard" />,
                    },
                ]
            },
            {
                path: '/login',
                element: <LoginView />,
            },
            {
                path: "*",
                element: <Navigate to="/" />,
            }
        ]
    }
]

export default routerConfig