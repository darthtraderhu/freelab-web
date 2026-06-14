// components/FloatingCall.tsx
import React from 'react';

export default function FloatingCall() {
  return (
    <a
      href="tel:+36705139838"
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#030508]/80 backdrop-blur-md border border-cyan-500/30 text-cyan-400 hover:bg-cyan-400 hover:text-[#030508] hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] group cursor-none"
      aria-label="Azonnali Hívás"
    >
      {/* Telefon SVG Ikon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 group-hover:animate-pulse"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
      
      {/* Láthatatlan lüktető radar effekt a háttérben */}
      <span className="absolute -inset-2 rounded-full border border-cyan-500/40 animate-ping opacity-30 group-hover:opacity-0 pointer-events-none duration-1000"></span>
    </a>
  );
}