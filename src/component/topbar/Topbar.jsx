import { Bell, Globe, Maximize, Menu, Search, Settings, ShoppingBag, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SearchModal from "./SearchModal";
import Languages from "./Languages";
import { products } from "../../data/dashboardData";
import TopCartItems from "./TopCartItems";
import NotificationDropdown from "./Notification";
import FullScreenToggle from "./FullScreenToggle";


export default function Topbar({ toggleSidebar }) {
    // Search State 
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    // Language State 
    const langRef = useRef(null);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState('bn'); 
    // cart items
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState(products);

    const cartRef = useRef(null);
    // Remove item from cart 
    const handleRemove = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    } 
    return (
        <header className="flex items-center justify-between bg-white px-4 py-2">
            {/* Left: Collapse / Toggle Button  */}
            <div className="flex items-center gap-3">
                <button onClick={toggleSidebar} className="cursor-pointer p-2 rounded hover:gray-100">
                    <Menu className="w-6 h-6 text-gray-700" />
                </button>
                <h2> Dashboard </h2>
            </div>
            {/* Right: Action Icons  */}
            <div className="flex items-center gap-4 text-gray-600">
                <button className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 transition">
                    <Search
                    onClick={() => setIsSearchOpen(true)}
                    className="text-gray-400 cursor-pointer hover:text-amber-500 w-4"/>
                </button>
                
                <button className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 transition">
                    <div className="relative" ref={langRef}>
                        <Globe 
                        onClick={() => setIsLangOpen((prev) => !prev)}
                        className="text-gray-400 cursor-pointer hover:text-amber-500 w-4" />
                        {isLangOpen && (
                            <Languages currentLang={currentLang} 
                            setIsLangOpen={setIsLangOpen}
                            setCurrentLang={setCurrentLang} 
                            isLangOpen={isLangOpen}
                            langRef={langRef}
                        /> )}
                    </div>
                 </button>

                <div className="relative cursor-pointer" ref={cartRef} onClick={() => setIsCartOpen((prev) => !prev)}>
                    <ShoppingBag className="text-gray-400 hover:text-amber-500 w-4" />
                    {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-xs rounded-full px-1">
                        {cartItems.length}
                    </span>
                    )}

                    {isCartOpen && (
                        <TopCartItems cartRef={cartRef} isCartOpen={isCartOpen} items={cartItems} handleRemove={handleRemove} setIsCartOpen={setIsCartOpen}/>
                    )}
                </div>

                {/* Notification icon & dropdown  */}
                <NotificationDropdown />

                {/* Fullscreen Toggle  */}
                <FullScreenToggle />
                <button className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 transition">

                <Settings className="text-gray-400 cursor-pointer hover:text-amber-500 w-4" />
                </button>
                <User className="text-gray-400 cursor-pointer hover:text-amber-500 w-4" />
            </div>

        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </header>
    );
}