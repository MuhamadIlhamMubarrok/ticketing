import speaker1 from "../../../../public/general/speaker1.webp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto md:px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-5">
          {/* Badge */}
          <div className="flex justify-start">
            <h1 className=" inline-flex gap-2 px-4 py-1 rounded-full border border-black text-secondary text-sm font-body">✦ Setia Event Organizer</h1>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-start text-4xl sm:text-5xl lg:text-6xl leading-tight text-secondary">
            Setia Bersamamu <br />
            <span className="text-primary">Merawat Cinta</span> <br />
            <span>Sampai</span> <span className="text-primary">Surga</span>
          </h1>

          {/* Description */}
          <p className="font-body text-start text-base sm:text-lg text-secondary max-w-xl">
            Pernikahan adalah <strong>ibadah seumur hidup</strong>. Namun seiring waktu, cinta bisa melemah oleh rutinitas, tuntutan, dan luka yang tak tersampaikan.
            <br />
            <br />
            <strong>Setia Bersamamu</strong> hadir sebagai <em>couple time</em> penuh makna, untuk menguatkan kembali ikatan, menata arah pernikahan, dan menghadirkan kembali{" "}
            <span className="text-primary font-medium">sakinah dalam rumah tangga</span>.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-6">
            <a
              href="#consultation"
              className="
                font-body font-semibold
                px-6 py-3 rounded-full
                bg-gradient-to-r
                from-[var(--color-primary-01)]
                to-[var(--color-primary-02)]
                text-third
                hover:from-[var(--color-primary-02)]
                hover:to-[var(--color-primary-01)]
                transition-all duration-300
              "
            >
              Start Consultation
            </a>

            <a
              href="#explore"
              className="text-heading bg-gradient-to-r text-secondary rounded-full font-body from-gray-200 via-gray-400 to-gray-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-base text-sm  px-6 py-3 text-center leading-5"
            >
              Explore more
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Blur Background */}
            <div className="absolute inset-0 rounded-3xl bg-gold opacity-60 blur-md -z-10" />

            <img src={speaker1} alt="Family Speaker" className="w-full max-w-md lg:max-w-lg object-contain rounded-2xl relative z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
