import { Heart, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { openWhatsapp } from "@/utils/whatsapp";

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
    <footer className="bg-[#1C1F22] text-[#F4EFE6] border-t border-border">
      {/* Elemento-assinatura: listras do toldo no topo do footer */}
      <div className="stripe-divider-dark w-full"></div>
      
      <div className="container mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company with Logo */}
          <div className="text-left">
            <div className="mb-6">
              <Logo variant="negative" />
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Especialista em toldos comerciais, coberturas de policarbonato, e lonas personalizadas com logotipo para lojas, restaurantes, postos, estacionamentos e condomínios em Curitiba e região metropolitana.
            </p>
            <div className="space-y-3 text-sm text-gray-300">
              <a href="tel:+554135646943" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" /> (41) 3564-6943
              </a>
              <button
                onClick={() => openWhatsapp("Olá, gostaria de solicitar um orçamento para toldos comerciais!")}
                className="flex items-center gap-3 text-left hover:text-primary transition-colors cursor-pointer border-0 bg-transparent p-0 font-normal outline-none text-gray-300"
              >
                <MessageCircle className="w-4 h-4 text-primary flex-shrink-0" /> (41) 99812-1324
              </button>
              <a href="mailto:contato@toldoscomerciaiscuritiba.com.br" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" /> contato@toldoscomerciaiscuritiba.com.br
              </a>
              <span className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" /> Curitiba - PR
              </span>
            </div>
          </div>

          {/* Services & Links */}
          <div>
            <h4 className="text-base font-bold uppercase tracking-wider text-[#F4EFE6] mb-6">Navegação</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="/#services" className="hover:text-primary transition-colors">Serviços Comerciais</a></li>
              <li><a href="/#gallery" className="hover:text-primary transition-colors">Galeria de Projetos</a></li>
              <li><a href="/#calculator" className="hover:text-primary transition-colors">Calcular M²</a></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors text-primary font-medium">Perguntas Frequentes (FAQ)</Link></li>
              <li><a href="/#about" className="hover:text-primary transition-colors">Sobre Nós</a></li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="text-base font-bold uppercase tracking-wider text-[#F4EFE6] mb-6">Cidades Atendidas</h4>
            <div className="max-h-56 overflow-y-auto pr-2 border-r border-border/10">
              <ul className="space-y-2 text-xs text-gray-400">
                {cities.map((city, i) => (
                  <li key={i}>
                    <Link to={`/cidade/${slugify(city)}`} className="hover:text-primary transition-colors block py-0.5">
                      {city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Neighborhoods */}
          <div>
            <h4 className="text-base font-bold uppercase tracking-wider text-[#F4EFE6] mb-6">Bairros de Curitiba</h4>
            <div className="max-h-56 overflow-y-auto pr-2">
              <ul className="space-y-2 text-xs text-gray-400">
                {curitibaBairros.map((bairro, i) => (
                  <li key={i}>
                    <Link to={`/bairro/${slugify(bairro)}`} className="hover:text-primary transition-colors block py-0.5">
                      Toldos {bairro}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © 2025 Toldos Comerciais Curitiba. Todos os direitos reservados.
            </p>
            <div className="flex items-center text-xs text-gray-500">
              <span>Desenvolvido com</span>
              <Heart className="w-3.5 h-3.5 text-primary mx-1" />
              <span>pela</span>
              <a
                href="https://www.supremamidia.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-primary hover:text-primary/80 transition-colors font-medium"
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
