import { LucideDollarSign, ShoppingBag, ShoppingCart, User } from "lucide-react";
import { dashboardStats } from "../../data/dashboardData";
const DashboardStats = () => {
const stats = [
    { 
        title: "Total Sales", icon: ShoppingBag, 
        value: dashboardStats.totalSales , percent: '+12.03',
        bg: 'bg-indigo-100',
    },
    { 
        title: "Revenue", icon: LucideDollarSign, 
        value: `$${dashboardStats.totalRevenue}`, 
        percent: '+20.90',
    },
    { 
        title: "Customers", icon: User, 
        value: dashboardStats.totalCustomers, percent: '+15.03',
        bg: 'bg-purple-100'
    },
    { 
        title: "Orders", icon: ShoppingCart, 
        value: dashboardStats.totalOrders, percent: '+30.59',
        bg: 'bg-cyan-100'
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
      {stats.map((item, index) => {
        const Icon = item.icon; // Dynamically get the icon component
        return (
        <div
            key={index}
            className="flex items-center p-4 bg-white rounded-md shadow"
        >
            <div
            className={`p-3 rounded-md ${item.bg || 'bg-gray-100'}`}
            >
            <Icon className="w-6 h-6 text-gray-700" />
            </div>
            <div className="ml-4">
            <p className="text-sm text-gray-500">{item.title}</p>
            <p className="text-lg text-[#111C43] font-semibold">{item.value}</p>
            {item.percent && (
                <p className="text-gray-500 text-sm">Increased by {item.percent} this month</p>
            )}
            </div>
        </div>
        );
    })}
    </div>
  );
};

export default DashboardStats;