import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { openWhatsapp } from "@/utils/whatsapp";
import canopyCommercial from "@/assets/canopy-commercial.jpg";
import retractableAwning from "@/assets/retractable-awning.jpg";
import heroImage from "@/assets/hero-awning.jpg";

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const galleryItems = [
    {
      id: 1,
      title: "Toldo de Fachada para Restaurante",
      category: "fachadas",
      image: heroImage,
      description: "Lona vermelha vulcanizada com impressão de logotipo e friso em branco"
    },
    {
      id: 2,
      title: "Cobertura em Policarbonato para Estacionamento",
      category: "coberturas",
      image: canopyCommercial,
      description: "Estrutura metálica com policarbonato compacto fumê de alta durabilidade"
    },
    {
      id: 3,
      title: "Toldo Retrátil Articulado de Café",
      category: "retrateis",
      image: retractableAwning,
      description: "Braços articulados importados em lona acrílica marrom impermeável"
    },
    {
      id: 4,
      title: "Toldo Capota Comercial de Farmácia",
      category: "fachadas",
      image: canopyCommercial,
      description: "Modelo capota em lona vinílica com recorte de logomarca em alta definição"
    },
    {
      id: 5,
      title: "Toldo Cortina de Varanda Externa de Bar",
      category: "cortinas",
      image: retractableAwning,
      description: "Fechamento vertical em PVC cristal transparente com travas de segurança"
    },
    {
      id: 6,
      title: "Cobertura de Docas e Área de Carga/Descarga",
      category: "coberturas",
      image: heroImage,
      description: "Grandes vãos livres com cobertura galvanizada de alta estabilidade"
    }
  ];

  const categories = [
    { id: "todos", label: "Todos os Projetos" },
    { id: "fachadas", label: "Fachadas de Lojas" },
    { id: "retrateis", label: "Toldos Retráteis" },
    { id: "coberturas", label: "Coberturas Policarbonato" },
    { id: "cortinas", label: "Toldos Cortina" }
  ];

  const filteredItems = selectedCategory === "todos" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleWhatsApp = () => {
    openWhatsapp("Olá! Vi a galeria de projetos e gostaria de solicitar um orçamento para toldo comercial!");
  };

  return (
    <section id="gallery" className="py-20 bg-[#F4EFE6] text-[#1C1F22] border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[#C8361D] font-sans font-bold text-xs tracking-[0.2em] uppercase block mb-3">
              PORTFÓLIO DE PROJETOS
            </span>
            <h2 
              className="font-sans font-extrabold uppercase text-3xl md:text-5xl leading-tight tracking-tight mb-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Modelos de Toldos e Coberturas
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Confira imagens ilustrativas de toldos comerciais e coberturas corporativas para Curitiba e Região Metropolitana.
            </p>
          </div>
          
          {/* Prova concreta rápida */}
          <div className="bg-white border border-border p-4 rounded-[2px] shrink-0 text-left font-sans text-xs max-w-xs self-start lg:self-auto">
            <span className="text-[#C8361D] font-bold block mb-1">PROJETADO SOB MEDIDA</span>
            Lonas nacionais e importadas com garantia formal contra desbotamento.
          </div>
        </div>

        {/* Segmented Filter Buttons (Interactive controls conforming to Exception) */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center lg:justify-start">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-[2px] transition-all duration-150 cursor-pointer ${
                selectedCategory === category.id 
                  ? "bg-[#C8361D] text-white shadow-sm" 
                  : "bg-white text-[#1C1F22] border border-border hover:bg-gray-50"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white border border-border overflow-hidden rounded-[2px] group relative"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 text-left bg-white border-t border-border">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C8361D] mb-1.5 block">
                  {item.category === "fachadas" ? "FACHADA" : item.category === "retrateis" ? "RETRÁTIL" : item.category === "coberturas" ? "COBERTURA" : "CORTINA"}
                </span>
                <h3 
                  className="text-lg font-bold text-[#1C1F22] uppercase tracking-wide mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="bg-[#1C1F22] text-[#F4EFE6] rounded-[2px] p-8 md:p-12 border border-white/10 text-center">
          <h3 
            className="text-2xl md:text-4xl font-extrabold uppercase mb-3 text-[#F4EFE6]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Sua Empresa Merece Uma Fachada de Destaque
          </h3>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8">
            Fabricamos toldos sob medida na cor exata da identidade visual do seu comércio, restaurante ou clínica, com materiais de alta resistência e excelente acabamento.
          </p>
          <button 
            onClick={handleWhatsApp}
            className="bg-[#C8361D] hover:bg-[#C8361D]/90 text-white font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-[2px] transition-all cursor-pointer"
          >
            Solicitar Projeto Grátis
          </button>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
