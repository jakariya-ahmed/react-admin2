
import { useState } from "react";

export default function ProductAddForm() {
  const [product, setProduct] = useState({
    title: '',
    shortDesc: '',
    price: '',
    salePrice: '',
    quantity: '',
    weight: '',
    category: '',
    brand: '',
    tags: '',
    image: null,
    gallery: [],
    attributes: [],
  });


// Handle Input Change
const handleProductChange = (e) => {
  const [ name, value] = e.target;
  setProduct({...product, [name] : value});
} 




return (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-6 mt-4">
      
      {/* Left Section  */}
      <div className="bg-white p-5 shadow-sm rounded-sm border-t-2 border-indigo-900">
        <div className="px-2">
          <label htmlFor="" className="block font-medium mb-1 font-semibold text-gray-700">Produdct Title <span className="text-indigo-900">*</span> </label>
          <input type="text" name="title" value={product.title}
            onChange={handleProductChange}
            placeholder="Product Name"
            className="w-full mb-2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-0 focus:ring-indigo-700 focus:border-1 focus:border-indigo-900 focus:outline-none transition-all duration-150"
          />
        </div>
        <div className="px-2">
          <label htmlFor="" className="block font-medium mb-1 font-semibold text-gray-700">Short Description <span className="text-indigo-900">*</span> </label>
          <textarea type="text" name="shortDesc" value={product.shortDesc}
            onChange={handleProductChange}
            placeholder="Write Product Short Description...."
            className="w-full mb-2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-0 focus:ring-indigo-700 focus:border-1 focus:border-indigo-900 focus:outline-none transition-all duration-150"
          ></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-x-2">
          <div className="px-2">
            <label htmlFor="" className="block font-medium mb-1 font-semibold text-gray-700">Price <span className="text-indigo-900">*</span> </label>
            <input type="number" name="price" value={product.price}
              onChange={handleProductChange}
              placeholder="Price"
              className="w-full mb-2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-0 focus:ring-indigo-700 focus:border-1 focus:border-indigo-900 focus:outline-none transition-all duration-150"
            />
          </div>
          <div className="px-2">
            <label htmlFor="" className="block font-medium mb-1 font-semibold text-gray-700">Sale Price <span className="text-indigo-900">*</span> </label>
            <input type="number" name="salePrice" value={product.salePrice}
              onChange={handleProductChange}
              placeholder="Sale Price"
              className="w-full mb-2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-0 focus:ring-indigo-700 focus:border-1 focus:border-indigo-900 focus:outline-none transition-all duration-150"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-x-2">
          <div className="px-2">
            <label htmlFor="" className="block font-medium mb-1 font-semibold text-gray-700">Stock Qty <span className="text-indigo-900">*</span> </label>
            <input type="number" name="price" value={product.quantity}
              onChange={handleProductChange}
              placeholder="quantity"
              className="w-full mb-2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-0 focus:ring-indigo-700 focus:border-1 focus:border-indigo-900 focus:outline-none transition-all duration-150"
            />
          </div>
          <div className="px-2">
            <label htmlFor="" className="block font-medium mb-1 font-semibold text-gray-700">Weight <span className="text-indigo-900">*</span> </label>
            <input type="number" name="salePrice" value={product.weight}
              onChange={handleProductChange}
              placeholder="Weight"
              className="w-full mb-2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-0 focus:ring-indigo-700 focus:border-1 focus:border-indigo-900 focus:outline-none transition-all duration-150"
            />
          </div>
        </div>
        {/* Attributes Section  */}
        <div className="border-t-1 border-indigo-900 pt-6">

        </div>
      </div>
      <div className="w-[100%] md:w-[30%]">

      </div>
  </div>
);


}

