// ─── INSTRUCTIONS ────────────────────────────────────────────────────────────
// Save these into src/assets/images/ then uncomment imports + swap divs:
//  editorial-1.jpg → unsplash: "luxury bag editorial dark moody"
//  editorial-2.jpg → unsplash: "woman luxury accessories elegant"
// ─────────────────────────────────────────────────────────────────────────────

import editorial1 from "../assets/images/editorial-1.jpg";
 import editorial2 from "../assets/images/editorial-2.jpg";

// ── Refined SVG icons — thin stroke, luxury feel ──
const IconNeedle = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B8963E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/>
    <line x1="16" y1="8" x2="2" y2="22"/>
    <line x1="17.5" y1="15" x2="9" y2="15"/>
  </svg>
);

const IconDiamond = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B8963E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
    <line x1="12" y1="2" x2="12" y2="22"/>
    <path d="M2 8.5h20"/>
  </svg>
);

const IconLeaf = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B8963E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

const pillars = [
  {
    Icon: IconNeedle,
    title: "Handcrafted by Artisans",
    desc: "Every Celesté piece is made by hand by skilled craftspeople who have spent decades perfecting their art. No shortcuts. Ever.",
  },
  {
    Icon: IconDiamond,
    title: "African Excellence",
    desc: "Proudly rooted in Lagos. We celebrate African craftsmanship and bring it to the global stage, one thoughtfully designed piece at a time.",
  },
  {
    Icon: IconLeaf,
    title: "Built to Last",
    desc: "We use only full-grain leather, mulberry silk, and responsibly sourced materials — designed to outlast trends and grow more beautiful with time.",
  },
];

export default function Editorial() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          SECTION 1 — EDITORIAL (dark, image + copy)
      ══════════════════════════════════════════════ */}
      <section
        id="editorial"
        className="bg-[#3E1F0D] px-6 md:px-16 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
      >
        {/* ── LEFT — Layered image cards ── */}
        <div className="relative h-[480px] md:h-[580px] order-2 md:order-1">

          {/* Main large card */}
          <div className="absolute top-0 left-0 w-[65%] h-[78%] overflow-hidden border border-[#F5EFE6]/08">
            { <img src={editorial1} alt="Celesté Editorial" className="w-full h-full object-cover" /> }
            <div
              className="w-full h-full"
              style={{ background: "linear-gradient(155deg, #8C5230 0%, #3E1F0D 100%)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1A0800]/80 to-transparent">
              <p className="text-[0.55rem] tracking-[0.25em] uppercase text-[#F5EFE6]/60">
                The Maison Edit — SS 26
              </p>
            </div>
          </div>

          {/* Smaller overlapping card */}
          <div className="absolute bottom-0 right-0 w-[55%] h-[55%] overflow-hidden border border-[#F5EFE6]/08">
            { <img src={editorial2} alt="Celesté Lookbook" className="w-full h-full object-cover" /> }
             { <img src={editorial1} alt="Celesté Lookbook" className="w-full h-full object-cover" /> }
            <div
              className="w-full h-full"
              style={{ background: "linear-gradient(155deg, #C9956A 0%, #8C5230 100%)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1A0800]/80 to-transparent">
              <p className="text-[0.55rem] tracking-[0.25em] uppercase text-[#F5EFE6]/60">
                Éclat Silk Series
              </p>
            </div>
          </div>

          {/* Floating tag */}
          <div className="absolute top-[40%] right-[28%] bg-[#FAF7F3] px-4 py-3 shadow-2xl z-10">
            <p className="text-[0.52rem] tracking-[0.22em] uppercase text-[#8A6A55] mb-0.5">
              Crafted in
            </p>
            <p
              className="text-[#3E1F0D] text-base font-light"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Lagos, Nigeria ✦
            </p>
          </div>

          {/* Decorative corner lines */}
          <div className="absolute top-4 right-4 w-10 h-10 border-t border-r border-[#B8963E]/30" />
          <div className="absolute bottom-4 left-4 w-10 h-10 border-b border-l border-[#B8963E]/30" />
        </div>

        {/* ── RIGHT — Copy ── */}
        <div className="order-1 md:order-2">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-[#B8963E]" />
            <p className="text-[0.62rem] tracking-[0.38em] uppercase text-[#C9956A]">
              The Celesté Story
            </p>
          </div>

          <h2
            className="text-[#F5EFE6] font-light leading-tight mb-5"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Crafted for <em className="text-[#C9956A]">the quietly</em> powerful.
          </h2>

          <p className="text-[#F5EFE6]/55 text-sm leading-[2] font-light mb-8 max-w-md">
            Celesté was born from a belief that true luxury whispers. Each piece
            is designed for a woman who walks into a room and commands attention
            without saying a word — and whose accessories are simply a reflection
            of who she already is.
          </p>

          {/* Feature pillars — now with SVG icons */}
          <div className="flex flex-col gap-4 mb-10">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="flex items-start gap-4 p-4 border-l-2 border-[#B8963E]/40 bg-[#F5EFE6]/03 hover:bg-[#F5EFE6]/05 hover:border-[#B8963E] transition-all duration-300 group"
              >
                {/* SVG icon in a refined gold circle */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#B8963E]/40 flex items-center justify-center group-hover:border-[#B8963E] transition-colors duration-300 mt-0.5">
                  <p.Icon />
                </div>
                <div>
                  <p className="text-[0.68rem] tracking-[0.15em] uppercase text-[#F5EFE6] mb-1 font-medium">
                    {p.title}
                  </p>
                  <p className="text-[0.73rem] text-[#F5EFE6]/45 leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#F5EFE6]/25 text-[#F5EFE6] text-[0.67rem] tracking-[0.22em] uppercase hover:bg-[#F5EFE6] hover:text-[#3E1F0D] transition-all duration-300"
          >
            Read Our Story →
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2 — BRAND STATS STRIP
      ══════════════════════════════════════════════ */}
      <section className="bg-[#2A1000] px-6 md:px-16 py-12 border-t border-[#F5EFE6]/05">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { num: "8+",   label: "Years of Craft",    detail: "Est. 2018, Lagos"    },
            { num: "50+",  label: "Pieces Per Season", detail: "Carefully curated"   },
            { num: "100%", label: "Ethically Sourced", detail: "No compromises"      },
            { num: "12",   label: "Countries Shipped", detail: "Lagos to the world"  },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-1 group">
              <span
                className="text-[#F5EFE6] font-light text-4xl md:text-5xl group-hover:text-[#C9956A] transition-colors duration-300"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {stat.num}
              </span>
              <span className="text-[0.62rem] tracking-[0.22em] uppercase text-[#C9956A] mt-1">
                {stat.label}
              </span>
              <span className="text-[0.58rem] text-[#F5EFE6]/25 tracking-wide">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3 — WHY CELESTÉ (cream, 3 cards)
      ══════════════════════════════════════════════ */}
      <section className="bg-[#F5EFE6] px-6 md:px-16 py-20">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-px bg-[#B8963E]" />
          <p className="text-[0.62rem] tracking-[0.38em] uppercase text-[#8C5230]">
            Why Celesté
          </p>
        </div>
        <h2
          className="text-[#3E1F0D] font-light leading-tight mb-12"
          style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
        >
          The <em className="text-[#8C5230]">promise</em> behind every piece.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              number: "01",
              title: "Authentically Crafted",
              body: "Every bag, scarf, and accessory is conceived, designed, and produced under one roof — from initial sketch to final stitch. No shortcuts taken.",
            },
            {
              number: "02",
              title: "African Excellence",
              body: "Celesté is proudly rooted in Lagos. We celebrate African craftsmanship and bring it to the global stage, one thoughtfully designed piece at a time.",
            },
            {
              number: "03",
              title: "Built to Last",
              body: "We use only full-grain leather, mulberry silk, and responsibly sourced materials — designed to outlast trends and grow more beautiful with time.",
            },
          ].map((card) => (
            <div
              key={card.number}
              className="group p-8 bg-[#FAF7F3] border border-[#6B3E26]/08 hover:border-[#6B3E26]/25 relative overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Watermark number */}
              <span
                className="absolute top-4 right-6 text-7xl font-light text-[#6B3E26]/05 group-hover:text-[#6B3E26]/08 transition-colors select-none"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {card.number}
              </span>

              <div className="w-8 h-px bg-[#B8963E] mb-6" />

              <h3
                className="text-[#3E1F0D] text-xl font-medium mb-3"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {card.title}
              </h3>
              <p className="text-[0.76rem] text-[#8A6A55] leading-[1.95] font-light">
                {card.body}
              </p>

              {/* Bottom gold line grows on hover */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#B8963E] to-[#C9956A] w-0 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}