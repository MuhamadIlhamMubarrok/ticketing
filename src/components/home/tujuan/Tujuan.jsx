export default function Tujuan() {
  return (
    <section className="relative py-20 px-6 font-body overflow-hidden">
      {/* BACKGROUND BLUR */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[480px] h-[480px] bg-primary/25 blur-[160px] rounded-full" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* BADGE */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center px-5 py-1.5 rounded-full border border-secondary/30 text-secondary text-xs tracking-widest font-medium">✦ Tujuan Setia Event</span>
        </div>

        {/* TITLE */}
        <h2 className="font-heading text-3xl md:text-5xl text-secondary font-bold leading-tight mb-8">
          Bukan Sekadar Event <br />
          <span className="text-primary">Tapi Perjalanan Hati</span>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-secondary/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          Setia Bersamamu hadir untuk pasangan yang ingin kembali menemukan makna pernikahan. Menguatkan cinta, menyembuhkan luka, dan menata kembali arah rumah tangga agar bernilai ibadah hingga surga.
        </p>

        {/* POINTS */}
        <div className="space-y-5 max-w-3xl mx-auto">
          <div className="bg-utama backdrop-blur-sm px-10 py-12 rounded-3xl">
            <h3 className="font-heading text-xl md:text-2xl font-semibold mb-4 text-light">Merawat Cinta yang Mulai Melemah</h3>
            <p className="text-third leading-relaxed">Mengisi kembali energi cinta yang terkikis oleh rutinitas, tuntutan hidup, dan luka yang tak tersampaikan dalam rumah tangga.</p>
          </div>

          <div className="bg-utama backdrop-blur-sm px-10 py-12 rounded-3xl">
            <h3 className="font-heading text-xl md:text-2xl font-semibold mb-4 text-light">Menata Arah Pernikahan</h3>
            <p className="text-third leading-relaxed">Membantu pasangan menemukan kembali visi, peran, dan tujuan pernikahan sesuai nilai Qurani.</p>
          </div>

          <div className="bg-utama backdrop-blur-sm px-10 py-12 rounded-3xl">
            <h3 className="font-heading text-xl md:text-2xl font-semibold mb-4 text-light">Menggapai Surga Bersama</h3>
            <p className="text-third leading-relaxed">Membimbing keluarga agar pernikahan tidak hanya bahagia di dunia, tetapi juga bernilai ibadah yang mengantarkan ke surga.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="#register"
            className="
              inline-flex items-center justify-center
              px-10 py-4 rounded-full
              font-semibold
              bg-gradient-to-r
              from-[var(--color-primary-01)]
              to-[var(--color-primary-02)]
              text-third
              hover:from-[var(--color-primary-02)]
              hover:to-[var(--color-primary-01)]
              transition-all duration-300
            "
          >
            Ikuti Program Ini
          </a>
        </div>
      </div>
    </section>
  );
}
