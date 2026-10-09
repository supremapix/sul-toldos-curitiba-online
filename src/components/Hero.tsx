import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-awning.jpg";
import { openWhatsapp } from "@/utils/whatsapp";
import { Phone } from "lucide-react";

const Hero = () => {
  const handleWhatsApp = () => {
    openWhatsapp("Olá, gostaria de solicitar um orçamento de toldo comercial para minha empresa!");
  };

  const handleCallNow = () => {
    window.open("tel:4135646943");
  };

  return (
    <section id="home" className="relative bg-[#1C1F22] text-[#F4EFE6] overflow-hidden border-b border-border">
      <div className="max-w-[1440px] mx-auto min-h-[80vh] lg:min-h-[85vh] grid lg:grid-cols-12 items-stretch">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-7 flex flex-col justify-center px-6 py-16 md:px-12 lg:py-24 z-10 bg-[#1C1F22]">
          <div className="max-w-xl">
            {/* Tag/Label Placa de Rua */}
            <span className="inline-block bg-[#F2B705] text-[#1C1F22] font-sans font-extrabold text-[10px] md:text-xs tracking-[0.2em] uppercase px-3 py-1.5 mb-6 rounded-[2px]">
              01 — FACHADAS COMERCIAIS
            </span>
            
            <h1 
              className="font-sans font-black uppercase text-4xl md:text-6xl text-[#F4EFE6] leading-[1.05] tracking-tight mb-6"
              style={{
                fontFamily: "'Barlow Condensed', 'Archivo Narrow', sans-serif",
                textRendering: "optimizeLegibility"
              }}
            >
              Toldos comerciais que fazem sua <span className="text-[#C8361D]">fachada vender mais</span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed font-sans">
              Projeto sob medida, lona de alta resistência com a marca do cliente impressa, instalação rápida sem precisar fechar sua loja e atendimento em toda Curitiba e região metropolitana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleWhatsApp}
                size="lg"
                className="bg-[#C8361D] hover:bg-[#C8361D]/90 text-white font-extrabold text-sm uppercase tracking-wider px-8 py-6 rounded-[2px] shadow-sm transition-all duration-200 cursor-pointer"
              >
                Pedir orçamento para minha empresa
              </Button>
              
              <Button 
                onClick={handleCallNow}
                variant="ghost"
                size="lg"
                className="border-2 border-[#F4EFE6] bg-transparent text-[#F4EFE6] hover:bg-[#F4EFE6] hover:text-[#1C1F22] font-extrabold text-sm uppercase tracking-wider px-8 py-6 rounded-[2px] transition-all duration-200 cursor-pointer flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Ligar agora
              </Button>
            </div>

            {/* Micro faixas de prova concreta */}
            <div className="mt-12 pt-8 border-t border-border/40 grid grid-cols-2 gap-4 text-xs text-gray-400">
              <div>
                <span className="text-[#F2B705] font-bold block mb-1">✓ LONA COM SUA MARCA</span>
                Design integrado e comunicação visual de alta definição.
              </div>
              <div>
                <span className="text-[#F2B705] font-bold block mb-1">✓ ORÇAMENTO RÁPIDO</span>
                Visita técnica sem compromisso em horário comercial ou fora dele.
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Image Bleeding */}
        <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-full overflow-hidden">
          <img 
            src={heroImage} 
            alt="Toldo Comercial instalado pela Toldos Comerciais Curitiba" 
            className="absolute inset-0 w-full h-full object-cover lg:h-full transition-transform duration-[4s] hover:scale-105"
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