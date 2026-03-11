import { useState, useEffect } from "react";

export default function EmailPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setVisible(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => setVisible(false), 3000);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#2A1408]/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative z-10 bg-[#FAF7F3] w-full max-w-md shadow-2xl p-10 flex flex-col gap-4">
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#8A6A55] hover:text-[#3E1F0D] text-xl cursor-pointer"
        >
          ×
        </button>

        {!submitted ? (
          <>
            <p className="text-[0.6rem] tracking-[0.35em] uppercase text-[#8C5230]">
              Welcome to Celesté
            </p>
            <h2
              className="text-[#3E1F0D] text-3xl font-light leading-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Join the inner circle. <br />
              <em className="text-[#8C5230]">Get 10% off.</em>
            </h2>
            <p className="text-[#8A6A55] text-sm leading-relaxed font-light">
              Subscribe for early access to new arrivals, private sales and
              exclusive offers.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="border border-[#6B3E26]/30 px-4 py-3 bg-transparent outline-none text-sm text-[#2A1408] placeholder-[#8A6A55]/60 focus:border-[#6B3E26] transition-colors"
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#3E1F0D] text-[#F5EFE6] text-[0.67rem] tracking-[0.25em] uppercase hover:bg-[#6B3E26] transition-colors cursor-pointer"
              >
                Claim My 10% Off →
              </button>
            </form>

            <div className="flex flex-col gap-2 mt-1">
              {["Early access to new drops", "Private sale invitations", "Exclusive lookbooks"].map((perk) => (
                <p key={perk} className="text-[0.65rem] text-[#8A6A55] flex items-center gap-2">
                  <span className="text-[#C9956A]">✦</span>
                  {perk}
                </p>
              ))}
            </div>

            <button
              onClick={handleClose}
              className="text-[0.6rem] text-[#8A6A55]/50 hover:text-[#8A6A55] underline cursor-pointer text-left mt-1"
            >
              No thanks, I'll pay full price
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center text-center gap-4 py-6">
            <span className="text-3xl">✦</span>
            <h3
              className="text-[#3E1F0D] text-2xl font-light"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Welcome to Celesté.
            </h3>
            <p className="text-sm text-[#8A6A55] font-light">
              Your 10% code is heading to{" "}
              <strong className="text-[#3E1F0D]">{email}</strong>
            </p>
            <p className="text-[0.62rem] tracking-[0.2em] uppercase text-[#C9956A]">
              For those who need no introduction.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}