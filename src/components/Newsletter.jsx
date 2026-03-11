import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="bg-[#3E1F0D] px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* ── LEFT — Copy ── */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-[#B8963E]" />
            <p className="text-[0.62rem] tracking-[0.38em] uppercase text-[#C9956A]">
              Stay in the Know
            </p>
          </div>

          <h2
            className="text-[#F5EFE6] font-light leading-tight mb-4"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            First access. <br />
            <em className="text-[#C9956A]">Always.</em>
          </h2>

          <p className="text-[#F5EFE6]/50 text-sm leading-[2] font-light mb-8 max-w-sm">
            New arrivals, private sales, and the occasional love letter —
            straight to your inbox. Join 12,000+ women who already know.
          </p>

          {/* Perks list */}
          <div className="flex flex-col gap-3">
            {[
              "10% off your very first order",
              "Early access to new collection drops",
              "Private sale invitations — members only",
              "Exclusive styling guides & lookbooks",
            ].map((perk) => (
              <div key={perk} className="flex items-center gap-3">
                <span className="text-[#B8963E] text-[0.55rem] flex-shrink-0">✦</span>
                <p className="text-[0.72rem] text-[#F5EFE6]/55 font-light tracking-wide">
                  {perk}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT — Form ── */}
        <div>
          {!submitted ? (
            <>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Email field */}
                <div
                  className={`flex border transition-colors duration-300 ${
                    focused ? "border-[#C9956A]" : "border-[#F5EFE6]/15"
                  }`}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-5 py-4 bg-transparent text-[0.8rem] text-[#F5EFE6] placeholder-[#F5EFE6]/25 outline-none tracking-wide font-light"
                  />
                  <button
                    type="submit"
                    className="px-6 py-4 bg-[#B8963E] text-[#FAF7F3] text-[0.65rem] tracking-[0.22em] uppercase hover:bg-[#C9956A] transition-colors duration-300 cursor-pointer whitespace-nowrap font-light"
                  >
                    Join Celesté →
                  </button>
                </div>

                <p className="text-[0.58rem] text-[#F5EFE6]/20 tracking-[0.1em]">
                  ✦ No spam. Unsubscribe anytime. Your details stay private.
                </p>
              </form>

              {/* Social proof */}
              <div className="mt-10 pt-8 border-t border-[#F5EFE6]/08 flex items-center gap-5">
                {/* Avatar stack */}
                <div className="flex -space-x-2">
                  {["#8C5230", "#C9956A", "#6B3E26", "#B8963E"].map((color, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-[#3E1F0D] flex items-center justify-center text-[0.55rem] text-[#F5EFE6] font-medium"
                      style={{ background: color }}
                    >
                      {["A", "K", "T", "N"][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-[0.65rem] text-[#F5EFE6]/60 font-light">
                    <strong className="text-[#F5EFE6]/90">12,000+</strong> women already inside
                  </p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[1,2,3,4,5].map(s => (
                      <span key={s} className="text-[#B8963E] text-[0.6rem]">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* ── SUCCESS STATE ── */
            <div className="flex flex-col gap-5 py-8">
              <div className="w-14 h-14 border border-[#B8963E]/40 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B8963E" strokeWidth="1.2" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h3
                className="text-[#F5EFE6] text-3xl font-light"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Welcome to Celesté.
              </h3>
              <p className="text-[#F5EFE6]/50 text-sm font-light leading-relaxed">
                Your 10% discount code is heading to{" "}
                <span className="text-[#C9956A]">{email}</span>.
                Check your inbox — and welcome to the inner circle.
              </p>
              <p className="text-[0.6rem] tracking-[0.28em] uppercase text-[#B8963E]">
                For those who need no introduction. ✦
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}