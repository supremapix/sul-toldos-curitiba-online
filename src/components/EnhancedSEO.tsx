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
  ogImage = "https://sultoldos.app.br/opengraph-sultoldos.jpg", 
  structuredData,
  location,
  service = "toldos",
  isHomePage = false
}: EnhancedSEOProps) => {
  
  // Schema padrão da empresa
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://sultoldos.app.br/#organization",
    "name": "Sul Toldos",
    "alternateName": "Sul Toldos Curitiba",
    "description": "Especialista em toldos, coberturas e policarbonato em Curitiba e região metropolitana",
    "url": "https://sultoldos.app.br",
    "telephone": ["+554135646943", "+5541998121324"],
    "email": "contato@sultoldos.com.br",
    "foundingDate": "2008",
    "priceRange": "$$",
    "currenciesAccepted": "BRL",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
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
      "streetAddress": "Rua Exemplo, 123",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "postalCode": "80000-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-25.4284",
      "longitude": "-49.2733"
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
      "name": "Serviços de Toldos e Coberturas",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Toldos Residenciais",
            "description": "Instalação de toldos para residências"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Toldos Comerciais",
            "description": "Toldos para estabelecimentos comerciais"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Coberturas em Policarbonato",
            "description": "Coberturas translúcidas em policarbonato"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Toldos Retráteis",
            "description": "Toldos automatizados e manuais retráteis"
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
      "https://www.facebook.com/sultoldos",
      "https://www.instagram.com/sultoldos", 
      "https://wa.me/5541998121324"
    ]
  };

  // Website Schema para a home
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://sultoldos.app.br/#website",
    "url": "https://sultoldos.app.br",
    "name": "Sul Toldos",
    "description": "Especialista em toldos, coberturas e policarbonato em Curitiba",
    "publisher": {
      "@id": "https://sultoldos.app.br/#organization"
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://sultoldos.app.br/search?q={search_term_string}"
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
        "name": "Quanto custa instalar um toldo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O preço de um toldo varia conforme o tamanho, material e tipo. Fazemos orçamento gratuito com visita técnica. Entre em contato pelo WhatsApp (41) 99812-1324 para receber um orçamento personalizado."
        }
      },
      {
        "@type": "Question", 
        "name": "Qual a garantia dos toldos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oferecemos até 5 anos de garantia em estruturas metálicas e 2 anos em toldos retráteis. Todos os materiais possuem garantia contra defeitos de fabricação."
        }
      },
      {
        "@type": "Question",
        "name": "Atendem toda Curitiba?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Sim, atendemos Curitiba e toda região metropolitana, incluindo São José dos Pinhais, Pinhais, Colombo e demais cidades da RMC."
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
      <meta name="author" content="Sul Toldos" />
      <meta name="language" content="pt-BR" />
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Curitiba" />
      <meta name="ICBM" content="-25.4284, -49.2733" />
      
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
      <meta property="og:site_name" content="Sul Toldos" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="business:contact_data:street_address" content="Curitiba" />
      <meta property="business:contact_data:locality" content="Curitiba" />
      <meta property="business:contact_data:region" content="PR" />
      <meta property="business:contact_data:postal_code" content="80000-000" />
      <meta property="business:contact_data:country_name" content="Brasil" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags for Local SEO */}
      {location && <meta name="geo.position" content="-25.4284;-49.2733" />}
      {location && <meta name="NUTS" content="BR-PR" />}
      
      {/* Resource Hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//connect.facebook.net" />
      <link rel="dns-prefetch" href="//wa.me" />
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Critical CSS for above-the-fold content */}
      <style type="text/css">{`
        :root {
          --primary: 0 84% 60%;
          --primary-foreground: 0 0% 100%;
          --background: 0 0% 5%;
          --foreground: 0 0% 98%;
        }
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: hsl(var(--foreground));
          background: hsl(var(--background));
        }
        .hero-section {
          min-height: 60vh;
          display: flex;
          align-items: center;
        }
        @media (max-width: 768px) {
          .hero-section { min-height: 50vh; }
        }
      `}</style>
      
      {/* Font Optimization */}
      <link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" />
      
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
      <meta name="theme-color" content="hsl(142, 86%, 28%)" />
      
      {/* Alternate languages */}
      <link rel="alternate" hrefLang="pt-BR" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />
    </Helmet>
  );
};

export default EnhancedSEO;