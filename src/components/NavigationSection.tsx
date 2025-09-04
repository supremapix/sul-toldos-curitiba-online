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

  return (
    <section id="navigation" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Atendemos Toda a Região Metropolitana
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Encontre os nossos serviços de toldos e coberturas na sua cidade ou bairro
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Cities Card */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Cidades Atendidas</CardTitle>
              <CardDescription>
                Clique na sua cidade para ver informações específicas sobre nossos serviços
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-96 overflow-y-auto">
                {cities.map((city, index) => (
                  <Link
                    key={index}
                    to={`/cidade/${city.toLowerCase().replace(/\s+/g, '-').replace(/ç/g, 'c').replace(/ã/g, 'a').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u')}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-accent block"
                  >
                    {city}
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Neighborhoods Card */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Bairros de Curitiba</CardTitle>
              <CardDescription>
                Clique no seu bairro para informações personalizadas sobre toldos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-96 overflow-y-auto">
                {curitibaBairros.map((bairro, index) => (
                  <Link
                    key={index}
                    to={`/bairro/${bairro.toLowerCase().replace(/\s+/g, '-').replace(/ç/g, 'c').replace(/ã/g, 'a').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u')}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-accent block"
                  >
                    {bairro}
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