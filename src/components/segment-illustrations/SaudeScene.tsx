import { useEffect, useRef, useState } from "react";

export const SaudeScene = () => {
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
        aria-label="Ilustração animada de toldo de acesso em clínica médica"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="clinicWall" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ECEFF1" />
            <stop offset="100%" stopColor="#CFD8DC" />
          </linearGradient>
          <linearGradient id="doorLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4DD0E1" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#4DD0E1" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient id="awningMetalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#78909C" />
            <stop offset="50%" stopColor="#B0BEC5" />
            <stop offset="100%" stopColor="#546E7A" />
          </linearGradient>
        </defs>

        <style>{`
          /* Green cross pulsing */
          .active-anim .health-cross {
            animation: pulseCross 2s infinite ease-in-out;
            transform-origin: 310px 50px;
          }

          /* Automatic sliding doors sliding open/close */
          .door-left {
            transform: translateX(0px);
          }
          .door-right {
            transform: translateX(0px);
          }
          .active-anim .door-left {
            animation: openDoorLeft 8s infinite ease-in-out;
          }
          .active-anim .door-right {
            animation: openDoorRight 8s infinite ease-in-out;
          }

          /* Hover interaction */
          .group:hover .health-cross {
            animation-duration: 0.8s; /* faster pulse on hover */
            filter: drop-shadow(0 0 6px #00E676);
          }
          .group:hover .door-left {
            transform: translateX(-26px) !important;
          }
          .group:hover .door-right {
            transform: translateX(26px) !important;
          }

          @keyframes pulseCross {
            0%, 100% { transform: scale(1); filter: drop-shadow(0 0 1px #00C853); opacity: 0.7; }
            50% { transform: scale(1.1); filter: drop-shadow(0 0 6px #00E676); opacity: 1; }
          }
          @keyframes openDoorLeft {
            0%, 20%, 80%, 100% { transform: translateX(0px); }
            35%, 65% { transform: translateX(-26px); }
          }
          @keyframes openDoorRight {
            0%, 20%, 80%, 100% { transform: translateX(0px); }
            35%, 65% { transform: translateX(26px); }
          }

          @media (prefers-reduced-motion: reduce) {
            .health-cross, .door-left, .door-right {
              animation: none !important;
              transform: none !important;
            }
            .health-cross {
              opacity: 0.9 !important;
            }
          }
        `}</style>

        {/* Clean Clinic Facade Background */}
        <rect width="400" height="175" fill="url(#clinicWall)" />
        <rect y="175" width="400" height="50" fill="#90A4AE" />
        <line x1="0" y1="175" x2="400" y2="175" stroke="#455A64" strokeWidth="2.5" />

        {/* Clean Glass Window Panels on the Left */}
        <rect x="40" y="65" width="80" height="110" fill="#A7FFEB" opacity="0.3" stroke="#546E7A" strokeWidth="2" />
        <line x1="80" y1="65" x2="80" y2="175" stroke="#546E7A" strokeWidth="1.5" />

        {/* Automatic Entrance Sliding Glass Doors */}
        <g transform="translate(155, 65)">
          {/* Door Frame Inner Space / Hall Light */}
          <rect x="0" y="0" width="90" height="110" fill="url(#doorLight)" stroke="#37474F" strokeWidth="3.5" />
          
          {/* Glass panels (Sliding left and right) */}
          <g class="door-left">
            <rect x="2" y="2" width="42" height="106" fill="#E0F7FA" fillOpacity="0.4" stroke="#78909C" strokeWidth="2" />
            {/* Decal bar */}
            <rect x="15" y="45" width="12" height="2" fill="#546E7A" />
          </g>
          <g class="door-right">
            <rect x="46" y="2" width="42" height="106" fill="#E0F7FA" fillOpacity="0.4" stroke="#78909C" strokeWidth="2" />
            {/* Decal bar */}
            <rect x="63" y="45" width="12" height="2" fill="#546E7A" />
          </g>
        </g>

        {/* Acessibilidade - Ramp and rails */}
        <g transform="translate(130, 175)">
          {/* Ramp triangle */}
          <polygon points="0,0 25,0 25,-12" fill="#ECEFF1" opacity="0.8" />
          <polygon points="115,0 140,0 115,-12" fill="#ECEFF1" opacity="0.8" />
          {/* Handrail metal */}
          <path d="M0,-2 L25,-14 L50,-14" fill="none" stroke="#78909C" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Pharmacy Sign (Cruz Verde de Farmácia Pulsando) */}
        <g transform="translate(310, 50)">
          {/* White medical sign plate */}
          <rect x="-24" y="-24" width="48" height="48" fill="#FFFFFF" stroke="#CFD8DC" strokeWidth="2" rx="4" />
          
          {/* Green Health Cross */}
          <path class="health-cross" d="M-6,-18 L6,-18 L6,-6 L18,-6 L18,6 L6,6 L6,18 L-6,18 L-6,6 L-18,6 L-18,-6 L-6,-6 Z" fill="#00C853" />
        </g>

        {/* MARQUISE / TOLDO DE ACESSO (Cobertura Rígida Reta) */}
        <g id="access-canopy">
          {/* Support Metal rods tensioners */}
          <line x1="145" y1="20" x2="145" y2="58" stroke="#37474F" strokeWidth="2.5" />
          <line x1="255" y1="20" x2="255" y2="58" stroke="#37474F" strokeWidth="2.5" />
          
          {/* Canopy Structural Frame */}
          <rect x="135" y="55" width="130" height="10" fill="url(#awningMetalGrad)" rx="1" stroke="#37474F" strokeWidth="1" />
          {/* Translucent/Clear glass/polycarbonate panels of marquise */}
          <polygon points="140,55 260,55 255,45 145,45" fill="#4DD0E1" opacity="0.4" />
          {/* Clean lines */}
          <polyline points="140,55 145,45 255,45 260,55" fill="none" stroke="#546E7A" strokeWidth="1.5" />
        </g>

        {/* Small stylized sign icon in background */}
        <text x="390" y="217" textAnchor="end" className="fill-gray-400 font-mono font-bold" style={{ fontSize: "8px", letterSpacing: "1px" }}>
          TOLDOS COMERCIAIS
        </text>
      </svg>
    </div>
  );
};
