import ProjectGuide from '@/components/ProjectGuide';
import TornimecServices from '@/components/TornimecServices';
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

  const structuredData = {"@context":"https://schema.org","@type":"Service","name":"Toldos e coberturas em Curitiba","provider":{"@id":"https://www.sultoldos.app.br/#organization"},"areaServed":"Curitiba e região metropolitana"};

  return (
    <>
      <EnhancedSEO
        title="Toldos em Curitiba | Sul Toldos · Coberturas sob medida"
        description="Toldos Comerciais Curitiba - Toldos para lojas, restaurantes e comércios a partir de R$ 220/m². Policarbonato, toldos retráteis, coberturas comerciais. Orçamento grátis! ☎️ (41) 99800-0366."
        keywords="toldos comerciais curitiba, toldo para loja curitiba, toldo para restaurante curitiba, policarbonato curitiba, coberturas curitiba, toldos retráteis curitiba, toldo preço m2, toldos comerciais, cobertura estacionamento, cortina rolo comercial, toldo lona comercial, orçamento grátis toldos"
        canonical="https://www.sultoldos.app.br/"
        structuredData={structuredData}
        isHomePage={true}
        location="Curitiba"
        service="toldos comerciais e coberturas"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />
        <Hero />
        <ProjectGuide />
        <Services />
        <TornimecServices />
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
