import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import YouTubeVideo from "@/components/YouTubeVideo";
import { MessageCircle, Phone, Search, ChevronDown, ChevronUp } from "lucide-react";
import { openWhatsapp } from "@/utils/whatsapp";

const BLOCOS = [
  { id: "tipos", label: "Tipos de Toldos" },
  { id: "precos", label: "Preços e Orçamento" },
  { id: "instalacao", label: "Instalação & Horários" },
  { id: "manutencao", label: "Manutenção & Lonas" },
  { id: "regioes", label: "Regiões Atendidas" },
];

interface FaqItem {
  q: string;
  a: string;
  bloco: string;
}

const FAQ_DATA: FaqItem[] = [
  // BLOCO 1: TIPOS
  { bloco: "tipos", q: "Qual a diferença entre toldo retrátil e fixo para comércios?", a: "O toldo retrátil articulado permite estender ou recolher o toldo conforme as condições climáticas, ideal para áreas de mesas de restaurantes e calçadas. O toldo fixo de fachada é instalado permanentemente, proporcionando proteção contínua de vitrines e entradas." },
  { bloco: "tipos", q: "O que é toldo em lona acrílica premium?", a: "A lona acrílica é um tecido de fibra acrílica pigmentada em massa, oferecendo altíssima resistência a desbotamento por sol e barreira térmica eficiente, ideal para restaurantes elegantes e boutiques de alto padrão." },
  { bloco: "tipos", q: "O que é toldo capota comercial?", a: "O toldo capota é um modelo clássico semicircular, muito comum em fachadas de farmácias e confeitarias. Pode ser fixo ou retrátil manual por cordas, garantindo visual marcante de placa de rua." },
  { bloco: "tipos", q: "Qual a diferença entre policarbonato alveolar e compacto?", a: "O compacto é totalmente sólido e transparente como o vidro, ideal para entradas nobres e áreas comuns de condomínios. O alveolar possui cavidades internas de ar, sendo mais leve e econômico, indicado para garagens comerciais e coberturas de galpões." },
  
  // BLOCO 2: PRECOS
  { bloco: "precos", q: "Quanto custa um toldo comercial por metro quadrado?", a: "Nossos toldos fixos comerciais em lona vinílica partem de R$ 220/m². Toldos retráteis manuais a partir de R$ 250/m² e coberturas em policarbonato a partir de R$ 240/m². O preço final varia de acordo com as dimensões, material e fixação necessária." },
  { bloco: "precos", q: "A visita técnica e as medidas são gratuitas?", a: "Sim, 100% gratuitas em toda Curitiba e região metropolitana. Nossos técnicos vão até o seu comércio de segunda a sábado para planejar as dimensões e estrutura exata." },
  { bloco: "precos", q: "Quais as formas de pagamento disponíveis para PJ?", a: "Oferecemos faturamento em boleto bancário para empresas, parcelamento facilitado em até 12x no cartão de crédito corporativo, e desconto de 10% para pagamentos à vista via PIX." },
  { bloco: "precos", q: "A lona personalizada com logotipo já está incluída no preço?", a: "Sim, para projetos de fachada comercial sob medida, a impressão digital de alta definição ou o recorte digital em alta aderência da logomarca da sua marca é incluída na cotação conforme solicitado." },

  // BLOCO 3: INSTALACAO
  { bloco: "instalacao", q: "Vocês instalam fora do horário comercial?", a: "Sim! Entendemos que comércios e restaurantes não podem paralisar o atendimento. Agendamos equipes de montagem para o período noturno, início da manhã ou finais de semana, sem custos adicionais." },
  { bloco: "instalacao", q: "Quanto tempo demora o processo de instalação?", a: "Toldos de fachada convencionais levam de 5 a 10 dias úteis para fabricação completa, e coberturas de policarbonato de 10 a 15 dias úteis. A montagem em si no local geralmente é concluída em apenas um dia." },
  { bloco: "instalacao", q: "Os toldos comerciais requerem alvará da prefeitura?", a: "Toldos fixos que avançam sobre calçadas públicas podem requerer autorização de fachada em algumas regiões de Curitiba. Nós orientamos nossos clientes corporativos sobre a melhor altura de instalação." },

  // BLOCO 4: MANUTENCAO
  { bloco: "manutencao", q: "Vocês realizam a troca de lona de toldos antigos?", a: "Sim! Se a sua estrutura metálica antiga de ferro ou alumínio está em boas condições, nós trocamos apenas a lona desbotada ou rasgada por uma novíssima com as cores e logo atualizados da sua empresa, gerando economia expressiva." },
  { bloco: "manutencao", q: "Como devo limpar a lona do toldo comercial?", a: "Recomenda-se lavar a lona a cada 3 meses apenas com água fria sob pressão, detergente neutro e escova de cerdas macias. Nunca utilize cloro ou produtos abrasivos, pois removem a camada protetora contra UV." },
  { bloco: "manutencao", q: "Qual a durabilidade de uma cobertura comercial?", a: "Estruturas metálicas de aço galvanizado ou alumínio duram mais de 20 anos. Nossas lonas vinílicas Sansuy duram de 5 a 8 anos e as lonas acrílicas importadas duram de 8 a 12 anos sob sol e chuva constantes." },

  // BLOCO 5: REGIOES
  { bloco: "regioes", q: "Quais cidades da região metropolitana de Curitiba vocês atendem?", a: "Atendemos Colombo, Pinhais, São José dos Pinhais, Araucária, Fazenda Rio Grande, Campo Largo, Almirante Tamandaré e todos os demais municípios da RMC com visita técnica e orçamentos inteiramente gratuitos." },
  { bloco: "regioes", q: "Atendem todos os bairros de Curitiba?", a: "Sim! Atendemos todos os bairros de Curitiba — do Centro e Batel ao Água Verde, Portão, Cajuru, Boqueirão, CIC, Rebouças e demais localidades com o mesmo prazo e preço padrão." }
];

const FaqPage = () => {
  const [activeBloco, setActiveBloco] = useState<string>("todos");
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    let items = FAQ_DATA;
    if (activeBloco !== "todos") {
      items = items.filter(f => f.bloco === activeBloco);
    }
    if (search.trim()) {
      const s = search.toLowerCase();
      items = items.filter(f => f.q.toLowerCase().includes(s) || f.a.toLowerCase().includes(s));
    }
    return items;
  }, [activeBloco, search]);

  const handleWhatsApp = () => {
    openWhatsapp("Olá! Tenho uma dúvida sobre toldos comerciais. Podem me ajudar?");
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Perguntas Frequentes sobre Toldos Comerciais em Curitiba</title>
        <meta name="description" content="Dúvidas frequentes sobre toldos comerciais, coberturas de policarbonato, lona com logotipo, prazos, formas de pagamento PJ e preços a partir de R$ 220/m² em Curitiba." />
        <meta name="keywords" content="toldos comerciais curitiba, toldo para loja curitiba, toldo para restaurante curitiba, conserto de toldos curitiba, coberturas curitiba" />
        <link rel="canonical" href="https://toldoscomerciaiscuritiba.com.br/faq" />
        <meta property="og:title" content="Dúvidas Frequentes | Toldos Comerciais Curitiba" />
        <meta property="og:description" content="Tudo sobre toldos comerciais, coberturas, lona com logotipo e troca de lona para empresas. Orçamento grátis!" />
        <meta property="og:url" content="https://toldoscomerciaiscuritiba.com.br/faq" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-[#F4EFE6] text-[#1C1F22]">
        <Header />
        <FloatingButtons />

        {/* Hero */}
        <section className="py-20 bg-[#1C1F22] text-[#F4EFE6] border-b border-border">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <span className="inline-block bg-[#F2B705] text-[#1C1F22] font-sans font-extrabold text-[10px] md:text-xs tracking-[0.2em] uppercase px-3 py-1.5 mb-6 rounded-[2px]">
              CENTRAL DE AJUDA
            </span>
            <h1 
              className="text-4xl md:text-6xl font-extrabold uppercase leading-tight tracking-tight mb-4 text-[#F4EFE6]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Dúvidas Técnicas & Preços de Toldos
            </h1>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Consulte nossa central de respostas para esclarecer dúvidas frequentes sobre projetos comerciais de lona com marca, policarbonato, instalação flexível e prazos de atendimento.
            </p>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="py-12 bg-white border-b border-border">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              
              {/* Search input */}
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Pesquisar dúvida..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-border rounded-[2px] text-sm text-[#1C1F22] focus:ring-1 focus:ring-[#C8361D] focus:border-[#C8361D] outline-none"
                />
              </div>

              {/* Segmented Filter Buttons */}
              <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-end">
                <button
                  onClick={() => setActiveBloco("todos")}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-[2px] transition-colors cursor-pointer ${
                    activeBloco === "todos" 
                      ? "bg-[#C8361D] text-white" 
                      : "bg-gray-100 text-[#1C1F22] hover:bg-gray-200"
                  }`}
                >
                  Todos
                </button>
                {BLOCOS.map(b => (
                  <button
                    key={b.id}
                    onClick={() => setActiveBloco(b.id)}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-[2px] transition-colors cursor-pointer ${
                      activeBloco === b.id 
                        ? "bg-[#C8361D] text-white" 
                        : "bg-gray-100 text-[#1C1F22] hover:bg-gray-200"
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Accordion List */}
        <section className="py-16">
          <div className="max-w-[800px] mx-auto px-6">
            {filtered.length === 0 ? (
              <div className="text-center py-12 text-gray-500 text-sm">
                Nenhuma pergunta encontrada com o termo "{search}".
              </div>
            ) : (
              <div className="space-y-4">
                {filtered.map((item, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div 
                      key={idx} 
                      className="bg-white border border-border rounded-[2px] overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left font-bold text-sm uppercase tracking-wide text-[#1C1F22] hover:text-[#C8361D] transition-colors"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        <span>{item.q}</span>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-[#C8361D]" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                      </button>
                      
                      {isOpen && (
                        <div className="px-5 pb-5 pt-0 text-xs text-gray-600 leading-relaxed border-t border-gray-50 animate-fade-in">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <YouTubeVideo 
          title="Toldos Comerciais Curitiba — Central de Visita Técnica"
          subtitle="Entenda como organizamos as visitas no local de forma gratuita para planejar as coberturas sem impacto no seu faturamento"
        />

        {/* CTA Section */}
        <section className="py-20 bg-[#1C1F22] text-[#F4EFE6] border-t border-border">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 
              className="text-3xl md:text-5xl font-extrabold uppercase leading-tight tracking-tight mb-4 text-[#F4EFE6]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Sua Dúvida Não Está Listada?
            </h2>
            <p className="text-sm text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
              Fale direto com a nossa gerência técnica e comercial de fabricação. Agendamento rápido de orçamentos e visitas por telefone ou WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleWhatsApp}
                className="bg-[#C8361D] hover:bg-[#C8361D]/90 text-white font-extrabold text-xs uppercase tracking-widest py-5 px-8 rounded-[2px] transition-all cursor-pointer"
              >
                Falar com Engenheiro no WhatsApp
              </button>
              <a 
                href="tel:+554135646943"
                className="border border-gray-600 hover:border-white text-[#F4EFE6] hover:bg-[#F4EFE6] hover:text-[#1C1F22] font-extrabold text-xs uppercase tracking-widest py-5 px-8 rounded-[2px] transition-all"
              >
                Ligar: (41) 3564-6943
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FaqPage;
