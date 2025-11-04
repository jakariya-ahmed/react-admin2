// src/components/DropdownMenu.jsx
import React from "react";

const DropdownMenu = () => {
  return (
    <div className="absolute right-0 mt-2 w-40 bg-white shadow-md border border-gray-200 rounded">
      <button className="text-gray-700 w-full hover:bg-gray-200 px-4 py-1">Action</button>
      <button className="text-gray-700 w-full hover:bg-gray-200 px-4 py-1">Another Action</button>
      <button className="text-gray-700 w-full hover:bg-gray-200 px-4 py-1">Setting</button>
    </div>
  );
};

export default DropdownMenu;
