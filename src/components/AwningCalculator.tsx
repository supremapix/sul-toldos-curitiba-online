import { useState } from "react";
import { Calculator, MessageCircle } from "lucide-react";
import { openWhatsapp } from "@/utils/whatsapp";

const awningTypes = [
  { id: "lona-fixa", label: "Toldo Fixo em Lona", priceMin: 220, priceMax: 320 },
  { id: "retratil-manual", label: "Toldo Retrátil Manual", priceMin: 280, priceMax: 380 },
  { id: "retratil-motor", label: "Toldo Retrátil Motorizado", priceMin: 380, priceMax: 520 },
  { id: "policarbonato", label: "Cobertura em Policarbonato", priceMin: 240, priceMax: 350 },
  { id: "cortina-rolo", label: "Cortina Rolo PVC", priceMin: 220, priceMax: 380 },
  { id: "cobertura-metalica", label: "Cobertura Metálica", priceMin: 220, priceMax: 320 },
  { id: "pergolado", label: "Pergolado com Cobertura", priceMin: 380, priceMax: 650 },
  { id: "capota", label: "Toldo Capota (Fachada)", priceMin: 800, priceMax: 1500, perLinearMeter: true },
];

const AwningCalculator = () => {
  const [selectedType, setSelectedType] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [showResult, setShowResult] = useState(false);

  const selectedAwning = awningTypes.find((t) => t.id === selectedType);

  const area = parseFloat(width) * parseFloat(depth);
  const isValid = selectedAwning && parseFloat(width) > 0 && parseFloat(depth) > 0;

  const priceMin = selectedAwning
    ? selectedAwning.perLinearMeter
      ? selectedAwning.priceMin * parseFloat(width)
      : selectedAwning.priceMin * area
    : 0;

  const priceMax = selectedAwning
    ? selectedAwning.perLinearMeter
      ? selectedAwning.priceMax * parseFloat(width)
      : selectedAwning.priceMax * area
    : 0;

  const handleCalculate = () => {
    if (isValid) setShowResult(true);
  };

  const handleSendWhatsapp = () => {
    if (selectedAwning) {
      const whatsappMessage = `Olá! Calculei no site e gostaria de um orçamento para:\n\n📋 Tipo: ${selectedAwning.label}\n📏 Largura: ${width}m x Profundidade: ${depth}m\n📐 Área: ${area.toFixed(1)}m²\n💰 Estimativa: R$ ${priceMin.toFixed(0)} a R$ ${priceMax.toFixed(0)}\n\nPode me enviar um orçamento detalhado?`;
      openWhatsapp(whatsappMessage);
    }
  };

  return (
    <section id="calculator" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Calculator className="w-4 h-4" />
              CALCULADORA DE PREÇO
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Calcule o Preço do Seu <span className="text-primary">Toldo</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Escolha o tipo de toldo e as medidas para ver uma estimativa de preço instantânea.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
            {/* Type Selection */}
            <label className="block text-foreground font-semibold text-lg mb-3">
              1. Tipo de Toldo
            </label>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {awningTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => { setSelectedType(type.id); setShowResult(false); }}
                  className={`text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm font-medium ${
                    selectedType === type.id
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-background text-foreground hover:border-primary/40"
                  }`}
                >
                  {type.label}
                  <span className="block text-xs text-muted-foreground mt-1">
                    R$ {type.priceMin}-{type.priceMax}/{type.perLinearMeter ? "m linear" : "m²"}
                  </span>
                </button>
              ))}
            </div>

            {/* Dimensions */}
            <label className="block text-foreground font-semibold text-lg mb-3">
              2. Medidas (em metros)
            </label>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Largura (m)</label>
                <input
                  type="number"
                  min="0.5"
                  step="0.1"
                  value={width}
                  onChange={(e) => { setWidth(e.target.value); setShowResult(false); }}
                  placeholder="Ex: 3.0"
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground text-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Profundidade (m)</label>
                <input
                  type="number"
                  min="0.5"
                  step="0.1"
                  value={depth}
                  onChange={(e) => { setDepth(e.target.value); setShowResult(false); }}
                  placeholder="Ex: 2.0"
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground text-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                />
              </div>
            </div>

            {/* Calculate */}
            <button
              onClick={handleCalculate}
              disabled={!isValid}
              className="w-full bg-primary hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed text-primary-foreground font-bold text-lg py-4 rounded-xl transition-all duration-300 mb-4"
            >
              🧮 CALCULAR PREÇO ESTIMADO
            </button>

            {/* Result */}
            {showResult && selectedAwning && (
              <div className="bg-background border-2 border-primary/30 rounded-xl p-6 animate-fade-in">
                <div className="text-center mb-4">
                  <p className="text-muted-foreground text-sm mb-1">Estimativa de preço para</p>
                  <p className="text-foreground font-bold text-lg">{selectedAwning.label}</p>
                  <p className="text-muted-foreground text-sm">
                    {width}m × {depth}m = {area.toFixed(1)}m²
                  </p>
                </div>
                <div className="text-center mb-4">
                  <p className="text-primary font-bold text-3xl">
                    R$ {priceMin.toFixed(0)} — R$ {priceMax.toFixed(0)}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    *Valores aproximados. Preço final depende de visita técnica.
                  </p>
                </div>
                <button
                  onClick={handleSendWhatsapp}
                  className="flex items-center justify-center gap-2 w-full bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white font-bold text-lg py-4 rounded-xl transition-all duration-300"
                >
                  <MessageCircle className="w-6 h-6" />
                  ENVIAR ORÇAMENTO NO WHATSAPP
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwningCalculator;
