import React from 'react';
import { Calendar, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import bannerImage from '../../../../public/banner/banner-setia.webp'; // GANTI dengan path yang sesuai
const HeroEvent = () => {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto font-sans">
      
      {/* Container Utama (Card Putih Besar) */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* === KOLOM KIRI (Informasi Text) === */}
        <div className="w-full lg:w-5/12 text-left space-y-6 order-2 lg:order-1">
          
          {/* Badge / Tag Kategori */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm w-fit">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
              Seminar Pasca Nikah
            </span>
          </div>

          {/* Judul Utama */}
          <div className="space-y-2">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Setia <span className="text-amber-500">Bersamamu</span>
            </h1>
            <p className="text-xl text-gray-500 font-serif italic">
              "Merawat Cinta Sampai Surga"
            </p>
          </div>

          {/* Deskripsi Singkat */}
          <p className="text-gray-600 leading-relaxed">
            Bersama <strong>Dr. Setia Furqon Kholid, M.Pd</strong> (Founder Kelas Jodoh). 
            Temukan rahasia membangun rumah tangga yang harmonis, romantis, dan penuh berkah.
          </p>

          {/* Info Detail (Tanggal & Lokasi) */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Tanggal Pelaksanaan</p>
                <p className="text-gray-900 font-bold text-lg">Minggu, 8 Maret 2026</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Lokasi</p>
                <p className="text-gray-900 font-bold text-lg">Bandung, Jawa Barat</p>
              </div>
            </div>
          </div>

          {/* Tombol CTA */}
          <div className="pt-6">
            <button className="group w-full md:w-auto px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3">
              Daftar Sekarang
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-xs text-gray-400 mt-3 text-center md:text-left ml-2">
              *Kuota terbatas untuk menjaga kualitas seminar
            </p>
          </div>
        </div>

        {/* === KOLOM KANAN (Gambar Banner) === */}
        <div className="w-full lg:w-7/12 order-1 lg:order-2 relative">
          {/* Card Image Wrapper */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-all duration-500">
            {/* Overlay Gradient Emas (Opsional, untuk kesan mewah) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
            
            {/* Gambar Banner Utama */}
            {/* GANTI src ini sesuai lokasi file kamu */}
            <img 
              src={bannerImage} 
              alt="Banner Setia Bersamamu" 
              className="w-full h-auto object-cover"
            />

            {/* Floating Badge (Opsional) */}
            <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/50">
               <p className="text-xs font-bold text-amber-600 uppercase">Special Event</p>
               <p className="text-sm font-bold text-gray-900">Batch 2026</p>
            </div>
          </div>

          {/* Hiasan Blur Background */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-400 opacity-20 blur-[100px] -z-10 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gray-900 opacity-10 blur-[80px] -z-10 rounded-full"></div>
        </div>

      </div>
    </div>
  );
};

export default HeroEvent;