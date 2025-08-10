import hero from "@/assets/hero-cassiel.jpg";

export default function About() {
  return (
    <section id="sobre" className="flex flex-col justify-center items-center gap-4 px-4 py-12 md:px-6">
      <div className="w-1/2 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Quem sou eu</h2>
        <p className="text-black leading-relaxed">
          Sou o Cassiel, tatuador focado em projetos autorais, fine line e
          blackwork. Minha abordagem é minimalista e precisa, com atenção a
          composição, pele e cicatrização. Cada projeto nasce da conversa com
          você — desenho exclusivo para a sua história.
        </p>
      </div>
      <div className="w-[50%] rounded-[20px] flex justify-center align-center">
        <img src={hero} className="w-[60%] rounded-[20px] shadow-[2px_2px_7px_rgba(0,0,0,0.3)]" alt="Felipe Cassiel" />
      </div>
    </section>
  );
}
