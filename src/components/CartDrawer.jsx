import { useEffect, useRef } from "react";

function formatPrice(priceStr, qty) {
  const num = parseInt(priceStr.replace(/[₦,]/g, ""), 10);
  return "₦" + (num * qty).toLocaleString("en-NG");
}

function getTotal(items) {
  const total = items.reduce((sum, item) => {
    const num = parseInt(item.price.replace(/[₦,]/g, ""), 10);
    return sum + num * item.qty;
  }, 0);
  return "₦" + total.toLocaleString("en-NG");
}

const CartDrawer = ({ isOpen, onClose, items = [], onRemove, onUpdateQty }) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          background: "rgba(62,31,13,0.35)",
          backdropFilter: isOpen ? "blur(3px)" : "blur(0px)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.5s ease, backdrop-filter 0.5s ease",
        }}
      />

      {/* Drawer Panel */}
      <aside
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: "min(420px, 95vw)",
          zIndex: 50,
          display: "flex",
          flexDirection: "column",
          background: "#FAF7F3",
          boxShadow: isOpen ? "-8px 0 40px rgba(62,31,13,0.18)" : "none",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.45s cubic-bezier(0.77, 0, 0.18, 1)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-[#E8DDD3]">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="w-4 h-px bg-[#B8963E]" />
              <p className="text-[0.55rem] tracking-[0.38em] uppercase text-[#8C5230]">Your Selection</p>
            </div>
            <h2
              className="text-[#3E1F0D] font-light text-2xl"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Shopping Bag
              {items.length > 0 && (
                <span className="ml-2 text-sm text-[#8A6A55] font-light">
                  ({items.reduce((s, i) => s + i.qty, 0)})
                </span>
              )}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center border border-[#6B3E26]/20 text-[#6B3E26] hover:bg-[#3E1F0D] hover:text-[#F5EFE6] hover:border-[#3E1F0D] transition-all duration-200"
            aria-label="Close bag"
          >
            <span className="text-lg leading-none">×</span>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 pb-16">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #E8DDD3, #C9B89A)" }}
              >
                <span className="text-2xl">🛍</span>
              </div>
              <div>
                <p
                  className="text-[#3E1F0D] text-xl font-light mb-1"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Your bag is empty
                </p>
                <p className="text-[0.65rem] tracking-[0.12em] uppercase text-[#8A6A55]">
                  Discover our new arrivals
                </p>
              </div>
              <button
                onClick={onClose}
                className="mt-2 px-8 py-2.5 border border-[#3E1F0D] text-[#3E1F0D] text-[0.62rem] tracking-[0.22em] uppercase hover:bg-[#3E1F0D] hover:text-[#F5EFE6] transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                {/* Thumbnail */}
                <div className="flex-shrink-0 w-20 h-24 overflow-hidden">
                  {item.img ? (
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full" style={{ background: item.gradient }} />
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3
                      className="text-[#3E1F0D] text-base font-medium leading-tight"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {item.name}
                    </h3>
                    <button
                      onClick={() => onRemove && onRemove(item.id)}
                      className="text-[#8A6A55] hover:text-[#3E1F0D] transition-colors text-sm flex-shrink-0 opacity-0 group-hover:opacity-100"
                      aria-label="Remove item"
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-[0.58rem] tracking-[0.12em] uppercase text-[#8A6A55] mt-0.5 mb-3">
                    {item.sub}
                  </p>

                  <div className="flex items-center justify-between">
                    {/* Qty stepper */}
                    <div className="flex items-center border border-[#6B3E26]/25">
                      <button
                        onClick={() => onUpdateQty && onUpdateQty(item.id, Math.max(1, item.qty - 1))}
                        className="w-7 h-7 flex items-center justify-center text-[#6B3E26] hover:bg-[#3E1F0D] hover:text-[#F5EFE6] transition-all text-sm"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-[0.72rem] text-[#3E1F0D]">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => onUpdateQty && onUpdateQty(item.id, item.qty + 1)}
                        className="w-7 h-7 flex items-center justify-center text-[#6B3E26] hover:bg-[#3E1F0D] hover:text-[#F5EFE6] transition-all text-sm"
                      >
                        +
                      </button>
                    </div>

                    <span
                      className="text-[#3E1F0D] text-base font-light"
                      style={{ fontFamily: "Cormorant Garamond, serif" }}
                    >
                      {formatPrice(item.price, item.qty)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-8 py-6 border-t border-[#E8DDD3]">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#8A6A55]">Subtotal</span>
              <span
                className="text-[#3E1F0D] text-xl font-light"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {getTotal(items)}
              </span>
            </div>
            <p className="text-[0.55rem] tracking-[0.1em] uppercase text-[#8A6A55] mb-5">
              Shipping & taxes calculated at checkout
            </p>
            <div className="w-full h-px bg-[#E8DDD3] mb-5" />
            <button className="w-full py-4 bg-[#3E1F0D] text-[#F5EFE6] text-[0.65rem] tracking-[0.28em] uppercase hover:bg-[#6B3E26] transition-colors duration-300 mb-3">
              Proceed to Checkout →
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 border border-[#3E1F0D]/30 text-[#6B3E26] text-[0.6rem] tracking-[0.22em] uppercase hover:border-[#3E1F0D] hover:text-[#3E1F0D] transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;