import { MessageCircle } from "lucide-react";

const phone = "558587475079";
const wa = `https://wa.me/${phone}?text=${encodeURIComponent("Quero agendar uma tatuagem")}`;

export default function WhatsappButton() {
  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp para agendar com Cassiel"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-primary-foreground shadow-lg hover:opacity-90 transition"
    >
      <MessageCircle />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
