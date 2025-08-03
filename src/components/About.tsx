import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Clock, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Garantia de Qualidade",
      description: "Todos os nossos produtos possuem garantia e são fabricados com materiais de primeira linha."
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais qualificados com anos de experiência em instalação de toldos e coberturas."
    },
    {
      icon: Clock,
      title: "Atendimento Rápido",
      description: "Orçamento em até 24h e instalação programada conforme sua disponibilidade."
    },
    {
      icon: Award,
      title: "Referência em Curitiba",
      description: "Mais de 1000 clientes satisfeitos em toda região metropolitana de Curitiba."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Sul Toldos - <span className="text-primary">Especializada em Toldos</span> em Curitiba
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A Sul Toldos é uma empresa especializada em toldos, coberturas e soluções em policarbonato. 
            Atendemos Curitiba e toda a região metropolitana com excelência e qualidade comprovada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Por que escolher a Sul Toldos?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">
                    ✓
                  </span>
                  <p className="text-muted-foreground">
                    Materiais de alta qualidade com garantia de fábrica
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">
                    ✓
                  </span>
                  <p className="text-muted-foreground">
                    Instalação profissional com equipe própria
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">
                    ✓
                  </span>
                  <p className="text-muted-foreground">
                    Orçamento gratuito e sem compromisso
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">
                    ✓
                  </span>
                  <p className="text-muted-foreground">
                    Atendimento em toda região metropolitana de Curitiba
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-lg p-6">
                <h4 className="text-2xl font-bold text-primary mb-2">+1000</h4>
                <p className="text-muted-foreground mb-4">Clientes Satisfeitos</p>
                
                <h4 className="text-2xl font-bold text-primary mb-2">15+</h4>
                <p className="text-muted-foreground mb-4">Anos de Experiência</p>
                
                <h4 className="text-2xl font-bold text-primary mb-2">100%</h4>
                <p className="text-muted-foreground">Garantia de Qualidade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;