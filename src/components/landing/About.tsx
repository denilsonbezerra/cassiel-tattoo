import hero from "@/assets/hero-cassiel.jpg";

export default function About() {
  return (
    <section id="about" className="flex justify-center md:flex-row flex-col items-center gap-4 px-4 py-12 md:px-6">
      <div className="w-full md:w-[60%] text-center px-2 md:pl-[100px]">
        <h2 className="text-[22px] md:text-3xl font-bold mb-3 text-[#070B44]">About me</h2>
        <p className="text-[18px] text-muted-foreground leading-relaxed font-semibold">
          I'm Cassiel, a tattoo artist focused on custom projects, realism, cover-up and blackwork. My approach is
          precise, with attention to composition, skin, and healing. Every project starts from a
          conversation with you — a design created exclusively for your story.
        </p>
      </div>
      <div className="w-full md:w-[40%] rounded-[20px] flex justify-center align-center">
        <img src={hero} className="w-[70%] rounded-[20px] shadow-[2px_2px_7px_rgba(0,0,0,0.3)]" alt="Felipe Cassiel portrait" />
      </div>
    </section>
  );
}
