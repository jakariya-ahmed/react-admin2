
import { ChevronDown, ChevronRight, File, LayoutDashboard, PlusCircle, RulerDimensionLineIcon, ShapesIcon, ShoppingBag, User } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SidebarMenu({ isCollapsed }) {
    const [openParent, setOpenParent] = useState(null); // open parent menu state
    const [openChild, setOpenChild] = useState(null); // open child menu state

    // Handle Parent Menu open/close
    const toggleParentMenu = (parent) => {
        setOpenParent(openParent === parent ? null : parent);
        setOpenChild(null);
    } 

    const toggleChildMenu = (child) => {
        setOpenChild(openChild === child ? null : child)
    }

    return(
        <nav className="mt-4 px-3 space-y-3">
            {/* parent menu item 1  */}
            <button 
            onClick={() => toggleParentMenu('dashboard')}
            className={`flex items-center justify-between w-full p-2 hover:bg-indigo-900 cursor-pointer ${openParent === 'dashboard' ? 'bg-indigo-900 text-white': ''}`}>
                <div className="flex items-center ">
                    <LayoutDashboard className="w-5 h-5" />
                    {!isCollapsed && <span className="ml-3 text-sm">Dashboard</span>}
                </div>
                {!isCollapsed && (openParent === 'dashboard' ? 
                (<ChevronDown className="w-4 h-4 ml-auto" />) : 
                (<ChevronRight className="w-4 h-4 ml-auto" />) )}
            </button>
            {/* child menu items for parent 1 */}
            {openParent === 'dashboard' && !isCollapsed && (
                <div className="ml-6 space-y-1">
                    <NavLink
                    className={({ isActive }) => `flex items-center p-2 text-sm hover:bg-indigo-900 
                    ${isActive ? 'text-white':''}`}
                    >
                        <span>Overview</span>
                    </NavLink>

                    {/* Child with Grandchil  */}
                    <button
                    className={`flex items-center justify-between w-full p-2 rounded-md hover:bg-indigo-900 ${
                        openChild === "analytics" ? "bg-indigo-900 text-white" : ""
                    }`}
                    onClick={() => toggleChildMenu('analytics')}
                    >
                        <span className="text-sm">Analytics</span>
                        {openChild === 'analytics' ? (
                            <ChevronDown className="w-4 h-4" />
                        ) : (
                            <ChevronRight className="w-4 h-4" />
                        )}
                    </button>

                    {/* Grandchild links */}
                    {openChild === 'analytics' &&  (
                        <div className="ml-5 space-y-1">
                            <NavLink
                                to="/dashboard/analytics/sales"
                                className={({isActive}) => 
                                `block text-sm p-2 hover:bg-indigo-900 ${isActive ? 'bg-indigo-900 text-white' : ''}`
                                }
                            >
                                Sales
                            </NavLink>
                            <NavLink
                                to="/dashboard/analytics/sales"
                                className={({isActive}) => 
                                `block text-sm p-2 hover:bg-indigo-900 ${isActive ? 'bg-indigo-900 text-white' : ''}`
                                }
                            >
                                Orders
                            </NavLink>
                            <NavLink
                                to="/dashboard/analytics/sales"
                                className={({isActive}) => 
                                `block text-sm p-2 hover:bg-indigo-900 ${isActive ? 'bg-indigo-900 text-white' : ''}`
                                }
                            >
                                Revenue
                            </NavLink>
                        </div>
                
                    )}
                </div>
            )}
        {/* parent menu item 2  */}
            <button 
            onClick={() => toggleParentMenu('products')}
            className={`flex items-center justify-between w-full p-2 hover:bg-indigo-900 cursor-pointer ${openParent === 'products' ? 'bg-indigo-900 text-white': ''}`}>
                <div className="flex items-center ">
                    <ShoppingBag className="w-5 h-5" />
                    {!isCollapsed && <span className="ml-3 text-sm">Product Manage</span>}
                </div>
                {!isCollapsed && (openParent === 'products' ? 
                (<ChevronDown className="w-4 h-4 ml-auto" />) : 
                (<ChevronRight className="w-4 h-4 ml-auto" />) )}
            </button>
            {/* child menu item for parent 2 */}
            {openParent === 'products' && !isCollapsed && (
                <div className="ml-6 space-y-1">
                    <NavLink
                        to="/admin/create-product"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <span className="text-sm">Add New </span> <PlusCircle className="w-3 h-3" /> 
                    </NavLink>

                    <NavLink
                        to="/admin/products"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <span className="text-sm">All Products </span> <ShapesIcon className="w-3 h-3" /> 
                    </NavLink>

                </div>

            )}

            {/* parent menu item 4  */}
            <button 
            onClick={() => toggleParentMenu('pages')}
            className={`flex items-center justify-between w-full p-2 hover:bg-indigo-900 cursor-pointer ${openParent === 'pages' ? 'bg-indigo-900 text-white': ''}`}>
                <div className="flex items-center ">
                    <File className="w-5 h-5" />
                    {!isCollapsed && <span className="ml-3 text-sm">Pages</span>}
                </div>
                {!isCollapsed && (openParent === 'pages' ? 
                (<ChevronDown className="w-4 h-4 ml-auto" />) : 
                (<ChevronRight className="w-4 h-4 ml-auto" />) )}
            </button>
            {/* child menu item for parent 4 */}
            {openParent === 'pages' && !isCollapsed && (
                <div className="ml-6 space-y-1">
                    <NavLink
                        to="/dashboard/pages"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <span className="text-sm">Add New </span> <PlusCircle className="w-3 h-3" /> 
                    </NavLink>

                    <NavLink
                        to="/dashboard/product-list"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <span className="text-sm">All Pages </span> <ShapesIcon className="w-3 h-3" /> 
                    </NavLink>

                </div>

            )}
            
            {/* parent menu item 5  */}
            <button 
            onClick={() => toggleParentMenu('users')}
            className={`flex items-center justify-between w-full p-2 hover:bg-indigo-900 cursor-pointer ${openParent === 'users' ? 'bg-indigo-900 text-white': ''}`}>
                <div className="flex items-center ">
                    <User className="w-5 h-5" />
                    {!isCollapsed && <span className="ml-3 text-sm">Users Manage</span>}
                </div>
                {!isCollapsed && (openParent === 'users' ? 
                (<ChevronDown className="w-4 h-4 ml-auto" />) : 
                (<ChevronRight className="w-4 h-4 ml-auto" />) )}
            </button>
            {/* child menu item for parent 5 */}
            {openParent === 'users' && !isCollapsed && (
                <div className="ml-6 space-y-1">
                    <NavLink
                        to="/dashboard/users"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <span className="text-sm">Add User </span> <PlusCircle className="w-3 h-3" /> 
                    </NavLink>

                    <NavLink
                        to="/dashboard/product-list"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <span className="text-sm">All Users </span> <ShapesIcon className="w-3 h-3" /> 
                    </NavLink>

                    <NavLink
                        to="/dashboard/product-list"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <span className="text-sm">Roles & Permissions </span> <RulerDimensionLineIcon className="w-3 h-3" /> 
                    </NavLink>

                </div>

            )}
            
        </nav>
    );
}