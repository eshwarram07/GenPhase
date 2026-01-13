export default function Hero({ setModalOpen }) {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-between 
      px-16 py-20 overflow-hidden bg-[#fafbff]"
    >

      {/* BACKGROUND SHAPES */}
      <div className="absolute left-0 top-0 w-[400px] h-[600px] bg-pink-100 rounded-full opacity-60 blur-3xl -z-10" />
      <div className="absolute right-0 bottom-0 w-[350px] h-[500px] bg-blue-100 rounded-full opacity-60 blur-3xl -z-10" />

      {/* LEFT CONTENT */}
      <div className="relative z-10 max-w-xl fade-up animation-delay-300">
        

        <h1 className="text-6xl font-extrabold leading-tight text-gray-900">
          Next-Gen <span className="text-blue-500">Digital & AI Consulting</span>
          <br />
          Powering Smarter <span className="text-orange-500">Business, Today</span>
        </h1>

        <p className="mt-6 text-gray-700 text-lg max-w-md">
          GenPhase AI helps businesses innovate, automate processes, and scale
          intelligently with advanced AI technologies.
        </p>

        {/* CTA BUTTON */}
        <button
          onClick={() => setModalOpen(true)}
          className="mt-10 px-10 py-4 rounded-full text-lg font-semibold 
          bg-gradient-to-r from-blue-500 to-blue-400 
          hover:from-blue-600 hover:to-blue-500 
          text-white shadow-xl transition-all"
        >
          Schedule a Consultation
        </button>
      </div>

      {/* RIGHT IMAGE (ANIMATED) */}
      <div className="relative z-10 fade-up animation-delay-100">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
          alt="AI Team"
          className="w-[550px] rounded-3xl shadow-xl object-cover border-8 border-white"
        />
      </div>

      {/* ANIMATIONS */}
      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 1s ease forwards;
        }
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-300 { animation-delay: 0.3s; }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
