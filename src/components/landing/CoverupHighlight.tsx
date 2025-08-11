import * as React from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import g1 from "@/assets/coverup-1.jpg";
import g2 from "@/assets/coverup-2.jpg";
import g3 from "@/assets/coverup-3.jpg";
import g4 from "@/assets/coverup-4.jpg";
import g5 from "@/assets/coverup-5.jpg";
import g6 from "@/assets/coverup-6.jpg";
import g7 from "@/assets/coverup-7.jpg";
import g8 from "@/assets/coverup-8.jpg";
import g9 from "@/assets/coverup-9.jpg";
import g10 from "@/assets/coverup-10.jpg";
import g11 from "@/assets/coverup-11.jpg";
import g12 from "@/assets/coverup-12.jpg";
import g13 from "@/assets/coverup-13.jpg";
import g14 from "@/assets/coverup-14.jpg";
import g15 from "@/assets/coverup-15.jpg";
import g16 from "@/assets/coverup-16.jpg";

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

  const isMobile = useIsMobile();
  const perRow = isMobile ? 2 : 4;
  const initialCount = perRow * 2; // 2 rows
  const [expanded, setExpanded] = React.useState(false);
  const visibleImages = React.useMemo(
    () => images.slice(0, expanded ? images.length : initialCount),
    [images, expanded, initialCount]
  );

  return (
    <section id="coverup" className="px-4 pb-12 md:px-6 bg-[#070B14]">
      <div className="rounded-lg p-4 md:p-6 bg-transparent">
        <h2 className="text-xl md:text-[50px] font-semibold mt-[10px] mb-[45px] text-center text-[#F1F2F3]">Portfólio Cover-Up</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {visibleImages.map((it, idx) => (
            <Dialog key={idx}>
              <DialogTrigger asChild>
                <div className="group relative w-[95%] h-[300px] md:h-[390px] overflow-hidden rounded-md hover-scale animate-fade-in transition-all duration-300 ease-out hover:shadow-[0_0_7px_rgba(250,250,250,0.2)] cursor-pointer">
                  <img
                    src={it.src}
                    alt={it.alt}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:blur-[2px]"
                    loading="lazy"
                    decoding="async"
                  />
                  {idx % 2 === 0
                    ? <p className="absolute bottom-2 left-2 text-white font-bold">Antes</p>
                    : <p className="absolute bottom-2 left-2 text-white font-bold">Depois</p>
                  }
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/5 backdrop-blur-sm"
                  >
                    <Search className="h-9 w-9 text-foreground" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[100vw] max-h-[90dvh] w-auto h-auto p-2">
                <img
                  src={it.src}
                  alt={it.alt}
                  className="h-full max-w-full max-h-[80dvh] object-cover rounded-lg"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
        {images.length > initialCount && (
          <div className="mt-6 flex justify-center">
            <Button
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              variant="secondary"
            >
              {expanded ? "Show less" : "Show more"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
