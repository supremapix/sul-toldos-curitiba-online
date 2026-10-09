import { useState, useEffect, useRef } from "react";
import { X, MessageCircle, Phone } from "lucide-react";
import { openWhatsapp } from "@/utils/whatsapp";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  { question: "Quanto custa um toldo por metro quadrado em Curitiba?", answer: "O preço do toldo por metro quadrado em Curitiba varia conforme o tipo e material. Nossos toldos em lona comercial custam a partir de R$ 220/m², policarbonato a partir de R$ 240/m², e toldos retráteis a partir de R$ 250/m². Oferecemos visita técnica e orçamento 100% gratuitos para avaliar a melhor estrutura para seu negócio." },
  { question: "Qual o preço do toldo de fachada para loja por m²?", answer: "O toldo de fachada em lona para comércio parte de R$ 220 por metro quadrado, dependendo do tipo de lona (acrílica ou vinílica), do tipo de estrutura (metalon galvanizado) e do acabamento. Projetos comerciais de grande porte contam com descontos especiais sobre o valor total." },
  { question: "Quanto custa toldo retrátil comercial por metro quadrado?", answer: "O toldo retrátil manual parte de R$ 250/m² e o motorizado de alta performance a partir de R$ 380/m². A estrutura é fabricada em alumínio com pintura epóxi e lona acrílica nacional ou importada com barreira solar anti-UV." },
  { question: "Qual o preço da cobertura em policarbonato para estacionamentos?", answer: "A cobertura em policarbonato alveolar para estacionamentos e áreas comerciais parte de R$ 240/m² e o compacto de alta resistência de R$ 280/m². Ambos incluem estruturas metálicas reforçadas sob medida." },
  { question: "Qual o valor de um toldo de lona para fachada comercial?", answer: "Um toldo fixo de fachada para uma loja padrão (aprox. 12m²) custa a partir de R$ 2.640. O preço definitivo depende das características específicas da lona, estrutura, e altura de instalação da fachada." },
  { question: "Qual o preço de fechamento vertical em lona de calçada para bares?", answer: "Os fechamentos verticais retráteis com lona transparente (PVC cristal) custam a partir de R$ 220/m². São ideais para expandir o salão de atendimento e proteger as mesas da chuva e vento." },
  { question: "Qual a garantia oferecida pela Toldos Comerciais Curitiba?", answer: "Oferecemos garantia de até 5 anos para as estruturas metálicas de aço galvanizado, 2 anos para os toldos retráteis, e 10 anos contra amarelamento e rachaduras nas coberturas de policarbonato compacto." },
  { question: "Vocês atendem toda Curitiba e região metropolitana?", answer: "Sim! Atendemos todos os bairros de Curitiba e os 29 municípios da Região Metropolitana com técnicos locais qualificados." },
  { question: "É possível estampar a logomarca da minha empresa no toldo?", answer: "Com certeza! Realizamos comunicação visual integrada de alta definição diretamente sobre a lona acrílica ou vinílica com recorte eletrônico." },
  { question: "Qual o prazo de entrega e instalação para empresas?", answer: "Nossos prazos variam de 5 a 10 dias úteis para toldos de fachada convencionais e de 10 a 15 dias úteis para grandes coberturas comerciais de policarbonato." },
  { question: "Vocês realizam a troca de lona em toldos antigos?", answer: "Sim! Fornecemos serviço especializado de troca de lona rasgada ou desbotada, conservando sua estrutura de ferro atual por um preço que parte de R$ 130/m² só da lona." },
  { question: "Quais as formas de pagamento aceitas para pessoas jurídicas?", answer: "Parcelamos no cartão de crédito em até 12x, boleto bancário faturado para empresas (sujeito a análise), e desconto especial de 10% para pagamentos via PIX à vista." }
];

const FAQ = () => {
  const [selectedFAQ, setSelectedFAQ] = useState<FAQItem | null>(null);
  const [visibleItems, setVisibleItems] = useState<FAQItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const batchSize = 12;

  useEffect(() => {
    setVisibleItems(faqData.slice(0, batchSize));
  }, []);

  const loadMore = () => {
    const currentLength = visibleItems.length;
    if (currentLength < faqData.length) {
      const nextBatch = faqData.slice(0, currentLength + batchSize);
      setVisibleItems(nextBatch);
    }
  };

  return (
    <section className="py-20 bg-[#F4EFE6] text-[#1C1F22] border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#F2B705] text-[#1C1F22] font-sans font-extrabold text-[10px] md:text-xs tracking-[0.2em] uppercase px-3 py-1.5 mb-6 rounded-[2px]">
            05 — DÚVIDAS FREQUENTES
          </span>
          <h2 
            className="font-extrabold uppercase leading-tight tracking-tight mb-4 text-[#1C1F22]"
            style={{ 
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(1.75rem, 7vw, 3rem)"
            }}
          >
            Preços e Dúvidas Técnicas
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Consulte respostas diretas sobre preços por metro quadrado, materiais recomendados, durabilidade e processo de contratação.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {visibleItems.map((faq, index) => (
            <button
              key={index}
              onClick={() => setSelectedFAQ(faq)}
              className="bg-white border border-border rounded-[2px] p-5 text-left hover:border-[#C8361D] transition-colors group animate-fade-in"
              style={{ animationDelay: `${(index % batchSize) * 50}ms` }}
            >
              <span className="text-[#C8361D] font-bold text-xl block mb-2">?</span>
              <span className="text-sm font-bold text-[#1C1F22] uppercase tracking-wide leading-tight line-clamp-3 group-hover:text-[#C8361D] transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {faq.question}
              </span>
            </button>
          ))}
        </div>

        {/* Load More */}
        {visibleItems.length < faqData.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="bg-[#C8361D] hover:bg-[#C8361D]/90 text-white font-extrabold text-xs uppercase tracking-widest py-4 px-8 rounded-[2px] transition-all cursor-pointer"
            >
              ▼ CARREGAR MAIS ({faqData.length - visibleItems.length} restantes)
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-6 font-semibold uppercase tracking-wider">Ainda tem alguma dúvida técnica sobre a lona ou a estrutura?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openWhatsapp("Olá, tenho dúvidas sobre toldos comerciais!")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C8361D] hover:bg-[#C8361D]/90 text-white rounded-[2px] font-bold text-xs uppercase tracking-widest cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp: (41) 99812-1324
            </button>
            <a
              href="tel:+554135646943"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-400 text-[#1C1F22] rounded-[2px] hover:bg-[#1C1F22] hover:text-[#F4EFE6] font-bold text-xs uppercase tracking-widest"
            >
              <Phone className="w-4 h-4" />
              Ligar: (41) 3564-6943
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Popup */}
      {selectedFAQ && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 animate-fade-in"
          onClick={() => setSelectedFAQ(null)}
        >
          <div
            className="bg-[#1C1F22] text-[#F4EFE6] border border-white/10 rounded-[2px] max-w-lg w-full shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 
                  className="text-xl md:text-2xl font-extrabold uppercase tracking-wide text-[#F4EFE6] pr-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {selectedFAQ.question}
                </h3>
                <button
                  onClick={() => setSelectedFAQ(null)}
                  className="flex-shrink-0 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors cursor-pointer"
                  aria-label="Fechar"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>

              <div className="text-gray-300 leading-relaxed text-sm mb-6 border-t border-white/10 pt-4">
                {selectedFAQ.answer}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => openWhatsapp(`Olá, tenho dúvida sobre: ${selectedFAQ.question}`)}
                  className="flex-1 bg-[#C8361D] hover:bg-[#C8361D]/90 text-white font-bold py-3.5 px-5 rounded-[2px] text-center text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  💬 TIRAR DÚVIDA
                </button>
                <a
                  href="tel:+554135646943"
                  className="flex-1 border border-white/20 hover:bg-white/5 text-[#F4EFE6] font-semibold py-3.5 px-5 rounded-[2px] text-center text-xs uppercase tracking-wider transition-colors"
                >
                  📞 LIGAR AGORA
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FAQ;
