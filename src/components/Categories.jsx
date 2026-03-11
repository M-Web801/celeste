import { useState } from "react";

// ─── INSTRUCTIONS ────────────────────────────────────────────────────────────
// For each category, go to unsplash.com and search the suggested term,
// download and save into src/assets/images/ with the filename shown below.
//
//  cat-bags.jpg      → search "luxury leather handbag"
//  cat-scarves.jpg   → search "silk scarf luxury"
//  cat-wallets.jpg   → search "leather wallet luxury"
//  cat-sunglasses.jpg→ search "luxury sunglasses editorial"
//  cat-jewellery.jpg → search "gold jewellery luxury"
//
// Then uncomment the imports and swap the gradient divs for <img> tags
// ─────────────────────────────────────────────────────────────────────────────

 import catBags       from "../assets/images/cat-bags.jpg";
 import catScarves    from "../assets/images/cat-scarves.jpg";
 import catWallets    from "../assets/images/cat-wallets.jpg";
 import catSunglasses from "../assets/images/cat-sunglasses.jpg";
 import catJewellery  from "../assets/images/cat-jewellery.jpg";

const filters = ["All", "Ready to Ship", "Made to Order", "Limited Edition", "Under ₦100k", "Gift Sets"];

const categories = [
  {
    name: "Bags",
    sub: "14 pieces · From ₦85,000",
    span: "large", // takes up 2 rows
    gradient: "linear-gradient(155deg, #8C5230 0%, #5A2E10 100%)",
    img: catBags,
  },
  {
    name: "Scarves",
    sub: "8 pieces · From ₦55,000",
    span: "small",
    gradient: "linear-gradient(155deg, #C9956A 0%, #9A6840 100%)",
    img: catScarves,
  },
  {
    name: "Wallets",
    sub: "10 pieces · From ₦38,000",
    span: "small",
    gradient: "linear-gradient(155deg, #E0D4C4 0%, #C0A888 100%)",
    img: catWallets,
  },
  {
    name: "Sunglasses",
    sub: "6 pieces · From ₦120,000",
    span: "small",
    gradient: "linear-gradient(155deg, #4A2810 0%, #6B3E26 100%)",
    img: catSunglasses,
  },
  {
    name: "Jewellery",
    sub: "12 pieces · From ₦28,000",
    span: "small",
    gradient: "linear-gradient(155deg, #B07048 0%, #8C5230 100%)",
    img: catJewellery,
  },
];

export default function Categories() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="bg-[#F5EFE6] px-6 md:px-16 py-20">

      {/* ── Section Header ── */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-px bg-[#B8963E]" />
          <p className="text-[0.62rem] tracking-[0.38em] uppercase text-[#8C5230]">
            Browse
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2
            className="text-[#3E1F0D] font-light leading-tight"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Every piece, <em className="text-[#8C5230]">a statement.</em>
          </h2>
          <a
            href="#"
            className="text-[0.67rem] tracking-[0.2em] uppercase text-[#6B3E26] border-b border-[#C9956A] pb-0.5 hover:text-[#3E1F0D] transition-colors w-fit"
          >
            View All Categories →
          </a>
        </div>
      </div>

      {/* ── Filter Tags (Adjoaa inspired) ── */}
      <div className="flex gap-2 flex-wrap mb-10">
        <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#8A6A55] self-center mr-1">
          Filter:
        </span>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 text-[0.62rem] tracking-[0.15em] uppercase transition-all duration-250 cursor-pointer border
              ${activeFilter === f
                ? "bg-[#3E1F0D] text-[#F5EFE6] border-[#3E1F0D]"
                : "bg-transparent text-[#8A6A55] border-[#6B3E26]/25 hover:border-[#6B3E26] hover:text-[#3E1F0D]"
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ── Category Grid ── */}
      <div
        className="grid gap-3"
        style={{
          gridTemplateColumns: "1.6fr 1fr 1fr",
          gridTemplateRows: "380px 260px",
        }}
      >
        {categories.map((cat, i) => (
          <div
            key={cat.name}
            className="relative overflow-hidden cursor-pointer group"
            style={{ gridRow: i === 0 ? "1 / 3" : "auto" }}
          >
            {/* Background — gradient placeholder OR real image */}
            {cat.img ? (
              <img
                src={cat.img}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ background: cat.gradient }}
              />
            )}

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0800]/65 via-transparent to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
              <p className="text-[0.58rem] tracking-[0.25em] uppercase text-[#F5EFE6]/65 mb-1.5">
                {cat.sub}
              </p>
              <div className="flex items-baseline gap-3">
                <h3
                  className="text-[#F5EFE6] font-light"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: i === 0 ? "2.2rem" : "1.6rem",
                  }}
                >
                  {cat.name}
                </h3>
                {/* Arrow animates on hover */}
                <span className="text-[#C9956A] text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </div>
            </div>

            {/* Top right — "Shop" badge on hover */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-[#FAF7F3] text-[#3E1F0D] text-[0.55rem] tracking-[0.2em] uppercase px-3 py-1.5">
                Shop Now
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── City social proof bar (Lonca inspired) ── */}
      <div className="mt-12 pt-8 border-t border-[#6B3E26]/12 flex flex-wrap items-center justify-center gap-4 md:gap-8">
        <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#8A6A55]">Worn in</span>
        {["Lagos", "London", "Accra", "New York", "Nairobi", "Paris", "Dubai"].map((city, i) => (
          <span key={city} className="flex items-center gap-4">
            <span className="text-[0.72rem] tracking-[0.15em] uppercase text-[#3E1F0D] font-medium">
              {city}
            </span>
            {i < 6 && <span className="w-1 h-1 rounded-full bg-[#C9956A]" />}
          </span>
        ))}
      </div>
    </section>
  );
}