"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-10 h-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-gray-300 dark:bg-gray-500 rounded-full animate-fade"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${i * 45}deg) translate(16px)`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .animate-fade {
          animation: fade 1s linear infinite;
        }

        @keyframes fade {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
