import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { openWhatsapp } from "@/utils/whatsapp";
import { SupremaCredit } from "@/components/SupremaCredit";

const Footer = () => {
  return (
    <footer className="bg-[#1C1F22] text-[#F4EFE6] border-t border-border pb-20 md:pb-0">
      {/* Elemento-assinatura: listras do toldo no topo do footer */}
      <div className="stripe-divider-dark w-full"></div>
      
      <div className="container mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
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

          {/* Area / Sitemap disguised link */}
          <div>
            <h4 className="text-base font-bold uppercase tracking-wider text-[#F4EFE6] mb-6">Regiões Atendidas</h4>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Atendimento especializado em Curitiba e em toda a Região Metropolitana com visitas e orçamentos gratuitos.
            </p>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link to="/mapa-do-site" className="text-gray-500 hover:text-gray-300 transition-colors text-xs inline-flex items-center gap-1">
                  <span>📍</span> <span>Ver todas as cidades e bairros atendidos</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-xs text-gray-500">
              © 2025 Toldos Comerciais Curitiba. Todos os direitos reservados.
            </p>
          </div>
        </div>

        {/* Suprema Credit Component */}
        <SupremaCredit />
      </div>
    </footer>
  );
};

export default Footer;
