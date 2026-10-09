import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-awning.jpg";
import { openWhatsapp } from "@/utils/whatsapp";
import { Phone } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("resize", checkIsDesktop);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleWhatsApp = () => {
    openWhatsapp("Olá, gostaria de solicitar um orçamento de toldo comercial para minha empresa!");
  };

  const handleCallNow = () => {
    window.open("tel:4135646943");
  };

  return (
    <section id="home" className="relative bg-[#1C1F22] text-[#F4EFE6] overflow-hidden border-b border-border w-full">
      <div className="max-w-[1440px] mx-auto min-h-[80vh] lg:min-h-[85vh] grid lg:grid-cols-12 items-stretch">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-7 flex flex-col justify-center px-5 py-12 md:px-12 lg:py-24 z-10 bg-[#1C1F22]">
          <div className="max-w-xl text-left">
            {/* Tag/Label Placa de Rua */}
            <span className="inline-block bg-[#F2B705] text-[#1C1F22] font-sans font-extrabold text-[10px] md:text-xs tracking-[0.2em] uppercase px-3 py-1.5 mb-6 rounded-[2px] animate-slide-left">
              01 — FACHADAS COMERCIAIS
            </span>
            
            {/* H1 do Hero com tamanho fluido e quebra de linha sequencial */}
            <h1 
              className="font-sans font-black uppercase text-[#F4EFE6] tracking-tight mb-6 break-words flex flex-col gap-1"
              style={{
                fontFamily: "'Barlow Condensed', 'Archivo Narrow', sans-serif",
                fontSize: "clamp(2rem, 9vw, 4.5rem)",
                lineHeight: "1.0",
                textRendering: "optimizeLegibility"
              }}
            >
              <span className="animate-line-up" style={{ animationDelay: "120ms" }}>Toldos comerciais</span>
              <span className="animate-line-up" style={{ animationDelay: "240ms" }}>que fazem sua</span>
              <span className="text-[#C8361D] relative inline-block animate-line-up" style={{ animationDelay: "360ms" }}>
                <span className="relative z-10">fachada vender mais</span>
                <span className="absolute bottom-0 left-0 h-[4px] bg-[#C8361D] animate-draw-underline" style={{ animationDelay: "800ms" }} />
              </span>
            </h1>
            
            <p 
              className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed font-sans animate-fade-up opacity-0"
              style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
            >
              Projeto sob medida, lona de alta resistência com a marca do cliente impressa, instalação rápida sem precisar fechar sua loja e atendimento em toda Curitiba e região metropolitana.
            </p>

            {/* Botões empilhados em mobile e 100% largura */}
            <div 
              className="flex flex-col sm:flex-row gap-3 animate-fade-up opacity-0"
              style={{ animationDelay: "650ms", animationFillMode: "forwards" }}
            >
              <Button 
                onClick={handleWhatsApp}
                size="lg"
                className="w-full sm:w-auto bg-[#C8361D] hover:bg-[#C8361D]/90 text-white font-extrabold text-sm uppercase tracking-wider px-4 sm:px-8 py-4 sm:py-6 rounded-[2px] shadow-sm transition-all duration-200 cursor-pointer min-h-[52px] whitespace-normal sm:whitespace-nowrap"
              >
                <span className="sm:hidden">Pedir Orçamento</span>
                <span className="hidden sm:inline">Pedir orçamento para minha empresa</span>
              </Button>
              
              <Button 
                onClick={handleCallNow}
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto border-2 border-[#F4EFE6] bg-transparent text-[#F4EFE6] hover:bg-[#F4EFE6] hover:text-[#1C1F22] font-extrabold text-sm uppercase tracking-wider px-4 sm:px-8 py-4 sm:py-6 rounded-[2px] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 min-h-[52px] whitespace-normal sm:whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                Ligar agora
              </Button>
            </div>

            {/* Micro faixas de prova concreta */}
            <div 
              className="mt-12 pt-8 border-t border-border/40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-gray-400 animate-fade-up opacity-0"
              style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
            >
              <div>
                <span className="text-[#F2B705] font-bold block mb-1">✓ LONA COM SUA MARCA</span>
                Design integrado e comunicação de alta definição.
              </div>
              <div>
                <span className="text-[#F2B705] font-bold block mb-1">✓ ORÇAMENTO RÁPIDO</span>
                Visita técnica sem compromisso e orçamento ágil.
              </div>
              <div>
                <span className="text-[#F2B705] font-bold block mb-1">✓ GARANTIA POR ESCRITO</span>
                Proteção contratual e durabilidade estendida.
              </div>
              <div>
                <span className="text-[#F2B705] font-bold block mb-1">✓ INSTALAÇÃO FLEXÍVEL</span>
                Fora do horário comercial ou de acordo com sua necessidade.
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Image Bleeding with Parallax */}
        <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-full overflow-hidden">
          <img 
            src={heroImage} 
            alt="Toldo Comercial instalado pela Toldos Comerciais Curitiba" 
            className="absolute inset-0 w-full h-full object-cover lg:h-full transition-transform duration-[4s]"
            style={isDesktop ? { transform: `translateY(${scrollY * 0.15}px) scale(1.05)`, transition: "transform 0.1s ease-out" } : {}}
            loading="eager"
            referrerPolicy="no-referrer"
          />
          {/* Edge shadow overlay for smooth transition */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1F22] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#1C1F22] lg:to-transparent w-full h-full pointer-events-none"></div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
