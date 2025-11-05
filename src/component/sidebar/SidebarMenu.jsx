
import { BarChart2, BookCheckIcon, Boxes, BoxIcon, ChevronDown, ChevronRight, Dot, File, Gift, HomeIcon, LayoutDashboard, LayoutDashboardIcon, LineChart, MapPinCheckInside, PlusCircle, RulerDimensionLineIcon, ShapesIcon, ShoppingBag, Table2Icon, User, UtilityPoleIcon } from "lucide-react";
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
                <div className="flex items-center text-gray-400 font-semibold">
                    <HomeIcon className="w-5 h-5" />
                    {!isCollapsed && <span className="ml-3 text-sm">Dashboard</span>}
                </div>
                {!isCollapsed && (openParent === 'dashboard' ? 
                (<ChevronDown className="w-4 h-4 ml-auto" />) : 
                (<ChevronRight className="w-4 h-4 ml-auto" />) )}
            </button>
            {/* child menu items for parent 1 */}
            {openParent === 'dashboard' && !isCollapsed && (
                <div className="ml-6 space-y-1 text-gray-400 font-semibold">
                    <NavLink
                    className={({ isActive }) => `flex items-center p-2 text-sm hover:bg-indigo-900 
                    ${isActive ? 'text-white':''}`}
                    >
                        <span className="text-gray-400 font-semibold">Overview</span>
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
            <div>
                <span className="text-gray-600 text-xs font-semibold ml-2 uppercase">Pages </span>
            </div>
            <button 
            onClick={() => toggleParentMenu('products')}
            className={`flex items-center justify-between w-full p-2 hover:bg-indigo-900 cursor-pointer ${openParent === 'products' ? 'bg-indigo-900 text-white': ''}`}>
                <div className="flex items-center text-gray-400 font-semibold">
                    <ShoppingBag className="w-5 h-5" />
                    {!isCollapsed && <span className="ml-3 text-sm">Product Manage</span>}
                </div>
                {!isCollapsed && (openParent === 'products' ? 
                (<ChevronDown className="w-4 h-4 ml-auto" />) : 
                (<ChevronRight className="w-4 h-4 ml-auto" />) )}
            </button>
            {/* child menu item for parent 2 */}
            {openParent === 'products' && !isCollapsed && (
                <div className="ml-6 space-y-1 text-gray-400 font-semibold">
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
                <div className="flex items-center text-gray-400 font-semibold">
                    <File className="w-5 h-5" />
                    {!isCollapsed && <span className="ml-3 text-sm">Pages</span>}
                </div>
                {!isCollapsed && (openParent === 'pages' ? 
                (<ChevronDown className="w-4 h-4 ml-auto" />) : 
                (<ChevronRight className="w-4 h-4 ml-auto" />) )}
            </button>
            {/* child menu item for parent 4 */}
            {openParent === 'pages' && !isCollapsed && (
                <div className="ml-6 space-y-1 text-gray-400 font-semibold">
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
                <div className="flex items-center text-gray-400 font-semibold">
                    <User className="w-5 h-5" />
                    {!isCollapsed && <span className="ml-3 text-sm">Users Manage</span>}
                </div>
                {!isCollapsed && (openParent === 'users' ? 
                (<ChevronDown className="w-4 h-4 ml-auto" />) : 
                (<ChevronRight className="w-4 h-4 ml-auto" />) )}
            </button>
            {/* child menu item for parent 5 */}
            {openParent === 'users' && !isCollapsed && (
                <div className="ml-6 space-y-1 text-gray-400 font-semibold">
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

             {/* parent menu item 6  */}
             <div>
                <span className="text-gray-600 text-xs font-semibold ml-2 uppercase">General </span>
            </div>
            <button 
            onClick={() => toggleParentMenu('task')}
            className={`flex items-center justify-between w-full p-2 hover:bg-indigo-900 cursor-pointer ${openParent === 'task' ? 'bg-indigo-900 text-white': ''}`}>
                <div className="flex items-center text-gray-400 font-semibold">
                    <BookCheckIcon className="w-5 h-5" />
                    {!isCollapsed && <span className="ml-3 text-sm">Task </span>}
                </div>
                {!isCollapsed && (openParent === 'task' ? 
                (<ChevronDown className="w-4 h-4 ml-auto" />) : 
                (<ChevronRight className="w-4 h-4 ml-auto" />) )}
            </button>
            {/* child menu item for parent 6 */}
            {openParent === 'task' && !isCollapsed && (
                <div className="ml-6 space-y-1 text-gray-400 font-semibold">
                    <NavLink
                        to="/dashboard/task"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <span className="text-sm">Add Task </span> <PlusCircle className="w-3 h-3" /> 
                    </NavLink>

                    <NavLink
                        to="/dashboard/product-list"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <span className="text-sm">All Tasks </span> <ShapesIcon className="w-3 h-3" /> 
                    </NavLink>

                </div>

            )}
            

             {/* parent menu item 7 */}
            <button 
            onClick={() => toggleParentMenu('table')}
            className={`flex items-center justify-between w-full p-2 hover:bg-indigo-900 cursor-pointer ${openParent === 'table' ? 'bg-indigo-900 text-white': ''}`}>
                <div className="flex items-center text-gray-400 font-semibold">
                    <Table2Icon className="w-5 h-5" />
                    {!isCollapsed && <span className="ml-3 text-sm">Tables </span>}
                </div>
                {!isCollapsed && (openParent === 'task' ? 
                (<ChevronDown className="w-4 h-4 ml-auto" />) : 
                (<ChevronRight className="w-4 h-4 ml-auto" />) )}
            </button>
            {/* child menu item for parent 7 */}
            {openParent === 'table' && !isCollapsed && (
                <div className="ml-6 space-y-1 text-gray-400 font-semibold">
                    <NavLink
                        to="/dashboard/table"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <span className="text-sm">Tables </span> <PlusCircle className="w-3 h-3" /> 
                    </NavLink>

                    <NavLink
                        to="/dashboard/product-list"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <span className="text-sm">Data Tables </span> <ShapesIcon className="w-3 h-3" /> 
                    </NavLink>

                </div>
            )}
            

             {/* parent menu item 8 */}
            <button 
            onClick={() => toggleParentMenu('utilities')}
            className={`flex items-center justify-between w-full p-2 hover:bg-indigo-900 cursor-pointer ${openParent === 'utilities' ? 'bg-indigo-900 text-white': ''}`}>
                <div className="flex items-center text-gray-400 font-semibold">
                    <Table2Icon className="w-5 h-5" />
                    {!isCollapsed && <span className="ml-3 text-sm">Utilities </span>}
                </div>
                {!isCollapsed && (openParent === 'utilities' ? 
                (<ChevronDown className="w-4 h-4 ml-auto" />) : 
                (<ChevronRight className="w-4 h-4 ml-auto" />) )}
            </button>
            {/* child menu item for parent 7 */}
            {openParent === 'utilities' && !isCollapsed && (
                <div className="ml-6 space-y-1  text-gray-400 font-semibold">
                    <NavLink
                        to="/dashboard/utilities"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /> <span className="text-sm">Avatars </span>  
                    </NavLink>

                    <NavLink
                        to="/dashboard/borders"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Borders </span>  
                    </NavLink>
                    <NavLink
                        to="/dashboard/colors"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Colors </span>  
                    </NavLink>
                     <NavLink
                        to="/dashboard/card"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Product Cards </span>  
                    </NavLink>
                     <NavLink
                        to="/dashboard/columns"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Columns </span>  
                    </NavLink>
                    <NavLink
                        to="/dashboard/flex"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Flex </span>  
                    </NavLink>
                     <NavLink
                        to="/dashboard/helper"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Helpers</span>  
                    </NavLink>
                    <NavLink
                        to="/dashboard/helper"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Additional Content</span>  
                    </NavLink>

                </div>
            )}

            {/* parent menu item 9 */}
            <button 
            onClick={() => toggleParentMenu('elements')}
            className={`flex items-center justify-between w-full p-2 hover:bg-indigo-900 cursor-pointer ${openParent === 'elements' ? 'bg-indigo-900 text-white': ''}`}>
                <div className="flex items-center text-gray-400 font-semibold">
                    <Boxes className="w-5 h-5" />
                    {!isCollapsed && <span className="ml-3 text-sm">UI Elements </span>}
                </div>
                {!isCollapsed && (openParent === 'elements' ? 
                (<ChevronDown className="w-4 h-4 ml-auto" />) : 
                (<ChevronRight className="w-4 h-4 ml-auto" />) )}
            </button>
            {/* child menu item for parent 7 */}
            {openParent === 'elements' && !isCollapsed && (
                <div className="ml-6 space-y-1  text-gray-400 font-semibold">
                    <NavLink
                        to="/dashboard/alerts"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /> <span className="text-sm">Alerts </span>  
                    </NavLink>

                    <NavLink
                        to="/dashboard/badge"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Badge </span>  
                    </NavLink>
                    <NavLink
                        to="/dashboard/buttons"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Buttons </span>  
                    </NavLink>
                     <NavLink
                        to="/dashboard/dropdowns"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Dropdowns </span>  
                    </NavLink>
                     <NavLink
                        to="/dashboard/iamges"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Images </span>  
                    </NavLink>
                    <NavLink
                        to="/dashboard/list"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">List Group </span>  
                    </NavLink>
                     <NavLink
                        to="/dashboard/progress"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm"> Progress</span>  
                    </NavLink>


                </div>
            )}
            
            {/* parent menu item 10 */}
            <button 
            className={`flex items-center w-full p-2 hover:bg-indigo-900 cursor-pointer`}>
                <div className="flex text-gray-400 font-semibold">
                    <Gift className="w-5 h-5" />
                        <span className="ml-3 text-sm">Widgets </span>
                </div>
                    <span className="bg-amber-100 ml-6 text-red-500 px-2 rounded text-xs font-bold">Hot</span>
            </button>


            {/* parent menu item 11 */}
            <div>
                <span className="text-gray-600 text-xs font-semibold ml-2 uppercase">Web App </span>
            </div>
            <button 
            onClick={() => toggleParentMenu('apps')}
            className={`flex items-center justify-between w-full p-2 hover:bg-indigo-900 cursor-pointer ${openParent === 'apps' ? 'bg-indigo-900 text-white': ''}`}>
                <div className="flex items-center text-gray-400 font-semibold">
                    <Boxes className="w-5 h-5" />
                    {!isCollapsed && <span className="ml-3 text-sm">Apps </span> }
                </div>
                {!isCollapsed && (openParent === 'apps' ? 
                (<ChevronDown className="w-4 h-4 ml-auto" />) : 
                (<ChevronRight className="w-4 h-4 ml-auto" />) )}
            </button>
            {/* child menu item for parent 7 */}
            {openParent === 'apps' && !isCollapsed && (
                <div className="ml-6 space-y-1  text-gray-400 font-semibold">
                    <NavLink
                        to="/dashboard/alerts"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /> <span className="text-sm">Alerts </span>  
                    </NavLink>

                    <NavLink
                        to="/dashboard/badge"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Badge </span>  
                    </NavLink>
                    <NavLink
                        to="/dashboard/buttons"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Buttons </span>  
                    </NavLink>
                     <NavLink
                        to="/dashboard/dropdowns"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Dropdowns </span>  
                    </NavLink>
                     <NavLink
                        to="/dashboard/iamges"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Images </span>  
                    </NavLink>
                    <NavLink
                        to="/dashboard/list"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">List Group </span>  
                    </NavLink>
                     <NavLink
                        to="/dashboard/progress"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm"> Progress</span>  
                    </NavLink>


                </div>
            )}
            
            {/* parent menu item 12 */}
            <button 
            onClick={() => toggleParentMenu('nestmenu')}
            className={`flex items-center justify-between w-full p-2 hover:bg-indigo-900 cursor-pointer ${openParent === 'nestmenu' ? 'bg-indigo-900 text-white': ''}`}>
                <div className="flex items-center text-gray-400 font-semibold">
                    <LayoutDashboardIcon className="w-5 h-5" />
                    {!isCollapsed && <span className="ml-3 text-sm">Nested Menu </span> }
                </div>
                {!isCollapsed && (openParent === 'nestmenu' ? 
                (<ChevronDown className="w-4 h-4 ml-auto" />) : 
                (<ChevronRight className="w-4 h-4 ml-auto" />) )}
            </button>
            {/* child menu item for parent 7 */}
            {openParent === 'nestmenu' && !isCollapsed && (
                <div className="ml-6 space-y-1  text-gray-400 font-semibold">
                    <NavLink
                        to="/dashboard/alerts"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /> <span className="text-sm">Alerts </span>  
                    </NavLink>

                    <NavLink
                        to="/dashboard/badge"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Badge </span>  
                    </NavLink>
                    <NavLink
                        to="/dashboard/buttons"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Buttons </span>  
                    </NavLink>
                     <NavLink
                        to="/dashboard/dropdowns"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Dropdowns </span>  
                    </NavLink>
                     <NavLink
                        to="/dashboard/iamges"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Images </span>  
                    </NavLink>
                    <NavLink
                        to="/dashboard/list"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">List Group </span>  
                    </NavLink>
                     <NavLink
                        to="/dashboard/progress"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm"> Progress</span>  
                    </NavLink>


                </div>
            )}
            
            {/* parent menu item 13 */}
            <div>
                <span className="text-gray-600 text-xs font-semibold ml-2 uppercase">Tables & Charts </span>
            </div>
            <button 
            onClick={() => toggleParentMenu('charts')}
            className={`flex items-center justify-between w-full p-2 hover:bg-indigo-900 cursor-pointer ${openParent === 'charts' ? 'bg-indigo-900 text-white': ''}`}>
                <div className="flex items-center text-gray-400 font-semibold">
                    <BarChart2 className="w-5 h-5" />
                    {!isCollapsed && <span className="ml-3 text-sm">Charts </span> }
                </div>
                {!isCollapsed && (openParent === 'charts' ? 
                (<ChevronDown className="w-4 h-4 ml-auto" />) : 
                (<ChevronRight className="w-4 h-4 ml-auto" />) )}
            </button>
            {/* child menu item for parent 7 */}
            {openParent === 'charts' && !isCollapsed && (
                <div className="ml-6 space-y-1  text-gray-400 font-semibold">
                    <NavLink
                        to="/dashboard/alerts"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /> <span className="text-sm">Alerts </span>  
                    </NavLink>

                    <NavLink
                        to="/dashboard/badge"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Badge </span>  
                    </NavLink>
                    <NavLink
                        to="/dashboard/buttons"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Buttons </span>  
                    </NavLink>
                     <NavLink
                        to="/dashboard/dropdowns"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Dropdowns </span>  
                    </NavLink>
                     <NavLink
                        to="/dashboard/iamges"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Images </span>  
                    </NavLink>
                    <NavLink
                        to="/dashboard/list"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">List Group </span>  
                    </NavLink>
                     <NavLink
                        to="/dashboard/progress"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm"> Progress</span>  
                    </NavLink>


                </div>
            )}

            {/* parent menu item 14 */}
            <button 
            onClick={() => toggleParentMenu('graphs')}
            className={`flex items-center justify-between w-full p-2 hover:bg-indigo-900 cursor-pointer ${openParent === 'graphs' ? 'bg-indigo-900 text-white': ''}`}>
                <div className="flex items-center text-gray-400 font-semibold">
                    <LineChart className="w-5 h-5" />
                    {!isCollapsed && <span className="ml-3 text-sm">Graphs </span> }
                </div>
                {!isCollapsed && (openParent === 'graphs' ? 
                (<ChevronDown className="w-4 h-4 ml-auto" />) : 
                (<ChevronRight className="w-4 h-4 ml-auto" />) )}
            </button>
            {/* child menu item for parent 7 */}
            {openParent === 'graphs' && !isCollapsed && (
                <div className="ml-6 space-y-1  text-gray-400 font-semibold">
                    <NavLink
                        to="/dashboard/alerts"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /> <span className="text-sm">Alerts </span>  
                    </NavLink>

                    <NavLink
                        to="/dashboard/badge"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Badge </span>  
                    </NavLink>
                    <NavLink
                        to="/dashboard/buttons"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Buttons </span>  
                    </NavLink>
                     <NavLink
                        to="/dashboard/dropdowns"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Dropdowns </span>  
                    </NavLink>
                     <NavLink
                        to="/dashboard/iamges"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">Images </span>  
                    </NavLink>
                    <NavLink
                        to="/dashboard/list"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm">List Group </span>  
                    </NavLink>
                     <NavLink
                        to="/dashboard/progress"
                        className={({ isActive }) => `flex items-center gap-x-2 w-full p-2 hover:indigo-900 ${isActive ? 'bg-indigo-900' : '' }`}
                    >
                        <Dot className="w-3 h-3" /><span className="text-sm"> Progress</span>  
                    </NavLink>


                </div>
            )}

            {/* parent menu item 10 */}
            <button 
            className={`flex items-center w-full p-2 hover:bg-indigo-900 cursor-pointer`}>
                <div className="flex text-gray-400 font-semibold">
                    <MapPinCheckInside className="w-5 h-5" />
                        <span className="ml-3 text-sm"> Maps </span>
                </div>
                    <span className="bg-amber-100 ml-6 text-red-500 px-2 rounded text-xs font-bold">Hot</span>
            </button>

            {/* parent menu item 10 */}
            <button 
            className={`flex items-center w-full p-2 hover:bg-indigo-900 cursor-pointer`}>
                <div className="flex text-gray-400 font-semibold">
                    <BoxIcon className="w-5 h-5" />
                        <span className="ml-3 text-sm"> Icons </span>
                </div>
                    <span className="bg-indigo-100 ml-6 text-red-500 px-2 rounded text-xs font-bold">New</span>
            </button>
        </nav>
    );
}