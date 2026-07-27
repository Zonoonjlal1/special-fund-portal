import React from 'react';

interface LogoCrestProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  lightMode?: boolean;
}

export const LogoCrest: React.FC<LogoCrestProps> = ({
  size = 'md',
  showText = true,
  className = '',
  lightMode = false,
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28',
  };

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      <div className={`relative flex-shrink-0 ${sizeMap[size]}`}>
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-md transition-transform duration-300 hover:scale-105"
        >
          {/* Outer Ring & Border */}
          <circle cx="200" cy="200" r="192" fill="#FFFFFF" stroke="#0F172A" strokeWidth="8" />
          <circle cx="200" cy="200" r="185" fill="none" stroke="#D4AF37" strokeWidth="3" />
          <circle cx="200" cy="200" r="172" fill="none" stroke="#1E293B" strokeWidth="4" />

          {/* Bismillah Text Top Arc */}
          <path id="topArc" d="M 100 130 A 130 130 0 0 1 300 130" fill="none" />
          <text fontSize="15" fontWeight="bold" fill="#0F172A" textAnchor="middle">
            <textPath href="#topArc" startOffset="50%">
              بسم الله الرحمن الرحيم
            </textPath>
          </text>

          {/* Curved Text Bottom Arc for Arabic */}
          <path id="bottomArcAr" d="M 60 210 A 145 145 0 0 0 340 210" fill="none" />
          <text fontSize="14" fontWeight="bold" fill="#1E293B" textAnchor="middle">
            <textPath href="#bottomArcAr" startOffset="50%">
              الصندوق الخاص للتأمين الاجتماعي للعاملين بالقوات المسلحة
            </textPath>
          </text>

          {/* Outer Bottom Arc for English */}
          <path id="bottomArcEn" d="M 45 230 A 160 160 0 0 0 355 230" fill="none" />
          <text fontSize="10.5" fontWeight="600" fill="#0F172A" textAnchor="middle">
            <textPath href="#bottomArcEn" startOffset="50%">
              Special Fund for Social Security of Armed Forces Employees
            </textPath>
          </text>

          {/* Central Emblem Group */}
          <g transform="translate(200, 190)">
            {/* Green Umbrella Canopy */}
            <path
              d="M -75 -65 Q 0 -115 75 -65 Q 45 -85 20 -70 Q 0 -80 -20 -70 Q -45 -85 -75 -65 Z"
              fill="#059669"
              stroke="#065F46"
              strokeWidth="2"
            />
            {/* Umbrella Ridges */}
            <path d="M -75 -65 Q 0 -115 75 -65" fill="none" stroke="#047857" strokeWidth="2" />
            <path d="M 0 -115 L 0 -68" stroke="#047857" strokeWidth="2.5" />
            <path d="M -35 -92 L -25 -68" stroke="#047857" strokeWidth="2" />
            <path d="M 35 -92 L 25 -68" stroke="#047857" strokeWidth="2" />

            {/* Umbrella Center Stem */}
            <rect x="-7" y="-68" width="14" height="120" rx="3" fill="#047857" />

            {/* Outer U Frame - Red */}
            <path
              d="M -60 -45 L -60 25 A 60 60 0 0 0 60 25 L 60 -45"
              fill="none"
              stroke="#DC2626"
              strokeWidth="14"
              strokeLinecap="square"
            />

            {/* Middle U Frame - Dark Navy */}
            <path
              d="M -44 -45 L -44 25 A 44 44 0 0 0 44 25 L 44 -45"
              fill="none"
              stroke="#0F172A"
              strokeWidth="12"
              strokeLinecap="square"
            />

            {/* Inner White Space Behind Stem Keyhole */}
            <rect x="-18" y="-30" width="36" height="80" rx="4" fill="#FFFFFF" />

            {/* Keyhole Symbol in Center Green Stem */}
            <rect x="-6" y="-68" width="12" height="115" fill="#059669" />
            <circle cx="0" cy="12" r="7" fill="#FFFFFF" />
            <polygon points="-4,15 4,15 6,32 -6,32" fill="#FFFFFF" />
          </g>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left rtl:text-right">
          <span className={`text-base md:text-lg font-bold leading-tight tracking-wide font-serif ${lightMode ? 'text-slate-900' : 'text-slate-100'}`}>
            الصندوق الخاص للتأمين الاجتماعي
          </span>
          <span className={`text-xs md:text-sm font-semibold leading-none mt-0.5 ${lightMode ? 'text-amber-700' : 'text-[#E2C997]'}`}>
            للعاملين بالقوات المسلحة
          </span>
          <span className={`text-[10px] uppercase tracking-wider font-semibold mt-1 ${lightMode ? 'text-slate-600' : 'text-[#C5A059]'}`}>
            Special Fund for Social Security
          </span>
        </div>
      )}
    </div>
  );
};
