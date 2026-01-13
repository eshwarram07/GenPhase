import React, { useState } from "react";

export default function BookCallModal({ open, onClose }) {
  const [step, setStep] = useState(1); // STEP 1 → Calendar, STEP 2 → Form

  if (!open) return null;

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99998]"
      />

      {/* MODAL */}
      <div className="fixed inset-0 flex items-center justify-center z-[99999] px-4">
        <div className="bg-white w-full max-w-5xl rounded-2xl shadow-xl p-10 relative animate-fadeIn">

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-3xl text-gray-500 hover:text-black"
          >
            ✕
          </button>

          {/* HEADER */}
          <h2 className="text-3xl font-serif font-bold text-center">
            Let’s Build the Future of Your Business – Together
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Schedule a strategy call with our AI experts and discover tailored solutions designed
            to drive performance, efficiency, and innovation.
          </p>

          {/* CONTENT AREA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

            {/* LEFT CONTACT BOX */}
            <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Talk to our experts!</h3>

              <p>📧 hello@genphase.ai</p>
              <p className="mt-2">📞 (844) 922-7468</p>
              <p className="mt-2">
                📍 1990 N California Blvd., 8th Floor Walnut Creek, CA 94596
              </p>

              <p className="mt-4 font-semibold">Follow Us</p>
              <div className="flex gap-3 mt-2">
                <button className="text-2xl">🔗</button>
                <button className="text-2xl">📘</button>
              </div>
            </div>

            {/* RIGHT SIDE — CHANGE BASED ON STEP */}
            {/* --------------------------------------------------------- */}
            {/* STEP 1 — CALENDAR + TIMES */}
            {step === 1 && (
              <div className="p-6 border rounded-xl shadow-sm">
                <h3 className="text-lg font-bold">30 Min Meeting</h3>
                <p className="text-gray-600 text-sm">
                  GenPhase Connect · MS Teams · Asia/Kolkata
                </p>

                {/* Calendar placeholder */}
                <div className="bg-gray-100 h-56 rounded-xl flex items-center justify-center mt-4 text-gray-500">
                  Calendar UI
                </div>

                {/* Time Slots */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {["2:00 AM", "2:30 AM", "3:00 AM", "3:30 AM"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setStep(2)}
                      className="py-2 border rounded-lg hover:bg-blue-100 transition"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* --------------------------------------------------------- */}
            {/* STEP 2 — FORM */}
            {step === 2 && (
              <div className="p-6 border rounded-xl shadow-sm">
                <h3 className="text-lg font-bold">30 Min Meeting</h3>
                <p className="text-gray-600 text-sm">
                  Wednesday, April 1, 2026 · 2:00–2:30 AM · MS Teams
                </p>

                {/* FORM */}
                <div className="mt-4 space-y-4">
                  <div>
                    <label className="text-sm font-semibold">Your name *</label>
                    <input
                      className="w-full border rounded-lg p-2 mt-1"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold">Email address *</label>
                    <input
                      className="w-full border rounded-lg p-2 mt-1"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold">Additional notes</label>
                    <textarea
                      className="w-full border rounded-lg p-2 mt-1 h-24"
                      placeholder="Please share anything that will help prepare for our meeting."
                    />
                  </div>

                  <button
                    className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800"
                  >
                    Confirm Booking
                  </button>

                  <button
                    onClick={() => setStep(1)}
                    className="w-full text-gray-500 mt-2 hover:underline"
                  >
                    Back
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}
