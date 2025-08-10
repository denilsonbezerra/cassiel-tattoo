import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export default function CoverupHighlight() {
  const images = [g1, g2, g3, g4, g5, g6];
  return (
    <section id="coverup" className="px-4 pb-12 md:px-6">
      <div className="rounded-lg bg-card p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Cover‑up gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Cover-up tattoo example ${idx + 1}`}
              className="w-full h-40 md:h-52 object-cover rounded-md"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
