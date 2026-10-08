import { MessageCircle, HelpCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { openWhatsapp } from "@/utils/whatsapp";

const PREVIEW_FAQS = [
  { q: "Quanto custa um toldo em Curitiba?", a: "O preço varia conforme tipo, material e tamanho. Orçamento 100% gratuito na Sul Toldos." },
  { q: "O orçamento é gratuito?", a: "Sim! Visita técnica e orçamento sem custo e sem compromisso." },
  { q: "Qual o melhor toldo para varanda?", a: "Toldo retrátil é ideal pela flexibilidade. Fazemos projeto sob medida." },
  { q: "Atendem toda Curitiba e região?", a: "Sim! Curitiba, Colombo, SJP, Araucária e toda RMC." },
  { q: "Qual a vida útil de um toldo?", a: "De 5 a 20 anos dependendo do material e manutenção." },
  { q: "Consertam toldos de qualquer marca?", a: "Sim! Conserto e reforma de toldos de qualquer marca e modelo." },
];

const FaqHomeSection = () => {
  const handleWhatsApp = () => {
    openWhatsapp("Olá! Tenho uma dúvida sobre toldos.");
  };

  return (
    <section id="faq-home" className="py-16 md:py-24 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
            <HelpCircle className="w-4 h-4" />
            155 PERGUNTAS RESPONDIDAS
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Dúvidas sobre <span className="text-primary">Toldos em Curitiba?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reunimos as perguntas mais frequentes dos nossos clientes sobre preços, tipos, instalação e manutenção de toldos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-10">
          {PREVIEW_FAQS.map((faq, i) => (
            <div key={i} className="bg-background border border-border rounded-xl p-5 hover:border-primary/50 transition-all">
              <h3 className="text-base font-bold text-foreground mb-2">{faq.q}</h3>
              <p className="text-sm text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold transition-all"
          >
            Ver Todas as 155 Perguntas
            <ArrowRight className="w-5 h-5" />
          </Link>
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Tire Sua Dúvida no WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqHomeSection;
