import { useState } from "react";
import { X } from "lucide-react";
import { openWhatsapp } from "@/utils/whatsapp";

import galeriaPolicarbonatoEntrada from "@/assets/galeria-policarbonato-entrada.jpg";
import galeriaToldoComercial from "@/assets/galeria-toldo-comercial-supermercado.jpg";
import galeriaCoberturaQuintal from "@/assets/galeria-cobertura-quintal.jpg";
import galeriaToldoLoja from "@/assets/galeria-toldo-loja.jpg";
import galeriaCoberturaMetalica from "@/assets/galeria-cobertura-metalica.jpg";
import galeriaCortinaRolo from "@/assets/galeria-cortina-rolo.jpg";
import galeriaToldoGaragem from "@/assets/galeria-toldo-garagem.jpg";
import galeriaCoberturaGaragem from "@/assets/galeria-cobertura-garagem.jpg";
import galeriaPolicarbonatoArea from "@/assets/galeria-policarbonato-area.jpg";
import galeriaToldoCortina from "@/assets/galeria-toldo-cortina.jpg";

export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  priceFrom?: string;
}

const defaultGalleryItems: GalleryItem[] = [
  {
    id: 1,
    image: galeriaPolicarbonatoEntrada,
    title: "Cobertura em Policarbonato para Escritório",
    description: "Toldo curvo em policarbonato fumê instalado na recepção de edifício corporativo. Proteção elegante contra chuva e sol com estrutura em alumínio reforçado. Ideal para acessos de clínicas, cartórios e comércios.",
    category: "Policarbonato",
    priceFrom: "A partir de R$ 240/m²"
  },
  {
    id: 2,
    image: galeriaToldoComercial,
    title: "Toldo de Lona para Supermercado",
    description: "Cortinas verticais em lona cinza de alta resistência para proteção de área externa de supermercado. Solução robusta com sistema de engrenagem industrial, excelente proteção climática.",
    category: "Comercial",
    priceFrom: "A partir de R$ 220/m²"
  },
  {
    id: 3,
    image: galeriaCoberturaQuintal,
    title: "Cobertura em Policarbonato para Restaurante",
    description: "Cobertura translúcida em policarbonato alveolar para área de atendimento de bar e restaurante. Permite passagem de iluminação natural enquanto protege os clientes do vento e da chuva.",
    category: "Policarbonato",
    priceFrom: "A partir = R$ 240/m²"
  },
  {
    id: 4,
    image: galeriaToldoLoja,
    title: "Toldo de Fachada para Loja",
    description: "Toldo fixo reto com estrutura metálica galvanizada sob medida para fachada comercial. Lona personalizada de alta visibilidade e acabamento com impressão de alta resolução do logotipo.",
    category: "Comercial",
    priceFrom: "A partir de R$ 220/m²"
  },
  {
    id: 5,
    image: galeriaCoberturaMetalica,
    title: "Cobertura Metálica de Carga/Descarga",
    description: "Estrutura de cobertura em metalon de vãos amplos para área de recebimento de mercadorias em galpão logístico ou fábrica. Proteção garantida para suas operações comerciais.",
    category: "Coberturas",
    priceFrom: "A partir de R$ 220/m²"
  },
  {
    id: 6,
    image: galeriaCortinaRolo,
    title: "Toldo Cortina de PVC Cristal",
    description: "Cortina rolo vertical retrátil com visor transparente em PVC cristal para varanda de restaurante. Permite climatização térmico-acústica sem perder a visibilidade da calçada.",
    category: "Cortinas",
    priceFrom: "A partir de R$ 220/m²"
  },
  {
    id: 7,
    image: galeriaToldoGaragem,
    title: "Cobertura para Estacionamento de Clínica",
    description: "Toldo fixo robusto em arco com estrutura de aço galvanizado anticorrosão e lona vinílica para vagas rotativas de clientes. Proteção integral contra granizo e intempéries.",
    category: "Estacionamento",
    priceFrom: "A partir de R$ 220/m²"
  },
  {
    id: 8,
    image: galeriaCoberturaGaragem,
    title: "Cobertura de Estacionamento Corporativo",
    description: "Cobertura em lona tensionada estruturada para proteção de frota de veículos em pátios comerciais e indústrias. Dimensionada por engenheiro para suportar ventos de grande escala.",
    category: "Coberturas",
    priceFrom: "A partir de R$ 220/m²"
  },
  {
    id: 9,
    image: galeriaPolicarbonatoArea,
    title: "Cobertura em Policarbonato para Condomínio",
    description: "Cobertura em policarbonato compacto opalino com estrutura metálica fina para circulação interna de pedestres em condomínio comercial. Sofisticação e resistência de alto padrão.",
    category: "Policarbonato",
    priceFrom: "A partir de R$ 280/m²"
  },
  {
    id: 10,
    image: galeriaToldoCortina,
    title: "Toldo Cortina Vertical Corta-Vento",
    description: "Toldo vertical retrátil em lona vinílica blackout reforçada para fechamento lateral de cafeteria ou restaurante de rua. Proteção eficiente contra chuva lateral e ventanias.",
    category: "Cortinas",
    priceFrom: "A partir de R$ 220/m²"
  }
];

interface InfiniteGalleryProps {
  locationName?: string;
  locationType?: "bairro" | "cidade" | "home";
}

const InfiniteGallery = ({ locationName = "", locationType = "home" }: InfiniteGalleryProps) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const getContextualDescription = (item: GalleryItem) => {
    if (locationType === "home" || !locationName) return item.description;
    const prep = locationType === "bairro" ? "no" : "em";
    return `${item.description} Serviço disponível ${prep} ${locationName} com projeto sob medida e garantia estendida de fábrica pela Toldos Comerciais Curitiba.`;
  };

  const prep = locationType === "bairro" ? "no" : "em";
  const sectionTitle = locationName
    ? `Galeria de Trabalhos ${prep} ${locationName}`
    : "Galeria de Projetos Realizados";

  // Triplicar para loop perfeito sem saltos
  const tripled = [...defaultGalleryItems, ...defaultGalleryItems, ...defaultGalleryItems];

  return (
    <section id="gallery" className="py-20 bg-[#1C1F22] text-[#F4EFE6] overflow-hidden border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 mb-12">
        <div className="text-center">
          <span className="inline-block bg-[#F2B705] text-[#1C1F22] font-sans font-extrabold text-[10px] md:text-xs tracking-[0.2em] uppercase px-3 py-1.5 mb-6 rounded-[2px]">
            03 — GALERIA DE CASOS
          </span>
          <h2 
            className="font-extrabold uppercase leading-tight tracking-tight mb-4"
            style={{ 
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(1.75rem, 7vw, 3rem)"
            }}
          >
            {locationName ? (
              <>Projetos Instalados {prep} <span className="text-[#C8361D]">{locationName}</span></>
            ) : (
              <>Projetos Instalados em <span className="text-[#C8361D]">Curitiba</span></>
            )}
          </h2>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {locationName
              ? `Confira as estruturas que montamos para destacar e proteger comércios ${prep} ${locationName}. Clique para ver detalhes e referências.`
              : "Veja exemplos reais de toldos de fachada, retráteis de lona e coberturas comerciais em policarbonato de alta resistência."}
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Scroll */}
      <div
        className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          className="flex gap-4"
          style={{
            animation: `scrollGallery 40s linear infinite`,
            animationPlayState: isPaused ? "paused" : "running",
            width: "max-content",
          }}
        >
          {tripled.map((item, index) => (
            <button
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-[280px] md:w-[320px] cursor-pointer group text-left border-0 bg-transparent p-0 outline-none"
              onClick={() => setSelectedItem(item)}
              aria-label={`Ver detalhes: ${item.title}`}
            >
              <div className="relative overflow-hidden rounded-[2px] border border-white/10 aspect-[4/3]">
                <img
                  src={item.image}
                  alt={`${item.title} - Toldos Comerciais Curitiba${locationName ? ` ${locationName}` : ""}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading={index < 10 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-sm uppercase leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      {item.title}
                    </p>
                    <p className="text-[#F2B705] font-bold text-xs mt-1">{item.priceFrom}</p>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-[#C8361D] text-white text-[9px] font-extrabold uppercase tracking-widest px-2 py-1 rounded-[1px]">
                  {item.category}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="max-w-[1200px] mx-auto px-6 mt-12 text-center">
        <button
          onClick={() => openWhatsapp("Olá, vi os projetos na galeria e gostaria de pedir um orçamento para minha empresa!")}
          className="inline-block bg-[#C8361D] hover:bg-[#C8361D]/90 text-white font-extrabold text-xs uppercase tracking-widest py-5 px-10 rounded-[2px] transition-all duration-300 hover:scale-105 cursor-pointer border-0 outline-none"
        >
          Pedir Orçamento Grátis com Visita Técnica
        </button>
      </div>

      {/* Popup Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-[#1C1F22] text-[#F4EFE6] border border-white/10 rounded-[2px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-[260px] md:h-[380px] object-cover"
                loading="eager"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#C8361D] text-white text-xs font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-[1px]">
                  {selectedItem.category}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h3 
                className="text-2xl md:text-3xl font-extrabold uppercase text-[#F4EFE6] mb-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {selectedItem.title}
              </h3>
              {selectedItem.priceFrom && (
                <p className="text-[#F2B705] font-extrabold text-lg mb-4">{selectedItem.priceFrom}</p>
              )}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 border-t border-white/10 pt-4">
                {getContextualDescription(selectedItem)}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => openWhatsapp(`Olá, vi ${selectedItem.title} na galeria e gostaria de saber as condições comerciais!`)}
                  className="flex-1 bg-[#C8361D] hover:bg-[#C8361D]/90 text-white font-extrabold text-xs uppercase tracking-widest py-4 px-6 rounded-[2px] text-center transition-colors cursor-pointer border-0 outline-none"
                >
                  💬 Enviar Mensagem no WhatsApp
                </button>
                <a
                  href="tel:+554135646943"
                  className="flex-1 border border-white/20 hover:bg-white/5 text-[#F4EFE6] font-extrabold text-xs uppercase tracking-widest py-4 px-6 rounded-[2px] text-center transition-colors"
                >
                  📞 Chamar Engenheiro: (41) 3564-6943
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InfiniteGallery;
