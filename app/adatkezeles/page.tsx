// app/adatkezeles/page.tsx
"use client";
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden bg-[#030508]">
      <Navbar />

      <section className="relative z-10 flex-grow pt-40 pb-32 px-6 max-w-4xl mx-auto w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 pb-10 border-b border-white/10"
        >
          <p className="text-cyan-500/80 font-sans font-medium tracking-[0.2em] uppercase text-xs mb-4 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-cyan-500/50"></span>
            Jogi Információk
          </p>
          <h1 className="font-space text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Adatkezelési <span className="text-white/40">Tájékoztató.</span>
          </h1>
          <p className="text-white/50 text-sm font-light">Utolsó frissítés: 2026. Június 14.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none font-light text-white/70 leading-relaxed"
        >
          <h2 className="text-white/90 font-space font-bold mt-10 mb-4">1. Bevezetés</h2>
          <p>
            A FreeLab (mint a THE GBR ökoszisztéma része) kiemelten fontosnak tartja ügyfelei és látogatói személyes adatainak védelmét. Jelen tájékoztató az Európai Unió Általános Adatvédelmi Rendeletének (GDPR) megfelelően készült.
          </p>

          <h2 className="text-white/90 font-space font-bold mt-10 mb-4">2. Kezelt adatok köre</h2>
          <p>
            Amikor kapcsolatba lép velünk a weboldalon található űrlapon keresztül, az alábbi adatokat gyűjtjük be:
          </p>
          <ul>
            <li>Név / Cégnév</li>
            <li>E-mail cím</li>
            <li>Telefonszám</li>
            <li>A projekt rövid leírása (amely esetenként személyes adatot is tartalmazhat)</li>
          </ul>

          <h2 className="text-white/90 font-space font-bold mt-10 mb-4">3. Az adatkezelés célja</h2>
          <p>
            A begyűjtött adatokat kizárólag a kapcsolatfelvétel, ajánlatadás és az esetleges projekt előkészítése céljából kezeljük. Adatait harmadik félnek nem adjuk ki, azokat szigorúan bizalmasan kezeljük a THE GBR belső, biztonságos rendszereiben.
          </p>

          <h2 className="text-white/90 font-space font-bold mt-10 mb-4">4. Analitika és Sütik (Cookies)</h2>
          <p>
            Rendszereink optimalizálása érdekében anonimizált analitikai szoftvereket használhatunk a weboldal forgalmának mérésére. Ezek az eszközök személyazonosításra nem alkalmas adatokat gyűjtenek.
          </p>

          <div className="mt-16 p-8 rounded-2xl bg-white/[0.02] border border-white/10 text-sm text-white/50">
            <p className="m-0">
              További jogi kérdések esetén kérjük, vegye fel a kapcsolatot a hivatalos adatvédelmi tisztviselőnkkel a <a href="mailto:privacy@thegbr.eu" className="text-cyan-400 hover:text-cyan-300">privacy@thegbr.eu</a> e-mail címen.
            </p>
          </div>
        </motion.div>

      </section>

      <Footer />
    </main>
  );
}