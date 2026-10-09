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

const BairroPage = () => {
  const { bairro } = useParams();
  
  const bairroName = bairro?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') || "";
  const bairroSlug = bairro || "";

  interface BairroInfo {
    image: string;
    zone: string;
    profile: string;
    specialty: string;
    mainServices: string[];
  }

  const bairroData: Record<string, BairroInfo> = {
    "agua-verde": {
      image: galeriaToldoLoja,
      zone: "Zona Sul",
      profile: "Comercial e corporativo nobre",
      specialty: "Bairro com forte concentração de escritórios, clínicas e restaurantes sofisticados que exigem toldos de alto padrão",
      mainServices: ["Toldos retráteis para restaurantes", "Toldo de fachada sob medida", "Coberturas de policarbonato compacto", "Lonas personalizadas"]
    },
    "centro": {
      image: galeriaPolicarbonatoEntrada,
      zone: "Região Central",
      profile: "Comercial de alta densidade",
      specialty: "Centro histórico e de compras com imenso fluxo de pedestres, exigindo toldos fixos elegantes e capotas personalizadas",
      mainServices: ["Toldo de fachada para lojas", "Troca de lona comercial", "Toldos fixos em metalon", "Comunicação visual para comércio"]
    },
    "batel": {
      image: galeriaToldoLoja,
      zone: "Zona Sul",
      profile: "Comercial e gastronômico premium",
      specialty: "Área nobre de Curitiba com boutiques de grife e alta gastronomia que demandam toldos de lona acrílica de luxo",
      mainServices: ["Toldos retráteis articulados", "Sistemas automatizados premium", "Toldos de fachada de luxo", "Coberturas termoacústicas"]
    },
    "portao": {
      image: galeriaToldoGaragem,
      zone: "Zona Sul",
      profile: "Comercial e de serviços",
      specialty: "Grande corredor comercial com lojas de departamento, oficinas e revendedoras com forte necessidade de coberturas",
      mainServices: ["Coberturas para estacionamento", "Toldo capota para fachadas", "Troca e reforma de lona", "Toldo vertical cortina"]
    },
    "cajuru": {
      image: galeriaToldoComercial,
      zone: "Zona Leste",
      profile: "Comercial em expansão",
      specialty: "Bairro de Curitiba com comércio local pulsante, mercados, autopeças e postos de serviço em pleno crescimento",
      mainServices: ["Toldos comerciais econômicos", "Coberturas metálicas", "Toldos retráteis de bar", "Toldo fixo para fachadas"]
    }
  };

  const defaultBairro = {
    image: galeriaToldoGaragem,
    zone: "Curitiba",
    profile: "Comercial/Corporativo",
    specialty: "Bairro de Curitiba com expressiva movimentação comercial e necessidade de coberturas profissionais de fachada",
    mainServices: ["Toldo fixo de lona para loja", "Toldo retrátil de restaurante", "Cobertura em policarbonato", "Lonas personalizadas com logomarca"]
  };

  const currentBairro = bairroData[bairroSlug] || defaultBairro;

  const handleWhatsApp = () => {
    const message = `Olá! Gostaria de solicitar um orçamento para toldo comercial no bairro ${bairroName}, Curitiba!`;
    openWhatsapp(message);
  };

  const getServiceCards = () => [
    {
      title: `Toldos de Fachada para Lojas no ${bairroName}`,
      icon: "🏢",
      content: `A Toldos Comerciais Curitiba oferece soluções completas e exclusivas de comunicação visual e proteção para lojas no ${bairroName}, Curitiba. Criamos projetos sob medida para que a sua fachada venda mais, harmonizando a lona com as cores e logotipo da sua marca.\n\nPreços para o ${bairroName}:\n• Toldo fixo para vitrine: a partir de R$ 220/m²\n• Toldo capota comercial: a partir de R$ 220/m²\n\nNossos técnicos estão sempre disponíveis para visitas de medição gratuitas em qualquer avenida comercial do ${bairroName}.`
    },
    {
      title: `Soluções para Restaurantes e Bares no ${bairroName}`,
      icon: "🍽️",
      content: `O ${bairroName} conta com um comércio de alimentação dinâmico. Nossos toldos retráteis articulados de lona acrílica (a partir de R$ 250/m²) e toldos cortina verticais em PVC cristal (a partir de R$ 220/m²) são o investimento perfeito para ampliar e aproveitar sua área de calçada externa.\n\nProteja seus clientes do sol curitibano e das chuvas repentinas sem comprometer a estética arquitetônica do seu bar ou restaurante no ${bairroName}.`
    },
    {
      title: `Coberturas em Policarbonato no ${bairroName}`,
      icon: "🚘",
      content: `Para garagens corporativas, estacionamentos comerciais e entradas de clínicas ou escritórios no ${bairroName}, as coberturas em policarbonato alveolar ou compacto (a partir de R$ 240/m²) são sinônimo de elegância e durabilidade máxima.\n\nEstruturas metálicas de alta resistência contra granizo e intempéries climáticas de Curitiba, com projeto e cálculo estrutural integrados.`
    },
    {
      title: `Instalação Otimizada e Ágil no ${bairroName}`,
      icon: "⏱️",
      content: `Nossa proximidade operacional com o ${bairroName} garante agendamento de montagem flexível — inclusive aos finais de semana ou fora do horário de expediente comercial, reduzindo qualquer impacto no fluxo de clientes do seu negócio.\n\nGarantia formalizada de até 5 anos em contrato registrado, materiais Sansuy premium e nota fiscal emitida em todas as obras.`
    }
  ];

  const getBairroFAQs = () => [
    {
      question: `Quanto custa instalar um toldo comercial no ${bairroName}?`,
      answer: `Os investimentos de toldos no ${bairroName} iniciam a partir de R$ 220/m² para modelos fixos de fachada em lona vinílica reforçada. Toldos retráteis de braços articulados partem de R$ 250/m² e coberturas em policarbonato alveolar a partir de R$ 240/m². O preço final varia conforme o vão, a altura de instalação e o tipo de lona. Agendamos visitas técnicas e projetos gratuitos para sua empresa.`
    },
    {
      question: `Qual o prazo médio de instalação no ${bairroName}?`,
      answer: `Graças à nossa logística dedicada em Curitiba, entregamos toldos de fachada em lona de 5 a 10 dias úteis e coberturas de policarbonato de 10 a 15 dias úteis no ${bairroName}. Cumprimos o cronograma rigorosamente conforme estipulado em contrato.`
    },
    {
      question: `Vocês realizam a troca de lona com logomarca no ${bairroName}?`,
      answer: `Sim! Se a sua lona comercial está desbotada ou rasgada, fornecemos a reforma de lona sob medida com impressão digital UV de alta resolução do seu logotipo. Preservamos sua estrutura metálica antiga, oferecendo uma economia de até 50% sobre um toldo novo.`
    },
    {
      question: `É necessário paralisar o atendimento do meu bar ou loja durante a montagem?`,
      answer: `Não! Nós planejamos e executamos a instalação no ${bairroName} em horários estratégicos, seja de manhã bem cedo, no período noturno ou aos domingos, para que as vendas e o atendimento aos seus clientes não sofram nenhuma interrupção.`
    }
  ];

  const bairroStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Toldos Comerciais Curitiba - ${bairroName}`,
    "description": `Toldos comerciais, coberturas de policarbonato e lonas personalizadas no bairro ${bairroName} em Curitiba a partir de R$ 220/m².`,
    "url": `https://toldoscomerciaiscuritiba.com.br/bairro/${bairroSlug}`,
    "telephone": ["+554135646943", "+5541995304757", "+5541991031466"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-25.4284",
      "longitude": "-49.2733"
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
      "name": `${bairroName}, Curitiba`
    }
  };

  return (
    <>
      <EnhancedSEO
        title={`Toldos Comerciais no ${bairroName} Curitiba | A Partir R$ 220/m²`}
        description={`Coberturas, toldos retráteis de bar e lonas personalizadas no ${bairroName} em Curitiba a partir de R$ 220/m². Visita técnica gratuita sem compromisso! ☎️ (41) 3564-6943.`}
        keywords={`toldos comerciais ${bairroName.toLowerCase()}, toldo para loja ${bairroName.toLowerCase()}, toldo para restaurante ${bairroName.toLowerCase()}, policarbonato ${bairroName.toLowerCase()}, cobertura ${bairroName.toLowerCase()}, toldo retrátil, lona com logotipo`}
        canonical={`https://toldoscomerciaiscuritiba.com.br/bairro/${bairroSlug}`}
        structuredData={bairroStructuredData}
        location={`${bairroName}, Curitiba`}
        service={`toldos no ${bairroName}`}
      />

      <div className="min-h-screen bg-[#F4EFE6] text-[#1C1F22]">
        <Header />
        <FloatingButtons />
        
        <main>
          {/* Hero */}
          <section className="py-20 bg-[#1C1F22] text-[#F4EFE6] border-b border-border">
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7">
                  <span className="inline-block bg-[#F2B705] text-[#1C1F22] font-sans font-extrabold text-[10px] md:text-xs tracking-[0.2em] uppercase px-3 py-1.5 mb-6 rounded-[2px]">
                    PROJETOS CORPORATIVOS EM CURITIBA — {bairroName.toUpperCase()}
                  </span>
                  <h1 
                    className="text-4xl lg:text-6xl font-extrabold uppercase leading-[1.05] tracking-tight mb-6"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Toldos no <span className="text-[#C8361D]">{bairroName}</span>
                    <span className="block text-xl lg:text-2xl mt-3 text-gray-400 font-normal normal-case">
                      Projetos para comércios e restaurantes a partir de R$ 220/m²
                    </span>
                  </h1>
                  <p className="text-base text-gray-300 mb-8 leading-relaxed">
                    A Toldos Comerciais Curitiba atende dezenas de lojas, restaurantes, clínicas e condomínios no {bairroName} com projetos sob medida que potencializam a comunicação visual e aumentam as vendas. Agende sua visita técnica de medidas sem custos com nosso consultor comercial.
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
                      <div className="text-xl font-bold text-[#F2B705] font-mono">{currentBairro.zone}</div>
                      <div className="text-[10px] text-gray-400 uppercase font-semibold">região</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-[2px] p-4">
                      <div className="text-xl font-bold text-[#F2B705] font-mono">100%</div>
                      <div className="text-[10px] text-gray-400 uppercase font-semibold">foco comercial</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-[2px] p-4">
                      <div className="text-xl font-bold text-[#F2B705] font-mono">Contrato</div>
                      <div className="text-[10px] text-gray-400 uppercase font-semibold">garantia de fábrica</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 relative min-h-[300px] overflow-hidden rounded-[2px] border border-white/10 aspect-video lg:aspect-auto lg:h-[450px]">
                  <img 
                    src={currentBairro.image} 
                    alt={`Toldos Comerciais no ${bairroName}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </section>

          <ServiceCards location={bairroName} type="bairro" cards={getServiceCards()} />

          <InfiniteGallery locationName={bairroName} locationType="bairro" />

          <LocationFAQ location={bairroName} type="bairro" faqs={getBairroFAQs()} />

          <YouTubeVideo 
            title={`Instalações no ${bairroName}`}
            subtitle={`Conheça a qualidade e a agilidade da Toldos Comerciais Curitiba no ${bairroName}`}
            ctaText={`Solicitar Orçamento no ${bairroName}`}
            ctaAction={handleWhatsApp}
          />

          {/* CTA Final */}
          <section className="py-20 bg-[#1C1F22] text-[#F4EFE6] border-t border-border">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
              <h2 
                className="text-3xl md:text-5xl font-extrabold uppercase leading-tight tracking-tight mb-4 text-[#F4EFE6]"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Toldos Comerciais de Destaque no <span className="text-[#C8361D]">{bairroName}</span>
              </h2>
              <p className="text-sm text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
                Obtenha o pré-projeto em 3D e estimativa de investimento para sua fachada agora. Visita técnica agendada sem compromisso para garantir perfeição de dimensões.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button onClick={handleWhatsApp} size="lg" className="bg-[#C8361D] hover:bg-[#C8361D]/90 text-white font-extrabold text-xs uppercase tracking-widest py-5 px-8 rounded-[2px] h-auto cursor-pointer">
                  💬 Chamar no WhatsApp
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.open("tel:+554135646943")} className="border-gray-600 hover:border-white text-[#F4EFE6] hover:bg-[#F4EFE6] hover:text-[#1C1F22] font-extrabold text-xs uppercase tracking-widest py-5 px-8 rounded-[2px] h-auto cursor-pointer">
                  📞 Chamar por Telefone
                </Button>
              </div>
              <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">
                ✓ Visita técnica sem compromisso • ✓ Lona com proteção UV FPU 50+ • ✓ Parcelamento faturado PJ
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BairroPage;
