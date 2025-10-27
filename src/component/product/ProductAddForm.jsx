import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const ProductAddForm = () => {
  const [product, setProduct] = useState({
    title: "",
    shortDesc: "",
    price: "",
    salePrice: "",
    quantity: "",
    category: "",
    brand: "",
    tags: "",
    image: null,
    gallery: [],
    attributes: [],
  });

  const [attrModalOpen, setAttrModalOpen] = useState(false);
  const [newAttr, setNewAttr] = useState({ size: "", color: "", sku: "", price: "" });
  const [imagePreview, setImagePreview] = useState(null);

  // handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // handle main image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProduct({ ...product, image: file });
    setImagePreview(URL.createObjectURL(file));
  };

  // handle gallery upload
  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files);
    setProduct({ ...product, gallery: files });
  };

  // Add new attribute
  const handleAddAttribute = () => {
    setProduct({
      ...product,
      attributes: [...product.attributes, newAttr],
    });
    setNewAttr({ size: "", color: "", sku: "", price: "" });
    setAttrModalOpen(false);
  };

  // Remove attribute
  const handleRemoveAttr = (index) => {
    const updated = product.attributes.filter((_, i) => i !== index);
    setProduct({ ...product, attributes: updated });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Added:", product);
    alert("✅ Product added successfully!");
  };

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Section */}
      <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Product Information</h2>

        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-amber-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Short Description</label>
          <textarea
            name="shortDesc"
            value={product.shortDesc}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-amber-500"
            rows="3"
          ></textarea>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label className="block font-medium mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-amber-500"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Sales Price</label>
            <input
              type="number"
              name="salePrice"
              value={product.salePrice}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-amber-500"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={product.quantity}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Attributes Section */}
        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold">Product Attributes</h3>
            <button
              type="button"
              onClick={() => setAttrModalOpen(true)}
              className="flex items-center gap-1 text-amber-600 font-medium"
            >
              <Plus size={18} /> Add Attribute
            </button>
          </div>

          {product.attributes.length > 0 ? (
            <ul className="space-y-2">
              {product.attributes.map((attr, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 p-2 rounded-lg"
                >
                  <span>
                    <strong>Size:</strong> {attr.size} |{" "}
                    <strong>Color:</strong> {attr.color} |{" "}
                    <strong>SKU:</strong> {attr.sku} |{" "}
                    <strong>Price:</strong> ${attr.price}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveAttr(index)}
                    className="text-red-500"
                  >
                    <X size={18} />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No attributes added yet.</p>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-white rounded-2xl shadow p-6 space-y-5">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Media & Metadata</h3>

        {/* Main Image */}
        <div>
          <label className="block font-medium mb-1">Main Image</label>
          <input type="file" onChange={handleImageChange} className="w-full text-sm" />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full mt-3 rounded-lg object-cover h-40"
            />
          )}
        </div>

        {/* Gallery */}
        <div>
          <label className="block font-medium mb-1">Gallery Images</label>
          <input type="file" multiple onChange={handleGalleryChange} className="w-full text-sm" />
        </div>

        <div>
          <label className="block font-medium mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-amber-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Brand</label>
          <input
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-amber-500"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Tags</label>
          <input
            type="text"
            name="tags"
            value={product.tags}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-amber-500"
            placeholder="e.g. new, featured, trending"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-amber-500 text-white font-semibold py-2 rounded-lg hover:bg-amber-600"
        >
          Submit Product
        </button>
      </div>

      {/* Attribute Modal */}
      {attrModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-96">
            <h3 className="text-lg font-semibold mb-4">Add Attribute</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Size"
                value={newAttr.size}
                onChange={(e) => setNewAttr({ ...newAttr, size: e.target.value })}
                className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-amber-500"
              />
              <input
                type="text"
                placeholder="Color"
                value={newAttr.color}
                onChange={(e) => setNewAttr({ ...newAttr, color: e.target.value })}
                className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-amber-500"
              />
              <input
                type="text"
                placeholder="SKU"
                value={newAttr.sku}
                onChange={(e) => setNewAttr({ ...newAttr, sku: e.target.value })}
                className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-amber-500"
              />
              <input
                type="number"
                placeholder="Price"
                value={newAttr.price}
                onChange={(e) => setNewAttr({ ...newAttr, price: e.target.value })}
                className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-amber-500"
              />
            </div>

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setAttrModalOpen(false)}
                className="px-4 py-2 text-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleAddAttribute}
                className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductAddForm;
