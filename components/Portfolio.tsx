// components/Portfolio.tsx
"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    id: "01",
    slug: "aura-fintech",
    title: "Aura Fintech",
    category: "Webalkalmazás & UI/UX",
    description: "Teljes digitális transzformáció egy svájci fintech startup számára. Valós idejű adatáramlás, letisztult adatábrázolás és 0 várakozási idő.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    gradient: "from-blue-900/20 to-black"
  },
  {
    id: "02",
    slug: "lumina-commerce",
    title: "Lumina Commerce",
    category: "Headless Webshop",
    description: "Extrém sebességre optimalizált e-kereskedelmi platform. A betöltési idő 400ms alá csökkentésével 45%-os konverzió-növekedést értünk el.",
    tech: ["Shopify Plus", "Next.js", "Stripe"],
    gradient: "from-cyan-900/20 to-black"
  },
  {
    id: "03",
    slug: "nexus-ai-core",
    title: "Nexus AI Core",
    category: "SaaS Platform",
    description: "Mesterséges intelligenciára épülő B2B adatelemző szoftver egyedi interfésze. Komplex adathalmazok, minimalista, fókuszált megjelenés.",
    tech: ["React", "Python API", "WebGL"],
    gradient: "from-indigo-900/20 to-black"
  }
];

export default function Portfolio() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative z-10" id="munkaink">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-24 text-center"
      >
        <p className="text-indigo-400/80 font-sans font-medium tracking-[0.2em] uppercase text-xs mb-4 flex items-center justify-center gap-2">
          <span className="w-4 h-[1px] bg-indigo-500/50"></span>
          Referenciák
          <span className="w-4 h-[1px] bg-indigo-500/50"></span>
        </p>
        <h2 className="font-space text-5xl md:text-7xl font-bold text-white tracking-tight">
          Kiválasztott <br />
          <span className="text-white/30">Munkák.</span>
        </h2>
      </motion.div>

      <div className="flex flex-col gap-32">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div key={project.id} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20 group`}>
              
              <Link href={`/munkaink/${project.slug}`} className="w-full md:w-3/5 block relative">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="aspect-[4/3] md:aspect-[16/10] rounded-3xl overflow-hidden relative border border-white/5 bg-[#030508] cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out`}></div>
                  <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-[2px]"></div>
                  
                  {/* Felfedezés Hover Gomb */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 text-white font-sans text-sm tracking-widest uppercase">
                    Megtekintés
                  </div>

                  <div className="absolute -bottom-10 -right-4 font-space text-[150px] md:text-[200px] font-bold text-white/[0.03] leading-none pointer-events-none">
                    {project.id}
                  </div>
                </motion.div>
              </Link>

              <motion.div 
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-2/5 flex flex-col"
              >
                <p className="text-white/40 font-sans font-medium tracking-[0.2em] uppercase text-xs mb-4">
                  {project.category}
                </p>
                <h3 className="font-space text-4xl md:text-5xl font-bold text-white mb-6">
                  {project.title}
                </h3>
                <p className="text-white/60 font-light text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-sans text-white/50 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Kattintható Link! */}
                <Link href={`/munkaink/${project.slug}`} className="self-start relative text-sm font-sans font-bold uppercase tracking-[0.1em] text-cyan-400 group/btn flex items-center gap-2">
                  Esettanulmány megtekintése
                  <span className="group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-cyan-400 group-hover/btn:w-full transition-all duration-500"></span>
                </Link>
              </motion.div>

            </div>
          );
        })}
      </div>

    </section>
  );
}