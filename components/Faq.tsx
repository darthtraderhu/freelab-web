// components/Faq.tsx
"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Mi a különbség egy sablon weboldal és a FreeLab rendszerei között?",
    answer: "A hagyományos weboldalak (pl. WordPress) monolitikus rendszerek, amelyek lassan töltenek be és sebezhetőek. Mi a The GBR sztenderdjei alapján Headless architektúrát és Next.js-t használunk. A frontend és backend szétválasztásával ezredmásodperces betöltési időt, maximális SEO pontszámot és banki szintű biztonságot garantálunk."
  },
  {
    question: "Hogyan integráljátok a Mesterséges Intelligenciát az üzleti folyamatokba?",
    answer: "Nem csak 'chatbotokat' építünk. Nyelvi modelleket (LLM) és egyedi API-kat integrálunk mélyen a rendszerbe. Ez jelenthet automatizált ügyfélszolgálatot, prediktív adatelemzést az e-kereskedelemben, vagy dinamikusan, a felhasználó viselkedésére szabott UI/UX megoldásokat."
  },
  {
    question: "Miért elengedhetetlen a Server-Side Rendering (SSR) egy modern platformnál?",
    answer: "Az SSR (Szerveroldali renderelés) biztosítja, hogy a weboldal tartalma már a szerveren összeálljon, mielőtt a böngészőhöz ér. Ez drasztikusan javítja az első tartalomfestés (FCP) idejét, amit a Google algoritmusa kiemelten jutalmaz, így organikus forgalomnövekedést eredményez."
  },
  {
    question: "Hogyan zajlik a közös munka egy projekt során?",
    answer: "Agilis módszertannal dolgozunk. Az első lépés egy mélyreható technológiai audit és architektúra-tervezés. Ezt követi a UI/UX prototipizálás, majd a fejlesztés. Kéthetes sprintekben szállítunk, folyamatos transzparencia mellett, kompromisszummentes kódminőséggel (Clean Code)."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-32 px-6 max-w-4xl mx-auto relative z-10" id="filozofia">
      
      {/* Fejléc */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <p className="text-cyan-500/80 font-sans font-medium tracking-[0.2em] uppercase text-xs mb-4 flex items-center justify-center gap-2">
          <span className="w-4 h-[1px] bg-cyan-500/50"></span>
          Digitális Filozófia
          <span className="w-4 h-[1px] bg-cyan-500/50"></span>
        </p>
        <h2 className="font-space text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
          Kérdések és <span className="text-white/40">Válaszok.</span>
        </h2>
        <p className="text-white/50 font-light text-lg">
          Transzparencia és technológiai fölény. Amit a rendszereinkről tudnod kell.
        </p>
      </motion.div>

      {/* GYIK Lista */}
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`border transition-all duration-500 rounded-2xl overflow-hidden ${isActive ? 'bg-white/[0.05] border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.05)]' : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.03]'}`}
            >
              {/* Kérdés Gomb */}
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between px-8 py-6 text-left focus:outline-none"
              >
                <h3 className={`font-space text-xl md:text-2xl font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/80'}`}>
                  {faq.question}
                </h3>
                
                {/* Ikon */}
                <div className="ml-6 flex-shrink-0 relative w-6 h-6 flex items-center justify-center">
                  <span className={`absolute w-full h-[2px] bg-cyan-400 transition-transform duration-500 ${isActive ? 'rotate-180' : ''}`}></span>
                  <span className={`absolute w-[2px] h-full bg-cyan-400 transition-transform duration-500 ${isActive ? 'rotate-90 scale-0' : 'scale-100'}`}></span>
                </div>
              </button>

              {/* Lenyíló Válasz */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 pt-2">
                      <div className="w-12 h-[1px] bg-cyan-500/30 mb-6"></div>
                      <p className="text-white/60 font-light text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}