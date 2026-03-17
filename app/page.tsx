'use client';

import { Instagram, Send, Phone, Target, MessageSquare, Rocket, Award, ExternalLink, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('Ism'),
      family: formData.get('Familiya'),
      phone: formData.get('Telefon'),
      message: formData.get('Xabar'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert("Xabar muvaffaqiyatli yuborildi! ✅");
        (e.target as HTMLFormElement).reset();
      } else {
        alert("Xatolik yuz berdi.");
      }
    } catch (error) {
      alert("Tarmoq xatosi!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#050505] text-gray-100 font-sans selection:bg-purple-500/30 overflow-x-hidden">

      {/* 1. HERO SECTION - Telefonda markazlashgan, kompyuterda keng */}
      <section className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent -z-10" />

        <div className="relative mb-8 animate-in fade-in zoom-in duration-1000">
          <img
            src="/men.jpg"
            alt="Usarov Doniyor"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full shadow-[0_0_50px_rgba(168,85,247,0.15)] object-cover border-2 border-white/10 p-1"
          />
          <div className="absolute -bottom-1 -right-1 bg-purple-600 p-2 rounded-xl shadow-lg border-2 border-[#050505]">
            <Award size={18} className="text-white md:w-5 md:h-5" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black mb-6 tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent px-2">
          Usarov Doniyor
        </h1>

        <p className="text-gray-400 max-w-sm sm:max-w-xl text-base sm:text-lg md:text-xl mb-10 leading-relaxed px-4">
          SMM va Target bo'yicha professional strateg. <br className="hidden sm:block" />
          Biznesingizni raqamli dunyoda yetakchiga aylantiraman.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-xs sm:max-w-none px-6">
          <a href="#contact" className="w-full sm:w-auto bg-white text-black px-10 py-4 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg text-center">
            Loyihani boshlash
          </a>
          <a href="#projects" className="w-full sm:w-auto bg-white/5 border border-white/10 px-10 py-4 rounded-2xl font-bold hover:bg-white/10 active:scale-95 transition-all backdrop-blur-sm text-center">
            Loyihalarim
          </a>
        </div>
      </section>

      {/* 2. SERVICES SECTION - Mobile: 1 ustun, Desktop: 3 ustun */}
      <section id="services" className="py-20 md:py-32 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center md:text-left mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Xizmatlarim</h2>
            <div className="h-1.5 w-20 bg-purple-600 mx-auto md:mx-0 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Instagram SMM', icon: <MessageSquare />, desc: 'Vizual estetika va faol auditoriya bilan ishlash strategiyasi.' },
              { title: 'Professional Target', icon: <Target />, desc: 'Meta algoritmlari orqali eng aniq mijozlar oqimi.' },
              { title: 'Kontent Reja', icon: <Rocket />, desc: 'Sotuvchi matnlar va kreativ g\'oyalar majmuasi.' }
            ].map((item, i) => (
              <div key={i} className="group p-8 md:p-10 bg-gradient-to-br from-white/5 to-transparent rounded-[2.5rem] border border-white/10 hover:border-purple-500/40 transition-all duration-500">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-600/10 rounded-2xl flex items-center justify-center text-purple-500 mb-8 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm md:text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RESULTS - Mobile: 2x2 grid, Desktop: 1x4 grid */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 text-center">
            {[
              { val: '300+', label: 'Kreativlar' },
              { val: '1000+', label: 'Mijozlar' },
              { val: '3000+', label: 'Auditoriya' },
              { val: '2+', label: 'Yillik tajriba' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <h3 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tighter">{item.val}</h3>
                <p className="text-purple-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROJECTS SECTION */}
      <section id="projects" className="py-20 md:py-32 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center md:text-left">Loyihalarim</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: 'sardor-energy', link: 'https://instagram.com/sardor_energy', desc: '1000 dan ortiq real mijozlar oqimi yaratildi.' },
            { name: 'sherdor.baraka', link: 'https://instagram.com/sherdor.baraka', desc: 'Brend vizuali va kreativ kontent strategiyasi.' }
          ].map((project, i) => (
            <div key={i} className="group relative bg-white/5 rounded-[2.5rem] p-8 md:p-12 border border-white/10 hover:border-purple-500/30 transition-all duration-500 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.name}</h3>
                <p className="text-gray-400 text-base md:text-xl mb-10 leading-relaxed">{project.desc}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                className="inline-flex items-center gap-2 text-purple-400 font-black hover:text-purple-300 transition-all text-sm md:text-base"
              >
                KEYSNI KO'RISH <ExternalLink size={18} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CONTACT FORM - Mobileda chekkaga yopishmasligi uchun px-4 */}
      <section id="contact" className="py-20 md:py-32 px-4 relative">
        <div className="max-w-xl mx-auto bg-white/[0.03] p-8 md:p-14 rounded-[3rem] border border-white/10 backdrop-blur-md">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Bog'lanish</h2>
            <p className="text-gray-500">Sizning biznesingiz — mening mas'uliyatim</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="Ism" placeholder="Ism" required className="w-full bg-black/40 border border-white/10 p-5 rounded-2xl focus:border-purple-500 outline-none transition-all placeholder:text-gray-600" />
              <input name="Familiya" placeholder="Familiya" required className="w-full bg-black/40 border border-white/10 p-5 rounded-2xl focus:border-purple-500 outline-none transition-all placeholder:text-gray-600" />
            </div>
            <input name="Telefon" placeholder="Telefon (masalan: +998...)" required className="w-full bg-black/40 border border-white/10 p-5 rounded-2xl focus:border-purple-500 outline-none transition-all placeholder:text-gray-600" />
            <textarea name="Xabar" placeholder="Loyiha haqida..." rows={4} required className="w-full bg-black/40 border border-white/10 p-5 rounded-2xl focus:border-purple-500 outline-none transition-all placeholder:text-gray-600" />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black p-5 rounded-2xl font-black text-lg hover:bg-gray-200 active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? "Yuborilmoqda..." : <>YUBORISH <ChevronRight size={20} /></>}
            </button>
          </form>
        </div>
      </section>

      {/* 6. FOOTER - Mobileda qulay bosiladigan tugmalar */}
      <footer className="py-16 md:py-24 border-t border-white/5 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex flex-wrap justify-center gap-8 md:gap-20 mb-16">
            {[
              { icon: <Instagram size={32} />, link: 'https://instagram.com/usarov_doniyor3', label: 'Instagram', color: 'hover:text-pink-500' },
              { icon: <Send size={32} />, link: 'https://t.me/DoniCoder', label: 'Telegram', color: 'hover:text-blue-500' },
              { icon: <Phone size={32} />, link: 'tel:+998904456233', label: 'Qo\'ng\'iroq', color: 'hover:text-green-500' }
            ].map((social, i) => (
              <a key={i} href={social.link} target="_blank" className={`group flex flex-col items-center gap-3 transition-all ${social.color}`}>
                <div className="p-4 rounded-[1.5rem] bg-white/5 group-hover:bg-current group-hover:bg-opacity-10 transition-all">
                  {social.icon}
                </div>
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">{social.label}</span>
              </a>
            ))}
          </div>
          <p className="text-gray-700 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} USAROV DONIYOR • DIGITAL STRATEGIST
          </p>
        </div>
      </footer>
    </main>
  );
}