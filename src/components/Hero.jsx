import { useEffect } from "react";
import heroBg from "../assets/images/hero-bg1.jpg";

export default function Hero() {

  // Subtle parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      const heroImg = document.getElementById("hero-img");
      if (heroImg) {
        heroImg.style.transform = `scale(1.1) translateY(${window.scrollY * 0.08}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden">

      {/* ══════════════════════════════
          LEFT — COPY PANEL
      ══════════════════════════════ */}
      <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-24 bg-[#FAF7F3]">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 animate-fade-up">
          <span className="w-10 h-px bg-[#B8963E]" />
          <span className="text-[0.62rem] tracking-[0.38em] uppercase text-[#8C5230]">
            Spring / Summer 2026
          </span>
        </div>

        {/* Headline */}
        <div className="overflow-hidden mb-1">
          <h1
            className="font-light leading-[1.05] text-[#3E1F0D] animate-fade-up"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(3rem, 5.5vw, 5.8rem)" }}
          >
            Carry the
          </h1>
        </div>
        <div className="overflow-hidden mb-1">
          <h1
            className="font-light leading-[1.05] text-[#8C5230] italic animate-fade-up delay-1"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(3rem, 5.5vw, 5.8rem)" }}
          >
            weight of
          </h1>
        </div>
        <div className="overflow-hidden mb-8">
          <h1
            className="font-light leading-[1.05] text-[#3E1F0D] animate-fade-up delay-2"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(3rem, 5.5vw, 5.8rem)" }}
          >
            elegance.
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-[0.72rem] tracking-[0.22em] uppercase text-[#8A6A55] font-light border-l-2 border-[#B8963E] pl-4 leading-loose mb-10 animate-fade-up delay-3">
          For those who need no introduction.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-3 flex-wrap mb-14 animate-fade-up delay-4">
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#3E1F0D] text-[#F5EFE6] text-[0.67rem] tracking-[0.22em] uppercase hover:bg-[#6B3E26] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Shop The Collection
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a
            href="#editorial"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#3E1F0D] text-[#3E1F0D] text-[0.67rem] tracking-[0.22em] uppercase hover:bg-[#3E1F0D] hover:text-[#F5EFE6] transition-all duration-300 hover:-translate-y-0.5"
          >
            View Lookbook
          </a>
        </div>

        {/* Trust Stats */}
        <div className="flex gap-8 animate-fade-up delay-5">
          {[
            { num: "50+",  label: "Pieces This Season" },
            { num: "100%", label: "Ethically Crafted"  },
            { num: "12",   label: "Countries Shipped"  },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span
                className="text-[#3E1F0D] text-2xl font-light"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {stat.num}
              </span>
              <span className="text-[0.58rem] tracking-[0.18em] uppercase text-[#8A6A55]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-8 md:left-24 hidden md:flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-[#B8963E] to-transparent animate-scroll-pulse" />
          <span className="text-[0.52rem] tracking-[0.25em] uppercase text-[#8A6A55]">
            Scroll
          </span>
        </div>
      </div>

      {/* ══════════════════════════════
          RIGHT — IMAGE PANEL
      ══════════════════════════════ */}
      <div className="relative overflow-hidden min-h-[55vh] md:min-h-screen">

        {/* Hero Image */}
        <img
          id="hero-img"
          src={heroBg}
          alt="Celesté SS26 Collection"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: "scale(1.1)", transformOrigin: "center center" }}
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A1408]/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#FAF7F3]/5 pointer-events-none" />

        {/* ── Floating product card ── */}
        <div className="absolute bottom-10 left-6 bg-[#FAF7F3] p-5 shadow-2xl z-10 animate-fade-up delay-5 max-w-[210px]">
          <p className="text-[0.52rem] tracking-[0.28em] uppercase text-[#8A6A55] mb-1.5">
            Featured Piece
          </p>
          <p
            className="text-[#3E1F0D] text-xl font-light leading-tight"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Maison Tote
          </p>
          <p className="text-[0.6rem] tracking-[0.1em] text-[#8C5230] mt-1 mb-3">
            Full-grain leather
          </p>
          <p
            className="text-[#3E1F0D] text-lg font-light mb-3"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            ₦285,000
          </p>
          <a
            href="#"
            className="flex items-center gap-1.5 text-[0.6rem] tracking-[0.2em] uppercase text-[#3E1F0D] hover:text-[#6B3E26] transition-colors border-b border-[#3E1F0D]/25 pb-0.5 w-fit"
          >
            Shop Now →
          </a>
        </div>

        {/* ── Season label top right ── */}
        <div className="absolute top-10 right-8 z-10 text-right">
          <span className="block text-[0.55rem] tracking-[0.3em] uppercase text-[#F5EFE6]/70 mb-1">
            New Collection
          </span>
          <span
            className="text-[#F5EFE6]/90 text-5xl font-light"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            SS'26
          </span>
        </div>

        {/* ── Rotating circular badge ── */}
        <div
          className="absolute top-1/2 right-8 z-10 hidden lg:flex items-center justify-center w-24 h-24 -translate-y-1/2"
          style={{ animation: "rotateBadge 16s linear infinite" }}
        >
          <svg viewBox="0 0 100 100" className="absolute w-full h-full">
            <path
              id="circlePath"
              d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
              fill="none"
            />
            <text fill="rgba(245,239,230,0.65)" fontSize="7.2" letterSpacing="3.8">
              <textPath href="#circlePath">
                CELESTÉ · SS 2026 · LUXURY · CRAFTED ·&nbsp;
              </textPath>
            </text>
          </svg>
          <span className="text-[#F5EFE6]/80 text-xl relative z-10">✦</span>
        </div>
      </div>

      {/* ── ANIMATIONS ── */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.6); }
          50%       { opacity: 1;   transform: scaleY(1);   }
        }
        @keyframes rotateBadge {
          from { transform: translateY(-50%) rotate(0deg);   }
          to   { transform: translateY(-50%) rotate(360deg); }
        }
        .animate-fade-up      { animation: fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both; }
        .delay-1              { animation-delay: 0.12s; }
        .delay-2              { animation-delay: 0.24s; }
        .delay-3              { animation-delay: 0.38s; }
        .delay-4              { animation-delay: 0.52s; }
        .delay-5              { animation-delay: 0.68s; }
        .animate-scroll-pulse { animation: scrollPulse 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
}