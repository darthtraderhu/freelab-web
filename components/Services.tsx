// components/Services.tsx
"use client";
import { motion } from 'framer-motion';

const services = [
  {
    num: "01",
    title: "Vállalati Webalkalmazások",
    description: "Kiszámíthatatlan terhelésre skálázható, szerveroldalon renderelt (SSR) architektúrák. Nem egyszerű weboldalakat építünk, hanem masszív, biztonságos digitális platformokat.",
    tags: ["Next.js", "React", "TypeScript", "Vercel"]
  },
  {
    num: "02",
    title: "AI & Rendszerintegráció",
    description: "Nyelvi modellek (LLM) és gépi tanulási algoritmusok zökkenőmentes implementálása a meglévő üzleti folyamatokba. Automatizált adatelemzés és intelligens interfészek.",
    tags: ["OpenAI API", "Python", "Automatizáció", "Adatvezérlés"]
  },
  {
    num: "03",
    title: "Headless E-kereskedelem",
    description: "A frontend és a backend szétválasztásával olyan webshopokat alkotunk, amelyek ezredmásodpercek alatt töltenek be. Maximális konverzió, kompromisszumok nélkül.",
    tags: ["Shopify Plus", "Stripe", "Microservices", "API"]
  },
  {
    num: "04",
    title: "Prémium UI & Motion Design",
    description: "Díjnyertes vizuális rendszerek, ahol minden animáció és térköz a felhasználói figyelmet irányítja. A márkaidentitás letisztult, digitális manifesztációja.",
    tags: ["Figma", "Framer Motion", "Tailwind CSS", "Glassmorphism"]
  }
];

export default function Services() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative z-10" id="szolgaltatasok">
      
      {/* Szekció Fejléc */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8"
      >
        <div>
          <p className="text-cyan-500/80 font-sans font-medium tracking-[0.2em] uppercase text-xs mb-4 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-cyan-500/50"></span>
            Képességek
          </p>
          <h2 className="font-space text-4xl md:text-6xl font-bold text-white tracking-tight">
            Digitális <br className="hidden md:block" />
            <span className="text-white/40">Infrastruktúra.</span>
          </h2>
        </div>
        <p className="text-white/50 max-w-md font-light text-lg pb-2">
          Az innováció nem a funkciók halmozását jelenti, hanem a tökéletes egyensúly megteremtését a design és a teljesítmény között.
        </p>
      </motion.div>

      {/* Szolgáltatások Listája */}
      <div className="flex flex-col border-t border-white/10">
        {services.map((service, index) => (
          <motion.div 
            key={service.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative flex flex-col md:flex-row items-start md:items-center py-12 md:py-16 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8"
          >
            {/* Hover Háttérfény */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[30%] h-full bg-cyan-500/0 group-hover:bg-cyan-500/5 blur-[80px] rounded-full transition-all duration-700 pointer-events-none"></div>
            
            {/* Sorszám */}
            <div className="w-full md:w-1/6 mb-6 md:mb-0">
              <span className="font-space text-5xl font-light text-white/20 group-hover:text-cyan-400/50 transition-colors duration-500">
                {service.num}
              </span>
            </div>
            
            {/* Cím és Leírás */}
            <div className="w-full md:w-3/6 pr-0 md:pr-12 mb-6 md:mb-0 relative z-10">
              <h3 className="font-space text-3xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">
                {service.title}
              </h3>
              <p className="text-white/50 font-light leading-relaxed">
                {service.description}
              </p>
            </div>
            
            {/* Címkék (Techek) */}
            <div className="w-full md:w-2/6 flex flex-wrap gap-2 md:justify-end relative z-10">
              {service.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-4 py-2 text-xs font-sans font-medium text-white/40 border border-white/10 rounded-full bg-white/[0.02] group-hover:border-white/20 group-hover:text-white/80 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}