import React, { useState, useEffect } from "react";
import AOS from "aos";

export default function WhyUs() {
  const categories = [
    "Deep Domain Expertise",
    "Enterprise-Ready Innovation",
    "Outcome-Focused Delivery",
    "Collaborative Partnerships",
  ];

  const content = {
    "Deep Domain Expertise": {
      img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&q=80",
      desc1:
        "Strategic and technical precision built on years of experience across Life Sciences, Financial Services, SaaS, and Healthcare.",
      desc2:
        "Our cross-functional expertise enables us to solve complex challenges with clarity and confidence.",
    },

    "Enterprise-Ready Innovation": {
      img: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=800&q=80",
      desc1:
        "We harness the latest in Generative AI, automation, and data intelligence to build scalable, compliant enterprise solutions.",
      desc2:
        "Every system is architected for reliability, security, and enterprise-grade performance.",
    },

    "Outcome-Focused Delivery": {
      img: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=800&q=80",
      desc1:
        "Every engagement is tied to clear business objectives designed to accelerate outcomes and ROI.",
      desc2:
        "We ensure efficiency, innovation, and measurable value at every stage of delivery.",
    },

    "Collaborative Partnerships": {
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
      desc1:
        "We work closely with clients to co-create solutions that fit their workflows and long-term vision.",
      desc2:
        "Every partnership is built on trust, transparency, and continuous improvement.",
    },
  };

  const [active, setActive] = useState(categories[0]);
  const [cardKey, setCardKey] = useState(0);

  useEffect(() => {
    AOS.refresh();
  }, [active]);

  const handleTabClick = (cat) => {
    setActive(cat);
    setCardKey((prev) => prev + 1);
  };

  return (
    <section className="w-full py-20 bg-white" data-aos="zoom-in-up">
      
      {/* UPDATED HEADING */}
      <div
        className="text-center mb-16"
        data-aos="zoom-in-up"
        data-aos-duration="900"
      >
        <p className="text-blue-600 uppercase tracking-wide text-sm font-semibold">
          WHY US
        </p>

        <h2 className="text-4xl font-bold text-gray-900 leading-snug">
          <span className="text-blue-600">Innovating with Purpose.</span>{" "}
          <span className="text-black">Delivering with Precision.</span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
          At <span className="text-orange-500 font-semibold">GenPhase.ai</span>, we partner with enterprises to turn 
          <span className="text-blue-600 font-semibold"> AI potential </span>
          into <span className="text-black font-semibold">real business results</span> —  
          responsibly, measurably, and at scale.
        </p>

        <div className="w-24 h-1 bg-orange-500 mx-auto mt-5 rounded-full" />
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT TABS */}
        <div
          className="flex flex-col space-y-4"
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-easing="ease-out-cubic"
        >
          {categories.map((cat, i) => (
            <button
              key={cat}
              data-aos="fade-right"
              data-aos-delay={150 + i * 120}
              onClick={() => handleTabClick(cat)}
              className={`w-full py-4 border rounded-lg text-lg font-semibold transition 
              ${
                active === cat
                  ? "border-blue-500 bg-blue-50 text-blue-600"
                  : "border-blue-300 text-gray-700 hover:bg-blue-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* RIGHT CARD */}
        <div
          key={cardKey}
          className="md:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden flex"
          data-aos="zoom-out-left"
          data-aos-duration="1000"
          data-aos-easing="ease-out-back"
        >
          {/* IMAGE */}
          <div className="w-1/2 relative">
            <img
              src={content[active].img}
              alt={active}
              className="w-full h-full object-cover"
              style={{ height: "350px" }}
            />
            <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 text-sm rounded">
              Featured
            </span>
          </div>

          {/* TEXT */}
          <div
            className="w-1/2 p-8 flex flex-col justify-between"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{active}</h3>
              <p className="text-gray-600 mb-4">{content[active].desc1}</p>
              <p className="text-gray-600 mb-6">{content[active].desc2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
