import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleWhatsApp = () => {
    window.open("https://wa.me/5541998121324?text=Olá, gostaria de solicitar um orçamento para toldos!", "_blank");
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Sul Toldos</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
              Galeria
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:4135646943"
              className="flex items-center text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              (41) 3564-6943
            </a>
            <Button onClick={handleWhatsApp} className="bg-primary hover:bg-primary/90">
              Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground hover:text-primary"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Início
              </a>
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Serviços
              </a>
              <a
                href="#gallery"
                className="text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Galeria
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Sobre
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Contato
              </a>
              <div className="pt-4 space-y-2">
                <a 
                  href="tel:4135646943"
                  className="flex items-center text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (41) 3564-6943
                </a>
                <Button onClick={handleWhatsApp} className="w-full bg-primary hover:bg-primary/90">
                  Solicitar Orçamento
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