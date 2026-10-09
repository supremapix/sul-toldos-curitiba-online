import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Wrench, Clock, Award } from "lucide-react";

const About = () => {
  const [lineProgress, setLineProgress] = useState(0);
  const [hasStartedCount, setHasStartedCount] = useState(false);
  const processSectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: "01",
      title: "Visita Técnica",
      description: "Visita sem compromisso para levantamento das dimensões e análise estrutural da fachada do seu comércio."
    },
    {
      number: "02",
      title: "Projeto e Arte",
      description: "Criação do pré-projeto e mockup digital de aplicação da sua logomarca na lona para sua aprovação."
    },
    {
      number: "03",
      title: "Fabricação",
      description: "Montagem da estrutura em aço galvanizado reforçado e soldagem vulcanizada da lona vinílica."
    },
    {
      number: "04",
      title: "Instalação",
      description: "Fixação rápida e segura no local, adaptada ao seu horário comercial ou fora dele."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!processSectionRef.current) return;
      const rect = processSectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const start = rect.top - viewportHeight + 150;
      const end = rect.bottom - 150;
      const total = end - start;
      const current = window.scrollY - (window.scrollY + rect.top - viewportHeight + 150);
      
      const progress = Math.min(Math.max((viewportHeight - rect.top) / (rect.height + 100), 0), 1);
      setLineProgress(progress * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStartedCount(true);
        }
      },
      { threshold: 0.1 }
    );
    if (processSectionRef.current) {
      observer.observe(processSectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Garantia por Escrito",
      description: "Todos os nossos toldos e coberturas comerciais acompanham garantia formalizada em contrato para a segurança do seu negócio."
    },
    {
      icon: Wrench,
      title: "Lona com sua Marca Impressa",
      description: "Impressão de alta definição e recorte digital da logomarca da sua empresa, integrando toldo e identidade visual."
    },
    {
      icon: Clock,
      title: "Instalação Flexível",
      description: "Instalações planejadas em horário comercial ou fora dele para não interromper as atividades e vendas da sua empresa."
    },
    {
      icon: Award,
      title: "Orçamento com Visita Técnica",
      description: "Realizamos visitas técnicas no local para avaliar a estrutura e tirar as medidas exatas sem nenhum custo para você."
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#F4EFE6] text-[#1C1F22] border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Title */}
        <div className="mb-16">
          <span className="text-[#C8361D] font-sans font-bold text-xs tracking-[0.2em] uppercase block mb-3">
            SOBRE A EMPRESA
          </span>
          <h2 
            className="font-sans font-extrabold uppercase text-3xl md:text-5xl leading-tight tracking-tight mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Toldos Comerciais Curitiba — <span className="text-[#C8361D]">Estruturas Profissionais para Empresas</span>
          </h2>
          <p className="text-base text-gray-700 max-w-4xl leading-relaxed">
            Somos especialistas no projeto, fabricação e instalação de toldos e coberturas de alta performance para o setor comercial. Atendemos lojas, restaurantes, condomínios, estacionamentos e indústrias em Curitiba e região metropolitana com foco em prazos rigorosos, durabilidade extrema e comunicação visual impecável.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border border-border rounded-[2px] shadow-none hover:border-[#C8361D] transition-colors duration-200">
              <CardContent className="p-6 text-left">
                <div className="w-10 h-10 text-[#C8361D] mb-4 flex items-center justify-start">
                  <feature.icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 
                  className="text-lg font-bold text-[#1C1F22] uppercase tracking-wide mb-3"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Etapas do Processo 01-04 */}
        <div ref={processSectionRef} className="mb-24 relative overflow-hidden md:overflow-visible">
          <div className="text-center mb-16">
            <span className="text-[#C8361D] font-sans font-bold text-xs tracking-[0.2em] uppercase block mb-3">
              02 — CRONOGRAMA
            </span>
            <h3 
              className="font-sans font-extrabold uppercase text-2xl md:text-4xl leading-tight tracking-tight mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Etapas do Processo: <span className="text-[#C8361D]">Do Projeto à Instalação</span>
            </h3>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Veja como trabalhamos com rapidez e transparência para renovar a fachada da sua empresa sem causar transtornos ou paralisar suas operações.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto px-4">
            {/* Horizontal connecting line (Desktop) */}
            <div className="hidden md:block absolute top-[30px] left-[12%] right-[12%] h-[3px] bg-gray-200 -z-10">
              <div 
                className="h-full bg-[#C8361D] transition-all duration-300 ease-out"
                style={{ width: `${lineProgress}%` }}
              />
            </div>

            {/* Vertical connecting line (Mobile) */}
            <div className="md:hidden absolute left-[36px] top-6 bottom-6 w-[3px] bg-gray-200 -z-10">
              <div 
                className="w-full bg-[#C8361D] transition-all duration-300 ease-out"
                style={{ height: `${lineProgress}%` }}
              />
            </div>

            {/* Grid for Steps */}
            <div className="grid md:grid-cols-4 gap-8 md:gap-4">
              {steps.map((step, idx) => {
                const stepNum = hasStartedCount ? step.number : "00";
                return (
                  <div 
                    key={idx} 
                    className="flex md:flex-col items-start md:items-center gap-6 md:gap-0 text-left md:text-center transition-all duration-500 transform translate-y-0 opacity-100"
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    {/* Rounded badge wrapper */}
                    <div className="relative shrink-0 flex items-center justify-center">
                      <div className={`w-16 h-16 rounded-full border-2 bg-white flex items-center justify-center font-mono font-black text-2xl transition-all duration-500 shadow-sm ${hasStartedCount ? "border-[#C8361D] text-[#C8361D] scale-110" : "border-gray-200 text-gray-300"}`}>
                        {stepNum}
                      </div>
                    </div>

                    <div className="md:mt-6">
                      <h4 
                        className="text-lg font-bold text-[#1C1F22] uppercase tracking-wide mb-2"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        {step.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed max-w-[200px] md:mx-auto">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Prova Concreta Section */}
        <div className="bg-[#1C1F22] text-[#F4EFE6] rounded-[2px] p-8 md:p-12 border border-border/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#F2B705] font-sans font-bold text-xs tracking-[0.2em] uppercase block mb-3">
                DIFERENCIAIS REAIS
              </span>
              <h3 
                className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mb-6"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Atendimento Sob Medida para o Seu Comércio
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-5 h-5 bg-[#C8361D] text-white flex items-center justify-center text-xs font-bold mr-3 mt-1 rounded-[2px]">
                    ✓
                  </span>
                  <p className="text-sm text-gray-300">
                    <strong>Visita Técnica e Orçamento Rápido:</strong> Vamos ao local sem custo para garantir que o projeto atenda a todas as normas e exigências da sua fachada.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="w-5 h-5 bg-[#C8361D] text-white flex items-center justify-center text-xs font-bold mr-3 mt-1 rounded-[2px]">
                    ✓
                  </span>
                  <p className="text-sm text-gray-300">
                    <strong>Lona com Identidade Visual Integrada:</strong> Equipamentos de ponta para impressão digital diretamente na lona com a logomarca do seu restaurante ou comércio.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="w-5 h-5 bg-[#C8361D] text-white flex items-center justify-center text-xs font-bold mr-3 mt-1 rounded-[2px]">
                    ✓
                  </span>
                  <p className="text-sm text-gray-300">
                    <strong>Cronograma sem Impacto Comercial:</strong> Realizamos a montagem em horários alternativos para não atrapalhar o fluxo de clientes da sua empresa.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="w-5 h-5 bg-[#C8361D] text-white flex items-center justify-center text-xs font-bold mr-3 mt-1 rounded-[2px]">
                    ✓
                  </span>
                  <p className="text-sm text-gray-300">
                    <strong>Garantia Estendida por Escrito:</strong> Durabilidade comprovada e assistência técnica ágil para manutenção e troca de lona sob medida.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-6 text-center rounded-[2px]">
                <h4 className="text-3xl font-bold text-[#F2B705] mb-1 font-mono">100%</h4>
                <p className="text-xs uppercase text-gray-400 tracking-wider font-semibold">Projetos Comerciais</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 text-center rounded-[2px]">
                <h4 className="text-3xl font-bold text-[#F2B705] mb-1 font-mono">220/m²</h4>
                <p className="text-xs uppercase text-gray-400 tracking-wider font-semibold">A Partir de R$ 220</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 text-center rounded-[2px]">
                <h4 className="text-3xl font-bold text-[#F2B705] mb-1 font-mono">Aço/Alum</h4>
                <p className="text-xs uppercase text-gray-400 tracking-wider font-semibold">Estrutura Reforçada</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 text-center rounded-[2px]">
                <h4 className="text-3xl font-bold text-[#F2B705] mb-1 font-mono">Rápido</h4>
                <p className="text-xs uppercase text-gray-400 tracking-wider font-semibold">Instalação Ágil</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;