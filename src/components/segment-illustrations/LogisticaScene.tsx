import { useEffect, useRef, useState } from "react";

export const LogisticaScene = () => {
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
        aria-label="Ilustração animada de cobertura de doca industrial e logística"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="galpaoWall" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#37474F" />
            <stop offset="100%" stopColor="#212121" />
          </linearGradient>
          <linearGradient id="truckCab" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C8361D" />
            <stop offset="100%" stopColor="#E53935" />
          </linearGradient>
          <linearGradient id="dockCeiling" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#151515" />
            <stop offset="100%" stopColor="#090909" />
          </linearGradient>
        </defs>

        <style>{`
          /* Truck reversing slowly to the loading dock */
          .dock-truck {
            transform: translateX(180px);
          }
          .active-anim .dock-truck {
            animation: truckReverse 10s infinite ease-in-out;
          }

          /* Roll-up metal door rising */
          .rollup-door {
            height: 100px;
          }
          .active-anim .rollup-door {
            animation: rollUp 10s infinite ease-in-out;
          }

          /* Rain drop animations */
          .rain-drop {
            fill: none;
            stroke: #4FC3F7;
            stroke-width: 1.2;
            stroke-linecap: round;
            opacity: 0.4;
          }
          .active-anim .drop-1 { animation: fallRain 1.5s infinite linear; }
          .active-anim .drop-2 { animation: fallRain 1.8s infinite linear 0.4s; }
          .active-anim .drop-3 { animation: fallRain 1.3s infinite linear 0.8s; }
          .active-anim .drop-4 { animation: fallRain 1.6s infinite linear 0.2s; }

          /* Water sliding on the angled canopy */
          .water-trickle {
            stroke: #4FC3F7;
            stroke-width: 1;
            fill: none;
            opacity: 0.5;
            stroke-dasharray: 8 20;
            stroke-dashoffset: 28;
          }
          .active-anim .water-trickle {
            animation: trickleSlide 2s infinite linear;
          }

          /* Hover speedup */
          .group:hover .dock-truck {
            animation-duration: 5s; /* speed up on hover */
          }

          @keyframes truckReverse {
            0%, 10% { transform: translateX(180px); }
            45%, 75% { transform: translateX(35px); } /* docked */
            90%, 100% { transform: translateX(180px); } /* drives away */
          }
          @keyframes rollUp {
            0%, 15% { height: 100px; } /* closed */
            30%, 75% { height: 15px; } /* open during loading */
            85%, 100% { height: 100px; } /* closed again */
          }
          @keyframes fallRain {
            0% { transform: translateY(-30px) translateX(0); opacity: 0; }
            10% { opacity: 0.4; }
            90% { opacity: 0.4; }
            100% { transform: translateY(180px) translateX(-30px); opacity: 0; }
          }
          @keyframes trickleSlide {
            to { stroke-dashoffset: -12; }
          }

          @media (prefers-reduced-motion: reduce) {
            .dock-truck, .rollup-door, .rain-drop, .water-trickle {
              animation: none !important;
              transform: none !important;
            }
            .dock-truck {
              transform: translateX(35px) !important;
            }
            .rollup-door {
              height: 15px !important;
            }
            .rain-drop {
              display: none !important;
            }
          }
        `}</style>

        {/* Industrial Building Wall BG */}
        <rect width="400" height="175" fill="url(#galpaoWall)" />
        <rect y="175" width="400" height="50" fill="#3E4246" />
        <line x1="0" y1="175" x2="400" y2="175" stroke="#111" strokeWidth="2.5" />

        {/* Loading Bay / Doca Opening */}
        <g transform="translate(45, 65)">
          <rect width="110" height="110" fill="url(#dockCeiling)" stroke="#111" strokeWidth="3" />
          
          {/* Yellow/Black hazard warning paint stripes around door */}
          <path d="M-5,0 L5,0 L-5,10 Z M-5,30 L5,20 L5,30 L-5,40 Z M-5,60 L5,50 L5,60 L-5,70 Z M-5,90 L5,80 L5,90 L-5,100 Z" fill="#F2B705" />
          <path d="M115,0 L105,0 L115,10 Z M115,30 L105,20 L105,30 L115,40 Z M115,60 L105,50 L105,60 L115,70 Z M115,90 L105,80 L105,90 L115,100 Z" fill="#F2B705" />

          {/* Roll-up sheet metal shutter door (Animação rollUp) */}
          <rect class="rollup-door" x="3" y="2" width="104" height="100" fill="#78909C" stroke="#455A64" strokeWidth="1" />
          {/* horizontal shutter lines */}
          <line x1="3" y1="15" x2="107" y2="15" stroke="#37474F" strokeWidth="1.5" />
          <line x1="3" y1="30" x2="107" y2="30" stroke="#37474F" strokeWidth="1.5" />
          <line x1="3" y1="45" x2="107" y2="45" stroke="#37474F" strokeWidth="1.5" />
          <line x1="3" y1="60" x2="107" y2="60" stroke="#37474F" strokeWidth="1.5" />
          <line x1="3" y1="75" x2="107" y2="75" stroke="#37474F" strokeWidth="1.5" />
          <line x1="3" y1="90" x2="107" y2="90" stroke="#37474F" strokeWidth="1.5" />

          {/* Rubber Bumpers at dock base */}
          <rect x="15" y="108" width="12" height="6" fill="#111" />
          <rect x="83" y="108" width="12" height="6" fill="#111" />
        </g>

        {/* Cargo Truck reversing to dock (Animação truckReverse) */}
        <g class="dock-truck" transform="translate(0, 75)">
          {/* Truck Cargo Body / Container (large white box) */}
          <rect x="0" y="5" width="150" height="85" fill="#EEEEEE" stroke="#BDBDBD" strokeWidth="2" rx="1" />
          {/* Logistics logo generic stripe on cargo container */}
          <rect x="15" y="35" width="120" height="15" fill="#37474F" />
          <text x="75" y="46" textAnchor="middle" fill="#F4EFE6" fontSize="9px" fontWeight="900" style={{ fontFamily: "sans-serif" }}>
            SUL CARGO
          </text>
          
          {/* Truck Driver Cab */}
          <path d="M150,30 L175,30 C182,30 185,40 185,55 L185,90 L150,90 Z" fill="url(#truckCab)" />
          {/* Cab Window */}
          <path d="M156,36 L170,36 C174,36 176,40 176,46 L156,46 Z" fill="#222" />
          {/* Wheels */}
          <circle cx="30" cy="92" r="10" fill="#111" stroke="#333" strokeWidth="2" />
          <circle cx="30" cy="92" r="4" fill="#666" />
          <circle cx="120" cy="92" r="10" fill="#111" stroke="#333" strokeWidth="2" />
          <circle cx="120" cy="92" r="4" fill="#666" />
          <circle cx="165" cy="92" r="10" fill="#111" stroke="#333" strokeWidth="2" />
          <circle cx="165" cy="92" r="4" fill="#666" />
        </g>

        {/* COBERTURA METÁLICA DE DOCA DE GRANDE VÃO (Telha Sanduíche) */}
        <g id="dock-roof-awning">
          {/* Heavy structural metal triangles holding it to the wall */}
          <polygon points="30,55 45,15 175,55" fill="none" stroke="#546E7A" strokeWidth="4.5" strokeLinejoin="round" />
          <line x1="30" y1="55" x2="45" y2="55" stroke="#37474F" strokeWidth="4" />

          {/* Sloped Metal Canopy Cover (Telha Sanduíche) */}
          {/* Sanduiche core */}
          <polygon points="30,48 185,48 180,56 30,56" fill="#CFD8DC" />
          {/* Corrugated upper metal sheet */}
          <path d="M30,48 L185,48" fill="none" stroke="#90A4AE" strokeWidth="4" strokeLinecap="round" />
          {/* Under metal panel */}
          <path d="M30,56 L180,56" fill="none" stroke="#455A64" strokeWidth="3.5" strokeLinecap="round" />

          {/* Diagonal truss rib detailing inside the steel triangle */}
          <line x1="45" y1="15" x2="100" y2="55" stroke="#546E7A" strokeWidth="2.5" />
          <line x1="100" y1="30" x2="150" y2="55" stroke="#546E7A" strokeWidth="2.5" />

          {/* Water trickle sliding along the slope of canopy (Animação trickleSlide) */}
          <path class="water-trickle" d="M45,48 L180,48" />
        </g>

        {/* Rain Drops falling vertically (Not falling in the sheltered area under canopy) */}
        {/* We place rain emitters starting above roof on left, and full right of the roof */}
        <g id="rain-group" transform="translate(0,0)">
          {/* Left side before canopy coverage */}
          <line x1="15" y1="-20" x2="-5" y2="80" class="rain-drop drop-1" />
          
          {/* Right side after canopy coverage (x > 185) */}
          <line x1="220" y1="-20" x2="200" y2="80" class="rain-drop drop-2" />
          <line x1="260" y1="-10" x2="240" y2="90" class="rain-drop drop-3" />
          <line x1="300" y1="-25" x2="280" y2="75" class="rain-drop drop-4" />
          <line x1="340" y1="-15" x2="320" y2="85" class="rain-drop drop-1" />
          <line x1="380" y1="-30" x2="360" y2="70" class="rain-drop drop-2" />

          {/* Top area above canopy */}
          <line x1="120" y1="-25" x2="110" y2="25" class="rain-drop drop-3" />
          <line x1="160" y1="-20" x2="150" y2="30" class="rain-drop drop-4" />
        </g>

        {/* Small stylized sign icon in background */}
        <text x="390" y="217" textAnchor="end" className="fill-gray-400 font-mono font-bold" style={{ fontSize: "8px", letterSpacing: "1px" }}>
          TOLDOS COMERCIAIS
        </text>
      </svg>
    </div>
  );
};
