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
    <section id="calculator" className="py-20 bg-[#1C1F22] text-[#F4EFE6] border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#F2B705] text-[#1C1F22] font-sans font-extrabold text-[10px] md:text-xs tracking-[0.2em] uppercase px-3 py-1.5 mb-6 rounded-[2px]">
              02 — CALCULADORA COMERCIAL
            </span>
            <h2 
              className="font-extrabold uppercase tracking-tight mb-4 text-[#F4EFE6]"
              style={{ 
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(1.75rem, 7vw, 3rem)"
              }}
            >
              Simulador de Área Comercial (M²)
            </h2>
            <p className="text-sm text-gray-400">
              Escolha a estrutura comercial desejada e informe as dimensões para receber uma estimativa base de investimento.
            </p>
          </div>

          <div className="bg-white text-[#1C1F22] border border-border rounded-[2px] p-6 md:p-8 shadow-none">
            {/* Type Selection */}
            <label className="block text-[#1C1F22] font-bold text-sm uppercase tracking-wider mb-4">
              1. Tipo de Estrutura Comercial
            </label>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {awningTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => { setSelectedType(type.id); setShowResult(false); }}
                  className={`text-left px-4 py-3 rounded-[2px] border-2 transition-all duration-150 text-xs font-bold uppercase tracking-wider ${
                    selectedType === type.id
                      ? "border-[#C8361D] bg-[#C8361D]/5 text-[#C8361D]"
                      : "border-border bg-white text-[#1C1F22] hover:border-[#C8361D]/50"
                  }`}
                >
                  {type.label}
                  <span className="block text-[10px] font-mono text-gray-500 font-normal mt-1 normal-case">
                    A partir de R$ {type.priceMin}/{type.perLinearMeter ? "m linear" : "m²"}
                  </span>
                </button>
              ))}
            </div>

            {/* Dimensions */}
            <label className="block text-[#1C1F22] font-bold text-sm uppercase tracking-wider mb-4">
              2. Medidas da Fachada (em metros)
            </label>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <label className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-1.5 block">Largura (m)</label>
                <input
                  type="number"
                  min="0.5"
                  step="0.1"
                  value={width}
                  onChange={(e) => { setWidth(e.target.value); setShowResult(false); }}
                  placeholder="Ex: 4.5"
                  className="w-full px-4 py-3 bg-gray-50 border border-border rounded-[2px] text-[#1C1F22] text-sm focus:ring-1 focus:ring-[#C8361D] focus:border-[#C8361D] outline-none"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-1.5 block">Avanço / Altura (m)</label>
                <input
                  type="number"
                  min="0.5"
                  step="0.1"
                  value={depth}
                  onChange={(e) => { setDepth(e.target.value); setShowResult(false); }}
                  placeholder="Ex: 2.5"
                  className="w-full px-4 py-3 bg-gray-50 border border-border rounded-[2px] text-[#1C1F22] text-sm focus:ring-1 focus:ring-[#C8361D] focus:border-[#C8361D] outline-none"
                />
              </div>
            </div>

            {/* Calculate */}
            <button
              onClick={handleCalculate}
              disabled={!isValid}
              className="w-full bg-[#C8361D] hover:bg-[#C8361D]/90 disabled:opacity-30 disabled:cursor-not-allowed text-white font-extrabold text-xs uppercase tracking-widest py-4 rounded-[2px] transition-all cursor-pointer"
            >
              Calcular Estimativa de Preço
            </button>

            {/* Result */}
            {showResult && selectedAwning && (
              <div className="mt-6 bg-gray-50 border border-border rounded-[2px] p-6 animate-fade-in text-center">
                <div className="mb-4">
                  <p className="text-gray-500 text-xs uppercase tracking-wider font-bold mb-1">Estimativa de Investimento para</p>
                  <p className="text-[#1C1F22] font-sans font-extrabold uppercase text-lg" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {selectedAwning.label}
                  </p>
                  <p className="text-gray-500 text-xs font-mono">
                    {width}m de largura × {depth}m de avanço = {area.toFixed(1)}m² de área
                  </p>
                </div>
                
                <div className="mb-6 bg-white border border-border p-4 rounded-[2px]">
                  <p className="text-[#C8361D] font-mono font-extrabold text-3xl">
                    R$ {priceMin.toFixed(0)} — R$ {priceMax.toFixed(0)}
                  </p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider font-semibold mt-1">
                    *Preço aproximado baseado em visita técnica opcional.
                  </p>
                </div>
                
                <button
                  onClick={handleSendWhatsapp}
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-widest py-4 rounded-[2px] transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  ENVIAR PROJETO NO WHATSAPP
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
