export default function WhatsappFloating() {
  return (
    <a
      href="https://wa.me/6281234567890?text=Assalamu%27alaikum%2C%20saya%20ingin%20bertanya%20tentang%20event%20Setia%20Bersamamu"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-3
        px-5 py-3 rounded-full
        font-body font-semibold
        text-third
        bg-gradient-to-r
        from-[var(--color-primary-01)]
        to-[var(--color-primary-02)]
        shadow-[0_20px_50px_-15px_rgba(0,0,0,0.35)]
        hover:from-[var(--color-primary-02)]
        hover:to-[var(--color-primary-01)]
        transition-all duration-300
        animate-[bounce_2.5s_infinite]
      "
    >
      {/* WhatsApp SVG */}
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-third">
        <path d="M20.52 3.48A11.82 11.82 0 0012.04 0C5.46 0 .12 5.34.12 11.94c0 2.1.54 4.14 1.56 5.94L0 24l6.3-1.62a11.9 11.9 0 005.76 1.47h.01c6.6 0 11.94-5.34 11.94-11.94a11.9 11.9 0 00-3.49-8.43zm-8.48 18.3a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.74.96.99-3.63-.24-.38a9.93 9.93 0 01-1.53-5.22c0-5.49 4.47-9.96 9.96-9.96a9.9 9.9 0 017.05 2.92 9.9 9.9 0 012.91 7.04c0 5.49-4.47 9.96-9.96 9.96zm5.46-7.47c-.3-.15-1.77-.87-2.04-.96-.27-.1-.47-.15-.66.15-.2.3-.77.96-.94 1.17-.18.2-.36.23-.66.08-.3-.15-1.26-.47-2.4-1.5-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.66-1.59-.9-2.18-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.53.08-.81.38-.28.3-1.07 1.05-1.07 2.56 0 1.5 1.1 2.96 1.26 3.17.15.2 2.16 3.3 5.24 4.62.73.32 1.3.51 1.75.65.74.24 1.41.2 1.94.12.59-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.58-.35z" />
      </svg>

      <span className="hidden sm:block">Chat WhatsApp</span>
    </a>
  );
}
