import { useState, useEffect } from "react";
import { ArrowUp, Phone, MessageCircle, Mail, MapPin, X } from "lucide-react";
import { openWhatsapp } from "@/utils/whatsapp";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const buttons = [
    {
      label: "WhatsApp",
      icon: <MessageCircle className="h-6 w-6" />,
      onClick: () =>
        openWhatsapp("Olá, gostaria de solicitar um orçamento para toldos!"),
      bg: "bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)]",
    },
    {
      label: "Email",
      icon: <Mail className="h-6 w-6" />,
      onClick: () =>
        window.open(
          "mailto:contato@sultoldos.com.br?subject=Orçamento de Toldos&body=Olá, gostaria de solicitar um orçamento.",
          "_self"
        ),
      bg: "bg-[hsl(210,80%,50%)] hover:bg-[hsl(210,80%,45%)]",
    },
    {
      label: "GPS",
      icon: <MapPin className="h-6 w-6" />,
      onClick: () =>
        window.open(
          "https://www.google.com/maps/search/Sul+Toldos+Curitiba",
          "_blank"
        ),
      bg: "bg-[hsl(25,90%,50%)] hover:bg-[hsl(25,90%,45%)]",
    },
  ];

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3">
      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          title="Voltar ao topo"
          aria-label="Voltar ao topo"
          className="bg-muted hover:bg-muted/80 w-12 h-12 rounded-full text-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-border animate-fade-in"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* Expanded buttons */}
      {isExpanded && (
        <div className="flex flex-col gap-3 animate-fade-in">
          {buttons.map((btn) => (
            <button
              key={btn.label}
              onClick={btn.onClick}
              title={btn.label}
              aria-label={btn.label}
              className={`${btn.bg} w-14 h-14 rounded-full text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-white/20`}
            >
              {btn.icon}
            </button>
          ))}
        </div>
      )}

      {/* Toggle expand/collapse */}
      {isExpanded && (
        <button
          onClick={() => setIsExpanded(false)}
          aria-label="Fechar menu"
          className="w-14 h-14 rounded-full bg-muted text-foreground shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-border animate-fade-in"
        >
          <X className="h-6 w-6" />
        </button>
      )}

      {/* Main Phone CTA - always visible with pulse */}
      <button
        onClick={() => {
          if (!isExpanded) {
            setIsExpanded(true);
          } else {
            window.open("tel:+554135646943", "_self");
          }
        }}
        title={isExpanded ? "Ligar Agora" : "Contato Rápido"}
        aria-label={isExpanded ? "Ligar Agora" : "Abrir opções de contato"}
        className="relative w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-white/30"
      >
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
        <span className="absolute inset-[-4px] rounded-full border-2 border-primary/30 animate-pulse" />
        <Phone className="h-7 w-7 relative z-10" />
      </button>
    </div>
  );
};

export default FloatingButtons;
