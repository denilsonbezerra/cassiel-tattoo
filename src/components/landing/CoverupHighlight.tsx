import banner from "@/assets/banner-coverup.jpg";

export default function CoverupHighlight() {
  return (
    <section id="coverup" className="px-4 pb-12 md:px-6">
      <div className="relative overflow-hidden rounded-lg bg-card">
        <img
          src={banner}
          alt="Exemplo de cover-up: transformação de tatuagem antiga para design moderno"
          className="w-full h-60 md:h-80 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
        <div className="absolute inset-0 p-6 md:p-8 flex items-end">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Cover‑up de alto nível</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl">
              Técnica para cobrir e ressignificar tatuagens antigas com desenho
              atual, contraste e cicatrização de qualidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
