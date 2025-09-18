import { useParams } from "react-router-dom";
import EnhancedSEO from "@/components/EnhancedSEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeVideo from "@/components/YouTubeVideo";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

          {/* 4 Textos Personalizados */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Sul Toldos no <span className="text-primary">{bairroName}</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  O {bairroName} é {currentBairro.characteristics}. 
                  Conheça nossos serviços especializados para este importante bairro de Curitiba.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {/* Texto 1 - Conhecimento Local */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                      🏘️ Conhecimento do {bairroName}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Nossa equipe conhece profundamente as características do {bairroName}, {currentBairro.characteristics}. 
                      Isso nos permite oferecer soluções de toldos e coberturas perfeitamente adequadas ao perfil 
                      {currentBairro.profile.toLowerCase()} da região.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentBairro.specialty}. Já realizamos centenas de instalações no bairro, 
                      sempre respeitando a arquitetura local e as necessidades específicas dos moradores e comerciantes.
                    </p>
                  </CardContent>
                </Card>

                {/* Texto 2 - Serviços Específicos */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                      🔧 Serviços para o {bairroName}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Nossos serviços no {bairroName} são adaptados ao perfil {currentBairro.profile.toLowerCase()} 
                      da região. Oferecemos desde soluções residenciais até projetos comerciais complexos, 
                      sempre com a qualidade Sul Toldos.
                    </p>
                    <ul className="space-y-2">
                      {currentBairro.mainServices.map((service: string, index: number) => (
                        <li key={index} className="flex items-center text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Texto 3 - Proximidade e Agilidade */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                      🚀 Proximidade e Agilidade
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Nossa localização estratégica em Curitiba nos permite atender o {bairroName} com rapidez 
                      e eficiência. Realizamos visitas técnicas no mesmo dia e entregas em prazos recordes, 
                      garantindo a satisfação dos nossos clientes.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Temos equipes dedicadas que conhecem as ruas e particularidades do {bairroName}, 
                      facilitando a logística de entrega, instalação e manutenção. Nossa proximidade 
                      garante um atendimento mais personalizado e eficaz.
                    </p>
                  </CardContent>
                </Card>

                {/* Texto 4 - Tradição e Confiança */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                      ⭐ Tradição no {bairroName}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Ao longo dos anos, construímos uma sólida reputação no {bairroName}. Nossos clientes 
                      nos recomendam para vizinhos e conhecidos, criando uma rede de confiança que é nosso 
                      maior patrimônio no bairro.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Oferecemos garantia estendida, manutenção preventiva e suporte pós-venda diferenciado 
                      para clientes do {bairroName}. Nossa missão é ser a referência em toldos e coberturas 
                      na região, mantendo a qualidade que nos tornou conhecidos.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

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