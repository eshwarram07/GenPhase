import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ServiceSidebar from "./ServiceSidebar";

/* ---------------- SERVICE DATA ---------------- */
const serviceData = {
  "ai-strategy": {
    title: "AI Strategy & Readiness",
    cards: [
      {
        title: "Assess AI maturity and identify high-impact use cases",
        points: [
          "Quantify value through business cases that deliver 20–40% efficiency gains",
          "Design the right data and technology foundation",
          "Establish AI governance and ethical frameworks",
        ],
        button: "A clear path from pilot to production in just 90 days",
      },
    ],
  },

  "ai-solution": {
    title: "AI Solution Development",
    cards: [
      {
        title: "Build production-grade AI systems",
        points: [
          "Develop custom ML models and GenAI applications",
          "Automate workflows using AI agents",
          "Create 360° customer intelligence platforms",
          "Implement MLOps for continuous improvement",
        ],
        button: "Live AI solutions generating value within 6–9 months",
      },
    ],
  },

  "enterprise-scale": {
    title: "Enterprise AI Scale",
    cards: [
      {
        title: "Industrialize AI across your organization",
        points: [
          "Scale from pilot to enterprise-wide deployment",
          "Build AI Centers of Excellence",
          "Implement responsible AI governance",
          "Enable AI workforce transformation",
        ],
        button: "50+ use cases in production within 18 months",
      },
    ],
  },

  "agentic-ai": {
    title: "Agentic AI & Automation",
    cards: [
      {
        title: "Deploy autonomous AI agents",
        points: [
          "Design agents that reason, plan, and execute",
          "Build multi-agent orchestration workflows",
          "Automate decision-making & optimization",
          "Enable real-time intelligent responses",
        ],
        button: "3–5× productivity gains",
      },
    ],
  },

  "industry-ai": {
    title: "Industry AI Accelerators",
    cards: [
      {
        title: "Domain-specific accelerators",
        points: [
          "Financial Services: Fraud detection, credit risk",
          "Life Sciences: Clinical trial optimization",
          "Retail: Forecasting & pricing systems",
          "Manufacturing: Predictive analytics",
        ],
        button: "60% faster deployment vs building from scratch",
      },
    ],
  },

  governance: {
    title: "Responsible AI & Governance",
    cards: [
      {
        title: "Build trustworthy AI systems",
        points: [
          "AI ethics frameworks & bias detection",
          "Explainable AI (XAI) for compliance",
          "Model drift monitoring & governance",
          "GDPR & CCPA compliant data handling",
        ],
        button: "Risk-free AI that builds long-term trust",
      },
    ],
  },
};

export default function ServicePage() {
  const { slug } = useParams();
  const data = serviceData[slug];

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    setTimeout(() => setVisible(true), 150);
  }, [slug]);

  return (
    <div className="flex">

      <ServiceSidebar />

      {/* MAIN CONTENT */}
      <div className="ml-[300px] w-full px-10 lg:px-20 py-12 bg-white min-h-screen">

        {/* 🔥 HEADING STYLE 1 — LEFT ALIGNED WITH COLOR BAR */}
        <div
          className={`
            flex items-center gap-5 mb-16 mt-6 
            transition-all duration-700
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          {/* Left Accent Bar */}
          <div className="w-2 h-16 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full shadow-lg"></div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            {data?.title}
          </h1>
        </div>

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">

          {data?.cards.map((card, index) => (
            <div
              key={index}
              className={`
                relative p-[3px] rounded-3xl 
                bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500
                animate-gradientMove 
                shadow-[0_0_25px_rgba(99,102,241,0.4)]
                transition-all duration-700
                hover:shadow-[0_0_45px_rgba(147,51,234,0.7)]
                hover:scale-[1.02]
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              `}
            >
              {/* INNER WHITE CARD */}
              <div className="bg-white rounded-3xl p-10">
                <h2 className="text-2xl font-semibold text-blue-800 mb-6 leading-snug">
                  {card.title}
                </h2>

                <ul className="space-y-4 text-gray-700 mb-8">
                  {card.points.map((p, i) => (
                    <li key={i} className="flex gap-3 text-[15px]">
                      <span className="text-blue-700 mt-0.5">✔</span>
                      {p}
                    </li>
                  ))}
                </ul>

                <button
                  className="
                    w-full py-3 rounded-xl font-semibold text-blue-900 border border-blue-900
                    hover:bg-blue-900 hover:text-white transition
                  "
                >
                  {card.button}
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
