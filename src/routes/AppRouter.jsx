import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "../layouts/AdminLayout";
import Dashboard from "../pages/Dashboard";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* admin routes  */}
                <Route path="admin/" element={<AdminDashboard />}>
                    <Route index element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}