import EnhancedSEO from "@/components/EnhancedSEO";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import InfiniteGallery from "@/components/InfiniteGallery";
import NavigationSection from "@/components/NavigationSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import YouTubeVideo from "@/components/YouTubeVideo";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sul Toldos",
    "description": "Especialista em toldos, coberturas e policarbonato em Curitiba e região metropolitana. Preços a partir de R$ 120/m².",
    "url": "https://sultoldos.app.br",
    "telephone": "+554135646943",
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
        title="Sul Toldos Curitiba | Toldos a partir de R$ 120/m² | Orçamento Grátis"
        description="Sul Toldos - Toldos em Curitiba a partir de R$ 120/m². Policarbonato, toldos retráteis, coberturas comerciais e residenciais. Orçamento grátis! ☎️ (41) 3564-6943. Atendemos toda região metropolitana."
        keywords="toldos curitiba, toldo curitiba preço, policarbonato curitiba, coberturas curitiba, toldos retráteis curitiba, toldo preço m2, sul toldos, toldo residencial, toldo comercial, cobertura garagem, cortina rolo, toldo lona, orçamento grátis toldos"
        canonical="https://sultoldos.app.br/"
        structuredData={structuredData}
        isHomePage={true}
        location="Curitiba"
        service="toldos e coberturas"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />
        <Hero />
        <Services />
        <InfiniteGallery />
        <YouTubeVideo 
          title="Conheça a Sul Toldos"
          subtitle="Veja como trabalhamos e a qualidade dos nossos serviços de toldos, coberturas e policarbonato"
          ctaText="💬 Solicitar Orçamento no WhatsApp"
        />
        <About />
        <NavigationSection />
        <FAQ />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default Index;
