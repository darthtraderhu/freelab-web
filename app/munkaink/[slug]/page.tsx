// app/munkaink/[slug]/page.tsx
"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

// A kamu adatbázis
const projectsDb: Record<string, any> = {
  "aura-fintech": {
    slug: "aura-fintech",
    title: "Aura Fintech",
    category: "Webalkalmazás & UI/UX",
    client: "Aura Finance SA (Svájc)",
    timeline: "3 Hónap",
    description: "Teljes digitális transzformáció egy svájci fintech startup számára. Valós idejű adatáramlás, letisztult adatábrázolás és 0 várakozási idő.",
    challenge: "Az ügyfél egy elavult, lassú monolitikus rendszerrel dolgozott, ami másodperces késéseket okozott a tranzakciók megjelenítésében. A cél egy banki szintű biztonsággal rendelkező, de azonnal reagáló frontend felépítése volt.",
    solution: "A teljes architektúrát Next.js alapokra helyeztük, Vercel Edge hálózatot használva. A UI-hoz egyedi, Glassmorphism alapú Tailwind design rendszert terveztünk, Framer Motion-nel hajtott mikro-animációkkal.",
    results: [
      { label: "Betöltési idő", value: "-65%" },
      { label: "Konverzió", value: "+32%" },
      { label: "Felhasználói élmény", value: "10/10" }
    ],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel Edge"],
    gradient: "from-blue-900/40 to-black"
  },
  "lumina-commerce": {
    slug: "lumina-commerce",
    title: "Lumina Commerce",
    category: "Headless Webshop",
    client: "Lumina Brands",
    timeline: "4 Hónap",
    description: "Extrém sebességre optimalizált e-kereskedelmi platform. A betöltési idő 400ms alá csökkentésével 45%-os konverzió-növekedést értünk el.",
    challenge: "A Shopify monolitikus sablonja már nem bírta a nagy forgalmú kampányokat, a betöltési sebesség miatt a kosárelhagyási arány kritikus szintet ért el.",
    solution: "Leválasztottuk a frontendet (Headless), és egy Next.js alapú, statikusan generált, de valós időben frissülő egyedi webshopot építettünk a Shopify Plus API-jára támaszkodva.",
    results: [
      { label: "Kosárelhagyás", value: "-40%" },
      { label: "Betöltés", value: "< 400ms" },
      { label: "Bevételnövekedés", value: "+45%" }
    ],
    tech: ["Shopify Plus API", "Next.js", "Stripe", "GraphQL"],
    gradient: "from-cyan-900/40 to-black"
  },
  "nexus-ai-core": {
    slug: "nexus-ai-core",
    title: "Nexus AI Core",
    category: "SaaS Platform",
    client: "Nexus Data Labs",
    timeline: "6 Hónap",
    description: "Mesterséges intelligenciára épülő B2B adatelemző szoftver egyedi interfésze. Komplex adathalmazok, minimalista, fókuszált megjelenés.",
    challenge: "Több millió adatsor vizuális értelmezése egyetlen dashboardon úgy, hogy a felhasználó ne érezze magát túlterhelve a számoktól.",
    solution: "Egyedi WebGL komponenseket és Python API-t integráltunk a React alá, hogy a komplex adathalmazokat letisztult, hardveresen gyorsított, minimalista grafikonokká alakítsuk.",
    results: [
      { label: "Adatfeldolgozás", value: "Valós idejű" },
      { label: "Adatsorok", value: "10 Millió+" },
      { label: "Render", value: "60 FPS" }
    ],
    tech: ["React", "Python API", "WebGL", "Tailwind CSS"],
    gradient: "from-indigo-900/40 to-black"
  }
};

export default function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const project = projectsDb[resolvedParams.slug];

  if (!project) {
    notFound();
  }

  // A gépelendő kódsorok tömbje
  const codeLines = [
    <span key="1"><span className="text-indigo-400">import</span> {'{'} <span className="text-white/90">Core, Architect</span> {'}'} <span className="text-indigo-400">from</span> <span className="text-cyan-300">'@freelab/matrix'</span>;</span>,
    <span key="2"><span className="text-indigo-400">import</span> {'{'} <span className="text-white/90">DeployEngine</span> {'}'} <span className="text-indigo-400">from</span> <span className="text-cyan-300">'@thegbr/systems'</span>;</span>,
    <span key="3"> </span>,
    <span key="4"><span className="text-indigo-400">const</span> <span className="text-white/90">project</span> = <span className="text-indigo-400">new</span> <span className="text-cyan-400">Architect</span>({'{'})</span>,
    <span key="5" className="pl-6"><span className="text-white/70">name:</span> <span className="text-cyan-300">'{project.title}'</span>,</span>,
    <span key="6" className="pl-6"><span className="text-white/70">performance:</span> <span className="text-cyan-300">'maximum'</span>,</span>,
    <span key="7" className="pl-6"><span className="text-white/70">latency:</span> <span className="text-cyan-300">'0ms'</span>,</span>,
    <span key="8">{'}'});</span>,
    <span key="9"> </span>,
    <span key="10"><span className="text-indigo-400">export async function</span> <span className="text-cyan-400">initProtocol</span>() {'{'}</span>,
    <span key="11" className="pl-6"><span className="text-indigo-400">await</span> project.<span className="text-cyan-400">compile</span>(DeployEngine);</span>,
    <span key="12" className="pl-6 text-white/30">{'// Bypassing traditional framework limits...'}</span>,
    <span key="13" className="pl-6"><span className="text-indigo-400">return</span> project.<span className="text-cyan-400">launchToEdge</span>();</span>,
    <span key="14">{'}'}</span>
  ];

  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden bg-[#030508]">
      <Navbar />

      {/* Dinamikus Projekt Gradiens a háttérben */}
      <div className={`fixed top-0 left-0 w-full h-[70vh] bg-gradient-to-b ${project.gradient} opacity-50 z-0 pointer-events-none`}></div>
      <div className="fixed top-0 left-0 w-full h-[70vh] bg-gradient-to-b from-transparent to-[#030508] z-0 pointer-events-none"></div>

      <article className="relative z-10 flex-grow pt-40 pb-20 px-6 max-w-5xl mx-auto w-full">
        
        {/* Vissza gomb */}
        <Link href="/#munkaink" className="inline-flex items-center gap-2 text-white/50 hover:text-cyan-400 font-sans text-xs font-bold uppercase tracking-[0.2em] transition-colors mb-16 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Vissza a portfólióhoz
        </Link>

        {/* Hero Rész */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <p className="text-cyan-400/80 font-sans font-medium tracking-[0.2em] uppercase text-xs mb-6">
            {project.category}
          </p>
          <h1 className="font-space text-5xl md:text-[5rem] font-bold text-white tracking-tight leading-[1] mb-8">
            {project.title}
          </h1>
          <p className="text-white/60 text-xl font-light leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </motion.div>

        {/* Projekt Meta Adatok */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-white/10 mb-20"
        >
          <div>
            <h4 className="text-white/40 font-sans text-xs uppercase tracking-[0.2em] mb-2">Ügyfél</h4>
            <p className="text-white font-medium">{project.client}</p>
          </div>
          <div>
            <h4 className="text-white/40 font-sans text-xs uppercase tracking-[0.2em] mb-2">Időtartam</h4>
            <p className="text-white font-medium">{project.timeline}</p>
          </div>
          <div className="col-span-2">
            <h4 className="text-white/40 font-sans text-xs uppercase tracking-[0.2em] mb-2">Technológia</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t: string) => (
                <span key={t} className="text-white/80 font-medium text-sm">{t} 
                  <span className="text-white/20 ml-2 last:hidden">•</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ÚJ: ÉLŐ GÉPELŐ ANIMÁCIÓ - Terminál Vizuál */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full aspect-[4/3] md:aspect-video rounded-[2rem] overflow-hidden relative border border-white/10 bg-[#020305] mb-24 flex flex-col shadow-[0_0_50px_rgba(34,211,238,0.05)]"
        >
          {/* Tejüveg Overlay & Fények */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 pointer-events-none`}></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] pointer-events-none"></div>

          {/* Terminál Fejléc */}
          <div className="relative z-10 w-full h-14 border-b border-white/5 bg-white/[0.02] flex items-center px-6 gap-3 backdrop-blur-md">
            <div className="w-3 h-3 rounded-full bg-white/20"></div>
            <div className="w-3 h-3 rounded-full bg-white/20"></div>
            <div className="w-3 h-3 rounded-full bg-white/20"></div>
            <div className="ml-4 font-mono text-[11px] text-white/40 tracking-[0.1em]">freelab / {project.slug}.tsx</div>
          </div>

          {/* Terminál Test - A Gépelős animációval */}
          <div className="relative z-10 flex-grow p-6 md:p-10 font-mono text-xs md:text-sm lg:text-base leading-relaxed overflow-x-auto flex flex-col">
            <div className="space-y-1 text-white/50 w-max min-w-full">
              {codeLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ clipPath: "inset(0 100% 0 0)" }} // Teljesen maszkolva (láthatatlan)
                  whileInView={{ clipPath: "inset(0 0% 0 0)" }} // Maszk lekerül (teljesen látható)
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.4, // Gépelési sebesség soronként
                    delay: 0.5 + (index * 0.15), // Késleltetés: az előző sor után indul
                    ease: "linear" 
                  }}
                  className="block"
                >
                  {line}
                </motion.div>
              ))}
              
              {/* Zöld success üzenet és villogó kurzor a legvégén */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + (codeLines.length * 0.15) + 0.3 }}
                className="flex items-center gap-2 pt-6"
              >
                <span className="text-green-400">✓ Systems Online.</span>
                <motion.div 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-2.5 h-5 bg-cyan-400"
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Kihívás és Megoldás */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-space text-3xl font-bold text-white mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-cyan-500"></span> A Kihívás
            </h3>
            <p className="text-white/60 font-light text-lg leading-relaxed">
              {project.challenge}
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-space text-3xl font-bold text-white mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-indigo-500"></span> A Megoldás
            </h3>
            <p className="text-white/60 font-light text-lg leading-relaxed">
              {project.solution}
            </p>
          </motion.div>
        </div>

        {/* Metrikák / Eredmények */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white/[0.02] border border-white/10 rounded-3xl p-12 backdrop-blur-sm"
        >
          <h3 className="text-center font-sans font-bold uppercase tracking-[0.2em] text-white/40 text-sm mb-12">Az Eredmény</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {project.results.map((result: any, i: number) => (
              <div key={i}>
                <div className="font-space text-5xl font-bold text-white mb-2">{result.value}</div>
                <div className="text-cyan-400/80 font-sans text-xs uppercase tracking-widest">{result.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </article>

      <Footer />
    </main>
  );
}