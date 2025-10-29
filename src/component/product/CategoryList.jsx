import { useState } from "react";

export default function CategoryList() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    "Electronics",
    "Clothing",
    "Accessories",
    "Beauty & Care",
    "Home & Living",
    "Sports & Fitness",
    "Fashion",
    "Kitchen Equipments",
    "Man Fashion",
    "Women Fashion",
  ];

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="bg-white p-4 rounded-sm border border-gray-200 mt-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">
        Select Categories
      </h2>

      <div className="space-y-1 h-[250px] overflow-y-auto">
        {categories.map((category, index) => (
          <label
            key={index}
            className="flex items-center justify-start gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded-md transition"
          >
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCheckboxChange(category)}
              className="w-4 h-4 text-amber-900 border-gray-300 rounded focus:ring-amber-900"
            />
            <span className="text-gray-700 font-medium">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
