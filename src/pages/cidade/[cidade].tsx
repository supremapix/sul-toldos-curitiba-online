import { useParams } from "react-router-dom";
import EnhancedSEO from "@/components/EnhancedSEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeVideo from "@/components/YouTubeVideo";
import FloatingButtons from "@/components/FloatingButtons";
import ServiceCards from "@/components/ServiceCards";
import LocationFAQ from "@/components/LocationFAQ";
import { Button } from "@/components/ui/button";

// Imagens
import curitibaImage from "@/assets/cidade-curitiba.jpg";
import pinhaisImage from "@/assets/cidade-pinhais.jpg";
import saoJoseImage from "@/assets/cidade-sao-jose-dos-pinhais.jpg";
import colomboImage from "@/assets/cidade-colombo.jpg";

const CidadePage = () => {
  const { cidade } = useParams();
  
  const cityName = cidade?.charAt(0).toUpperCase() + cidade?.slice(1).replace(/-/g, ' ') || "";
  const citySlug = cidade || "";

  // Configurações específicas por cidade
  const cityData: { [key: string]: any } = {
    curitiba: {
      image: curitibaImage,
      population: "1.9 milhão",
      neighborhoods: "75 bairros",
      specialty: "Capital paranaense com forte demanda por toldos residenciais e comerciais",
      mainServices: ["Toldos residenciais premium", "Coberturas comerciais", "Toldos retráteis automatizados", "Policarbonato para condomínios"]
    },
    pinhais: {
      image: pinhaisImage, 
      population: "130 mil",
      neighborhoods: "região metropolitana",
      specialty: "Cidade em crescimento com muitas construções comerciais",
      mainServices: ["Toldos para comércios", "Coberturas industriais", "Toldos em lona", "Estruturas metálicas"]
    },
    "sao-jose-dos-pinhais": {
      image: saoJoseImage,
      population: "329 mil", 
      neighborhoods: "diversos bairros",
      specialty: "Centro industrial importante da região metropolitana",
      mainServices: ["Toldos industriais", "Coberturas para galpões", "Toldos retráteis", "Policarbonato translúcido"]
    },
    colombo: {
      image: colomboImage,
      population: "240 mil",
      neighborhoods: "região metropolitana",
      specialty: "Cidade residencial com muitas casas e sobrados",
      mainServices: ["Toldos residenciais", "Coberturas para garagens", "Toldos para áreas de lazer", "Estruturas em alumínio"]
    }
  };

  const currentCity = cityData[citySlug] || cityData.curitiba;

  const handleWhatsApp = () => {
    const message = `Olá, gostaria de solicitar um orçamento para toldos em ${cityName}!`;
    window.open(`https://wa.me/5541998121324?text=${encodeURIComponent(message)}`, "_blank");
  };

  // Conteúdo específico para cada cidade
  const getServiceCards = () => {
    return [
      {
        title: `Experiência em ${cityName}`,
        icon: "🏠",
        content: `Com ampla experiência em ${cityName}, conhecemos as particularidades climáticas e arquitetônicas da região. Nossos toldos são projetados especificamente para resistir às condições locais, oferecendo máxima durabilidade e proteção contra sol e chuva.\n\nJá atendemos centenas de clientes em ${cityName}, desde residências até grandes estabelecimentos comerciais. Nossa equipe conhece os ${currentCity.neighborhoods} e oferece soluções personalizadas para cada necessidade. ${currentCity.specialty}, o que nos permite adaptar nossos serviços perfeitamente às demandas locais.\n\nNossa experiência inclui projetos em diferentes tipos de imóveis, desde casas residenciais até complexos industriais, sempre respeitando as normas municipais e características urbanísticas de ${cityName}.`
      },
      {
        title: "Serviços Especializados",
        icon: "⚙️",
        content: `Em ${cityName}, oferecemos uma linha completa de serviços especializados em toldos e coberturas. Nossos principais serviços incluem instalação, manutenção, reparo e modernização de estruturas de proteção solar.\n\nPrincipais serviços oferecidos:\n${currentCity.mainServices.map((service: string) => `• ${service}`).join('\n')}\n\nCada serviço é executado por profissionais certificados, utilizando equipamentos de última geração e materiais de primeira qualidade. Oferecemos soluções desde projetos residenciais simples até complexas instalações comerciais e industriais em ${cityName}.`
      },
      {
        title: "Qualidade Garantida",
        icon: "✅",
        content: `Trabalhamos exclusivamente com materiais de primeira qualidade em ${cityName}. Nossos toldos utilizam lonas acrílicas de marcas renomadas como Sansuy e Guarany, com proteção UV e tratamento impermeabilizante.\n\nOferecemos garantia de até 5 anos em estruturas metálicas e 2 anos em toldos retráteis. Nossa equipe técnica realiza manutenção preventiva gratuita no primeiro ano, garantindo a longevidade do seu investimento.\n\nTodos os materiais são testados e aprovados para as condições climáticas de ${cityName}, com certificações de qualidade e resistência. Utilizamos apenas fornecedores homologados e materiais com procedência garantida.`
      },
      {
        title: "Atendimento Diferenciado",
        icon: "🚀",
        content: `Nosso atendimento em ${cityName} é personalizado e diferenciado. Realizamos visita técnica gratuita, elaboramos projeto detalhado e acompanhamos toda a instalação com equipe própria e certificada.\n\nTrabalhamos com prazos flexíveis e respeitamos o orçamento do cliente. Oferecemos parcelamento facilitado e condições especiais para projetos de grande porte. Nossa prioridade é a satisfação total do cliente em ${cityName}.\n\nMantemos canal de comunicação 24h através do WhatsApp para emergências e dúvidas. Nossa equipe de suporte pós-venda está sempre disponível para garantir o perfeito funcionamento dos equipamentos instalados.`
      }
    ];
  };

  // FAQs específicas para cada cidade
  const getCityFAQs = () => {
    const baseFAQs = [
      {
        question: `Vocês atendem toda a cidade de ${cityName}?`,
        answer: `Sim, atendemos toda ${cityName} e região metropolitana! Nossa cobertura é completa, incluindo todos os ${currentCity.neighborhoods} da cidade. Temos logística otimizada que permite atendimento rápido e eficiente em qualquer localização.\n\nEm ${cityName}, com população de ${currentCity.population} habitantes, mantemos equipes dedicadas que conhecem bem a geografia local, facilitando agendamentos e entregas. Realizamos visitas técnicas gratuitas em toda a extensão da cidade.\n\nNossa experiência em ${cityName} nos permite atender desde pequenos projetos residenciais até grandes instalações comerciais e industriais. Oferecemos o mesmo padrão de qualidade e atendimento para todos os clientes, independente da localização na cidade.`
      },
      {
        question: `Qual a especialidade da Sul Toldos em ${cityName}?`,
        answer: `Nossa especialidade em ${cityName} é ${currentCity.specialty.toLowerCase()}. Desenvolvemos soluções específicas para as características únicas da cidade, considerando aspectos climáticos, arquitetônicos e urbanísticos locais.\n\nEm ${cityName}, oferecemos:\n${currentCity.mainServices.map((service: string) => `• ${service}`).join('\n')}\n\nNossa experiência na cidade nos permite identificar as melhores soluções para cada tipo de projeto, sempre considerando as particularidades locais. Mantemos estoque adequado e equipes especializadas para atender a demanda específica de ${cityName}.`
      },
      {
        question: `Quanto custa instalar toldos em ${cityName}?`,
        answer: `Os preços de toldos em ${cityName} variam conforme o tipo de projeto, materiais utilizados e complexidade da instalação. Consideramos as características específicas da cidade para oferecer o melhor custo-benefício.\n\nEm ${cityName}, trabalhamos com diferentes faixas de preço para atender todos os perfis de clientes. Oferecemos desde soluções econômicas até projetos premium, sempre mantendo o padrão de qualidade Sul Toldos.\n\nRealizar orçamento gratuito com visita técnica, onde analisamos suas necessidades específicas e apresentamos as melhores opções. Oferecemos condições facilitadas de pagamento e parcelamento sem juros. Entre em contato pelo WhatsApp (41) 99812-1324 para receber orçamento personalizado para ${cityName}.`
      },
      {
        question: `Qual o prazo de instalação em ${cityName}?`,
        answer: `Em ${cityName}, nossos prazos são otimizados devido à nossa logística local eficiente. Para toldos residenciais padrão, o prazo médio é de 7 a 10 dias úteis após aprovação do projeto.\n\nPara projetos comerciais ou toldos retráteis, comuns na cidade, o prazo varia de 10 a 15 dias úteis. Em casos de urgência, oferecemos serviço expresso com instalação em até 5 dias úteis.\n\nTodos os prazos são informados durante o orçamento e cumpridos rigorosamente. Nossa proximidade com ${cityName} permite flexibilidade nos agendamentos e agilidade na execução dos projetos.`
      },
      {
        question: `Que garantias vocês oferecem em ${cityName}?`,
        answer: `Em ${cityName}, oferecemos garantia diferenciada e completa. Nossa garantia inclui até 5 anos para estruturas metálicas e 2 anos para toldos retráteis, cobrindo defeitos de fabricação e instalação.\n\nPara clientes de ${cityName}, oferecemos manutenção preventiva gratuita no primeiro ano, aproveitando nossa proximidade para garantir o perfeito funcionamento dos equipamentos.\n\nNossa garantia cobre materiais, mão de obra e funcionamento de sistemas automatizados. Mantemos estoque de peças de reposição e equipe técnica disponível 24h para emergências. A garantia é válida para toda ${cityName} e região metropolitana.`
      },
      {
        question: `Vocês trabalham com projetos comerciais em ${cityName}?`,
        answer: `Sim, somos especialistas em projetos comerciais em ${cityName}! Atendemos desde pequenos estabelecimentos até grandes complexos empresariais, sempre adequando nossas soluções às necessidades específicas de cada negócio.\n\nEm ${cityName}, já executamos projetos para diversos segmentos: restaurantes, lojas, concessionárias, indústrias e condomínios. Nossos toldos comerciais incluem opções para proteção de fachadas, áreas de atendimento e estacionamentos.\n\nOferecemos projetos personalizados que podem incluir impressão de logotipos e cores corporativas, transformando o toldo em ferramenta de marketing. Trabalhamos respeitando todas as normas municipais de ${cityName} e prazos comerciais rigorosos.`
      },
      {
        question: `Como funciona a manutenção em ${cityName}?`,
        answer: `Em ${cityName}, oferecemos serviço completo de manutenção preventiva e corretiva. Nossa equipe local realiza inspeções regulares, limpeza profissional e ajustes necessários para garantir perfeito funcionamento.\n\nA manutenção preventiva em ${cityName} inclui verificação de estruturas, lubrificação de mecanismos, limpeza especializada e inspeção de pontos de fixação. Desenvolvemos cronograma adequado às características climáticas da cidade.\n\nOferecemos serviço de emergência 24h para reparos urgentes, com atendimento rápido em toda ${cityName}. Todos os serviços são realizados por técnicos certificados, usando equipamentos de segurança e produtos específicos para cada tipo de material.`
      },
      {
        question: `Quais materiais são usados em ${cityName}?`,
        answer: `Em ${cityName}, utilizamos exclusivamente materiais de primeira qualidade, adequados às condições climáticas locais. Trabalhamos com lonas acrílicas das principais marcas: Sansuy, Guarany e Solan.\n\nAs estruturas são fabricadas em alumínio naval anodizado ou aço galvanizado, conforme a necessidade. Para toldos retráteis, utilizamos motores alemães Somfy e sistemas de automação de última geração.\n\nTodos os materiais possuem proteção UV, tratamento anti-mofo e certificações de qualidade. Em ${cityName}, priorizamos materiais que resistam às condições climáticas específicas da região, garantindo maior durabilidade e melhor custo-benefício.`
      },
      {
        question: `É possível financiar em ${cityName}?`,
        answer: `Sim, oferecemos excelentes condições de financiamento para clientes de ${cityName}! Trabalhamos com parcelamento facilitado e condições especiais que se adequam a diferentes perfis.\n\nEm ${cityName}, oferecemos: parcelamento sem juros para pagamentos à vista, cartão de crédito em até 12x e financiamento próprio para projetos maiores. Desenvolvemos condições especiais para a cidade.\n\nNosso processo de aprovação é rápido e desburocratizado. Avaliamos cada caso individualmente, oferecendo a melhor condição possível. Consulte nossas condições especiais para moradores e empresários de ${cityName}.`
      },
      {
        question: `Vocês fazem projetos personalizados em ${cityName}?`,
        answer: `Absolutamente! Em ${cityName}, desenvolvemos projetos 100% personalizados, adequados às características de cada imóvel e necessidades específicas. Nossa equipe de designers trabalha com engenheiros para criar soluções únicas.\n\nConsideramos a arquitetura predominante em ${cityName}, aspectos paisagísticos e particularidades de cada projeto. Oferecemos cores exclusivas, formatos diferenciados e sistemas de automação avançados.\n\nCada projeto personalizado inclui renderização 3D para visualização do resultado final. Nossa experiência em ${cityName} nos permite criar soluções inovadoras que valorizam o imóvel e atendem perfeitamente às expectativas.`
      },
      {
        question: `Como solicitar orçamento em ${cityName}?`,
        answer: `Solicitar orçamento em ${cityName} é muito fácil! Entre em contato pelo WhatsApp (41) 99812-1324, telefone (41) 3564-6943 ou através do nosso site. Atendemos toda a cidade com agilidade.\n\nRealizamos visita técnica gratuita em toda ${cityName}, onde nosso especialista avalia o local, tira medidas e apresenta as melhores opções. O orçamento é elaborado na hora, sem compromisso.\n\nNosso atendimento em ${cityName} é diferenciado, com agendamento flexível e profissionais especializados. Oferecemos condições especiais de pagamento e orientação completa sobre o melhor tipo de toldo para seu projeto.`
      },
      {
        question: `Qual a diferença dos toldos retráteis em ${cityName}?`,
        answer: `Os toldos retráteis são uma excelente opção para ${cityName}, oferecendo controle total sobre proteção solar. Podem ser recolhidos quando não necessários, preservando a arquitetura original dos imóveis.\n\nEm ${cityName}, oferecemos modelos manuais e automatizados, com sensores de vento e chuva para proteção automática. São ideais para varandas, terraços e áreas que necessitam flexibilidade.\n\nInstalamos sistemas com controle remoto, timer programável e integração com aplicativos. A instalação é feita sem obras, preservando a estrutura original. Garantimos 2 anos para todo o sistema retrátil instalado em ${cityName}.`
      },
      {
        question: `Qual o horário de atendimento em ${cityName}?`,
        answer: `Nosso atendimento em ${cityName} funciona de segunda a sexta das 8h às 18h, e aos sábados das 8h às 12h. Para visitas técnicas e instalações, oferecemos horários estendidos conforme disponibilidade.\n\nO WhatsApp (41) 99812-1324 funciona 24h para emergências e agendamentos em ${cityName}. Nossa equipe de plantão atende situações urgentes mesmo fora do horário comercial.\n\nPara ${cityName}, oferecemos agendamento de visitas nos finais de semana mediante disponibilidade, especialmente para clientes que trabalham durante a semana. Nossa flexibilidade é um diferencial importante.`
      },
      {
        question: `Por que escolher Sul Toldos em ${cityName}?`,
        answer: `A Sul Toldos é a escolha certa para ${cityName} por diversos motivos! Temos mais de 15 anos de experiência na região, conhecendo profundamente as características da cidade e necessidades locais.\n\nNossos diferenciais em ${cityName}: equipe técnica certificada, materiais de primeira qualidade, garantia estendida, manutenção preventiva gratuita e atendimento 24h para emergências. Já conquistamos milhares de clientes satisfeitos.\n\nOfertamos o melhor custo-benefício da região, com orçamento gratuito, visita técnica sem compromisso e condições facilitadas de pagamento. Nossa reputação em ${cityName} é construída na base da confiança, qualidade e pontualidade.`
      },
      {
        question: `Vocês atendem emergências em ${cityName}?`,
        answer: `Sim, oferecemos atendimento de emergência 24h em ${cityName}! Entendemos que problemas com toldos podem ocorrer a qualquer momento, especialmente durante tempestades ou ventos fortes.\n\nNosso serviço de emergência em ${cityName} inclui reparos urgentes, remoção de toldos danificados e instalação de proteções temporárias. Mantemos equipe de plantão e estoque de peças para atendimento imediato.\n\nPara emergências em ${cityName}, entre em contato pelo WhatsApp (41) 99812-1324 ou telefone (41) 3564-6943. Nossa equipe avalia a situação e providencia solução rápida e segura, minimizando danos e transtornos.`
      }
    ];
    
    return baseFAQs;
  };

  const cityStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Sul Toldos - Toldos em ${cityName}`,
    "description": `Especialista em toldos, coberturas e policarbonato em ${cityName}. Orçamento grátis e visita técnica sem compromisso.`,
    "url": `https://sultoldos.app.br/cidade/${citySlug}`,
    "telephone": "+554135646943",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "serviceArea": {
      "@type": "Place",
      "name": cityName
    },
    "services": currentCity.mainServices,
    "priceRange": "$$",
    "openingHours": ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"]
  };

  return (
    <>
      <EnhancedSEO
        title={`Toldos em ${cityName} - Sul Toldos | Orçamento Grátis | Especialistas em Coberturas`}
        description={`Toldos em ${cityName} com a Sul Toldos. Especialistas em toldos residenciais, comerciais, policarbonato e coberturas. Orçamento grátis! Visita técnica sem compromisso. Atendemos ${cityName} e região. ☎️ (41) 3564-6943`}
        keywords={`toldos ${cityName.toLowerCase()}, toldo ${cityName.toLowerCase()}, policarbonato ${cityName.toLowerCase()}, cobertura ${cityName.toLowerCase()}, toldos retráteis ${cityName.toLowerCase()}, sul toldos, toldos em lona, coberturas residenciais, toldos comerciais, orçamento grátis, toldo para área externa, proteção solar, toldos automatizados`}
        canonical={`https://sultoldos.app.br/cidade/${citySlug}`}
        ogImage={currentCity.image}
        structuredData={cityStructuredData}
        location={cityName}
        service={`toldos e coberturas em ${cityName}`}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                    Toldos em <span className="text-primary">{cityName}</span>
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    A Sul Toldos é especialista em toldos, coberturas e policarbonato em {cityName}. 
                    Com mais de 15 anos de experiência, oferecemos qualidade garantida e orçamento gratuito 
                    para toda região metropolitana.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button 
                      onClick={handleWhatsApp}
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                    >
                      💬 WhatsApp - Orçamento Grátis
                    </Button>
                    <Button 
                      variant="outline"
                      size="lg"
                      onClick={() => window.open("tel:+554135646943")}
                    >
                      📞 (41) 3564-6943
                    </Button>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">{currentCity.population}</div>
                      <div className="text-sm text-muted-foreground">habitantes</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">anos experiência</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">2000+</div>
                      <div className="text-sm text-muted-foreground">clientes satisfeitos</div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <img 
                    src={currentCity.image} 
                    alt={`Toldos e coberturas em ${cityName} - Sul Toldos`}
                    className="rounded-lg shadow-2xl w-full"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/20 rounded-lg"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Service Cards */}
          <ServiceCards 
            location={cityName}
            type="cidade"
            cards={getServiceCards()}
          />

          {/* FAQ Section */}
          <LocationFAQ 
            location={cityName}
            type="cidade"
            faqs={getCityFAQs()}
          />

          {/* Vídeo YouTube */}
          <YouTubeVideo 
            title={`Veja nosso trabalho em ${cityName}`}
            subtitle={`Conheça a qualidade dos nossos serviços de toldos e coberturas em ${cityName} e região`}
            ctaText={`💬 Solicitar Orçamento em ${cityName}`}
            ctaAction={handleWhatsApp}
            className="bg-secondary/30"
          />

          {/* Seção de Contato Final */}
          <section className="py-20 bg-primary/10">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Pronto para ter o melhor toldo de <span className="text-primary">{cityName}</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Entre em contato agora mesmo e solicite seu orçamento gratuito. Nossa equipe está pronta 
                para atender você em {cityName} com toda qualidade Sul Toldos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  onClick={handleWhatsApp}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 text-lg"
                >
                  💬 WhatsApp: (41) 99812-1324
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => window.open("tel:+554135646943")}
                  className="px-8 py-4 text-lg"
                >
                  📞 Telefone: (41) 3564-6943
                </Button>
              </div>

              <div className="text-sm text-muted-foreground">
                <p>✅ Orçamento gratuito • ✅ Visita técnica sem compromisso • ✅ Garantia em todos os serviços</p>
                <p className="mt-2">📍 Atendemos {cityName} e toda região metropolitana de Curitiba</p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CidadePage;