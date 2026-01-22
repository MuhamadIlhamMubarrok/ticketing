import { HeartHandshake, Compass, Sparkles } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
export default function Tujuan() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };
  return (
    <section id="tujuan" className="relative py-20 font-body overflow-hidden">
      {/* BACKGROUND BLUR */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[480px] h-[480px] bg-primary/25 blur-[160px] rounded-full" />

      <motion.div className="relative max-w-7xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ staggerChildren: 0.15 }}>
        {/* BADGE */}
        <motion.div variants={fadeUp} className="flex justify-center mb-6">
          <span className="inline-flex items-center px-5 py-1.5 rounded-full border border-secondary/30 text-secondary text-xs tracking-widest font-medium">✦ Tujuan Setia Event</span>
        </motion.div>

        {/* TITLE */}
        <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-5xl text-secondary font-bold leading-tight mb-8">
          Bukan Sekadar Event <br />
          <span className="text-primary">Tapi Perjalanan Hati</span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p variants={fadeUp} className="text-secondary/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-12">
          Setia Bersamamu hadir untuk pasangan yang ingin kembali menemukan makna pernikahan. Menguatkan cinta, menyembuhkan luka, dan menata kembali arah rumah tangga agar bernilai ibadah hingga surga.
        </motion.p>

        {/* POINTS */}
        <div className="flex flex-col md:flex-row gap-8">
          {[
            {
              icon: HeartHandshake,
              title: "Merawat Cinta yang Mulai Melemah",
              desc: "Mengisi kembali energi cinta yang terkikis oleh rutinitas, tuntutan hidup, dan luka yang tak tersampaikan.",
            },
            {
              icon: Compass,
              title: "Menata Arah Pernikahan",
              desc: "Membantu pasangan menemukan kembali visi, peran, dan tujuan pernikahan sesuai nilai Qurani.",
            },
            {
              icon: Sparkles,
              title: "Menggapai Surga Bersama",
              desc: "Membimbing keluarga agar pernikahan tidak hanya bahagia di dunia, tetapi juga bernilai ibadah.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariant}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="
                  relative
                  flex-1
                  bg-utama
                  backdrop-blur-sm
                  px-10 py-12
                  rounded-3xl
                  text-left
                  overflow-hidden
                  shadow-xl
                "
              >
                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/60 pointer-events-none" />

                <div className="relative z-10">
                  <div className="mb-5 flex items-center gap-4">
                    <motion.div initial={{ scale: 0.9, rotate: -5 }} whileInView={{ scale: 1, rotate: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="p-2 rounded-full bg-primary/15 text-primary">
                      <Icon size={64} strokeWidth={1.5} />
                    </motion.div>

                    <h3 className="font-body text-xl md:text-2xl font-semibold text-light">{item.title}</h3>
                  </div>

                  <p className="text-third leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div variants={fadeUp} transition={{ delay: 0.2 }} className="mt-14">
          <a
            href="#register"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full font-semibold bg-gradient-to-r from-[var(--color-primary-01)] to-[var(--color-primary-02)] text-third hover:from-[var(--color-primary-02)] hover:to-[var(--color-primary-01)] transition-all duration-300"
          >
            Ikuti Program Ini
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
