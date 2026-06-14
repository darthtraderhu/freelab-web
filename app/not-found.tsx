// app/not-found.tsx
"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden bg-[#030508]">
      <Navbar />

      {/* Vészhelyzeti Ambient Fények */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-red-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      
      {/* Sötétítő Vignette a széleken */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030508_100%)] pointer-events-none z-0"></div>

      <section className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 text-center">
        
        {/* Animált 404 Szám Glitch hatással */}
        <div className="relative mb-8">
          {/* Fő szám */}
          <motion.h1 
            animate={{ x: [-2, 2, -2, 0], opacity: [1, 0.8, 1, 1] }}
            transition={{ repeat: Infinity, duration: 0.2, repeatDelay: 4 }}
            className="font-space text-[10rem] md:text-[15rem] font-bold text-white leading-none select-none relative z-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            404
          </motion.h1>
          
          {/* Piros Glitch Árnyék */}
          <motion.h1 
            animate={{ x: [4, -4, 4, 0], opacity: [0, 0.7, 0, 0] }}
            transition={{ repeat: Infinity, duration: 0.2, repeatDelay: 4 }}
            className="font-space text-[10rem] md:text-[15rem] font-bold text-red-500 leading-none select-none absolute top-0 left-2 z-0 mix-blend-screen"
          >
            404
          </motion.h1>
          
          {/* Cián Glitch Árnyék */}
          <motion.h1 
            animate={{ x: [-4, 4, -4, 0], opacity: [0, 0.7, 0, 0] }}
            transition={{ repeat: Infinity, duration: 0.2, repeatDelay: 4 }}
            className="font-space text-[10rem] md:text-[15rem] font-bold text-cyan-500 leading-none select-none absolute top-0 -left-2 z-0 mix-blend-screen"
          >
            404
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          {/* Terminál hibaüzenet */}
          <div className="flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full border border-red-500/20 bg-red-500/10 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-red-400">System_Error: Sector_Not_Found</p>
          </div>

          <h2 className="font-space text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            A Jel <span className="text-white/30">Megszakadt.</span>
          </h2>
          
          <p className="text-white/50 text-lg font-light max-w-md mx-auto mb-12 leading-relaxed">
            A keresett koordináták nem léteznek a mátrixban, vagy a fájl megsemmisült. Térj vissza a biztonságos zónába.
          </p>

          <Link 
            href="/" 
            className="px-10 py-4 bg-white text-black font-sans font-bold uppercase tracking-[0.1em] text-sm rounded-full shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Vissza a Bázisra
          </Link>
        </motion.div>

      </section>
    </main>
  );
}