import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BairroPage = () => {
  const { bairro } = useParams();
  
  const bairroName = bairro?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') || "";

  const handleWhatsApp = () => {
    const message = `Olá, gostaria de solicitar um orçamento para toldos no ${bairroName}, Curitiba!`;
    window.open(`https://wa.me/5541998121324?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Toldos no {bairroName} - Curitiba | Sul Toldos</title>
        <meta name="description" content={`Toldos no ${bairroName}, Curitiba. Sul Toldos - especialista em toldos, coberturas e policarbonato. Orçamento grátis! Atendemos o ${bairroName} e toda Curitiba.`} />
        <meta name="keywords" content={`toldos ${bairroName}, toldo ${bairroName} curitiba, policarbonato ${bairroName}, cobertura ${bairroName}`} />
        <link rel="canonical" href={`https://sultoldos.app.br/bairro/${bairro}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Toldos no <span className="text-primary">{bairroName}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A Sul Toldos atende o bairro {bairroName} em Curitiba com excelência em toldos, 
                coberturas e policarbonato. Solicite seu orçamento gratuito!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Toldos no {bairroName} - Curitiba
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Moradores e empresários do {bairroName} já confiam na Sul Toldos para proteção 
                    solar e soluções em coberturas.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">✓</span>
                      <span className="text-muted-foreground">Atendimento no {bairroName}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">✓</span>
                      <span className="text-muted-foreground">Visita técnica gratuita</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">✓</span>
                      <span className="text-muted-foreground">Instalação profissional</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">✓</span>
                      <span className="text-muted-foreground">Garantia e suporte pós-venda</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Orçamento no {bairroName}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Solicite sua visita técnica gratuita no {bairroName}
                  </p>
                  <Button 
                    onClick={handleWhatsApp}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 w-full mb-4"
                  >
                    💬 WhatsApp - {bairroName}
                  </Button>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>📞 (41) 3564-6943</p>
                    <p>📱 (41) 99812-1324</p>
                    <p>✉️ contato@sultoldos.com.br</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Tipos de Toldos Disponíveis no {bairroName}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <h3 className="text-lg font-bold text-foreground mb-2">Toldos em Lona</h3>
                  <p className="text-sm text-muted-foreground">
                    Proteção solar resistente e durável
                  </p>
                </div>
                
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <h3 className="text-lg font-bold text-foreground mb-2">Toldos Retráteis</h3>
                  <p className="text-sm text-muted-foreground">
                    Sistemas automatizados modernos
                  </p>
                </div>
                
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <h3 className="text-lg font-bold text-foreground mb-2">Coberturas</h3>
                  <p className="text-sm text-muted-foreground">
                    Estruturas em policarbonato
                  </p>
                </div>
                
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <h3 className="text-lg font-bold text-foreground mb-2">Manutenção</h3>
                  <p className="text-sm text-muted-foreground">
                    Reparo e conservação
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

export default BairroPage;