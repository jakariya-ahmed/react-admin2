import React, { useState } from "react";
import { Search, Filter, Edit3, EyeIcon, Trash } from "lucide-react";
import { products } from "../../data/dashboardData";
import StatusBadge from "../product/StatusBadge ";

const ProductOverview = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ["All", "Fashion", "Electronics", "Home"];

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchCategory =
      selectedCategory === "All" || product.cat === selectedCategory;
    return matchSearch && matchCategory;
  });

  // ✅ Pagination logic
  const productsPerPage = 10;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll up on page change
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <h2 className="text-lg font-semibold text-gray-800">Product Overview</h2>

        {/* Filters */}
        <div className="flex items-center gap-3">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search product..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-9 pr-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
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
              <th className="p-3 font-semibold">Status</th>
              <th className="p-3 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
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
                  <td className="p-3 text-sm text-gray-600">
                    <StatusBadge status ={product.status }/>
                  </td>

                  <td className="p-3 text-sm text-gray-600">
                    <div className="flex gap-x-2">
                      <Edit3 className="w-5 h-5 text-purple-900 cursor-pointer" />
                      <EyeIcon className="w-5 h-5 text-indigo-900 cursor-pointer" />
                      <Trash className="w-5 h-5 text-red-500 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-6 text-sm text-gray-500"
                >
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-end items-center mt-6 gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm border rounded-md disabled:opacity-50 hover:bg-gray-100"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 text-sm border rounded-md ${
                currentPage === index + 1
                  ? "bg-amber-900 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-sm border rounded-md disabled:opacity-50 hover:bg-gray-100"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductOverview;
