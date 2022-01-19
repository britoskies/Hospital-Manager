// Router imports
import { Navigate, RouteObject, Outlet } from "react-router-dom"

const LoggedLayout = () => <div>LoggedLayout works <Outlet/></div>
const LoginView = () => <div>LoginView works</div>

const routerConfig = (guard: Function):RouteObject[] => [
    {
        path: "/",
        children: [
            {
                path: "/",
                element: <LoggedLayout />,
                children: [
                    {
                        path: "/",
                        element: guard() ? <div>HomeView Works</div>: <Navigate to="/login" />,
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

            
            // {
            //     path: "/login",
            //     element: !guard() ? <Navigate to="/" /> : <LoginView />,
            // },
            // {
            //     path: "/logout",
            //     element: !guard() ? <Navigate to="/" /> : <p>Logging out</p>,
            // },
            // 
        ]
    }
]

export default routerConfig