import { time } from "framer-motion";
import { AlignVerticalJustifyCenter, Bell, ShoppingBag, Truck, User, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const topNotifications = [
    {
        id: Date.now().toString() + Math.random().toString(36).slice(2,7),
        text: "Your order has been shipped",
        time: '2 hr ago',
        icon: Truck,
    },
    {
        id: Date.now().toString() + Math.random().toString(36).slice(2,7),
        text: "You added 3 product in cart",
        time: '4 hr ago',
        icon: ShoppingBag,
    },
    {
        id: Date.now().toString() + Math.random().toString(36).slice(2,7),
        text: "Account Security has been changed",
        time: '3 days ago',
        icon: User,
    },
    {
        id: Date.now().toString() + Math.random().toString(36).slice(2,7),
        text: "Your Account is restricted",
        time: '2 hr ago',
        icon: AlignVerticalJustifyCenter,
    },
];

export default function NotificationDropdown() {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [notifications, setNotifications] = useState(topNotifications);


    // Close Notification Dropdown click of outside 
    const notiRef = useRef(null);
    useEffect(() => {
        const handleNotificationOutside = (e) => {
            if (notiRef.current && !notiRef.current.contains(e.target)) {
                setIsNotificationOpen(false);
            }
        };
        if (isNotificationOpen) document.addEventListener('mousedown', handleNotificationOutside);
        return () => document.removeEventListener('mousedown', handleNotificationOutside);

    }, [isNotificationOpen]);

    // Remove notification 
    const handleRemove = (id) => {
        setNotifications((prev) => prev.filter((n) => n.id !== id))
    }
    return(
        <div className="relative cursor-pointer" onClick={(e) => e.stopPropagation()} >
            <div className="" onClick={() => setIsNotificationOpen((prev) => !prev)}>
                <Bell className="text-white-400 cursor-pointer hover:text-amber-500 w-4" />
                {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-violet-500 text-white text-xs rounded-full px-1">
                    {notifications.length}
                </span>
                )}
            </div>
            {/* Notification Dropcard   */}
            {isNotificationOpen && (
            <div ref={notiRef} className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 shadow-md z-500 py-2">
                <div className="flex justify-between p-4 border-b border-gray-200">
                    <span>Notifications </span>
                    <span className="bg-green-50 text-sm px-2 text-violet-500"> {notifications.length} items </span>
                </div>
                <div className="overflow-y-auto">
                    {notifications.length === 0 ? (
                        <p className="text-center text-sm text-gray-400 p-4">No Notification</p>
                    ) : (
                        notifications.map((item) => {
                            const Icon = item.icon;
                            return (
                                 <div key={item.id} className="flex items-center justify-between gap-x-3 hover:bg-gray-100 p-3 transition-all duration-200">
                                    <span className="bg-green-100 p-2 rounded-full"><Icon className="w-6 h-6" /></span>
                                    <div className="flex-grow">
                                        <h2>{item.text}</h2>
                                        <span className="text-xs font-semibold text-violet-500">{item.time}</span>
                                    </div>
                                    <button 
                                    className="cursor-pointer hover:text-red-600 transition"
                                    onClick={() => handleRemove(item.id)}
                                    ><X className="w-4 h-4" /></button>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
            )}
        </div>
    );
}