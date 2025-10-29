

import { useState } from "react";
import AttributesSection from "./AttributeSection";
import { Editor } from "@tinymce/tinymce-react";
// TinyMCE self-hosted imports
import 'tinymce/tinymce';
import 'tinymce/icons/default';
import 'tinymce/themes/silver';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/code';
import SingleImageUpload from "./SingleImageUpload";
import GalleryImages from "./GalleryImages";


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
const [shortDesc, setShortDesc] = useState("");

// Handle Input Change
const handleProductChange = (e) => {
  const [ name, value] = e.target;
  setProduct({...product, [name] : value});
} 




return (
  <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-6 mt-4">
      
      {/* Left Section  */}
      <div className="w-full lg:w-[70%]">
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
      <label
        htmlFor="shortDesc"
        className="block font-medium mb-1 font-semibold text-gray-700"
      >
        Short Description <span className="text-indigo-900">*</span>
      </label>

      <div className="border border-gray-300 rounded-lg focus-within:ring-1 focus-within:ring-amber-900 focus-within:border-amber-900 transition-all duration-150">
        <Editor
          apiKey="" // no API key needed
          value={shortDesc}
          onEditorChange={(content) => setShortDesc(content)}
          init={{
            height: 200,
            menubar: false,
            plugins: ["link", "lists", "code"],
            toolbar: "undo redo | bold italic | bullist numlist | link | code",
          }}
        />
      </div>
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
        <AttributesSection product={product} setProduct={setProduct}/> 
          <div className="bg-white p-5 shadow-sm rounded-sm border-t-2 mt-6 border-indigo-900">
            <div>
              <label htmlFor="" className="block font-medium mb-1 font-semibold text-gray-700">Long Description </label>
              <textarea name="" id=""
              className="w-full mb-2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-0 focus:ring-indigo-700 focus:border-1 focus:border-indigo-900 focus:outline-none transition-all duration-150"
              ></textarea>
            </div>
          </div>
      </div>
      <div className="w-full lg:w-[20%] bg-white shadow-sm rounded-sm p-5">
          {/* Single Image upload  */}
          <SingleImageUpload /> 

          {/* Gallery Images upload  */}
          <GalleryImages /> 

      </div>
  </div>
);


}

