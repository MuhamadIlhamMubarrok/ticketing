import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, CheckCircle, ShieldCheck } from 'lucide-react';
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
  
  // Checkbox state terpisah
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

    const adminPhone = "622246431454"; 

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
    <div className="min-h-screen bg-gray-100 py-6 px-4 md:py-10 flex items-center justify-center">
      
      {/* Container Utama (Card Besar) */}
      <div className="bg-white max-w-6xl w-full rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        
        {/* === KOLOM KIRI (FORMULIR) === */}
        <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
          
          <button onClick={() => navigate('/')} className="flex items-center text-gray-400 hover:text-gray-800 mb-6 transition w-max">
            <ArrowLeft className="w-5 h-5 mr-2" /> Kembali
          </button>

          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Lengkapi Data Diri 🚀</h1>
            <p className="text-gray-500 text-sm mt-1">Isi form di bawah untuk mengamankan tiketmu.</p>
          </div>

          {/* Stepper (Mirip Screenshot) */}
          <div className="flex items-center gap-1 mb-8 bg-gray-100 p-1 rounded-full w-max">
            <div className="px-6 py-2 bg-yellow-400 text-white font-bold rounded-full text-sm shadow-md">
              Data Diri
            </div>
            <div className="px-6 py-2 text-gray-400 font-medium text-sm">
              Konfirmasi
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input 
                name="nama"
                required
                type="text" 
                className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all"
                placeholder="Masukkan nama lengkap kamu"
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input 
                  name="email"
                  required
                  type="email" 
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all"
                  placeholder="email@kamu.com"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">
                  WhatsApp <span className="text-red-500">*</span>
                </label>
                <input 
                  name="phone"
                  required
                  type="tel" 
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all"
                  placeholder="0812xxxx"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Checkbox Pernyataan */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mt-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input 
                  required 
                  type="checkbox" 
                  checked={isConfirmed}
                  onChange={(e) => setIsConfirmed(e.target.checked)}
                  className="w-5 h-5 mt-0.5 text-yellow-500 border-gray-300 rounded focus:ring-yellow-400"
                />
                <div className="text-sm">
                  <span className="font-bold text-gray-800">Saya sudah melakukan transfer.</span>
                  <p className="text-gray-500 text-xs mt-1">
                    Bukti transfer (screenshot) wajib dikirimkan manual ke WhatsApp Admin setelah tombol kirim ditekan.
                  </p>
                </div>
              </label>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex justify-center items-center gap-2 mt-6"
            >
              <Send className="w-5 h-5" />
              Kirim Data Sekarang
            </button>
          </form>
        </div>

        {/* === KOLOM KANAN (INFO & QRIS) === */}
        {/* Background kuning/warna tema paket */}
        <div className={`w-full md:w-2/5 p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden order-1 md:order-2 bg-gradient-to-br from-yellow-400 to-orange-500`}>
          
          {/* Hiasan Background (Circles) */}
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>

          <div>
            <div className="flex items-center gap-2 mb-4 bg-white/20 backdrop-blur-sm w-max px-3 py-1 rounded-lg border border-white/30">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Secure Payment</span>
            </div>
            <h2 className="text-3xl font-extrabold mb-2 leading-tight">Saatnya Upgrade Hubungan Anda! ✨</h2>
            <p className="opacity-90 text-sm">Selesaikan pembayaran untuk mengamankan slot tiket Anda.</p>
          </div>

          {/* Card Paket & QRIS */}
          <div className="mt-8 bg-white text-gray-800 rounded-2xl p-6 shadow-2xl relative z-10">
             <div className="border-b border-gray-100 pb-4 mb-4">
                <p className="text-xs text-gray-400 uppercase font-bold">Paket Dipilih</p>
                <h3 className="text-xl font-bold text-gray-800">{pkg.name}</h3>
                <p className="text-2xl font-extrabold text-green-600 mt-1">Rp {pkg.price.toLocaleString('id-ID')}</p>
             </div>

             <div className="text-center">
                <p className="text-xs font-bold text-gray-500 mb-3">SCAN QRIS DI BAWAH</p>
                {/* Container Gambar QRIS */}
                <div className="rounded-xl overflow-hidden border-2 border-dashed border-gray-300 p-2 bg-gray-50">
                    <img 
                        src={qs} 
                        alt="QRIS" 
                        className="w-full h-auto object-cover rounded-lg" 
                    />
                </div>
                <p className="text-[10px] text-gray-400 mt-3">Otomatis dicek oleh Admin</p>
             </div>
          </div>

          <div className="mt-8 text-center opacity-80 text-xs">
            <p>© 2026 Ticketing System. All rights reserved.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OrderForm;