import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface YouTubeVideoProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaAction?: () => void;
  className?: string;
}

const YouTubeVideo = ({ 
  title = "Veja como trabalhamos",
  subtitle = "Conheça nossos serviços de toldos e coberturas em detalhes",
  ctaText = "Solicitar Orçamento Gratuito",
  ctaAction,
  className = ""
}: YouTubeVideoProps) => {
  
  const handleDefaultCTA = () => {
    const message = "Olá! Vi o vídeo de vocês e gostaria de solicitar um orçamento para toldos!";
    window.open(`https://wa.me/5541998121324?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden bg-card border-border">
            <CardContent className="p-0">
              <div className="relative aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/TTjsyKAjH0E?rel=0&modestbranding=1&showinfo=0"
                  title="Sul Toldos - Serviços de Toldos e Coberturas"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button 
              onClick={ctaAction || handleDefaultCTA}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 text-lg"
            >
              {ctaText}
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              ✅ Orçamento gratuito • ✅ Visita técnica sem compromisso • ✅ Garantia em todos os serviços
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideo;