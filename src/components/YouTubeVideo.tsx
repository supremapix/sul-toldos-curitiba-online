import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Play, Star, Shield, MapPin } from "lucide-react";
import { openWhatsapp } from "@/utils/whatsapp";

interface YouTubeVideoProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaAction?: () => void;
  className?: string;
  location?: string;
}

const YouTubeVideo = ({ 
  title = "Sul Toldos Cristo Rei — Veja Nosso Trabalho",
  subtitle = "Conheça a qualidade dos nossos serviços de toldos, coberturas e policarbonato em Curitiba e região metropolitana",
  ctaText = "💬 Solicitar Orçamento Grátis no WhatsApp",
  ctaAction,
  className = "",
  location = "Curitiba"
}: YouTubeVideoProps) => {
  
  const handleWhatsApp = () => {
    const message = `Olá! Vi o vídeo de vocês sobre toldos em ${location} e gostaria de solicitar um orçamento!`;
    openWhatsapp(message);
  };

  const handleCall = () => {
    window.open("tel:4135646943");
  };

  return (
    <section className={`py-20 relative overflow-hidden ${className}`} aria-label={`Vídeo Sul Toldos ${location}`}>
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header com badge */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Play className="w-4 h-4" />
            Vídeo — Sul Toldos em {location}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Player com moldura premium */}
          <Card className="overflow-hidden bg-card border-2 border-primary/20 shadow-2xl shadow-primary/10 rounded-2xl">
            <CardContent className="p-0">
              <div className="relative" style={{ paddingBottom: "177.78%" /* 9:16 shorts */ }}>
                <iframe
                  src="https://www.youtube.com/embed/h9AMM5y7WGs?rel=0&modestbranding=1&showinfo=0&loop=1&playlist=h9AMM5y7WGs"
                  title={`Sul Toldos ${location} — Fabricação e Instalação de Toldos, Coberturas e Policarbonato`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>
            </CardContent>
          </Card>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 mb-6">
            {[
              { icon: Star, text: "4.9 ★ no Google" },
              { icon: Shield, text: "Garantia em todos os serviços" },
              { icon: MapPin, text: `Atendemos ${location}` },
            ].map((badge, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 bg-muted/60 text-muted-foreground px-3 py-1.5 rounded-full text-xs font-medium border border-border">
                <badge.icon className="w-3.5 h-3.5 text-primary" />
                {badge.text}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={ctaAction || handleWhatsApp}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 text-lg rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
            >
              {ctaText}
            </Button>
            <Button 
              onClick={handleCall}
              variant="outline"
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/10 font-semibold px-6 py-4 text-lg rounded-xl"
            >
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora
            </Button>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-5">
            ✅ Orçamento 100% gratuito • ✅ Visita técnica sem compromisso • ✅ Mais de 10 anos de mercado
          </p>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideo;
