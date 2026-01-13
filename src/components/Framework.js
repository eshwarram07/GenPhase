import React, { useRef, useEffect } from "react";

export default function Framework() {
  const sliderRef = useRef(null);
  const scrollSpeed = 1.5;
  let autoScroll = null;

  // Animation trigger for fade-in sections
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((el) => observer.observe(el));
  }, []);

  // CARD DATA
  const cards = [
    {
      title: "Life Science Services",
      subtitle: "Empowering Innovation in the AI Era",
      image:
        "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Tech Team for Life Science Startups",
      subtitle: "Turn your science investor-ready with domain-aware engineers.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Expert Guidance for Responsible AI",
      subtitle:
        "Align AI deployment with governance, architecture & measurable roadmaps.",
      image:
        "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "AI Workflow Automation",
      subtitle: "Automate operations with Smart AI systems.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Health AI Accelerator",
      subtitle: "Clinically Trusted AI, Built by Experts.",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ];

  // AUTO SCROLL
  const startScroll = () => {
    stopScroll();
    autoScroll = setInterval(() => {
      if (!sliderRef.current) return;
      sliderRef.current.scrollLeft += scrollSpeed;

      if (
        sliderRef.current.scrollLeft + sliderRef.current.clientWidth >=
        sliderRef.current.scrollWidth - 2
      ) {
        sliderRef.current.scrollLeft = 0;
      }
    }, 15);
  };

  const stopScroll = () => {
    if (autoScroll) clearInterval(autoScroll);
    autoScroll = null;
  };

  // CARD COMPONENT (animation removed previously)
  const Card = ({ title, subtitle, image }) => (
    <div
      className="relative min-w-[400px] max-w-[400px] bg-white/90 
      backdrop-blur-xl border border-[#d0e3ff]
      shadow-[0_10px_25px_rgba(0,120,255,0.18)]
      transition-all duration-500 cursor-pointer rounded-xl overflow-hidden p-4 group"
    >
      <div className="h-[250px] w-full overflow-hidden rounded-lg mb-4 relative">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#dff0ff]/60 to-transparent rounded-lg"></div>
      </div>

      <h4 className="text-sm text-[#0a4fb3] font-medium mb-1">{subtitle}</h4>
      <h3 className="text-2xl font-bold text-[#07223c] leading-snug mb-4">
        {title}
      </h3>

      <button className="text-[#005eff] font-semibold hover:underline">
        Read More →
      </button>
    </div>
  );

  return (
    <section className="w-full py-20 bg-white">

      {/* ========== 4D FRAMEWORK ========== */}
      <div className="max-w-6xl mx-auto px-6 fade-in-up text-center md:text-left">
        <h3 className="text-[#ff7a1a] font-bold tracking-wide text-lg">
          OUR APPROACH
        </h3>

        <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          The <span className="text-[#ff7a1a]">4D</span> Framework
        </h2>

        <p className="mt-3 text-lg text-gray-600 max-w-3xl leading-relaxed">
          Harnessing the power of AI to reimagine strategy, streamline deployment,
          and deliver measurable impact.
        </p>
      </div>

      {/* FLOW DIAGRAM */}
      <div className="max-w-6xl mx-auto px-6 mt-20 fade-in-up">
        <div className="bg-[#fff4ec] rounded-3xl shadow-lg border border-[#ffe3d0] p-12 animate-[pulse_4s_infinite]">

          {/* TOP TITLES REMOVED */}

          {/* ICON FLOW */}
          <div className="flex justify-center">
            <img
              src="/fourd-flow.svg"
              className="w-full max-w-3xl animate-[float_5s_ease-in-out_infinite]"
            />
          </div>

          {/* BOTTOM TITLES REMOVED */}
        </div>
      </div>

      {/* ========== SOLUTIONS ========== */}
      <section className="w-full mt-10 bg-[#eef6ff] py-24 min-h-[900px] relative">

        <div className="max-w-6xl mx-auto px-6 mt-10 fade-in-up">
          <h3 className="text-[#ff7a1a] font-bold text-lg tracking-wide">
            SOLUTIONS
          </h3>

          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold leading-snug text-black">
            Transform, Optimize, and <br />
            <span className="text-[#005eff]">
              Innovate with GenPhase.ai solutions
            </span>
          </h2>

          <p className="mt-3 text-[#222] max-w-3xl text-lg leading-relaxed">
            Explore our pre-built AI accelerators that deliver faster ROI and reduce deployment risk.
          </p>
        </div>

        {/* FADE EDGES */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#eef6ff] to-transparent pointer-events-none z-20"></div>
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#eef6ff] to-transparent pointer-events-none z-20"></div>

        {/* SLIDER */}
        <div className="w-full flex justify-center mt-10">
          <div
            ref={sliderRef}
            className="flex gap-16 overflow-x-scroll overflow-y-visible scrollbar-hide px-6"
            style={{ maxWidth: "1400px" }}
            onMouseEnter={startScroll}
            onMouseLeave={stopScroll}
          >
            {cards.map((c, i) => (
              <Card key={i} {...c} />
            ))}
          </div>
        </div>

      </section>

      {/* ========== ANIMATION CSS ========== */}
      <style>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s ease-out;
        }
        .fade-in-up.show {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}

