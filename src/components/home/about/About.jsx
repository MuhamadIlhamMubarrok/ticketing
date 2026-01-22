// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

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

export default function About() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="relative max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden bg-utama p-6 md:p-10 font-body text-light shadow-2xl"
    >
      {/* === PRIMARY BLUR BACKGROUND === */}
      <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-primary/40 rounded-full blur-[120px]" />
      <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-primary/30 rounded-full blur-[120px]" />

      {/* === PATTERN OVERLAY === */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100" stroke="white" fill="none" strokeWidth="0.15" />
          <path d="M0 50 C 40 100 70 0 100 50" stroke="white" fill="none" strokeWidth="0.15" />
        </svg>
      </div>

      {/* === CONTENT === */}
      <div className="relative z-10">
        <motion.div variants={item} className="flex flex-col gap-6">
          <div>
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase bg-primary/10 border border-primary/30 text-primary">✦ Tentang Event</span>

            <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
              Setia Bersamamu <br />
              <span className="text-primary">Merawat Cinta Sampai Surga</span>
            </h1>

            <p className="mt-3 text-sm md:text-base text-third/80">
              Seminar Eksklusif Pasutri <span className="text-primary font-semibold">Spesial Hadir di Kota Bandung</span>
            </p>
          </div>

          <motion.p variants={item} className="text-third/80 text-base md:text-lg leading-relaxed">
            Pernikahan adalah <span className="text-primary font-medium">ibadah seumur hidup</span>. Namun dalam perjalanannya, tak jarang cinta diuji oleh kebosanan, tuntutan hidup, dan kurangnya ruang untuk saling memahami.
          </motion.p>

          <motion.p variants={item} className="text-third/80 leading-relaxed">
            <span className="font-semibold text-light">Setia Bersamamu</span> hadir sebagai ruang
            <span className="italic text-primary"> couple time</span> yang menenangkan, mengisi kembali energi cinta, meluruskan arah pernikahan, dan menghadirkan kembali
            <span className="italic text-primary"> kesakinahan</span> dalam rumah tangga.
          </motion.p>

          {/* AYAT */}
          <motion.p variants={item} transition={{ delay: 0.2 }} className="text-center text-2xl md:text-4xl leading-[1.9] text-third" dir="rtl">
            وَالَّذِينَ يَقُولُونَ رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ
          </motion.p>

          {/* TERJEMAH */}
          <motion.p variants={item} className="border-l-2 border-primary/40 pl-4 italic text-third/70 text-sm md:text-base">
            “Ya Tuhan kami, anugerahkanlah kepada kami pasangan dan keturunan sebagai penyejuk hati dan jadikan kami pemimpin bagi orang bertakwa.” (QS. Al-Furqan: 74)
          </motion.p>
        </motion.div>

        {/* BOTTOM DESCRIPTION */}
        <motion.div variants={item} className="mt-12 pt-8 border-t border-white/40 space-y-5 text-third/80 text-sm md:text-base leading-relaxed">
          <p>Event ini ditujukan bagi Anda yang ingin memperkuat ikatan cinta, sedang menghadapi ujian rumah tangga, maupun yang ingin mempersiapkan pernikahan dengan ilmu yang benar.</p>

          <p>
            InsyaAllah, melalui <span className="text-primary font-semibold">Setia Bersamamu</span>, peserta akan dibimbing memahami bahasa cinta pasangan, menyelesaikan konflik dengan bijak, serta menemukan kembali arah dan visi keluarga.
            <span className="block mt-3 font-heading text-xl md:text-2xl text-primary">Merawat Cinta, Menguatkan Ikatan, Menuju Surga Bersama.</span>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
