import { Heart, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logoSulToldos from "@/assets/logo-sul-toldos.png";

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
    "Água Verde", "Ahú", "Alto Boqueirão", "Alto da Glória", "Atuba",
    "Bacacheri", "Bairro Alto", "Barreirinha", "Batel", "Bigorrilho",
    "Boa Vista", "Bom Retiro", "Boqueirão", "Butiatuvinha", "Cabral",
    "Cajuru", "Campina do Siqueira", "Campo Comprido", "Capão da Imbuia",
    "Capão Raso", "Centro", "CIC", "Cristo Rei", "Ecoville", "Fanny",
    "Fazendinha", "Guabirotuba", "Guaíra", "Hauer", "Hugo Lange",
    "Jardim Botânico", "Jardim das Américas", "Juvevê", "Lindóia", "Mercês",
    "Mossunguê", "Novo Mundo", "Parolin", "Pilarzinho", "Pinheirinho", "Portão",
    "Rebouças", "Santa Cândida", "Santa Felicidade", "Santa Quitéria",
    "Santo Inácio", "São Braz", "São Francisco", "Seminário", "Sítio Cercado",
    "Tarumã", "Tatuquara", "Tingui", "Uberaba", "Umbará", "Vista Alegre", "Xaxim"
  ];

  const slugify = (text: string) =>
    text.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/ç/g, 'c').replace(/ã/g, 'a').replace(/á/g, 'a')
      .replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u')
      .replace(/ê/g, 'e').replace(/â/g, 'a').replace(/ô/g, 'o');

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company with Logo */}
          <div className="text-center md:text-left">
            <div className="mb-4 flex justify-center md:justify-start">
              <img
                src={logoSulToldos}
                alt="Sul Toldos Logo"
                className="h-40 md:h-44 w-auto max-w-full object-contain drop-shadow-lg"
              />
            </div>
            <p className="text-base text-muted-foreground mb-6">
              Especialista em toldos e coberturas em Curitiba e região metropolitana. Mais de 15 anos de experiência.
            </p>
            <div className="space-y-3 text-base">
              <a href="tel:+554135646943" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" /> (41) 3564-6943
              </a>
              <a href="https://wa.me/5541998121324" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" /> (41) 99812-1324
              </a>
              <a href="mailto:contato@sultoldos.com.br" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" /> contato@sultoldos.com.br
              </a>
              <a href="https://www.google.com/maps/search/Sul+Toldos+Curitiba" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" /> Curitiba - PR
              </a>
            </div>
          </div>

          {/* Services & Links */}
          <div>
            <h4 className="text-xl font-semibold text-foreground mb-4">Navegação</h4>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li><a href="/#services" className="hover:text-primary transition-colors">• Serviços</a></li>
              <li><a href="/#gallery" className="hover:text-primary transition-colors">• Galeria</a></li>
              <li><a href="/#calculator" className="hover:text-primary transition-colors">• Calcular Preço</a></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors font-semibold text-primary">• Perguntas Frequentes (FAQ)</Link></li>
              <li><a href="/#about" className="hover:text-primary transition-colors">• Sobre Nós</a></li>
              <li><a href="/#contact" className="hover:text-primary transition-colors">• Contato</a></li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="text-xl font-semibold text-foreground mb-4">Cidades Atendidas</h4>
            <div className="max-h-56 overflow-y-auto pr-2">
              <ul className="space-y-1 text-sm text-muted-foreground">
                {cities.map((city, i) => (
                  <li key={i}>
                    <Link to={`/cidade/${slugify(city)}`} className="hover:text-primary transition-colors">
                      {city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Neighborhoods */}
          <div>
            <h4 className="text-xl font-semibold text-foreground mb-4">Bairros de Curitiba</h4>
            <div className="max-h-56 overflow-y-auto pr-2">
              <ul className="space-y-1 text-sm text-muted-foreground">
                {curitibaBairros.map((bairro, i) => (
                  <li key={i}>
                    <Link to={`/bairro/${slugify(bairro)}`} className="hover:text-primary transition-colors">
                      {bairro}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base text-muted-foreground">
              © 2025 Sul Toldos. Todos os direitos reservados.
            </p>
            <div className="flex items-center text-base text-muted-foreground">
              <span>Desenvolvido com</span>
              <Heart className="w-4 h-4 text-primary mx-1" />
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
