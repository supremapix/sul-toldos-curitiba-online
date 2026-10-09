import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const NavigationSection = () => {
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
    <section id="navigation" className="py-20 bg-[#F4EFE6] text-[#1C1F22] border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C8361D] font-sans font-bold text-xs tracking-[0.2em] uppercase block mb-3">
            COBERTURA DE ATENDIMENTO
          </span>
          <h2 
            className="font-sans font-extrabold uppercase text-3xl md:text-5xl leading-tight tracking-tight mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Atendimento em Curitiba e Região Metropolitana
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Selecione a sua cidade ou o seu bairro em Curitiba para obter informações personalizadas sobre visitas técnicas e projetos de toldos comerciais.
          </p>
        </div>

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
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-h-80 overflow-y-auto pr-2 border-t border-gray-100 pt-4">
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
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-h-80 overflow-y-auto pr-2 border-t border-gray-100 pt-4">
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
  );
};

export default NavigationSection;