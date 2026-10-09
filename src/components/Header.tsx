import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { openWhatsapp } from "@/utils/whatsapp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleWhatsApp = () => {
    openWhatsapp("Olá, gostaria de solicitar um orçamento de toldo comercial para minha empresa!");
  };

  interface NavItem {
    href: string;
    label: string;
    isLink?: boolean;
  }

  const navItems: NavItem[] = [
    { href: "#home", label: "Início" },
    { href: "#services", label: "Serviços" },
    { href: "#gallery", label: "Galeria" },
    { href: "#calculator", label: "Calculadora" },
    { href: "/faq", label: "Dúvidas", isLink: true },
    { href: "#about", label: "Sobre" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Elemento-assinatura: listras do toldo no topo do header */}
      <div className="stripe-divider w-full" style={{ height: "8px" }}></div>
      
      <header className="w-full bg-[#1C1F22] border-b border-border text-[#F4EFE6] shadow-sm">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between h-20 gap-8">
            {/* Zone 1: Brand wordmark (Logo) */}
            <Link to="/" className="whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity">
              <Logo variant="negative" />
            </Link>

            {/* Zone 2: Nav Links (4-5 clean single-line text links) */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                item.isLink ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-sm font-medium tracking-wide text-[#F4EFE6]/80 hover:text-primary hover:underline underline-offset-4 transition-all whitespace-nowrap shrink-0"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium tracking-wide text-[#F4EFE6]/80 hover:text-primary hover:underline underline-offset-4 transition-all whitespace-nowrap shrink-0"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="hidden lg:flex items-center shrink-0">
              <Button
                onClick={handleWhatsApp}
                className="bg-[#C8361D] hover:bg-[#C8361D]/90 text-white text-xs font-bold tracking-wider px-5 py-2 rounded-[2px] transition-all cursor-pointer"
              >
                ORÇAMENTO GRÁTIS
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-[#F4EFE6] hover:text-primary p-2"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#1C1F22] border-t border-border/40 py-4 px-6 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                item.isLink ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-base text-[#F4EFE6]/90 hover:text-primary transition-colors py-2 font-medium"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-base text-[#F4EFE6]/90 hover:text-primary transition-colors py-2 font-medium"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </a>
                )
              ))}
              <div className="pt-4 border-t border-border/20">
                <Button
                  onClick={() => {
                    toggleMenu();
                    handleWhatsApp();
                  }}
                  className="w-full bg-[#C8361D] hover:bg-[#C8361D]/90 text-white text-sm font-bold py-3 rounded-[2px]"
                >
                  FALAR NO WHATSAPP
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
