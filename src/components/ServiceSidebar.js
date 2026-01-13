import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function ServiceSidebar() {
  const location = useLocation();
  const currentSlug = location.pathname.split("/")[2];

  // FIXED — clean slug mapping
  const items = [
    { name: "AI Strategy & Readiness", slug: "ai-strategy" },
    { name: "AI Solution Development", slug: "ai-solution" },
    { name: "Enterprise AI Scale", slug: "enterprise-scale" },
    { name: "Agentic AI & Automation", slug: "agentic-ai" },
    { name: "Industry AI Accelerators", slug: "industry-ai" },
    { name: "Responsible AI & Governance", slug: "governance" },
  ];

  const [animate, setAnimate] = useState(false);
  const [listIndex, setListIndex] = useState(-1);

  // Animate ONLY on first mount
  useEffect(() => {
    setAnimate(false);
    setListIndex(-1);

    setTimeout(() => setAnimate(true), 80);

    items.forEach((_, i) => {
      setTimeout(() => setListIndex(i), 200 + i * 140);
    });
  }, []);

  return (
    <div
      className={`
        fixed left-0 top-0 h-full w-[300px]
        bg-gradient-to-b from-[#111] via-[#0c0c0c] to-black
        border-r border-white/10 shadow-2xl
        px-10 py-16 text-white
        transition-all duration-[900ms]
        ${animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
      `}
    >
      {/* BACK BUTTON */}
      <Link
        to="/"
        className={`
          text-white/70 flex items-center gap-2 mb-10 text-sm uppercase tracking-[0.25em]
          transition-all duration-[800ms]
          ${animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}
        `}
      >
        ← Back to Home
      </Link>

      {/* SERVICE MENU */}
      <ul className="space-y-7 text-[15px] tracking-[0.2em]">
        {items.map((item, index) => {
          const active = currentSlug === item.slug;

          return (
            <li
              key={item.slug}
              className={`
                transition-all duration-[850ms]
                ${listIndex >= index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
              `}
            >
              <Link
                to={`/service/${item.slug}`}
                className={active ? "text-white font-semibold" : "text-white/60 hover:text-white"}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
