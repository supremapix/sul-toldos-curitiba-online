import { useParams } from "react-router-dom";
import EnhancedSEO from "@/components/EnhancedSEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeVideo from "@/components/YouTubeVideo";
import FloatingButtons from "@/components/FloatingButtons";
import ServiceCards from "@/components/ServiceCards";
import LocationFAQ from "@/components/LocationFAQ";
import InfiniteGallery from "@/components/InfiniteGallery";
import { Button } from "@/components/ui/button";
import { openWhatsapp } from "@/utils/whatsapp";

import galeriaPolicarbonatoEntrada from "@/assets/galeria-policarbonato-entrada.jpg";
import galeriaToldoComercial from "@/assets/galeria-toldo-comercial-supermercado.jpg";
import galeriaToldoLoja from "@/assets/galeria-toldo-loja.jpg";
import galeriaToldoGaragem from "@/assets/galeria-toldo-garagem.jpg";

const CidadePage = () => {
  const { cidade } = useParams();
  
  const cityName = cidade?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') || "";
  const citySlug = cidade || "";

  interface CityInfo {
    image: string;
    population: string;
    neighborhoods: string;
    specialty: string;
    mainServices: string[];
    geo: { lat: string; lng: string };
  }

  const cityData: Record<string, CityInfo> = {
    curitiba: {
      image: galeriaToldoLoja,
      population: "1.9 milhão",
      neighborhoods: "75 bairros",
      specialty: "Capital paranaense com altíssima demanda por toldos comerciais e projetos de fachada de lojas e restaurantes",
      mainServices: ["Toldo de fachada para lojas", "Toldos retráteis para restaurantes", "Lona com logotipo impresso", "Coberturas comerciais em policarbonato"],
      geo: { lat: "-25.4284", lng: "-49.2733" }
    },
    pinhais: {
      image: galeriaToldoGaragem,
      population: "130 mil",
      neighborhoods: "região metropolitana",
      specialty: "Município vizinho com expressivo desenvolvimento comercial e indústrias que exigem galpões e áreas de carga protegidas",
      mainServices: ["Coberturas metálicas industriais", "Toldos para fachadas de comércio", "Manutenção e reforma de toldos", "Toldo cortina retrátil"],
      geo: { lat: "-25.4426", lng: "-49.1925" }
    },
    "sao-jose-dos-pinhais": {
      image: galeriaToldoComercial,
      population: "329 mil",
      neighborhoods: "diversos bairros",
      specialty: "Centro industrial e comercial relevante na RMC com forte demanda por coberturas de grandes vãos e fachadas comerciais",
      mainServices: ["Toldos industriais de carga/descarga", "Lonas personalizadas de alta resistência", "Coberturas de policarbonato", "Toldo retrátil de bar"],
      geo: { lat: "-25.5304", lng: "-49.2084" }
    },
    colombo: {
      image: galeriaPolicarbonatoEntrada,
      population: "240 mil",
      neighborhoods: "região metropolitana",
      specialty: "Cidade residencial e comercial com forte mercado de pequenas lojas, supermercados e conveniências",
      mainServices: ["Toldo fixo para fachadas de comércios", "Toldo cortina de calçada", "Cobertura em policarbonato", "Toldos capota para farmácias"],
      geo: { lat: "-25.2917", lng: "-49.2242" }
    }
  };

  const defaultCity = {
    image: galeriaToldoLoja,
    population: "região metropolitana",
    neighborhoods: "diversos bairros",
    specialty: "Cidade da região metropolitana de Curitiba com forte presença de comércio local e indústrias em expansão",
    mainServices: ["Toldos fixos para lojas", "Toldos retráteis comerciais", "Lona personalizada com logotipo", "Cobertura comercial de policarbonato"],
    geo: { lat: "-25.4284", lng: "-49.2733" }
  };

  const currentCity = cityData[citySlug] || defaultCity;

  const handleWhatsApp = () => {
    const message = `Olá! Gostaria de solicitar um orçamento para toldo comercial em ${cityName}!`;
    openWhatsapp(message);
  };

  const getServiceCards = () => [
    {
      title: `Toldos de Fachada para Lojas em ${cityName}`,
      icon: "🏢",
      content: `A Toldos Comerciais Curitiba é referência absoluta no projeto e instalação de toldos de fachada em ${cityName}. Fabricamos toldos fixos e capotas sob medida, a partir de R$ 220/m², perfeitos para destacar lojas, boutiques, farmácias e clínicas corporativas.\n\nNossos projetos unem proteção climática contra o sol e chuva direta e comunicação visual de alto padrão. Utilizamos estruturas em metalon galvanizado de alta estabilidade e tecidos vinílicos ou acrílicos nacionais e importados de extrema durabilidade.\n\nAgende uma visita técnica sem compromisso em ${cityName} para obter as medidas exatas para sua fachada.`
    },
    {
      title: `Toldos Retráteis para Restaurantes em ${cityName}`,
      icon: "🍽️",
      content: `Expanda o espaço de atendimento do seu restaurante, bar ou café em ${cityName} com nossos toldos retráteis. Projetados com braços articulados de tecnologia avançada, permitem estender ou recolher a estrutura rapidamente conforme o clima.\n\nToldos retráteis manuais partem de R$ 250/m² e os motorizados de R$ 380/m², oferecendo uma lona com sua marca impressa e máxima durabilidade para proteger seus clientes na calçada.\n\nToldos cortina em PVC cristal transparente também garantem o fechamento vertical térmico ideal contra vento forte em ${cityName}.`
    },
    {
      title: `Preços e Projetos Comerciais em ${cityName}`,
      icon: "💰",
      content: `Oferecemos as melhores condições de pagamento de toldos comerciais em ${cityName}! Confira nossas faixas de preço base de mercado:\n\n• Toldo fixo comercial em lona: a partir de R$ 220/m²\n• Toldo retrátil articulado manual: a partir de R$ 250/m²\n• Toldo retrátil automático: a partir de R$ 380/m²\n• Cobertura de policarbonato alveolar: a partir de R$ 240/m²\n• Fechamento vertical PVC cristal: a partir de R$ 220/m²\n\nOpção de parcelamento em até 12x no cartão ou condições faturadas para pessoa jurídica sob consulta.`
    },
    {
      title: `Qualidade Corporativa por Contrato em ${cityName}`,
      icon: "📜",
      content: `Trabalhamos com materiais de alta resistência que atendem às normas exigidas de segurança: lonas Sansuy e Guarany retardantes de chama, solda eletrônica de alta frequência, e pintura anticorrosiva de estruturas.\n\nTodos os nossos serviços em ${cityName} contam com garantia por escrito em contrato detalhado de até 5 anos para as partes metálicas estruturais, e manutenção e reforma de lona sob medida disponível.\n\nSegurança total para as operações comerciais e o patrimônio da sua empresa.`
    }
  ];

  const getCityFAQs = () => [
    {
      question: `Quanto custa um toldo comercial por m² em ${cityName}?`,
      answer: `Os preços básicos de toldos em ${cityName} dependem do formato do projeto. Toldo fixo comercial parte de R$ 220/m², toldos retráteis manuais partem de R$ 250/m², retráteis motorizados a partir de R$ 380/m², e coberturas de policarbonato compacto a partir de R$ 280/m². Oferecemos visita técnica técnica 100% gratuita para avaliar o vão, as dimensões exatas e a fixação estrutural ideal na fachada da sua empresa em ${cityName}.`
    },
    {
      question: `Vocês atendem todos os bairros de ${cityName}?`,
      answer: `Sim! Prestamos serviços completos de ponta a ponta em toda a extensão territorial de ${cityName}, englobando tanto o centro comercial quanto as zonas industriais e bairros mais distantes. Nossos engenheiros técnicos realizam visitas agendadas sem custo para levantar as especificações e apresentar orçamentos detalhados na hora.`
    },
    {
      question: `Qual o melhor tipo de toldo para restaurantes em ${cityName}?`,
      answer: `Recomendamos o toldo retrátil de braço articulado (a partir de R$ 250/m²) combinado com toldos cortina verticais em PVC cristal transparente (a partir de R$ 220/m²). Essa solução integrada permite ampliar a área útil externa nas calçadas de ${cityName}, oferecendo climatização ideal e proteção rápida contra ventos fortes ou chuva repentina.`
    },
    {
      question: `Como funciona a gravação do logotipo da minha marca no toldo?`,
      answer: `Realizamos a impressão digital UV direta de alta resolução ou o recorte digital em película vinílica de alta aderência sobre a lona do toldo. Isso garante que a identidade visual do seu comércio em ${cityName} seja transmitida com fidelidade absoluta de cores e excelente leitura mesmo à distância, ajudando a sua fachada a vender mais.`
    },
    {
      question: `A Toldos Comerciais Curitiba dá garantia por escrito?`,
      answer: `Sim! Oferecemos garantia formalizada em contrato para todas as instalações em ${cityName}. Estruturas metálicas galvanizadas contam com até 5 anos de garantia, coberturas em policarbonato contra amarelamento e intempéries por até 10 anos, e mecanismos e motores automatizados contam com 2 anos de assistência técnica total.`
    }
  ];

  const cityStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Toldos Comerciais Curitiba - ${cityName}`,
    "description": `Toldos comerciais, lonas com logomarca e coberturas de policarbonato em ${cityName} a partir de R$ 220/m². Orçamento e visita técnica gratuitos!`,
    "url": `https://toldoscomerciaiscuritiba.com.br/cidade/${citySlug}`,
    "telephone": ["+554135646943", "+5541995304757", "+5541991031466"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": currentCity.geo?.lat || "-25.4284",
      "longitude": currentCity.geo?.lng || "-49.2733"
    },
    "priceRange": "$$",
    "openingHours": ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    },
    "serviceArea": {
      "@type": "Place",
      "name": cityName
    }
  };

  return (
    <>
      <EnhancedSEO
        title={`Toldos Comerciais em ${cityName} | A Partir R$ 220/m² | Orçamento Grátis`}
        description={`Especialista em toldos comerciais, coberturas e lona com logomarca em ${cityName} a partir de R$ 220/m². Visita técnica gratuita sem compromisso! ☎️ (41) 3564-6943.`}
        keywords={`toldos comerciais ${cityName.toLowerCase()}, toldo para loja ${cityName.toLowerCase()}, toldo para restaurante ${cityName.toLowerCase()}, policarbonato ${cityName.toLowerCase()}, cobertura ${cityName.toLowerCase()}, toldo retrátil ${cityName.toLowerCase()}, lona com logotipo, cobertura estacionamento`}
        canonical={`https://toldoscomerciaiscuritiba.com.br/cidade/${citySlug}`}
        structuredData={cityStructuredData}
        location={cityName}
        service={`toldos comerciais e coberturas corporativas em ${cityName}`}
      />

      <div className="min-h-screen bg-[#F4EFE6] text-[#1C1F22]">
        <Header />
        <FloatingButtons />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-[#1C1F22] text-[#F4EFE6] border-b border-border">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7">
                  <span className="inline-block bg-[#F2B705] text-[#1C1F22] font-sans font-extrabold text-[10px] md:text-xs tracking-[0.2em] uppercase px-3 py-1.5 mb-6 rounded-[2px]">
                    ESTRUTURAS METÁLICAS & LONAS EM {cityName.toUpperCase()}
                  </span>
                  <h1 
                    className="text-4xl lg:text-6xl font-extrabold uppercase leading-[1.05] tracking-tight mb-6"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Toldos Comerciais em <span className="text-[#C8361D]">{cityName}</span>
                    <span className="block text-xl lg:text-2xl mt-3 text-gray-400 font-normal normal-case">
                      Projetos sob medida a partir de R$ 220/m²
                    </span>
                  </h1>
                  <p className="text-base text-gray-300 mb-8 leading-relaxed">
                    A Toldos Comerciais Curitiba desenvolve soluções completas em toldos fixos, retráteis e coberturas de policarbonato de alta resistência em {cityName}. Visitas gratuitas no local de segunda a sábado para planejar a estrutura ideal sem atrapalhar o seu fluxo de vendas.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button 
                      onClick={handleWhatsApp}
                      size="lg"
                      className="bg-[#C8361D] hover:bg-[#C8361D]/90 text-white font-extrabold text-xs uppercase tracking-wider py-5 px-8 rounded-[2px] h-auto cursor-pointer"
                    >
                      Pedir orçamento para minha empresa
                    </Button>
                    <Button 
                      variant="outline"
                      size="lg"
                      onClick={() => window.open("tel:+554135646943")}
                      className="border-gray-600 hover:border-white text-[#F4EFE6] hover:bg-[#F4EFE6] hover:text-[#1C1F22] font-extrabold text-xs uppercase tracking-wider py-5 px-8 rounded-[2px] h-auto cursor-pointer"
                    >
                      📞 Ligar: (41) 3564-6943
                    </Button>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-white/5 border border-white/10 rounded-[2px] p-4">
                      <div className="text-xl font-bold text-[#F2B705] font-mono">{currentCity.population}</div>
                      <div className="text-[10px] text-gray-400 uppercase font-semibold">habitantes</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-[2px] p-4">
                      <div className="text-xl font-bold text-[#F2B705] font-mono">Contrato</div>
                      <div className="text-[10px] text-gray-400 uppercase font-semibold">garantia por escrito</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-[2px] p-4">
                      <div className="text-xl font-bold text-[#F2B705] font-mono">100%</div>
                      <div className="text-[10px] text-gray-400 uppercase font-semibold">foco comercial</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 relative min-h-[300px] overflow-hidden rounded-[2px] border border-white/10 aspect-video lg:aspect-auto lg:h-[450px]">
                  <img 
                    src={currentCity.image} 
                    alt={`Toldos Comerciais em ${cityName}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </section>

          <ServiceCards location={cityName} type="cidade" cards={getServiceCards()} />

          <InfiniteGallery locationName={cityName} locationType="cidade" />

          <LocationFAQ location={cityName} type="cidade" faqs={getCityFAQs()} />

          <YouTubeVideo 
            title={`Veja nosso trabalho comercial em ${cityName}`}
            subtitle={`Conheça o alto padrão estrutural e estético das nossas coberturas comerciais instaladas em ${cityName}`}
            ctaText={`Solicitar Orçamento em ${cityName}`}
            ctaAction={handleWhatsApp}
          />

          {/* CTA Final */}
          <section className="py-20 bg-[#1C1F22] text-[#F4EFE6] border-t border-border">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
              <h2 
                className="text-3xl md:text-5xl font-extrabold uppercase leading-tight tracking-tight mb-4 text-[#F4EFE6]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Pronto para renovar a fachada da sua empresa em <span className="text-[#C8361D]">{cityName}</span>?
              </h2>
              <p className="text-sm text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Agende hoje mesmo sua visita técnica de medidas e projeto sem compromisso. Equipe profissional com certificação estrutural completa para garantir segurança e visibilidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button onClick={handleWhatsApp} size="lg" className="bg-[#C8361D] hover:bg-[#C8361D]/90 text-white font-extrabold text-xs uppercase tracking-widest py-5 px-8 rounded-[2px] h-auto cursor-pointer">
                  💬 Falar no WhatsApp
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.open("tel:+554135646943")} className="border-gray-600 hover:border-white text-[#F4EFE6] hover:bg-[#F4EFE6] hover:text-[#1C1F22] font-extrabold text-xs uppercase tracking-widest py-5 px-8 rounded-[2px] h-auto cursor-pointer">
                  📞 Ligar agora
                </Button>
              </div>
              <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">
                ✓ Visita técnica sem custo • ✓ Lona de alta durabilidade • ✓ Garantia registrada em contrato
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CidadePage;
