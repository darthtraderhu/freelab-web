// app/lab-notes/[slug]/page.tsx
"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

// A kamu cikk adatbázis (ugyanaz, mint a listázóban, csak kap egy "content" mezőt)
const labNotesDb: Record<string, any> = {
  "nextjs-15-es-a-jovo": {
    title: "Next.js 15: A szerveroldali renderelés új dimenziója",
    category: "Architektúra",
    readTime: "5 min read",
    date: "2026. Június 10.",
    content: "Az iparág rohamosan változik. Ami két éve még 'villámgyorsnak' számított, ma már elavult monolit. A Next.js legújabb iterációjában a Turbopack és az optimalizált Server Components segítségével olyan architektúrákat építünk a THE GBR laborjában, amik a böngészők fizikai határait feszegetik. Ebben a cikkben bemutatjuk, hogyan csökkentettük egy e-kereskedelmi platform TTFB (Time to First Byte) értékét 40ms alá."
  },
  "ai-api-integracio": {
    title: "Túl a ChatGPT-n: LLM modellek natív integrációja",
    category: "Mesterséges Intelligencia",
    readTime: "8 min read",
    date: "2026. Május 22.",
    content: "Mindenki 'AI transzformációról' beszél, de a legtöbb cég kimerül egy sablonos chatbot weboldalra illesztésében. A valódi érték ott kezdődik, amikor az OpenAI vagy az Anthropic API-ját mélyen integráljuk az üzleti logikába. Prediktív készletkezelés, dinamikusan generálódó UI a felhasználó viselkedése alapján, és automatizált adatelemzés. Megmutatjuk a Python alapú middleware architektúránkat."
  },
  "headless-shopify": {
    title: "Headless Shopify: Amikor a konverzió a sebességen múlik",
    category: "E-kereskedelem",
    readTime: "6 min read",
    date: "2026. Április 14.",
    content: "A Shopify Plus a világ legjobb e-kereskedelmi motorja, de a gyári Liquid sablonrendszer hatalmas forgalomnál belassulhat. A megoldás a Headless architektúra: a Shopifyt csak backend (adatbázis és fizetés) szinten használjuk, míg a frontendet Next.js-ben és Vercel Edge hálózaton szolgáljuk ki. Eredmény? Zéró kompromisszum a designban és 45%-os kosárelhagyás-csökkenés."
  }
};

export default function LabNoteArticle({ params }: { params: Promise<{ slug: string }> }) {
  // A Promise kicsomagolása a React.use() segítségével
  const resolvedParams = use(params);
  const note = labNotesDb[resolvedParams.slug];

  if (!note) {
    notFound();
  }

  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden bg-[#030508]">
      <Navbar />

      {/* Finom olvasási ambient fény */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[50vw] h-[30vh] bg-cyan-900/10 blur-[120px] pointer-events-none z-0"></div>

      <article className="relative z-10 flex-grow pt-40 pb-32 px-6 max-w-3xl mx-auto w-full">
        
        {/* Vissza a listához */}
        <Link href="/lab-notes" className="inline-flex items-center gap-2 text-white/50 hover:text-cyan-400 font-sans text-xs font-bold uppercase tracking-[0.2em] transition-colors mb-16 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Összes bejegyzés
        </Link>

        {/* Cikk Fejléc */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 pb-12 border-b border-white/10"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-sans font-bold uppercase tracking-[0.15em] text-cyan-400 bg-cyan-400/10 px-3 py-1.5 rounded-full">
              {note.category}
            </span>
            <span className="text-white/40 font-mono text-xs">
              {note.readTime}
            </span>
          </div>

          <h1 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-8">
            {note.title}
          </h1>

          <div className="flex items-center justify-between text-white/40 font-sans text-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-white">FL</div>
              <span>FreeLab Research Team</span>
            </div>
            <span>{note.date}</span>
          </div>
        </motion.div>

        {/* Cikk Tartalma */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none font-light text-white/70 leading-relaxed"
        >
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
            {note.content}
          </p>
          
          <p>
            Itt következne a cikk további kifejtése. Kódblokkok, diagramok, és mélyebb szakmai elemzések a témában. A THE GBR szatellit laborjaként a legfőbb célunk, hogy a piac ne csak egy fejlesztőcsapatot lásson bennünk, hanem a technológiai szabványok diktálóit.
          </p>

          <div className="my-12 p-8 rounded-2xl bg-white/[0.02] border border-white/10 border-l-2 border-l-cyan-400">
            <p className="text-white/80 font-medium m-0 italic">
              "Az innováció nem a funkciók halmozását jelenti, hanem a tökéletes egyensúly megteremtését a design és a teljesítmény között."
            </p>
          </div>

          <p>
            Ha kíváncsi vagy, hogyan tudjuk ezt az architektúrát a te üzletedre is ráhúzni, vedd fel velünk a kapcsolatot, és kezdjük el a projektet.
          </p>
        </motion.div>

        {/* CTA a cikk végén */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 p-10 rounded-3xl bg-gradient-to-br from-indigo-900/20 to-cyan-900/10 border border-white/10 text-center"
        >
          <h3 className="font-space text-3xl font-bold text-white mb-4">Inspirált a cikk?</h3>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Válts szintet a digitális jelenlétedben, és dolgozzunk együtt a jövő architektúráján.
          </p>
          <Link href="/kapcsolat" className="inline-block px-8 py-4 bg-white text-black font-sans font-bold uppercase tracking-[0.1em] text-sm rounded-full shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:scale-105 transition-all">
            Kezdjünk egy projektet
          </Link>
        </motion.div>

      </article>

      <Footer />
    </main>
  );
}