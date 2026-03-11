import logo from "../assets/images/logo.jpg";

const footerLinks = [
  {
    title: "Shop",
    links: ["New Arrivals", "Bags", "Scarves", "Wallets", "Accessories", "Jewellery", "Gift Sets"],
  },
  {
    title: "Collections",
    links: ["SS 2026", "FW 2025", "The Lookbook", "Bestsellers", "Limited Edition"],
  },
  {
    title: "About",
    links: ["Our Story", "Craftsmanship", "Sustainability", "Care Guide", "Press"],
  },
  {
    title: "Help",
    links: ["Contact Us", "Shipping & Returns", "Size Guide", "FAQ", "Track Order"],
  },
];

const socials = [
  {
    label: "IG",
    full: "Instagram",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "TK",
    full: "TikTok",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
      </svg>
    ),
  },
  {
    label: "PT",
    full: "Pinterest",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.27-5.38 1.27-5.38s-.32-.65-.32-1.61c0-1.51.88-2.64 1.97-2.64.93 0 1.38.7 1.38 1.54 0 .94-.6 2.34-.91 3.64-.26 1.09.54 1.97 1.6 1.97 1.92 0 3.2-2.46 3.2-5.38 0-2.22-1.49-3.88-4.19-3.88-3.06 0-4.95 2.29-4.95 4.84 0 .88.26 1.5.66 1.98.18.22.21.3.14.55-.07.27-.21.9-.28 1.15-.09.35-.36.47-.66.34-1.86-.76-2.73-2.8-2.73-5.1 0-3.8 3.21-8.35 9.58-8.35 5.12 0 8.49 3.71 8.49 7.7 0 5.29-2.93 9.24-7.24 9.24-1.45 0-2.82-.78-3.29-1.67l-.92 3.56c-.3 1.1-.95 2.2-1.54 3.06.99.3 2.04.46 3.12.46 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: "X",
    full: "X / Twitter",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#280E04]">

      {/* ── MAIN FOOTER ── */}
      <div className="px-6 md:px-16 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-14">

          {/* Brand col — spans 2 */}
          <div className="col-span-2">
            {/* Logo */}
            <a href="/" className="inline-block mb-4 group">
              <img
                src={logo}
                alt="Celesté"
                className="h-16 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                style={{ filter: "brightness(0.9)" }}
              />
            </a>

            <p
              className="text-[0.62rem] tracking-[0.2em] uppercase text-[#B8963E] mb-3 font-light italic"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              For those who need no introduction.
            </p>

            <p className="text-[0.73rem] text-[#F5EFE6]/35 leading-[1.95] font-light max-w-[240px] mb-6">
              A luxury accessories house rooted in Lagos. Crafted for the quietly
              powerful woman who knows exactly who she is.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.full}
                  className="w-9 h-9 border border-[#F5EFE6]/10 flex items-center justify-center text-[#F5EFE6]/35 hover:border-[#B8963E] hover:text-[#B8963E] transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title} className="col-span-1">
              <p className="text-[0.58rem] tracking-[0.3em] uppercase text-[#B8963E] mb-4">
                {col.title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[0.72rem] text-[#F5EFE6]/38 hover:text-[#F5EFE6]/80 transition-colors duration-200 tracking-wide font-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#F5EFE6]/08 to-transparent mb-8" />

        {/* ── Bottom row ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Copyright */}
          <p className="text-[0.6rem] text-[#F5EFE6]/22 tracking-[0.1em] order-3 md:order-1">
            © 2026 Celesté. All rights reserved. Made with love in Lagos, Nigeria.
          </p>

          {/* Payment chips */}
          <div className="flex items-center gap-2 order-2">
            {["VISA", "Mastercard", "Paystack", "Flutterwave", "Verve"].map((p) => (
              <span
                key={p}
                className="px-2.5 py-1 border border-[#F5EFE6]/08 text-[0.5rem] tracking-[0.1em] text-[#F5EFE6]/22 uppercase"
              >
                {p}
              </span>
            ))}
          </div>

          {/* Legal links */}
          <div className="flex gap-5 order-1 md:order-3">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[0.58rem] text-[#F5EFE6]/22 hover:text-[#F5EFE6]/55 transition-colors tracking-wide"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Final brand watermark ── */}
      <div className="border-t border-[#F5EFE6]/04 py-4 text-center overflow-hidden">
        <p
          className="text-[#F5EFE6]/04 font-light select-none whitespace-nowrap"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(3rem, 10vw, 8rem)",
            letterSpacing: "0.15em",
          }}
        >
          CELESTÉ
        </p>
      </div>
    </footer>
  );
}