// components/Navbar.tsx
"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Figyeljük a görgetést az okos menühöz
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-[#030508]/80 backdrop-blur-lg border-b border-white/5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Új, Extravagáns Logó */}
        <Link href="/" className="group flex items-center gap-4">
          <div className="relative w-7 h-7 flex items-center justify-center">
            {/* Külső ragyogás */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-indigo-500 rounded-full blur-[6px] group-hover:blur-[10px] transition-all duration-500 opacity-70"></div>
            {/* Belső mag */}
            <div className="relative w-full h-full bg-[#030508] border border-white/20 rounded-full flex items-center justify-center z-10">
              <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:scale-[2] transition-transform duration-500"></div>
            </div>
          </div>
          <span className="font-space text-2xl tracking-[0.25em] text-white">
            <span className="font-light text-white/50">FREE</span>
            <span className="font-bold">LAB</span>
            <span className="text-cyan-400 font-bold leading-none">.</span>
          </span>
        </Link>
        
        {/* Menüpontok */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#projektek" className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors">
            Módszertan
          </Link>
          <Link href="/lab-notes" className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-white/50 hover:text-cyan-400 transition-colors">
            Lab Notes
          </Link>
          <Link href="/kapcsolat" className="px-6 py-2.5 text-xs font-sans font-bold tracking-[0.2em] uppercase bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
            Kezdjünk
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}