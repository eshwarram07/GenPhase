import React, { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function WhatWeDo() {
  // Title reveal
  const [titleRef, titleVisible] = useScrollReveal();

  // FIX: Create hooks manually
  const [ref1, vis1] = useScrollReveal();
  const [ref2, vis2] = useScrollReveal();
  const [ref3, vis3] = useScrollReveal();
  const [ref4, vis4] = useScrollReveal();
  const [ref5, vis5] = useScrollReveal();
  const [ref6, vis6] = useScrollReveal();

  const revealRefs = [
    [ref1, vis1],
    [ref2, vis2],
    [ref3, vis3],
    [ref4, vis4],
    [ref5, vis5],
    [ref6, vis6],
  ];

  // Hover states
  const [h1, setH1] = useState(false);
  const [h2, setH2] = useState(false);
  const [h3, setH3] = useState(false);
  const [h4, setH4] = useState(false);
  const [h5, setH5] = useState(false);
  const [h6, setH6] = useState(false);

  const hoverStates = [
    [h1, setH1],
    [h2, setH2],
    [h3, setH3],
    [h4, setH4],
    [h5, setH5],
    [h6, setH6],
  ];

  // ICONS
  const serviceIcons = {
    "AI Strategy & Readiness": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    "AI Solution Development": "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
    "Enterprise AI Scale": "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
    "Agentic AI & Automation": "https://cdn-icons-png.flaticon.com/512/2883/2883912.png",
    "Industry AI Accelerators": "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
    "Responsible AI & Governance": "https://cdn-icons-png.flaticon.com/512/2920/2920256.png",
  };

  // Service data
  const services = [
    {
      title: "AI Strategy & Readiness",
      bullets: [
        "Assess AI maturity and identify high-impact use cases",
        "Quantify value through business cases that deliver 20–40% operational efficiency gains",
        "Design the right data and technology foundation",
        "Establish AI governance and ethical frameworks",
      ],
      bg: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    },
    {
      title: "AI Solution Development",
      bullets: [
        "Develop custom ML models and generative AI applications",
        "Implement AI agents to automate complex workflows, reducing manual effort by up to 70%",
        "Create 360° customer intelligence platforms through personalization",
        "Implement MLOps for continuous model improvement",
      ],
      bg: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    },
    {
      title: "Enterprise AI Scale",
      bullets: [
        "Scale from pilot programs to enterprise-wide deployment",
        "Build AI Centers of Excellence to drive continuous innovation",
        "Implement responsible AI governance and lifecycle management",
        "Enable workforce transformation and AI fluency",
      ],
      bg: "https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg",
    },
    {
      title: "Agentic AI & Automation",
      bullets: [
        "Design AI agents that can reason, plan, and execute",
        "Build multi-agent orchestration systems for complex processes",
        "Automate end-to-end decision-making and optimization",
        "Enable real-time intelligent responses",
      ],
      bg: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    },
    {
      title: "Industry AI Accelerators",
      bullets: [
        "Financial Services: Fraud detection, credit risk, personalized banking",
        "Life Sciences: Accelerating clinical trials and drug discovery with data-driven insight",
        "Retail: Demand forecasting, dynamic pricing, and recommendation engines",
        "Manufacturing: Predictive maintenance, quality control, and efficiency analytics",
      ],
      bg: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
    },
    {
      title: "Responsible AI & Governance",
      bullets: [
        "Establish AI ethics frameworks and bias detection mechanisms",
        "Implement explainable AI (XAI) for auditability and compliance",
        "Deploy model monitoring and drift detection systems",
        "Ensure data privacy and security (GDPR and CCPA compliant)",
      ],
      bg: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg",
    },
  ];

  // Card container
  const cardWrapper = {
    width: "320px",
    height: "460px",
    borderRadius: "16px",
    overflow: "hidden",
    position: "relative",
    background: "#fff",
    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
    willChange: "transform, opacity",
  };

  // Background full image
  const bgImage = (url) => ({
    width: "100%",
    height: "100%",
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.82)",
    willChange: "transform",
  });

  // Top overlay (icon + title)
  const topOverlay = {
    position: "absolute",
    top: 20,
    left: 0,
    width: "100%",
    textAlign: "center",
    zIndex: 10,
    color: "#fff",
    textShadow: "0 3px 10px rgba(0,0,0,0.4)",
    willChange: "opacity, transform",
  };

  const iconStyle = {
    width: "42px",
    height: "42px",
    margin: "0 auto 8px auto",
  };

  const titleStyleOnImage = {
    fontSize: "1.1rem",
    fontWeight: "800",
    marginTop: "4px",
  };

  // LAG-FREE slide up panel
  const infoBox = (hover) => ({
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100%",
    background: "rgba(227, 235, 241, 0.97)",
    padding: "26px",
    borderRadius: "18px 18px 0 0",
    transition: "transform 0.45s ease",
    transform: hover ? "translate3d(0,0,0)" : "translate3d(0,100%,0)", // GPU
    overflow: "hidden",
    zIndex: 20,
    willChange: "transform",
  });

  const titleInsidePanel = {
    fontSize: "1.3rem",
    fontWeight: "800",
    color: "#0a4870",
    marginBottom: "14px",
    textAlign: "center",
  };

  return (
    <section className="w-full bg-[#eef3ff] py-24">

      {/* WHAT WE DO + SUBTEXT */}
      <div className="max-w-3xl mx-auto mt-8 text-center">
        <h3 className="text-[#ff7a1a] text-sm font-bold tracking-wider">
          WHAT WE DO
        </h3>

        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
          <span className="text-[#2e43ff]">AI Transformation</span>{" "}
          <span className="text-black">Services</span>
        </h2>

        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
          We help organizations build competitive advantage with{" "}
          <span className="text-[#ff7a1a] font-semibold">responsible AI</span>,
          delivering value from strategy through execution at scale and ensuring
          long-term impact.
        </p>

        <div className="w-24 h-1 bg-[#ff7a1a] mx-auto mt-4 rounded-full" />
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {services.map((service, i) => {
          const [ref, vis] = revealRefs[i];
          const [hover, setHover] = hoverStates[i];

          return (
            <div
              key={i}
              ref={ref}
              style={{
                ...cardWrapper,
                opacity: vis ? 1 : 0,
                transform: vis
                  ? "translate3d(0,0,0)"
                  : "translate3d(0,20px,0)", // GPU transform
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {/* FULL IMAGE */}
              <div style={bgImage(service.bg)} />

              {/* ICON + TITLE */}
              {!hover && (
                <div style={topOverlay}>
                  <img src={serviceIcons[service.title]} style={iconStyle} alt="" />
                  <div style={titleStyleOnImage}>{service.title}</div>
                </div>
              )}

              {/* SLIDE-UP PANEL */}
              <div style={infoBox(hover)}>
                {hover && (
                  <>
                    <div style={titleInsidePanel}>{service.title}</div>

                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {service.bullets.map((b, idx) => (
                        <li
                          key={idx}
                          style={{
                            margin: "10px 0",
                            fontSize: "0.95rem",
                          }}
                        >
                          ✔ {b}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

            </div>
          );
        })}

      </div>
    
    </section>
  );
}
