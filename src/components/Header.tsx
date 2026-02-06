import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Home, Wrench, Image, Info, MessageSquare } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleWhatsApp = () => {
    window.open("https://wa.me/5541998121324?text=Olá, gostaria de solicitar um orçamento para toldos!", "_blank");
  };

  const navItems = [
    { href: "#home", label: "Início", icon: <Home className="w-5 h-5" /> },
    { href: "#services", label: "Serviços", icon: <Wrench className="w-5 h-5" /> },
    { href: "#gallery", label: "Galeria", icon: <Image className="w-5 h-5" /> },
    { href: "#about", label: "Sobre", icon: <Info className="w-5 h-5" /> },
    { href: "#contact", label: "Contato", icon: <MessageSquare className="w-5 h-5" /> },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <h1 className="text-3xl font-bold text-primary tracking-tight">Sul Toldos</h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-lg text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:4135646943"
              className="flex items-center text-lg text-foreground hover:text-primary transition-colors font-medium"
            >
              <Phone className="w-5 h-5 mr-2" />
              (41) 3564-6943
            </a>
            <Button onClick={handleWhatsApp} className="bg-primary hover:bg-primary/90 text-lg px-6 py-3 h-auto font-bold">
              ORÇAMENTO
            </Button>
          </div>

          {/* Mobile Menu Button - bigger for older users */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground hover:text-primary p-2"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Navigation - simplified with icons for older users */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 text-xl text-foreground hover:text-primary hover:bg-secondary/50 transition-colors py-4 px-4 rounded-lg font-medium"
                  onClick={toggleMenu}
                >
                  {item.icon}
                  {item.label}
                </a>
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
