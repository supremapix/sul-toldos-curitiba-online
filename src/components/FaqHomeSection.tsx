import { MessageCircle, HelpCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { openWhatsapp } from "@/utils/whatsapp";

const PREVIEW_FAQS = [
  { q: "Quanto custa um toldo comercial em Curitiba?", a: "O preço varia conforme o tipo, tamanho e material. Oferecemos visita técnica e orçamento 100% gratuitos com preços a partir de R$ 220/m²." },
  { q: "O orçamento e a visita técnica são gratuitos?", a: "Sim! Nossa equipe vai até a sua empresa em Curitiba e região para tirar as medidas e planejar a instalação sem nenhum custo." },
  { q: "Qual o melhor toldo para restaurantes e bares?", a: "Os toldos retráteis articulados e fechamentos verticais em lona transparente são ideais para expandir o espaço útil do salão." },
  { q: "Vocês realizam a instalação fora do horário comercial?", a: "Sim! Programamos a montagem da estrutura para horários alternativos para evitar interrupções no funcionamento da sua empresa." },
  { q: "A lona acompanha a logomarca impressa?", a: "Sim. Realizamos a comunicação visual completa com impressão digital UV de altíssima definição da sua marca diretamente sobre a lona." },
  { q: "Fazem a manutenção ou troca de lona em estruturas antigas?", a: "Sim, realizamos reformas completas, lubrificação de engrenagens, pintura de ferragens e troca de lona desgastada." },
];

const FaqHomeSection = () => {
  const handleWhatsApp = () => {
    openWhatsapp("Olá! Tenho uma dúvida sobre toldos comerciais.");
  };

  return (
    <section id="faq-home" className="py-20 bg-[#1C1F22] text-[#F4EFE6] border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#F2B705] text-[#1C1F22] font-sans font-extrabold text-[10px] md:text-xs tracking-[0.2em] uppercase px-3 py-1.5 mb-6 rounded-[2px]">
            04 — PERGUNTAS FREQUENTES
          </span>
          <h2 
            className="text-3xl md:text-5xl font-extrabold uppercase leading-tight tracking-tight mb-4 text-[#F4EFE6]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Dúvidas sobre Toldos Comerciais
          </h2>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Reunimos as principais dúvidas de comerciantes, gerentes e gestores sobre preços, materiais, durabilidade e processo de instalação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {PREVIEW_FAQS.map((faq, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-[2px] p-6 hover:border-[#C8361D] transition-colors">
              <h3 
                className="text-base font-bold text-[#F4EFE6] uppercase tracking-wide mb-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {faq.q}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 border border-gray-500 hover:border-[#F4EFE6] text-[#F4EFE6] hover:bg-[#F4EFE6] hover:text-[#1C1F22] px-8 py-4 rounded-[2px] text-xs font-bold uppercase tracking-wider transition-all"
          >
            Ver Todas as Dúvidas
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 bg-[#C8361D] hover:bg-[#C8361D]/90 text-white px-8 py-4 rounded-[2px] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            Tirar Dúvida no WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqHomeSection;
