import { ChevronDown, ChevronRight, LayoutDashboard } from "lucide-react";
import { useState } from "react";

export default function SidebarMenu({ isCollapsed }) {
    const [openParent, setOpenParent] = useState(null); // open parent menu state
    const [openChild, setOpenChild] = useState(null); // open child menu state

    // Handle Parent Menu open/close
    const toggleParentMenu = (parent) => {
        setOpenParent(openParent === parent ? null : parent);
        setOpenChild(null);
    } 

    return(
        <nav className="mt-4 px-3 space-y-1">
            {/* parent menu item  */}
            <button className={`flex items-center justify-between w-full p-2 hover:bg-indigo-600 cursor-pointer ${openParent === 'dashboard' ? 'bg-indigo-900 text-white': ''}`}>
                <div className="flex items-center ">
                    <LayoutDashboard className="w-5 h-5" />
                    {!isCollapsed && <span className="ml-3 text-sm">Dashboard</span>}
                </div>
                {!isCollapsed && (openParent === 'dashboard' ? 
                (<ChevronDown className="w-4 h-4 ml-auto" />) : 
                (<ChevronRight className="w-4 h-4 ml-auto" />) )}
            </button>
        </nav>
    );
}