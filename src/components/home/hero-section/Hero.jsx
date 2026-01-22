// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { smoothScrollTo } from "../../../utils/smoothScroll";
// Pastikan path import gambarmu benar
import speaker1 from "../../../../public/general/speaker1.webp";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="home">
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-7xl mx-auto md:px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
        {/* LEFT CONTENT */}
        <div className="space-y-5">
          {/* Badge */}
          <motion.div variants={item} className="flex justify-start">
            <h1 className="inline-flex gap-2 px-4 py-1 rounded-full border border-black text-secondary text-sm font-body">✦ Setia Event Organizer</h1>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={item} className="font-heading font-bold text-start text-4xl sm:text-5xl lg:text-6xl leading-tight text-secondary">
            Setia Bersamamu <br />
            <span className="text-primary">Merawat Cinta</span> <br />
            <span>Sampai</span> <span className="text-primary">Surga</span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={item} className="font-body text-start text-base sm:text-lg text-secondary max-w-xl">
            Pernikahan adalah <strong>ibadah seumur hidup</strong>. Namun seiring waktu, cinta bisa melemah oleh rutinitas, tuntutan, dan luka yang tak tersampaikan.
            <br />
            <br />
            <strong>Setia Bersamamu</strong> hadir sebagai <em>couple time</em> penuh makna, untuk menguatkan kembali ikatan, menata arah pernikahan, dan menghadirkan kembali{" "}
            <span className="text-primary font-medium">sakinah dalam rumah tangga</span>.
          </motion.p>

          {/* CTA SECTION - DIMODIFIKASI DI SINI */}
          <motion.div
            variants={item}
            // 1. flex-col (Mobile: Kolom), sm:flex-row (Tablet ke atas: Baris)
            // 2. gap-4 (Mobile: Jarak rapat), sm:gap-6 (PC: Jarak renggang)
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto"
          >
            <motion.a
              href="https://wa.me/6285320477752?text=Assalamu%27alaikum%2C%20saya%20ingin%20bertanya%20tentang%20event%20Setia%20Bersamamu"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              // 3. w-full (Mobile: Full width), sm:w-auto (PC: Auto width)
              // 4. flex justify-center (Agar teks di tengah saat full width)
              className="
                font-body font-semibold
                px-6 py-3 rounded-full
                bg-gradient-to-r
                from-[var(--color-primary-01)]
                to-[var(--color-primary-02)]
                text-third
                transition-all duration-300
                w-full sm:w-auto flex justify-center text-center
              "
            >
              Start Consultation
            </motion.a>

            <motion.a
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("explore", 1500, 80); // id, speed, navbar height
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              // Tambahkan class yang sama: w-full sm:w-auto flex justify-center
              className="
                bg-gradient-to-r text-secondary rounded-full font-body 
                from-gray-200 via-gray-400 to-gray-500 font-medium 
                text-sm px-6 py-3 shadow-sm
                w-full sm:w-auto flex justify-center text-center
              "
            >
              Explore more
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Blur Background */}
            <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 rounded-3xl bg-gold opacity-60 blur-md -z-10" />

            <img src={speaker1} alt="Family Speaker" className="w-full max-w-md lg:max-w-lg object-contain rounded-2xl relative z-10" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
