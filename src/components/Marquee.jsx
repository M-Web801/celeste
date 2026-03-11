export default function Marquee() {
  const items = [
    "Handcrafted Luxury",
    "For Those Who Need No Introduction",
    "Celesté — SS 2026",
    "Timeless Silhouettes",
    "Refined Craftsmanship",
    "Worn in Lagos · London · Accra · New York",
    "Ethically Sourced",
    "Made to Order",
  ];

  // Duplicate for seamless infinite loop
  const doubled = [...items, ...items];

  return (
    <div className="bg-[#3E1F0D] py-3.5 overflow-hidden">
      <div
        className="flex gap-10 whitespace-nowrap"
        style={{ animation: "marqueeScroll 28s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-10 flex-shrink-0">
            <span
              className="text-[#EDE3D6] text-[0.95rem] font-light italic flex-shrink-0"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              {item}
            </span>
            <span className="text-[#C9956A] text-[0.6rem]">✦</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}