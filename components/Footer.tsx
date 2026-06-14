// components/Footer.tsx
"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#030508] pt-24 pb-12 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[20vw] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-24"
        >
          <h2 className="font-space text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
            Készen állsz az <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Evolúcióra?</span>
          </h2>
          <p className="text-white/50 text-xl font-light mb-10 max-w-xl">
            Lépj be a THE GBR szatellit laborjába, és emeljük új dimenzióba a digitális jelenlétedet.
          </p>
          <Link href="/kapcsolat" className="px-12 py-5 bg-white text-black font-sans font-bold rounded-full shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300">
            Projekt Indítása
          </Link>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/40 text-sm font-light">
          <p>© 2026 FreeLab. Minden jog fenntartva.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            {/* KÜLSŐ LINK A THE GBR-RE */}
            <a 
              href="https://thegbr.eu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-cyan-400 font-bold hover:text-white flex items-center gap-1 transition-colors"
            >
              THE GBR Ökoszisztéma ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}