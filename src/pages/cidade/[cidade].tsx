import { useParams } from "react-router-dom";
import EnhancedSEO from "@/components/EnhancedSEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubeVideo from "@/components/YouTubeVideo";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

          {/* 4 Textos Personalizados */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Por que escolher a Sul Toldos em <span className="text-primary">{cityName}</span>?
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  {currentCity.specialty}. Conheça nossos diferenciais e especialidades na região.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {/* Texto 1 - Experiência Local */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                      🏠 Experiência em {cityName}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Com ampla experiência em {cityName}, conhecemos as particularidades climáticas e arquitetônicas 
                      da região. Nossos toldos são projetados especificamente para resistir às condições locais, 
                      oferecendo máxima durabilidade e proteção contra sol e chuva.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Já atendemos centenas de clientes em {cityName}, desde residências até grandes estabelecimentos 
                      comerciais. Nossa equipe conhece os {currentCity.neighborhoods} e oferece soluções personalizadas 
                      para cada necessidade.
                    </p>
                  </CardContent>
                </Card>

                {/* Texto 2 - Serviços Especializados */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                      ⚙️ Serviços Especializados
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Em {cityName}, oferecemos uma linha completa de serviços especializados em toldos e coberturas. 
                      Nossos principais serviços incluem instalação, manutenção, reparo e modernização de estruturas 
                      de proteção solar.
                    </p>
                    <ul className="space-y-2">
                      {currentCity.mainServices.map((service: string, index: number) => (
                        <li key={index} className="flex items-center text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Texto 3 - Qualidade e Garantia */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                      ✅ Qualidade Garantida
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Trabalhamos exclusivamente com materiais de primeira qualidade em {cityName}. Nossos toldos 
                      utilizam lonas acrílicas de marcas renomadas como Sansuy e Guarany, com proteção UV e 
                      tratamento impermeabilizante.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Oferecemos garantia de até 5 anos em estruturas metálicas e 2 anos em toldos retráteis. 
                      Nossa equipe técnica realiza manutenção preventiva gratuita no primeiro ano, garantindo 
                      a longevidade do seu investimento.
                    </p>
                  </CardContent>
                </Card>

                {/* Texto 4 - Atendimento Diferenciado */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                      🚀 Atendimento Diferenciado
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Nosso atendimento em {cityName} é personalizado e diferenciado. Realizamos visita técnica 
                      gratuita, elaboramos projeto detalhado e acompanhamos toda a instalação com equipe própria 
                      e certificada.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Trabalhamos com prazos flexíveis e respeitamos o orçamento do cliente. Oferecemos parcelamento 
                      facilitado e condições especiais para projetos de grande porte. Nossa prioridade é a satisfação 
                      total do cliente em {cityName}.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

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