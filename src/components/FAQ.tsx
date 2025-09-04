import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqData = [
    {
      question: "Quanto custa um toldo para minha casa em Curitiba?",
      answer: "O valor do toldo varia conforme tamanho, tipo de tecido e estrutura. Fazemos orçamentos gratuitos! Toldos residenciais variam de R$ 800 a R$ 5.000 dependendo das especificações. Entre em contato para uma avaliação personalizada."
    },
    {
      question: "Qual o prazo de instalação de toldos retráteis?",
      answer: "A instalação de toldos retráteis leva em média 3 a 5 dias úteis após aprovação do projeto. Toldos automatizados podem levar até 7 dias. Realizamos visita técnica gratuita para definir cronograma exato."
    },
    {
      question: "Vocês atendem toda região metropolitana de Curitiba?",
      answer: "Sim! Atendemos Curitiba e toda região metropolitana incluindo Pinhais, São José dos Pinhais, Colombo, Piraquara, Almirante Tamandaré, Fazenda Rio Grande, Araucária e Campo Largo. Orçamento e visita técnica gratuitos."
    },
    {
      question: "Que tipos de tecidos vocês utilizam nos toldos?",
      answer: "Utilizamos tecidos de alta qualidade: lona acrílica (Sansuy, Guarany), tecido listrado, lona vinílica e tecidos especiais com proteção UV. Todos os materiais têm garantia contra desbotamento e rasgos."
    },
    {
      question: "Toldos retráteis têm garantia? Qual o prazo?",
      answer: "Sim! Oferecemos garantia de 2 anos para toldos retráteis, 1 ano para toldos fixos e 5 anos para estruturas metálicas. Inclui manutenção preventiva gratuita no primeiro ano."
    },
    {
      question: "É possível automatizar toldos já existentes?",
      answer: "Na maioria dos casos sim! Fazemos retrofit em toldos existentes instalando motores somfy, sensores de vento e sol. Avaliação técnica gratuita para verificar viabilidade da automação."
    },
    {
      question: "Vocês fazem manutenção em toldos de outras empresas?",
      answer: "Sim, fazemos manutenção, limpeza e reparos em toldos de qualquer fabricante. Serviços incluem troca de lona, reparo de estruturas, lubrificação de mecanismos e pintura."
    },
    {
      question: "Como escolher o tamanho ideal para meu toldo?",
      answer: "O tamanho depende da área a proteger e localização. Nossa equipe técnica faz medição gratuita e calcula a projeção ideal considerando incidência solar, ventos e arquitetura do local."
    },
    {
      question: "Toldos suportam chuva forte e vento?",
      answer: "Nossos toldos são projetados para resistir chuvas normais e ventos até 60km/h. Para tempestades recomendamos recolher toldos retráteis. Estruturas fixas suportam maiores cargas de vento e chuva."
    },
    {
      question: "Preciso de licença da prefeitura para instalar toldo?",
      answer: "Para toldos residenciais geralmente não é necessário. Toldos comerciais podem precisar de licença dependendo do tamanho e localização. Orientamos sobre documentação necessária em cada caso."
    },
    {
      question: "Qual a diferença entre policarbonato e lona?",
      answer: "Policarbonato é mais resistente, permite passagem de luz natural e tem maior durabilidade (15+ anos). Lona oferece melhor proteção solar, mais cores e designs, com durabilidade de 5-8 anos."
    },
    {
      question: "Fazem cobertura para garagem e área de churrasqueira?",
      answer: "Sim! Fazemos coberturas em policarbonato, telhas metálicas ou lona para garagens, churrasqueiras, piscinas e áreas de lazer. Projetos personalizados com estrutura em alumínio ou ferro."
    },
    {
      question: "Como é feita a limpeza dos toldos?",
      answer: "Limpeza deve ser feita com água, sabão neutro e escova macia. Evite produtos químicos agressivos. Oferecemos serviço de limpeza profissional anual para preservar tecidos e estruturas."
    },
    {
      question: "Toldos elétricos consomem muita energia?",
      answer: "Não! Motores para toldos são muito eficientes, consumindo cerca de 150W apenas durante movimentação (1-2 minutos). Custo mensal insignificante na conta de luz."
    },
    {
      question: "É possível fazer toldo em formato irregular?",
      answer: "Sim, fazemos toldos sob medida para qualquer formato: triangular, semicircular, em L, seguindo arquitetura do imóvel. Projetos especiais têm prazo diferenciado mas mantemos qualidade padrão Sul Toldos."
    },
    {
      question: "Que sensores podem ser instalados em toldos automáticos?",
      answer: "Instalamos sensores de vento (recolhe automaticamente), sensores de sol (estende conforme luminosidade) e sensores de chuva. Também oferecemos controle por aplicativo smartphone."
    },
    {
      question: "Vocês trabalham com projetos comerciais de grande porte?",
      answer: "Sim! Atendemos restaurantes, hotéis, escolas, hospitais e indústrias. Projetos comerciais incluem cálculo estrutural, projetos técnicos e instalação com equipe especializada."
    },
    {
      question: "Como agendar visita técnica gratuita?",
      answer: "Entre em contato pelo WhatsApp (41) 99812-1324, telefone (41) 3564-6943 ou pelo formulário do site. Agendamos horário conforme sua disponibilidade, incluindo finais de semana."
    },
    {
      question: "Toldos podem ser instalados em prédios e apartamentos?",
      answer: "Sim, fazemos instalações em apartamentos respeitando normas do condomínio. Verificamos regulamento interno e orientamos sobre aprovação necessária antes da instalação."
    },
    {
      question: "Qual o melhor tecido para resistir ao sol forte?",
      answer: "Recomendamos lona acrílica com proteção UV para máxima durabilidade. Tecidos com fator de proteção FPU 50+ bloqueiam 98% dos raios UV, preservando cor e integridade do material."
    },
    {
      question: "Fazem toldos para food trucks e trailers?",
      answer: "Sim! Especializamos em toldos para food trucks, trailers gourmet e eventos. Sistemas retráteis compactos, resistentes ao uso intenso e fácil manutenção."
    },
    {
      question: "É possível financiar a compra do toldo?",
      answer: "Sim, trabalhamos com parcelamento no cartão de crédito em até 12x e temos parcerias com financeiras para projetos maiores. Consulte condições especiais para cada caso."
    },
    {
      question: "Como identificar se meu toldo precisa de manutenção?",
      answer: "Sinais incluem: dificuldade para recolher/estender, ruídos excessivos, tecido desbotado ou rasgado, ferrugem na estrutura. Fazemos inspeção gratuita e orçamento sem compromisso."
    },
    {
      question: "Vocês instalam toldos em locais de difícil acesso?",
      answer: "Sim, nossa equipe tem experiência em instalações complexas: coberturas altas, locais sem escadas, áreas internas. Utilizamos equipamentos especiais e técnicas seguras para qualquer situação."
    },
    {
      question: "Qual a vida útil média de um toldo bem cuidado?",
      answer: "Toldos em lona acrílica duram 8-12 anos, estruturas metálicas 15+ anos. Policarbonato pode durar mais de 20 anos. Manutenção adequada prolonga significativamente a vida útil."
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Perguntas Frequentes sobre <span className="text-primary">Toldos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tire todas suas dúvidas sobre toldos, coberturas e policarbonato. 
            Não encontrou sua pergunta? Entre em contato conosco!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Nossa equipe está pronta para ajudar!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5541998121324?text=Olá, tenho dúvidas sobre toldos!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              💬 WhatsApp: (41) 99812-1324
            </a>
            <a 
              href="tel:+554135646943"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground rounded-lg hover:bg-secondary transition-colors font-semibold"
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