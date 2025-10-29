import { X } from "lucide-react";
import React, { useState } from "react";

export default function SingleImageUpload() {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="px-2 border border-gray-200 mb-4 p-4">
      <label className="block font-medium mb-2 text-gray-700">
        Product Image <span className="text-indigo-900">*</span>
      </label>

      {/* Upload area */}
      <div className="relative group border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer border-gray-300 bg-indigo-50 hover:bg-indigo-100 transition-all duration-150">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />

        {preview ? (
          <img
            src={preview}
            alt="Product Preview"
            className="max-h-48 rounded-lg object-cover"
          />
        ) : (
          <div className="flex flex-col items-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mb-2 text-purple-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M3 8.25l7.5 7.5L21 8.25"
              />
            </svg>
            <p className="text-sm font-medium text-indigo-900">
              Click to upload image
            </p>
            <p className="text-xs text-gray-400">PNG, JPG, JPEG (max 5MB)</p>
          </div>
        )}
        {preview && (
        <button
          onClick={() => setPreview(null)}
          className="absolute -top-2 -right-0 mt-3 p-1 text-white bg-red-500 cursor-pointer shadow-sm rounded-full opacity-0 group-hover:opacity-100 transition duration-200"
        >
          <X className="w-4 h-4"/>
        </button>
      )}

      </div>

      
    </div>
  );
}
