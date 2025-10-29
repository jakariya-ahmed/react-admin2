import React, { useState } from "react";
import { X } from "lucide-react"; // npm install lucide-react

export default function GalleryUploader() {
  const [gallery, setGallery] = useState([]);

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      id: Math.random().toString(36).substr(2, 9),
    }));
    setGallery((prev) => [...prev, ...newImages]);
  };

  const handleRemove = (id) => {
    setGallery((prev) => prev.filter((img) => img.id !== id));
  };

  return (
    <div className="bg-white p-4 rounded-sm border border-gray-200">
      <label className="block font-medium mb-2 text-gray-700">
        Gallery Images
      </label>

      {/* Upload Input */}
      <label className="cursor-pointer flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg hover:bg-indigo-50 transition-all">
        <span className="text-indigo-900 font-semibold">Click to upload</span>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleGalleryChange}
          className="hidden"
        />
      </label>

      {/* Image Preview */}
      {gallery.length > 0 && (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {gallery.map((img) => (
            <div
              key={img.id}
              className="relative group rounded-lg overflow-hidden border border-gray-300"
            >
              <img
                src={img.preview}
                alt="preview"
                className="w-full"
              />
              <button
                onClick={() => handleRemove(img.id)}
                className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
