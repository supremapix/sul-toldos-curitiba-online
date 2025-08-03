import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
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
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Sul Toldos</h3>
            <p className="text-muted-foreground mb-4">
              Especialista em toldos, coberturas e policarbonato em Curitiba e região metropolitana.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📞 (41) 3564-6943</p>
              <p>📱 (41) 99812-1324</p>
              <p>✉️ contato@sultoldos.com.br</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Toldos em Lona</li>
              <li>Toldos Retráteis</li>
              <li>Coberturas em Policarbonato</li>
              <li>Toldos Comerciais</li>
              <li>Manutenção e Reparo</li>
              <li>Projetos Personalizados</li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Cidades Atendidas</h4>
            <div className="max-h-48 overflow-y-auto">
              <ul className="space-y-1 text-xs text-muted-foreground">
                {cities.map((city, index) => (
                  <li key={index}>
                    <Link 
                      to={`/city/${city.toLowerCase().replace(/\s+/g, '-')}`}
                      className="hover:text-primary transition-colors"
                    >
                      {city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Curitiba Neighborhoods */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Bairros de Curitiba</h4>
            <div className="max-h-48 overflow-y-auto">
              <ul className="space-y-1 text-xs text-muted-foreground">
                {curitibaBairros.slice(0, 20).map((bairro, index) => (
                  <li key={index}>
                    <Link 
                      to={`/bairro/${bairro.toLowerCase().replace(/\s+/g, '-')}`}
                      className="hover:text-primary transition-colors"
                    >
                      {bairro}
                    </Link>
                  </li>
                ))}
                <li className="text-primary text-xs">
                  <Link 
                    to="/bairros" 
                    className="hover:text-primary/80 transition-colors"
                  >
                    + outros bairros
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 Sul Toldos. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Desenvolvido com</span>
              <Heart className="w-4 h-4 text-primary mx-1 animate-heartbeat" />
              <span>pela</span>
              <a 
                href="https://www.supremamidia.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-1 text-primary hover:text-primary/80 transition-colors font-semibold"
              >
                Suprema Mídia
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;