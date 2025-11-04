import { Check } from "lucide-react";
import { useRef } from "react";

const langs = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "bn", name: "বাংলা", flag: "🇧🇩" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
];

export default function Languages({ setCurrentLang, setIsLangOpen, currentLang}) {
    
    const langRef = useRef(null);
    const handleSelectLang = (langCode) => {
        setCurrentLang(langCode);
        setIsLangOpen(false)
    }

    return (
        <div className="absolute right-0 mt-2 w-30 bg-white border border-gray-200 shadow-md z-50">
            {langs.map((lang) => (
            <button 
            onClick={() => handleSelectLang(lang.code)}
            className={`flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100 transition
            ${currentLang === lang.code ? "bg-gray-200 font-semibold" : ""}`}>
                <span className="text-lg mr-2">{lang.flag}</span>
                <span className="flex-grow text-gray-800">{lang.name}</span>
                {currentLang === lang.code && (
                    <Check className="w-4 h-4 text-indigo-600" />
                )}
            </button>
            ))}
        </div>
    );
}