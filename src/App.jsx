import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Editorial from "./components/Editorial";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import EmailPopup from "./components/EmailPopup";
import ProductPage from "./components/ProductPage";
import CartDrawer from "./components/CartDrawer";
import CelesteChat from "./components/CelesteChat";

// ── Home page — all sections ──
function Home({ onAddToCart }) {
  return (
    <>
      <Hero />
      <Marquee />
      <Categories />
      <Products onAddToCart={onAddToCart} />
      <Editorial />
      <Testimonials />
      <Newsletter />
    </>
  );
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const handleRemove = (id) =>
    setCartItems((prev) => prev.filter((i) => i.id !== id));

  const handleUpdateQty = (id, qty) =>
    setCartItems((prev) => prev.map((i) => i.id === id ? { ...i, qty } : i));

  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F3]">
      <EmailPopup />

      <Navbar
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        onSearchOpen={() => console.log("search open")}
      />

      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/product/:id" element={<ProductPage onAddToCart={handleAddToCart} />} />
      </Routes>

      <Footer />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemove={handleRemove}
        onUpdateQty={handleUpdateQty}
      />

      <CelesteChat />
    </div>
  );
}