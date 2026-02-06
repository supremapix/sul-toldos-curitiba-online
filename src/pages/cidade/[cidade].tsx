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

  const cityData: { [key: string]: any } = {
    curitiba: {
      image: galeriaToldoLoja,
      population: "1.9 milhão",
      neighborhoods: "75 bairros",
      specialty: "Capital paranaense com forte demanda por toldos residenciais e comerciais",
      mainServices: ["Toldos residenciais premium", "Coberturas comerciais", "Toldos retráteis automatizados", "Policarbonato para condomínios"],
      geo: { lat: "-25.4284", lng: "-49.2733" }
    },
    pinhais: {
      image: galeriaToldoGaragem,
      population: "130 mil",
      neighborhoods: "região metropolitana",
      specialty: "Cidade em crescimento com muitas construções comerciais",
      mainServices: ["Toldos para comércios", "Coberturas industriais", "Toldos em lona", "Estruturas metálicas"],
      geo: { lat: "-25.4426", lng: "-49.1925" }
    },
    "sao-jose-dos-pinhais": {
      image: galeriaToldoComercial,
      population: "329 mil",
      neighborhoods: "diversos bairros",
      specialty: "Centro industrial importante da região metropolitana",
      mainServices: ["Toldos industriais", "Coberturas para galpões", "Toldos retráteis", "Policarbonato translúcido"],
      geo: { lat: "-25.5304", lng: "-49.2084" }
    },
    colombo: {
      image: galeriaPolicarbonatoEntrada,
      population: "240 mil",
      neighborhoods: "região metropolitana",
      specialty: "Cidade residencial com muitas casas e sobrados",
      mainServices: ["Toldos residenciais", "Coberturas para garagens", "Toldos para áreas de lazer", "Estruturas em alumínio"],
      geo: { lat: "-25.2917", lng: "-49.2242" }
    }
  };

  const defaultCity = {
    image: galeriaToldoLoja,
    population: "região metropolitana",
    neighborhoods: "diversos bairros",
    specialty: "Cidade da região metropolitana de Curitiba com demanda crescente por toldos",
    mainServices: ["Toldos residenciais", "Coberturas comerciais", "Policarbonato", "Toldos retráteis"],
    geo: { lat: "-25.4284", lng: "-49.2733" }
  };

  const currentCity = cityData[citySlug] || defaultCity;

  const handleWhatsApp = () => {
    const message = `Olá, gostaria de solicitar um orçamento para toldos em ${cityName}!`;
    window.open(`https://wa.me/5541998121324?text=${encodeURIComponent(message)}`, "_blank");
  };

  const getServiceCards = () => [
    {
      title: `Toldos Residenciais em ${cityName}`,
      icon: "🏠",
      content: `A Sul Toldos é referência em toldos residenciais em ${cityName}. Instalamos toldos fixos em lona a partir de R$ 120/m², toldos retráteis a partir de R$ 250/m² e coberturas em policarbonato a partir de R$ 180/m².\n\nNossos projetos residenciais incluem proteção para garagens, varandas, sacadas, churrasqueiras e áreas de lazer. Cada projeto é dimensionado considerando a arquitetura local e as condições climáticas específicas de ${cityName}.\n\nAtendemos todos os bairros de ${cityName} com visita técnica gratuita, orçamento sem compromisso e garantia de até 5 anos em estruturas metálicas.`
    },
    {
      title: `Toldos Comerciais em ${cityName}`,
      icon: "🏢",
      content: `Somos especialistas em toldos comerciais em ${cityName}. Atendemos padarias, farmácias, restaurantes, pet shops, salões de beleza, oficinas mecânicas e todo tipo de comércio.\n\nToldos de fachada comercial partem de R$ 150/m², incluindo estrutura personalizada e lona com logomarca. Coberturas para estacionamentos a partir de R$ 140/m².\n\nEm ${cityName}, já realizamos centenas de instalações comerciais. Cada projeto é desenvolvido para valorizar o estabelecimento e atrair mais clientes, transformando o toldo em ferramenta de marketing.`
    },
    {
      title: `Preços e Condições em ${cityName}`,
      icon: "💰",
      content: `Os melhores preços de toldos em ${cityName}! Trabalhamos com tabela competitiva e condições facilitadas:\n\n• Toldo fixo em lona: a partir de R$ 120/m²\n• Toldo retrátil manual: a partir de R$ 250/m²\n• Toldo retrátil motorizado: a partir de R$ 350/m²\n• Policarbonato alveolar: a partir de R$ 180/m²\n• Cortina rolo PVC: a partir de R$ 220/m²\n\nParcelamos em até 12x no cartão. Desconto de 10% à vista. Financiamento próprio para projetos acima de R$ 5.000.`
    },
    {
      title: `Qualidade e Garantia em ${cityName}`,
      icon: "⭐",
      content: `Na Sul Toldos, cada instalação em ${cityName} é feita com materiais de primeira qualidade: lonas acrílicas Sansuy e Guarany, alumínio naval, motores Somfy (alemães) e policarbonato com certificação.\n\nNossa garantia inclui: até 5 anos para estruturas, 2 anos para retráteis com motor, 10 anos para policarbonato e manutenção preventiva gratuita no primeiro ano.\n\nMais de 15 anos atendendo ${cityName} com equipe técnica certificada, pontualidade na entrega e suporte pós-venda 24h pelo WhatsApp.`
    }
  ];

  const getCityFAQs = () => [
    {
      question: `Quanto custa um toldo por m² em ${cityName}?`,
      answer: `Os preços de toldos em ${cityName} variam conforme o tipo: toldo fixo em lona a partir de R$ 120/m², toldo retrátil manual a partir de R$ 250/m², retrátil motorizado a partir de R$ 350/m², policarbonato alveolar a partir de R$ 180/m², e cortina rolo transparente a partir de R$ 220/m². Fazemos orçamento gratuito com visita técnica em toda ${cityName}. O preço final depende do tamanho, material escolhido e complexidade da instalação. Entre em contato pelo WhatsApp (41) 99812-1324 para valores exatos para seu projeto em ${cityName}.`
    },
    {
      question: `Vocês atendem toda a cidade de ${cityName}?`,
      answer: `Sim, atendemos toda ${cityName} e região! Nossa cobertura é completa, incluindo todos os ${currentCity.neighborhoods} da cidade. Temos logística otimizada com equipes dedicadas que conhecem a geografia local, facilitando agendamentos e entregas. Realizamos visitas técnicas gratuitas em toda a extensão de ${cityName}, desde pequenos projetos residenciais até grandes instalações comerciais e industriais. Atendimento de segunda a sexta das 8h às 18h, sábados das 8h às 12h, e emergências 24h pelo WhatsApp.`
    },
    {
      question: `Qual o melhor tipo de toldo para residência em ${cityName}?`,
      answer: `Para residências em ${cityName}, recomendamos: toldo fixo em lona acrílica (R$ 120-180/m²) para janelas e portas, excelente custo-benefício. Toldo retrátil (R$ 250-350/m²) para varandas e sacadas, oferecendo flexibilidade. Cobertura em policarbonato (R$ 180-280/m²) para garagens e áreas de lazer, com durabilidade superior. Cortina rolo (R$ 220-380/m²) para sacadas gourmet com proteção contra vento e chuva. Cada tipo tem vantagens específicas e nossa equipe pode orientar a melhor escolha durante a visita técnica gratuita.`
    },
    {
      question: `Qual o prazo de instalação de toldos em ${cityName}?`,
      answer: `Em ${cityName}, nossos prazos são otimizados: toldos fixos simples de 5 a 7 dias úteis após aprovação. Toldos retráteis de 7 a 12 dias úteis. Coberturas em policarbonato de 10 a 15 dias úteis. Projetos comerciais grandes de 15 a 30 dias úteis. Em casos urgentes, oferecemos serviço expresso com prazo reduzido. Todos os prazos são informados no momento do orçamento e cumpridos rigorosamente. Nossa proximidade com ${cityName} permite flexibilidade nos agendamentos.`
    },
    {
      question: `Vocês fazem toldos para comércios em ${cityName}?`,
      answer: `Sim! Somos especialistas em toldos comerciais em ${cityName}. Atendemos padarias (R$ 800-1.500/m linear em capota), farmácias, restaurantes (toldo retrátil a partir de R$ 3.500), pet shops, salões de beleza, oficinas mecânicas (R$ 140-250/m²), supermercados, concessionárias e todo tipo de estabelecimento. Toldos comerciais de fachada com logomarca impressa partem de R$ 150/m². Projetos incluem personalização completa com cores da marca. Coberturas para estacionamento a partir de R$ 140/m².`
    },
    {
      question: `Qual a garantia dos toldos em ${cityName}?`,
      answer: `Oferecemos a garantia mais completa da região para clientes de ${cityName}: até 5 anos para estruturas metálicas (alumínio e metalon), 2 anos para toldos retráteis incluindo motor e automação, 10 anos para policarbonato contra amarelamento, e 1 ano para lonas e tecidos. Manutenção preventiva gratuita no primeiro ano para todos os clientes. A garantia cobre defeitos de fabricação, instalação e materiais. Equipe técnica disponível 24h para atendimento de garantia. Estoque de peças de reposição para atendimento rápido.`
    },
    {
      question: `É possível financiar toldos em ${cityName}?`,
      answer: `Sim! Oferecemos excelentes condições para clientes de ${cityName}: parcelamento em até 12x no cartão de crédito sem juros, desconto de 10% para pagamento à vista (PIX ou transferência), boleto bancário em até 6x, e financiamento próprio para projetos acima de R$ 5.000. Processo de aprovação rápido e desburocratizado. Para projetos comerciais de grande porte, condições especiais com prazos estendidos. Consulte as condições específicas para seu projeto em ${cityName}.`
    },
    {
      question: `Qual o preço de cobertura para garagem em ${cityName}?`,
      answer: `Cobertura para garagem em ${cityName}: para 1 carro (aprox. 15m²) de R$ 1.800 a R$ 4.500. Para 2 carros (aprox. 30m²) de R$ 3.500 a R$ 9.000. Em policarbonato alveolar, permite passagem de luz natural. Em lona tensionada, mais econômico. Estrutura em metalon galvanizado ou alumínio. Inclui projeto, fabricação e instalação completa. Garantia de até 5 anos na estrutura. Visite nossa galeria para ver exemplos de projetos executados em ${cityName} e região.`
    },
    {
      question: `Vocês instalam toldos retráteis em ${cityName}?`,
      answer: `Sim! Toldos retráteis são uma das nossas especialidades em ${cityName}. Manual a partir de R$ 250/m², motorizado a partir de R$ 350/m². Utilizamos motores alemães Somfy com garantia de 2 anos. Opcionais: sensor de vento (R$ 300-500), sensor de chuva (R$ 200-400) e controle por aplicativo. Instalação sem obras, preservando a estrutura original do imóvel. Ideais para varandas, terraços e áreas externas que necessitam flexibilidade de uso.`
    },
    {
      question: `Vocês fazem manutenção de toldos em ${cityName}?`,
      answer: `Sim! Serviço completo de manutenção em ${cityName}: troca de lona (R$ 80-150/m²), limpeza profissional (R$ 15-25/m²), lubrificação de mecanismos (R$ 150-300 por toldo), reparo estrutural (sob consulta). Atendemos toldos de qualquer fabricante. Manutenção preventiva semestral recomendada para prolongar vida útil em até 40%. Atendimento emergencial 24h para reparos urgentes pelo WhatsApp (41) 99812-1324.`
    },
    {
      question: `Qual a diferença entre policarbonato e lona em ${cityName}?`,
      answer: `Policarbonato: mais resistente a impacto, permite passagem de luz natural, durabilidade de 15-20 anos, ideal para coberturas de garagem e área de lazer, preço de R$ 180-300/m². Lona: melhor proteção solar total, mais opções de cores e estampas, durabilidade de 5-12 anos dependendo do tipo, ideal para fachadas e toldos retráteis, preço de R$ 120-200/m². Em ${cityName}, ambos os materiais performam bem com as condições climáticas locais.`
    },
    {
      question: `Vocês fazem projetos personalizados em ${cityName}?`,
      answer: `Sim! Desenvolvemos projetos 100% personalizados para ${cityName}. Nossa equipe cria soluções exclusivas considerando a arquitetura do imóvel, necessidades do cliente e orçamento disponível. Oferecemos renderização 3D gratuita para projetos acima de R$ 3.000. Formatos especiais (curvos, em L, triangulares) disponíveis com acréscimo de 15-25%. Cores exclusivas, acabamentos premium e sistemas de automação avançados. Experiência em projetos residenciais e comerciais de todos os portes.`
    },
    {
      question: `Qual o preço do toldo cortina vertical em ${cityName}?`,
      answer: `Toldo cortina vertical com guias laterais em ${cityName}: em lona blackout de R$ 220 a R$ 320/m², com visor transparente PVC de R$ 280 a R$ 380/m². Sistema de enrolamento manual ou motorizado. Ideal para fechamento de varandas, sacadas e áreas externas de restaurantes. Instalação rápida sem obras. Disponível em diversas cores para harmonizar com a fachada. Garantia de 2 anos com manutenção gratuita no primeiro ano.`
    },
    {
      question: `Como agendar visita técnica gratuita em ${cityName}?`,
      answer: `Agendar visita técnica em ${cityName} é simples: WhatsApp (41) 99812-1324, telefone (41) 3564-6943 ou formulário do site. Disponibilidade de segunda a sábado, com horários flexíveis. Nosso técnico avalia o local, tira medidas, analisa a estrutura e apresenta opções. Orçamento na hora, sem compromisso. A visita dura 30-45 minutos. Atendemos todos os bairros e regiões de ${cityName} com a mesma qualidade e agilidade.`
    },
    {
      question: `Por que escolher a Sul Toldos em ${cityName}?`,
      answer: `Mais de 15 anos atendendo ${cityName} com excelência! Nossos diferenciais: preços competitivos a partir de R$ 120/m², materiais de primeira qualidade (Sansuy, Guarany, Somfy), equipe técnica certificada, garantia estendida de até 5 anos, manutenção preventiva gratuita, atendimento 24h para emergências, orçamento gratuito com visita técnica e parcelamento em até 12x. Mais de 2.000 clientes satisfeitos na região. Nota 4.9/5 com 150+ avaliações. Escolha quem é referência em toldos em ${cityName}!`
    }
  ];

  const cityStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Sul Toldos - Toldos em ${cityName}`,
    "description": `Toldos em ${cityName} a partir de R$ 120/m². Especialista em toldos residenciais, comerciais, policarbonato e coberturas. Orçamento grátis!`,
    "url": `https://sultoldos.app.br/cidade/${citySlug}`,
    "telephone": "+554135646943",
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
        title={`Toldos em ${cityName} | Preços a partir R$ 120/m² | Sul Toldos`}
        description={`Toldos em ${cityName} a partir de R$ 120/m². Policarbonato, retráteis, comerciais e residenciais. Orçamento grátis! ☎️ (41) 3564-6943. Garantia de até 5 anos. Parcelamos em 12x.`}
        keywords={`toldos ${cityName.toLowerCase()}, toldo ${cityName.toLowerCase()} preço, policarbonato ${cityName.toLowerCase()}, cobertura ${cityName.toLowerCase()}, toldo retrátil ${cityName.toLowerCase()}, preço toldo m2 ${cityName.toLowerCase()}, toldo residencial, toldo comercial, cortina rolo, cobertura garagem`}
        canonical={`https://sultoldos.app.br/cidade/${citySlug}`}
        structuredData={cityStructuredData}
        location={cityName}
        service={`toldos e coberturas em ${cityName}`}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />
        
        <main>
          {/* Hero Section */}
          <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 to-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                    Toldos em <span className="text-primary">{cityName}</span>
                    <span className="block text-2xl lg:text-3xl mt-2 text-muted-foreground font-normal">
                      A partir de R$ 120/m²
                    </span>
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    A Sul Toldos é especialista em toldos, coberturas e policarbonato em {cityName}. 
                    Mais de 15 anos de experiência. Orçamento gratuito com visita técnica sem compromisso.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button 
                      onClick={handleWhatsApp}
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-4 h-auto"
                    >
                      💬 ORÇAMENTO GRÁTIS
                    </Button>
                    <Button 
                      variant="outline"
                      size="lg"
                      onClick={() => window.open("tel:+554135646943")}
                      className="text-lg py-4 h-auto font-bold"
                    >
                      📞 (41) 3564-6943
                    </Button>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-card rounded-xl p-3">
                      <div className="text-xl font-bold text-primary">{currentCity.population}</div>
                      <div className="text-sm text-muted-foreground">habitantes</div>
                    </div>
                    <div className="bg-card rounded-xl p-3">
                      <div className="text-xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">anos experiência</div>
                    </div>
                    <div className="bg-card rounded-xl p-3">
                      <div className="text-xl font-bold text-primary">2000+</div>
                      <div className="text-sm text-muted-foreground">clientes</div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <img 
                    src={currentCity.image} 
                    alt={`Toldos e coberturas em ${cityName} - Sul Toldos - Preços a partir de R$ 120/m²`}
                    className="rounded-2xl shadow-2xl w-full"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </section>

          <ServiceCards location={cityName} type="cidade" cards={getServiceCards()} />

          <InfiniteGallery locationName={cityName} locationType="cidade" />

          <LocationFAQ location={cityName} type="cidade" faqs={getCityFAQs()} />

          <YouTubeVideo 
            title={`Veja nosso trabalho em ${cityName}`}
            subtitle={`Conheça a qualidade dos nossos serviços de toldos em ${cityName}`}
            ctaText={`💬 Orçamento em ${cityName}`}
            ctaAction={handleWhatsApp}
            className="bg-secondary/30"
          />

          {/* CTA Final */}
          <section className="py-16 bg-primary/10">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pronto para seu toldo em <span className="text-primary">{cityName}</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Orçamento gratuito, visita técnica sem compromisso e parcelamento em até 12x. 
                Ligue agora ou mande mensagem!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button onClick={handleWhatsApp} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-4 px-8 h-auto">
                  💬 WHATSAPP: (41) 99812-1324
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.open("tel:+554135646943")} className="text-lg py-4 px-8 h-auto font-bold">
                  📞 LIGAR: (41) 3564-6943
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                ✅ Orçamento gratuito • ✅ Visita técnica sem compromisso • ✅ Garantia de até 5 anos • ✅ Parcelamos em 12x
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
