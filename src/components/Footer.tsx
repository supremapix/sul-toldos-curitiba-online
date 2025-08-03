import { Heart } from "lucide-react";

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
    "Água Verde", "Ahú", "Alto Boqueirão", "Alto da Glória", "Alto da XV",
    "Bacacheri", "Bairro Alto", "Barreirinha", "Batel", "Bigorrilho",
    "Boa Vista", "Bom Retiro", "Boqueirão", "Butiatuvinha", "Cabral",
    "Cajuru", "Campina do Siqueira", "Campo Comprido", "Campo de Santana", "Capão da Imbuia",
    "Capão Raso", "Centro", "Centro Cívico", "Cidade Industrial", "Cristo Rei",
    "Fanny", "Fazendinha", "Guabirotuba", "Guaíra", "Hauer",
    "Hugo Lange", "Jardim Botânico", "Jardim das Américas", "Jardim Social", "Juvevê",
    "Lindóia", "Mercês", "Mossunguê", "Novo Mundo", "Orleans",
    "Parolin", "Pilarzinho", "Pinheirinho", "Portão", "Prado Velho",
    "Rebouças", "Riviera", "Santa Cândida", "Santa Felicidade", "Santa Quitéria",
    "Santo Inácio", "São Braz", "São Francisco", "São João", "São Lourenço",
    "Seminário", "Sítio Cercado", "Taboão", "Tarumã", "Tingui",
    "Uberaba", "Umbará", "Vila Izabel", "Vista Alegre", "Xaxim"
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
                  <li key={index}>{city}</li>
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
                  <li key={index}>{bairro}</li>
                ))}
                <li className="text-primary text-xs">+ outros bairros</li>
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