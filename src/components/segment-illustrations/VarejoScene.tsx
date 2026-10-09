import { useEffect, useRef, useState } from "react";

export const VarejoScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative overflow-hidden flex items-center justify-center bg-[#1C1F22]"
    >
      <svg
        viewBox="0 0 400 225"
        className={`w-full h-full ${isIntersecting ? "active-anim" : ""}`}
        role="img"
        aria-label="Ilustração animada de toldo fixo capota em loja"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="neonGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF4136" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#C8361D" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="glassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E2328" />
            <stop offset="100%" stopColor="#0B0D0F" />
          </linearGradient>
          <linearGradient id="capotaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9E1B1B" />
            <stop offset="50%" stopColor="#C8361D" />
            <stop offset="100%" stopColor="#9E1B1B" />
          </linearGradient>
        </defs>

        <style>{`
          /* Wind flutter animation for awning */
          .capota-awning {
            transform-origin: 200px 45px;
          }
          .active-anim .capota-awning {
            animation: flutter 4s infinite ease-in-out;
          }

          /* Logo stroke dash-offset animation */
          .brand-logo {
            stroke: #F4EFE6;
            stroke-width: 1.5;
            fill: none;
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            stroke-linecap: round;
            stroke-linejoin: round;
          }
          .active-anim .brand-logo {
            animation: drawLogo 7s infinite ease-in-out forwards;
          }

          /* Neon Sign flickering */
          .neon-sign {
            fill: #FF4136;
            opacity: 0.3;
          }
          .active-anim .neon-sign {
            animation: flickerSign 6s infinite alternate;
          }
          .active-anim .neon-glow-rect {
            animation: pulseGlow 6s infinite alternate;
          }

          /* Hover interaction */
          .group:hover .capota-awning {
            transform: scale(1.03) translateY(-1px) !important;
            filter: brightness(1.1);
          }
          .group:hover .neon-sign {
            opacity: 1 !important;
            fill: #FF5A50;
            filter: drop-shadow(0 0 4px #FF4136);
          }

          @keyframes flutter {
            0%, 100% { transform: scale(1) rotate(0deg); }
            33% { transform: scale(1.005, 0.99) rotate(0.4deg) skewX(0.2deg); }
            66% { transform: scale(0.995, 1.01) rotate(-0.4deg) skewX(-0.2deg); }
          }
          @keyframes drawLogo {
            0%, 100% { stroke-dashoffset: 100; fill: rgba(244, 239, 230, 0); }
            25%, 75% { stroke-dashoffset: 0; fill: rgba(244, 239, 230, 1); }
          }
          @keyframes flickerSign {
            0%, 100% { opacity: 0.1; }
            45% { opacity: 0.15; }
            47% { opacity: 0.9; }
            49% { opacity: 0.3; }
            51% { opacity: 0.95; }
            53% { opacity: 0.6; }
            55% { opacity: 1; }
            85% { opacity: 0.9; }
          }
          @keyframes pulseGlow {
            0%, 47% { opacity: 0; }
            55%, 85% { opacity: 0.4; }
            100% { opacity: 0.1; }
          }

          @media (prefers-reduced-motion: reduce) {
            .capota-awning, .brand-logo, .neon-sign, .neon-glow-rect {
              animation: none !important;
              transform: none !important;
              opacity: 1 !important;
              stroke-dashoffset: 0 !important;
              fill: rgba(244, 239, 230, 1) !important;
            }
          }
        `}</style>

        {/* Storefront BG */}
        <rect width="400" height="175" fill="#242629" />
        <rect y="175" width="400" height="50" fill="#2E3033" />
        <line x1="0" y1="175" x2="400" y2="175" stroke="#101214" strokeWidth="2" />

        {/* Boutique Windows */}
        <rect x="40" y="70" width="120" height="105" fill="url(#glassGrad)" stroke="#111" strokeWidth="3" />
        <rect x="240" y="70" width="120" height="105" fill="url(#glassGrad)" stroke="#111" strokeWidth="3" />
        
        {/* Mannequin / Dress silhouettes inside windows */}
        <g opacity="0.3" transform="translate(100, 95) scale(0.6)">
          <path d="M0,20 C-10,40 -15,70 -15,100 L15,100 C15,70 10,40 0,20" fill="#E4DCD3" />
          <circle cx="0" cy="0" r="10" fill="#E4DCD3" />
          <line x1="0" y1="10" x2="0" y2="20" stroke="#E4DCD3" strokeWidth="4" />
        </g>
        <g opacity="0.2" transform="translate(300, 90) scale(0.6)">
          <path d="M0,20 C-8,35 -10,65 -12,95 L12,95 C10,65 8,35 0,20" fill="#E4DCD3" />
          <circle cx="0" cy="-2" r="9" fill="#E4DCD3" />
          <line x1="0" y1="8" x2="0" y2="20" stroke="#E4DCD3" strokeWidth="4" />
        </g>

        {/* Neon Sign Letreiro (Acima da Vitrine) */}
        <g transform="translate(200, 32)">
          {/* Sign background board */}
          <rect x="-90" y="-18" width="180" height="24" fill="#0E1012" stroke="#222" strokeWidth="1" rx="2" />
          
          {/* Neon Glow backdrop */}
          <rect className="neon-glow-rect" x="-85" y="-15" width="170" height="18" fill="url(#neonGlow)" rx="1" style={{ pointerEvents: "none" }} />
          
          {/* Neon Lettering */}
          <text className="neon-sign" x="0" y="-2" textAnchor="middle" fontSize="11px" fontWeight="900" letterSpacing="5px" style={{ fontFamily: "sans-serif" }}>
            BOUTIQUE
          </text>
        </g>

        {/* Toldo Fixo Capota (Balança levemente ao vento, com 'SUA MARCA' gravado) */}
        <g className="capota-awning">
          {/* Structural ribs in grey */}
          <path d="M80,45 Q200,30 320,45" fill="none" stroke="#555" strokeWidth="1.5" />
          <path d="M78,112 Q200,105 322,112" fill="none" stroke="#555" strokeWidth="1.5" />

          {/* Capota Awning Shell */}
          <path d="M80,45 Q200,20 320,45 L325,115 Q200,105 75,115 Z" fill="url(#capotaGrad)" />
          
          {/* Curved Vertical Stiffener lines / Panel subdivisions */}
          <path d="M128,40 C140,65 145,95 125,112" fill="none" stroke="#000000" strokeWidth="1" opacity="0.15" />
          <path d="M176,37 C185,65 188,95 175,110" fill="none" stroke="#000000" strokeWidth="1" opacity="0.15" />
          <path d="M224,37 C215,65 212,95 225,110" fill="none" stroke="#000000" strokeWidth="1" opacity="0.15" />
          <path d="M272,40 C260,65 255,95 275,112" fill="none" stroke="#000000" strokeWidth="1" opacity="0.15" />

          {/* Golden/Yellow brand lettering: 'SUA MARCA' (Animação Stroke-Dash) */}
          <g transform="translate(200, 78)">
            {/* Outline draw */}
            <text className="brand-logo" x="0" y="0" textAnchor="middle" fontSize="15px" fontWeight="bold" letterSpacing="4px" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              SUA MARCA
            </text>
          </g>

          {/* Capota bottom valance flaps (estilo gomos) */}
          <path d="M75,115 Q95.4,124 115.8,115 Q136.2,124 156.6,115 Q177,124 197.4,115 Q217.8,124 238.2,115 Q258.6,124 279,115 Q299.4,124 319.8,115 L325,115 L325,123 Q319.8,128 319.8,123 Q299.4,128 279,123 Q258.6,128 238.2,123 Q217.8,128 197.4,123 Q177,128 156.6,123 Q136.2,128 115.8,123 Q95.4,128 75,123 Z" fill="#751313" />
        </g>

        {/* Small stylized sign icon in background */}
        <text x="390" y="217" textAnchor="end" className="fill-gray-400 font-mono font-bold" style={{ fontSize: "8px", letterSpacing: "1px" }}>
          TOLDOS COMERCIAIS
        </text>
      </svg>
    </div>
  );
};
