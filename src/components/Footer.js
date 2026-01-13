import React from "react";
import { FaYoutube, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.png"; // <-- make sure path is correct

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 mt-20">

      {/* CENTER LOGO + NAME */}
      <div className="flex justify-center items-center space-x-3">
        <img src={logo} alt="GenPhase" className="h-10 opacity-90" />
        <h2 className="text-lg tracking-widest text-white font-semibold">
          GenPhase
        </h2>
      </div>

      {/* SOCIAL ICONS */}
      <div className="flex justify-center space-x-6 text-xl mt-6">
        <FaYoutube className="cursor-pointer hover:text-white" />
        <FaFacebookF className="cursor-pointer hover:text-white" />
        <FaInstagram className="cursor-pointer hover:text-white" />
        <FaLinkedinIn className="cursor-pointer hover:text-white" />
      </div>

      {/* BOTTOM LINKS */}
      <div className="text-center text-xs text-gray-400 mt-10 space-x-6">
        <span className="hover:text-white cursor-pointer">Privacy & Terms</span>
        <span className="hover:text-white cursor-pointer">Manage Cookies</span>
        <span className="hover:text-white cursor-pointer">Back To Top</span>
        <span className="hover:text-white cursor-pointer">Resources</span>
        <span className="hover:text-white cursor-pointer">Contact</span>
      </div>

      {/* COPYRIGHT */}
      <p className="text-center text-xs text-gray-500 mt-6">
        © 2026 GenPhase. All rights reserved.
      </p>
    </footer>
  );
}
