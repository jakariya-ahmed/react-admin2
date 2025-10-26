
import { TopCusts } from "../../data/dashboardData";
import { ArrowRight, BadgeCheck } from "lucide-react";

export default function TopCustomers() {
    return (
        <div className="bg-white p-4 rounded-md shadow"> 
            <div className="flex justify-between items-center">
                <h2 className="text-gray-800 font-semibold mb-4">Top Customers </h2>
                <button className="flex items-center text-gray-400 gap-x-2 text-semibold text-sm cursor-pointer">View All <ArrowRight className="w-4 " /> </button>
            </div>

            {TopCusts.map((cust, i) => (
                <div key={i} className="flex items-center justify-between my-4">
                    <div className="flex items-center gap-x-2">
                        <img src={cust.image} alt="" className="w-10 h-10 rounded-full" />
                        <div>
                            <h2 className="font-semibold text-gray-700">{cust.name} </h2>
                            <p className="text-sm text-gray-400 flex">{cust.purchases} Purchases <BadgeCheck  className="w-3 ml-1 text-green-500"/>  </p>
                        </div>
                    </div>
                    
                    <div className="">
                        <span className="text-sm text-gray-700">{cust.price}tk</span>
                    </div>
                </div>
            ))}
            

        </div>

    );
}