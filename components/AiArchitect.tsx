// components/AiArchitect.tsx
"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AiArchitect() {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'analyzing' | 'done'>('idle');
  const [response, setResponse] = useState('');

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setStatus('analyzing');
    setResponse('');

    try {
      const res = await fetch('/api/architect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vision: input })
      });

      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error);

      setResponse(data.recommendation);
      setStatus('done');
    } catch (error) {
      setResponse("Hiba történt a Mátrixhoz való csatlakozáskor. Ellenőrizd a rendszert.");
      setStatus('done');
    }
  };

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto relative z-10" id="ai-tervezo">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full rounded-[2rem] overflow-hidden border border-white/10 bg-[#020305]/80 backdrop-blur-2xl shadow-[0_0_50px_rgba(34,211,238,0.05)] flex flex-col"
      >
        {/* Terminál Fejléc */}
        <div className="w-full h-12 border-b border-white/5 bg-white/[0.02] flex items-center px-6 gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          <div className="ml-4 font-mono text-[11px] text-white/40 tracking-[0.1em] flex items-center gap-2">
            freelab_ai_core <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
          </div>
        </div>

        {/* Terminál Test */}
        <div className="p-8 md:p-12">
          <h3 className="font-space text-2xl md:text-3xl font-bold text-white mb-2">
            AI Architektúra Tervező
          </h3>
          <p className="text-white/50 font-light mb-10 text-sm md:text-base">
            Írd le egy mondatban az üzleti célodat vagy víziódat, és a neurális hálózatunk másodpercek alatt megtervezi hozzá a legmodernebb technológiai stacket.
          </p>

          <form onSubmit={handleAnalyze} className="relative mb-8">
            <div className="absolute top-1/2 -translate-y-1/2 left-5 text-cyan-400 font-mono font-bold">{">"}</div>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={status === 'analyzing'}
              placeholder="Pl.: Egy olyan webshopot akarok, ami sosem fagy le Black Friday-kor..."
              className="w-full bg-[#030508] border border-white/10 rounded-xl pl-12 pr-32 py-5 text-white font-mono text-sm focus:outline-none focus:border-cyan-500/50 focus:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all disabled:opacity-50"
            />
            <button 
              type="submit"
              disabled={status === 'analyzing' || !input.trim()}
              className="absolute top-1/2 -translate-y-1/2 right-2 px-6 py-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-sans font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-cyan-500 hover:text-black transition-all disabled:opacity-50"
            >
              Futtatás
            </button>
          </form>

          {/* Eredmény Doboz */}
          <div className="min-h-[120px] rounded-xl bg-white/[0.02] border border-white/5 p-6 font-mono text-sm md:text-base leading-relaxed relative overflow-hidden">
            <AnimatePresence mode="wait">
              {status === 'idle' && (
                <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-white/20">
                  Rendszer készen áll a bemenetre...
                </motion.div>
              )}

              {status === 'analyzing' && (
                <motion.div key="analyzing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-cyan-400/80 flex items-center gap-3">
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full"></motion.div>
                  Adatok feldolgozása a THE GBR szatellit hálózatán...
                </motion.div>
              )}

              {status === 'done' && (
                <motion.div key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white/80 whitespace-pre-wrap">
                  {/* Egyszerű betűnkénti gépelés szimuláció CSS animációval */}
                  {response}
                  <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-2.5 h-4 bg-cyan-400 ml-1 translate-y-1"></motion.span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}