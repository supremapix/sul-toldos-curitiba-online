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
import aguaVerdeImage from "@/assets/bairro-agua-verde.jpg";
import centroImage from "@/assets/bairro-centro.jpg";
import batelImage from "@/assets/bairro-batel.jpg";
import portaoImage from "@/assets/bairro-portao.jpg";
import cajuruImage from "@/assets/bairro-cajuru.jpg";

const BairroPage = () => {
  const { bairro } = useParams();
  
  const bairroName = bairro?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') || "";
  const bairroSlug = bairro || "";

  // Configurações específicas por bairro
  const bairroData: { [key: string]: any } = {
    "agua-verde": {
      image: aguaVerdeImage,
      zone: "Zona Sul",
      profile: "Residencial nobre",
      specialty: "Bairro residencial de alto padrão com muitas casas e apartamentos que demandam toldos elegantes",
      mainServices: ["Toldos residenciais premium", "Coberturas sofisticadas", "Toldos retráteis automáticos", "Policarbonato cristal"],
      characteristics: "conhecido por suas ruas arborizadas e arquitetura moderna"
    },
    "centro": {
      image: centroImage,
      zone: "Região Central", 
      profile: "Comercial/Empresarial",
      specialty: "Centro histórico e comercial com grande demanda por toldos comerciais e corporativos",
      mainServices: ["Toldos comerciais", "Coberturas para estabelecimentos", "Estruturas publicitárias", "Toldos para restaurantes"],
      characteristics: "centro financeiro e comercial da cidade"
    },
    "batel": {
      image: batelImage,
      zone: "Zona Sul",
      profile: "Residencial/Comercial de luxo", 
      specialty: "Bairro nobre com residências e estabelecimentos de alto padrão",
      mainServices: ["Toldos de luxo", "Coberturas exclusivas", "Sistemas automatizados", "Projetos personalizados"],
      characteristics: "região mais valorizada de Curitiba"
    },
    "portao": {
      image: portaoImage,
      zone: "Zona Sul",
      profile: "Comercial diversificado",
      specialty: "Importante corredor comercial com demanda variada de toldos para diferentes tipos de negócios",
      mainServices: ["Toldos comerciais variados", "Estruturas para comércios", "Toldos para concessionárias", "Coberturas industriais"],
      characteristics: "um dos principais eixos comerciais da cidade"
    },
    "cajuru": {
      image: cajuruImage,
      zone: "Zona Leste",
      profile: "Residencial popular",
      specialty: "Bairro residencial em crescimento com boa demanda por toldos residenciais acessíveis",
      mainServices: ["Toldos residenciais", "Coberturas econômicas", "Toldos em lona", "Estruturas básicas"],
      characteristics: "região em desenvolvimento com muitas famílias"
    }
  };

  const currentBairro = bairroData[bairroSlug] || bairroData["agua-verde"];

  const handleWhatsApp = () => {
    const message = `Olá, gostaria de solicitar um orçamento para toldos no ${bairroName}, Curitiba!`;
    window.open(`https://wa.me/5541998121324?text=${encodeURIComponent(message)}`, "_blank");
  };

  // Conteúdo específico para cada bairro
  const getServiceCards = () => {
    return [
      {
        title: `Conhecimento do ${bairroName}`,
        icon: "🏘️",
        content: `Nossa equipe conhece profundamente as características do ${bairroName}, ${currentBairro.characteristics}. Isso nos permite oferecer soluções de toldos e coberturas perfeitamente adequadas ao perfil ${currentBairro.profile.toLowerCase()} da região.\n\n${currentBairro.specialty}. Já realizamos centenas de instalações no bairro, sempre respeitando a arquitetura local e as necessidades específicas dos moradores e comerciantes. Nossa experiência no ${bairroName} nos permite identificar os melhores pontos de instalação e escolher os materiais mais adequados para cada situação.`
      },
      {
        title: `Serviços Especializados no ${bairroName}`,
        icon: "🔧",
        content: `Nossos serviços no ${bairroName} são adaptados ao perfil ${currentBairro.profile.toLowerCase()} da região. Oferecemos desde soluções residenciais até projetos comerciais complexos, sempre com a qualidade Sul Toldos.\n\nPrincipais serviços oferecidos:\n${currentBairro.mainServices.map((service: string) => `• ${service}`).join('\n')}\n\nCada projeto é desenvolvido considerando as particularidades do ${bairroName}, incluindo aspectos como incidência solar, ventos predominantes e características arquitetônicas da região.`
      },
      {
        title: "Proximidade e Agilidade",
        icon: "🚀", 
        content: `Nossa localização estratégica em Curitiba nos permite atender o ${bairroName} com rapidez e eficiência. Realizamos visitas técnicas no mesmo dia e entregas em prazos recordes, garantindo a satisfação dos nossos clientes.\n\nTemos equipes dedicadas que conhecem as ruas e particularidades do ${bairroName}, facilitando a logística de entrega, instalação e manutenção. Nossa proximidade garante um atendimento mais personalizado e eficaz, com tempos de resposta otimizados para situações de urgência.\n\nOfertamos serviço de emergência 24h para reparos urgentes e manutenção preventiva agendada conforme a conveniência do cliente.`
      },
      {
        title: `Tradição e Confiança no ${bairroName}`,
        icon: "⭐",
        content: `Ao longo dos anos, construímos uma sólida reputação no ${bairroName}. Nossos clientes nos recomendam para vizinhos e conhecidos, criando uma rede de confiança que é nosso maior patrimônio no bairro.\n\nOferecemos garantia estendida, manutenção preventiva e suporte pós-venda diferenciado para clientes do ${bairroName}. Nossa missão é ser a referência em toldos e coberturas na região, mantendo a qualidade que nos tornou conhecidos.\n\nComprometemo-nos com a excelência em cada projeto, desde o primeiro contato até a garantia pós-instalação, construindo relacionamentos duradouros com a comunidade do ${bairroName}.`
      }
    ];
  };

  // FAQs específicas para cada bairro
  const getBairroFAQs = () => {
    const baseFAQs = [
      {
        question: `Quanto custa instalar um toldo no ${bairroName}?`,
        answer: `O preço de instalação de toldos no ${bairroName} varia conforme diversos fatores específicos da região. Consideramos o tipo de toldo (residencial, comercial ou retrátil), as dimensões necessárias, o material escolhido e as particularidades arquitetônicas do bairro.\n\nNo ${bairroName}, que possui perfil ${currentBairro.profile.toLowerCase()}, nossos preços são competitivos e adequados ao padrão da região. Oferecemos orçamento gratuito com visita técnica, onde analisamos o local e apresentamos a melhor solução custo-benefício.\n\nTrabalhamos com diversas opções de pagamento, incluindo parcelamento facilitado e condições especiais para projetos maiores. Entre em contato pelo WhatsApp (41) 99812-1324 para receber um orçamento personalizado e sem compromisso para o ${bairroName}.`
      },
      {
        question: `Vocês atendem todo o bairro ${bairroName}?`,
        answer: `Sim, atendemos todo o ${bairroName} e região circunvizinha em Curitiba. Nossa equipe conhece profundamente as características do bairro, incluindo suas principais ruas, avenidas e condomínios.\n\nNo ${bairroName}, ${currentBairro.characteristics}, realizamos instalações regulares e temos clientes satisfeitos em toda a extensão do bairro. Nossa logística otimizada permite atendimento rápido e eficiente em qualquer localização dentro do ${bairroName}.\n\nOferecemos visita técnica gratuita em todo o ${bairroName}, com agendamento flexível conforme sua disponibilidade. Nossa equipe está preparada para trabalhar em diferentes tipos de imóveis, respeitando as características específicas de cada localização no bairro.`
      },
      {
        question: `Qual o prazo para instalação de toldos no ${bairroName}?`,
        answer: `No ${bairroName}, nossos prazos de instalação são otimizados devido ao nosso conhecimento da região e logística eficiente. Para toldos residenciais padrão, o prazo médio é de 7 a 10 dias úteis após aprovação do projeto.\n\nPara projetos comerciais ou toldos retráteis, que são comuns no perfil ${currentBairro.profile.toLowerCase()} do ${bairroName}, o prazo pode variar de 10 a 15 dias úteis, dependendo da complexidade.\n\nEm casos de urgência, oferecemos serviço expresso com instalação em até 5 dias úteis mediante disponibilidade. A proximidade com o ${bairroName} nos permite flexibilidade nos agendamentos e rapidez na execução. Todos os prazos são informados no momento do orçamento, sempre cumpridos rigorosamente.`
      },
      {
        question: `Que tipos de toldos são mais indicados para o ${bairroName}?`,
        answer: `Para o ${bairroName}, que ${currentBairro.characteristics}, recomendamos tipos específicos de toldos adequados ao perfil ${currentBairro.profile.toLowerCase()} da região.\n\nNossos principais produtos para o ${bairroName} incluem:\n${currentBairro.mainServices.map((service: string) => `• ${service}`).join('\n')}\n\nConsideramos fatores como a arquitetura predominante no bairro, incidência solar específica da região e as necessidades mais comuns dos moradores e estabelecimentos do ${bairroName}. Nossa experiência local nos permite sugerir as melhores opções para cada situação.\n\nRealizamos análise técnica gratuita para determinar o tipo ideal de toldo para sua necessidade específica no ${bairroName}.`
      },
      {
        question: `Vocês oferecem garantia para instalações no ${bairroName}?`,
        answer: `Sim, oferecemos garantia completa para todas as instalações no ${bairroName}. Nossa garantia diferenciada inclui até 5 anos para estruturas metálicas e 2 anos para toldos retráteis, com cobertura total de defeitos de fabricação e instalação.\n\nPara clientes do ${bairroName}, oferecemos ainda manutenção preventiva gratuita no primeiro ano, aproveitando nossa proximidade e conhecimento da região para garantir a durabilidade dos equipamentos.\n\nNossa equipe técnica faz revisões periódicas e está sempre disponível para atendimento de garantia. Mantemos estoque de peças de reposição e nossa localização estratégica permite atendimento rápido no ${bairroName}. A garantia cobre tanto materiais quanto mão de obra, proporcionando total tranquilidade ao cliente.`
      },
      {
        question: `Como é feita a manutenção de toldos no ${bairroName}?`,
        answer: `No ${bairroName}, oferecemos serviço completo de manutenção preventiva e corretiva para toldos. Nossa equipe especializada realiza inspeções regulares, limpeza profissional e ajustes necessários para garantir o perfeito funcionamento.\n\nA manutenção preventiva inclui verificação de estruturas, lubrificação de mecanismos (em toldos retráteis), limpeza especializada das lonas e inspeção de pontos de fixação. Para o ${bairroName}, desenvolvemos um cronograma de manutenção adequado às características climáticas locais.\n\nOferecemos também serviço de emergência 24h para reparos urgentes, aproveitando nossa proximidade com o ${bairroName}. Todos os serviços de manutenção são realizados por técnicos certificados, com uso de equipamentos de segurança e produtos específicos para cada tipo de material.`
      },
      {
        question: `Quais materiais são utilizados nos toldos do ${bairroName}?`,
        answer: `Para o ${bairroName}, utilizamos exclusivamente materiais de primeira qualidade, adequados ao perfil ${currentBairro.profile.toLowerCase()} da região. Trabalhamos com lonas acrílicas das principais marcas nacionais como Sansuy, Guarany e Solan.\n\nAs estruturas são fabricadas em alumínio naval anodizado ou aço galvanizado, conforme a necessidade do projeto. Para toldos retráteis, utilizamos motores alemães Somfy e sistemas de automação de última geração.\n\nTodos os materiais possuem proteção UV, tratamento anti-mofo e certificação de qualidade. No ${bairroName}, priorizamos materiais que resistam às condições climáticas locais, garantindo maior durabilidade e melhor custo-benefício. Oferecemos diversas opções de cores e texturas para harmonizar com a arquitetura local.`
      },
      {
        question: `É possível fazer projetos personalizados no ${bairroName}?`,
        answer: `Absolutamente! No ${bairroName}, desenvolvemos projetos 100% personalizados, adequados às características específicas de cada imóvel e às necessidades do cliente. Nossa equipe de designers trabalha em conjunto com engenheiros para criar soluções únicas.\n\nConsideramos a arquitetura predominante no ${bairroName}, aspectos paisagísticos da região e as particularidades de cada projeto. Oferecemos opções de cores exclusivas, formatos diferenciados e sistemas de automação avançados.\n\nCada projeto personalizado inclui renderização 3D, para que o cliente visualize o resultado final antes da execução. Nossa experiência no ${bairroName} nos permite criar soluções inovadoras que valorizam o imóvel e atendem perfeitamente às expectativas do cliente.`
      },
      {
        question: `Como solicitar orçamento para o ${bairroName}?`,
        answer: `Solicitar orçamento para o ${bairroName} é muito simples e rápido! Oferecemos múltiplas formas de contato para sua comodidade: WhatsApp (41) 99812-1324, telefone (41) 3564-6943 ou através do nosso site.\n\nRealizamos visita técnica gratuita em todo o ${bairroName}, onde nosso especialista avalia o local, tira medidas precisas e apresenta as melhores opções para sua necessidade. O orçamento é elaborado na hora, sem compromisso.\n\nNosso atendimento no ${bairroName} é diferenciado, com agendamento flexível e profissionais que conhecem as particularidades da região. Oferecemos condições especiais de pagamento e orientação completa sobre o melhor tipo de toldo para seu projeto. Entre em contato hoje mesmo!`
      },
      {
        question: `Vocês trabalham com toldos comerciais no ${bairroName}?`,
        answer: `Sim, somos especialistas em toldos comerciais no ${bairroName}! Atendemos estabelecimentos de todos os portes, desde pequenos comércios até grandes empresas, adequando nossas soluções ao perfil ${currentBairro.profile.toLowerCase()} da região.\n\nNossos toldos comerciais incluem proteção para fachadas, áreas de atendimento ao público, estacionamentos e espaços de lazer corporativo. Utilizamos materiais específicos para uso comercial, com maior resistência e durabilidade.\n\nNo ${bairroName}, já atendemos diversos estabelecimentos, sempre respeitando normas municipais e criando soluções que valorizam a marca do cliente. Oferecemos projetos que podem incluir impressão de logotipos e cores corporativas, transformando o toldo em ferramenta de marketing para o estabelecimento.`
      },
      {
        question: `Qual a diferença dos toldos retráteis no ${bairroName}?`,
        answer: `Os toldos retráteis são uma excelente opção para o ${bairroName}, especialmente considerando o perfil ${currentBairro.profile.toLowerCase()} da região. Estes sistemas permitem controle total sobre a proteção solar, podendo ser recolhidos quando não necessários.\n\nOferecemos modelos manuais e automatizados, com sensores de vento e chuva para proteção automática. Os toldos retráteis são ideais para varandas, terraços e áreas externas que necessitam flexibilidade de uso.\n\nNo ${bairroName}, instalamos sistemas com controle remoto, timer programável e até mesmo integração com aplicativos de smartphone. A instalação é realizada sem obras, preservando a arquitetura original do imóvel. Garantimos 2 anos para todo o sistema retrátil, incluindo motor e automação.`
      },
      {
        question: `Como funciona a instalação no ${bairroName}?`,
        answer: `A instalação no ${bairroName} segue nosso protocolo rigoroso de qualidade, adaptado às características específicas da região. Iniciamos com visita técnica detalhada, onde avaliamos estrutura, medimos espaços e definimos pontos de fixação.\n\nNossa equipe técnica certificada utiliza equipamentos de segurança profissionais e ferramentas específicas para cada tipo de instalação. No ${bairroName}, temos logística otimizada que permite agendamento flexível e execução rápida.\n\nA instalação inclui teste completo de funcionamento, limpeza do local e orientações sobre uso e manutenção. Fornecemos certificado de instalação e material informativo sobre cuidados básicos. Nossa garantia de instalação cobre qualquer ajuste necessário nos primeiros 30 dias.`
      },
      {
        question: `Vocês oferecem financiamento para o ${bairroName}?`,
        answer: `Sim, oferecemos excelentes condições de financiamento para clientes do ${bairroName}! Trabalhamos com parcelamento facilitado, com opções que se adequam a diferentes perfis financeiros.\n\nNossas condições incluem parcelamento sem juros para pagamentos à vista, cartão de crédito em até 12x e financiamento próprio para projetos maiores. Para o ${bairroName}, desenvolvemos condições especiais que tornam nossos serviços acessíveis.\n\nAvaliamos cada caso individualmente, oferecendo a melhor condição possível conforme o perfil do cliente. Nosso processo de aprovação é rápido e desburocratizado. Consulte nossas condições especiais para moradores e empresários do ${bairroName} - você pode se surpreender com as facilidades disponíveis!`
      },
      {
        question: `Qual o horário de atendimento no ${bairroName}?`,
        answer: `Nosso atendimento no ${bairroName} é amplo e flexível! Funcionamos de segunda a sexta das 8h às 18h, e aos sábados das 8h às 12h. Para visitas técnicas e instalações, oferecemos horários estendidos conforme disponibilidade.\n\nO WhatsApp (41) 99812-1324 funciona 24h para emergências e agendamentos, garantindo que você sempre tenha um canal de comunicação aberto. Nossa equipe de plantão atende situações urgentes mesmo fora do horário comercial.\n\nPara o ${bairroName}, oferecemos agendamento de visitas técnicas nos finais de semana mediante disponibilidade, especialmente para clientes que trabalham durante a semana. Nossa flexibilidade é um diferencial importante para a comodidade de nossos clientes na região.`
      },
      {
        question: `Por que escolher a Sul Toldos para o ${bairroName}?`,
        answer: `A Sul Toldos é a escolha certa para o ${bairroName} por diversos motivos! Temos mais de 15 anos de experiência na região, conhecendo profundamente as características do bairro e as necessidades específicas de seus moradores e estabelecimentos.\n\nNossos diferenciais incluem: equipe técnica certificada, materiais de primeira qualidade, garantia estendida, manutenção preventiva gratuita no primeiro ano e atendimento 24h para emergências. No ${bairroName}, já conquistamos centenas de clientes satisfeitos.\n\nOfertamos o melhor custo-benefício da região, com orçamento gratuito, visita técnica sem compromisso e condições de pagamento facilitadas. Nossa reputação no ${bairroName} é construída na base da confiança, qualidade e pontualidade. Escolha quem é referência em toldos na sua região!`
      }
    ];
    
    return baseFAQs;
  };

  const bairroStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Sul Toldos - Toldos no ${bairroName}`,
    "description": `Especialista em toldos, coberturas e policarbonato no ${bairroName}, Curitiba. Orçamento grátis e visita técnica sem compromisso.`,
    "url": `https://sultoldos.app.br/bairro/${bairroSlug}`,
    "telephone": "+554135646943",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Curitiba",
      "addressRegion": "PR", 
      "addressCountry": "BR"
    },
    "serviceArea": {
      "@type": "Place",
      "name": `${bairroName}, Curitiba`
    },
    "services": currentBairro.mainServices,
    "priceRange": "$$",
    "openingHours": ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"]
  };

  return (
    <>
      <EnhancedSEO
        title={`Toldos no ${bairroName} - Sul Toldos | Orçamento Grátis | Curitiba`}
        description={`Toldos no ${bairroName}, Curitiba com a Sul Toldos. Especialistas em toldos residenciais, comerciais e policarbonato. Orçamento grátis! Visita técnica sem compromisso. ☎️ (41) 3564-6943`}
        keywords={`toldos ${bairroName.toLowerCase()}, toldo ${bairroName.toLowerCase()}, policarbonato ${bairroName.toLowerCase()}, cobertura ${bairroName.toLowerCase()}, toldos ${bairroName.toLowerCase()} curitiba, sul toldos, toldos em lona, toldo residencial ${bairroName.toLowerCase()}, orçamento grátis, proteção solar, toldos para varanda, toldos para jardim`}
        canonical={`https://sultoldos.app.br/bairro/${bairroSlug}`}
        ogImage={currentBairro.image}
        structuredData={bairroStructuredData}
        location={`${bairroName}, Curitiba`}
        service={`toldos no ${bairroName}`}
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
                    Toldos no <span className="text-primary">{bairroName}</span>
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    A Sul Toldos atende o bairro {bairroName} em Curitiba com excelência em toldos, 
                    coberturas e policarbonato. Com mais de 15 anos de experiência, oferecemos qualidade 
                    garantida e orçamento gratuito para toda região.
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
                      <div className="text-2xl font-bold text-primary">{currentBairro.zone}</div>
                      <div className="text-sm text-muted-foreground">localização</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">24h</div>
                      <div className="text-sm text-muted-foreground">atendimento</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">clientes bairro</div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <img 
                    src={currentBairro.image} 
                    alt={`Toldos e coberturas no ${bairroName}, Curitiba - Sul Toldos`}
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
            location={bairroName}
            type="bairro"
            cards={getServiceCards()}
          />

          {/* FAQ Section */}
          <LocationFAQ 
            location={bairroName}
            type="bairro"
            faqs={getBairroFAQs()}
          />

          {/* Vídeo YouTube */}
          <YouTubeVideo 
            title={`Nossos serviços no ${bairroName}`}
            subtitle={`Veja a qualidade dos nossos toldos e coberturas instalados no ${bairroName}, Curitiba`}
            ctaText={`💬 Orçamento para o ${bairroName}`}
            ctaAction={handleWhatsApp}
            className="bg-secondary/30"
          />

          {/* Seção de Contato Final */}
          <section className="py-20 bg-primary/10">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Seu toldo ideal no <span className="text-primary">{bairroName}</span> está aqui!
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Entre em contato agora e solicite seu orçamento gratuito. Nossa equipe conhece bem o 
                {bairroName} e está pronta para atender você com toda excelência Sul Toldos.
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
                <p className="mt-2">📍 Atendemos o {bairroName} e todos os bairros de Curitiba</p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BairroPage;