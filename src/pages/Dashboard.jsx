import { div } from "framer-motion/client";
import DashboardStats from "../component/dashboard/DashboardStats";
import SalesTrendChart from "../component/dashboard/SalesTrendChart";
import CategoryPieChart from "../component/dashboard/CategoryPieChart";
import TopProducts from "../component/dashboard/TopProducts";
export default function Dashboard() { 
    return (
        <div>
            <h2 className="text-xl font-semibold mb-6">Ecommerce</h2>
            <div className="grid grid-cols-1 gap-y-4 lg:gap-x-4 lg:grid-cols-2 ">
                <div className="space-y-6">
                    <DashboardStats /> 
                    <TopProducts />
                </div>
                <div className="space-y-6">
                    <SalesTrendChart />
                    <CategoryPieChart />
                </div>
            
            </div>

        </div>

    );
}