import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

export default function MenuPanel({ open, onClose }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isServicePage = location.pathname.startsWith("/service");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!isServicePage) {
      if (open) setTimeout(() => setAnimate(true), 80);
      else setAnimate(false);
    }
  }, [open]);

  useEffect(() => {
    if (isServicePage) {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 60);
    }
  }, [location.pathname]);

  const goBackHome = () => {
    navigate("/");
    onClose();
  };

  return (
    <>
      {!isServicePage && (
        <div
          onClick={onClose}
          className={`
            fixed inset-0 bg-black/70 backdrop-blur-sm z-[99989]
            transition-opacity duration-[900ms]
            ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
        />
      )}

      <div
        className={`
          fixed top-0 left-0 h-full w-[340px] z-[99999]
          bg-gradient-to-br from-black via-[#0a0a0a] to-black
          border-r border-white/10 shadow-2xl
          px-12 py-14 text-white
          transition-transform duration-[1000ms]
          ${open || isServicePage ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {!isServicePage && (
          <div
            onClick={onClose}
            className="text-white/60 text-base mb-10 uppercase tracking-[0.25em] cursor-pointer"
          >
            ✕ CLOSE
          </div>
        )}

        {isServicePage && (
          <div
            onClick={goBackHome}
            className={`
              text-white/70 text-base mb-10 uppercase tracking-[0.25em] cursor-pointer
              ${animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
            `}
          >
            ← BACK TO HOME
          </div>
        )}

        {/* ⭐ MAIN MENU */}
        {!isServicePage && (
          <ul className="space-y-8 text-xl tracking-[0.25em]">
            {[
              { label: "Who We Are", link: "/#whoweare" },

              { label: "What We Do", link: "/service/ai-strategy", special: true },

              { label: "Solutions", link: "/#solutions" },
              { label: "Contact", link: "/#contact" },
            ].map((item, i) => (
              <li
                key={i}
                style={{ transitionDelay: `${animate ? i * 160 : 0}ms` }}
                className={`
                  transition-all duration-[850ms]
                  ${animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
                `}
              >
                {item.special ? (
                  <Link
                    to={item.link}
                    onClick={() => {
                      window.setShowRouteLoader(true);
                      setTimeout(() => window.setShowRouteLoader(false), 1000);
                      onClose();
                    }}
                    className="text-white/80 hover:text-white"
                  >
                    What We Do
                  </Link>
                ) : (
                  <a href={item.link} onClick={onClose} className="text-white/80 hover:text-white">
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}

        {/* SERVICE PAGE MENU */}
        {isServicePage && (
          <ul className="space-y-8 text-xl tracking-[0.25em]">
            {[
              { label: "AI Strategy & Readiness", slug: "ai-strategy" },
              { label: "AI Solution Development", slug: "ai-solution" },
              { label: "Enterprise AI Scale", slug: "enterprise-scale" },
              { label: "Agentic AI & Automation", slug: "agentic-ai" },
              { label: "Industry AI Accelerators", slug: "industry-ai" },
              { label: "Responsible AI & Governance", slug: "governance" },
            ].map((item, index) => (
              <li
                key={index}
                style={{ transitionDelay: `${animate ? index * 150 : 0}ms` }}
                className={`
                  transition-all duration-[900ms]
                  ${animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
                `}
              >
                <Link to={`/service/${item.slug}`} className="text-white/70 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
