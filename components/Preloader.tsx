// components/Preloader.tsx
"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 2.2 másodperc után eltűnik a preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-[#030508] flex flex-col items-center justify-center"
        >
          {/* Központi reaktor animáció */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="relative w-24 h-24 mb-8 flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full border border-cyan-500/20"></div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute inset-0 rounded-full border-t border-cyan-400"
            ></motion.div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,1)] animate-ping"></div>
          </motion.div>

          {/* Betöltés szöveg */}
          <div className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400 flex items-center gap-1">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Rendszer Inicializálása
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            >
              _
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}