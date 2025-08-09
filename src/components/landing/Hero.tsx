import hero from "@/assets/hero-cassiel.jpg";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const phone = "558587475079";
const wa = `https://wa.me/${phone}?text=${encodeURIComponent("Quero agendar uma tatuagem")}`;

export default function Hero() {
  return (
    <header className="relative min-h-[80vh] md:min-h-screen overflow-hidden">
      <img
        src={hero}
        alt="Tatuador Cassiel em estúdio, foco nas mãos e máquina de tatuagem"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

      <div className="relative z-10 px-4 pt-24 pb-16 md:px-6 md:pt-40 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Tatuador Cassiel — Cover‑up, Fine Line e Blackwork
        </h1>
        <p className="text-base md:text-lg text-muted-foreground mb-6">
          Estúdio autoral em Fortaleza. Projetos exclusivos, traço fino e
          restauração com técnica de cover‑up.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild className="w-full sm:w-auto">
            <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="Agendar no WhatsApp">
              <MessageCircle /> Agendar pelo WhatsApp
            </a>
          </Button>
          <Button variant="secondary" asChild className="w-full sm:w-auto">
            <a href="#galeria">Ver portfólio</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
