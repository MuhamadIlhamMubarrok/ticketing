import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import logo1 from "../../../../public/general/logo1.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} className="hidden md:block bg-utama shadow-lg rounded-full">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 pl-6">
          {/* Logo */}
          <motion.img src={logo1} alt="Setia Event Logo" className="h-12 w-auto ml-1" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-body text-sm">
            {["Home", "About", "Activity", "Speakers", "Gallery", "Packages"].map((item, index) => (
              <motion.a key={item} href="#" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.05 }} className="text-third hover:text-primary-01 transition">
                {item}
              </motion.a>
            ))}
          </div>

          {/* CTA Desktop */}
          <motion.div className="hidden md:block" whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 250 }}>
            <a href="#register" className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-500 text-secondary rounded-full font-body text-sm px-4 py-2.5 shadow-sm hover:shadow-md transition">
              Daftar Sekarang
            </a>
          </motion.div>

          {/* Mobile Button */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-[var(--color-primary-03)] text-2xl focus:outline-none" aria-label="Toggle Menu">
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-dark border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 gap-4 font-body text-sm">
              {["Home", "About", "Activity", "Speakers", "Gallery", "Packages"].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-[var(--color-primary-03)] hover:text-primary-01 transition"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </motion.a>
              ))}

              <motion.a href="#register" whileHover={{ scale: 1.03 }} className="mt-2 text-center bg-primary-01 text-black py-2 rounded-full font-semibold">
                Daftar Sekarang
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
