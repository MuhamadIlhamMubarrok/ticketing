import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-dark shadow-lg rounded-full">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--color-primary-01)] flex items-center justify-center">
              <span className="font-script text-black text-xl">S</span>
            </div>
            <span className="font-heading text-[var(--color-primary-03)] text-lg hidden sm:block">Setia Event</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-body text-sm">
            {["Home", "About", "Activity", "Speakers", "Gallery", "Packages"].map((item) => (
              <a key={item} href="#" className="text-[var(--color-primary-03)] hover:text-[var(--color-primary-01)] transition">
                {item}
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <a href="#register" className="font-body bg-[var(--color-primary-01)] text-black px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
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
              <a key={item} href="#" className="text-[var(--color-primary-03)] hover:text-[var(--color-primary-01)] transition" onClick={() => setOpen(false)}>
                {item}
              </a>
            ))}

            <a href="#register" className="mt-2 text-center bg-[var(--color-primary-01)] text-black py-2 rounded-full font-semibold">
              Daftar Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
