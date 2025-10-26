import { div } from "framer-motion/client";
import DashboardStats from "../component/dashboard/DashboardStats";

export default function Dashboard() { 
    return (
        <div>
            <h2 className="text-xl font-semibold mb-6">Ecommerce</h2>
            <div className="grid grid-cols-2">
                <div>
                    <DashboardStats /> 
                </div>
                <div>

                </div>
            
            </div>

        </div>

    );
}