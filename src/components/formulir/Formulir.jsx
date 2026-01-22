import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, ShieldCheck, Sparkles } from 'lucide-react';
// Pastikan path import ini sudah benar sesuai struktur foldermu
import qs from '../../../public/qris/setia-qris.jpeg'; 

const OrderForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const pkg = state?.selectedPkg;

  const [form, setForm] = useState({
    nama: '',
    email: '',
    phone: '',
  });
  
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    if (!pkg) navigate('/');
  }, [pkg, navigate]);

  if (!pkg) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminPhone = "6285320477752"; 

    let message = `*HALO ADMIN, SAYA MAU DAFTAR TIKET EVENT*\n\n`;
    message += `----------------------------------\n`;
    message += `📋 *DATA DIRI PEMESAN*\n`;
    message += `Nama : ${form.nama}\n`;
    message += `Email : ${form.email}\n`;
    message += `No HP : ${form.phone}\n`;
    message += `----------------------------------\n`;
    message += `🎟️ *PAKET DIPILIH*\n`;
    message += `Tipe : ${pkg.name}\n`;
    message += `Tagihan : *Rp ${pkg.price.toLocaleString('id-ID')}*\n`;
    message += `----------------------------------\n`;
    message += `✅ *STATUS PEMBAYARAN*\n`;
    message += `User menyatakan sudah transfer.\n`;
    message += `_Bukti transfer akan dikirim manual._`;

    const waUrl = `https://wa.me/${adminPhone}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    // Menggunakan font-body (Poppins) sebagai default
    <div className="min-h-screen bg-[#f5f3ee] py-6 px-4 md:py-10 flex items-center justify-center font-body">
      
      {/* Container Utama */}
      <div className="bg-white max-w-6xl w-full rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        
        {/* === KOLOM KIRI (FORMULIR) === */}
        <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
          
          <button onClick={() => navigate('/')} className="flex items-center text-gray-400 hover:text-primary mb-6 transition w-max group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" /> Kembali
          </button>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-script text-2xl text-primary">Setia Organizer</span>
            </div>
            {/* Menggunakan font-heading (Playfair Display) */}
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-2">Lengkapi Data Diri</h1>
            <p className="text-gray-500 text-sm">Isi form di bawah untuk mengamankan tiketmu.</p>
          </div>

          {/* Stepper Custom */}
          <div className="flex items-center gap-1 mb-8 bg-[#f5f3ee] p-1 rounded-full w-max border border-gray-200">
            {/* Active Step: bg-gold (Primary) */}
            <div className="px-6 py-2 bg-gold text-white font-bold rounded-full text-sm shadow-md transition-all">
              Data Diri
            </div>
            <div className="px-6 py-2 text-gray-400 font-medium text-sm">
              Konfirmasi
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-secondary uppercase tracking-wide mb-2">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input 
                name="nama"
                required
                type="text" 
                // Focus styling mengikuti warna Gold
                className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-[#f5f3ee] focus:bg-white focus:border-primary focus:ring-4 focus:ring-yellow-100 outline-none transition-all placeholder-gray-400 text-secondary"
                placeholder="Masukkan nama lengkap kamu"
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-secondary uppercase tracking-wide mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input 
                  name="email"
                  required
                  type="email" 
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-[#f5f3ee] focus:bg-white focus:border-primary focus:ring-4 focus:ring-yellow-100 outline-none transition-all placeholder-gray-400 text-secondary"
                  placeholder="email@kamu.com"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-secondary uppercase tracking-wide mb-2">
                  WhatsApp <span className="text-red-500">*</span>
                </label>
                <input 
                  name="phone"
                  required
                  type="tel" 
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-[#f5f3ee] focus:bg-white focus:border-primary focus:ring-4 focus:ring-yellow-100 outline-none transition-all placeholder-gray-400 text-secondary"
                  placeholder="0812xxxx"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Checkbox Pernyataan */}
            <div className="bg-[#f5f3ee] border border-gray-200 rounded-xl p-4 mt-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input 
                  required 
                  type="checkbox" 
                  checked={isConfirmed}
                  onChange={(e) => setIsConfirmed(e.target.checked)}
                  // Accent color gold
                  className="w-5 h-5 mt-0.5 text-primary border-gray-300 rounded focus:ring-primary accent-primary"
                />
                <div className="text-sm">
                  <span className="font-bold text-secondary">Saya sudah melakukan transfer.</span>
                  <p className="text-gray-500 text-xs mt-1">
                    Bukti transfer (screenshot) wajib dikirimkan manual ke WhatsApp Admin setelah tombol kirim ditekan.
                  </p>
                </div>
              </label>
            </div>

            <button 
              type="submit"
              // Button menggunakan bg-dark (Black) dengan hover Gold agar elegan
              className="w-full py-4 bg-dark hover:bg-gold text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex justify-center items-center gap-2 mt-6"
            >
              <Send className="w-5 h-5" />
              Kirim Data Sekarang
            </button>
          </form>
        </div>

        {/* === KOLOM KANAN (INFO & QRIS) === */}
        {/* Background diganti jadi bg-dark (Black) sesuai Design System */}
        <div className="w-full md:w-2/5 p-8 md:p-12 text-light flex flex-col justify-between relative overflow-hidden order-1 md:order-2 bg-dark">
          
          {/* Hiasan Background Blur Gold */}
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-gold opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-gold opacity-20 rounded-full blur-3xl"></div>

          <div>
            <div className="flex items-center gap-2 mb-6 bg-utama backdrop-blur-sm w-max px-3 py-1 rounded-lg border border-white/20">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-light">Secure Payment</span>
            </div>
            {/* Font Heading Playfair Display */}
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 leading-tight">
              Investasi <span className="text-primary italic">Cinta</span> <br/> Terbaik Anda.
            </h2>
            <p className="opacity-80 text-sm font-light leading-relaxed">
              "Selesaikan langkah ini untuk memulai perjalanan merawat cinta sampai surga."
            </p>
          </div>

          {/* Card Paket & QRIS */}
          <div className="mt-8 bg-white text-secondary rounded-2xl p-6 shadow-2xl relative z-10 border border-gray-100">
             <div className="border-b border-dashed border-gray-200 pb-4 mb-4">
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Paket Dipilih</p>
                <h3 className="text-xl font-heading font-bold text-secondary mt-1">{pkg.name}</h3>
                {/* Harga menggunakan warna Primary (Gold) */}
                <p className="text-2xl font-extrabold text-primary mt-1">Rp {pkg.price.toLocaleString('id-ID')}</p>
             </div>

             <div className="text-center">
                <p className="text-xs font-bold text-gray-400 mb-3 tracking-wide">SCAN QRIS DI BAWAH</p>
                {/* Container Gambar QRIS */}
                <div className="rounded-xl overflow-hidden border-2 border-dashed border-gray-200 p-2 bg-[#f5f3ee]">
                    <img 
                        src={qs} 
                        alt="QRIS" 
                        className="w-full h-auto object-cover rounded-lg mix-blend-multiply" 
                    />
                </div>
                <p className="text-[10px] text-gray-400 mt-3 italic">Otomatis dicek oleh Admin</p>
             </div>
          </div>

          <div className="mt-8 text-center opacity-60 text-xs font-light">
            <p>© 2026 Setia Event Organizer. All rights reserved.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OrderForm;