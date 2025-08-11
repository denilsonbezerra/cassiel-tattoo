import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Search } from "lucide-react";
import g1 from "@/assets/coverup-4.jpg";
import g2 from "@/assets/coverup-2.jpg";
import g3 from "@/assets/coverup-6.jpg";
import g4 from "@/assets/coverup-8.jpg";
import g5 from "@/assets/coverup-10.jpg";
import g6 from "@/assets/coverup-12.jpg";
import g7 from "@/assets/coverup-14.jpg";
import g8 from "@/assets/coverup-16.jpg";

const items = [
  { src: g1, alt: "Tattoo pantheon realism" },
  { src: g2, alt: "Tattoo coliseum" },
  { src: g3, alt: "Tattoo eagles realism" },
  { src: g4, alt: "Tattoo eagles realism" },
  { src: g5, alt: "Tattoo eagles realism" },
  { src: g6, alt: "Tattoo eagles realism" },
  { src: g7, alt: "Tattoo eagles realism" },
  { src: g8, alt: "Tattoo eagles realism" },
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
                    <article className="group relative overflow-hidden rounded-lg bg-card hover-scale animate-fade-in cursor-pointer">
                      <img
                        src={it.src}
                        alt={it.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-[500px] object-cover transition-all duration-300 group-hover:blur-sm"
                      />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/40 backdrop-blur-sm"
                      >
                        <Search className="h-10 w-10" />
                      </div>
                    </article>
                  </DialogTrigger>
                  <DialogContent className="max-w-[100vw] max-h-[90dvh] w-auto h-auto p-2">
                    <img src={it.src} alt={it.alt} className="h-full max-w-full max-h-[80dvh] object-cover rounded-lg" />
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
