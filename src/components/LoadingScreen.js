export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/70 backdrop-blur-md z-[9998]">

      {/* Premium Circular Gradient Loader */}
      <svg
        width="90"
        height="90"
        viewBox="0 0 100 100"
        className="animate-spin-slow"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#4FC3F7" />
            <stop offset="50%"  stopColor="#7C4DFF" />
            <stop offset="100%" stopColor="#00E5FF" />
          </linearGradient>
        </defs>

        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="url(#gradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="235"
          strokeDashoffset="60"
        />
      </svg>

    </div>
  );
}
