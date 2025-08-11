import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.jpg";
import g9 from "@/assets/gallery-9.jpg";
import g10 from "@/assets/gallery-10.jpg";
import g11 from "@/assets/gallery-11.jpg";
import g12 from "@/assets/gallery-12.jpg";
import g13 from "@/assets/gallery-13.jpg";
import g14 from "@/assets/gallery-14.jpg";
import g15 from "@/assets/gallery-15.jpg";
import g16 from "@/assets/gallery-16.jpg";

export default function CoverupHighlight() {
  const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16];
  return (
    <section id="coverup" className="px-4 pb-12 md:px-6 bg-[#070B14]">
      <div className="rounded-lg p-4 md:p-6 bg-transparent">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-[#F1F2F3]">Cover‑up gallery {"(Before > After)"}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Cover-up tattoo example ${idx + 1}`}
              className="w-[95%] h-[300px] md:h-[390px] object-cover rounded-md"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
