// app/kapcsolat/page.tsx
"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link'; // <--- ÚJ IMPORT ITT!
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Kapcsolat() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: false
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Gépeléskor eltüntetjük a hibajelzést az adott mezőnél
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    // Validáció
    if (!formData.name.trim()) newErrors.name = "A név / cég megadása kötelező.";
    if (!formData.email.trim()) newErrors.email = "Az e-mail cím megadása kötelező.";
    if (!formData.phone.trim()) newErrors.phone = "A telefonszám megadása kötelező.";
    if (!formData.message.trim()) newErrors.message = "A projekt leírása kötelező.";
    if (!formData.privacy) newErrors.privacy = "Az adatkezelési tájékoztató elfogadása kötelező.";

    setErrors(newErrors);

    // Ha nincs hiba, mehet a "küldés"
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      // IDE JÖN MAJD AZ API HÍVÁS (pl. Nodemailer, Resend, vagy form backend)
      
      // Sikeres küldés utáni vizuális visszajelzés (5 másodperc múlva alaphelyzet)
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '', privacy: false });
      }, 5000);
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden bg-[#030508]">
      <Navbar />

      {/* Ambient Fények */}
      <div className="fixed top-0 right-0 w-[40vw] h-[40vw] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-0 left-0 w-[50vw] h-[50vw] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <section className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 pt-32 pb-20 max-w-4xl mx-auto w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 w-full"
        >
          <h1 className="font-space text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Kezdjük el a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Közös Munkát.</span>
          </h1>
          <p className="text-white/50 text-lg font-light">
            Oszd meg velünk a víziódat, és 24 órán belül felvesszük veled a kapcsolatot.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] relative overflow-hidden"
          onSubmit={handleSubmit}
        >
          {/* Sikeres küldés overlay */}
          {isSubmitted && (
            <div className="absolute inset-0 bg-[#030508]/90 backdrop-blur-md z-20 flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-cyan-400 text-3xl">✓</span>
              </div>
              <h3 className="font-space text-3xl font-bold text-white mb-2">Üzenet Elküldve</h3>
              <p className="text-white/60 font-light">Hamarosan jelentkezünk a megadott elérhetőségeken!</p>
            </div>
          )}

          {/* 1. Sor: Név (Teljes szélesség) */}
          <div className="mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-sans font-medium uppercase tracking-[0.1em] text-white/50 pl-2">Név / Cég</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-[#030508]/50 border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-cyan-500/50'} rounded-xl px-5 py-4 text-white focus:outline-none focus:bg-white/[0.05] transition-all`} 
                placeholder="John Doe" 
              />
              {errors.name && <span className="text-red-400/90 text-xs pl-2 font-medium">{errors.name}</span>}
            </div>
          </div>

          {/* 2. Sor: E-mail és Telefon */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-sans font-medium uppercase tracking-[0.1em] text-white/50 pl-2">E-mail Cím</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-[#030508]/50 border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-cyan-500/50'} rounded-xl px-5 py-4 text-white focus:outline-none focus:bg-white/[0.05] transition-all`} 
                placeholder="john@company.com" 
              />
              {errors.email && <span className="text-red-400/90 text-xs pl-2 font-medium">{errors.email}</span>}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-sans font-medium uppercase tracking-[0.1em] text-white/50 pl-2">Telefonszám</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full bg-[#030508]/50 border ${errors.phone ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-cyan-500/50'} rounded-xl px-5 py-4 text-white focus:outline-none focus:bg-white/[0.05] transition-all`} 
                placeholder="+36 30 123 4567" 
              />
              {errors.phone && <span className="text-red-400/90 text-xs pl-2 font-medium">{errors.phone}</span>}
            </div>
          </div>

          {/* 3. Sor: Üzenet */}
          <div className="flex flex-col gap-2 mb-8">
            <label className="text-xs font-sans font-medium uppercase tracking-[0.1em] text-white/50 pl-2">Projekt leírása</label>
            <textarea 
              rows={5} 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full bg-[#030508]/50 border ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-cyan-500/50'} rounded-xl px-5 py-4 text-white focus:outline-none focus:bg-white/[0.05] transition-all resize-none`} 
              placeholder="Röviden a célokról, funkciókról és az ütemtervről..."
            ></textarea>
            {errors.message && <span className="text-red-400/90 text-xs pl-2 font-medium">{errors.message}</span>}
          </div>

          {/* Adatkezelési Checkbox */}
          <div className="flex items-start gap-3 mb-10 pl-2">
            <div className="pt-1">
              <input 
                type="checkbox" 
                id="privacy" 
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                className="w-4 h-4 accent-cyan-500 bg-[#030508]/50 border-white/10 rounded cursor-pointer" 
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="privacy" className="text-sm font-light text-white/60 cursor-pointer select-none">
                Elolvastam és elfogadom az <Link href="/adatkezeles" className="text-cyan-400 hover:text-cyan-300 transition-colors underline decoration-cyan-400/30 underline-offset-2" target="_blank">Adatkezelési tájékoztatót</Link>.
              </label>
              {errors.privacy && <span className="text-red-400/90 text-xs mt-1 font-medium">{errors.privacy}</span>}
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-5 bg-white text-black font-sans font-bold uppercase tracking-[0.1em] text-sm rounded-xl hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300"
          >
            Üzenet Küldése
          </button>
        </motion.form>

      </section>

      <Footer />
    </main>
  );
}