import { Bell, Globe, Maximize, Menu, Search, Settings, ShoppingBag, User } from "lucide-react";

export default function Topbar({ toggleSidebar }) {
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
                <Search className="text-gray-400 cursor-pointer hover:text-amber-500 w-4"/>
                <Globe className="text-gray-400 cursor-pointer hover:text-amber-500 w-4" />

                <div className="relative cursor-pointer">
                    <ShoppingBag className="text-gray-400 cursor-pointer hover:text-amber-500 w-4" />
                    <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-xs rounded-full px-1">
                        3
                    </span>
                </div>

                <div className="relative cursor-pointer">
                    <Bell className="text-white-400 cursor-pointer hover:text-amber-500 w-4" />
                    <span className="absolute -top-1 -right-1 bg-violet-500 text-white text-xs rounded-full px-1">
                        10
                    </span>
                </div>

                <Maximize className="text-gray-400 cursor-pointer hover:text-amber-500 w-4" />
                <Settings className="text-gray-400 cursor-pointer hover:text-amber-500 w-4" />
                <User className="text-gray-400 cursor-pointer hover:text-amber-500 w-4" />
            </div>

        </header>
    );
}