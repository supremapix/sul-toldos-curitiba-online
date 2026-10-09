import { Helmet } from "react-helmet-async";

interface EnhancedSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical: string;
  ogImage?: string;
  structuredData?: object;
  location?: string;
  service?: string;
  isHomePage?: boolean;
}

const EnhancedSEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage = "https://toldoscomerciaiscuritiba.com.br/opengraph-toldoscomerciais.jpg", 
  structuredData,
  location,
  service = "toldos comerciais",
  isHomePage = false
}: EnhancedSEOProps) => {
  
  // Schema padrão da empresa
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://toldoscomerciaiscuritiba.com.br/#organization",
    "name": "Toldos Comerciais Curitiba",
    "alternateName": "Toldos Comerciais Curitiba - Fabricação e Instalação",
    "description": "Especialista em toldos comerciais, coberturas em policarbonato e lona com logomarca para comércios, lojas, galpões e indústrias em Curitiba e RMC.",
    "url": "https://toldoscomerciaiscuritiba.com.br",
    "telephone": ["+554135646943", "+5541995304757", "+5541991031466"],
    "email": "contato@toldoscomerciaiscuritiba.com.br",
    "foundingDate": "2010",
    "priceRange": "$$",
    "currenciesAccepted": "BRL",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer, PIX",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification", 
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Catálogo de Serviços de Toldos e Coberturas Comerciais",
      "itemListElement": [
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Toldos de Fachada para Lojas",
            "description": "Toldos fixos e capotas personalizados com impressão digital de logotipo para comércio."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Coberturas em Policarbonato",
            "description": "Coberturas de alta resistência em policarbonato alveolar e compacto para áreas comerciais."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Toldos Retráteis de Braços Articulados",
            "description": "Sistemas de toldo retrátil manual e motorizado de alta performance para restaurantes, bares e cafés."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Troca de Lona e Manutenção Comercial",
            "description": "Troca de lona vinílica ou acrílica sob medida mantendo a ferragem original do toldo."
          }
        }
      ]
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Curitiba",
        "containedIn": {
          "@type": "State",
          "name": "Paraná"
        }
      },
      {
        "@type": "City", 
        "name": "São José dos Pinhais"
      },
      {
        "@type": "City",
        "name": "Pinhais" 
      },
      {
        "@type": "City",
        "name": "Colombo"
      }
    ],
    "sameAs": [
      "https://wa.me/5541995304757"
    ]
  };

  // Website Schema para a home
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://toldoscomerciaiscuritiba.com.br/#website",
    "url": "https://toldoscomerciaiscuritiba.com.br",
    "name": "Toldos Comerciais Curitiba",
    "description": "Especialista em toldos comerciais, coberturas e policarbonato em Curitiba e RMC",
    "publisher": {
      "@id": "https://toldoscomerciaiscuritiba.com.br/#organization"
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://toldoscomerciaiscuritiba.com.br/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    ]
  };

  // FAQ Schema para a home
  const faqSchema = isHomePage ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quanto custa um toldo comercial por metro quadrado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O preço dos toldos fixos de lona comercial parte de R$ 220/m². Toldos retráteis articulados manuais custam a partir de R$ 250/m² e coberturas em policarbonato alveolar a partir de R$ 240/m². Oferecemos visita técnica de projeto 100% gratuita para medição exata do vão."
        }
      },
      {
        "@type": "Question", 
        "name": "Qual a garantia dos toldos comerciais?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nossos toldos e coberturas contam com garantia registrada por escrito em contrato: até 5 anos para as estruturas de metalon galvanizado, 2 anos para motores automatizados e até 10 anos contra amarelamento das coberturas em policarbonato."
        }
      },
      {
        "@type": "Question",
        "name": "Vocês realizam a instalação fora do horário comercial?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Sim! Para não interferir no fluxo de atendimento e vendas do seu comércio, agendamos a instalação das estruturas metálicas e lonas para finais de semana, período noturno ou feriados, conforme a sua conveniência e sem taxas adicionais."
        }
      }
    ]
  } : null;

  const allSchemas = [
    organizationSchema,
    ...(isHomePage ? [websiteSchema, faqSchema] : []),
    ...(structuredData ? [structuredData] : [])
  ].filter(Boolean);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Toldos Comerciais Curitiba" />
      <meta name="language" content="pt-BR" />
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Curitiba" />
      <meta name="ICBM" content="-25.4372, -49.2692" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Toldos Comerciais Curitiba" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="business:contact_data:street_address" content="Rua Mandirituba, 1875" />
      <meta property="business:contact_data:locality" content="Curitiba" />
      <meta property="business:contact_data:region" content="PR" />
      <meta property="business:contact_data:postal_code" content="81925-540" />
      <meta property="business:contact_data:country_name" content="Brasil" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags for Local SEO */}
      {location && <meta name="geo.position" content="-25.4372;-49.2692" />}
      {location && <meta name="NUTS" content="BR-PR" />}
      
      {/* Resource Hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//wa.me" />
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Critical CSS for above-the-fold content */}
      <style type="text/css">{`
        :root {
          --background: 39 24% 93%; /* #F4EFE6 */
          --foreground: 210 10% 12%; /* #1C1F22 */
          --primary: 348 76% 45%; /* #C8361D */
          --primary-foreground: 0 0% 98%;
        }
        body { 
          font-family: 'Inter', 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.6;
          color: hsl(var(--foreground));
          background: hsl(var(--background));
        }
      `}</style>
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(allSchemas.length === 1 ? allSchemas[0] : { "@graph": allSchemas })}
      </script>
      
      {/* Additional Performance Hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="theme-color" content="#1C1F22" />
      
      {/* Alternate languages */}
      <link rel="alternate" hrefLang="pt-BR" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />
    </Helmet>
  );
};

export default EnhancedSEO;
