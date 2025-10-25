import { LayoutDashboard, X } from "lucide-react";
import { motion } from "framer-motion";
export default function Sidebar({
    isCollapsed,isMobile,isSidebarOpen,toggleSidebar
}) {

    const sidebarVariants = {
        open: { x: 0 },
        closed: { x: isMobile ? '-100%' : 0}
    }


    return (
        <motion.aside className="bg-[#111C43]">
            
            {/* logo and close button  */}
            <div className="flex items-center justify-between p-4">
                {!isCollapsed && <h1>Dashboard</h1> }
                {isMobile ? (
                    <button> <X className="w-6 h-6 text-amber-600" /> </button>
                ) : (
                    <LayoutDashboard  className="w-6 h-6"/>
                )}
            </div>

        </motion.aside>
    );    
}