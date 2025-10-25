import { Outlet } from "react-router-dom";
import Sidebar from "../component/sidebar/Sidebar";
import Topbar from "../component/topbar/Topbar";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
    // set states for sidebar
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    // Detect Screen Resize
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    

// Toggle Sidebar for Mobile
    const toggleSidebar = () => {
        if (isMobile) setIsSidebarOpen(!isSidebarOpen);
        else setIsCollapsed(!isCollapsed); 
    }

    return (
        <div className="flex h-screen overflow-hidden">
            {/* admin sidebar  */}
            <Sidebar 
            isCollapsed={isCollapsed}
            isMobile={isMobile}
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            />
            <div>
                {/* admin topbar  */}
                <Topbar toggleSidebar={toggleSidebar} />

                <main className="flex-1 overflow-y-auto p-4">
                    <Outlet />
                </main>
            </div>
            
        </div>
    );
}