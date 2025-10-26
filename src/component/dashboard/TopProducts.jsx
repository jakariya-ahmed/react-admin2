
import { topSellingProducts } from "../../data/dashboardData";

export default function TopProducts() {
  return (
    <div className="bg-white p-4 rounded-md shadow">

      <h2 className="text-gray-800 font-semibold mb-4">Top Selling Products</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {topSellingProducts.map((product, index) => (
          <div
            key={index}
            className="flex items-center p-2 border border-gray-100 rounded-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="ml-4">
              <h3 className="text-gray-800 font-medium">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.sales} Sales</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


