// components/Ecosystem.tsx
"use client";
import { motion } from 'framer-motion';

export default function Ecosystem() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative z-10" id="rolunk">
      
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Bal oldal: Tipográfia és Tartalom */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col"
        >
          <p className="text-indigo-400/80 font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-indigo-500/50"></span>
            A Háttérország
          </p>
          
          <h2 className="font-space text-4xl md:text-6xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
            Két Brand. <br />
            <span className="text-white/40">Egy Szabvány.</span>
          </h2>
          
          <div className="space-y-6 text-white/60 font-light text-lg leading-relaxed mb-10">
            <p>
              A FreeLab nem a semmiből jött létre. Mi vagyunk a <strong className="text-white font-medium">THE GBR</strong> hivatalos szatellit laboratóriuma. Míg az anyacég a teljes körű digitális stratégiáért és a nagyméretű arculatépítésért felel, mi a nyers technológiára fókuszálunk.
            </p>
            <p>
              Célunk, hogy a legkifinomultabb Next.js és AI technológiákat alkalmazva olyan felületeket alkossunk, amelyek sebességben és konverzióban is verhetetlenek. Ugyanaz a prémium DNS, más fegyvernem.
            </p>
          </div>

          {/* JAVÍTOTT LINK ITT: thegbr.eu */}
          <a 
            href="https://thegbr.eu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="self-start px-8 py-4 bg-white/[0.03] border border-white/10 text-white font-sans font-semibold rounded-full backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3 group"
          >
            THE GBR Ökoszisztéma
            <span className="group-hover:translate-x-1 transition-transform duration-300">↗</span>
          </a>
        </motion.div>

        {/* Jobb oldal: Absztrakt üveg "reaktor" vizuál */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 relative aspect-square md:aspect-video lg:aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#030508] flex items-center justify-center group"
        >
          {/* Dinamikus Háttérfények */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-indigo-500/20 blur-[80px] rounded-full group-hover:scale-110 group-hover:bg-indigo-500/30 transition-all duration-700"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-cyan-500/20 blur-[60px] rounded-full group-hover:scale-110 group-hover:bg-cyan-500/30 transition-all duration-700 delay-100"></div>
          
          {/* Tejüveg Overlay */}
          <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-sm z-10"></div>

          {/* Központi Vizuális Elem */}
          <div className="relative z-20 flex flex-col items-center gap-6">
            <div className="w-24 h-24 rounded-full border border-white/20 bg-[#030508] flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.2)]">
              <span className="font-space font-bold text-2xl text-white tracking-widest">FL</span>
            </div>
            <div className="h-12 w-[1px] bg-gradient-to-b from-white/20 to-transparent"></div>
            <div className="font-space text-sm tracking-[0.3em] uppercase text-white/40">Szatellit</div>
          </div>
          
        </motion.div>

      </div>
    </section>
  );
}