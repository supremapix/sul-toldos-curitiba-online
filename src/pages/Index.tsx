import { useEffect } from "react";
import EnhancedSEO from "@/components/EnhancedSEO";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Segments } from "@/components/Segments";
import About from "@/components/About";
import InfiniteGallery from "@/components/InfiniteGallery";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import FaqHomeSection from "@/components/FaqHomeSection";
import FloatingButtons from "@/components/FloatingButtons";
import AwningCalculator from "@/components/AwningCalculator";

const tornimecServicesHtml = "<section id=\"servicos-tornimec\" aria-labelledby=\"tornimec-title\" class=\"tornimec-section\"><style>.tornimec-section{padding:64px 24px;background:#f1f5ef;color:#173c31}.tornimec-inner{max-width:1180px;margin:auto}.tornimec-section h2{font-size:clamp(28px,4vw,42px);line-height:1.15;margin:8px 0 16px}.tornimec-intro{max-width:680px;line-height:1.6}.tornimec-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px;margin-top:28px}.tornimec-card{background:white;border:1px solid #c9d7c8;border-radius:16px;padding:24px;display:flex;flex-direction:column;gap:14px;min-width:0}.tornimec-card:first-child{border:2px solid #237455}.tornimec-card h3{font-size:23px;line-height:1.2;margin:0}.tornimec-card p{font-size:16px;line-height:1.5;margin:0}.tornimec-badge{font-size:12px;text-transform:uppercase;font-weight:700;color:#237455}.tornimec-card a{display:flex;align-items:center;justify-content:center;text-align:center;min-height:48px;margin-top:auto;padding:12px 14px;border-radius:10px;background:#176b4d;color:white;text-decoration:none;font-size:15px;font-weight:700;line-height:1.4}.tornimec-card a:focus-visible{outline:3px solid #d19225;outline-offset:3px}.tornimec-note{margin-top:20px;font-size:14px;line-height:1.6}@media(max-width:950px){.tornimec-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:540px){.tornimec-section{padding:44px 18px}.tornimec-grid{grid-template-columns:1fr}}</style><div class=\"tornimec-inner\"><p class=\"tornimec-badge\">Produtos e serviços Tornimec</p><h2 id=\"tornimec-title\">Mais opções para o seu projeto</h2><p class=\"tornimec-intro\">Sombreiros, lona, policarbonato e telha sanduíche. Escolha o serviço para conversar diretamente com a Tornimec.</p><div class=\"tornimec-grid\"><article class=\"tornimec-card\" data-tornimec-service=\"Sombreiros\"><span class=\"tornimec-badge\">Destaque</span><h3>Sombreiros</h3><p>Consulte modelos e opções de sombreiros com a Tornimec.</p><a data-tornimec-contact=\"Sombreiros\" href=\"https://wa.me/5541984877344?text=Ol%C3%A1%20vi%20no%20seu%20site%20feitos%20pela%20suprema%20o%20servi%C3%A7o%20Sombreiros\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Consultar Sombreiros com a Tornimec pelo WhatsApp\">Consultar Sombreiros</a></article><article class=\"tornimec-card\" data-tornimec-service=\"Lona\"><h3>Lona</h3><p>Converse sobre seu projeto em lona e consulte as opções disponíveis.</p><a data-tornimec-contact=\"Lona\" href=\"https://wa.me/5541984877344?text=Ol%C3%A1%20vi%20no%20seu%20site%20feitos%20pela%20suprema%20o%20servi%C3%A7o%20Lona\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Consultar Lona com a Tornimec pelo WhatsApp\">Consultar Lona</a></article><article class=\"tornimec-card\" data-tornimec-service=\"Policarbonato\"><h3>Policarbonato</h3><p>Consulte a Tornimec sobre coberturas em policarbonato.</p><a data-tornimec-contact=\"Policarbonato\" href=\"https://wa.me/5541984877344?text=Ol%C3%A1%20vi%20no%20seu%20site%20feitos%20pela%20suprema%20o%20servi%C3%A7o%20Policarbonato\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Consultar Policarbonato com a Tornimec pelo WhatsApp\">Consultar Policarbonato</a></article><article class=\"tornimec-card\" data-tornimec-service=\"Telha sanduíche\"><h3>Telha sanduíche</h3><p>Informe sua necessidade e consulte opções em telha sanduíche.</p><a data-tornimec-contact=\"Telha sanduíche\" href=\"https://wa.me/5541984877344?text=Ol%C3%A1%20vi%20no%20seu%20site%20feitos%20pela%20suprema%20o%20servi%C3%A7o%20Telha%20sandu%C3%ADche\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Consultar Telha sanduíche com a Tornimec pelo WhatsApp\">Consultar Telha sanduíche</a></article></div><p class=\"tornimec-note\">Atendimento Tornimec: (41) 98487-7344. Consulte medidas, materiais, disponibilidade e condições diretamente no atendimento.</p></div></section>";

const Index = () => {
  useEffect(() => {
    // Verificamos prefers-reduced-motion antes de iniciar animações
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.08 });

    // Observa todas as seções/cards com reveal-on-scroll
    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Toldos Comerciais Curitiba",
    "description": "Especialista em toldos comerciais, coberturas em policarbonato e lonas personalizadas em Curitiba e região metropolitana a partir de R$ 220/m².",
    "url": "https://toldoscomerciaiscuritiba.com.br",
    "telephone": ["+5541998000366"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Mandirituba, 1875",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "postalCode": "81925-540",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-25.4372",
      "longitude": "-49.2692"
    },
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 08:00-12:00"
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-25.4372",
        "longitude": "-49.2692"
      },
      "geoRadius": "50000"
    }
  };

  return (
    <>
      <EnhancedSEO
        title="Toldos Comerciais Curitiba | Toldos a partir de R$ 220/m² | Orçamento Grátis"
        description="Toldos Comerciais Curitiba - Toldos para lojas, restaurantes e comércios a partir de R$ 220/m². Policarbonato, toldos retráteis, coberturas comerciais. Orçamento grátis! ☎️ (41) 99800-0366."
        keywords="toldos comerciais curitiba, toldo para loja curitiba, toldo para restaurante curitiba, policarbonato curitiba, coberturas curitiba, toldos retráteis curitiba, toldo preço m2, toldos comerciais, cobertura estacionamento, cortina rolo comercial, toldo lona comercial, orçamento grátis toldos"
        canonical="https://toldoscomerciaiscuritiba.com.br/"
        structuredData={structuredData}
        isHomePage={true}
        location="Curitiba"
        service="toldos comerciais e coberturas"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />
        <Hero />
        <Services />
        <div dangerouslySetInnerHTML={{ __html: tornimecServicesHtml }} />
        <Segments />
        <InfiniteGallery />
        <AwningCalculator />
        <About />
        <FaqHomeSection />
        <FAQ />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default Index;
