import { X } from "lucide-react";
import { useEffect, useRef } from "react";

export default function TopCartItems({ items, handleRemove, setIsCartOpen, cartRef }) {
  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setIsCartOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

    return (
        <div 
        onClick={(e) => e.stopPropagation()} 
        className="absolute right-0 w-70 bg-white mt-2 border border-gray-200 shadow-sm z-50">
            <div className="flex justify-between items-center px-4 py-4 pb-2 border-b border-gray-200">
                <span>Cart Items </span>
                <span className="bg-green-50 text-sm px-2 text-violet-500"> {items.length} items</span>
            </div>
            <div className="max-h-100 overflow-y-auto ">
                {items.length === 0 ? (
                    <p className="text-sm text-gray-500 text-center py-4">Cart is empty!</p>
                ) : (
                    items.map((item) => (
                    <div key={item.id} className="flex gap-x-2 px-3 py-2 mt-2">
                        <img src={item.image} alt="" className="w-8 h-8" />
                        <div className="flex-grow leading-tight">
                            <span className="text-sm">{item.name}</span>
                            <p className="text-xs text-violet-500 font-semibold">{item.cat}</p>
                        </div>
                        <button onClick={() => handleRemove(item.id)}><X className="w-4 h-4"/> </button>
                    </div>
                    ))
                )}
            </div>
            {items.length > 0 && (
            <div className="flex justify-center border-t border-gray-200 gap-x-3 py-4">
                <button className="cursor-pointer bg-violet-100 text-violet-800 hover:bg-violet-900 hover:text-white px-3 py-1 rounded transition-all duration-200">View Cart</button>
                <button className="cursor-pointer hover:bg-violet-100 hover:text-violet-800 bg-violet-900 text-white px-3 py-1 rounded transition-all duration-200">Checkout</button>
            </div>
            )}
        </div>
    );
}