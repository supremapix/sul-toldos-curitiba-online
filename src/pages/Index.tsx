import EnhancedSEO from "@/components/EnhancedSEO";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import NavigationSection from "@/components/NavigationSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import YouTubeVideo from "@/components/YouTubeVideo";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sul Toldos",
    "description": "Especialista em toldos, coberturas e policarbonato em Curitiba",
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
        title="Sul Toldos - Toldos em Curitiba | Policarbonato | Orçamento Grátis"
        description="Sul Toldos - Especialista em toldos, coberturas e policarbonato em Curitiba e região metropolitana. Orçamento grátis! Visita técnica sem compromisso. Mais de 15 anos de experiência. ☎️ (41) 3564-6943"
        keywords="toldos curitiba, toldo curitiba, policarbonato curitiba, coberturas curitiba, toldos retráteis, sul toldos, toldos em lona, toldo residencial, toldo comercial, orçamento grátis toldos, toldos região metropolitana curitiba, toldo são josé dos pinhais, toldo pinhais, toldo colombo, toldos água verde, toldos batel, toldos centro, toldos cajuru, toldos portão"
        canonical="https://sultoldos.app.br/"
        structuredData={structuredData}
        isHomePage={true}
        location="Curitiba"
        service="toldos e coberturas"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Services />
        <YouTubeVideo 
          title="Conheça a Sul Toldos"
          subtitle="Veja como trabalhamos e a qualidade dos nossos serviços de toldos, coberturas e policarbonato"
          ctaText="💬 Solicitar Orçamento no WhatsApp"
        />
        <About />
        <Gallery />
        <NavigationSection />
        <FAQ />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default Index;
