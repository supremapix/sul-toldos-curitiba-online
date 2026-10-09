import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCard {
  title: string;
  content: string;
  icon: string;
}

interface ServiceCardsProps {
  location: string;
  type: 'bairro' | 'cidade';
  cards: ServiceCard[];
}

const ServiceCards = ({ location, type, cards }: ServiceCardsProps) => {
  return (
    <section className="py-20 bg-[#F4EFE6] text-[#1C1F22] border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#F2B705] text-[#1C1F22] font-sans font-extrabold text-[10px] md:text-xs tracking-[0.2em] uppercase px-3 py-1.5 mb-6 rounded-[2px]">
            SERVIÇOS DE COBERTURA E INSTALAÇÃO — {location.toUpperCase()}
          </span>
          <h2 
            className="text-3xl md:text-5xl font-extrabold uppercase leading-tight tracking-tight mb-4 text-[#1C1F22]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Toldos Comerciais {type === 'bairro' ? 'no' : 'em'} <span className="text-[#C8361D]">{location}</span>
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça as especificações técnicas e projetos comerciais que realizamos {type === 'bairro' ? 'no' : 'em'} {location} com equipe certificada de fábrica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <Card key={index} className="bg-white border-border hover:border-[#C8361D] transition-colors rounded-[2px] shadow-none">
              <CardHeader className="p-6 border-b border-gray-100">
                <CardTitle 
                  className="text-lg md:text-xl font-extrabold uppercase text-[#1C1F22] flex items-center gap-3"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  <span className="text-xl">{card.icon}</span>
                  <span>{card.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-xs text-gray-600 leading-relaxed whitespace-pre-line">
                {card.content}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
