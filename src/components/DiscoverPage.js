import React, { useState } from "react";
import DiscoverData from "./DiscoverData";

export default function DiscoverPage() {
  const [selected, setSelected] = useState(DiscoverData[0]);

  return (
    <div className="w-full min-h-screen flex bg-black text-white">

      {/* LEFT PANEL */}
      <div className="w-[40%] bg-black/90 p-12 border-r border-white/10">
        <button
          onClick={() => window.history.back()}
          className="text-white/60 hover:text-white uppercase tracking-widest mb-10"
        >
          ✕ Close
        </button>

        <h3 className="uppercase tracking-[0.25em] text-white/70 mb-6">
          ← Solutions
        </h3>

        {/* Item List */}
        <ul className="space-y-6">
          {DiscoverData.map((item) => (
            <li
              key={item.id}
              onClick={() => setSelected(item)}
              className={`cursor-pointer uppercase tracking-widest text-sm 
                ${
                  selected.id === item.id
                    ? "text-blue-400"
                    : "text-white/60 hover:text-white"
                }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 relative">
        <img
          src={selected.image}
          alt={selected.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-16 left-16 max-w-lg">
          <h1 className="text-4xl font-bold mb-4">{selected.name}</h1>
          <p className="text-white/80 mb-6">{selected.description}</p>

          <button className="px-10 py-3 bg-blue-600 text-white rounded-full tracking-widest">
            DISCOVER
          </button>
        </div>
      </div>
    </div>
  );
}
