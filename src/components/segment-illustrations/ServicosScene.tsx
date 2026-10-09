import { useEffect, useRef, useState } from "react";

export const ServicosScene = () => {
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
        aria-label="Ilustração animada de cobertura de posto de combustível"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="polyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3A86C8" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#8CC0DE" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#3A86C8" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="metalColumnGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#555B61" />
            <stop offset="50%" stopColor="#8A9097" />
            <stop offset="100%" stopColor="#40444A" />
          </linearGradient>
          <linearGradient id="carGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C8361D" />
            <stop offset="100%" stopColor="#801C0D" />
          </linearGradient>
          <linearGradient id="sunSweep" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <style>{`
          /* Car slide in and decelerate under canopy */
          .gas-station-car {
            transform: translateX(250px);
          }
          .active-anim .gas-station-car {
            animation: driveIn 8s infinite cubic-bezier(0.25, 1, 0.5, 1);
          }

          /* Sol reflection glide on polycarbonate cover */
          .active-anim .sun-reflection {
            animation: sunSweepAction 6s infinite ease-in-out;
          }

          /* Led blinkers */
          .led-light {
            fill: #FF4136;
            opacity: 0.4;
          }
          .active-anim .led-light-1 {
            animation: ledBlink 1.2s infinite steps(2);
          }
          .active-anim .led-light-2 {
            animation: ledBlink 1.2s infinite steps(2) 0.6s;
          }

          /* Hover interaction */
          .group:hover .gas-station-car {
            animation-duration: 4s; /* faster car loop on hover */
          }
          .group:hover .led-light {
            fill: #00FF66 !important; /* Green glowing leds on hover */
            opacity: 1 !important;
            filter: drop-shadow(0 0 3px #00FF66);
          }

          @keyframes driveIn {
            0% { transform: translateX(250px); }
            15%, 80% { transform: translateX(85px); } /* Parks under canopy */
            95%, 100% { transform: translateX(-150px); } /* Drives away */
          }
          @keyframes sunSweepAction {
            0% { transform: translateX(-180px) translateY(-50px); }
            35%, 100% { transform: translateX(180px) translateY(50px); }
          }
          @keyframes ledBlink {
            0%, 100% { fill: #FF851B; opacity: 1; filter: drop-shadow(0 0 2px #FF851B); }
            50% { fill: #333333; opacity: 0.3; filter: none; }
          }

          @media (prefers-reduced-motion: reduce) {
            .gas-station-car, .sun-reflection, .led-light-1, .led-light-2 {
              animation: none !important;
              transform: none !important;
            }
            .gas-station-car {
              transform: translateX(85px) !important;
            }
            .led-light-1, .led-light-2 {
              fill: #FF851B !important;
              opacity: 0.9 !important;
            }
          }
        `}</style>

        {/* Sky and Ground BG */}
        <rect width="400" height="160" fill="#202326" />
        <rect y="160" width="400" height="65" fill="#313539" />
        <line x1="0" y1="160" x2="400" y2="160" stroke="#101214" strokeWidth="2.5" />

        {/* Posto de combustível Backgound details */}
        <rect x="290" y="100" width="70" height="60" fill="#1C1F22" stroke="#2D3136" />
        <rect x="300" y="110" width="15" height="15" fill="#C8361D" opacity="0.3" />
        <rect x="330" y="110" width="15" height="15" fill="#C8361D" opacity="0.3" />

        {/* Posto Gas Pumps under the roof */}
        <g transform="translate(130, 115)">
          {/* Pump 1 */}
          <rect x="0" y="0" width="20" height="45" fill="#151719" stroke="#555" strokeWidth="1" rx="1" />
          <rect x="3" y="4" width="14" height="10" fill="#0D0E10" />
          <circle cx="7" cy="22" r="2.5" fill="#C8361D" />
          <path d="M17,15 Q21,15 21,35 L17,35" fill="none" stroke="#222" strokeWidth="2" />
        </g>
        <g transform="translate(230, 115)">
          {/* Pump 2 */}
          <rect x="0" y="0" width="20" height="45" fill="#151719" stroke="#555" strokeWidth="1" rx="1" />
          <rect x="3" y="4" width="14" height="10" fill="#0D0E10" />
          <circle cx="7" cy="22" r="2.5" fill="#F2B705" />
          <path d="M17,15 Q21,15 21,35 L17,35" fill="none" stroke="#222" strokeWidth="2" />
        </g>

        {/* Car driving in (Animação DriveIn) */}
        <g className="gas-station-car" transform="translate(0, 132)">
          {/* Car body */}
          <path d="M5,15 C5,10 12,9 25,9 C35,9 50,5 58,12 C62,15 65,18 65,22 L5,22 Z" fill="url(#carGrad)" />
          {/* Car window */}
          <path d="M25,11 Q32,10 38,10 Q45,10 47,13 L25,13 Z" fill="#222" />
          {/* Wheels */}
          <circle cx="18" cy="22" r="6" fill="#111" stroke="#444" strokeWidth="1" />
          <circle cx="18" cy="22" r="2.5" fill="#777" />
          <circle cx="48" cy="22" r="6" fill="#111" stroke="#444" strokeWidth="1" />
          <circle cx="48" cy="22" r="2.5" fill="#777" />
          {/* Light glow (yellow) */}
          <polygon points="63,16 80,14 80,22 63,19" fill="#F2B705" opacity="0.3" />
        </g>

        {/* COBERTURA METÁLICA DE POSTO EM POLICARBONATO (Cobertura Principal) */}
        <g id="station-canopy">
          {/* Structural Steel columns (perfil duplo em H) */}
          <rect x="110" y="55" width="8" height="105" fill="url(#metalColumnGrad)" />
          <rect x="260" y="55" width="8" height="105" fill="url(#metalColumnGrad)" />

          {/* Metal beams linking columns to roof */}
          <line x1="80" y1="55" x2="300" y2="55" stroke="#4A5056" strokeWidth="4" />
          <line x1="100" y1="55" x2="110" y2="65" stroke="#4A5056" strokeWidth="2" />
          <line x1="280" y1="55" x2="268" y2="65" stroke="#4A5056" strokeWidth="2" />

          {/* Translucent Polycarbonate Arched Panels (Coberturas curvas superiores) */}
          {/* Arch 1 */}
          <path d="M60,55 Q110,32 160,55" fill="none" stroke="url(#polyGrad)" strokeWidth="10" strokeLinecap="round" opacity="0.8" />
          {/* Arch 2 */}
          <path d="M150,55 Q200,32 250,55" fill="none" stroke="url(#polyGrad)" strokeWidth="10" strokeLinecap="round" opacity="0.8" />
          {/* Arch 3 */}
          <path d="M240,55 Q290,32 340,55" fill="none" stroke="url(#polyGrad)" strokeWidth="10" strokeLinecap="round" opacity="0.8" />

          {/* Polycarbonate frame borders */}
          <path d="M60,55 Q110,32 160,55" fill="none" stroke="#2C699E" strokeWidth="2.5" />
          <path d="M150,55 Q200,32 250,55" fill="none" stroke="#2C699E" strokeWidth="2.5" />
          <path d="M240,55 Q290,32 340,55" fill="none" stroke="#2C699E" strokeWidth="2.5" />

          {/* Testeira frontal (Canopy Front board with LEDs) */}
          <rect x="50" y="47" width="300" height="10" fill="#151719" stroke="#333" strokeWidth="1" />
          
          {/* Yellow decoration stripe */}
          <rect x="50" y="55" width="300" height="2" fill="#F2B705" />

          {/* LED blinkers along the board (flashing softly) */}
          <circle cx="65" cy="51" r="1.5" className="led-light led-light-1" />
          <circle cx="100" cy="51" r="1.5" className="led-light led-light-2" />
          <circle cx="150" cy="51" r="1.5" className="led-light led-light-1" />
          <circle cx="200" cy="51" r="1.5" className="led-light led-light-2" />
          <circle cx="250" cy="51" r="1.5" className="led-light led-light-1" />
          <circle cx="300" cy="51" r="1.5" className="led-light led-light-2" />
          <circle cx="335" cy="51" r="1.5" className="led-light led-light-1" />

          {/* Sun glint moving reflection across the polycarbonate arches */}
          <g style={{ clipPath: "inset(28px 45px 120px 45px)" }} opacity="0.5">
            <rect className="sun-reflection" x="-40" y="20" width="30" height="60" fill="url(#sunSweep)" transform="rotate(30)" />
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
