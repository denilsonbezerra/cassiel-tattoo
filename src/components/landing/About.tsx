import hero from "@/assets/hero-cassiel.jpg";

export default function About() {
  return (
    <section id="sobre" className="flex flex-col justify-center items-center gap-4 px-4 py-12 md:px-6">
      <div className="w-1/2 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">About me</h2>
        <p className="text-muted-foreground leading-relaxed">
          I'm Cassiel, a tattoo artist focused on custom projects, fine line, and blackwork. My approach is
          minimalist and precise, with attention to composition, skin, and healing. Every project starts from a
          conversation with you — a design created exclusively for your story.
        </p>
      </div>
      <div className="w-[50%] rounded-[20px] flex justify-center align-center">
        <img src={hero} className="w-[60%] rounded-[20px] shadow-[2px_2px_7px_rgba(0,0,0,0.3)]" alt="Felipe Cassiel portrait" />
      </div>
    </section>
  );
}
