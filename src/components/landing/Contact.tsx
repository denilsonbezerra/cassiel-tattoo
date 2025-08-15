import { MapPin, Clock, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Placeholder images - replace with actual studio images
const studioImages = [
  "/api/placeholder/400/300",
  "/api/placeholder/400/300",
  "/api/placeholder/400/300"
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-[#F1F2F3]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase">
            Contato e Localização
          </h2>
          <p className="text-lg text-muted-foreground">
            Venha nos visitar em nosso estúdio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Endereço</h3>
                    <p className="text-muted-foreground">
                      Rua Hugo Vítor, 391<br />
                      Antônio Bezerra, Fortaleza, Ceará
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Horário de Funcionamento</h3>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 9h às 19h<br />
                      Sábado: 9h às 17h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Contato</h3>
                    <p className="text-muted-foreground">
                      (85) 98747-5079<br />
                      contato@felipecassiel.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Studio Images */}
            <div className="grid grid-cols-3 gap-4">
              {studioImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg aspect-square bg-muted cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`Estúdio ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="lg:sticky lg:top-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.384584503333!2d-38.5667871852417!3d-3.744549797279582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74f774a3b9d7d%3A0x82d4a4b5a4e1a1b!2sRua%20Hugo%20Vitor%2C%20391%20-%20Ant%C3%B4nio%20Bezerra%2C%20Fortaleza%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1627388177997!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização do Estúdio Felipe Cassiel"
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}