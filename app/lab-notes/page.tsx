// app/lab-notes/page.tsx
"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// A Cikkek Kamu Adatbázisa
const labNotes = [
  {
    slug: "nextjs-15-es-a-jovo",
    title: "Next.js 15: A szerveroldali renderelés új dimenziója",
    excerpt: "Hogyan csökkentettük a betöltési időt 40ms alá a legújabb React architektúrával, és mit jelent ez az e-kereskedelem számára.",
    category: "Architektúra",
    readTime: "5 min read",
    date: "2026. Június 10."
  },
  {
    slug: "ai-api-integracio",
    title: "Túl a ChatGPT-n: LLM modellek natív integrációja",
    excerpt: "Ne chatbotot építs, hanem intelligens rendszert. Esettanulmány a prediktív adatelemzésről és a Python API-k összekötéséről.",
    category: "Mesterséges Intelligencia",
    readTime: "8 min read",
    date: "2026. Május 22."
  },
  {
    slug: "headless-shopify",
    title: "Headless Shopify: Amikor a konverzió a sebességen múlik",
    excerpt: "Miért dobjuk el a monolitikus sablonokat, és hogyan építünk Vercel Edge hálózaton futó, villámgyors webshopokat kompromisszumok nélkül.",
    category: "E-kereskedelem",
    readTime: "6 min read",
    date: "2026. Április 14."
  }
];

export default function LabNotes() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden bg-[#030508]">
      <Navbar />

      {/* Ambient Fények */}
      <div className="fixed top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      
      <section className="relative z-10 flex-grow pt-40 pb-32 px-6 max-w-7xl mx-auto w-full">
        
        {/* Fejléc */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <p className="text-cyan-500/80 font-sans font-medium tracking-[0.2em] uppercase text-xs mb-4 flex items-center justify-center md:justify-start gap-2">
              <span className="w-4 h-[1px] bg-cyan-500/50"></span>
              Kutatás & Fejlesztés
            </p>
            <h1 className="font-space text-5xl md:text-7xl font-bold text-white tracking-tight">
              Lab <span className="text-white/40">Notes.</span>
            </h1>
          </div>
          <p className="text-white/50 text-lg font-light max-w-md">
            Iparági elemzések, technológiai architektúrák és nyers kód. Így építjük a jövőt a THE GBR laborjában.
          </p>
        </motion.div>

        {/* Cikkek Listája (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labNotes.map((note, index) => (
            <motion.div 
              key={note.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            >
              <Link href={`/lab-notes/${note.slug}`} className="group block h-full">
                <div className="h-full bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] hover:border-cyan-500/30 transition-all duration-500 relative overflow-hidden flex flex-col">
                  
                  {/* Hover Fény */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/0 group-hover:bg-cyan-500/20 blur-[50px] rounded-full transition-all duration-700"></div>

                  <div className="flex justify-between items-center mb-8 relative z-10">
                    <span className="text-xs font-sans font-bold uppercase tracking-[0.15em] text-cyan-400 bg-cyan-400/10 px-3 py-1.5 rounded-full">
                      {note.category}
                    </span>
                    <span className="text-white/40 font-mono text-xs">
                      {note.readTime}
                    </span>
                  </div>

                  <h2 className="font-space text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-50 transition-colors relative z-10">
                    {note.title}
                  </h2>
                  
                  <p className="text-white/50 font-light leading-relaxed mb-10 flex-grow relative z-10">
                    {note.excerpt}
                  </p>

                  <div className="flex justify-between items-center pt-6 border-t border-white/10 relative z-10">
                    <span className="text-white/30 text-xs font-sans uppercase tracking-widest">{note.date}</span>
                    <span className="text-cyan-400 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </section>

      <Footer />
    </main>
  );
}