// Products.jsx — updated with smooth scroll on "View All" and category tabs
// CHANGES from original:
//   1. "View All Products →" now smooth-scrolls to #products
//   2. Category filter tabs scroll to #products on click
//   3. Section IDs added per category for deep-linking

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import prodBag1    from "../assets/images/product-bag-1.jpg";
import prodScarf1  from "../assets/images/product-scarf-1.jpg";
import prodBag2    from "../assets/images/product-bag-2.jpg";
import prodWallet1 from "../assets/images/product-wallet-1.jpg";
import prodBag3    from "../assets/images/product-bag-3.jpg";
import prodGlasses from "../assets/images/product-glasses-1.jpg";
import prodBag4    from "../assets/images/product-bag-4.jpg";
import prodJewel1  from "../assets/images/product-jewel-1.jpg";

const filterTabs = ["All", "Bags", "Scarves", "Wallets", "Accessories", "Jewellery"];

const products = [
  { id: 1, name: "Maison Tote",       sub: "Full-grain leather · Chestnut",  price: "₦285,000", category: "Bags",        availability: "Ready to Ship",    availColor: "bg-[#6B3E26]/10 text-[#6B3E26]",  rating: 5, reviews: 24, gradient: "linear-gradient(165deg, #C9956A, #7A4418)", img: prodBag1    },
  { id: 2, name: "Éclat Silk Scarf",  sub: "100% Mulberry Silk · Ivory",    price: "₦95,000",  category: "Scarves",     availability: "Bestseller",        availColor: "bg-[#B8963E]/10 text-[#B8963E]",  rating: 5, reviews: 18, gradient: "linear-gradient(165deg, #E2D5C5, #B09878)", img: prodScarf1  },
  { id: 3, name: "Soir Clutch",       sub: "Suede · Midnight Brown",        price: "₦165,000", category: "Bags",        availability: "Limited — 3 Left",  availColor: "bg-[#3E1F0D]/10 text-[#3E1F0D]",  rating: 5, reviews: 9,  gradient: "linear-gradient(165deg, #6B3E26, #2A1000)", img: prodBag2    },
  { id: 4, name: "Sable Card Holder", sub: "Veg-tanned leather",            price: "₦48,000",  category: "Wallets",     availability: "Ready to Ship",    availColor: "bg-[#6B3E26]/10 text-[#6B3E26]",  rating: 4, reviews: 31, gradient: "linear-gradient(165deg, #A87848, #7A5030)", img: prodWallet1 },
  { id: 5, name: "Petite Bucket",     sub: "Drawstring · Cream leather",    price: "₦220,000", category: "Bags",        availability: "Made to Order",     availColor: "bg-[#B8963E]/10 text-[#B8963E]",  rating: 5, reviews: 7,  gradient: "linear-gradient(165deg, #D4B890, #A07848)", img: prodBag3    },
  { id: 6, name: "Lumière Frames",    sub: "Acetate & gold detail",         price: "₦175,000", category: "Accessories", availability: "Limited",           availColor: "bg-[#3E1F0D]/10 text-[#3E1F0D]",  rating: 5, reviews: 12, gradient: "linear-gradient(165deg, #4A2810, #8C5230)", img: prodGlasses },
  { id: 7, name: "Demi Mini Bag",     sub: "Structured leather · Tan",      price: "₦195,000", category: "Bags",        availability: "New In",           availColor: "bg-[#6B3E26]/10 text-[#6B3E26]",  rating: 5, reviews: 5,  gradient: "linear-gradient(165deg, #B8906A, #6B3E26)", img: prodBag4    },
  { id: 8, name: "Arc Cuff",          sub: "18k gold-plated brass",         price: "₦68,000",  category: "Jewellery",   availability: "Made to Order",     availColor: "bg-[#B8963E]/10 text-[#B8963E]",  rating: 5, reviews: 15, gradient: "linear-gradient(165deg, #EDE0CC, #C0A078)", img: prodJewel1  },
];

// ─── Smooth scroll helper ───────────────────────────────────────────────────
function scrollToSection(id, offset = 80) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map((s) => (
        <span key={s} className={`text-[0.65rem] ${s <= count ? "text-[#B8963E]" : "text-[#C9956A]/30"}`}>★</span>
      ))}
    </div>
  );
}

export default function Products({ onAddToCart }) {
  const [activeTab, setActiveTab] = useState("All");
  const [wishlist, setWishlist]   = useState([]);
  const navigate = useNavigate();

  const filtered = activeTab === "All"
    ? products
    : products.filter((p) => p.category === activeTab);

  const toggleWishlist = (e, id) => {
    e.stopPropagation();
    setWishlist((prev) => prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]);
  };

  const handleQuickAdd = (e, product) => {
    e.stopPropagation();
    if (onAddToCart) onAddToCart(product);
  };

  const goToProduct = (id) => {
    navigate(`/product/${id}`);
    window.scrollTo(0, 0);
  };

  // ── Tab click: set filter AND scroll to grid ──
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    scrollToSection("products-grid", 100);
  };

  return (
    <section id="products" className="bg-[#FAF7F3] px-6 md:px-16 py-20">

      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-px bg-[#B8963E]" />
            <p className="text-[0.62rem] tracking-[0.38em] uppercase text-[#8C5230]">Featured</p>
          </div>
          <h2
            className="text-[#3E1F0D] font-light leading-tight"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            New <em className="text-[#8C5230]">Arrivals</em>
          </h2>
        </div>

        {/* ── "View All" → smooth scroll to #products ── */}
        <button
          onClick={() => scrollToSection("products")}
          className="text-[0.67rem] tracking-[0.2em] uppercase text-[#6B3E26] border-b border-[#C9956A] pb-0.5 hover:text-[#3E1F0D] transition-colors w-fit cursor-pointer bg-transparent"
        >
          View All Products →
        </button>
      </div>

      {/* ── Filter Tabs ── */}
      <div className="flex gap-2 flex-wrap mb-10">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-5 py-2 text-[0.62rem] tracking-[0.15em] uppercase transition-all duration-250 cursor-pointer border
              ${activeTab === tab
                ? "bg-[#3E1F0D] text-[#F5EFE6] border-[#3E1F0D]"
                : "bg-transparent text-[#8A6A55] border-[#6B3E26]/25 hover:border-[#6B3E26] hover:text-[#3E1F0D]"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ── Product Grid — ID for scroll targeting ── */}
      <div id="products-grid" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer flex flex-col"
            onClick={() => goToProduct(product.id)}
          >
            <div className="relative overflow-hidden mb-3" style={{ aspectRatio: "3/4" }}>
              {product.img ? (
                <img
                  src={product.img}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" style={{ background: product.gradient }} />
              )}
              <span className={`absolute top-3 left-3 text-[0.52rem] tracking-[0.15em] uppercase px-2.5 py-1 font-medium ${product.availColor}`}>
                {product.availability}
              </span>
              <button
                onClick={(e) => toggleWishlist(e, product.id)}
                className="absolute top-3 right-3 w-8 h-8 bg-[#FAF7F3]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300"
              >
                <span className={`text-base ${wishlist.includes(product.id) ? "text-[#6B3E26]" : "text-[#6B3E26]/50"}`}>
                  {wishlist.includes(product.id) ? "♥" : "♡"}
                </span>
              </button>
              <button
                onClick={(e) => handleQuickAdd(e, product)}
                className="absolute bottom-0 left-0 right-0 bg-[#3E1F0D]/90 text-[#F5EFE6] text-[0.6rem] tracking-[0.22em] uppercase py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-[#6B3E26]"
              >
                Quick Add to Bag
              </button>
            </div>

            <div className="flex flex-col flex-1">
              <h3 className="text-[#3E1F0D] text-[1.05rem] font-medium leading-tight mb-0.5 group-hover:text-[#6B3E26] transition-colors" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                {product.name}
              </h3>
              <p className="text-[0.6rem] tracking-[0.12em] uppercase text-[#8A6A55] mb-2">{product.sub}</p>
              <div className="flex items-center gap-2 mb-2">
                <StarRating count={product.rating} />
                <span className="text-[0.58rem] text-[#8A6A55]">({product.reviews})</span>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[#3E1F0D] text-lg font-light" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  {product.price}
                </span>
                <span className="text-[0.58rem] tracking-[0.18em] uppercase text-[#6B3E26] border-b border-[#C9956A]/50 pb-0.5">
                  View →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Load More ── */}
      <div className="flex justify-center mt-14">
        <button className="px-12 py-3.5 border border-[#3E1F0D] text-[#3E1F0D] text-[0.67rem] tracking-[0.25em] uppercase hover:bg-[#3E1F0D] hover:text-[#F5EFE6] transition-all duration-300 cursor-pointer">
          Load More Products
        </button>
      </div>
    </section>
  );
}