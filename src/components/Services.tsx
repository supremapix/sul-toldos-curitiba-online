import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { openWhatsapp } from "@/utils/whatsapp";

import servicoToldoComercial from "@/assets/servico-toldo-comercial.jpg";
import servicoToldoFachada from "@/assets/servico-toldo-fachada.jpg";
import servicoToldoLoja from "@/assets/servico-toldo-loja.jpg";
import servicoCoberturaCorreder from "@/assets/servico-cobertura-corredor.jpg";
import servicoPergolado from "@/assets/servico-pergolado.jpg";
import servicoCortinaRolo from "@/assets/servico-cortina-rolo.jpg";
import servicoCoberturaMetalica from "@/assets/servico-cobertura-metalica.jpg";
import servicoToldoIndustrial from "@/assets/servico-toldo-industrial.jpg";
import servicoFechamentoVaranda from "@/assets/servico-fechamento-varanda.jpg";
import servicoCoberturaLona from "@/assets/servico-cobertura-lona.jpg";

interface ServiceItem {
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  priceFrom: string;
  images: string[];
  features: string[];
}

const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const services: ServiceItem[] = [
    {
      title: "Toldos Comerciais",
      seoTitle: "Toldos Comerciais em Curitiba - Fachadas e Lojas | Sul Toldos",
      seoDescription: "Toldos comerciais para lojas, restaurantes, padarias e comércios em Curitiba. Estrutura reforçada com lona personalizada.",
      description: "Toldos sob medida para fachadas comerciais com estrutura reforçada em metalon e lona acrílica ou vinílica personalizada. Proteção para clientes e destaque visual para seu negócio.",
      priceFrom: "A partir de R$ 220/m²",
      images: [servicoToldoComercial, servicoToldoFachada, servicoToldoLoja],
      features: ["Lona personalizada com logomarca", "Estrutura em metalon reforçado", "Resistente a ventos de até 80km/h"]
    },
    {
      title: "Coberturas em Policarbonato",
      seoTitle: "Coberturas em Policarbonato Curitiba - Alveolar e Compacto | Sul Toldos",
      seoDescription: "Cobertura em policarbonato alveolar e compacto para garagem, quintal e áreas externas em Curitiba. Proteção UV com garantia.",
      description: "Coberturas translúcidas em policarbonato alveolar ou compacto com estrutura metálica galvanizada. Permite passagem de luz natural com proteção UV total.",
      priceFrom: "A partir de R$ 220/m²",
      images: [servicoCoberturaCorreder, servicoCoberturaLona, servicoCoberturaMetalica],
      features: ["Policarbonato com proteção UV", "Estrutura galvanizada anticorrosão", "Garantia de 10 anos"]
    },
    {
      title: "Cortinas e Fechamentos",
      seoTitle: "Cortinas Rolo e Fechamento de Varanda Curitiba | Sul Toldos",
      seoDescription: "Cortina rolo transparente, toldo cortina e fechamento de varanda em PVC cristal. Proteção contra vento e chuva em Curitiba.",
      description: "Cortinas rolo em PVC cristal transparente e fechamentos laterais para varandas, sacadas e espaços gourmet. Sistema com guias laterais para vedação total.",
      priceFrom: "A partir de R$ 220/m²",
      images: [servicoCortinaRolo, servicoFechamentoVaranda, servicoPergolado],
      features: ["PVC cristal transparente", "Sistema com guias laterais", "Manual ou motorizado"]
    },
    {
      title: "Coberturas Metálicas",
      seoTitle: "Coberturas Metálicas e Estruturas em Metalon Curitiba | Sul Toldos",
      seoDescription: "Coberturas metálicas para garagem, estacionamento e áreas industriais em Curitiba. Estrutura em metalon e aço galvanizado.",
      description: "Estruturas metálicas robustas com cobertura em telha galvalume, sanduíche ou lona tensionada. Ideal para garagens, estacionamentos e áreas industriais.",
      priceFrom: "A partir de R$ 220/m²",
      images: [servicoCoberturaMetalica, servicoToldoIndustrial, servicoCoberturaLona],
      features: ["Estrutura calculada por engenheiro", "Telha termoacústica disponível", "Pintura eletrostática"]
    },
  ];

  const handleWhatsApp = (service: string) => {
    const message = `Olá, gostaria de solicitar um orçamento para ${service}!`;
    openWhatsapp(message);
  };

  const nextImage = () => {
    if (selectedService) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedService.images.length);
    }
  };

  const prevImage = () => {
    if (selectedService) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedService.images.length) % selectedService.images.length);
    }
  };

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nossos Serviços em <span className="text-primary">Toldos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Clique em cada serviço para ver a galeria de fotos reais e preços. Soluções completas para comércio e residência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 group cursor-pointer"
              onClick={() => { setSelectedService(service); setCurrentImageIndex(0); }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={service.images[0]}
                  alt={service.seoTitle}
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-primary font-bold text-sm">{service.priceFrom}</span>
                </div>
              </div>

              <CardContent className="p-5">
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                  {service.description}
                </p>
                <ul className="space-y-1 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={(e) => { e.stopPropagation(); handleWhatsApp(service.title); }}
                  className="w-full bg-primary hover:bg-primary/90 font-bold"
                >
                  💬 ORÇAMENTO
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Persuasivo */}
        <div className="mt-12 text-center bg-card border border-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            🏗️ Orçamento Grátis em até 2 Horas!
          </h3>
          <p className="text-muted-foreground text-lg mb-6">
            Envie uma foto do local e receba seu orçamento personalizado no WhatsApp. Sem compromisso!
          </p>
          <button
            onClick={() => openWhatsapp("Olá, gostaria de um orçamento rápido para toldos!")}
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            📱 SOLICITAR ORÇAMENTO GRÁTIS AGORA
          </button>
        </div>
      </div>

      {/* Service Gallery Popup */}
      {selectedService && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 animate-fade-in"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gallery with navigation */}
            <div className="relative">
              <img
                src={selectedService.images[currentImageIndex]}
                alt={`${selectedService.seoTitle} - Foto ${currentImageIndex + 1}`}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-t-2xl transition-opacity duration-300"
              />

              {/* Nav arrows */}
              {selectedService.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
                    aria-label="Próxima foto"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {selectedService.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${idx === currentImageIndex ? "bg-primary scale-125" : "bg-white/50"}`}
                    aria-label={`Ver foto ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                {selectedService.title}
              </h3>
              <p className="text-primary font-bold text-xl mb-4">{selectedService.priceFrom}</p>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                {selectedService.description}
              </p>

              <ul className="space-y-2 mb-6">
                {selectedService.features.map((f, i) => (
                  <li key={i} className="flex items-center text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => openWhatsapp(`Olá, me interessei pelo serviço: ${selectedService.title}. Gostaria de um orçamento!`)}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg text-center text-lg transition-colors cursor-pointer"
                >
                  💬 ORÇAMENTO GRÁTIS
                </button>
                <a
                  href="tel:+554135646943"
                  className="flex-1 border-2 border-border hover:bg-secondary text-foreground font-bold py-3 px-6 rounded-lg text-center text-lg transition-colors"
                >
                  📞 LIGAR AGORA
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
