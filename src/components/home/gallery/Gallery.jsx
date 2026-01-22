import { motion } from "framer-motion";
import gallery1 from "../../../../public/gallery/gallery-1.webp";
import gallery2 from "../../../../public/gallery/gallery-2.webp";
import gallery3 from "../../../../public/gallery/gallery-3.webp";
import gallery4 from "../../../../public/gallery/gallery-4.webp";
import gallery5 from "../../../../public/gallery/gallery-5.webp";
import gallery6 from "../../../../public/gallery/gallery-6.webp";
import gallery7 from "../../../../public/gallery/gallery-7.webp";
import gallery8 from "../../../../public/gallery/gallery-8.webp";
import gallery9 from "../../../../public/gallery/gallery-9.webp";
import gallery10 from "../../../../public/gallery/gallery-10.webp";
import gallery11 from "../../../../public/gallery/gallery-11.webp";
import gallery12 from "../../../../public/gallery/gallery-12.webp";

/* =====================
   MOTION VARIANTS
===================== */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Gallery() {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12];

  const duplicated = [...images, ...images];

  return (
    <section id="gallery" className="relative py-10 overflow-hidden font-body">
      {/* SOFT BLUR */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-primary/20 blur-[180px] rounded-full" />

      {/* HEADER */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative text-center mb-20 px-6">
        <div className="flex justify-center mb-6">
          <span className="inline-flex px-5 py-1.5 rounded-full border border-secondary/30 text-secondary text-xs tracking-widest">✦ Galeri Kegiatan</span>
        </div>

        <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary leading-tight">
          Momen yang Menguatkan <br />
          <span className="text-primary">Ikatan Keluarga</span>
        </h2>
      </motion.div>

      {/* ROW 1 – LEFT */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative flex">
        <motion.div
          className="flex gap-6 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicated.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="
                shrink-0
                w-[280px] md:w-[420px]
                aspect-[16/10]
                rounded-3xl
                overflow-hidden
                shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]
              "
            >
              <img src={img} alt={`Dokumentasi ${i}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* ROW 2 – RIGHT */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative flex mt-8">
        <motion.div
          className="flex gap-6 px-6"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicated.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="
                shrink-0
                w-[260px] md:w-[380px]
                aspect-[16/10]
                rounded-3xl
                overflow-hidden
                shadow-[0_16px_50px_-18px_rgba(0,0,0,0.12)]
              "
            >
              <img
                src={img}
                alt={`Dokumentasi ${i}`}
                className="
                  w-full h-full object-cover
                  grayscale-[25%]
                  hover:grayscale-0
                  transition-all duration-700
                "
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
