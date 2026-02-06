import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUp, Home, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();

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
      label: "Início",
      icon: <Home className="h-6 w-6" />,
      onClick: () => navigate("/"),
      bg: "bg-primary hover:bg-primary/90",
    },
    {
      label: "WhatsApp",
      icon: <MessageCircle className="h-6 w-6" />,
      onClick: () =>
        window.open(
          "https://wa.me/5541998121324?text=Olá, gostaria de solicitar um orçamento para toldos!",
          "_blank"
        ),
      bg: "bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)]",
    },
    {
      label: "Ligar",
      icon: <Phone className="h-6 w-6" />,
      onClick: () => window.open("tel:+554135646943", "_self"),
      bg: "bg-[hsl(210,80%,50%)] hover:bg-[hsl(210,80%,45%)]",
    },
    {
      label: "Email",
      icon: <Mail className="h-6 w-6" />,
      onClick: () =>
        window.open(
          "mailto:contato@sultoldos.com.br?subject=Orçamento de Toldos&body=Olá, gostaria de solicitar um orçamento.",
          "_self"
        ),
      bg: "bg-[hsl(270,60%,50%)] hover:bg-[hsl(270,60%,45%)]",
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
    <div className="fixed left-3 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
      {buttons.map((btn) => (
        <button
          key={btn.label}
          onClick={btn.onClick}
          title={btn.label}
          aria-label={btn.label}
          className={`${btn.bg} w-14 h-14 rounded-full text-white shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 border-2 border-white/20`}
        >
          {btn.icon}
        </button>
      ))}

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          title="Voltar ao topo"
          aria-label="Voltar ao topo"
          className="bg-muted hover:bg-muted/80 w-14 h-14 rounded-full text-foreground shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 border-2 border-white/20"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;
