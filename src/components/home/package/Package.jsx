import React from 'react';
import { useNavigate } from 'react-router-dom';
import { packages } from '../../data/packages';
import { CheckCircle, Sparkles } from 'lucide-react';

const PackageSelection = () => {
  const navigate = useNavigate();

  const handleSelect = (pkg) => {
    const { icon, ...cleanPkg } = pkg;
    navigate('/order', { state: { selectedPkg: cleanPkg } });
  };

  return (
    // 1. BACKGROUND JADI PUTIH BERSIH
    <div className="py-20 px-4 min-h-screen bg-white relative overflow-hidden">
      
      {/* Hiasan Background tipis-tipis (Opsional, biar gak sepi banget) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-yellow-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gray-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-50 border border-amber-200 mb-4">
             <Sparkles className="w-4 h-4 text-amber-600" />
             <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Seminar Pasca Nikah</span>
          </div>
          
          {/* Judul jadi Gelap karena background putih */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900">
            Setia <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600">Bersamamu</span>
          </h1>
          <p className="text-xl text-gray-500 font-light italic">
            "Merawat Cinta Sampai Surga"
          </p>
        </div>

        {/* 2. GRID LAYOUT
            - 'items-stretch' (default) bikin semua anak grid tingginya sama mengikuti yang paling tinggi.
        */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              // 3. HAPUS negative margin (-mt-4) supaya rata sejajar
              className="relative group h-full" 
            >
              
              {/* Glow Effect (Khusus VIP) */}
              {pkg.isPopular && (
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
              )}

              {/* Card Container: 'h-full' agar memenuhi tinggi grid */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                
                {/* Header Card */}
                <div className={`p-8 bg-gradient-to-br ${pkg.theme} text-white relative`}>
                  <div className="relative z-10 flex justify-between items-start">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-md bg-white/20 text-[10px] font-bold uppercase tracking-wider mb-2 border border-white/10">
                        Paket {pkg.id}
                      </span>
                      <h3 className="text-2xl font-bold tracking-tight">{pkg.name}</h3>
                    </div>
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-inner">
                      {pkg.icon}
                    </div>
                  </div>

                  <div className="mt-6 relative z-10">
                    <p className="text-sm opacity-80 font-medium">Investasi Terbaik</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-semibold">Rp</span>
                      <span className="text-4xl font-extrabold tracking-tight">{pkg.price.toLocaleString('id-ID')}</span>
                    </div>
                  </div>
                </div>

                {/* Body Card */}
                {/* 'flex-1' membuat area ini mengisi sisa ruang kosong, sehingga tombol terdorong ke paling bawah */}
                <div className="p-8 flex-1 flex flex-col bg-white">
                  <ul className="space-y-4 mb-8 flex-1">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm font-medium leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => handleSelect(pkg)}
                    className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wide shadow-md transition-all duration-300 ${pkg.buttonColor} hover:shadow-lg hover:brightness-110`}
                  >
                    Pilih Paket Ini
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
  

      </div>
    </div>
  );
};

export default PackageSelection;