import React from "react";
import { ArrowUpRight } from "lucide-react";
import { openWhatsapp } from "@/utils/whatsapp";
import { RestauranteScene } from "./segment-illustrations/RestauranteScene";
import { VarejoScene } from "./segment-illustrations/VarejoScene";
import { ServicosScene } from "./segment-illustrations/ServicosScene";
import { SaudeScene } from "./segment-illustrations/SaudeScene";
import { LogisticaScene } from "./segment-illustrations/LogisticaScene";
import { InfraestruturaScene } from "./segment-illustrations/InfraestruturaScene";

interface SegmentItem {
  title: string;
  tag: string;
  description: string;
  illustration: React.ComponentType;
}

export const Segments = () => {
  const segments: SegmentItem[] = [
    {
      title: "Restaurantes, Cafés e Bares",
      tag: "01 — ALIMENTAÇÃO",
      description: "Toldos retráteis e fechamentos em PVC cristal para expansão de mesas na calçada e conforto dos clientes.",
      illustration: RestauranteScene
    },
    {
      title: "Lojas, Boutiques e Comércios",
      tag: "02 — VAREJO",
      description: "Toldos fixos, capotas e lonas sob medida com impressão digital de logotipo para destacar sua vitrine.",
      illustration: VarejoScene
    },
    {
      title: "Postos de Combustível",
      tag: "03 — SERVIÇOS",
      description: "Coberturas robustas em policarbonato e estruturas metálicas para ilhas de serviço e conveniência.",
      illustration: ServicosScene
    },
    {
      title: "Clínicas, Consultórios e Farmácias",
      tag: "04 — SAÚDE",
      description: "Coberturas de acesso e toldos de fachada elegantes para recepção e acessibilidade de pacientes.",
      illustration: SaudeScene
    },
    {
      title: "Galpões e Centros de Distribuição",
      tag: "05 — LOGÍSTICA",
      description: "Coberturas de grandes vãos para docas de carga e descarga com telhas sanduíche e estruturas pesadas.",
      illustration: LogisticaScene
    },
    {
      title: "Estacionamentos e Condomínios",
      tag: "06 — INFRAESTRUTURA",
      description: "Sistemas modulares de sombreamento e coberturas metálicas para frotas e garagens corporativas.",
      illustration: InfraestruturaScene
    }
  ];

  const handleWhatsApp = (segment: string) => {
    openWhatsapp(`Olá, gostaria de solicitar uma visita técnica e orçamento de toldo comercial para: ${segment}!`);
  };

  return (
    <section className="py-20 bg-[#F4EFE6] text-[#1C1F22] border-b border-border reveal-on-scroll">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6">
        
        {/* Header */}
        <div className="mb-16">
          <span className="text-[#C8361D] font-sans font-bold text-xs tracking-[0.2em] uppercase block mb-3">
            SEGMENTOS ATENDIDOS
          </span>
          <h2 
            className="font-sans font-extrabold uppercase leading-tight tracking-tight mb-4"
            style={{ 
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(1.75rem, 7vw, 3rem)"
            }}
          >
            Estruturas sob Medida para Cada Setor
          </h2>
          <p className="text-base text-gray-700 max-w-3xl leading-relaxed">
            Entendemos as exigências de visibilidade e legislação de cada tipo de comércio. Criamos projetos que valorizam sua marca e atraem clientes.
          </p>
        </div>

        {/* Plates Grid (Estilo placa de comércio / letreiro) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#1C1F22] p-6 hover:translate-y-[-4px] transition-transform duration-200 flex flex-col justify-between relative group cursor-pointer reveal-on-scroll"
              onClick={() => handleWhatsApp(segment.title)}
            >
              {/* Detalhe de Listras de Toldo em miniatura no canto superior da placa */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C8361D] via-[#F4EFE6] to-[#C8361D]" />

              <div className="pt-3">
                {/* Meta Tag unboxed */}
                <div className="text-[10px] font-extrabold tracking-widest text-[#C8361D] mb-3">
                  {segment.tag}
                </div>
                
                {/* Title */}
                <h3 
                  className="text-xl font-extrabold uppercase text-[#1C1F22] tracking-wide mb-3 flex items-center justify-between"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {segment.title}
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#C8361D] transition-colors" />
                </h3>
                
                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  {segment.description}
                </p>
              </div>

              {/* Animated SVG Illustration Container */}
              <div className="aspect-video w-full rounded-[2px] border border-[#1C1F22]/20 flex items-center justify-center relative overflow-hidden bg-[#1C1F22]">
                <segment.illustration />
              </div>
              
              {/* Hover effect bottom stripe */}
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#C8361D] uppercase tracking-wider">
                <span>Orçamento Rápido</span>
                <span className="text-[#1C1F22] group-hover:underline">Solicitar ➔</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Segments;
