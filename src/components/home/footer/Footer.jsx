import logo1 from "../../../../public/general/logo1.png";
export default function Footer() {
  return (
    <footer className="pb-6">
      <div
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

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-10">
          {/* LEFT */}
          <div className="space-y-4">
            <img src={logo1} alt="Setia Event" className="h-20 w-auto" />

            <h3 className="font-heading text-start text-light text-4xl leading-snug">
              Menggapai Surga <br />
              Bersama Keluarga
            </h3>

            <p className="font-body text-start text-light text-sm opacity-90 max-w-md">
              Jl. Parikesit Raya No.35, Bantarjati, Kec. Bogor Utara, <br />
              Kota Bogor, Jawa Barat 16153
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex md:justify-end items-end">
            <div className="space-y-3 text-left md:text-right">
              <p className="font-body text-light text-sm">
                Ada pertanyaan? <br />
                <span className="font-semibold">Jangan ragu hubungi kami</span>
              </p>

              <a
                href="https://wa.me/628111102011"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-heading bg-gradient-to-r text-secondary rounded-full font-body from-gray-200 via-gray-400 to-gray-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5
                "
              >
                <span>📱</span>
                0811-1102-011 (Admin)
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
