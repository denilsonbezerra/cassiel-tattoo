import { FaWhatsapp } from "react-icons/fa";

const phone = "558587475079";
const wa = `https://wa.me/${phone}?text=${encodeURIComponent("Olá,eu gostaria de agendar uma tatuagem")}`;

export default function WhatsappButton() {
  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar no WhatsApp"
      className="fixed bottom-4 right-6 z-50 inline-flex items-center rounded-full bg-primary px-2 py-2 text-primary-foreground shadow-lg hover:opacity-80 transition duration-300 ease-in-out active:scale-95"
    >
      <FaWhatsapp size={30} />
    </a>
  );
}
