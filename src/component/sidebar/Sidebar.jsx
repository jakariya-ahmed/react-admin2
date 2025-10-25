import { LayoutDashboard, X } from "lucide-react";
import { motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
export default function Sidebar({
    isCollapsed,isMobile,isSidebarOpen,toggleSidebar
}) {

    const sidebarVariants = {
        open: { x: 0 },
        closed: { x: isMobile ? '-100%' : 0}
    }


    return (
        <motion.aside 

        className={`fixed flex flex-col md:static z-40 h-full bg-[#111C43] text-white
            ${isCollapsed && !isMobile ? 'w-[80px]' : 'w-[250px]'}`}
        
        >
            
            {/* logo and close button  */}
            <div className="flex items-center justify-between border-b border-gray-700 p-4">
                {!isCollapsed && <h1>Dashboard</h1> }
                {isMobile ? (
                    <button> <X className="w-6 h-6 text-amber-600" /> </button>
                ) : (
                    <LayoutDashboard  className="w-6 h-6"/>
                )}
            </div>

            {/* sidebar menu  */}
            <SidebarMenu isCollapsed={isCollapsed} />

        </motion.aside>
    );    
}