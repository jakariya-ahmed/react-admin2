import { Maximize } from "lucide-react";
import { useState } from "react";

export default function FullScreenToggle() {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleToggleScreen = () => {
        if (!document.fullscreenElement) {
            // Enter fullscreen
            document.documentElement.requestFullscreen();
            setIsFullScreen(true);
        } else {
            // Exit Fullscreen
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            setIsFullScreen(false);
        }
    };

    return (
        <button
        onClick={handleToggleScreen}
        title={isFullScreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 transition"
        >
            {isFullScreen ? (
             <Maximize className="text-gray-400 cursor-pointer hover:text-amber-500 w-4" />
                ) : (
                    <Maximize className="text-gray-400 hover:text-amber-500 w-4 h-4" />
                )}
        </button>
    );
}