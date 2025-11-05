import { LayoutDashboard, X } from "lucide-react";
import { motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { NavLink } from "react-router-dom";
export default function Sidebar({
    isCollapsed,isMobile,isSidebarOpen,toggleSidebar
}) {

    const sidebarVariants = {
        open: { x: 0 },
        closed: { x: isMobile ? '-100%' : 0},
    }


    return (
        <motion.aside
            variants={sidebarVariants}
            animate={isSidebarOpen ? "open" : "closed"}
            transition={{ type: "tween", duration: 0.3 }}
            className={`fixed flex flex-col md:static z-40 h-full bg-[#111C43] text-white
            overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-[#111C43]
            ${isCollapsed && !isMobile ? "w-[80px]" : "w-[250px]"}`}
            >
            {/* Logo + Close Button */}
            <div className="flex items-center justify-between border-b border-gray-700 p-4">
                {!isCollapsed && <h1 className="text-lg font-semibold text-gray-300"><NavLink to='/admin'> Dashboard</NavLink></h1>}
                {isMobile ? (
                <button onClick={toggleSidebar}>
                    <X className="w-6 h-6 text-amber-500" />
                </button>
                ) : (
                <button onClick={toggleSidebar}>
                    <LayoutDashboard className="w-6 h-6 text-gray-300" />
                </button>
                )}
            </div>

            {/* Sidebar Menu */}
            <SidebarMenu isCollapsed={isCollapsed} />
            
        </motion.aside>
    );    
}