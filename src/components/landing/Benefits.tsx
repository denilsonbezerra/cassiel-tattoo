import { Coffee, Thermometer, Waves, Wifi } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: <Thermometer className="w-8 h-8 text-primary" />,
    title: "Ambiente Climatizado",
    description: "Estúdio com temperatura controlada para seu conforto durante toda a sessão"
  },
  {
    icon: <Coffee className="w-8 h-8 text-primary" />,
    title: "Café & Bebidas",
    description: "Café fresco, água, refrigerantes e outras bebidas disponíveis gratuitamente"
  },
  {
    icon: <Waves className="w-8 h-8 text-primary" />,
    title: "Ambiente Relaxante",
    description: "Música ambiente e decoração pensada para proporcionar tranquilidade"
  },
  {
    icon: <Wifi className="w-8 h-8 text-primary" />,
    title: "Wi-Fi Gratuito",
    description: "Internet de alta velocidade para você se manter conectado"
  }
];

export default function Benefits() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comodidades do Estúdio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos um ambiente confortável e acolhedor para que sua experiência seja única
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}