import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Home, Wrench, Image, Info, MessageSquare, Calculator } from "lucide-react";
import logoSulToldos from "@/assets/logo-sul-toldos.png";
import { openWhatsapp } from "@/utils/whatsapp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleWhatsApp = () => {
    openWhatsapp("Olá, gostaria de solicitar um orçamento para toldos!");
  };

  interface NavItem {
    href: string;
    label: string;
    icon: React.ReactNode;
    isLink?: boolean;
  }

  const navItems: NavItem[] = [
    { href: "#home", label: "Início", icon: <Home className="w-5 h-5" /> },
    { href: "#services", label: "Serviços", icon: <Wrench className="w-5 h-5" /> },
    { href: "#gallery", label: "Galeria", icon: <Image className="w-5 h-5" /> },
    { href: "#calculator", label: "Calcular", icon: <Calculator className="w-5 h-5" /> },
    { href: "/faq", label: "FAQ", icon: <MessageSquare className="w-5 h-5" />, isLink: true },
    { href: "#about", label: "Sobre", icon: <Info className="w-5 h-5" /> },
    { href: "#contact", label: "Contato", icon: <MessageSquare className="w-5 h-5" /> },
  ];

  return (
    <header style={{ backgroundColor: '#241f21' }} className="backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between min-h-[6rem] md:min-h-[8rem] py-2">
          {/* Logo */}
          <a href="/" className="flex items-center group py-2">
            <img
              src={logoSulToldos}
              alt="Sul Toldos - Policarbonato e Toldos em Curitiba"
              className="h-28 sm:h-32 md:h-24 lg:h-28 w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5">
            {navItems.map((item) => (
              item.isLink ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-base text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:4135646943"
              className="flex items-center text-base text-foreground hover:text-primary transition-colors font-medium"
            >
              <Phone className="w-5 h-5 mr-2" />
              (41) 3564-6943
            </a>
            <Button onClick={handleWhatsApp} className="bg-primary hover:bg-primary/90 text-base px-5 py-2.5 h-auto font-bold">
              💬 ORÇAMENTO
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-foreground hover:text-primary p-2"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                item.isLink ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="flex items-center gap-3 text-xl text-foreground hover:text-primary hover:bg-secondary/50 transition-colors py-4 px-4 rounded-lg font-medium"
                    onClick={toggleMenu}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 text-xl text-foreground hover:text-primary hover:bg-secondary/50 transition-colors py-4 px-4 rounded-lg font-medium"
                    onClick={toggleMenu}
                  >
                    {item.icon}
                    {item.label}
                  </a>
                )
              ))}
              <div className="pt-4 space-y-3 px-4">
                <a
                  href="tel:4135646943"
                  className="flex items-center gap-3 text-xl text-foreground hover:text-primary transition-colors py-3 font-medium"
                >
                  <Phone className="w-5 h-5" />
                  (41) 3564-6943
                </a>
                <Button onClick={handleWhatsApp} className="w-full bg-primary hover:bg-primary/90 text-lg py-4 h-auto font-bold">
                  💬 SOLICITAR ORÇAMENTO
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
