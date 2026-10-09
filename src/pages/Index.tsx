import EnhancedSEO from "@/components/EnhancedSEO";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Segments } from "@/components/Segments";
import About from "@/components/About";
import InfiniteGallery from "@/components/InfiniteGallery";
import NavigationSection from "@/components/NavigationSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import FaqHomeSection from "@/components/FaqHomeSection";
import YouTubeVideo from "@/components/YouTubeVideo";
import FloatingButtons from "@/components/FloatingButtons";
import AwningCalculator from "@/components/AwningCalculator";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Toldos Comerciais Curitiba",
    "description": "Especialista em toldos comerciais, coberturas em policarbonato e lonas personalizadas em Curitiba e região metropolitana a partir de R$ 220/m².",
    "url": "https://toldoscomerciaiscuritiba.com.br",
    "telephone": ["+554135646943", "+5541995304757", "+5541991031466"],
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
        description="Toldos Comerciais Curitiba - Toldos para lojas, restaurantes e comércios a partir de R$ 220/m². Policarbonato, toldos retráteis, coberturas comerciais. Orçamento grátis! ☎️ (41) 3564-6943."
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
        <Segments />
        <InfiniteGallery />
        <AwningCalculator />
        <YouTubeVideo 
          title="Toldos Comerciais Curitiba — Projetos de Destaque"
          subtitle="Conheça a qualidade dos nossos serviços de toldos comerciais, coberturas e policarbonato em Curitiba e região"
          location="Curitiba"
        />
        <About />
        <NavigationSection />
        <FaqHomeSection />
        <FAQ />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default Index;
