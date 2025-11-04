import { File, Mic, MoreVertical, Search, User, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import DropdownMenu from "./DropdownMenu";

export default function SearchModal({ isOpen, onClose}) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const modalRef = useRef(null);
    const dropdownRef = useRef(null);
    
    // Close Modal when click outside 
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }

    }, [isOpen, onClose]);

    // Close more Dropdown when click outside
// ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleDropdownOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleDropdownOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleDropdownOutside);
    };
  }, [isDropdownOpen]);


    // Without click modal not show 
    if (!isOpen) return null; 
    return (
        <div className="fixed inset-0 z-50 flex items-center bg-black/40 backdrop-blur-sm">
            <div className="relative bg-white w-full sm:w-[500px] sm:mx-auto rounded-sm shadow-xl p-6"
                ref={modalRef}
            >
                {/* Search Bar  */}
                <div className="flex items-center border border-gray-300 rounded-full">
                    <div className="bg-gray-200 rounded-l-full p-2"><Search className="h-5 w-5 text-indigo-900 cursor-pointer text-gray-600 hover:text-indigo-900 transition-all duration-150"/></div>
                    <input 
                    className="flex-grow px-2 placeholder-gray-500 bg-transparent focus:outline-none text-gray-700"
                    />
                    <div className="flex bg-gray-200 rounded-r-full p-2">
                        <Mic className="w-5 h-5 cursor-pointer text-gray-600 hover:text-indigo-900 transition-all duration-150" />
                        {/* More Dropdown  */}
                        <div className="relative" ref={dropdownRef}>
                            <MoreVertical
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                            className="w-5 h-5 cursor-pointer text-gray-600 hover:text-indigo-900 transition-all duration-150" /> 

                            {isDropdownOpen && <DropdownMenu /> }
                        </div>
                    </div>
                </div>
                    
                <div className="flex gap-x-2 mt-6">
                    <div className="flex gap-x-1 items-center text-indigo-900 bg-gray-100 px-[6px] py-[4px] rounded"><User className="w-4 h-4"/> <span className="text-sm">People </span> <X className="w-4 h-4 cursor-pointer"/> </div>
                    <div className="flex gap-x-1 items-center text-indigo-900 bg-gray-100 px-[6px] py-[4px] rounded"><File className="w-4 h-4"/> <span className="text-sm">Pages </span> <X className="w-4 h-4 cursor-pointer"/> </div>
                    <div className="flex gap-x-1 items-center text-indigo-900 bg-gray-100 px-[6px] py-[4px] rounded"><File className="w-4 h-4"/> <span className="text-sm">Articles </span> <X className="w-4 h-4 cursor-pointer"/> </div>
                    <div className="flex gap-x-1 items-center text-indigo-900 bg-gray-100 px-[6px] py-[4px] rounded"><File className="w-4 h-4"/> <span className="text-sm">Tags </span> <X className="w-4 h-4 cursor-pointer"/> </div>
                </div>

                <div className="mt-6">
                    <h2 className="text-md text-gray-500">Most Recent Search: </h2>
                    <div className="mt-6 space-y-2">
                        <div className="flex flex-grow items-center justify-between rounded border border-gray-200 px-2 py-1">
                            <span className="text-gray-600">Notification</span> <X className="w-4 h-4 text-gray-600" />
                        </div>
                        <div className="flex flex-grow items-center justify-between rounded border border-gray-200 px-2 py-1">
                            <span className="text-gray-600">Notification</span> <X className="w-4 h-4 text-gray-600" />
                        </div>
                        <div className="flex flex-grow items-center justify-between rounded border border-gray-200 px-2 py-1">
                            <span className="text-gray-600">Notification</span> <X className="w-4 h-4 text-gray-600" />
                        </div>
                    </div>
                </div>
                <div className="flex mt-6 gap-x-2">
                    <button className="bg-violet-100 px-3 py-1 text-sm text-violet-600 hover:bg-violet-900 hover:text-white transition duration-300 rounded">Search </button>
                    <button className=" hover:bg-violet-100 px-3 py-1 text-sm text-white bg-violet-900 hover:text-violet-600 transition duration-300 rounded">Clear Search</button>
                </div>
            </div>
        </div>
    );
}