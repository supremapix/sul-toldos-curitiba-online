import { useEffect, useRef, useState } from "react";

export const RestauranteScene = () => {
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
        aria-label="Ilustração animada de toldo retrátil em restaurante"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="pvcGlassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="shineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2A2D30" />
            <stop offset="100%" stopColor="#1C1F22" />
          </linearGradient>
          <linearGradient id="pavementGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3E4246" />
            <stop offset="100%" stopColor="#2A2D30" />
          </linearGradient>
          <linearGradient id="interiorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F2B705" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#C8361D" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <style>{`
          .steam {
            opacity: 0;
            fill: none;
            stroke: #F4EFE6;
            stroke-width: 1.5;
            stroke-linecap: round;
          }
          .active-anim .steam-1 {
            animation: rise 3s infinite ease-out;
          }
          .active-anim .steam-2 {
            animation: rise 3s infinite ease-out 1.5s;
          }
          
          /* Awning fabric retractable animation */
          .awning-fabric {
            transform-origin: 200px 35px;
          }
          .active-anim .awning-fabric {
            animation: extendAwning 6s infinite ease-in-out;
          }
          
          /* PVC crystal shine line animation */
          .active-anim .shine-line {
            animation: shineSweep 5s infinite ease-in-out;
          }

          /* General hover effects */
          .group:hover .awning-fabric {
            transform: scaleY(1.05) scaleX(1.01) !important;
            filter: brightness(1.1);
          }
          .group:hover .shine-line {
            animation-duration: 2.5s;
          }
          .group:hover .steam-1, .group:hover .steam-2 {
            animation-duration: 1.5s;
          }

          @keyframes rise {
            0% { transform: translateY(0) scaleX(0.8); opacity: 0; }
            15% { opacity: 0.6; }
            50% { transform: translateY(-10px) scaleX(1.2); opacity: 0.3; }
            100% { transform: translateY(-22px) scaleX(1.5); opacity: 0; }
          }
          @keyframes extendAwning {
            0%, 100% { transform: scaleY(1) scaleX(1); }
            50% { transform: scaleY(0.85) scaleX(0.98); }
          }
          @keyframes shineSweep {
            0% { transform: translateX(-160px); }
            40%, 100% { transform: translateX(160px); }
          }

          @media (prefers-reduced-motion: reduce) {
            .steam-1, .steam-2, .awning-fabric, .shine-line {
              animation: none !important;
              transform: none !important;
            }
          }
        `}</style>

        {/* Storefront Wall */}
        <rect width="400" height="175" fill="url(#wallGrad)" />
        <rect y="175" width="400" height="50" fill="url(#pavementGrad)" />

        {/* Wall Horizontal Line */}
        <line x1="0" y1="175" x2="400" y2="175" stroke="#101214" strokeWidth="2" />

        {/* Restaurant Large Window & Light inside */}
        <rect x="50" y="55" width="130" height="95" fill="url(#interiorGrad)" rx="2" />
        <rect x="50" y="55" width="130" height="95" fill="none" stroke="#2C2F33" strokeWidth="3" rx="2" />
        {/* Window grid */}
        <line x1="115" y1="55" x2="115" y2="150" stroke="#2C2F33" strokeWidth="2" />
        <line x1="50" y1="100" x2="180" y2="100" stroke="#2C2F33" strokeWidth="2" />

        {/* Door */}
        <rect x="250" y="55" width="70" height="120" fill="#151719" stroke="#2C2F33" strokeWidth="3" />
        <rect x="257" y="62" width="56" height="50" fill="url(#interiorGrad)" />
        <circle cx="310" cy="115" r="3" fill="#F2B705" />

        {/* Sidewalk Table & Chairs */}
        <g id="table-set">
          {/* Chairs */}
          <path d="M75,150 L75,185 M75,160 L65,160 L65,185" stroke="#F4EFE6" strokeWidth="2" strokeLinecap="round" />
          <path d="M155,150 L155,185 M155,160 L165,160 L165,185" stroke="#F4EFE6" strokeWidth="2" strokeLinecap="round" />
          {/* Table */}
          <line x1="95" y1="155" x2="135" y2="155" stroke="#F4EFE6" strokeWidth="3" />
          <line x1="115" y1="155" x2="115" y2="190" stroke="#F4EFE6" strokeWidth="2.5" />
          <path d="M100,190 L130,190" stroke="#F4EFE6" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Coffee Cup and Steam */}
        <g transform="translate(110, 142)">
          {/* Cup */}
          <path d="M0,8 L10,8 C10,13 8,13 5,13 C2,13 0,13 0,8 Z" fill="#F4EFE6" />
          <path d="M10,9 C12,9 12,11 10,11" fill="none" stroke="#F4EFE6" strokeWidth="1" />
          {/* Steams */}
          <path d="M3,5 Q1,2 3,-1" className="steam steam-1" />
          <path d="M7,5 Q5,2 7,-1" className="steam steam-2" />
        </g>

        {/* Retractable Striped Awning (Abre/Estende em loop) */}
        <g className="awning-fabric">
          {/* Awning Arms Structure (Behind) */}
          <line x1="80" y1="35" x2="70" y2="105" stroke="#555" strokeWidth="2" />
          <line x1="320" y1="35" x2="330" y2="105" stroke="#555" strokeWidth="2" />
          
          {/* Awning main fabric */}
          <path d="M40,35 L360,35 L345,100 L55,100 Z" fill="#C8361D" />
          {/* Stripes */}
          <path d="M72,35 L104,35 L110,100 L81,100 Z" fill="#F4EFE6" />
          <path d="M136,35 L168,35 L165,100 L138,100 Z" fill="#F4EFE6" />
          <path d="M200,35 L232,35 L220,100 L195,100 Z" fill="#F4EFE6" />
          <path d="M264,35 L296,35 L276,100 L251,100 Z" fill="#F4EFE6" />
          <path d="M328,35 L345,35 L322,100 L308,100 Z" fill="#F4EFE6" />

          {/* Valance (Borda ondulada do toldo) */}
          <path d="M55,100 Q72.5,108 90,100 Q107.5,108 125,100 Q142.5,108 160,100 Q177.5,108 195,100 Q212.5,108 230,100 Q247.5,108 265,100 Q282.5,108 300,100 Q317.5,108 335,100 Q340,108 345,100 L345,108 Q340,114 335,108 Q317.5,114 300,108 Q282.5,114 265,108 Q247.5,114 230,108 Q212.5,114 195,108 Q177.5,114 160,108 Q142.5,114 125,108 Q107.5,114 90,108 Q72.5,114 55,108 Z" fill="#992211" />
        </g>

        {/* Cortina Lateral de PVC Cristal (Lateral fechamento) */}
        <g transform="translate(15, 45)">
          {/* Glass pane outline */}
          <rect x="0" y="0" width="30" height="135" fill="url(#pvcGlassGrad)" stroke="#A0A5AA" strokeWidth="2" rx="1" />
          {/* PVC Border color */}
          <rect x="0" y="0" width="30" height="8" fill="#C8361D" />
          <rect x="0" y="127" width="30" height="8" fill="#C8361D" />
          <rect x="0" y="0" width="4" height="135" fill="#C8361D" />
          <rect x="26" y="0" width="4" height="135" fill="#C8361D" />
          
          {/* Shine swept linear overlay */}
          <g style={{ clipPath: "inset(0px 0px 0px 0px round 1px)" }}>
            <rect className="shine-line" x="-10" y="-30" width="15" height="200" fill="url(#shineGrad)" transform="rotate(25)" />
          </g>
        </g>

        {/* Small stylized sign icon in background */}
        <text x="390" y="217" textAnchor="end" className="fill-gray-400 font-mono font-bold" style={{ fontSize: "8px", letterSpacing: "1px" }}>
          TOLDOS COMERCIAIS
        </text>
      </svg>
    </div>
  );
};
