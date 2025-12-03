import Image from "next/image";

export default function Home() {
  return (
    <main className="px-6 md:px-20 lg:px-40 bg-white text-black">

      {/* NAVBAR */}
      <header className="flex items-center justify-between py-6 bg-white">
        <div className="flex items-center space-x-3">
          <Image 
            src="/logo.png"
            width={45}
            height={45}
            alt="Mavion Digital Logo"
            className="rounded-md shadow-md"
          />
          <span className="text-xl font-bold text-black">Mavion Digital</span>
        </div>

        <nav className="hidden md:flex space-x-8 font-medium">
          <a href="#layanan" className="hover:text-blue-600 text-gray-700">Layanan</a>
          <a href="#tentang" className="hover:text-blue-600 text-gray-700">Tentang</a>
          <a href="#kontak" className="hover:text-blue-600 text-gray-700">Kontak</a>
        </nav>
      </header>


      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-10 items-center py-20 bg-white">

        <div className="text-left">
          <h1 className="text-5xl font-extrabold leading-tight text-black">
            Solusi Digital Profesional<br/>
            <span className="text-blue-600">Untuk Bisnis Anda</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg max-w-md">
            Kami membuat website, aplikasi, dan sistem informasi
            berbasis web untuk UMKM hingga perusahaan berskala besar.
          </p>

          <a 
            href="#kontak"
            className="mt-6 inline-block bg-blue-600 px-8 py-4 rounded-md text-white hover:bg-blue-700 transition font-medium shadow-md hover:shadow-xl"
          >
            Konsultasi Gratis
          </a>
        </div>

        <div className="flex justify-center">
          <Image 
            src="https://www.digirookstudio.com/images/0_4IpyHcVskpuGOvQn.jpg"
            alt="illustration"
            width={500}
            height={500}
            className="rounded-xl shadow-xl bg-white"
          />
        </div>

      </section>


      {/* LAYANAN */}
      <section id="layanan" className="py-24 bg-white">
        <h2 className="text-3xl font-semibold text-center text-black">
          Layanan Kami
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12">

          <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition cursor-pointer">
            <h3 className="text-xl font-semibold text-black">Website Basic</h3>
            <p className="text-gray-600 mt-2">
              Landing page / profil sederhana untuk personal & UMKM
            </p>
            <p className="mt-4 text-blue-600 font-semibold">Mulai Rp100.000</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition cursor-pointer">
            <h3 className="text-xl font-semibold text-black">Website Profesional</h3>
            <p className="text-gray-600 mt-2">
              Company profile, bisnis profesional, SEO siap tempur
            </p>
            <p className="mt-4 text-blue-600 font-semibold">Mulai Rp2.000.000</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition cursor-pointer">
            <h3 className="text-xl font-semibold text-black">Sistem Informasi</h3>
            <p className="text-gray-600 mt-2">
              Sistem internal: data management, admin, dashboard, role user
            </p>
            <p className="mt-4 text-blue-600 font-semibold">Mulai Rp10.000.000</p>
          </div>
        </div>
      </section>


      {/* ABOUT */}
      <section id="tentang" className="py-24 bg-white">
        <div className="grid md:grid-cols-2 gap-10">

          <Image 
            src="https://img.freepik.com/free-vector/modern-web-design-landing-page-concept_23-2147873134.jpg"
            alt="data illustration"
            width={500}
            height={500}
            className="rounded-xl shadow-lg bg-white"
          />

          <div>
            <h2 className="text-3xl font-semibold text-black">
              Tentang Kami
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Kami berkomitmen membantu banyak bisnis di Indonesia
              untuk masuk ke ranah digital secara profesional dengan teknologi terkini.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-white shadow-md rounded-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-blue-600">30+</h3>
                <p className="text-gray-600 text-sm">Proyek selesai</p>
              </div>

              <div className="p-4 bg-white shadow-md rounded-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-blue-600">100%</h3>
                <p className="text-gray-600 text-sm">Kepuasan Client</p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* CONTACT */}
      <section id="kontak" className="py-24 text-center bg-white">
        <h2 className="text-3xl font-semibold text-black">Hubungi Kami</h2>
        <p className="text-gray-600 mt-4">Tanya harga? Konsultasi dulu? Gratis!</p>

        <a
          href="https://wa.me/6281286208542"
          className="mt-6 inline-block border border-emerald-600 text-emerald-600 px-8 py-3 rounded-md hover:bg-green-600 hover:text-white transition font-medium"
        >
          Chat via WhatsApp
        </a>
        
        <p className="mt-12 text-gray-500 text-sm">
          © 2025 Mavion Digital Indonesia
        </p>
      </section>

    </main>
  );
}
