import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

const phone = "558587475079";
const wa = `https://wa.me/${phone}?text=${encodeURIComponent("I would like to book a tattoo session")}`;

export default function CTASection() {
  return (
    <section className="px-4 py-12 md:px-6 bg-[#F1F2F3]">
      <div className="flex flex-col justify-center items-center rounded-xl border bg-secondary/20 p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">Pronto para sua próxima tatuagem?</h2>
        <p className="text-muted-foreground mb-4">
          Nos envie a sua ideia e receba um guia de tamanhos, locais e orçamentos.
        </p>
        <Button asChild variant="secondary">
          <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="Request a quote on WhatsApp">
            <FaWhatsapp /> SOLICITAR ORÇAMENTO
          </a>
        </Button>
      </div>
    </section>
  );
}
