import { Button } from "@/components/ui/button";

const phone = "558587475079";
const wa = `https://wa.me/${phone}?text=${encodeURIComponent("Quero agendar uma tatuagem")}`;

export default function CTASection() {
  return (
    <section className="px-4 pb-24 md:px-6">
      <div className="rounded-xl border bg-secondary/20 p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">Pronto para sua próxima tatuagem?</h2>
        <p className="text-muted-foreground mb-4">
          Envie sua ideia e receba orientação sobre tamanho, posição e orçamento.
        </p>
        <Button asChild>
          <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="Agendar no WhatsApp">
            Solicitar orçamento pelo WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
}
