import React from "react";

interface LogoProps {
  variant?: "horizontal" | "compact" | "negative";
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = "horizontal", className = "" }) => {
  // Símbolo do toldo listrado: arco/trapézio com 4 listras (vermelho toldo e creme/branco)
  const renderAwningSymbol = (isDarkBg: boolean) => {
    const redColor = "#C8361D";
    const lightColor = isDarkBg ? "#FFFFFF" : "#F4EFE6";
    const darkColor = "#1C1F22";

    return (
      <svg
        viewBox="0 0 100 100"
        className="w-10 h-10 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Estrutura traseira / sombra leve */}
        <path d="M15 65 L85 65 L75 35 L25 35 Z" fill={isDarkBg ? "#2C3035" : "#E5DFD3"} />
        
        {/* Listras do Toldo */}
        {/* Listra 1 */}
        <path d="M15 65 L32.5 65 L37.5 35 L25 35 Z" fill={redColor} />
        {/* Listra 2 */}
        <path d="M32.5 65 L50 65 L50 35 L37.5 35 Z" fill={lightColor} />
        {/* Listra 3 */}
        <path d="M50 65 L67.5 65 L62.5 35 L50 35 Z" fill={redColor} />
        {/* Listra 4 */}
        <path d="M67.5 65 L85 65 L75 35 L62.5 35 Z" fill={lightColor} />

        {/* Babado inferior / valance (estilo capota comercial ondulado) */}
        <path
          d="M15 65 C17.5 69, 20 69, 22.5 65 C25 69, 27.5 69, 30 65 C32.5 69, 35 69, 37.5 65 C40 69, 42.5 69, 45 65 C47.5 69, 50 69, 52.5 65 C55 69, 57.5 69, 60 65 C62.5 69, 65 69, 67.5 65 C70 69, 72.5 69, 75 65 C77.5 69, 80 69, 82.5 65 C85 69, 87.5 69, 90 65"
          stroke={redColor}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Linha superior de fixação */}
        <path d="M25 35 L75 35" stroke={isDarkBg ? lightColor : darkColor} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  };

  if (variant === "compact") {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        {renderAwningSymbol(false)}
      </div>
    );
  }

  const isNegative = variant === "negative";
  const textPrimaryColor = isNegative ? "text-[#F4EFE6]" : "text-[#1C1F22]";
  const textSecondaryColor = isNegative ? "text-gray-400" : "text-[#C8361D]";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {renderAwningSymbol(isNegative)}
      
      <div className="flex flex-col justify-center">
        {/* Wordmark "TOLDOS COMERCIAIS" */}
        <span
          className={`font-sans tracking-tight font-extrabold leading-none uppercase ${textPrimaryColor}`}
          style={{
            fontSize: "1.45rem",
            fontStretch: "condensed",
            fontFamily: "'Barlow Condensed', 'Archivo Narrow', sans-serif",
          }}
        >
          Toldos Comerciais
        </span>
        
        {/* Subtitle "CURITIBA · PROJETO E INSTALAÇÃO" */}
        <span
          className={`tracking-[0.14em] font-bold leading-none ${textSecondaryColor}`}
          style={{
            fontSize: "0.58rem",
            fontFamily: "'Inter', sans-serif",
            marginTop: "3px",
          }}
        >
          CURITIBA · PROJETO E INSTALAÇÃO
        </span>
      </div>
    </div>
  );
};
