import bg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

const phone = "558587475079";
const wa = `https://wa.me/${phone}?text=${encodeURIComponent("Quero agendar uma tatuagem")}`;

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[90vh] overflow-hidden flex items-center justify-center">
      <img
        src={bg}
        alt="Felipe Cassiel | Tattoos Realism, Blackwork & Cover-up"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-foreground/60" />

      <div className="w-full relative max-w-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#F1F2F3]">
          Felipe Cassiel | Tattoos Realism, Blackwork & Cover-up
        </h1>
        <p className="text-base md:text-lg text-muted-foreground mb-6 ">
          Exclusive projects, realism, blackwork, and restoration using cover-up techniques.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild className="w-full sm:w-auto">
            <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="Agendar no WhatsApp">
              <FaWhatsapp className="text-[35px]" /> AGENDAMENTO PELO WHATSAPP
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
