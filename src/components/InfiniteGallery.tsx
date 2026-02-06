import { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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
    title: "Toldo em Policarbonato para Entrada",
    description: "Toldo curvo em policarbonato fumê instalado na entrada de residência. Proteção elegante contra chuva e sol com estrutura em alumínio reforçado. Ideal para portas de entrada, janelas e acessos. Durabilidade superior a 15 anos com manutenção mínima.",
    category: "Policarbonato",
    priceFrom: "A partir de R$ 180/m²"
  },
  {
    id: 2,
    image: galeriaToldoComercial,
    title: "Toldo Comercial para Supermercado",
    description: "Cortinas em lona branca para proteção de fachada comercial de supermercado. Solução robusta para grandes áreas com sistema de fixação industrial. Protege produtos e clientes contra intempéries. Material resistente a UV com vida útil estendida.",
    category: "Comercial",
    priceFrom: "A partir de R$ 120/m²"
  },
  {
    id: 3,
    image: galeriaCoberturaQuintal,
    title: "Cobertura em Policarbonato para Quintal",
    description: "Cobertura translúcida em policarbonato alveolar com estrutura metálica para área de quintal. Permite passagem de luz natural enquanto protege da chuva. Estrutura em aço galvanizado com pintura eletrostática resistente à corrosão.",
    category: "Policarbonato",
    priceFrom: "A partir de R$ 200/m²"
  },
  {
    id: 4,
    image: galeriaToldoLoja,
    title: "Toldo para Loja Comercial",
    description: "Toldo em lona amarela com estrutura metálica para fachada de loja esportiva. Projeto personalizado com cores da marca do estabelecimento. Excelente para visibilidade comercial e proteção de vitrines. Resistente a ventos de até 80km/h.",
    category: "Comercial",
    priceFrom: "A partir de R$ 150/m²"
  },
  {
    id: 5,
    image: galeriaCoberturaMetalica,
    title: "Cobertura Metálica Residencial",
    description: "Estrutura de cobertura em metalon e telhas para área de serviço residencial. Solução econômica e durável para proteger áreas externas. Construção sob medida com materiais resistentes a intempéries. Ideal para lavanderia, churrasqueira e garagem.",
    category: "Coberturas",
    priceFrom: "A partir de R$ 160/m²"
  },
  {
    id: 6,
    image: galeriaCortinaRolo,
    title: "Cortina Rolo Transparente",
    description: "Cortina rolo com visor transparente em PVC cristal para área gourmet. Permite visualização externa enquanto protege contra vento e chuva. Sistema retrátil com manivela ou motorizado. Perfeito para varandas, sacadas e espaços gastronômicos.",
    category: "Cortinas",
    priceFrom: "A partir de R$ 250/m²"
  },
  {
    id: 7,
    image: galeriaToldoGaragem,
    title: "Toldo para Garagem Residencial",
    description: "Toldo fixo com estrutura curva em metalon e lona cinza para garagem residencial. Proteção completa para veículos contra sol, chuva e granizo. Estrutura dimensionada para suportar ventos fortes. Pintura eletrostática com garantia de 5 anos.",
    category: "Residencial",
    priceFrom: "A partir de R$ 130/m²"
  },
  {
    id: 8,
    image: galeriaCoberturaGaragem,
    title: "Cobertura para Estacionamento",
    description: "Cobertura em lona tensionada com estrutura metálica treliçada para estacionamento. Solução de grande porte para proteção de múltiplos veículos. Estrutura calculada por engenheiro para máxima segurança. Resistente a ventos extremos e chuva.",
    category: "Coberturas",
    priceFrom: "A partir de R$ 140/m²"
  },
  {
    id: 9,
    image: galeriaPolicarbonatoArea,
    title: "Cobertura em Policarbonato para Área",
    description: "Cobertura em policarbonato opalino com estrutura em metalon azul para área de lazer. Excelente transmissão de luz difusa sem calor direto. Estrutura com treliça para vãos maiores sem colunas intermediárias. Garantia de 10 anos contra amarelamento.",
    category: "Policarbonato",
    priceFrom: "A partir de R$ 190/m²"
  },
  {
    id: 10,
    image: galeriaToldoCortina,
    title: "Cortina Toldo Vertical",
    description: "Toldo cortina vertical em lona blackout com trilho lateral para fechamento de varanda. Sistema com guias laterais que impede a entrada de vento e chuva. Ideal para sacadas, varandas gourmet e áreas de convivência. Disponível em diversas cores.",
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
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  const getContextualDescription = (item: GalleryItem) => {
    if (locationType === "home" || !locationName) return item.description;
    const prep = locationType === "bairro" ? "no" : "em";
    return `${item.description} Serviço disponível ${prep} ${locationName} com orçamento gratuito e visita técnica sem compromisso. A Sul Toldos atende ${prep} ${locationName} com materiais de primeira qualidade e equipe especializada.`;
  };

  // Duplicate items for seamless infinite scroll
  const duplicatedItems = [...defaultGalleryItems, ...defaultGalleryItems, ...defaultGalleryItems];

  useEffect(() => {
    const scroll = () => {
      setScrollPosition((prev) => {
        const itemWidth = 320;
        const totalWidth = defaultGalleryItems.length * itemWidth;
        const newPos = prev + 0.5;
        if (newPos >= totalWidth) return 0;
        return newPos;
      });
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
  };

  const handleMouseLeave = () => {
    const scroll = () => {
      setScrollPosition((prev) => {
        const itemWidth = 320;
        const totalWidth = defaultGalleryItems.length * itemWidth;
        const newPos = prev + 0.5;
        if (newPos >= totalWidth) return 0;
        return newPos;
      });
      animationRef.current = requestAnimationFrame(scroll);
    };
    animationRef.current = requestAnimationFrame(scroll);
  };

  const prep = locationType === "bairro" ? "no" : "em";
  const sectionTitle = locationName
    ? `Galeria de Trabalhos ${prep} ${locationName}`
    : "Galeria de Trabalhos";

  return (
    <section id="gallery" className="py-16 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {sectionTitle.split(locationName || "___")[0]}
            {locationName && <span className="text-primary">{locationName}</span>}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {locationName
              ? `Veja nossos projetos realizados ${prep} ${locationName}. Clique nas imagens para mais detalhes e preços por m².`
              : "Veja nossos projetos realizados em Curitiba e região. Clique nas imagens para mais detalhes e preços por m²."}
          </p>
        </div>
      </div>

      {/* Infinite Carousel */}
      <div
        ref={scrollRef}
        className="relative w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex gap-5 transition-none"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-[300px] cursor-pointer group"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={item.image}
                  alt={`${item.title} - Sul Toldos ${locationName}`}
                  className="w-full h-[220px] object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white font-bold text-base leading-tight">{item.title}</p>
                    <p className="text-primary font-semibold text-sm mt-1">{item.priceFrom}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA abaixo da galeria */}
      <div className="container mx-auto px-4 mt-10 text-center">
        <a
          href={`https://wa.me/5541998121324?text=${encodeURIComponent(`Olá, vi a galeria de trabalhos ${locationName ? `${prep} ${locationName}` : ""} e gostaria de um orçamento!`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-colors"
        >
          📱 SOLICITAR ORÇAMENTO GRÁTIS
        </a>
      </div>

      {/* Popup Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {selectedItem.category}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {selectedItem.title}
              </h3>
              {selectedItem.priceFrom && (
                <p className="text-primary font-bold text-xl mb-4">{selectedItem.priceFrom}</p>
              )}
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                {getContextualDescription(selectedItem)}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/5541998121324?text=${encodeURIComponent(`Olá, me interessei pelo serviço: ${selectedItem.title}${locationName ? ` ${prep} ${locationName}` : ""}. Gostaria de um orçamento!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg text-center text-lg transition-colors"
                >
                  💬 ORÇAMENTO GRÁTIS
                </a>
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

export default InfiniteGallery;
