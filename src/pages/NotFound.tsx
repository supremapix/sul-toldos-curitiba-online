import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-primary">404</h1>
        <p className="text-2xl md:text-3xl text-foreground mb-2">Página não encontrada</p>
        <p className="text-base md:text-lg text-muted-foreground mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <a 
          href="/" 
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Voltar para a Página Inicial
        </a>
      </div>
    </div>
  );
};

export default NotFound;
