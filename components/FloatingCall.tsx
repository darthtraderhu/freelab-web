// components/FloatingCall.tsx (részlet)

// Ezt a sort keresd:
// <a href="tel:+36705139838" className="fixed bottom-8 right-8 ...">

// És cseréld erre (átírtuk bottom-24-re):
<a
  href="tel:+36705139838"
  className="fixed bottom-24 right-8 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#030508]/80 backdrop-blur-md border border-cyan-500/30 text-cyan-400 hover:bg-cyan-400 hover:text-[#030508] hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] group cursor-none"
  aria-label="Azonnali Hívás"
></a>