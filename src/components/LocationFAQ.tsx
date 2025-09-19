import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface LocationFAQProps {
  location: string;
  type: 'bairro' | 'cidade';
  faqs: FAQ[];
}

const LocationFAQ = ({ location, type, faqs }: LocationFAQProps) => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Perguntas Frequentes sobre Toldos {type === 'bairro' ? 'no' : 'em'} <span className="text-primary">{location}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos serviços de toldos, coberturas e policarbonato {type === 'bairro' ? 'no' : 'em'} {location}. 
            Nossa equipe está sempre pronta para esclarecer qualquer questão.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Não encontrou a resposta que procurava? Entre em contato conosco!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5541998121324" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 rounded-md transition-colors"
            >
              💬 WhatsApp: (41) 99812-1324
            </a>
            <a 
              href="tel:+554135646943"
              className="inline-flex items-center justify-center border border-border hover:bg-secondary text-foreground font-semibold px-6 py-3 rounded-md transition-colors"
            >
              📞 Telefone: (41) 3564-6943
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationFAQ;