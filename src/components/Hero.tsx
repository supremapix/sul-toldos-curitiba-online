import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-awning.jpg";
import { openWhatsapp } from "@/utils/whatsapp";

const Hero = () => {
  const handleWhatsApp = () => {
    openWhatsapp("Olá, gostaria de solicitar um orçamento para toldos!");
  };

  const handleCallNow = () => {
    window.open("tel:4135646943");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Toldos em <span className="text-primary">Curitiba</span> com Qualidade e Garantia
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Faça a diferença protegendo sua casa ou empresa com toldos de qualidade superior.
            <br />
            <strong className="text-primary">Solicite</strong> seu orçamento sem compromisso e descubra por que somos referência em Curitiba.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleWhatsApp}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              💬 ORÇAMENTO
            </Button>
            
            <Button 
              onClick={handleCallNow}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all"
            >
              📞 LIGAR
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;