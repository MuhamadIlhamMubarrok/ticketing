import { useState } from "react";
import logo1 from "../../../../public/general/logo1.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="hidden md:block bg-utama shadow-lg rounded-full">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 pl-6">
          {/* Logo */}
          <img src={logo1} alt="Setia Event Logo" className="h-12 w-auto ml-1" />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-body text-sm">
            {["Home", "About", "Activity", "Speakers", "Gallery", "Packages"].map((item) => (
              <a key={item} href="#" className="text-third hover:text-primary-01 transition">
                {item}
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <a
              href="#register"
              className="text-heading bg-gradient-to-r text-secondary rounded-full font-body from-gray-200 via-gray-400 to-gray-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
            >
              Daftar Sekarang
            </a>
          </div>

          {/* Mobile Button */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-[var(--color-primary-03)] text-2xl focus:outline-none" aria-label="Toggle Menu">
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-dark border-t border-white/10">
          <div className="flex flex-col px-4 py-4 gap-4 font-body text-sm">
            {["Home", "About", "Activity", "Speakers", "Gallery", "Packages"].map((item) => (
              <a key={item} href="#" className="text-[var(--color-primary-03)] hover:text-primary-01 transition" onClick={() => setOpen(false)}>
                {item}
              </a>
            ))}

            <a href="#register" className="mt-2 text-center bg-primary-01 text-black py-2 rounded-full font-semibold">
              Daftar Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
