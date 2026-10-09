import { useEffect, useRef, useState } from "react";

export const InfraestruturaScene = () => {
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
        aria-label="Ilustração animada de carport e sombreamento de estacionamento"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#252A2E" />
            <stop offset="100%" stopColor="#1C1F22" />
          </linearGradient>
          <linearGradient id="groundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#313539" />
            <stop offset="100%" stopColor="#222528" />
          </linearGradient>
          <linearGradient id="roofGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C8361D" />
            <stop offset="100%" stopColor="#801000" />
          </linearGradient>
          <filter id="shadowBlur" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        <style>{`
          /* Structural carport assembly sequential animation */
          .assembly-col-1 { opacity: 0; transform: translateY(30px); }
          .assembly-col-2 { opacity: 0; transform: translateY(30px); }
          .assembly-roof-1 { opacity: 0; transform: scaleScale(0.3); transform-origin: 100px 85px; }
          .assembly-roof-2 { opacity: 0; transform: scaleScale(0.3); transform-origin: 260px 85px; }

          .active-anim .assembly-col-1 { animation: showCol 9s infinite ease-out; }
          .active-anim .assembly-col-2 { animation: showCol 9s infinite ease-out 0.8s; }
          .active-anim .assembly-roof-1 { animation: showRoof 9s infinite ease-out 1.6s; }
          .active-anim .assembly-roof-2 { animation: showRoof 9s infinite ease-out 2.4s; }

          /* Cars Parking */
          .parked-car-1 { transform: translateX(180px); opacity: 0; }
          .parked-car-2 { transform: translateX(180px); opacity: 0; }
          .active-anim .parked-car-1 { animation: parkCar1 9s infinite ease-out 3.5s; }
          .active-anim .parked-car-2 { animation: parkCar2 9s infinite ease-out 4.2s; }

          /* Sun Orbiting & shadow movement */
          .sun-element { transform: translate(300px, 35px); }
          .active-anim .sun-element { animation: moveSun 9s infinite linear; }
          
          .shifting-shadow { transform-origin: 200px 175px; }
          .active-anim .shifting-shadow { animation: rotateShadow 9s infinite ease-in-out; }

          @keyframes showCol {
            0% { opacity: 0; transform: translateY(30px); }
            5%, 85% { opacity: 1; transform: translateY(0); }
            95%, 100% { opacity: 0; transform: translateY(30px); }
          }
          @keyframes showRoof {
            0% { opacity: 0; transform: scale(0.1); }
            6%, 85% { opacity: 1; transform: scale(1); }
            95%, 100% { opacity: 0; transform: scale(0.1); }
          }
          @keyframes parkCar1 {
            0% { transform: translateX(180px); opacity: 0; }
            10%, 80% { transform: translateX(50px); opacity: 1; }
            90%, 100% { transform: translateX(-180px); opacity: 0; }
          }
          @keyframes parkCar2 {
            0% { transform: translateX(180px); opacity: 0; }
            10%, 80% { transform: translateX(210px); opacity: 1; }
            90%, 100% { transform: translateX(-180px); opacity: 0; }
          }
          @keyframes moveSun {
            0%, 100% { transform: translate(240px, 45px); opacity: 0; }
            5% { opacity: 1; }
            45% { transform: translate(140px, 15px); }
            80% { opacity: 1; }
            85% { transform: translate(60px, 45px); opacity: 0; }
          }
          @keyframes rotateShadow {
            0%, 100% { transform: skewX(-20deg) scaleY(0.9); opacity: 0.3; }
            50% { transform: skewX(15deg) scaleY(1); opacity: 0.5; }
          }

          @media (prefers-reduced-motion: reduce) {
            .assembly-col-1, .assembly-col-2, .assembly-roof-1, .assembly-roof-2, .parked-car-1, .parked-car-2, .sun-element, .shifting-shadow {
              animation: none !important;
              transform: none !important;
              opacity: 1 !important;
            }
            .parked-car-1 { transform: translateX(50px) !important; opacity: 1 !important; }
            .parked-car-2 { transform: translateX(210px) !important; opacity: 1 !important; }
            .sun-element { transform: translate(150px, 20px) !important; }
            .shifting-shadow { transform: skewX(5deg) scaleY(1) !important; opacity: 0.4 !important; }
          }
        `}</style>

        {/* Sky BG */}
        <rect width="400" height="155" fill="url(#skyGrad)" />
        <rect y="155" width="400" height="70" fill="url(#groundGrad)" />
        <line x1="0" y1="155" x2="400" y2="155" stroke="#111" strokeWidth="2.5" />

        {/* Shifting Shadows of Carports on floor (Animação rotateShadow) */}
        <g className="shifting-shadow" filter="url(#shadowBlur)">
          <rect x="35" y="155" width="130" height="40" fill="#050607" />
          <rect x="195" y="155" width="130" height="40" fill="#050607" />
        </g>

        {/* Moving Sun (Animação moveSun) */}
        <g className="sun-element" transform="translate(300, 30)">
          <circle cx="0" cy="0" r="12" fill="#F2B705" opacity="0.8" />
          <circle cx="0" cy="0" r="18" fill="#F2B705" opacity="0.2" />
        </g>

        {/* Parking spots markings */}
        <g stroke="#F4EFE6" strokeWidth="1" strokeDasharray="3 3" opacity="0.3">
          <line x1="40" y1="155" x2="10" y2="220" />
          <line x1="160" y1="155" x2="130" y2="220" />
          <line x1="200" y1="155" x2="170" y2="220" />
          <line x1="320" y1="155" x2="290" y2="220" />
        </g>

        {/* Cars Entering & Parking (Animação parkCar1 & parkCar2) */}
        {/* Car 1 */}
        <g className="parked-car-1" transform="translate(0, 125)">
          <rect x="-15" y="20" width="45" height="28" fill="#ECEFF1" rx="2" />
          <path d="M-12,20 L3,10 L18,10 L25,20 Z" fill="#2E3033" />
          <circle cx="-5" cy="48" r="6" fill="#111" />
          <circle cx="18" cy="48" r="6" fill="#111" />
          {/* Headlights yellow */}
          <polygon points="28,26 42,29 42,35 28,31" fill="#F2B705" opacity="0.3" />
        </g>
        {/* Car 2 */}
        <g className="parked-car-2" transform="translate(0, 125)">
          <rect x="-15" y="20" width="45" height="28" fill="#3A86C8" rx="2" />
          <path d="M-12,20 L3,10 L18,10 L25,20 Z" fill="#2E3033" />
          <circle cx="-5" cy="48" r="6" fill="#111" />
          <circle cx="18" cy="48" r="6" fill="#111" />
          {/* Headlights yellow */}
          <polygon points="28,26 42,29 42,35 28,31" fill="#F2B705" opacity="0.3" />
        </g>

        {/* STRUCTURAL CARPORT MODULAR ASSEMBLY (Animação assembly) */}
        {/* Module 1 */}
        <g id="module-1">
          {/* Cantilever Metal Column structure */}
          <g className="assembly-col-1">
            {/* Base block */}
            <rect x="95" y="148" width="10" height="8" fill="#455A64" />
            {/* Curved column column */}
            <path d="M100,150 L100,85 Q100,75 110,75 L150,75" fill="none" stroke="#37474F" strokeWidth="4" strokeLinecap="round" />
            <line x1="100" y1="120" x2="115" y2="105" stroke="#37474F" strokeWidth="2.5" />
          </g>
          {/* Arched cover membrane */}
          <g className="assembly-roof-1">
            <path d="M40,78 Q100,60 160,78 L150,85 Q100,70 50,85 Z" fill="url(#roofGrad)" />
            <path d="M40,78 Q100,60 160,78" fill="none" stroke="#1C1F22" strokeWidth="1.5" />
          </g>
        </g>

        {/* Module 2 */}
        <g id="module-2">
          {/* Cantilever Metal Column structure */}
          <g className="assembly-col-2">
            {/* Base block */}
            <rect x="255" y="148" width="10" height="8" fill="#455A64" />
            {/* Curved column column */}
            <path d="M260,150 L260,85 Q260,75 270,75 L310,75" fill="none" stroke="#37474F" strokeWidth="4" strokeLinecap="round" />
            <line x1="260" y1="120" x2="275" y2="105" stroke="#37474F" strokeWidth="2.5" />
          </g>
          {/* Arched cover membrane */}
          <g className="assembly-roof-2">
            <path d="M200,78 Q260,60 320,78 L310,85 Q260,70 210,85 Z" fill="url(#roofGrad)" />
            <path d="M200,78 Q260,60 320,78" fill="none" stroke="#1C1F22" strokeWidth="1.5" />
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
