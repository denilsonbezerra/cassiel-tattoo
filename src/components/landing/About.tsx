import hero from "@/assets/hero-cassiel.jpg";
import { Button } from "../ui/button";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

export default function About() {
  const phone = "558587475079";
  const wa = `https://wa.me/${phone}?text=${encodeURIComponent("Quero agendar uma tatuagem")}`;

  return (
    <section id="about" className="flex justify-center md:h-[520px] md:flex-row flex-col items-center gap-4 px-4 py-12 md:px-6 bg-[#F1F2F3]">
      <div className="w-full md:w-[25%] rounded-[20px] flex justify-center align-center">
        <img src={hero} className="h-[100%] rounded-[20px] shadow-[2px_2px_7px_rgba(0,0,0,0.3)]" alt="Felipe Cassiel portrait" />
      </div>
      <div className="flex flex-col justify-between w-full md:w-[75%] md:pl-5 text-center md:text-left md:pr-[70px]">
        <p className="text-[18px] text-muted-foreground leading-relaxed font-semibold">
          Sou Cassiel, tatuador apaixonado por transformar pele em arte.
          Natural de Fortaleza, Ceará, carrego 5 anos de experiência e a honra de ter recebido vários prêmios ao longo da minha trajetória.
          Para mim, tatuar não é apenas marcar a pele, é marcar histórias, eternizar sentimentos e devolver confiança.
          Minha missão é simples: fazer você se olhar no espelho e se sentir incrível.
        </p>
        <div className="mt-[35px] flex flex-col md:flex-row gap-2 md:mt-2">
          <Button className="md:mt-[30px] p-0 transition-all duration-300 ease-in-out" variant="secondary">
            <a
              href={wa}
              target="_blank"
              className="p-4 flex gap-1 items-center"
            >
              <FaWhatsapp />  WHATSAPP
            </a>
          </Button>
          <Button className="md:mt-[30px] p-0 transition-all duration-300 ease-in-out" variant="secondary">
            <a
              href="https://www.instagram.com/cassiel.tattoo?igsh=aHF2cHBlZGdwZzcw&utm_source=qr"
              target="_blank"
              className="p-4 flex gap-1 items-center"
            >
              <FaInstagram /> SEGUIR NO INSTAGRAM
            </a>
          </Button>
          <Button className="md:mt-[30px] p-0 transition-all duration-300 ease-in-out" variant="secondary">
            <a
              href="https://www.tiktok.com/@cassiel.tattoo?_t=ZM-8ynZt1TZoRE&_r=1"
              target="_blank"
              className="p-4 flex gap-1 items-center"
            >
              <FaTiktok /> SEGUIR NO TIKTOK
            </a>
          </Button>
        </div>
      </div>
    </section >
  )
}
