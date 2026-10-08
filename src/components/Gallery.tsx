import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { openWhatsapp } from "@/utils/whatsapp";
import awningResidential from "@/assets/awning-residential.jpg";
import canopyCommercial from "@/assets/canopy-commercial.jpg";
import retractableAwning from "@/assets/retractable-awning.jpg";
import heroImage from "@/assets/hero-awning.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const galleryItems = [
    {
      id: 1,
      title: "Toldo Residencial",
      category: "residencial",
      image: awningResidential,
      description: "Toldo em lona para área residencial"
    },
    {
      id: 2,
      title: "Cobertura Comercial",
      category: "comercial",
      image: canopyCommercial,
      description: "Cobertura em policarbonato para estabelecimento comercial"
    },
    {
      id: 3,
      title: "Toldo Retrátil",
      category: "retratil",
      image: retractableAwning,
      description: "Sistema retrátil automatizado"
    },
    {
      id: 4,
      title: "Toldo Comercial",
      category: "comercial",
      image: heroImage,
      description: "Instalação comercial de grande porte"
    },
    {
      id: 5,
      title: "Toldo Residencial Premium",
      category: "residencial",
      image: awningResidential,
      description: "Toldo premium para casa"
    },
    {
      id: 6,
      title: "Cobertura Industrial",
      category: "comercial",
      image: canopyCommercial,
      description: "Cobertura para área industrial"
    }
  ];

  const categories = [
    { id: "todos", label: "Todos os Projetos" },
    { id: "residencial", label: "Residencial" },
    { id: "comercial", label: "Comercial" },
    { id: "retratil", label: "Retrátil" }
  ];

  const filteredItems = selectedCategory === "todos" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleWhatsApp = () => {
    openWhatsapp("Olá, vi a galeria de trabalhos e gostaria de solicitar um orçamento!");
  };

  return (
    <section id="gallery" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nossos <span className="text-primary">Trabalhos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja alguns dos nossos projetos realizados em Curitiba e região metropolitana.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={selectedCategory === category.id ? "bg-primary text-white" : ""}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item) => (
            <Card key={item.id} className="bg-card border-border overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-200 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Gostou dos nossos trabalhos?
          </h3>
          <p className="text-muted-foreground mb-6">
            Solicite seu orçamento gratuito e transforme seu espaço!
          </p>
          <Button 
            onClick={handleWhatsApp}
            size="lg"
            className="bg-primary hover:bg-primary/90 px-8"
          >
            📱 Solicitar Orçamento Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;