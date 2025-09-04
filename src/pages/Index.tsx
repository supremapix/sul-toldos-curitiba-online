import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sul Toldos - Toldos em Curitiba | Policarbonato | Orçamento Grátis</title>
        <meta name="description" content="Sul Toldos - Especialista em toldos, coberturas e policarbonato em Curitiba. Orçamento grátis! ☎️ (41) 3564-6943 | (41) 99812-1324. Atendemos toda região metropolitana." />
        <meta name="google-site-verification" content="lgYcffKOD4dT19opiSFHCEbV7Q39Jjq6J7mxqejem5M" />
        <meta name="keywords" content="toldos curitiba, toldo, policarbonato, cobertura, toldos retráteis, toldos em lona, sul toldos, curitiba" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Sul Toldos - Toldos em Curitiba | Policarbonato | Orçamento Grátis" />
        <meta property="og:description" content="Especialista em toldos, coberturas e policarbonato em Curitiba. Orçamento grátis! Atendemos toda região metropolitana." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sultoldos.app.br" />
        <link rel="canonical" href="https://sultoldos.app.br" />
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Services />
        <About />
        <Gallery />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default Index;
