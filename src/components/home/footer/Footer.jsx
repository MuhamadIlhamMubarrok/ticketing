import logo1 from "../../../../public/general/logo1.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

/* =====================
   MOTION VARIANTS
===================== */
const footerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Footer() {
  return (
    <footer className="pb-6">
      <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="
          max-w-7xl mx-auto
          rounded-3xl
          bg-utama
          overflow-hidden
          relative
        "
      >
        {/* Decorative Wave */}
        <div className="absolute inset-0 opacity-20 bg-motif-cover" />

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-10">
          {/* LEFT */}
          <motion.div variants={fadeUp} className="space-y-4">
            <img src={logo1} alt="Setia Event" className="h-20 w-auto" />

            <h3 className="font-heading text-start text-light text-4xl leading-snug">
              Menggapai Surga <br />
              Bersama Keluarga
            </h3>

            <p className="font-body text-start text-light text-sm opacity-90 max-w-md">
              Jl. Parikesit Raya No.35, Bantarjati, Kec. Bogor Utara,
              <br />
              Kota Bogor, Jawa Barat 16153
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div variants={fadeUp} className="flex md:justify-end items-end">
            <div className="space-y-3 text-left md:text-right">
              <p className="font-body text-light text-sm">
                Ada pertanyaan? <br />
                <span className="font-semibold">Jangan ragu hubungi kami</span>
              </p>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 200 }}
                href="https://wa.me/628111102011"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  bg-gradient-to-r
                  from-gray-200 via-gray-300 to-gray-400
                  text-secondary
                  rounded-full
                  font-body
                  font-medium
                  text-sm
                  px-5 py-3
                  shadow-md
                  hover:shadow-lg
                  transition-all
                "
              >
                <span className="text-lg">📱</span>
                0811-1102-011 (Admin)
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
