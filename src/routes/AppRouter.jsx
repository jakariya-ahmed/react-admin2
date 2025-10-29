import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "../layouts/AdminLayout";
import Dashboard from "../pages/Dashboard";
import CreateProduct from "../pages/product/CreateProduct";
import ProductsList from "../pages/product/ProductsList";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* admin routes  */}
                <Route path="admin/" element={<AdminDashboard />}>
                    <Route index element={<Dashboard />} />
                    <Route path="create-product" element={<CreateProduct /> } />
                    <Route path="products" element={<ProductsList /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}