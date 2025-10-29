import { useState } from "react";

export default function BrandList() {
  const [selectedBrands, setSelectedBrands] = useState([]);

const Brands = [
  "Samsung",
  "Apple",
  "Sony",
  "Nike",
  "Adidas",
  "LG",
  "Puma",
  "Philips",
  "Dell",
  "Lenovo",
];

  const handleCheckboxChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((c) => c !== brand)
        : [...prev, brand]
    );
  };

  return (
    <div className="bg-white p-4 rounded-sm border border-gray-200 mt-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">
        Select Brands
      </h2>

      <div className="space-y-1 h-[150px] overflow-y-auto">
        {Brands.map((brand, index) => (
          <label
            key={index}
            className="flex items-center justify-start gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition"
          >
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => handleCheckboxChange(brand)}
              className="w-4 h-4 text-amber-900 border-gray-300 rounded focus:ring-amber-900"
            />
            <span className="text-gray-700 font-medium">{brand}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
