
import { PlusCircleIcon } from "lucide-react";
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
      <div>
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
              <input type="number" name="weight" value={product.weight}
                onChange={handleProductChange}
                placeholder="Weight"
                className="w-full mb-2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-0 focus:ring-indigo-700 focus:border-1 focus:border-indigo-900 focus:outline-none transition-all duration-150"
              />
            </div>
          </div>
        </div>
        {/* Attributes Section  */}
        <div className="bg-white p-5 shadow-sm rounded-sm border-t-2 border-indigo-900 mt-6">
            <div className="flex justify-between items-center gap-4">
                <h2> Product Attributes </h2>
                <button className="flex items-center gap-x-1 text-white px-2 py-[3px] rounded-full font-semibold text-sm bg-purple-500">Add <PlusCircleIcon className="w-5" /> </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-2 md:gap-x-2">
            <div className="px-2">
              <label htmlFor="" className="block font-medium mb-1 font-semibold text-gray-700">Price <span className="text-indigo-900">*</span> </label>
              <input type="number" name="price" value={product.price}
                onChange={handleProductChange}
                placeholder="quantity"
                className="w-full mb-2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-0 focus:ring-indigo-700 focus:border-1 focus:border-indigo-900 focus:outline-none transition-all duration-150"
              />
            </div>
            <div className="px-2">
              <label htmlFor="" className="block font-medium mb-1 font-semibold text-gray-700">Sale Price <span className="text-indigo-900">*</span> </label>
              <input type="number" name="salePrice" value={product.weight}
                onChange={handleProductChange}
                placeholder="Weight"
                className="w-full mb-2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-0 focus:ring-indigo-700 focus:border-1 focus:border-indigo-900 focus:outline-none transition-all duration-150"
              />
            </div>
            <div className="px-2">
              <label htmlFor="" className="block font-medium mb-1 font-semibold text-gray-700">Size <span className="text-indigo-900">*</span> </label>
              <select
              name="size"
              value={product.size}
              onChange={handleProductChange}
              className="w-full mb-2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-0 focus:ring-indigo-700 focus:border-1 focus:border-indigo-900 focus:outline-none transition-all duration-150"
              > 
              <option value="">Select Size</option>
              <option value="">sm</option>
              <option value="">M</option>
              <option value="">L</option>
              <option value="">XL</option>
              </select>
            </div>
            <div className="px-2">
              <label for="productColor" class="block mb-2 text-sm font-medium text-gray-700">
                Product Color
              </label>
                  <input
                    id="productColor"
                    type="color"
                    class="w-16 h-10 border border-gray-300 rounded-lg cursor-pointer 
                          focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-amber-900 
                          transition-all duration-150"
                    onchange="document.getElementById('colorValue').textContent = this.value"
                  />
            </div>
          </div>
        </div>  
        
      </div>
      <div className="w-[100%] md:w-[30%]">

      </div>
  </div>
);


}

