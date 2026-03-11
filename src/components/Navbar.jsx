import { useState, useEffect } from "react";
import logo from "../assets/images/logo.jpg";

const navLinks = [
  {
    label: "Collections",
    dropdown: {
      col1: { title: "By Season", links: ["Spring / Summer 26", "Fall / Winter 25", "Resort 26"] },
      col2: { title: "By Availability", links: ["Ready to Ship", "Made to Order", "Limited Edition", "Pre-Order"] },
      col3: { title: "Curated", links: ["Bestsellers", "New Arrivals", "Gift Edit", "The Lookbook"] },
    },
  },
  {
    label: "Bags",
    dropdown: {
      col1: { title: "By Style", links: ["Totes", "Mini Bags", "Clutches", "Bucket Bags", "Belt Bags", "Weekenders"] },
      col2: { title: "By Material", links: ["Full-Grain Leather", "Suede", "Woven", "Exotic Skins"] },
      col3: { title: "By Price", links: ["Under ₦100,000", "₦100k – ₦250k", "₦250k +", "View All Bags"] },
    },
  },
  {
    label: "Scarves",
    dropdown: {
      col1: { title: "By Type", links: ["Silk Twill", "Cashmere Blend", "Printed Silk", "Shawls"] },
      col2: { title: "By Print", links: ["Abstract", "Botanical", "Heritage", "Solid"] },
      col3: { title: "Shop", links: ["New In Scarves", "Bestsellers", "Gift Sets"] },
    },
  },
  {
    label: "Accessories",
    dropdown: {
      col1: { title: "Category", links: ["Wallets & Card Holders", "Sunglasses", "Jewellery", "Belts"] },
      col2: { title: "Material", links: ["Gold-Plated", "Sterling Silver", "Leather", "Acetate"] },
      col3: { title: "Occasion", links: ["Everyday Luxury", "Evening & Events", "Corporate", "Gift Sets"] },
    },
  },
  { label: "About", dropdown: null },
];

export default function Navbar({ onCartOpen, cartCount = 0, onSearchOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── ANNOUNCEMENT BAR ── */}
      <div className="bg-[#3E1F0D] text-[#EDE3D6] text-[0.62rem] tracking-[0.25em] uppercase text-center py-2.5 px-4 flex items-center justify-center gap-4 flex-wrap">
        <span>✦ New SS26 Collection Now Live</span>
        <span className="opacity-40 hidden sm:inline">|</span>
        <span className="hidden sm:inline">
          Free delivery on orders over ₦150,000 &nbsp;
          <a
            href="#"
            className="text-[#C9956A] border-b border-[#C9956A] hover:opacity-80 transition-opacity"
          >
            Shop Now →
          </a>
        </span>
        <span className="opacity-40 hidden md:inline">|</span>
        <span className="hidden md:inline">✦ Made to Order · Delivered in 10–14 Days</span>
      </div>

      {/* ── MAIN NAV ── */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 border-b border-[#6B3E26]/10 ${
          scrolled
            ? "bg-[#F5EFE6]/95 backdrop-blur-md shadow-sm"
            : "bg-[#F5EFE6]"
        }`}
      >
        {/* ── TOP ROW ── */}
        <div className="flex items-center justify-between px-6 md:px-16 py-1">

          {/* LOGO — cream bg on logo matches nav bg perfectly */}
          <a
            href="/"
            className="flex items-center select-none group flex-shrink-0"
          >
            <img
              src={logo}
              alt="Celesté"
              className="h-20 md:h-24 w-auto object-contain transition-all duration-300 group-hover:scale-[1.02]"
            />
          </a>

          {/* ── RIGHT ICONS ── */}
          <div className="flex items-center gap-4 md:gap-6">

            {/* Search */}
            <button
              onClick={onSearchOpen}
              className="hidden sm:flex items-center gap-1.5 text-[#6B3E26] hover:text-[#3E1F0D] transition-colors text-[0.65rem] tracking-[0.18em] uppercase cursor-pointer group"
            >
              <svg
                className="w-[17px] h-[17px] group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <span className="hidden md:inline">Search</span>
            </button>

            {/* Wishlist */}
            <button className="hidden sm:flex items-center gap-1.5 text-[#6B3E26] hover:text-[#3E1F0D] transition-colors text-[0.65rem] tracking-[0.18em] uppercase cursor-pointer group">
              <svg
                className="w-[17px] h-[17px] group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span className="hidden md:inline">Wishlist</span>
            </button>

            {/* Cart / Bag */}
            <button
              onClick={onCartOpen}
              className="flex items-center gap-1.5 text-[#6B3E26] hover:text-[#3E1F0D] transition-colors text-[0.65rem] tracking-[0.18em] uppercase cursor-pointer relative group"
            >
              <svg
                className="w-[17px] h-[17px] group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <span className="hidden md:inline">Bag</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#3E1F0D] text-[#F5EFE6] text-[0.48rem] w-4 h-4 rounded-full flex items-center justify-center font-medium leading-none">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col justify-center gap-[5px] cursor-pointer p-1 ml-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-px bg-[#3E1F0D] transition-all duration-300 origin-center ${
                  mobileOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-[#3E1F0D] transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-[#3E1F0D] transition-all duration-300 origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* ── MEGA MENU LINK ROW (desktop) ── */}
        <div className="hidden md:flex items-center justify-center gap-10 px-16 py-2.5 border-t border-[#6B3E26]/10">
          {navLinks.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`text-[0.67rem] tracking-[0.22em] uppercase font-normal transition-colors duration-200 pb-1 relative cursor-pointer ${
                  activeDropdown === item.label
                    ? "text-[#3E1F0D]"
                    : "text-[#6B3E26] hover:text-[#3E1F0D]"
                }`}
              >
                {item.label}
                {/* animated underline */}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-[#B8963E] transition-all duration-300 ${
                    activeDropdown === item.label ? "w-full" : "w-0"
                  }`}
                />
              </button>

              {/* ── DROPDOWN PANEL ── */}
              {item.dropdown && (
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-4
                    bg-[#FAF7F3] border border-[#6B3E26]/12
                    grid grid-cols-3 gap-7 p-7 w-[500px] z-50
                    shadow-[0_20px_60px_rgba(62,31,13,0.12)]
                    transition-all duration-200
                    ${
                      activeDropdown === item.label
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-3 pointer-events-none"
                    }`}
                >
                  {/* top border accent */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#B8963E]/50 to-transparent" />

                  {[item.dropdown.col1, item.dropdown.col2, item.dropdown.col3].map(
                    (col) => (
                      <div key={col.title}>
                        <p className="text-[0.58rem] tracking-[0.3em] uppercase text-[#8C5230] mb-3 pb-2 border-b border-[#6B3E26]/12">
                          {col.title}
                        </p>
                        <ul className="flex flex-col gap-2.5">
                          {col.links.map((link) => (
                            <li key={link}>
                              <a
                                href="#"
                                className="text-[0.73rem] text-[#2A1408] hover:text-[#6B3E26] transition-colors flex items-center gap-2 group"
                              >
                                <span className="text-[#B8963E] text-[0.5rem] group-hover:translate-x-0.5 transition-transform duration-200">
                                  ✦
                                </span>
                                {link}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          ))}

          {/* New In — highlighted */}
          <a
            href="#"
            className="text-[0.67rem] tracking-[0.22em] uppercase text-[#B8963E] font-medium hover:text-[#8C5230] transition-colors cursor-pointer"
          >
            New In ✦
          </a>
        </div>

        
        {/* ── MOBILE MENU DRAWER ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-6 pb-8 pt-3 gap-1 border-t border-[#6B3E26]/10 bg-[#F5EFE6]">
            {navLinks.map((item, i) => (
              <a
                key={item.label}
                href="#"
                className="text-[0.78rem] tracking-[0.22em] uppercase text-[#2A1408] hover:text-[#6B3E26] transition-colors py-3 border-b border-[#6B3E26]/08 flex items-center justify-between"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {item.label}
                {item.dropdown && (
                  <span className="text-[#C9956A] text-xs">→</span>
                )}
              </a>
            ))}
            <a
              href="#"
              className="text-[0.78rem] tracking-[0.22em] uppercase text-[#B8963E] font-medium mt-3"
            >
              New In ✦
            </a>
            {/* Mobile search */}
            <div className="mt-4 flex border border-[#6B3E26]/25">
              <input
                type="text"
                placeholder="Search Celesté..."
                className="flex-1 px-4 py-2.5 bg-transparent text-[0.75rem] text-[#2A1408] placeholder-[#8A6A55]/50 outline-none tracking-wide"
              />
              <button className="px-3 text-[#6B3E26]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}