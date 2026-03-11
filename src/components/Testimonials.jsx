import { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "The Maison Tote is everything. Boardroom to brunch, it never looks out of place. This is what real luxury feels like — understated, intentional, perfect.",
    author: "Adaeze O.",
    location: "Lagos, Nigeria",
    product: "Maison Tote",
    rating: 5,
  },
  {
    id: 2,
    text: "I gifted my sister the Éclat scarf for her birthday and she hasn't stopped wearing it. The quality of the silk is absolutely unmatched at this price point.",
    author: "Chisom A.",
    location: "Abuja, Nigeria",
    product: "Éclat Silk Scarf",
    rating: 5,
  },
  {
    id: 3,
    text: "Celesté understands that you don't need to shout to be heard. Every piece says exactly what I want it to say about who I am. I own four pieces now.",
    author: "Kemi B.",
    location: "London, UK",
    product: "Soir Clutch",
    rating: 5,
  },
  {
    id: 4,
    text: "The packaging alone made me emotional. When I opened my Petite Bucket, I felt like I was unboxing something truly special. The craftsmanship is outstanding.",
    author: "Temi F.",
    location: "Toronto, Canada",
    product: "Petite Bucket",
    rating: 5,
  },
  {
    id: 5,
    text: "I've purchased from luxury brands all over the world. Celesté stands right alongside them — the leather quality, the hardware, the finishing. Impeccable.",
    author: "Ngozi E.",
    location: "New York, USA",
    product: "Sable Card Holder",
    rating: 5,
  },
  {
    id: 6,
    text: "Finally a Nigerian luxury brand that doesn't feel like it's trying too hard. Celesté is effortless. The Arc Cuff gets compliments every single time I wear it.",
    author: "Amaka I.",
    location: "Accra, Ghana",
    product: "Arc Cuff",
    rating: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          className={`text-[0.7rem] ${s <= count ? "text-[#B8963E]" : "text-[#B8963E]/20"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  // For mobile — show one at a time with prev/next
  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section className="bg-[#FAF7F3] px-6 md:px-16 py-20">

      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-px bg-[#B8963E]" />
            <p className="text-[0.62rem] tracking-[0.38em] uppercase text-[#8C5230]">
              Community
            </p>
          </div>
          <h2
            className="text-[#3E1F0D] font-light leading-tight"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Worn by <em className="text-[#8C5230]">those who know.</em>
          </h2>
        </div>

        {/* Overall rating */}
        <div className="flex items-center gap-4 bg-[#F5EFE6] px-6 py-4 border border-[#6B3E26]/08">
          <div className="text-center">
            <p
              className="text-[#3E1F0D] text-4xl font-light leading-none"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              5.0
            </p>
            <StarRating count={5} />
            <p className="text-[0.55rem] tracking-[0.15em] uppercase text-[#8A6A55] mt-1">
              114 Reviews
            </p>
          </div>
          <div className="w-px h-12 bg-[#6B3E26]/12" />
          <div className="flex flex-col gap-1.5">
            {[5, 4, 3].map((star) => (
              <div key={star} className="flex items-center gap-2">
                <span className="text-[0.55rem] text-[#8A6A55]">{star}★</span>
                <div className="w-20 h-px bg-[#6B3E26]/10 relative">
                  <div
                    className="absolute top-0 left-0 h-full bg-[#B8963E]"
                    style={{ width: star === 5 ? "92%" : star === 4 ? "6%" : "2%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Desktop grid — 3 columns ── */}
      <div className="hidden md:grid grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <div
            key={t.id}
            className="group p-7 bg-[#F5EFE6] border border-[#6B3E26]/08 hover:border-[#6B3E26]/20 relative overflow-hidden transition-all duration-350 hover:-translate-y-1 hover:shadow-md flex flex-col"
          >
            {/* Quote mark */}
            <span
              className="text-6xl font-light text-[#B8963E]/20 leading-none block mb-3 group-hover:text-[#B8963E]/35 transition-colors"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              "
            </span>

            <StarRating count={t.rating} />

            <p
              className="text-[#2A1408] text-[0.95rem] font-light leading-[1.9] my-4 flex-1"
              style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic" }}
            >
              {t.text}
            </p>

            {/* Divider */}
            <div className="w-8 h-px bg-[#B8963E]/40 mb-4" />

            <div>
              <p className="text-[0.7rem] tracking-[0.12em] uppercase text-[#3E1F0D] font-medium">
                {t.author}
              </p>
              <p className="text-[0.6rem] tracking-[0.1em] text-[#8A6A55] mt-0.5">
                {t.location}
              </p>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="text-[#B8963E] text-[0.5rem]">✦</span>
                <p className="text-[0.58rem] tracking-[0.1em] text-[#B8963E] uppercase">
                  Verified · {t.product}
                </p>
              </div>
            </div>

            {/* Bottom gold accent */}
            <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#B8963E] to-[#C9956A] w-0 group-hover:w-full transition-all duration-500" />
          </div>
        ))}
      </div>

      {/* ── Mobile carousel — one at a time ── */}
      <div className="md:hidden">
        <div className="p-7 bg-[#F5EFE6] border border-[#6B3E26]/08 relative">
          <span
            className="text-6xl font-light text-[#B8963E]/25 leading-none block mb-3"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            "
          </span>
          <StarRating count={testimonials[active].rating} />
          <p
            className="text-[#2A1408] text-[0.95rem] font-light leading-[1.9] my-4"
            style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic" }}
          >
            {testimonials[active].text}
          </p>
          <div className="w-8 h-px bg-[#B8963E]/40 mb-4" />
          <p className="text-[0.7rem] tracking-[0.12em] uppercase text-[#3E1F0D] font-medium">
            {testimonials[active].author}
          </p>
          <p className="text-[0.6rem] tracking-[0.1em] text-[#8A6A55] mt-0.5">
            {testimonials[active].location}
          </p>
          <div className="flex items-center gap-1.5 mt-2">
            <span className="text-[#B8963E] text-[0.5rem]">✦</span>
            <p className="text-[0.58rem] tracking-[0.1em] text-[#B8963E] uppercase">
              Verified · {testimonials[active].product}
            </p>
          </div>
        </div>

        {/* Prev / Next */}
        <div className="flex items-center justify-between mt-5">
          <button
            onClick={prev}
            className="w-10 h-10 border border-[#6B3E26]/25 flex items-center justify-center text-[#6B3E26] hover:bg-[#3E1F0D] hover:text-[#F5EFE6] hover:border-[#3E1F0D] transition-all cursor-pointer"
          >
            ←
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 cursor-pointer rounded-full ${
                  i === active
                    ? "w-5 h-1.5 bg-[#B8963E]"
                    : "w-1.5 h-1.5 bg-[#6B3E26]/20"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 border border-[#6B3E26]/25 flex items-center justify-center text-[#6B3E26] hover:bg-[#3E1F0D] hover:text-[#F5EFE6] hover:border-[#3E1F0D] transition-all cursor-pointer"
          >
            →
          </button>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#6B3E26]/10">
        <p className="text-[0.72rem] text-[#8A6A55] tracking-wide font-light">
          Join <strong className="text-[#3E1F0D]">114 women</strong> who already wear Celesté.
        </p>
        <a
          href="#"
          className="px-8 py-3 bg-[#3E1F0D] text-[#F5EFE6] text-[0.65rem] tracking-[0.22em] uppercase hover:bg-[#6B3E26] transition-colors"
        >
          Shop The Collection →
        </a>
      </div>
    </section>
  );
}