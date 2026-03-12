export default function Home() {
  return (
    <main className="bg-gray-900 text-gray-100 font-sans">

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-gray-800 to-gray-900">
        <img
          src="/men.jpg"
          alt=""
          className="w-48 h-48 md:w-56 md:h-56 rounded-full shadow-2xl mb-6 object-cover border-4 border-gray-700"
        />

        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Usarov Doniyor
        </h1>

        <p className="text-gray-400 max-w-xl text-lg mb-8">
          SMM va Target mutaxassisi.
        </p>

        <a
          href="#contact"
          className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          Bog‘lanish
        </a>
      </section>

      {/* ABOUT */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">Men haqimda</h2>
        <p className="text-gray-300 leading-8">
          Men Usarov Doniyor, SMM va Target mutaxassisiman. Instagram orqali ko‘plab bizneslarni rivojlantirdim, auditoriyasini va sotuvini oshirdim .
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-400">Xizmatlarim</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-900 rounded-2xl hover:shadow-xl transition border border-gray-700">
              <h3 className="text-xl font-semibold mb-3">Instagram SMM</h3>
              <p className="text-gray-300">Biznes sahifalarni professional yuritish va rivojlantirish.</p>
            </div>
            <div className="p-8 bg-gray-900 rounded-2xl hover:shadow-xl transition border border-gray-700">
              <h3 className="text-xl font-semibold mb-3">Target reklama</h3>
              <p className="text-gray-300">Meta reklama orqali yangi mijozlar jalb qilish.</p>
            </div>
            <div className="p-8 bg-gray-900 rounded-2xl hover:shadow-xl transition border border-gray-700">
              <h3 className="text-xl font-semibold mb-3">Kontent strategiya</h3>
              <p className="text-gray-300">Brend uchun strategik kontent reja yaratish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-400">Mening Loyihalarim</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-2xl hover:shadow-xl transition border border-gray-700">
            <h3 className="text-xl font-bold mb-2">Kreativlarim</h3>
            <p className="text-gray-300">Instagramda sherdor.baraka Akkauntidagi kreativlar ustida ishlaganman.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl hover:shadow-xl transition border border-gray-700">
            <h3 className="text-xl font-bold mb-2">Mijozlar oqimi</h3>
            <p className="text-gray-300">Instagramda sardor-energy Akkauntiga 1000+ mijoz oqimini yaratdim.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl hover:shadow-xl transition border border-gray-700">
            <h3 className="text-xl font-bold mb-2">Portfolio</h3>
            <p className="text-gray-300">Shaxsiy portfolio web saytimni yasadim.</p>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-400">Natijalar</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-extrabold">300+</h3>
              <p className="text-gray-400">Kreativlar</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold">3ta</h3>
              <p className="text-gray-400">Bizneslar</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold">3000+</h3>
              <p className="text-gray-400">Auditoriya</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold">2+</h3>
              <p className="text-gray-400">Yillik tajriba</p>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-400">Sertifikatlar</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <img src="/001.jpg" alt="Sertifikat 1" className="rounded-xl hover:scale-105 transition"/>
          <img src="/002.jpg" alt="Sertifikat 2" className="rounded-xl hover:scale-105 transition"/>
        </div>
      </section>

      {/* TRAVEL */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-400">Maqsadimdagi Sayohatlar</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?crop=entropy&fit=crop&w=400&h=300" alt="Sayohat 1" className="rounded-xl hover:scale-105 transition"/>
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?crop=entropy&fit=crop&w=400&h=300" alt="Sayohat 2" className="rounded-xl hover:scale-105 transition"/>
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&fit=crop&w=400&h=300" alt="Sayohat 3" className="rounded-xl hover:scale-105 transition"/>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-gray-800">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-purple-400">Bog‘lanish</h2>
          <form className="flex flex-col gap-4">
            <input placeholder="Ism" className="border border-gray-700 p-4 rounded-lg bg-gray-900 text-gray-100" />
            <input placeholder="Familiya" className="border border-gray-700 p-4 rounded-lg bg-gray-900 text-gray-100" />
            <input placeholder="Telefon" className="border border-gray-700 p-4 rounded-lg bg-gray-900 text-gray-100" />
            <textarea placeholder="Xabar" rows={5} className="border border-gray-700 p-4 rounded-lg bg-gray-900 text-gray-100" />
            <button className="bg-purple-600 text-white p-4 rounded-lg font-semibold hover:bg-purple-700 transition">
              Yuborish
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center bg-gray-900">
        <h3 className="text-lg font-semibold mb-6 text-purple-400">Mening ijtimoiy tarmoqlarim</h3>
        <div className="flex justify-center gap-8 text-3xl">
          <a href="#" className="hover:opacity-70">📸</a>
          <a href="#" className="hover:opacity-70">💬</a>
          <a href="#" className="hover:opacity-70">▶</a>
        </div>
      </footer>

    </main>
  );
}