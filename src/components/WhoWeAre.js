// src/components/WhoWeAre.jsx
import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import teamImg from "../assets/team.jpg";

export default function WhoWeAre() {
  const [imgRef, imgVisible] = useScrollReveal();
  const [textRef, textVisible] = useScrollReveal();

  return (
    <section id="whoweare" className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div
          ref={imgRef}
          className={`bg-white rounded-3xl shadow-xl p-4 border transition-all duration-[1s]
            ${imgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <img src={teamImg} alt="Team" className="rounded-2xl w-full object-cover" />
        </div>

        {/* TEXT */}
        <div
          ref={textRef}
          className={`transition-all duration-[1s] delay-[0.3s]
            ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <h4 className="text-[#ff7a1a] font-bold uppercase text-sm tracking-wide">
            WHO WE ARE
          </h4>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 leading-snug text-gray-900">
            At GenPhase, we don’t just adapt to change—
            <span className="block text-[#ff7a1a]">we engineer it.</span>
          </h2>

          <p className="mt-6 text-gray-700 text-[17px]">
            We help enterprises turn AI potential into business performance.
          </p>

          <p className="mt-4 text-gray-600">
            We connect strategy, data, and technology to transform organizations.
          </p>

          <p className="mt-4 text-gray-600">
            With industry expertise, we deliver scalable and responsible AI.
          </p>
        </div>

      </div>
    </section>
  );
}
