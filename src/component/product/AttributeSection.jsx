import React from "react";
import { PlusCircle, X } from "lucide-react";

const defaultAttribute = () => ({
  id: Date.now().toString() + Math.random().toString(36).slice(2, 7),
  price: "",
  salePrice: "",
  size: "",
  color: "#000000",
  sku: "",
});

const AttributesSection = ({ product, setProduct }) => {
  // If attributes not found, ensure one default row exists
  const attributes = product.attributes?.length
    ? product.attributes
    : [defaultAttribute()];

  const addAttribute = () => {
    const newAttr = defaultAttribute();
    setProduct({ ...product, attributes: [...attributes, newAttr] });
  };

  const removeAttribute = (id) => {
    if (attributes.length <= 1) return; // prevent removing the last one
    setProduct({
      ...product,
      attributes: attributes.filter((a) => a.id !== id),
    });
  };

  const updateAttribute = (id, field, value) => {
    const updated = attributes.map((a) =>
      a.id === id ? { ...a, [field]: value } : a
    );
    setProduct({ ...product, attributes: updated });
  };

  return (
    <div className="bg-white p-5 shadow-sm rounded-sm border-t-2 border-indigo-900 mt-6">
      {/* Header */}
      <div className="flex justify-between items-center gap-4 mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Product Attributes</h2>
        <button
          type="button"
          onClick={addAttribute}
          className="flex items-center gap-x-1 text-white px-3 py-1 rounded-full font-semibold text-sm bg-purple-500 hover:bg-purple-600 transition-all"
        >
          Add
          <PlusCircle className="w-5 h-5" />
        </button>
      </div>

      {/* Attributes Rows */}
      <div className="space-y-4">
        {attributes.map((attr, index) => (
          <div
            key={attr.id}
            className="relative grid grid-cols-1 md:grid-cols-4 gap-y-2 md:gap-x-2 items-end border border-gray-300 rounded p-3"
          >
            {/* Price */}
            <div className="px-2">
              <label className="block font-medium mb-1 text-gray-700">
                Price <span className="text-indigo-900">*</span>
              </label>
              <input
                type="number"
                value={attr.price}
                onChange={(e) => updateAttribute(attr.id, "price", e.target.value)}
                placeholder="Price"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-0 focus:border-indigo-900 transition-all duration-150"
              />
            </div>

            {/* Sale Price */}
            <div className="px-2">
              <label className="block font-medium mb-1 text-gray-700">
                Sale Price
              </label>
              <input
                type="number"
                value={attr.salePrice}
                onChange={(e) =>
                  updateAttribute(attr.id, "salePrice", e.target.value)
                }
                placeholder="Sale Price"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-0 focus:border-indigo-900 transition-all duration-150"
              />
            </div>

            {/* Size */}
            <div className="px-2">
              <label className="block font-medium mb-1 text-gray-700">Size</label>
              <select
                value={attr.size}
                onChange={(e) => updateAttribute(attr.id, "size", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-0 focus:border-indigo-900 transition-all duration-150"
              >
                <option value="">Select Size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div className="flex ">
                <div className="px-2">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                Color
                </label>
                 <input
                    type="color"
                    value={attr.color}
                    onChange={(e) => updateAttribute(attr.id, "color", e.target.value)}
                    className="w-12 h-10 border border-gray-300 rounded-lg cursor-pointer focus:outline-none transition-all duration-150"
                  />
            </div>
            <div className="px-2">
                <label className="block font-medium mb-1 text-gray-700">SKU</label>
                <input
                  type="text"
                  value={attr.sku}
                  onChange={(e) => updateAttribute(attr.id, "sku", e.target.value)}
                  placeholder="SKU"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-0 focus:border-indigo-900 transition-all duration-150"
                />
            </div>
            </div>


             {/* Hide remove button if only one row */}
              {attributes.length > 1 && (
                <div className="absolute -top-3 -right-3 ">
                  <button
                    type="button"
                    onClick={() => removeAttribute(attr.id)}
                    className="inline-flex items-center gap-2 p-1 rounded-full text-red-600 border border-red-100 hover:bg-red-50 cursor-pointer text-sm transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
          </div>

        ))}
      </div>
    </div>
  );
};

export default AttributesSection;
