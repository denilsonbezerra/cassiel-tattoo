import bg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

const phone = "558587475079";
const wa = `https://wa.me/${phone}?text=${encodeURIComponent("Quero agendar uma tatuagem")}`;

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[80vh] md:min-h-[90vh] overflow-hidden flex items-center justify-center bg-[#0E100F]">
      <img
        src={bg}
        alt="Felipe Cassiel | Tattoos Realism, Blackwork & Cover-up"
        className="absolute md:w-[80%] w-[200%] object- "
        loading="eager"
      />
      <div className="absolute inset-0 bg-foreground/60" />

      <div className="md:w-full px-[15px] text-center relative max-w-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 text-[#F1F2F3]">
          Felipe Cassiel | Tattoos Realismo, Preto e Cinza & Cover-up
        </h1>
        <p className="text-base md:text-lg text-muted-foreground mb-6 ">
          Projetos exclusivos, realismo, preto e cinza, e restauração usando técnicas de cover-up.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild className="w-full sm:w-auto" variant="secondary">
            <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="Book on WhatsApp">
              <FaWhatsapp /> AGENDAR VIA WHATSAPP
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
