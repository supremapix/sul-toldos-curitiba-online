import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUp, Home, MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleWhatsApp = () => {
    const message = "Olá, gostaria de solicitar um orçamento para toldos!";
    window.open(`https://wa.me/5541998121324?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleCall = () => {
    window.open("tel:+554135646943", "_self");
  };

  const handleEmail = () => {
    window.open("mailto:contato@sultoldos.com.br?subject=Solicitação de Orçamento&body=Olá, gostaria de solicitar um orçamento para toldos.", "_self");
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {/* Botão Home */}
      <Button
        onClick={handleHome}
        size="icon"
        className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg hover:scale-110 transition-all duration-200 border-2 border-white/20"
        title="Voltar ao início"
      >
        <Home className="h-5 w-5" />
      </Button>

      {/* Botão WhatsApp */}
      <Button
        onClick={handleWhatsApp}
        size="icon"
        className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:scale-110 transition-all duration-200 border-2 border-white/20"
        title="WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </Button>

      {/* Botão Telefone */}
      <Button
        onClick={handleCall}
        size="icon"
        className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:scale-110 transition-all duration-200 border-2 border-white/20"
        title="Ligar: (41) 3564-6943"
      >
        <Phone className="h-5 w-5" />
      </Button>

      {/* Botão Email */}
      <Button
        onClick={handleEmail}
        size="icon"
        className="w-12 h-12 rounded-full bg-purple-500 hover:bg-purple-600 text-white shadow-lg hover:scale-110 transition-all duration-200 border-2 border-white/20"
        title="Enviar email"
      >
        <Mail className="h-5 w-5" />
      </Button>

      {/* Botão Voltar ao Topo */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-800 text-white shadow-lg hover:scale-110 transition-all duration-200 border-2 border-white/20"
          title="Voltar ao topo"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default FloatingButtons;