import React, { useState } from "react";
import { Package, CheckCircle, XCircle, ChevronRight } from "lucide-react";
import { getRandomDate } from "../../utils/generateRandomDate";


const OrdersTab = () => {
  const [activeTab, setActiveTab] = useState("active");

  // Sample orders (you can fetch these later from API)
  const orders = {
    active: [
    {
    id: 1,
    cat: 'Fashion',
    name: "Ethnic School bag for children",
    price: 1200,
    image: "/img/tp.png",
    stock: 'In Stock',
    date: getRandomDate(),
  },
  {
    id: 2,
    cat: 'Toddy',
    name: "Childrens Teddy toy of high quality",
    price: 950,
    image: "/img/tp-1.png",
    stock: 'In Stock',
    date: getRandomDate(),
  },
  {
    id: 3,
    cat: 'Electronic',
    name: "Orange smart watch with square dial",
    price: 1300,
    image: "/img/tp-2.png",
    stock: 'In Stock',
    date: getRandomDate(),
  },
  {
    id: 4,
    cat: 'Fashion',
    name: "Leather jacket for men",
    price: 1200,
    image: "/img/tp-3.png",
    stock: 'In Stock',
    date: getRandomDate(),
  },
  {
    id: 5,
    cat: 'Fashion',
    name: "White shirt for man",
    price: 1200,
    image: "/img/tp-4.png",
    stock: 'In Stock',
    date: getRandomDate(),
  },
  {
    id: 6,
    cat: 'Fashion',
    name: "Ethnic School bag for children",
    price: 1200,
    image: "/img/tp-5.png",
    stock: 'In Stock',
    date: getRandomDate(),
  },
  {
    id: 7,
    cat: 'Electronic',
    name: "Dslr Camera",
    price: 1200,
    image: "/img/tp-2.png",
    stock: 'In Stock',
    date: getRandomDate(),
  },
    ],
    completed: [
    {
    id: 3,
    cat: 'Electronic',
    name: "Orange smart watch with square dial",
    price: 1300,
    image: "/img/tp-2.png",
    stock: 'In Stock',
    date: getRandomDate(),
  },
  {
    id: 4,
    cat: 'Fashion',
    name: "Leather jacket for men",
    price: 1200,
    image: "/img/tp-3.png",
    stock: 'In Stock',
    date: getRandomDate(),
  },
  {
    id: 5,
    cat: 'Fashion',
    name: "White shirt for man",
    price: 1200,
    image: "/img/tp-4.png",
    stock: 'In Stock',
    date: getRandomDate(),
  },
  {
    id: 6,
    cat: 'Fashion',
    name: "Ethnic School bag for children",
    price: 1200,
    image: "/img/tp-5.png",
    stock: 'In Stock',
    date: getRandomDate(),
  },
  {
    id: 7,
    cat: 'Electronic',
    name: "Dslr Camera",
    price: 1200,
    image: "/img/tp-2.png",
    stock: 'In Stock',
    date: getRandomDate(),
  },
    ],
    cancelled: [
        {
    id: 2,
    cat: 'Toddy',
    name: "Childrens Teddy toy of high quality",
    price: 950,
    image: "/img/tp-1.png",
    stock: 'In Stock',
    date: getRandomDate(),
  },
  {
    id: 3,
    cat: 'Electronic',
    name: "Orange smart watch with square dial",
    price: 1300,
    image: "/img/tp-2.png",
    stock: 'In Stock',
    date: getRandomDate(),
  },
  {
    id: 4,
    cat: 'Fashion',
    name: "Leather jacket for men",
    price: 1200,
    image: "/img/tp-3.png",
    stock: 'In Stock',
    date: getRandomDate(),
  },
    ],
  };

  const renderIcon = (tab) => {
    switch (tab) {
      case "active":
        return <Package className="w-5 h-5" />;
      case "completed":
        return <CheckCircle className="w-5 h-5" />;
      case "cancelled":
        return <XCircle className="w-5 h-5" />;
      default:
        return null;
    }
  };

return (
    <div className="bg-white rounded-md shadow-md p-6 mt-6">
      <h2 className="text-gray-800 font-semibold mb-4">Order Overview</h2>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-gray-200 pb-2">
        {["active", "completed", "cancelled"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-2 px-4 py-2 rounded-t-md transition-colors ${
              activeTab === tab
                ? "border-b-2 border-amber-500 text-amber-600 font-semibold"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {renderIcon(tab)}
            <span className="capitalize">{tab} Orders</span>
          </button>
        ))}
      </div>

      {/* Orders Table */}
      {orders[activeTab].length === 0 ? (
        <p className="text-gray-500 text-sm text-center py-4">No orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <tbody>
              {orders[activeTab].map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50 transition-colors border-b border-gray-200"
                >
                  <td className="p-3 text-sm text-gray-700">
                    <div className="">
                         <span className="text-gray-500 text-sm">Name</span>
                         <h2 className="font-semibold text-gray-700">{order.name} </h2>
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-800 font-medium">
                    <div className="">
                         <span className="text-gray-500 text-sm">Price</span>
                         <h2 className="font-semibold text-gray-700">{order.price} </h2>
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-800 font-medium">
                    <div className="">
                         <span className="text-gray-500 text-sm">Delivery Date</span>
                         <h2 className="font-semibold text-gray-700">{order.date} </h2>
                    </div>
                  </td>
                 <td className="p-3 text-sm text-gray-800 font-medium">
                    <div className="">
                         <img src={order.image} alt="" className="sm:w-10"/>
                    </div>
                  </td>
                  <td ><ChevronRight className="w-8 text-gray-400 cursor-pointer"/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrdersTab;
