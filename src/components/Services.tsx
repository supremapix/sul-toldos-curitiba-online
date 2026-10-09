import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, LayoutGrid, Store, FileText, Landmark, RefreshCw, Layers, ShieldCheck } from "lucide-react";
import { openWhatsapp } from "@/utils/whatsapp";

import servicoToldoComercial from "@/assets/servico-toldo-comercial.jpg";
import servicoToldoFachada from "@/assets/servico-toldo-fachada.jpg";
import servicoToldoLoja from "@/assets/servico-toldo-loja.jpg";
import servicoCoberturaCorreder from "@/assets/servico-cobertura-corredor.jpg";
import servicoPergolado from "@/assets/servico-pergolado.jpg";
import servicoCortinaRolo from "@/assets/servico-cortina-rolo.jpg";
import servicoCoberturaMetalica from "@/assets/servico-cobertura-metalica.jpg";

interface ServiceItem {
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  priceFrom: string;
  images: string[];
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
}

export const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const services: ServiceItem[] = [
    {
      title: "Toldo de Fachada para Loja (Fixo/Capota)",
      seoTitle: "Toldo de Fachada para Loja Curitiba | Toldos Comerciais",
      seoDescription: "Toldo fixo ou capota para lojas, farmácias e vitrines em Curitiba. Estrutura rígida sob medida a partir de R$ 220/m².",
      description: "Toldos rígidos e capotas no formato arco ou trapézio, perfeitos para a entrada de lojas e farmácias. Protege sua vitrine do sol e da chuva direta com altíssima elegância.",
      priceFrom: "A partir de R$ 220/m²",
      images: [servicoToldoFachada, servicoToldoLoja],
      features: ["Lona de alta resistência UV", "Estrutura metálica com pintura epóxi", "Opção de acabamento reto ou ondulado"],
      icon: Store
    },
    {
      title: "Toldo Retrátil para Restaurantes e Bares",
      seoTitle: "Toldo Retrátil para Restaurantes e Bares em Curitiba | Toldos Comerciais",
      seoDescription: "Toldo retrátil de braço articulado ou pivotante para restaurantes e bares em Curitiba. Expanda sua área útil com lona de alta qualidade.",
      description: "Sistemas articulados modernos que abrem e fecham conforme a necessidade do clima. Perfeito para cobrir mesas externas e calçadas de bares, cafés e restaurantes.",
      priceFrom: "A partir de R$ 220/m²",
      images: [servicoToldoComercial, servicoPergolado],
      features: ["Braços articulados importados", "Acionamento manual ou automatizado", "Proteção térmica contra o calor do sol"],
      icon: Layers
    },
    {
      title: "Toldo Personalizado com Logomarca",
      seoTitle: "Toldo com Logomarca e Comunicação Visual Curitiba | Toldos Comerciais",
      seoDescription: "Toldo comercial personalizado com o logotipo da sua empresa. Comunicação visual e proteção integradas.",
      description: "Integração total entre proteção de fachada e identidade de marca. Impressão digital de alta resolução diretamente sobre a lona vinílica ou acrílica.",
      priceFrom: "A partir de R$ 220/m²",
      images: [servicoToldoLoja, servicoToldoComercial],
      features: ["Impressão UV de alta definição", "Recorte eletrônico de letras", "Alta fidelidade de cores de marca"],
      icon: FileText
    },
    {
      title: "Cobertura em Policarbonato para Estacionamentos",
      seoTitle: "Cobertura em Policarbonato para Áreas Comerciais Curitiba | Toldos Comerciais",
      seoDescription: "Cobertura de policarbonato alveolar ou compacto para estacionamentos, entradas e corredores de empresas.",
      description: "Estruturas transparentes ou translúcidas de alta resistência a impactos. Perfeitas para coberturas de garagens corporativas, estacionamentos e acessos de condomínios.",
      priceFrom: "A partir de R$ 220/m²",
      images: [servicoCoberturaCorreder, servicoCoberturaMetalica],
      features: ["Policarbonato com barreira anti-UV", "Estrutura tubular com pintura especial", "Garantia contra amarelamento e impacto"],
      icon: LayoutGrid
    },
    {
      title: "Toldo Cortina/Fechamento para Áreas Externas",
      seoTitle: "Toldo Cortina e Fechamento de PVC Cristal Curitiba | Toldos Comerciais",
      seoDescription: "Toldo cortina rolo transparente em PVC cristal para fechamento de áreas externas de restaurantes e bares.",
      description: "Fechamento vertical retrátil em PVC cristal transparente. Garante conforto térmico e proteção contra ventos fortes ou chuva fina na calçada do seu restaurante.",
      priceFrom: "A partir de R$ 220/m²",
      images: [servicoCortinaRolo, servicoPergolado],
      features: ["PVC cristal transparente importado", "Bordas reforçadas em lona colorida", "Sistema de travas inferiores seguras"],
      icon: Landmark
    },
    {
      title: "Cobertura de Galpão e Carga/Descarga",
      seoTitle: "Coberturas Industriais e Áreas de Carga Curitiba | Toldos Comerciais",
      seoDescription: "Cobertura de galpões comerciais e áreas de carga e descarga em Curitiba. Proteção metálica e lona reforçada.",
      description: "Projetos robustos e de grandes vãos para docas, áreas de carga e descarga de indústrias, comércios e galpões de distribuição.",
      priceFrom: "A partir de R$ 220/m²",
      images: [servicoCoberturaMetalica, servicoToldoFachada],
      features: ["Vãos livres calculados para caminhões", "Telhas sanduíche termoacústicas", "Pintura industrial anticorrosiva"],
      icon: ShieldCheck
    },
    {
      title: "Manutenção e Troca de Lona para Empresas",
      seoTitle: "Reforma de Toldos e Troca de Lona Curitiba | Toldos Comerciais",
      seoDescription: "Manutenção profissional de toldos, pintura de estrutura metálica e troca de lona desgastada para empresas em Curitiba.",
      description: "Renovação completa da fachada do seu comércio sem precisar fabricar uma estrutura nova. Trocamos sua lona rasgada ou desbotada por uma lona novíssima.",
      priceFrom: "A partir de R$ 220/m²",
      images: [servicoToldoComercial, servicoToldoLoja],
      features: ["Avaliação técnica da estrutura atual", "Remoção e descarte da lona antiga", "Pintura e lubrificação de engrenagens"],
      icon: RefreshCw
    }
  ];

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
    <section id="services" className="py-20 bg-[#1C1F22] text-[#F4EFE6] border-b border-border reveal-on-scroll">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-[#C8361D] font-sans font-bold text-xs tracking-[0.2em] uppercase block mb-3">
            NOSSOS SERVIÇOS
          </span>
          <h2 
            className="font-sans font-extrabold uppercase leading-tight tracking-tight mb-4 text-[#F4EFE6]"
            style={{ 
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(1.75rem, 7vw, 3rem)"
            }}
          >
            Toldos e Coberturas Industriais & Comerciais
          </h2>
          <p className="text-base text-gray-400 max-w-3xl leading-relaxed">
            Desenvolvemos projetos robustos e funcionais para dar proteção e alta visibilidade ao seu comércio. Clique em um serviço para ver fotos reais e especificações técnicas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white/5 border border-white/10 hover:border-[#C8361D] rounded-[2px] transition-all duration-200 group cursor-pointer flex flex-col justify-between overflow-hidden reveal-on-scroll"
              onClick={() => { setSelectedService(service); setCurrentImageIndex(0); }}
            >
              <div>
                {/* Image Section */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={service.images[0]}
                    alt={service.seoTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Subtle Price Overlay */}
                  <div className="absolute bottom-3 left-3 bg-[#1C1F22] px-2 py-1 text-xs border border-white/10 rounded-[2px] font-mono text-[#F2B705] font-bold">
                    {service.priceFrom}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <service.icon className="w-5 h-5 text-[#C8361D]" />
                    <h3 
                      className="text-lg font-bold text-[#F4EFE6] uppercase tracking-wide group-hover:text-[#C8361D] transition-colors"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 relative z-10">
                <Button
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    openWhatsapp(`Olá! Gostaria de um orçamento para: ${service.title}`); 
                  }}
                  className="w-full bg-[#C8361D] text-white text-xs font-bold tracking-wider uppercase py-2.5 rounded-[2px] transition-all cursor-pointer relative overflow-hidden z-10 btn-fill-hover"
                >
                  SOLICITAR ORÇAMENTO
                </Button>
              </div>

              {/* Red hover bar at card base */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C8361D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        {/* Faixa de Prova Concreta CTA */}
        <div className="mt-16 bg-[#F4EFE6] text-[#1C1F22] rounded-[2px] p-8 md:p-12 border border-border flex flex-col md:flex-row justify-between items-center gap-8 text-left">
          <div className="max-w-2xl">
            <span className="text-[#C8361D] font-bold text-xs tracking-[0.2em] uppercase block mb-2">PROPOSTA EM ATÉ 2 HORAS</span>
            <h3 
              className="text-2xl md:text-3xl font-extrabold uppercase leading-tight tracking-tight mb-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Envie fotos da sua fachada pelo WhatsApp!
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Receba um pré-projeto gratuito e estimativa de valores sem precisar parar as operações da sua empresa. Atendimento rápido e flexível para Curitiba e Região.
            </p>
          </div>
          <button
            onClick={() => openWhatsapp("Olá, gostaria de solicitar uma visita técnica para orçamento de toldo comercial!")}
            className="whitespace-nowrap bg-[#C8361D] hover:bg-[#C8361D]/90 text-white font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-[2px] transition-all cursor-pointer"
          >
            Falar com Engenheiro Técnico
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
            className="bg-[#1C1F22] text-[#F4EFE6] border border-white/10 rounded-[2px] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gallery with navigation */}
            <div className="relative">
              <img
                src={selectedService.images[currentImageIndex]}
                alt={`${selectedService.seoTitle} - Foto ${currentImageIndex + 1}`}
                className="w-full h-[300px] md:h-[400px] object-cover transition-opacity duration-300"
              />

              {/* Nav arrows */}
              {selectedService.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors cursor-pointer"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors cursor-pointer"
                    aria-label="Próxima foto"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {selectedService.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentImageIndex ? "bg-[#C8361D] scale-125" : "bg-white/50"}`}
                    aria-label={`Ver foto ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8 text-left">
              <h3 
                className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-[#F4EFE6] mb-1"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {selectedService.title}
              </h3>
              <p className="text-[#F2B705] font-mono font-bold text-lg mb-4">{selectedService.priceFrom}</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {selectedService.description}
              </p>

              <ul className="space-y-2.5 mb-8">
                {selectedService.features.map((f, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-[#C8361D] mr-3 flex-shrink-0 rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => openWhatsapp(`Olá, me interessei pelo serviço: ${selectedService.title}. Gostaria de um orçamento!`)}
                  className="flex-1 bg-[#C8361D] hover:bg-[#C8361D]/90 text-white font-extrabold py-3.5 px-6 rounded-[2px] text-center text-sm uppercase tracking-wider transition-colors cursor-pointer"
                >
                  💬 ORÇAMENTO VIA WHATSAPP
                </button>
                <a
                  href="tel:+554135646943"
                  className="flex-1 border border-white/20 hover:bg-white/5 text-[#F4EFE6] font-extrabold py-3.5 px-6 rounded-[2px] text-center text-sm uppercase tracking-wider transition-colors"
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
