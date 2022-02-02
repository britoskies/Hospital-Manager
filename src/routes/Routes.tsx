// React imports
import React from "react";

// Router imports
import { Routes as RTS, Route, Navigate, Outlet } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// Components Imports
import {
    DashboardView,
    PatientsView,
    PatientDetailsView,
    AppointmentsView,
    SignInView,
} from "../views";
import { LoggedLayout, LoginLayout } from "../views/layouts";

type Props = {};

function Routes({}: Props) {
    return (
        <RTS>
            <Route element={<ProtectedRoute />}>
                <Route path="/" element={<LoggedLayout />}>
                    <Route path="/dashboard" element={<DashboardView />} />
                    <Route path="/patients" element={<PatientsView />} />
                    <Route
                        path="/patient"
                        element={<Navigate to="/patients" />}
                    />
                    <Route
                        path="/patient/:id"
                        element={<PatientDetailsView />}
                    />
                    <Route
                        path="/appointments"
                        element={<AppointmentsView />}
                    />
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                </Route>
            </Route>
            <Route path="/login" element={<LoginLayout />}>
                <Route index element={<SignInView />} />
            </Route>
        </RTS>
    );
}
export default Routes;
