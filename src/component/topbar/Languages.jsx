import { Check } from "lucide-react";
import { useEffect, useRef } from "react";

const langs = [
    {id:1, code: "en", name: "English", flag: "🇺🇸" },
    {id:2, code: "bn", name: "বাংলা", flag: "🇧🇩" },
    {id:3, code: "es", name: "Español", flag: "🇪🇸" },
    {id:4, code: "fr", name: "Français", flag: "🇫🇷" },
    {id:5, code: "de", name: "Deutsch", flag: "🇩🇪" },
];

export default function Languages({ setCurrentLang, setIsLangOpen, currentLang, isLangOpen, langRef}) {
    
    
    const handleSelectLang = (langCode) => {
        setCurrentLang(langCode);
        // setIsLangOpen(false);
    }

    // Close Languages on outside click
    useEffect(() => {
        const handleLandClickOutside = (e) => {
            if (langRef.current && !langRef.current.contains(e.target)) {
                setIsLangOpen(false);
            }
        };
        if (isLangOpen) {
            document.addEventListener('mousedown', handleLandClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleLandClickOutside);
    }, [isLangOpen]);


    return (
        <div className="absolute right-0 w-30 border border-gray-200 z-50 mt-2 shadow-md bg-white">
            {langs.map((lang) => (
            <button 
            key={lang.id}
            onClick={() => handleSelectLang(lang.code)}
            className={`flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100 transition 
                ${currentLang === lang.code ? "bg-gray-200 font-semibold" : ""}`}>
                <span className="text-lg mr-2">{lang.flag}</span>
                <span className="flex-grow text-gray-600">{lang.name}</span>
                {currentLang === lang.code && (<Check className="w-4 h-5 text-indigo-900" />)}
            </button>
            ))}
        </div>
    );
}