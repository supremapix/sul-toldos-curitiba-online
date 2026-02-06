import { useState } from "react";
import { X, ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(15);

  const faqData = [
    {
      question: "Quanto custa um toldo por metro quadrado em Curitiba?",
      answer: "O preço do toldo por metro quadrado em Curitiba varia conforme o tipo e material. Toldos em lona custam a partir de R$ 120/m², policarbonato a partir de R$ 180/m², e toldos retráteis a partir de R$ 250/m². Fazemos orçamento gratuito com visita técnica para o melhor custo-benefício."
    },
    {
      question: "Qual o preço do toldo fixo em lona por m²?",
      answer: "O toldo fixo em lona parte de R$ 120 a R$ 200 por metro quadrado, dependendo do tipo de lona (acrílica, vinílica ou blackout), da estrutura (alumínio ou metalon) e das dimensões. Projetos maiores podem ter preço unitário menor. Solicite orçamento para valores exatos."
    },
    {
      question: "Quanto custa toldo retrátil por metro quadrado?",
      answer: "O toldo retrátil manual custa a partir de R$ 250/m² e o motorizado a partir de R$ 350/m². Inclui estrutura em alumínio, lona acrílica com proteção UV, e braços articulados. Modelos com sensor de vento e chuva têm acréscimo de R$ 500 a R$ 1.200 no projeto total."
    },
    {
      question: "Qual o preço da cobertura em policarbonato por m²?",
      answer: "A cobertura em policarbonato alveolar custa de R$ 180 a R$ 300/m² e o compacto de R$ 280 a R$ 450/m². O preço inclui estrutura metálica, chapas de policarbonato e instalação. Policarbonato opalino, cristal e fumê têm valores diferenciados. Garantia de 10 anos contra amarelamento."
    },
    {
      question: "Qual o valor de um toldo para garagem residencial?",
      answer: "Um toldo para garagem de 1 carro (aprox. 15m²) custa de R$ 1.800 a R$ 4.500, e para 2 carros (aprox. 30m²) de R$ 3.500 a R$ 9.000. O preço depende do material (lona ou policarbonato) e tipo de estrutura. Inclui projeto, fabricação e instalação completa."
    },
    {
      question: "Quanto custa toldo para varanda de apartamento?",
      answer: "O toldo para varanda de apartamento parte de R$ 800 para varandas pequenas (até 4m²) e pode chegar a R$ 5.000 para varandas gourmet maiores. Toldo cortina vertical com guias laterais custa a partir de R$ 220/m². Instalação respeita normas condominiais."
    },
    {
      question: "Qual o preço do toldo para restaurante ou bar?",
      answer: "Toldos comerciais para restaurantes custam de R$ 150 a R$ 400/m² conforme o tipo. Toldo retrátil de braço articulado para mesas externas parte de R$ 3.500. Coberturas fixas em policarbonato para áreas maiores partem de R$ 200/m². Projetos incluem personalização com logomarca."
    },
    {
      question: "Quanto custa toldo para padaria ou lanchonete?",
      answer: "Toldo de fachada para padaria ou lanchonete custa de R$ 1.200 a R$ 4.000, dependendo do tamanho da fachada. Inclui estrutura, lona personalizada com cores da marca, e instalação. Toldos tipo capota (modelo ondulado) partem de R$ 800 por metro linear."
    },
    {
      question: "Qual o valor de toldo para farmácia ou clínica?",
      answer: "Toldo para fachada de farmácia ou clínica custa de R$ 1.500 a R$ 5.000. Modelos de toldo fixo com estrutura em metalon e lona acrílica são os mais indicados. Projetos maiores com múltiplas janelas e portas podem incluir coberturas integradas com preço sob consulta."
    },
    {
      question: "Quanto custa toldo para oficina mecânica ou auto center?",
      answer: "Coberturas para oficinas custam de R$ 140 a R$ 250/m² em lona ou policarbonato. Uma cobertura de 50m² para estacionamento de oficina parte de R$ 7.000. Estruturas reforçadas em metalon com telha sanduíche partem de R$ 200/m². Projetos industriais sob medida."
    },
    {
      question: "Qual o preço de toldo para escola ou creche?",
      answer: "Coberturas para pátios escolares custam de R$ 160 a R$ 300/m². Um projeto de 100m² para playground coberto parte de R$ 16.000. Utilizamos materiais atóxicos, antichama e com proteção UV. Policarbonato opalino é recomendado para maior conforto térmico."
    },
    {
      question: "Quanto custa cortina rolo transparente por m²?",
      answer: "A cortina rolo em PVC cristal transparente custa de R$ 220 a R$ 380/m². Com blackout integrado, de R$ 280 a R$ 450/m². Inclui trilhos laterais em alumínio e sistema de enrolamento manual ou motorizado. Ideal para varandas gourmet e áreas externas de restaurantes."
    },
    {
      question: "Qual o preço da pergolado com cobertura?",
      answer: "Pergolado em madeira com cobertura em policarbonato custa de R$ 350 a R$ 600/m². Em alumínio com toldo retrátil, de R$ 500 a R$ 900/m². Projetos incluem estrutura, cobertura e acabamento. Um pergolado de 20m² completo parte de R$ 7.000 a R$ 18.000."
    },
    {
      question: "Quanto custa toldo para food truck?",
      answer: "Toldo para food truck custa de R$ 1.200 a R$ 3.500, dependendo do tamanho e modelo. Sistemas retráteis compactos para abertura rápida partem de R$ 2.000. Material resistente ao uso intenso com tratamento impermeabilizante. Projetos personalizados com a identidade visual do food truck."
    },
    {
      question: "Qual o valor de cobertura para churrasqueira?",
      answer: "Cobertura para área de churrasqueira custa de R$ 180 a R$ 350/m². Em policarbonato fumê (15m²), a partir de R$ 2.700. Em estrutura metálica com telha, a partir de R$ 2.400. Projetos integrados com cortinas laterais para fechamento completo têm valores a partir de R$ 4.500."
    },
    {
      question: "Quanto custa toldo para posto de gasolina?",
      answer: "Coberturas para postos de gasolina são projetos de grande porte, partindo de R$ 50.000 para coberturas de pista. Estruturas metálicas com telhas termoacústicas, cálculo estrutural e projeto de engenharia. Cada projeto é único e dimensionado conforme a necessidade do posto."
    },
    {
      question: "Qual o preço de toldo para concessionária?",
      answer: "Coberturas para concessionárias partem de R$ 180/m² para estacionamento e exposição. Projetos de 200m² ou mais custam de R$ 36.000 a R$ 80.000 conforme material e complexidade. Estruturas em aço galvanizado com policarbonato ou lona tensionada são as mais utilizadas."
    },
    {
      question: "Quanto custa toldo para mercado ou mercearia?",
      answer: "Toldo para fachada de mercado parte de R$ 1.500 para fachadas pequenas até R$ 8.000 para fachadas de 15 metros. Cortinas laterais de proteção para áreas de carga e descarga custam a partir de R$ 120/m². Toldos com logomarca impressa inclusos no preço."
    },
    {
      question: "Qual o valor de toldo para salão de beleza?",
      answer: "Toldo de fachada para salão de beleza custa de R$ 1.000 a R$ 3.000, dependendo do tamanho. Modelos capota ondulada são os mais populares, partindo de R$ 800/metro linear. Cores personalizadas conforme identidade visual do salão. Iluminação embutida opcional."
    },
    {
      question: "Quanto custa toldo para pet shop ou clínica veterinária?",
      answer: "Toldos para pet shop custam de R$ 1.200 a R$ 3.500 para fachada. Coberturas para área de banho e tosa ao ar livre partem de R$ 150/m². Material lavável e resistente. Projetos incluem proteção lateral contra intempéries para conforto dos animais."
    },
    {
      question: "Qual tipo de toldo é melhor para área comercial?",
      answer: "Para comércio, toldos fixos em lona acrílica são os mais custo-efetivos (R$ 120-200/m²). Para restaurantes com mesas externas, retráteis são ideais (R$ 250-400/m²). Policarbonato é recomendado para grandes áreas (R$ 180-300/m²). Cada tipo tem vantagens específicas conforme o uso."
    },
    {
      question: "Qual toldo é ideal para residência?",
      answer: "Para janelas e portas, toldos fixos em lona acrílica (R$ 120-180/m²). Para varandas, toldos retráteis (R$ 250-350/m²). Para garagens, coberturas em policarbonato (R$ 180-280/m²). Cortinas rolo para sacadas (R$ 220-380/m²). A escolha depende da necessidade de proteção e estética."
    },
    {
      question: "Toldo retrátil manual ou motorizado: qual a diferença de preço?",
      answer: "O toldo retrátil manual custa em média 30-40% menos que o motorizado. Manual: R$ 250-320/m². Motorizado: R$ 350-500/m². O motor Somfy (alemão) adiciona R$ 800-1.500 ao projeto. Sensores de vento (+R$ 300-500) e chuva (+R$ 200-400) são opcionais mas recomendados."
    },
    {
      question: "Policarbonato alveolar ou compacto: qual escolher?",
      answer: "Alveolar é mais leve e econômico (R$ 180-300/m²), ideal para coberturas de garagem e área de lazer. Compacto é mais resistente a impacto (R$ 280-450/m²), indicado para locais com risco de granizo. Alveolar tem melhor isolamento térmico. Compacto tem transparência superior."
    },
    {
      question: "Lona acrílica ou vinílica: qual a diferença?",
      answer: "Lona acrílica (R$ 40-80/m² só tecido) é respirável, resistente ao desbotamento e ideal para toldos fixos e retráteis. Vinílica (R$ 25-50/m² só tecido) é impermeável, resistente e mais econômica. Acrílica dura 8-12 anos, vinílica 5-8 anos. Acrílica é premium, vinílica é econômica."
    },
    {
      question: "Qual a garantia dos toldos da Sul Toldos?",
      answer: "Oferecemos até 5 anos de garantia para estruturas metálicas, 2 anos para toldos retráteis (incluindo motor), 10 anos para policarbonato contra amarelamento, e 1 ano para lonas e tecidos. Manutenção preventiva gratuita no primeiro ano. Garantia mais completa da região."
    },
    {
      question: "Vocês atendem toda Curitiba e região metropolitana?",
      answer: "Sim! Atendemos Curitiba (todos os 75 bairros) e as 29 cidades da região metropolitana: São José dos Pinhais, Colombo, Pinhais, Araucária, Campo Largo, Fazenda Rio Grande, Piraquara, Almirante Tamandaré, Quatro Barras e demais. Orçamento e visita técnica gratuitos."
    },
    {
      question: "Qual o prazo de instalação após aprovação?",
      answer: "Toldos fixos simples: 5-7 dias úteis. Toldos retráteis: 7-12 dias úteis. Coberturas em policarbonato: 10-15 dias úteis. Projetos comerciais grandes: 15-30 dias úteis. Em casos urgentes, oferecemos serviço expresso com prazo reduzido. Cronograma definido no momento do orçamento."
    },
    {
      question: "É possível parcelar a compra do toldo?",
      answer: "Sim! Parcelamos em até 12x no cartão de crédito. Oferecemos desconto de 10% para pagamento à vista (PIX ou transferência). Para projetos acima de R$ 5.000, condições especiais de financiamento próprio. Boleto bancário também disponível. Consulte condições específicas."
    },
    {
      question: "Vocês fazem manutenção em toldos de outras empresas?",
      answer: "Sim, realizamos manutenção, limpeza e reparo em toldos de qualquer fabricante. Serviços incluem: troca de lona (R$ 80-150/m²), reparo estrutural (sob consulta), limpeza profissional (R$ 15-25/m²), e lubrificação de mecanismos (R$ 150-300 por toldo)."
    },
    {
      question: "Como é feita a limpeza dos toldos?",
      answer: "Recomendamos limpeza semestral com água, sabão neutro e escova macia. Evite produtos químicos agressivos e jatos de alta pressão. Oferecemos serviço profissional de limpeza: R$ 15-25/m² para lonas e R$ 10-15/m² para policarbonato. Prolonga a vida útil em até 50%."
    },
    {
      question: "Toldos suportam ventos fortes e chuva intensa?",
      answer: "Nossos toldos fixos suportam ventos de até 80km/h e chuva intensa. Retráteis devem ser recolhidos acima de 50km/h (sensores fazem isso automaticamente). Policarbonato resiste a granizo moderado. Todas as estruturas são dimensionadas para as condições climáticas de Curitiba."
    },
    {
      question: "Preciso de autorização da prefeitura para instalar toldo?",
      answer: "Toldos residenciais geralmente não necessitam de licença municipal. Toldos comerciais que avançam sobre calçada podem precisar de alvará, variando por município. Em condomínios, é necessária aprovação do síndico/assembleia. Orientamos sobre toda documentação necessária."
    },
    {
      question: "Toldo residencial é mais barato que toldo comercial?",
      answer: "Normalmente sim. Toldos residenciais são menores e usam estruturas mais leves, custando 20-30% menos por m². Residencial: R$ 120-250/m². Comercial: R$ 150-400/m². A diferença se deve à robustez da estrutura, tamanho do projeto e exigências técnicas maiores do comércio."
    },
    {
      question: "Vocês instalam toldos em prédios e condomínios?",
      answer: "Sim! Instalamos em apartamentos e áreas comuns de condomínios. Respeitamos regulamentos internos e orientamos sobre aprovação necessária. Trabalhamos em alturas com equipe certificada em NR35. Atendemos desde sacadas individuais até coberturas de playground e estacionamento condominial."
    },
    {
      question: "Qual o melhor toldo para proteção solar em Curitiba?",
      answer: "Em Curitiba, com incidência solar moderada, recomendamos: lona acrílica com FPU 50+ para toldos fixos e retráteis; policarbonato opalino para coberturas com luz difusa; cortinas rolo com blackout para controle total. Todas as opções bloqueiam mais de 95% dos raios UV."
    },
    {
      question: "É possível fazer toldo em formato especial ou curvo?",
      answer: "Sim! Fabricamos toldos sob medida em qualquer formato: curvo, semicircular, triangular, em L, ondulado e modelos exclusivos. Projetos especiais requerem estudo técnico (gratuito) e podem ter prazo diferenciado. Formatos curvos têm acréscimo de 15-25% sobre o preço padrão."
    },
    {
      question: "Qual a vida útil de um toldo bem conservado?",
      answer: "Lona acrílica: 8-12 anos. Lona vinílica: 5-8 anos. Estrutura em alumínio: 20+ anos. Estrutura em metalon: 12-15 anos. Policarbonato: 15-20 anos. Motor de toldo retrátil: 10-15 anos. Manutenção preventiva regular pode estender a vida útil em até 40%."
    },
    {
      question: "Toldos automáticos consomem muita energia elétrica?",
      answer: "Não! Motores de toldos retráteis consomem apenas 150-300W durante a movimentação, que dura 1-2 minutos por operação. Uso diário (4 operações) representa menos de R$ 0,50/mês na conta de luz. Sensores automáticos não alteram significativamente o consumo."
    },
    {
      question: "Vocês trabalham com toldos para igrejas e templos?",
      answer: "Sim! Atendemos igrejas, templos e centros religiosos com coberturas para estacionamento (R$ 140-250/m²), salões de eventos (projetos sob medida), e fachadas (R$ 150-300/m²). Projetos grandes com estruturas especiais e cálculo de engenharia. Parcelamento facilitado."
    },
    {
      question: "Qual o preço para trocar lona de toldo existente?",
      answer: "A troca de lona custa de R$ 80 a R$ 150/m² dependendo do tipo de tecido e complexidade. Lona acrílica importada: R$ 120-150/m². Lona nacional: R$ 80-110/m². Inclui remoção da lona antiga, instalação da nova e verificação da estrutura. Prazo de 3-5 dias úteis."
    },
    {
      question: "Vocês fazem cobertura para piscina?",
      answer: "Sim! Coberturas para piscina em policarbonato partem de R$ 250/m². Sistemas retráteis para piscinas partem de R$ 15.000 conforme tamanho. Coberturas fixas com estrutura em alumínio e policarbonato cristal são as mais solicitadas. Projetos incluem ventilação e acesso."
    },
    {
      question: "Toldo cortina vertical: preço e indicações?",
      answer: "Toldo cortina vertical com guias laterais custa de R$ 220 a R$ 400/m². Indicado para varandas, sacadas e fechamento lateral. Com visor transparente em PVC: R$ 280-380/m². Totalmente em lona blackout: R$ 220-320/m². Sistema de enrolamento manual ou motorizado disponível."
    },
    {
      question: "Como funciona a visita técnica gratuita?",
      answer: "Agendamos por WhatsApp ou telefone, conforme sua disponibilidade (incluindo sábados). Nosso técnico avalia o local, tira medidas, analisa a estrutura e discute opções. O orçamento é apresentado na hora, sem compromisso. A visita dura em média 30-45 minutos."
    },
    {
      question: "Vocês fazem projeto 3D do toldo antes da instalação?",
      answer: "Sim, para projetos acima de R$ 3.000 oferecemos renderização 3D gratuita. Para projetos menores, fornecemos desenho técnico com dimensões e especificações. O projeto 3D permite visualizar o resultado final e fazer ajustes antes da fabricação."
    },
    {
      question: "Qual a diferença de preço entre toldo em alumínio e metalon?",
      answer: "Estrutura em alumínio custa 30-50% mais que metalon, porém não enferruja e é mais leve. Alumínio: acréscimo de R$ 40-80/m². Metalon: mais econômico e resistente a peso, mas requer pintura anticorrosiva. Para áreas litorâneas ou muito úmidas, alumínio é fortemente recomendado."
    },
    {
      question: "Vocês atendem emergências com toldos danificados?",
      answer: "Sim! Atendimento de emergência 24h pelo WhatsApp (41) 99812-1324. Remoção de toldo danificado por tempestade: R$ 200-500. Reparo emergencial: sob consulta. Priorizamos situações de risco à segurança. Em dias úteis, atendimento emergencial em até 4 horas."
    },
    {
      question: "Vocês emitem nota fiscal e contrato?",
      answer: "Sim! Todos os serviços incluem nota fiscal, contrato detalhado com especificações técnicas, prazo e garantia. Somos empresa registrada com CNPJ ativo. Contratos protegem ambas as partes e detalham materiais, prazos, valores e condições de garantia."
    },
    {
      question: "Qual a melhor época do ano para instalar toldos em Curitiba?",
      answer: "Outono e inverno (abril-agosto) são ideais: menor incidência de chuva para instalação e preços podem ser mais competitivos (baixa temporada). Porém, atendemos o ano todo. No verão, a demanda é maior e prazos podem ser mais longos. Planeje com antecedência para melhores condições."
    },
    {
      question: "Quanto custa instalar sensor de vento no toldo retrátil?",
      answer: "Sensor de vento (anemômetro) custa de R$ 300 a R$ 500 instalado, compatível com motores Somfy e similares. Sensor de chuva: R$ 200-400. Kit completo (vento + sol + chuva): R$ 600-1.000. Sensores recolhem o toldo automaticamente, protegendo contra danos por intempéries."
    },
    {
      question: "Vocês fazem coberturas para estacionamento de empresa?",
      answer: "Sim! Coberturas para estacionamentos empresariais com estrutura metálica e lona tensionada partem de R$ 140/m². Em policarbonato: R$ 200/m². Projetos de 200-500m² são comuns. Incluímos cálculo estrutural, projeto de engenharia e ART. Parcelamento em até 12x para empresas."
    },
    {
      question: "O que é toldo tipo capota e quanto custa?",
      answer: "Toldo capota é o modelo ondulado/semicircular comum em fachadas comerciais e residenciais. Custa de R$ 800 a R$ 1.500 por metro linear. Disponível em lona acrílica ou vinílica com diversas cores. Estrutura em alumínio ou ferro. Muito utilizado em padarias, lojas e janelas residenciais."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 10, faqData.length));
  };

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes sobre <span className="text-primary">Toldos e Preços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Mais de 50 perguntas com preços por m², tipos de toldos para comércio e residência. 
            Clique para abrir cada resposta.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {faqData.slice(0, visibleCount).map((faq, index) => (
            <div key={index} className="bg-background border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-secondary/30 transition-colors"
              >
                <span className="text-base md:text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${openItem === index ? "rotate-180" : ""}`}
                />
              </button>

              {openItem === index && (
                <div className="px-6 pb-6">
                  <div className="text-muted-foreground leading-relaxed text-base border-t border-border pt-4">
                    {faq.answer}
                  </div>
                  <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/5541998121324?text=${encodeURIComponent(`Olá, tenho dúvida sobre: ${faq.question}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-5 rounded-lg text-center transition-colors text-base"
                    >
                      💬 TIRAR DÚVIDA NO WHATSAPP
                    </a>
                    <a
                      href="tel:+554135646943"
                      className="border border-border hover:bg-secondary text-foreground font-semibold py-3 px-5 rounded-lg text-center transition-colors text-base"
                    >
                      📞 LIGAR AGORA
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {visibleCount < faqData.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 rounded-xl text-lg transition-colors"
            >
              ▼ VER MAIS PERGUNTAS ({faqData.length - visibleCount} restantes)
            </button>
          </div>
        )}

        <div className="text-center mt-10">
          <p className="text-lg text-muted-foreground mb-6">
            Não encontrou sua dúvida? Fale diretamente conosco!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5541998121324?text=Olá, tenho dúvidas sobre toldos!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors font-bold text-lg"
            >
              💬 WhatsApp: (41) 99812-1324
            </a>
            <a
              href="tel:+554135646943"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-border text-foreground rounded-xl hover:bg-secondary transition-colors font-bold text-lg"
            >
              📞 Telefone: (41) 3564-6943
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
