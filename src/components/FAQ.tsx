import { useState, useEffect, useRef } from "react";
import { X, MessageCircle, Phone } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  { question: "Quanto custa um toldo por metro quadrado em Curitiba?", answer: "O preço do toldo por metro quadrado em Curitiba varia conforme o tipo e material. Toldos em lona custam a partir de R$ 220/m², policarbonato a partir de R$ 240/m², e toldos retráteis a partir de R$ 250/m². Fazemos orçamento gratuito com visita técnica para o melhor custo-benefício." },
  { question: "Qual o preço do toldo fixo em lona por m²?", answer: "O toldo fixo em lona parte de R$ 220 a R$ 200 por metro quadrado, dependendo do tipo de lona (acrílica, vinílica ou blackout), da estrutura (alumínio ou metalon) e das dimensões. Projetos maiores podem ter preço unitário menor." },
  { question: "Quanto custa toldo retrátil por metro quadrado?", answer: "O toldo retrátil manual custa a partir de R$ 250/m² e o motorizado a partir de R$ 350/m². Inclui estrutura em alumínio, lona acrílica com proteção UV, e braços articulados." },
  { question: "Qual o preço da cobertura em policarbonato por m²?", answer: "A cobertura em policarbonato alveolar custa de R$ 240 a R$ 300/m² e o compacto de R$ 280 a R$ 450/m². O preço inclui estrutura metálica, chapas de policarbonato e instalação." },
  { question: "Qual o valor de um toldo para garagem residencial?", answer: "Um toldo para garagem de 1 carro (aprox. 15m²) custa de R$ 1.800 a R$ 4.500, e para 2 carros (aprox. 30m²) de R$ 3.500 a R$ 9.000. O preço depende do material (lona ou policarbonato) e tipo de estrutura." },
  { question: "Quanto custa toldo para varanda de apartamento?", answer: "O toldo para varanda de apartamento parte de R$ 1.200 para varandas pequenas (até 4m²) e pode chegar a R$ 5.000 para varandas gourmet maiores. Toldo cortina vertical com guias laterais custa a partir de R$ 220/m²." },
  { question: "Qual o preço do toldo para restaurante ou bar?", answer: "Toldos comerciais para restaurantes custam de R$ 220 a R$ 400/m² conforme o tipo. Toldo retrátil de braço articulado para mesas externas parte de R$ 3.500. Coberturas fixas em policarbonato para áreas maiores partem de R$ 200/m²." },
  { question: "Quanto custa toldo para padaria ou lanchonete?", answer: "Toldo de fachada para padaria ou lanchonete custa de R$ 1.200 a R$ 4.000, dependendo do tamanho da fachada. Inclui estrutura, lona personalizada com cores da marca, e instalação." },
  { question: "Qual o valor de toldo para farmácia ou clínica?", answer: "Toldo para fachada de farmácia ou clínica custa de R$ 1.500 a R$ 5.000. Modelos de toldo fixo com estrutura em metalon e lona acrílica são os mais indicados." },
  { question: "Quanto custa toldo para oficina mecânica?", answer: "Coberturas para oficinas custam de R$ 220 a R$ 250/m² em lona ou policarbonato. Uma cobertura de 50m² para estacionamento de oficina parte de R$ 7.000." },
  { question: "Qual o preço de toldo para escola ou creche?", answer: "Coberturas para pátios escolares custam de R$ 220 a R$ 300/m². Um projeto de 100m² para playground coberto parte de R$ 16.000. Utilizamos materiais atóxicos e com proteção UV." },
  { question: "Quanto custa cortina rolo transparente por m²?", answer: "A cortina rolo em PVC cristal transparente custa de R$ 220 a R$ 380/m². Com blackout integrado, de R$ 280 a R$ 450/m². Inclui trilhos laterais em alumínio e sistema de enrolamento." },
  { question: "Qual o preço do pergolado com cobertura?", answer: "Pergolado em madeira com cobertura em policarbonato custa de R$ 350 a R$ 600/m². Em alumínio com toldo retrátil, de R$ 500 a R$ 900/m². Um pergolado de 20m² completo parte de R$ 7.000." },
  { question: "Quanto custa toldo para food truck?", answer: "Toldo para food truck custa de R$ 1.200 a R$ 3.500, dependendo do tamanho e modelo. Material resistente ao uso intenso com tratamento impermeabilizante." },
  { question: "Qual o valor de cobertura para churrasqueira?", answer: "Cobertura para área de churrasqueira custa de R$ 240 a R$ 350/m². Em policarbonato fumê (15m²), a partir de R$ 2.700. Em estrutura metálica com telha, a partir de R$ 2.400." },
  { question: "Quanto custa toldo para posto de gasolina?", answer: "Coberturas para postos de gasolina são projetos de grande porte, partindo de R$ 50.000. Estruturas metálicas com telhas termoacústicas e cálculo estrutural." },
  { question: "Qual o preço de toldo para concessionária?", answer: "Coberturas para concessionárias partem de R$ 240/m² para estacionamento e exposição. Projetos de 200m² ou mais custam de R$ 36.000 a R$ 220.000." },
  { question: "Quanto custa toldo para mercado?", answer: "Toldo para fachada de mercado parte de R$ 1.500 para fachadas pequenas até R$ 8.000 para fachadas de 15 metros. Toldos com logomarca impressa inclusos." },
  { question: "Qual o valor de toldo para salão de beleza?", answer: "Toldo de fachada para salão de beleza custa de R$ 1.000 a R$ 3.000. Modelos capota ondulada são os mais populares, partindo de R$ 1.200/metro linear." },
  { question: "Quanto custa toldo para pet shop?", answer: "Toldos para pet shop custam de R$ 1.200 a R$ 3.500 para fachada. Coberturas para área de banho e tosa ao ar livre partem de R$ 220/m²." },
  { question: "Qual a garantia dos toldos da Sul Toldos?", answer: "Oferecemos até 5 anos de garantia para estruturas metálicas, 2 anos para toldos retráteis, 10 anos para policarbonato contra amarelamento, e 1 ano para lonas e tecidos." },
  { question: "Vocês atendem toda Curitiba e região?", answer: "Sim! Atendemos Curitiba (todos os 75 bairros) e as 29 cidades da região metropolitana. Orçamento e visita técnica gratuitos em toda a região." },
  { question: "Qual o prazo de instalação?", answer: "Toldos fixos simples: 5-7 dias úteis. Toldos retráteis: 7-12 dias úteis. Coberturas em policarbonato: 10-15 dias úteis. Projetos grandes: 15-30 dias úteis." },
  { question: "É possível parcelar a compra?", answer: "Sim! Parcelamos em até 12x no cartão de crédito. Desconto de 10% para pagamento à vista (PIX). Para projetos acima de R$ 5.000, condições especiais." },
  { question: "Vocês fazem manutenção em toldos de outras empresas?", answer: "Sim, realizamos manutenção em toldos de qualquer fabricante. Serviços incluem: troca de lona (R$ 100-180/m²), reparo estrutural e limpeza profissional (R$ 15-25/m²)." },
  { question: "Toldos suportam ventos fortes?", answer: "Nossos toldos fixos suportam ventos de até 80km/h e chuva intensa. Retráteis devem ser recolhidos acima de 50km/h. Policarbonato resiste a granizo moderado." },
  { question: "Toldo retrátil manual ou motorizado?", answer: "O toldo retrátil manual custa 30-40% menos. Manual: R$ 250-320/m². Motorizado: R$ 350-500/m². Sensores de vento (+R$ 300-500) e chuva (+R$ 200-400) são opcionais." },
  { question: "Policarbonato alveolar ou compacto?", answer: "Alveolar é mais leve e econômico (R$ 240-300/m²), ideal para garagens. Compacto é mais resistente (R$ 280-450/m²), indicado para locais com risco de granizo." },
  { question: "Lona acrílica ou vinílica?", answer: "Acrílica é respirável e dura 8-12 anos (R$ 40-80/m² só tecido). Vinílica é impermeável e dura 5-8 anos (R$ 25-50/m² só tecido). Acrílica é premium." },
  { question: "Preciso de autorização da prefeitura?", answer: "Toldos residenciais geralmente não precisam. Toldos comerciais sobre calçada podem precisar de alvará. Em condomínios, é necessária aprovação do síndico." },
  { question: "Vocês instalam em prédios e condomínios?", answer: "Sim! Instalamos em apartamentos e áreas comuns. Trabalhamos em alturas com equipe certificada em NR35. Respeitamos regulamentos internos." },
  { question: "Qual o melhor toldo para proteção solar?", answer: "Recomendamos: lona acrílica com FPU 50+ para toldos fixos, policarbonato opalino para coberturas com luz difusa, cortinas rolo com blackout para controle total." },
  { question: "É possível fazer toldo em formato especial?", answer: "Sim! Fabricamos em qualquer formato: curvo, semicircular, triangular, em L. Formatos curvos têm acréscimo de 15-25% sobre o preço padrão." },
  { question: "Qual a vida útil de um toldo?", answer: "Lona acrílica: 8-12 anos. Vinílica: 5-8 anos. Alumínio: 20+ anos. Metalon: 12-15 anos. Policarbonato: 15-20 anos. Motor: 10-15 anos." },
  { question: "Toldos automáticos consomem muita energia?", answer: "Não! Motores consomem apenas 150-300W durante 1-2 minutos por operação. Uso diário representa menos de R$ 0,50/mês na conta de luz." },
  { question: "Qual o preço para trocar lona?", answer: "A troca de lona custa de R$ 100 a R$ 180/m². Lona acrílica importada: R$ 100-180/m². Lona nacional: R$ 100-130/m². Prazo de 3-5 dias úteis." },
  { question: "Vocês fazem cobertura para piscina?", answer: "Sim! Coberturas para piscina em policarbonato partem de R$ 250/m². Sistemas retráteis para piscinas partem de R$ 15.000 conforme tamanho." },
  { question: "Como funciona a visita técnica gratuita?", answer: "Agendamos por WhatsApp conforme sua disponibilidade (incluindo sábados). Nosso técnico avalia o local, tira medidas e apresenta o orçamento na hora." },
  { question: "Diferença de preço entre alumínio e metalon?", answer: "Alumínio custa 30-50% mais, porém não enferruja. Metalon é mais econômico mas requer pintura anticorrosiva. Para áreas úmidas, alumínio é recomendado." },
  { question: "O que é toldo tipo capota?", answer: "Toldo capota é o modelo ondulado/semicircular comum em fachadas. Custa de R$ 1.200 a R$ 1.500 por metro linear em lona acrílica ou vinílica." },
  { question: "Vocês emitem nota fiscal e contrato?", answer: "Sim! Todos os serviços incluem nota fiscal, contrato detalhado com especificações técnicas, prazo e garantia. Somos empresa registrada." },
  { question: "Vocês atendem emergências?", answer: "Sim! Atendimento de emergência 24h pelo WhatsApp (41) 99812-1324. Remoção emergencial: R$ 200-500. Atendimento em até 4 horas em dias úteis." },
  { question: "Toldo cortina vertical: preço e indicações?", answer: "Toldo cortina vertical custa de R$ 220 a R$ 400/m². Indicado para varandas e fechamento lateral. Com visor transparente em PVC: R$ 280-380/m²." },
  { question: "Vocês fazem projeto 3D?", answer: "Sim, para projetos acima de R$ 3.000 oferecemos renderização 3D gratuita. Para projetos menores, fornecemos desenho técnico com dimensões." },
  { question: "Qual a melhor época para instalar?", answer: "Outono e inverno (abril-agosto) são ideais: menor chuva e preços mais competitivos. No verão, a demanda é maior e prazos mais longos." },
  { question: "Quanto custa sensor de vento no toldo retrátil?", answer: "Sensor de vento custa de R$ 300 a R$ 500 instalado. Sensor de chuva: R$ 200-400. Kit completo (vento + sol + chuva): R$ 600-1.000." },
  { question: "Coberturas para estacionamento de empresa?", answer: "Coberturas empresariais com estrutura metálica e lona tensionada partem de R$ 220/m². Projetos de 200-500m² são comuns. Parcelamento em até 12x." },
  { question: "Toldo para igrejas e templos?", answer: "Atendemos com coberturas para estacionamento (R$ 220-250/m²) e fachadas (R$ 220-300/m²). Projetos grandes com cálculo de engenharia." },
  { question: "Toldo residencial é mais barato que comercial?", answer: "Sim, geralmente 20-30% menos por m². Residencial: R$ 220-250/m². Comercial: R$ 220-400/m². A diferença se deve à robustez necessária." },
  { question: "Como é a limpeza dos toldos?", answer: "Recomendamos limpeza semestral com água e sabão neutro. Serviço profissional: R$ 15-25/m² para lonas e R$ 10-15/m² para policarbonato." },
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
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes sobre <span className="text-primary">Toldos e Preços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Mais de 50 perguntas com preços por m². Clique em qualquer card para ver a resposta completa.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
          {visibleItems.map((faq, index) => (
            <button
              key={index}
              onClick={() => setSelectedFAQ(faq)}
              className="bg-background border border-border rounded-xl p-4 text-left hover:border-primary/50 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${(index % batchSize) * 50}ms` }}
            >
              <span className="text-primary font-bold text-2xl block mb-2">?</span>
              <span className="text-sm md:text-base font-semibold text-foreground leading-snug line-clamp-3 group-hover:text-primary transition-colors">
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
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105"
            >
              ▼ CARREGAR MAIS ({faqData.length - visibleItems.length} restantes)
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-lg text-muted-foreground mb-6">Não encontrou sua dúvida?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5541998121324?text=Olá, tenho dúvidas sobre toldos!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors font-bold text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp: (41) 99812-1324
            </a>
            <a
              href="tel:+554135646943"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-border text-foreground rounded-xl hover:bg-secondary transition-colors font-bold text-lg"
            >
              <Phone className="w-5 h-5" />
              (41) 3564-6943
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
            className="bg-card rounded-2xl max-w-lg w-full shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-foreground pr-4">
                  {selectedFAQ.question}
                </h3>
                <button
                  onClick={() => setSelectedFAQ(null)}
                  className="flex-shrink-0 bg-muted hover:bg-muted/80 rounded-full p-2 transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>

              <div className="text-muted-foreground leading-relaxed text-base mb-6 border-t border-border pt-4">
                {selectedFAQ.answer}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/5541998121324?text=${encodeURIComponent(`Olá, tenho dúvida sobre: ${selectedFAQ.question}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-5 rounded-lg text-center transition-colors"
                >
                  💬 TIRAR DÚVIDA
                </a>
                <a
                  href="tel:+554135646943"
                  className="flex-1 border border-border hover:bg-secondary text-foreground font-semibold py-3 px-5 rounded-lg text-center transition-colors"
                >
                  📞 LIGAR
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
