import { ChevronDownIcon, LogInIcon, LucideHeadphones, MessageCircle, NotebookPenIcon, Settings, UserCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutAdmin } from "../../utils/auth";

export default function ProfileDropdown() {

    const [isOpenProfile, setIsOpenProfile] = useState(false);
    const  navigate = useNavigate();
    const profileRef = useRef(null);
    // handle outside click for close profile dropdown
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) {
                setIsOpenProfile(false);
            }
        };

        if (isOpenProfile) document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);

    }, [isOpenProfile]);
    // Logout
    const handleLogout = () => {
        logoutAdmin();
        navigate("/");
    }
    return(
        <div className="relative  cursor-pointer"
         ref={profileRef}
        onClick={() => setIsOpenProfile((prev) => !prev)}
        >
            <div className="flex gap-x-2 items-center">
                <img src="/img/customers/cust-1.jpeg" className="w-7 h-7 rounded-full"/>
                <div className="leading-none">
                    <p className="line-h-20">John Smith </p>
                    <span className="text-xs ">Designer </span>
                </div>
                
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${isOpenProfile ? 'rotate-180' : ''}`} />
            </div>
            {isOpenProfile && (
                <div className="absolute z-50 pb-3 w-40 right-0 mt-2 bg-white border border-gray-200 shadow-md">
                    <div className="flex items-center gap-x-[6px] px-3 py-2 hover:bg-gray-100">
                        <UserCircle className="w-4 h-4" /> <span>Profile</span>
                    </div>
                    <div className="flex items-center gap-x-[6px] px-3 py-2 hover:bg-gray-100">
                        <Settings className="w-4 h-4" /> <span>Setting Profile</span>
                    </div>
                    <div className="flex items-center gap-x-[6px] px-3 py-2 hover:bg-gray-100">
                        <NotebookPenIcon className="w-4 h-4" /> <span>Task Manager</span>
                    </div>
                    <div className="flex items-center gap-x-[6px] px-3 py-2 hover:bg-gray-100">
                        <LucideHeadphones className="w-4 h-4" /> <span>Support</span>
                    </div>
                    <div className="flex items-center justify-between gap-x-[6px] px-3 py-2 hover:bg-gray-100">
                        <div className="flex items-center gap-1 "><MessageCircle className="w-4 h-4" /> <span>Inbox</span></div>
                        <div><span className="bg-green-100 px-1 text-xs font-semibold rounded">20+</span></div>
                    </div>
                    <div className="px-3 py-2 hover:bg-gray-100">
                        <button onClick={handleLogout} className="flex items-center gap-x-[6px] cursor-pointer"><LogInIcon className="w-4 h-4" /> <span>Logout</span></button>
                    </div>
                </div>
            )}
        </div>
    );
}