import React from "react";
import { useNavigate } from "react-router-dom";
import { packages } from "../../data/packages";
import { CheckCircle, Sparkles } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

/* =====================
   MOTION VARIANTS
===================== */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const PackageSelection = () => {
  const navigate = useNavigate();

  const handleSelect = (pkg) => {
    const { icon, ...cleanPkg } = pkg;
    navigate("/order", { state: { selectedPkg: cleanPkg } });
  };

  return (
    <div id="packages" className="py-20 px-4 min-h-scree relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* ================= HEADER ================= */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center mb-16">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-50 border border-amber-200 mb-4">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-bold font-body text-amber-800 uppercase tracking-widest">Seminar Pasca Nikah</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold mb-4 font-heading text-gray-900">
            Setia <span className="text-primary">Bersamamu</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-xl text-gray-500 font-body font-light italic">
            "Merawat Cinta Sampai Surga"
          </motion.p>
        </motion.div>

        {/* ================= GRID PACKAGES ================= */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <motion.div key={pkg.id} variants={cardVariants} whileHover={{ y: -6 }} className="relative group h-full">
              {/* Glow VIP */}
              {pkg.isPopular && <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-200" />}

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col h-full transition-all duration-300 bg-neutral-900/60 backdrop-blur-sm">
                {/* ===== HEADER CARD ===== */}
                <div className={`p-8 bg-gradient-to-br ${pkg.theme} font-body text-white relative`}>
                  {/* Dark overlay header */}
                  <div className="absolute inset-0 bg-black/60" />

                  <div className="relative z-10 flex justify-between items-start">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-md bg-white/20 text-[10px] font-bold uppercase tracking-wider mb-2 border border-white/10">Paket {pkg.id}</span>
                      <h3 className="text-2xl font-bold tracking-tight">{pkg.name}</h3>
                    </div>

                    <motion.div whileHover={{ rotate: 6, scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }} className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-inner">
                      {pkg.icon}
                    </motion.div>
                  </div>

                  <div className="mt-6 font-body relative z-10">
                    <p className="text-sm opacity-80 font-medium">Investasi Terbaik</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-semibold">Rp</span>
                      <span className="text-4xl font-extrabold tracking-tight">{pkg.price.toLocaleString("id-ID")}</span>
                    </div>
                  </div>
                </div>

                {/* ===== BODY CARD ===== */}
                <div className="relative p-8 flex-1 flex flex-col font-body bg-neutral-900/40">
                  {/* Body overlay */}
                  <div className="absolute inset-0 bg-black/25 pointer-events-none" />

                  <ul className="relative z-10 space-y-4 mb-8 flex-1">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-200 text-sm font-medium leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleSelect(pkg)}
                    className={`relative z-10 font-body w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wide shadow-lg transition-all duration-300 ${pkg.buttonColor}`}
                  >
                    Pilih Paket Ini
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PackageSelection;
