import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import MenuPanel from "./MenuPanel";

export default function Navbar({ setModalOpen }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/service");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      if (open) setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  if (hideNavbar) return null;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[99990] transition-all duration-700
          ${scrolled ? "bg-white/90 backdrop-blur-lg shadow-md" : "bg-transparent"}
        `}
      >
        <nav className="max-w-7xl mx-auto px-10 py-6 flex items-center justify-between relative">

          {/* MENU */}
          <div
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 cursor-pointer text-lg uppercase text-[#1A1A1A]"
          >
            <div className="text-3xl">☰</div>
            <span>Menu</span>
          </div>

          {/* CENTER LOGO (ONLY BEFORE SCROLL) */}
          {!scrolled && (
            <div className="absolute left-1/2 -translate-x-1/2">
              <img src={logo} className="h-14" alt="GenPhase Logo" />
            </div>
          )}

          {/* SCROLLED LOGO + BLACK COMPANY NAME */}
          {scrolled && (
            <div className="flex items-center gap-3 transition-all duration-700 animate-fadeIn">
              <img src={logo} className="h-12" alt="GenPhase Logo" />
              <span className="text-2xl font-extrabold tracking-tight text-black">
                GenPhase
              </span>
            </div>
          )}

          {/* BOOK A CALL BUTTON (BLUE) */}
          <button
            onClick={() => setModalOpen(true)}
            className="px-6 py-2 bg-[#2e43ff] text-white rounded-full font-semibold 
            shadow-md hover:bg-[#1d2bd6] transition-all"
          >
            Book a Call
          </button>
        </nav>

        {/* Underline */}
        <div
          className={`w-full h-[1.5px] bg-gradient-to-r
          from-transparent via-black/30 to-transparent
          transition-all duration-700 translate-y-4
          ${scrolled ? "opacity-0" : "opacity-50"}
        `}
        />
      </header>

      <MenuPanel open={open} onClose={() => setOpen(false)} />
    </>
  );
}
