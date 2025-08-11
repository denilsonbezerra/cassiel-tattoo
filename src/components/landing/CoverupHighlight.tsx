import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Search } from "lucide-react";
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
  const images = [
    { src: g1, alt: "Cover-up example 1" },
    { src: g2, alt: "Cover-up example 2" },
    { src: g3, alt: "Cover-up example 3" },
    { src: g4, alt: "Cover-up example 4" },
    { src: g5, alt: "Cover-up example 5" },
    { src: g6, alt: "Cover-up example 6" },
    { src: g7, alt: "Cover-up example 7" },
    { src: g8, alt: "Cover-up example 8" },
    { src: g9, alt: "Cover-up example 9" },
    { src: g10, alt: "Cover-up example 10" },
    { src: g11, alt: "Cover-up example 11" },
    { src: g12, alt: "Cover-up example 12" },
    { src: g13, alt: "Cover-up example 13" },
    { src: g14, alt: "Cover-up example 14" },
    { src: g15, alt: "Cover-up example 15" },
    { src: g16, alt: "Cover-up example 16" },
  ];

  return (
    <section id="coverup" className="px-4 pb-12 md:px-6 bg-[#070B14]">
      <div className="rounded-lg p-4 md:p-6 bg-transparent">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-[#F1F2F3]">Cover‑up gallery (Before → After)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((it, idx) => (
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <div className="group relative w-[95%] h-[300px] md:h-[390px] overflow-hidden rounded-md hover-scale animate-fade-in">
                  <img
                    src={it.src}
                    alt={it.alt}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/40 backdrop-blur-sm"
                  >
                    <Search className="h-9 w-9 text-foreground" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] md:max-w-4xl p-2">
                <img src={it.src} alt={it.alt} className="w-full h-auto rounded-lg" />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
