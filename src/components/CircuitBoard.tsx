"use client";

export default function CircuitBoard() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-30"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="pulseGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="40%" stopColor="#8B5CF6" />
          <stop offset="60%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
        <linearGradient id="pulseGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="40%" stopColor="#8B5CF6" />
          <stop offset="60%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Static circuit board grid lines */}
      <g stroke="rgba(139, 92, 246, 0.1)" strokeWidth="1" fill="none">
        {/* Horizontal lines */}
        <path d="M0,100 H400 L420,120 H600" />
        <path d="M200,200 H350 L370,180 H500 L520,200 H700" />
        <path d="M0,300 H150 L170,320 H400" />
        <path d="M100,400 H300 L320,380 H450 L470,400 H650" />
        <path d="M0,500 H250 L270,520 H500" />
        
        {/* Vertical lines */}
        <path d="M100,0 V150 L120,170 V300" />
        <path d="M250,100 V250 L230,270 V400" />
        <path d="M400,0 V200 L420,220 V350" />
        <path d="M550,150 V300 L530,320 V500" />
        <path d="M700,0 V250 L720,270 V450" />
        
        {/* Right side patterns */}
        <path d="M800,150 H950 L970,170 H1100" />
        <path d="M850,350 H1000 L1020,330 H1200" />
        <path d="M900,550 H1050 L1070,570 H1300" />
        <path d="M850,50 V200 L870,220 V400" />
        <path d="M1000,100 V350 L1020,370 V550" />
        <path d="M1150,0 V300 L1130,320 V500" />
      </g>

      {/* Animated pulse paths */}
      <g fill="none" filter="url(#glow)">
        <path
          className="circuit-path-1"
          d="M0,100 H400 L420,120 H600"
          stroke="url(#pulseGradient1)"
          strokeWidth="2"
        />
        <path
          className="circuit-path-2"
          d="M100,0 V150 L120,170 V300"
          stroke="url(#pulseGradient2)"
          strokeWidth="2"
        />
        <path
          className="circuit-path-3"
          d="M200,200 H350 L370,180 H500 L520,200 H700"
          stroke="url(#pulseGradient1)"
          strokeWidth="2"
        />
        <path
          className="circuit-path-4"
          d="M400,0 V200 L420,220 V350"
          stroke="url(#pulseGradient2)"
          strokeWidth="2"
        />
        <path
          className="circuit-path-5"
          d="M0,300 H150 L170,320 H400"
          stroke="url(#pulseGradient1)"
          strokeWidth="2"
        />
        
        {/* Right side animated paths */}
        <path
          className="circuit-path-2"
          d="M800,150 H950 L970,170 H1100"
          stroke="url(#pulseGradient1)"
          strokeWidth="2"
        />
        <path
          className="circuit-path-4"
          d="M850,50 V200 L870,220 V400"
          stroke="url(#pulseGradient2)"
          strokeWidth="2"
        />
        <path
          className="circuit-path-1"
          d="M1000,100 V350 L1020,370 V550"
          stroke="url(#pulseGradient2)"
          strokeWidth="2"
        />
      </g>


    </svg>
  );
}
