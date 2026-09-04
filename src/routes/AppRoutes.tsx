import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { PrivateRoute } from "./PrivateRoute"
import { AdminRoute } from "./AdminRoute"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* --- Public Routes --- */}
                
                {/* --- Authenticated Customer Routes --- */}
                <Route element={<PrivateRoute />}>
                </Route>
                {/* --- Admin Routes --- */}
                <Route element={<AdminRoute />}>
                </Route>
                {/* Fallback Catch-All */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    )
}