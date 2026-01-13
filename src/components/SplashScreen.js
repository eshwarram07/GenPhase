import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function SplashScreen() {
  const [hide, setHide] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeOut(true), 5000);
    setTimeout(() => setHide(true), 5600);
  }, []);

  if (hide) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center 
      bg-white animate-bgMove    /* ⭐ animated background */
      z-[9999] transition-opacity duration-700
      ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <div className="flex items-center gap-6">
        <img src={logo} className="w-24 h-24 animate-logo-fall" />

        {/* company name stays EXACTLY same */}
        <h1 className="text-3xl font-bold text-gray-800">
          GenPhase
        </h1>
      </div>
    </div>
  );
}
