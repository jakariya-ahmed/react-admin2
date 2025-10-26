import React, { useState } from "react";
import { getRandomDate } from "../../utils/generateRandomDate";
import { Search, Filter } from "lucide-react";
import { products } from "../../data/dashboardData";

const ProductOverview = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ Dummy Product Data


  const categories = ["All", "Fashion", "Electronics", "Home"];

  // ✅ Filtered Products
  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchCategory =
      selectedCategory === "All" || product.cat === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <h2 className="text-lg font-semibold text-gray-800">Product Overview</h2>

        {/* Filters */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search product..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>

          <div className="relative">
            <Filter className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-9 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 bg-white"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="p-3 font-semibold">ID</th>
              <th className="p-3 font-semibold">Product</th>
              <th className="p-3 font-semibold">Category</th>
              <th className="p-3 font-semibold">Price</th>
              <th className="p-3 font-semibold">Stock</th>
              <th className="p-3 font-semibold">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="p-3 text-sm text-gray-600">{product.id}</td>
                  <td className="p-3 flex items-center gap-3 text-sm font-medium text-gray-800">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 rounded-md object-cover"
                    />
                    {product.name}
                  </td>
                  <td className="p-3 text-sm text-gray-600">{product.cat}</td>
                  <td className="p-3 text-sm text-gray-800 font-semibold">
                    ${product.price}
                  </td>
                  <td
                    className={`p-3 text-sm font-medium ${
                      product.stock === "In Stock"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {product.stock}
                  </td>
                  <td className="p-3 text-sm text-gray-600">{product.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-6 text-sm text-gray-500"
                >
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductOverview;
