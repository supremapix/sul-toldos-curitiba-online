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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Sul Toldos {type === 'bairro' ? 'no' : 'em'} <span className="text-primary">{location}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça nossos serviços especializados e como trabalhamos {type === 'bairro' ? 'no' : 'em'} {location} 
            para oferecer as melhores soluções em toldos e coberturas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                  <span>{card.icon}</span>
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {card.content}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;