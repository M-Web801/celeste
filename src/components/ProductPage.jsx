
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import prodBag1    from "../assets/images/product-bag-1.jpg";
import prodScarf1  from "../assets/images/product-scarf-1.jpg";
import prodBag2    from "../assets/images/product-bag-2.jpg";
import prodWallet1 from "../assets/images/product-wallet-1.jpg";
import prodBag3    from "../assets/images/product-bag-3.jpg";
import prodGlasses from "../assets/images/product-glasses-1.jpg";
import prodBag4    from "../assets/images/product-bag-4.jpg";
import prodJewel1  from "../assets/images/product-jewel-1.jpg";

const allProducts = [
  {
    id: 1,
    name: "Maison Tote",
    sub: "Full-grain leather · Chestnut",
    price: "₦285,000",
    category: "Bags",
    availability: "Ready to Ship",
    availColor: "text-[#6B3E26]",
    rating: 5,
    reviews: 24,
    gradient: "linear-gradient(165deg, #C9956A, #7A4418)",
    img: prodBag1,
    description: "The Maison Tote is the Celesté signature — a structured, full-grain leather tote designed for the woman who carries her world with effortless grace. Spacious enough for everything you need, refined enough for everywhere you go.",
    details: ["Full-grain chestnut leather","18k gold-plated hardware","Interior zip pocket + 2 slip pockets","Dimensions: 38cm × 28cm × 14cm","Dust bag & authenticity card included","Made to order in Lagos, Nigeria"],
    colors: ["Chestnut", "Midnight", "Cream"],
    images: [prodBag1, prodBag1, prodBag1, prodBag1],
  },
  {
    id: 2,
    name: "Éclat Silk Scarf",
    sub: "100% Mulberry Silk · Ivory",
    price: "₦95,000",
    category: "Scarves",
    availability: "Bestseller",
    availColor: "text-[#B8963E]",
    rating: 5,
    reviews: 18,
    gradient: "linear-gradient(165deg, #E2D5C5, #B09878)",
    img: prodScarf1,
    description: "Spun from the finest mulberry silk, the Éclat scarf drapes like a second skin. Whether tied at the neck, looped through a bag handle, or worn as a headscarf — it elevates everything it touches.",
    details: ["100% Grade 6A Mulberry Silk","Hand-rolled edges","Dimensions: 90cm × 90cm","Dry clean only","Gift box included","Designed in Lagos"],
    colors: ["Ivory", "Caramel", "Blush"],
    images: [prodScarf1, prodScarf1, prodScarf1, prodScarf1],
  },
  {
    id: 3,
    name: "Soir Clutch",
    sub: "Suede · Midnight Brown",
    price: "₦165,000",
    category: "Bags",
    availability: "Limited — 3 Left",
    availColor: "text-[#3E1F0D]",
    rating: 5,
    reviews: 9,
    gradient: "linear-gradient(165deg, #6B3E26, #2A1000)",
    img: prodBag2,
    description: "The Soir Clutch is an evening essential — minimal in size, maximal in impact. Cut from the softest Italian suede and finished with a sculptural gold clasp, it is the piece that makes a room pause.",
    details: ["Italian suede — midnight brown","Sculptural 18k gold-plated clasp","Interior card slot + mirror","Dimensions: 24cm × 14cm × 4cm","Detachable chain strap","Limited edition — 3 remaining"],
    colors: ["Midnight Brown", "Deep Plum", "Noir"],
    images: [prodBag2, prodBag2, prodBag2, prodBag2],
  },
  {
    id: 4,
    name: "Sable Card Holder",
    sub: "Veg-tanned leather",
    price: "₦48,000",
    category: "Wallets",
    availability: "Ready to Ship",
    availColor: "text-[#6B3E26]",
    rating: 4,
    reviews: 31,
    gradient: "linear-gradient(165deg, #A87848, #7A5030)",
    img: prodWallet1,
    description: "Small in size, serious in intention. The Sable Card Holder is vegetable-tanned by hand and designed to develop a rich patina over years of use — becoming more beautiful the longer you carry it.",
    details: ["Vegetable-tanned full-grain leather","Holds 6–8 cards + folded notes","Dimensions: 10cm × 7cm","Hand-stitched edges","Develops patina with use","Ready to ship in 2–3 days"],
    colors: ["Tan", "Chestnut", "Black"],
    images: [prodWallet1, prodWallet1, prodWallet1, prodWallet1],
  },
  {
    id: 5,
    name: "Petite Bucket",
    sub: "Drawstring · Cream leather",
    price: "₦220,000",
    category: "Bags",
    availability: "Made to Order",
    availColor: "text-[#B8963E]",
    rating: 5,
    reviews: 7,
    gradient: "linear-gradient(165deg, #D4B890, #A07848)",
    img: prodBag3,
    description: "The Petite Bucket is soft luxury personified. A relaxed drawstring silhouette in buttery cream leather, with a single adjustable strap that works as crossbody or shoulder. Understated. Irresistible.",
    details: ["Butter-soft nappa leather — cream","Adjustable leather strap","Interior suede lining","Dimensions: 22cm × 24cm","Gold-plated D-ring hardware","Made to order — 10–14 days"],
    colors: ["Cream", "Camel", "Blush"],
    images: [prodBag3, prodBag3, prodBag3, prodBag3],
  },
  {
    id: 6,
    name: "Lumière Frames",
    sub: "Acetate & gold detail",
    price: "₦175,000",
    category: "Accessories",
    availability: "Limited",
    availColor: "text-[#3E1F0D]",
    rating: 5,
    reviews: 12,
    gradient: "linear-gradient(165deg, #4A2810, #8C5230)",
    img: prodGlasses,
    description: "Handcrafted from premium Italian acetate with 18k gold-plated titanium temples, the Lumière Frames are as architectural as they are wearable. UV400 lenses. Limited to 50 pairs per season.",
    details: ["Premium Italian acetate frame","18k gold-plated titanium temples","UV400 polarised lenses","Includes leather case & cloth","Limited to 50 pairs this season","Ships in 5–7 days"],
    colors: ["Tortoise Gold", "Noir Gold", "Cream Gold"],
    images: [prodGlasses, prodGlasses, prodGlasses, prodGlasses],
  },
  {
    id: 7,
    name: "Demi Mini Bag",
    sub: "Structured leather · Tan",
    price: "₦195,000",
    category: "Bags",
    availability: "New In",
    availColor: "text-[#6B3E26]",
    rating: 5,
    reviews: 5,
    gradient: "linear-gradient(165deg, #B8906A, #6B3E26)",
    img: prodBag4,
    description: "The Demi Mini is proof that the best things come in small packages. A structured top-handle bag in vegetable-tanned tan leather, with a removable crossbody strap for versatility. Day to night, effortlessly.",
    details: ["Vegetable-tanned tan leather","Structured silhouette with top handle","Removable crossbody strap included","Dimensions: 20cm × 15cm × 8cm","Suede interior with zip pocket","New arrival — ships in 3–5 days"],
    colors: ["Tan", "Cognac", "Nude"],
    images: [prodBag4, prodBag4, prodBag4, prodBag4],
  },
  {
    id: 8,
    name: "Arc Cuff",
    sub: "18k gold-plated brass",
    price: "₦68,000",
    category: "Jewellery",
    availability: "Made to Order",
    availColor: "text-[#B8963E]",
    rating: 5,
    reviews: 15,
    gradient: "linear-gradient(165deg, #EDE0CC, #C0A078)",
    img: prodJewel1,
    description: "The Arc Cuff is a single sculptural statement — a bold arc of 18k gold-plated brass that sits at the wrist with quiet confidence. Wear alone or stack. Either way, it speaks.",
    details: ["18k gold-plated brass","Anti-tarnish coating","One size — adjustable opening","Width: 2.5cm","Comes in Celesté jewellery pouch","Made to order — 7–10 days"],
    colors: ["Gold", "Rose Gold", "Silver"],
    images: [prodJewel1, prodJewel1, prodJewel1, prodJewel1],
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map((s) => (
        <span key={s} className={`text-sm ${s <= count ? "text-[#B8963E]" : "text-[#B8963E]/20"}`}>★</span>
      ))}
    </div>
  );
}

export default function ProductPage({ onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = allProducts.find((p) => p.id === parseInt(id));

  const [activeImg, setActiveImg] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState("details");

  const related = allProducts.filter((p) => p.category === product?.category && p.id !== product?.id).slice(0, 3);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF7F3]">
        <div className="text-center">
          <p className="text-[#3E1F0D] text-2xl mb-4" style={{ fontFamily: "Cormorant Garamond, serif" }}>Product not found</p>
          <button onClick={() => navigate("/")} className="text-[0.65rem] tracking-[0.2em] uppercase text-[#6B3E26] border-b border-[#C9956A]">← Back to Home</button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F3]">

      {/* Breadcrumb */}
      <div className="px-6 md:px-16 py-4 border-b border-[#6B3E26]/08 bg-[#F5EFE6]">
        <div className="flex items-center gap-2 text-[0.6rem] tracking-[0.15em] uppercase text-[#8A6A55]">
          <button onClick={() => navigate("/")} className="hover:text-[#3E1F0D] transition-colors cursor-pointer">Home</button>
          <span className="text-[#C9956A]">✦</span>
          <button onClick={() => navigate("/")} className="hover:text-[#3E1F0D] transition-colors cursor-pointer">{product.category}</button>
          <span className="text-[#C9956A]">✦</span>
          <span className="text-[#3E1F0D]">{product.name}</span>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="px-6 md:px-16 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto">

        {/* LEFT — Image Gallery */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="hidden md:flex flex-col gap-3 flex-shrink-0">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`w-16 h-16 overflow-hidden border-2 transition-all duration-200 cursor-pointer flex-shrink-0 ${activeImg === i ? "border-[#6B3E26]" : "border-transparent hover:border-[#6B3E26]/30"}`}
              >
                <img src={img} alt={product.name + " view " + (i + 1)} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="flex-1 relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <img
              src={product.images[activeImg]}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <span className={`absolute top-4 left-4 text-[0.55rem] tracking-[0.15em] uppercase px-3 py-1.5 bg-[#FAF7F3] ${product.availColor} font-medium`}>
              {product.availability}
            </span>

            {/* Mobile arrows */}
            <div className="md:hidden absolute inset-y-0 left-2 flex items-center">
              <button onClick={() => setActiveImg((a) => (a === 0 ? product.images.length - 1 : a - 1))} className="w-8 h-8 bg-[#FAF7F3]/80 flex items-center justify-center text-[#3E1F0D] cursor-pointer">←</button>
            </div>
            <div className="md:hidden absolute inset-y-0 right-2 flex items-center">
              <button onClick={() => setActiveImg((a) => (a === product.images.length - 1 ? 0 : a + 1))} className="w-8 h-8 bg-[#FAF7F3]/80 flex items-center justify-center text-[#3E1F0D] cursor-pointer">→</button>
            </div>

            {/* Mobile dots */}
            <div className="md:hidden absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
              {product.images.map((_, i) => (
                <button key={i} onClick={() => setActiveImg(i)} className={`rounded-full transition-all duration-300 cursor-pointer ${i === activeImg ? "w-4 h-1.5 bg-[#B8963E]" : "w-1.5 h-1.5 bg-[#6B3E26]/30"}`} />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Product Info */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[0.6rem] tracking-[0.3em] uppercase text-[#8C5230]">{product.category}</span>
            <div className="flex items-center gap-2">
              <StarRating count={product.rating} />
              <span className="text-[0.6rem] text-[#8A6A55]">({product.reviews})</span>
            </div>
          </div>

          <h1 className="text-[#3E1F0D] font-light leading-tight mb-1" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            {product.name}
          </h1>
          <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#8A6A55] mb-5">{product.sub}</p>
          <p className="text-[#3E1F0D] text-3xl font-light mb-6" style={{ fontFamily: "Cormorant Garamond, serif" }}>{product.price}</p>
          <p className="text-[0.8rem] text-[#8A6A55] leading-[2] font-light mb-8 border-l-2 border-[#B8963E]/30 pl-4">{product.description}</p>

          {/* Color selector */}
          <div className="mb-6">
            <p className="text-[0.62rem] tracking-[0.22em] uppercase text-[#3E1F0D] mb-3">
              Colour — <span className="text-[#8C5230]">{product.colors[activeColor]}</span>
            </p>
            <div className="flex gap-2 flex-wrap">
              {product.colors.map((color, i) => (
                <button key={color} onClick={() => setActiveColor(i)}
                  className={`px-4 py-2 text-[0.62rem] tracking-[0.12em] uppercase transition-all duration-200 cursor-pointer border ${activeColor === i ? "border-[#3E1F0D] bg-[#3E1F0D] text-[#F5EFE6]" : "border-[#6B3E26]/20 text-[#8A6A55] hover:border-[#6B3E26] hover:text-[#3E1F0D]"}`}>
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Qty + Add to bag */}
          <div className="flex gap-3 mb-5">
            <div className="flex border border-[#6B3E26]/20">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-10 h-12 flex items-center justify-center text-[#6B3E26] hover:bg-[#F5EFE6] transition-colors cursor-pointer text-lg">−</button>
              <span className="w-10 h-12 flex items-center justify-center text-[#3E1F0D] text-sm border-x border-[#6B3E26]/20">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="w-10 h-12 flex items-center justify-center text-[#6B3E26] hover:bg-[#F5EFE6] transition-colors cursor-pointer text-lg">+</button>
            </div>
            <button onClick={handleAddToCart}
              className={`flex-1 h-12 text-[0.67rem] tracking-[0.22em] uppercase transition-all duration-300 cursor-pointer font-light ${added ? "bg-[#B8963E] text-[#FAF7F3]" : "bg-[#3E1F0D] text-[#F5EFE6] hover:bg-[#6B3E26]"}`}>
              {added ? "✦ Added to Bag" : "Add to Bag"}
            </button>
            <button className="w-12 h-12 border border-[#6B3E26]/20 flex items-center justify-center text-[#6B3E26] hover:border-[#6B3E26] hover:bg-[#F5EFE6] transition-all cursor-pointer text-lg">♡</button>
          </div>

          {/* Delivery info */}
          <div className="flex flex-col gap-2.5 mb-8 p-4 bg-[#F5EFE6] border border-[#6B3E26]/08">
            {["Free delivery on orders over ₦150,000","Free returns within 14 days","Authenticity card & dust bag included"].map((text) => (
              <div key={text} className="flex items-center gap-3">
                <span className="text-[#B8963E] text-xs flex-shrink-0">✦</span>
                <p className="text-[0.7rem] text-[#8A6A55] font-light">{text}</p>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div>
            <div className="flex border-b border-[#6B3E26]/12 mb-5">
              {["details","care","shipping"].map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2.5 text-[0.62rem] tracking-[0.2em] uppercase transition-colors cursor-pointer relative ${activeTab === tab ? "text-[#3E1F0D]" : "text-[#8A6A55] hover:text-[#3E1F0D]"}`}>
                  {tab}
                  {activeTab === tab && <span className="absolute bottom-0 left-0 right-0 h-px bg-[#B8963E]" />}
                </button>
              ))}
            </div>

            {activeTab === "details" && (
              <ul className="flex flex-col gap-2.5">
                {product.details.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-[0.72rem] text-[#8A6A55] font-light">
                    <span className="text-[#B8963E] text-[0.5rem] mt-1 flex-shrink-0">✦</span>{d}
                  </li>
                ))}
              </ul>
            )}
            {activeTab === "care" && (
              <div className="flex flex-col gap-2.5">
                {["Store in the provided dust bag when not in use","Keep away from direct sunlight and moisture","Clean with a soft dry cloth only","Do not use chemical cleaners on leather","Condition leather every 3–6 months"].map((c) => (
                  <p key={c} className="flex items-start gap-2.5 text-[0.72rem] text-[#8A6A55] font-light">
                    <span className="text-[#B8963E] text-[0.5rem] mt-1 flex-shrink-0">✦</span>{c}
                  </p>
                ))}
              </div>
            )}
            {activeTab === "shipping" && (
              <div className="flex flex-col gap-2.5">
                {["Lagos: 1–2 business days","Other Nigerian cities: 3–5 business days","UK & Europe: 7–10 business days","USA & Canada: 7–12 business days","Rest of world: 10–14 business days","Free shipping on orders over ₦150,000"].map((s) => (
                  <p key={s} className="flex items-start gap-2.5 text-[0.72rem] text-[#8A6A55] font-light">
                    <span className="text-[#B8963E] text-[0.5rem] mt-1 flex-shrink-0">✦</span>{s}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="px-6 md:px-16 py-16 bg-[#F5EFE6] border-t border-[#6B3E26]/08">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-px bg-[#B8963E]" />
            <p className="text-[0.62rem] tracking-[0.38em] uppercase text-[#8C5230]">You May Also Love</p>
          </div>
          <h3 className="text-[#3E1F0D] font-light mb-10" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
            More from <em className="text-[#8C5230]">{product.category}</em>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {related.map((p) => (
              <div key={p.id} className="group cursor-pointer" onClick={() => { navigate("/product/" + p.id); window.scrollTo(0, 0); }}>
                <div className="relative overflow-hidden mb-3" style={{ aspectRatio: "3/4" }}>
                  {p.img
                    ? <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    : <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" style={{ background: p.gradient }} />
                  }
                  <span className={`absolute top-3 left-3 text-[0.52rem] tracking-[0.15em] uppercase px-2.5 py-1 bg-[#FAF7F3] ${p.availColor}`}>{p.availability}</span>
                </div>
                <h4 className="text-[#3E1F0D] text-lg font-light group-hover:text-[#6B3E26] transition-colors" style={{ fontFamily: "Cormorant Garamond, serif" }}>{p.name}</h4>
                <p className="text-[0.6rem] tracking-[0.12em] uppercase text-[#8A6A55] mt-0.5 mb-1">{p.sub}</p>
                <p className="text-[#3E1F0D] text-lg font-light" style={{ fontFamily: "Cormorant Garamond, serif" }}>{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
