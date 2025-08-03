import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CityPage = () => {
  const { city } = useParams();
  
  const cityName = city?.charAt(0).toUpperCase() + city?.slice(1) || "";

  const handleWhatsApp = () => {
    const message = `Olá, gostaria de solicitar um orçamento para toldos em ${cityName}!`;
    window.open(`https://wa.me/5541998121324?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Toldos em {cityName} - Sul Toldos | Orçamento Grátis</title>
        <meta name="description" content={`Toldos em ${cityName} com a Sul Toldos. Especialistas em toldos, coberturas e policarbonato. Orçamento grátis! Atendemos ${cityName} e região.`} />
        <meta name="keywords" content={`toldos ${cityName}, toldo ${cityName}, policarbonato ${cityName}, cobertura ${cityName}, sul toldos`} />
        <link rel="canonical" href={`https://sultoldos.com.br/cidade/${city}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Toldos em <span className="text-primary">{cityName}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A Sul Toldos atende {cityName} com excelência em toldos, coberturas e policarbonato. 
                Solicite seu orçamento gratuito!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Por que escolher a Sul Toldos em {cityName}?
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">✓</span>
                      <span className="text-muted-foreground">Atendimento especializado em {cityName}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">✓</span>
                      <span className="text-muted-foreground">Equipe técnica qualificada</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">✓</span>
                      <span className="text-muted-foreground">Materiais de alta qualidade</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">✓</span>
                      <span className="text-muted-foreground">Garantia em todos os serviços</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Solicite seu Orçamento em {cityName}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Atendimento rápido e orçamento gratuito para toldos em {cityName}
                  </p>
                  <Button 
                    onClick={handleWhatsApp}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 w-full mb-4"
                  >
                    💬 WhatsApp - Orçamento Grátis
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    📞 (41) 3564-6943 | (41) 99812-1324
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Serviços de Toldos em {cityName}
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-4">Toldos Residenciais</h3>
                  <p className="text-muted-foreground">
                    Proteção e conforto para sua residência em {cityName}
                  </p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-4">Toldos Comerciais</h3>
                  <p className="text-muted-foreground">
                    Soluções profissionais para estabelecimentos em {cityName}
                  </p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-4">Coberturas</h3>
                  <p className="text-muted-foreground">
                    Estruturas em policarbonato para {cityName}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CityPage;