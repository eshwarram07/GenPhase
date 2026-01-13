import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Industries() {
  const navigate = useNavigate();
  const [active, setActive] = useState(null);

  // Scroll reveal for title
  const [titleRef, titleVisible] = useScrollReveal();

  // Industry Data
  const industries = [
    {
      title: "Life Sciences",
      desc: "AI enables rapid drug discovery, precision healthcare, and automation of clinical workflows.",
      slug: "life-sciences",
      icon: "https://cdn-icons-png.flaticon.com/512/2966/2966484.png",
      bg: "https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Financial Services",
      desc: "AI-driven analytics, CRM augmentation, fraud detection, and dynamic pricing models.",
      slug: "financial-services",
      icon: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
      bg: "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
    },
    {
      title: "Healthcare",
      desc: "AI for diagnostics, medical imaging, automation, and hospital intelligence.",
      slug: "healthcare",
      icon: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
      bg: "https://images.unsplash.com/photo-1580281658629-18a7d6ea47b2",
    },
    {
      title: "Retail & E-Commerce",
      desc: "Personalization, demand forecasting, AI pricing, and recommendation engines.",
      slug: "retail",
      icon: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
      bg: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    },
    {
      title: "Manufacturing",
      desc: "Predictive maintenance, automation, robotics, and digital twins.",
      slug: "manufacturing",
      icon: "https://cdn-icons-png.flaticon.com/512/457/457651.png",
      bg: "https://images.unsplash.com/photo-1581092795360-8a5d8f3f8f9e",
    },
    {
      title: "Energy & Utilities",
      desc: "Energy forecasting, grid optimization, sustainability, and automation.",
      slug: "energy",
      icon: "https://cdn-icons-png.flaticon.com/512/1048/1048949.png",
      bg: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    },
  ];

  // ⭐ FIXED: MANUALLY CREATE 6 SCROLL REVEAL HOOKS
  const [cardRef1, visible1] = useScrollReveal();
  const [cardRef2, visible2] = useScrollReveal();
  const [cardRef3, visible3] = useScrollReveal();
  const [cardRef4, visible4] = useScrollReveal();
  const [cardRef5, visible5] = useScrollReveal();
  const [cardRef6, visible6] = useScrollReveal();

  const cardRefs = [
    [cardRef1, visible1],
    [cardRef2, visible2],
    [cardRef3, visible3],
    [cardRef4, visible4],
    [cardRef5, visible5],
    [cardRef6, visible6],
  ];

  return (
    <section className="w-full bg-white py-24">
      {/* TITLE */}
      <div
        ref={titleRef}
        className={`text-center transition-all duration-[1s]
          ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          <span className="text-[#ff7a1a]">Industries</span> We Empower
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          Accelerating innovation across the world's most impactful sectors.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {industries.map((industry, index) => {
          const [ref, visible] = cardRefs[index];

          return (
            <div
              key={index}
              ref={ref}
              className={`relative flex justify-center transition-all duration-[1s]
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
            >
              {/* POPUP */}
              <div
                className={`
                  absolute -top-32 w-[280px] p-6 rounded-2xl shadow-2xl 
                  backdrop-blur-xl border border-white/40
                  bg-gradient-to-br from-[#ff7a1a] via-[#ff9f42] to-[#ffc07a]
                  text-white transition-all duration-500 z-20
                  ${active === index 
                    ? "opacity-100 -translate-y-3 scale-100" 
                    : "opacity-0 translate-y-3 scale-90 pointer-events-none"}
                `}
              >
                <p className="text-sm mt-2">{industry.desc}</p>
                <div className="w-5 h-5 bg-gradient-to-br from-[#ff7a1a] to-[#ffc07a]
                  rotate-45 absolute left-1/2 -bottom-2 -translate-x-1/2 shadow-xl" />
              </div>

              {/* CARD */}
              <div
                className={`bg-white h-[320px] w-full rounded-2xl shadow-lg 
                  transition-all duration-500 cursor-pointer 
                  flex flex-col items-center justify-center gap-4 p-6 relative overflow-hidden
                  ${active === index ? "translate-y-4 scale-[0.97] shadow-xl" : ""}
                `}
              >
                {/* BG */}
                <img
                  src={industry.bg}
                  alt={industry.title}
                  className="absolute inset-0 w-full h-full object-cover scale-110 rounded-2xl"
                />

                <div className="absolute inset-0 bg-black/20 rounded-2xl" />

                {/* CONTENT */}
                <div className="relative flex flex-col items-center gap-4 z-10">
                  <img
                    src={industry.icon}
                    alt={industry.title}
                    className={`
                      w-20 transition-all duration-500 
                      ${active === index ? "scale-110 animate-float drop-shadow-[0_0_20px_#ff7a1a]" : ""}
                    `}
                  />

                  <h3 className="text-lg font-bold text-white text-center">
                    {industry.title}
                  </h3>

                  <button
                    onClick={() => navigate(`/service/${industry.slug}`)}
                    className="px-6 py-2 rounded-full bg-[#ff7a1a] text-white text-sm font-semibold shadow-md hover:bg-[#d96800] transition-all duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* FLOAT ANIMATION */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
