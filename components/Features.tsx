// components/Features.tsx
"use client";
import { motion } from 'framer-motion';

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative z-10" id="projektek">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center md:text-left"
      >
        <h2 className="font-space text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Intelligens rendszerek.
        </h2>
        <p className="text-white/50 text-lg font-light max-w-2xl">
          Az esztétika csak a felszín. Minden projektünk egy mélyen optimalizált, konverzióra épített digitális ökoszisztéma.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        
        {/* 1. Kártya */}
        <motion.div variants={itemVariants} className="md:col-span-2 relative overflow-hidden rounded-3xl bg-white/[0.03] border border-white/10 p-10 md:p-14 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-white/[0.05] transition-all duration-500 group">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/10 blur-[80px] rounded-full group-hover:bg-indigo-500/20 transition-all duration-700"></div>
          <div className="relative z-10 h-full flex flex-col justify-end min-h-[250px]">
            <h3 className="font-space text-3xl text-white font-bold mb-4">MilliSzekundumos <br/>Reakcióidő</h3>
            <p className="text-white/60 font-light text-lg leading-relaxed max-w-md">
              Az Edge hálózatok és a modern SSR technológia garantálja, hogy az oldalad betöltési ideje a múlté. 
            </p>
          </div>
        </motion.div>

        {/* 2. Kártya */}
        <motion.div variants={itemVariants} className="relative overflow-hidden rounded-3xl bg-white/[0.03] border border-white/10 p-10 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-white/[0.05] transition-all duration-500 group">
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-cyan-500/10 blur-[60px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-700"></div>
          <div className="relative z-10 h-full flex flex-col justify-end min-h-[250px]">
            <h3 className="font-space text-2xl text-white font-bold mb-4">Adatvezérelt<br/>UX Design</h3>
            <p className="text-white/60 font-light leading-relaxed">
              Döntéseinket nem megérzésekre, hanem valós felhasználói adatokra és hőtérképekre alapozzuk.
            </p>
          </div>
        </motion.div>

        {/* 3. Kártya (Széles) */}
        <motion.div variants={itemVariants} className="md:col-span-3 relative overflow-hidden rounded-3xl bg-gradient-to-r from-white/[0.05] to-transparent border border-white/10 p-10 md:p-14 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
             <h3 className="font-space text-2xl text-white font-bold mb-2">A THE GBR Standard</h3>
             <p className="text-white/60 font-light text-lg">
               Kódolási minőség, amely nem ismer kompromisszumot.
             </p>
          </div>
          <button className="px-8 py-3 bg-white text-black font-sans font-semibold rounded-full hover:scale-105 transition-transform duration-300">
            Technológiai Stack
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
}