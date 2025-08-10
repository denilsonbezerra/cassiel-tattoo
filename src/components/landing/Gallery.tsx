import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const items = [
  { src: g1, alt: "Tatuagem fine line de botânica" },
  { src: g2, alt: "Máquina de tatuagem e materiais" },
  { src: g3, alt: "Blackwork geométrico no antebraço" },
  { src: g4, alt: "Floral de traço fino no tornozelo" },
  { src: g5, alt: "Close em cover-up com textura" },
  { src: g6, alt: "Preparação de estêncil na pele" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="px-4 py-12 md:px-6">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Portfólio</h2>
        <span className="text-sm text-muted-foreground">seleção recente</span>
      </div>
      <Carousel className="w-full">
        <CarouselContent>
          {items.map((it, i) => (
            <CarouselItem key={i} className="basis-full md:basis-1/2 lg:basis-1/3">
              <article className="overflow-hidden rounded-lg bg-card">
                <img src={it.src} alt={it.alt} loading="lazy" className="w-full h-80 object-cover" />
              </article>
            </CarouselItem>
          ))}
        <CarouselPrevious />
        <CarouselNext />
        </CarouselContent>
      </Carousel>
    </section>
  );
}
