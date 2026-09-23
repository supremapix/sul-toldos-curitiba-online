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
import galeriaCoberturaQuintal from "@/assets/galeria-cobertura-quintal.jpg";
import galeriaToldoGaragem from "@/assets/galeria-toldo-garagem.jpg";
import galeriaCortinaRolo from "@/assets/galeria-cortina-rolo.jpg";

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
      image: galeriaCortinaRolo,
      zone: "Zona Sul",
      profile: "Residencial nobre",
      specialty: "Bairro residencial de alto padrão com muitas casas e apartamentos que demandam toldos elegantes",
      mainServices: ["Toldos residenciais premium", "Coberturas sofisticadas", "Toldos retráteis automáticos", "Policarbonato cristal"]
    },
    "centro": {
      image: galeriaPolicarbonatoEntrada,
      zone: "Região Central",
      profile: "Comercial/Empresarial",
      specialty: "Centro histórico e comercial com grande demanda por toldos comerciais e corporativos",
      mainServices: ["Toldos comerciais", "Coberturas para estabelecimentos", "Estruturas publicitárias", "Toldos para restaurantes"]
    },
    "batel": {
      image: galeriaCortinaRolo,
      zone: "Zona Sul",
      profile: "Residencial/Comercial de luxo",
      specialty: "Bairro nobre com residências e estabelecimentos de alto padrão",
      mainServices: ["Toldos de luxo", "Coberturas exclusivas", "Sistemas automatizados", "Projetos personalizados"]
    },
    "portao": {
      image: galeriaToldoGaragem,
      zone: "Zona Sul",
      profile: "Comercial diversificado",
      specialty: "Importante corredor comercial com demanda variada de toldos para diferentes tipos de negócios",
      mainServices: ["Toldos comerciais variados", "Estruturas para comércios", "Toldos para concessionárias", "Coberturas industriais"]
    },
    "cajuru": {
      image: galeriaCoberturaQuintal,
      zone: "Zona Leste",
      profile: "Residencial popular",
      specialty: "Bairro residencial em crescimento com boa demanda por toldos residenciais acessíveis",
      mainServices: ["Toldos residenciais", "Coberturas econômicas", "Toldos em lona", "Estruturas básicas"]
    }
  };

  const defaultBairro = {
    image: galeriaToldoGaragem,
    zone: "Curitiba",
    profile: "Residencial/Comercial",
    specialty: "Bairro de Curitiba com demanda por toldos residenciais e comerciais de qualidade",
    mainServices: ["Toldos residenciais", "Coberturas comerciais", "Policarbonato", "Toldos retráteis"]
  };

  const currentBairro = bairroData[bairroSlug] || defaultBairro;

  const handleWhatsApp = () => {
    const message = `Olá, gostaria de solicitar um orçamento para toldos no ${bairroName}, Curitiba!`;
    window.open(`https://wa.me/5541998121324?text=${encodeURIComponent(message)}`, "_blank");
  };

  const getServiceCards = () => [
    {
      title: `Toldos Residenciais no ${bairroName}`,
      icon: "🏠",
      content: `A Sul Toldos oferece as melhores soluções em toldos residenciais para o ${bairroName}, Curitiba. Com perfil ${currentBairro.profile.toLowerCase()}, o bairro demanda toldos de qualidade que combinem estética e funcionalidade.\n\nPreços para o ${bairroName}:\n• Toldo fixo em lona: a partir de R$ 220/m²\n• Toldo retrátil: a partir de R$ 250/m²\n• Policarbonato: a partir de R$ 220/m²\n• Cortina rolo: a partir de R$ 220/m²\n\nVisita técnica gratuita em todo o ${bairroName}. Orçamento sem compromisso e parcelamento em até 12x.`
    },
    {
      title: `Serviços Comerciais no ${bairroName}`,
      icon: "🏢",
      content: `${currentBairro.specialty}. Nossos serviços comerciais incluem:\n\n${currentBairro.mainServices.map((s: string) => `• ${s}`).join('\n')}\n\nToldos de fachada com logomarca a partir de R$ 220/m². Coberturas para estacionamento a partir de R$ 220/m². Projetos personalizados com cores da marca do estabelecimento.\n\nJá atendemos dezenas de comércios no ${bairroName}. Cada projeto é desenvolvido para valorizar o estabelecimento e atrair mais clientes.`
    },
    {
      title: `Atendimento Rápido no ${bairroName}`,
      icon: "🚀",
      content: `Nossa localização estratégica permite atendimento ágil em todo o ${bairroName}, na ${currentBairro.zone} de Curitiba. Prazos otimizados:\n\n• Toldos fixos: 5-7 dias úteis\n• Toldos retráteis: 7-12 dias úteis\n• Policarbonato: 10-15 dias úteis\n• Serviço expresso: até 5 dias úteis\n\nEquipe dedicada que conhece as ruas do ${bairroName}. Atendimento emergencial 24h pelo WhatsApp. Manutenção preventiva gratuita no primeiro ano.`
    },
    {
      title: `Confiança e Garantia no ${bairroName}`,
      icon: "⭐",
      content: `Mais de 15 anos atendendo o ${bairroName} com excelência. Nossa garantia inclui:\n\n• Até 5 anos para estruturas metálicas\n• 2 anos para toldos retráteis com motor\n• 10 anos para policarbonato\n• Manutenção preventiva gratuita no 1º ano\n\nMateriais de primeira qualidade: lonas Sansuy e Guarany, alumínio naval, motores Somfy (alemães). Mais de 500 clientes satisfeitos no ${bairroName}. Nota 4.9/5 em avaliações.`
    }
  ];

  const getBairroFAQs = () => [
    {
      question: `Quanto custa um toldo por m² no ${bairroName}?`,
      answer: `Preços de toldos no ${bairroName}, Curitiba: toldo fixo em lona a partir de R$ 220/m², retrátil manual a partir de R$ 250/m², motorizado a partir de R$ 350/m², policarbonato a partir de R$ 220/m², cortina rolo a partir de R$ 220/m². Os valores variam conforme material, dimensões e complexidade. Fazemos orçamento gratuito com visita técnica no ${bairroName}. Parcelamento em até 12x sem juros. Desconto de 10% à vista. WhatsApp (41) 99812-1324.`
    },
    {
      question: `Vocês atendem todo o bairro ${bairroName}?`,
      answer: `Sim! Atendemos todo o ${bairroName} e bairros vizinhos na ${currentBairro.zone} de Curitiba. Nossa equipe conhece profundamente as características do bairro. Realizamos visitas técnicas gratuitas em qualquer rua do ${bairroName}, com agendamento flexível incluindo sábados. Atendimento de segunda a sexta das 8h às 18h. Emergências 24h pelo WhatsApp (41) 99812-1324.`
    },
    {
      question: `Qual o melhor toldo para residência no ${bairroName}?`,
      answer: `Para o ${bairroName}, com perfil ${currentBairro.profile.toLowerCase()}, recomendamos: toldo fixo em lona acrílica (R$ 220-180/m²) para janelas, toldo retrátil (R$ 250-350/m²) para varandas, policarbonato (R$ 220-280/m²) para garagens, e cortina rolo (R$ 220-380/m²) para sacadas. Nossa equipe avalia gratuitamente qual a melhor opção para sua necessidade específica no ${bairroName}.`
    },
    {
      question: `Qual o prazo de instalação no ${bairroName}?`,
      answer: `No ${bairroName}: toldos fixos de 5 a 7 dias úteis, retráteis de 7 a 12 dias, policarbonato de 10 a 15 dias. Serviço expresso em até 5 dias disponível. Nossa proximidade com o ${bairroName} permite agendamentos flexíveis e execução rápida. Prazos informados no orçamento e cumpridos rigorosamente.`
    },
    {
      question: `Vocês fazem toldos comerciais no ${bairroName}?`,
      answer: `Sim! O ${bairroName} tem perfil ${currentBairro.profile.toLowerCase()} e atendemos todos os tipos de comércio: padarias, farmácias, restaurantes, pet shops, salões de beleza, oficinas e mais. Toldos de fachada com logomarca a partir de R$ 220/m². Coberturas para estacionamento a partir de R$ 220/m². Projetos personalizados para cada estabelecimento.`
    },
    {
      question: `Qual a garantia para toldos no ${bairroName}?`,
      answer: `Garantia completa no ${bairroName}: até 5 anos para estruturas metálicas, 2 anos para retráteis incluindo motor, 10 anos para policarbonato contra amarelamento, 1 ano para lonas. Manutenção preventiva gratuita no primeiro ano. Equipe disponível 24h para atendimento de garantia. Estoque de peças para atendimento rápido.`
    },
    {
      question: `É possível parcelar toldos no ${bairroName}?`,
      answer: `Sim! Parcelamento em até 12x no cartão sem juros. Desconto de 10% à vista (PIX). Boleto em até 6x. Financiamento próprio para projetos acima de R$ 5.000. Condições especiais para projetos comerciais de grande porte no ${bairroName}. Processo rápido e sem burocracia.`
    },
    {
      question: `Quanto custa cobertura para garagem no ${bairroName}?`,
      answer: `No ${bairroName}: garagem 1 carro (15m²) de R$ 1.800 a R$ 4.500, 2 carros (30m²) de R$ 3.500 a R$ 9.000. Opções em policarbonato ou lona tensionada. Estrutura em metalon ou alumínio. Inclui projeto, fabricação e instalação. Garantia de até 5 anos na estrutura.`
    },
    {
      question: `Vocês fazem manutenção de toldos no ${bairroName}?`,
      answer: `Sim! Troca de lona (R$ 80-150/m²), limpeza profissional (R$ 15-25/m²), lubrificação (R$ 220-300/toldo), reparo estrutural (sob consulta). Atendemos toldos de qualquer fabricante no ${bairroName}. Manutenção preventiva prolonga vida útil em até 40%. Emergência 24h pelo WhatsApp.`
    },
    {
      question: `Qual a diferença entre policarbonato e lona no ${bairroName}?`,
      answer: `Policarbonato: mais resistente, permite luz natural, dura 15-20 anos, R$ 220-300/m², ideal para garagem e área de lazer. Lona: melhor proteção solar, mais cores, dura 5-12 anos, R$ 220-200/m², ideal para fachadas e retráteis. No ${bairroName}, ambos os materiais são indicados conforme a necessidade específica.`
    },
    {
      question: `Vocês instalam cortina rolo no ${bairroName}?`,
      answer: `Sim! Cortina rolo no ${bairroName}: com visor transparente PVC de R$ 280-380/m², em blackout de R$ 220-320/m². Sistema manual ou motorizado. Ideal para varandas gourmet e sacadas. Guias laterais anti-vento. Diversas cores disponíveis. Instalação rápida sem obras. Garantia de 2 anos.`
    },
    {
      question: `Como agendar visita no ${bairroName}?`,
      answer: `WhatsApp (41) 99812-1324, telefone (41) 3564-6943 ou formulário do site. Agendamento flexível de segunda a sábado para o ${bairroName}. Técnico avalia local, tira medidas e apresenta orçamento na hora. Visita dura 30-45 minutos. Sem compromisso. Totalmente gratuita.`
    },
    {
      question: `Vocês atendem apartamentos no ${bairroName}?`,
      answer: `Sim! Instalamos toldos em apartamentos e condomínios no ${bairroName}. Respeitamos regulamentos internos e orientamos sobre aprovação do síndico. Equipe certificada em NR35 para trabalho em altura. Toldos para sacadas, varandas e áreas comuns do condomínio. Cortinas rolo e toldos retráteis são os mais solicitados.`
    },
    {
      question: `Toldo retrátil manual ou motorizado no ${bairroName}?`,
      answer: `Manual: R$ 250-320/m², operação com manivela, ideal para áreas menores. Motorizado: R$ 350-500/m², com motor Somfy, controle remoto, opcionais de sensores. No ${bairroName}, para o perfil ${currentBairro.profile.toLowerCase()}, o motorizado é mais solicitado. Sensor de vento (R$ 300-500) recomendado.`
    },
    {
      question: `Por que escolher Sul Toldos no ${bairroName}?`,
      answer: `Mais de 15 anos no ${bairroName}! Diferenciais: preços a partir de R$ 220/m², materiais premium (Sansuy, Guarany, Somfy), equipe certificada, garantia até 5 anos, manutenção gratuita no 1º ano, atendimento 24h, orçamento gratuito, 12x sem juros. Mais de 500 clientes satisfeitos no bairro. Nota 4.9/5 em avaliações.`
    }
  ];

  const bairroStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Sul Toldos - Toldos no ${bairroName}, Curitiba`,
    "description": `Toldos no ${bairroName}, Curitiba a partir de R$ 220/m². Especialista em toldos, coberturas e policarbonato. Orçamento grátis!`,
    "url": `https://sultoldos.app.br/bairro/${bairroSlug}`,
    "telephone": "+554135646943",
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
        title={`Toldos no ${bairroName} Curitiba | Preços a partir R$ 220/m² | Sul Toldos`}
        description={`Toldos no ${bairroName}, Curitiba a partir de R$ 220/m². Policarbonato, retráteis, comerciais e residenciais. Orçamento grátis! ☎️ (41) 3564-6943. Garantia até 5 anos. 12x sem juros.`}
        keywords={`toldos ${bairroName.toLowerCase()}, toldo ${bairroName.toLowerCase()} curitiba, preço toldo ${bairroName.toLowerCase()}, policarbonato ${bairroName.toLowerCase()}, cobertura ${bairroName.toLowerCase()}, toldo retrátil, toldo m2 preço, toldo residencial, toldo comercial, cortina rolo`}
        canonical={`https://sultoldos.app.br/bairro/${bairroSlug}`}
        structuredData={bairroStructuredData}
        location={`${bairroName}, Curitiba`}
        service={`toldos no ${bairroName}`}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />
        
        <main>
          {/* Hero */}
          <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 to-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                    Toldos no <span className="text-primary">{bairroName}</span>
                    <span className="block text-2xl lg:text-3xl mt-2 text-muted-foreground font-normal">
                      Curitiba - A partir de R$ 220/m²
                    </span>
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    A Sul Toldos atende o {bairroName} com excelência em toldos, coberturas e policarbonato. 
                    Mais de 15 anos de experiência. Orçamento gratuito com visita técnica.
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
                      <div className="text-xl font-bold text-primary">{currentBairro.zone}</div>
                      <div className="text-sm text-muted-foreground">localização</div>
                    </div>
                    <div className="bg-card rounded-xl p-3">
                      <div className="text-xl font-bold text-primary">24h</div>
                      <div className="text-sm text-muted-foreground">atendimento</div>
                    </div>
                    <div className="bg-card rounded-xl p-3">
                      <div className="text-xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">clientes</div>
                    </div>
                  </div>
                </div>

                <div>
                  <img 
                    src={currentBairro.image} 
                    alt={`Toldos no ${bairroName}, Curitiba - Sul Toldos - Preços a partir de R$ 220/m²`}
                    className="rounded-2xl shadow-2xl w-full"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </section>

          <ServiceCards location={bairroName} type="bairro" cards={getServiceCards()} />

          <InfiniteGallery locationName={bairroName} locationType="bairro" />

          <LocationFAQ location={bairroName} type="bairro" faqs={getBairroFAQs()} />

          <YouTubeVideo 
            title={`Nossos serviços no ${bairroName}`}
            subtitle={`Qualidade Sul Toldos no ${bairroName}, Curitiba`}
            ctaText={`💬 Orçamento no ${bairroName}`}
            ctaAction={handleWhatsApp}
            className="bg-secondary/30"
          />

          {/* CTA Final */}
          <section className="py-16 bg-primary/10">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Seu toldo no <span className="text-primary">{bairroName}</span> está aqui!
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Orçamento gratuito, visita técnica sem compromisso e parcelamento em até 12x.
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
                ✅ Orçamento gratuito • ✅ Visita técnica • ✅ Garantia 5 anos • ✅ 12x sem juros
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
