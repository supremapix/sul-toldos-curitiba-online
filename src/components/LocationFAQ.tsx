import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { openWhatsapp } from "@/utils/whatsapp";

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
    <section className="py-20 bg-[#F4EFE6] text-[#1C1F22] border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#F2B705] text-[#1C1F22] font-sans font-extrabold text-[10px] md:text-xs tracking-[0.2em] uppercase px-3 py-1.5 mb-6 rounded-[2px]">
            FAQ LOCAL — {location.toUpperCase()}
          </span>
          <h2 
            className="text-3xl md:text-5xl font-extrabold uppercase leading-tight tracking-tight mb-4 text-[#1C1F22]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Perguntas Frequentes {type === 'bairro' ? 'no' : 'em'} <span className="text-[#C8361D]">{location}</span>
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Consulte as principais dúvidas sobre prazos de fabricação, materiais de cobertura e visitas gratuitas de projeto {type === 'bairro' ? 'no' : 'em'} {location}.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-border rounded-[2px] px-6"
              >
                <AccordionTrigger 
                  className="text-left hover:no-underline py-5 text-sm uppercase tracking-wide font-extrabold text-[#1C1F22] hover:text-[#C8361D] transition-colors"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  <span>{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pt-0 border-t border-gray-50 mt-2 text-xs text-gray-600 leading-relaxed">
                  <div className="pt-3">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500 font-extrabold uppercase tracking-wider mb-6">
            Ainda tem dúvidas sobre o projeto na sua empresa? Fale conosco agora!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => openWhatsapp(`Olá, estou em ${location} e gostaria de tirar algumas dúvidas sobre toldos comerciais.`)}
              className="inline-flex items-center justify-center bg-[#C8361D] hover:bg-[#C8361D]/90 text-white font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-[2px] transition-colors cursor-pointer border-0 outline-none"
            >
              💬 Falar no WhatsApp
            </button>
            <a 
              href="tel:+554135646943"
              className="inline-flex items-center justify-center border border-gray-400 hover:border-[#1C1F22] text-[#1C1F22] font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-[2px] transition-colors"
            >
              📞 Ligar: (41) 3564-6943
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationFAQ;
