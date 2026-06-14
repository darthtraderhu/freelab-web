// components/LabNotesPreview.tsx
"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

// A 3 legfrissebb cikk (ugyanaz a kamu adatbázis)
const recentNotes = [
  {
    slug: "nextjs-15-es-a-jovo",
    title: "Next.js 15: A szerveroldali renderelés új dimenziója",
    category: "Architektúra",
    readTime: "5 min read"
  },
  {
    slug: "ai-api-integracio",
    title: "Túl a ChatGPT-n: LLM modellek natív integrációja",
    category: "Mesterséges Intelligencia",
    readTime: "8 min read"
  },
  {
    slug: "headless-shopify",
    title: "Headless Shopify: Amikor a konverzió a sebességen múlik",
    category: "E-kereskedelem",
    readTime: "6 min read"
  }
];

export default function LabNotesPreview() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative z-10" id="lab-notes-preview">
      
      {/* Fejléc és "Összes megtekintése" gomb */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-500/80 font-sans font-medium tracking-[0.2em] uppercase text-xs mb-4 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-cyan-500/50"></span>
            Kutatás & Fejlesztés
          </p>
          <h2 className="font-space text-4xl md:text-5xl font-bold text-white tracking-tight">
            Lab <span className="text-white/40">Notes.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link href="/lab-notes" className="inline-flex items-center gap-3 px-6 py-3 bg-white/[0.03] border border-white/10 text-white font-sans text-sm font-medium rounded-full hover:bg-white/10 transition-all duration-300 group">
            Összes bejegyzés
            <span className="group-hover:translate-x-1 transition-transform duration-300 text-cyan-400">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Cikk Kártyák Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recentNotes.map((note, index) => (
          <motion.div 
            key={note.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="h-full"
          >
            <Link href={`/lab-notes/${note.slug}`} className="block h-full group">
              <div className="h-full p-8 rounded-3xl bg-[#030508] border border-white/10 hover:border-cyan-500/30 transition-colors duration-500 relative overflow-hidden flex flex-col justify-between">
                
                {/* Hover Fény */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/0 group-hover:bg-cyan-500/10 blur-[40px] rounded-full transition-all duration-700"></div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-cyan-400">
                      {note.category}
                    </span>
                    <span className="text-white/30 font-mono text-xs">
                      {note.readTime}
                    </span>
                  </div>
                  <h3 className="font-space text-2xl font-bold text-white mb-4 group-hover:text-cyan-50 transition-colors">
                    {note.title}
                  </h3>
                </div>

                <div className="pt-8 mt-auto border-t border-white/5 flex items-center gap-2 text-white/40 text-sm font-medium group-hover:text-cyan-400 transition-colors">
                  Olvasás folytatása <span className="font-mono ml-1 transform group-hover:translate-x-1 transition-transform">↗</span>
                </div>

              </div>
            </Link>
          </motion.div>
        ))}
      </div>

    </section>
  );
}