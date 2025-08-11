import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Search } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const items = [
  { src: g1, alt: "Fine line botanical tattoo" },
  { src: g2, alt: "Tattoo machine and materials" },
  { src: g3, alt: "Geometric blackwork on forearm" },
  { src: g4, alt: "Thin-line floral on ankle" },
  { src: g5, alt: "Close-up texture detail" },
  { src: g6, alt: "Stencil prep on skin" },
];

export default function Gallery() {
  return (
    <section id="portfolio" className="px-4 py-12 md:px-6">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Portfolio</h2>
        <span className="text-sm text-muted-foreground">recent selection</span>
      </div>
      <div className="container mx-auto">
        <Carousel className="relative w-full">
          <CarouselContent>
            {items.map((it, i) => (
              <CarouselItem key={i} className="basis-full md:basis-1/2 lg:basis-1/3">
                <Dialog>
                  <DialogTrigger asChild>
                    <article className="group relative overflow-hidden rounded-lg bg-card hover-scale animate-fade-in">
                      <img
                        src={it.src}
                        alt={it.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-80 object-cover transition-all duration-300 group-hover:blur-sm"
                      />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/40 backdrop-blur-sm"
                      >
                        <Search className="h-10 w-10" />
                      </div>
                    </article>
                  </DialogTrigger>
                  <DialogContent className="max-w-[90vw] md:max-w-3xl p-2">
                    <img src={it.src} alt={it.alt} className="w-full h-auto rounded-lg" />
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
