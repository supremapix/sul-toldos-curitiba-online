import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SitemapPage = () => {
  const cities = [
    "Curitiba", "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Araucária",
    "Balsa Nova", "Bocaiúva do Sul", "Campina Grande do Sul", "Campo do Tenente",
    "Campo Largo", "Campo Magro", "Cerro Azul", "Colombo", "Contenda",
    "Doutor Ulysses", "Fazenda Rio Grande", "Itaperuçu", "Lapa", "Mandirituba",
    "Piên", "Pinhais", "Piraquara", "Quatro Barras", "Quitandinha",
    "Rio Branco do Sul", "Rio Negro", "São José dos Pinhais", "Tijucas do Sul", "Tunas do Paraná"
  ];

  const curitibaBairros = [
    "Abranches de Baixo", "Abranches de Cima", "Água Verde", "Ahú", "Alto Boqueirão", 
    "Alto da Glória", "Alto da Rua XV", "Alto da XV", "Atuba", "Augusta",
    "Bacacheri", "Bairro Alto", "Barreirinha", "Batel", "Batel Soho",
    "Bigorrilho", "Boa Vista", "Bom Retiro", "Boqueirão", "Boqueirão de Baixo", 
    "Boqueirão de Cima", "Butiatuvinha", "Cabral", "Cachoeira", "Cajuru",
    "Campina do Siqueira", "Campo Comprido", "Campo de Santana", "Capão da Imbuia",
    "Capão Raso", "Carmo Abranches", "Cascatinha", "Caximba", "Centro", 
    "Centro Cívico", "Centro Histórico", "CIC Central", "CIC Norte", "CIC Sul",
    "Cidade Industrial de Curitiba", "Cristo Rei", "Ecoville", "Fanny", "Fazendinha",
    "Ganchinho", "Guabirotuba", "Guaíra", "Hauer", "Hugo Lange",
    "Jardim Botânico", "Jardim das Américas", "Jardim Schaffer", "Jardim Social", "Juvevê",
    "Lamenha Pequena", "Lindóia", "Mercês", "Mossunguê", "Novo Mundo",
    "Orleans", "Parolin", "Pilarzinho", "Pinheirinho", "Portão", 
    "Prado Velho", "Rebouças", "Riviera", "Santa Cândida", "Santa Felicidade",
    "Santa Quitéria", "Santo Inácio", "São Braz", "São Francisco", "São João",
    "São Lourenço", "São Miguel", "Seminário", "Sítio Cercado", "Taboão",
    "Tanguá", "Tarumã", "Tatuquara", "Tingui", "Uberaba", "Umbará",
    "Vila Fanny", "Vila Guaíra", "Vila Hauer", "Vila Izabel", "Vila Nossa Senhora da Luz",
    "Vila Oficinas", "Vila Pantanal", "Vila Parolin", "Vila Sabará", "Vila Tecnológica",
    "Vila Torres", "Vila Zumbi", "Vista Alegre", "Xaxim"
  ];

  const slugify = (text: string) =>
    text.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/ç/g, 'c').replace(/ã/g, 'a').replace(/á/g, 'a')
      .replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u')
      .replace(/ê/g, 'e').replace(/â/g, 'a').replace(/ô/g, 'o');

  return (
    <>
      <Helmet>
        <title>Mapa do Site — Todas as Localidades Atendidas | Toldos Comerciais Curitiba</title>
        <meta name="description" content="Lista completa de cidades e bairros de Curitiba atendidos pela Toldos Comerciais Curitiba. Encontre seu bairro para orçamentos e visitas técnicas." />
        <link rel="canonical" href="https://toldoscomerciaiscuritiba.com.br/mapa-do-site" />
      </Helmet>

      <div className="min-h-screen bg-[#F4EFE6] text-[#1C1F22]">
        <Header />
        <FloatingButtons />

        <div className="py-20 bg-[#1C1F22] text-[#F4EFE6] border-b border-border">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <span className="inline-block bg-[#F2B705] text-[#1C1F22] font-sans font-extrabold text-[10px] md:text-xs tracking-[0.2em] uppercase px-3 py-1.5 mb-6 rounded-[2px]">
              DIRETÓRIO DE LOCALIDADES
            </span>
            <h1 
              className="text-4xl md:text-6xl font-extrabold uppercase leading-tight tracking-tight mb-4 text-[#F4EFE6]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Mapa do Site — Cidades e Bairros Atendidos
            </h1>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Consulte abaixo todas as cidades da Região Metropolitana de Curitiba e todos os bairros da capital atendidos com projetos sob medida, instalação ágil e visita técnica gratuita.
            </p>
          </div>
        </div>

        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Cities Card */}
              <Card className="h-fit bg-white border border-border rounded-[2px] shadow-none">
                <CardHeader className="p-6 pb-4">
                  <CardTitle 
                    className="text-2xl font-extrabold uppercase text-[#C8361D]"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Cidades Atendidas
                  </CardTitle>
                  <CardDescription className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    Cidades da região metropolitana de Curitiba com visitas gratuitas
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-h-[500px] overflow-y-auto pr-2 border-t border-gray-100 pt-4">
                    {cities.map((city, index) => (
                      <Link
                        key={index}
                        to={`/cidade/${slugify(city)}`}
                        className="text-xs text-gray-600 hover:text-[#C8361D] transition-colors p-2 rounded-[2px] hover:bg-gray-50 block font-medium"
                      >
                        • {city}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Neighborhoods Card */}
              <Card className="h-fit bg-white border border-border rounded-[2px] shadow-none">
                <CardHeader className="p-6 pb-4">
                  <CardTitle 
                    className="text-2xl font-extrabold uppercase text-[#C8361D]"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Bairros de Curitiba
                  </CardTitle>
                  <CardDescription className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    Projetos comerciais de toldos em todos os bairros da capital
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-h-[500px] overflow-y-auto pr-2 border-t border-gray-100 pt-4">
                    {curitibaBairros.map((bairro, index) => (
                      <Link
                        key={index}
                        to={`/bairro/${slugify(bairro)}`}
                        className="text-xs text-gray-600 hover:text-[#C8361D] transition-colors p-2 rounded-[2px] hover:bg-gray-50 block font-medium"
                      >
                        • {bairro}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SitemapPage;
