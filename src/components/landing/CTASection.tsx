import { Button } from "@/components/ui/button";

const phone = "558587475079";
const wa = `https://wa.me/${phone}?text=${encodeURIComponent("I would like to book a tattoo session")}`;

export default function CTASection() {
  return (
    <section id="contato" className="px-4 pb-24 md:px-6">
      <div className="rounded-xl border bg-secondary/20 p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">Ready for your next tattoo?</h2>
        <p className="text-muted-foreground mb-4">
          Send your idea and get guidance on size, placement, and budget.
        </p>
        <Button asChild>
          <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="Request a quote on WhatsApp">
            Request a quote on WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
}
