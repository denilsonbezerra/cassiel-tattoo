import { Coffee, Thermometer, Sparkles, Wifi } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: <Thermometer className="w-8 h-8 text-[#070B14]" />,
    title: "Ambiente Climatizado",
    description: "Estúdio com temperatura controlada para seu conforto durante toda a sessão"
  },
  {
    icon: <Coffee className="w-8 h-8 text-[#070B14]" />,
    title: "Café & Bebidas",
    description: "Café fresco e água disponíveis gratuitamente"
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[#070B14]" />,
    title: "Higienização Rigorosa",
    description: "Todos os nossos equipamentos passam por um processo de limpeza e desinfecção antes e após cada uso."
  },
  {
    icon: <Wifi className="w-8 h-8 text-[#070B14]" />,
    title: "Wi-Fi Gratuito",
    description: "Internet de alta velocidade para você se manter conectado"
  }
];

export default function Benefits() {
  return (
    <section id="studio" className="bg-[#070B14] py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F1F2F3] mb-4 uppercase">
            Nosso Estúdio
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
                <p className="text-sm text-foreground/70 leading-relaxed">
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