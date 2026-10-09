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
  title = "Toldos Comerciais Curitiba — Projetos de Destaque",
  subtitle = "Conheça a qualidade dos nossos serviços de toldos comerciais, coberturas e policarbonato em Curitiba e região",
  ctaText = "Solicitar Orçamento Grátis no WhatsApp",
  ctaAction,
  className = "",
  location = "Curitiba"
}: YouTubeVideoProps) => {
  
  const handleWhatsApp = () => {
    const message = `Olá! Vi o vídeo de vocês sobre toldos comerciais em ${location} e gostaria de solicitar um orçamento!`;
    openWhatsapp(message);
  };

  const handleCall = () => {
    window.open("tel:4135646943");
  };

  return (
    <section className={`py-20 bg-[#F4EFE6] text-[#1C1F22] border-b border-border relative ${className}`} aria-label={`Vídeo Toldos Comerciais ${location}`}>
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header com badge */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#F2B705] text-[#1C1F22] font-sans font-extrabold text-[10px] md:text-xs tracking-[0.2em] uppercase px-3 py-1.5 mb-6 rounded-[2px]">
            03 — VÍDEO DE APRESENTAÇÃO
          </span>
          <h2 
            className="text-3xl md:text-5xl font-extrabold uppercase leading-tight tracking-tight mb-4 text-[#1C1F22]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {title}
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Player com moldura premium flat */}
          <Card className="overflow-hidden bg-[#1C1F22] border-2 border-[#1C1F22] shadow-none rounded-[2px]">
            <CardContent className="p-0">
              <div className="relative" style={{ paddingBottom: "177.78%" /* 9:16 shorts */ }}>
                <iframe
                  src="https://www.youtube.com/embed/h9AMM5y7WGs?rel=0&modestbranding=1&showinfo=0&loop=1&playlist=h9AMM5y7WGs"
                  title={`Toldos Comerciais Curitiba em ${location} — Fabricação e Instalação de Toldos e Coberturas`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>
            </CardContent>
          </Card>

          {/* Trust badges unboxed */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 mb-8 text-xs text-gray-600 font-bold uppercase tracking-wider">
            <span className="flex items-center gap-1.5">• 4.9 ★ no Google</span>
            <span className="flex items-center gap-1.5">• Garantia por Escrito</span>
            <span className="flex items-center gap-1.5">• Atendemos {location}</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={ctaAction || handleWhatsApp}
              size="lg"
              className="bg-[#C8361D] hover:bg-[#C8361D]/90 text-white font-extrabold text-xs uppercase tracking-wider px-8 py-5 rounded-[2px] transition-all cursor-pointer"
            >
              {ctaText}
            </Button>
            <Button 
              onClick={handleCall}
              variant="outline"
              size="lg"
              className="border-gray-400 hover:border-[#1C1F22] text-[#1C1F22] hover:bg-[#1C1F22] hover:text-[#F4EFE6] font-extrabold text-xs uppercase tracking-wider px-6 py-5 rounded-[2px] transition-all cursor-pointer"
            >
              Ligar Agora
            </Button>
          </div>
          
          <p className="text-center text-xs text-gray-500 mt-6 font-semibold uppercase tracking-wide">
            ✓ Orçamento Gratuito • ✓ Visita técnica sem compromisso • ✓ Qualidade por contrato
          </p>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideo;
