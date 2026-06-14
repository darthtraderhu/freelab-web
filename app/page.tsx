// app/page.tsx
"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Features from '../components/Features';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import AiArchitect from '../components/AiArchitect'; // <--- ÚJ INTEGRÁCIÓ: AI Tervező Terminál
import Ecosystem from '../components/Ecosystem';
import LabNotesPreview from '../components/LabNotesPreview';
import Faq from '../components/Faq';
import Footer from '../components/Footer';

export default function Home() {
  return (
    // BUMM! Itt a javítás: overflow-hidden helyett overflow-x-hidden lett!
    <main className="relative min-h-screen flex flex-col overflow-x-hidden bg-[#030508]">
      
      <Navbar />

      {/* Prémium Ambient Világítás a háttérben */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none z-0 animate-ambient"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none z-0 animate-ambient" style={{ animationDelay: '3s' }}></div>

      {/* Hero Szekció */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto pt-20">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 px-5 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md flex items-center gap-3"
        >
          <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse"></div>
          <p className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-white/80">THE GBR Szatellit Labor</p>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-space text-6xl md:text-[7.5rem] font-bold tracking-tight text-white leading-[0.9] mb-8"
        >
          Digitális <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Evolúció.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/60 max-w-2xl font-light leading-relaxed mb-14"
        >
          Precíziós tervezés és kompromisszummentes teljesítmény. Nem követjük az iparági standardokat, hanem mi írjuk azokat.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto z-20"
        >
          <Link href="#munkaink" className="w-full sm:w-auto px-10 py-4 bg-white text-black font-sans font-semibold rounded-full shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] hover:scale-105 transition-all duration-300 text-center">
            Referenciák
          </Link>
          <Link href="/kapcsolat" className="w-full sm:w-auto px-10 py-4 bg-white/[0.05] border border-white/10 text-white font-sans font-medium rounded-full backdrop-blur-md hover:bg-white/10 transition-all duration-300 text-center">
            Kapcsolatfelvétel
          </Link>
        </motion.div>
      </section>

      {/* Glassmorphism Bento Grid Szekció */}
      <Features />

      {/* Szolgáltatások / Képességek Listája */}
      <Services />

      {/* Portfólió Szekció a kőkemény aszimmetrikus kártyákkal */}
      <Portfolio />

      {/* Élő, OpenAI-meghajtású Architektúra Tervező Terminál */}
      <AiArchitect />

      {/* Rólunk / Az Ökoszisztéma Szekció */}
      <Ecosystem />

      {/* Lab Notes Előnézet / Trailer Szekció a főoldalon */}
      <LabNotesPreview />

      {/* SEO / AEO optimalizált Filozófia és GYIK Szekció */}
      <Faq />

      {/* Spacer a Footer előtt */}
      <div className="h-32 w-full"></div>

      {/* High-End Footer */}
      <Footer />

    </main>
  );
}