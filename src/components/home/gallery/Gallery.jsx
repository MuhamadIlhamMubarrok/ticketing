import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=600&q=80",
    "https://images.unsplash.com/photo-1511446765105-385f9f63c18c?w=600&q=80",
    "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&q=80",
    "https://images.unsplash.com/photo-1516589174184-c68526614488?w=600&q=80",
  ];

  const duplicated = [...images, ...images];

  return (
    <section className="relative py-10 overflow-hidden font-body">
      {/* soft blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-primary/20 blur-[180px] rounded-full" />

      {/* HEADER */}
      <div className="relative text-center mb-20 px-6">
        <div className="flex justify-center mb-6">
          <span className="inline-flex px-5 py-1.5 rounded-full border border-secondary/30 text-secondary text-xs tracking-widest">✦ Galeri Kegiatan</span>
        </div>

        <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary leading-tight">
          Momen yang Menguatkan <br />
          <span className="text-primary">Ikatan Keluarga</span>
        </h2>
      </div>

      {/* ROW 1 */}
      <div className="relative flex">
        <motion.div
          className="flex gap-6 px-6"
          animate={{ x: [0, -1800] }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicated.map((img, i) => (
            <div key={i} className="shrink-0 w-[280px] md:w-[420px] aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
              <img src={img} alt={`Dokumentasi ${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ROW 2 */}
      <div className="relative flex mt-8">
        <motion.div
          className="flex gap-6 px-6"
          animate={{ x: [-1800, 0] }}
          transition={{
            duration: 55,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicated.map((img, i) => (
            <div key={i} className="shrink-0 w-[260px] md:w-[380px] aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_16px_50px_-18px_rgba(0,0,0,0.12)]">
              <img src={img} alt={`Dokumentasi ${i}`} className="w-full h-full object-cover grayscale-[25%] hover:grayscale-0 transition-all duration-700" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
