import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import awningResidential from "@/assets/awning-residential.jpg";
import canopyCommercial from "@/assets/canopy-commercial.jpg";
import retractableAwning from "@/assets/retractable-awning.jpg";

const Services = () => {
  const services = [
    {
      title: "Toldos em Lona",
      description: "Proteção solar eficiente com materiais de alta qualidade e durabilidade. Ideal para residências e comércios.",
      image: awningResidential,
      features: ["Lona impermeável", "Estrutura em alumínio", "Garantia de 2 anos"]
    },
    {
      title: "Toldos Retráteis",
      description: "Sistemas automatizados com controle remoto para máximo conforto e praticidade no seu dia a dia.",
      image: retractableAwning,
      features: ["Controle automático", "Motor silencioso", "Design moderno"]
    },
    {
      title: "Coberturas",
      description: "Soluções completas em policarbonato e outros materiais para proteção total dos seus espaços.",
      image: canopyCommercial,
      features: ["Policarbonato UV", "Estrutura metálica", "Projeto personalizado"]
    }
  ];

  const handleWhatsApp = (service: string) => {
    const message = `Olá, gostaria de solicitar um orçamento para ${service}!`;
    window.open(`https://wa.me/5541998121324?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nossos Serviços em Toldos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em toldos e coberturas para residências e empresas em Curitiba e região metropolitana.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={() => handleWhatsApp(service.title)}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;