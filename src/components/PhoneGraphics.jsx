import React from 'react';

// Reusable realistic phone mockup renderer matching the models in the design
export function PhoneMockup({ type, className = "h-40 w-auto object-contain" }) {
  switch (type) {
    case 'iphone14-purple':
      return (
        <svg viewBox="0 0 160 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Phone 1: Front View */}
          <rect x="18" y="10" width="58" height="118" rx="14" fill="#1e152a" stroke="#4a3b63" strokeWidth="2.5" />
          {/* Screen */}
          <rect x="22" y="14" width="50" height="110" rx="10" fill="url(#grad-purple-screen)" />
          {/* Dynamic Island */}
          <rect x="37" y="18" width="20" height="6" rx="3" fill="#000" />
          
          {/* Phone 2: Back View angled */}
          <g transform="translate(75, 8)">
            <rect x="0" y="2" width="60" height="118" rx="14" fill="#58456f" stroke="#715c89" strokeWidth="2.5" />
            {/* Camera bump */}
            <rect x="6" y="8" width="28" height="30" rx="7" fill="#463659" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))" />
            {/* Diagonal dual lenses */}
            <circle cx="16" cy="18" r="6" fill="#1c1624" stroke="#715c89" strokeWidth="1.5" />
            <circle cx="16" cy="18" r="2.5" fill="#0b0811" />
            <circle cx="24" cy="28" r="6" fill="#1c1624" stroke="#715c89" strokeWidth="1.5" />
            <circle cx="24" cy="28" r="2.5" fill="#0b0811" />
            {/* Flash & mic */}
            <circle cx="26" cy="15" r="2" fill="#fffae0" />
            {/* Apple logo subtle */}
            <circle cx="30" cy="58" r="4.5" fill="#715c89" opacity="0.6" />
          </g>

          <defs>
            <linearGradient id="grad-purple-screen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#30184e" />
              <stop offset="50%" stopColor="#693b9b" />
              <stop offset="100%" stopColor="#1e1030" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'galaxy-s23':
      return (
        <svg viewBox="0 0 160 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Phone 1: Front */}
          <rect x="18" y="10" width="56" height="118" rx="11" fill="#111827" stroke="#9ca3af" strokeWidth="2" />
          <rect x="21" y="13" width="50" height="112" rx="9" fill="url(#grad-s23-screen)" />
          <circle cx="46" cy="19" r="2" fill="#000" />
          
          {/* Phone 2: Back Botanic Green / Cream */}
          <g transform="translate(76, 10)">
            <rect x="0" y="0" width="58" height="118" rx="11" fill="#314035" stroke="#485c4e" strokeWidth="2" />
            {/* Triple floating lenses */}
            <circle cx="14" cy="18" r="5.5" fill="#17221a" stroke="#688070" strokeWidth="1.5" />
            <circle cx="14" cy="34" r="5.5" fill="#17221a" stroke="#688070" strokeWidth="1.5" />
            <circle cx="14" cy="50" r="5.5" fill="#17221a" stroke="#688070" strokeWidth="1.5" />
            <circle cx="24" cy="18" r="2" fill="#fef08a" />
          </g>

          <defs>
            <linearGradient id="grad-s23-screen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2e3831" />
              <stop offset="60%" stopColor="#556b5d" />
              <stop offset="100%" stopColor="#d5ded7" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'oneplus-11r':
      return (
        <svg viewBox="0 0 160 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Front */}
          <rect x="18" y="10" width="56" height="118" rx="12" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
          <rect x="21" y="13" width="50" height="112" rx="10" fill="url(#grad-op-screen)" />
          {/* Back */}
          <g transform="translate(76, 10)">
            <rect x="0" y="0" width="58" height="118" rx="12" fill="#1e293b" stroke="#334155" strokeWidth="2" />
            {/* Signature circular camera module wrapping to edge */}
            <circle cx="22" cy="30" r="16" fill="#0f172a" stroke="#94a3b8" strokeWidth="1.5" />
            <circle cx="17" cy="24" r="4.5" fill="#000" stroke="#475569" />
            <circle cx="27" cy="24" r="4.5" fill="#000" stroke="#475569" />
            <circle cx="17" cy="35" r="4" fill="#000" />
            <circle cx="27" cy="35" r="2.5" fill="#fef08a" />
          </g>
          <defs>
            <linearGradient id="grad-op-screen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'xiaomi-13pro':
      return (
        <svg viewBox="0 0 160 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="10" width="56" height="118" rx="12" fill="#000" stroke="#52525b" strokeWidth="2" />
          <rect x="21" y="13" width="50" height="112" rx="10" fill="url(#grad-mi-screen)" />
          <g transform="translate(76, 10)">
            <rect x="0" y="0" width="58" height="118" rx="12" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
            {/* Big square camera island */}
            <rect x="4" y="6" width="34" height="34" rx="8" fill="#09090b" stroke="#71717a" strokeWidth="1" />
            <circle cx="15" cy="18" r="6" fill="#18181b" stroke="#a1a1aa" strokeWidth="1.5" />
            <circle cx="27" cy="18" r="4" fill="#18181b" />
            <circle cx="20" cy="31" r="4.5" fill="#18181b" />
            <rect x="27" y="27" width="7" height="3" rx="1" fill="#ef4444" />
          </g>
          <defs>
            <linearGradient id="grad-mi-screen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b0764" />
              <stop offset="50%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#2e1065" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'vivo-v27':
      return (
        <svg viewBox="0 0 160 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="10" width="56" height="118" rx="12" fill="#0f172a" stroke="#93c5fd" strokeWidth="2" />
          <rect x="21" y="13" width="50" height="112" rx="10" fill="url(#grad-vivo-screen)" />
          <g transform="translate(76, 10)">
            <rect x="0" y="0" width="58" height="118" rx="12" fill="#bfdbfe" stroke="#93c5fd" strokeWidth="2" />
            {/* Camera bump with Aura ring */}
            <rect x="4" y="6" width="22" height="42" rx="6" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="1" />
            <circle cx="15" cy="15" r="4" fill="#1e293b" />
            <circle cx="15" cy="27" r="4" fill="#1e293b" />
            <circle cx="15" cy="38" r="4.5" fill="none" stroke="#38bdf8" strokeWidth="2" />
          </g>
          <defs>
            <linearGradient id="grad-vivo-screen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'pixel-7':
      return (
        <svg viewBox="0 0 160 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="10" width="56" height="118" rx="12" fill="#000" stroke="#cbd5e1" strokeWidth="2" />
          <rect x="21" y="13" width="50" height="112" rx="10" fill="url(#grad-pixel-screen)" />
          <g transform="translate(76, 10)">
            <rect x="0" y="0" width="58" height="118" rx="12" fill="#ecfccb" stroke="#d9f99d" strokeWidth="2" />
            {/* Iconic Visor Bar */}
            <rect x="0" y="18" width="58" height="18" fill="#d9f99d" stroke="#84cc16" strokeWidth="0.8" />
            {/* Pill cutout with dual camera */}
            <rect x="8" y="22" width="22" height="10" rx="5" fill="#0f172a" />
            <circle cx="13" cy="27" r="3" fill="#334155" />
            <circle cx="23" cy="27" r="3" fill="#334155" />
            <circle cx="44" cy="27" r="2.5" fill="#fef08a" />
          </g>
          <defs>
            <linearGradient id="grad-pixel-screen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3f6212" />
              <stop offset="50%" stopColor="#84cc16" />
              <stop offset="100%" stopColor="#ecfccb" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'iphone13-pink':
      return (
        <svg viewBox="0 0 160 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="10" width="58" height="118" rx="14" fill="#261b23" stroke="#fbcfe8" strokeWidth="2" />
          <rect x="22" y="14" width="50" height="110" rx="10" fill="url(#grad-pink-screen)" />
          <g transform="translate(76, 8)">
            <rect x="0" y="2" width="60" height="118" rx="14" fill="#fce7f3" stroke="#fbcfe8" strokeWidth="2" />
            <rect x="6" y="8" width="28" height="30" rx="7" fill="#fbcfe8" />
            <circle cx="16" cy="18" r="5.5" fill="#1c1624" stroke="#f472b6" strokeWidth="1" />
            <circle cx="24" cy="28" r="5.5" fill="#1c1624" stroke="#f472b6" strokeWidth="1" />
          </g>
          <defs>
            <linearGradient id="grad-pink-screen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#831843" />
              <stop offset="60%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#fdf2f8" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'realme-gt2':
      return (
        <svg viewBox="0 0 160 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="10" width="56" height="118" rx="12" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
          <rect x="21" y="13" width="50" height="112" rx="10" fill="url(#grad-realme-screen)" />
          <g transform="translate(76, 10)">
            <rect x="0" y="0" width="58" height="118" rx="12" fill="#1e293b" stroke="#334155" strokeWidth="2" />
            <rect x="6" y="6" width="22" height="34" rx="5" fill="#334155" />
            <circle cx="17" cy="15" r="4.5" fill="#0f172a" />
            <circle cx="17" cy="27" r="4.5" fill="#0f172a" />
          </g>
          <defs>
            <linearGradient id="grad-realme-screen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#064e3b" />
              <stop offset="60%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'galaxy-s22':
      return (
        <svg viewBox="0 0 160 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="10" width="56" height="118" rx="12" fill="#09090b" stroke="#3f3f46" strokeWidth="2" />
          <rect x="21" y="13" width="50" height="112" rx="10" fill="url(#grad-s22-screen)" />
          <circle cx="46" cy="18" r="2" fill="#000" />
          <g transform="translate(76, 10)">
            <rect x="0" y="0" width="58" height="118" rx="12" fill="#18181b" stroke="#27272a" strokeWidth="2" />
            <rect x="2" y="4" width="22" height="52" rx="8" fill="#27272a" />
            <circle cx="13" cy="14" r="5" fill="#09090b" stroke="#52525b" strokeWidth="1.2" />
            <circle cx="13" cy="28" r="5" fill="#09090b" stroke="#52525b" strokeWidth="1.2" />
            <circle cx="13" cy="42" r="5" fill="#09090b" stroke="#52525b" strokeWidth="1.2" />
            <circle cx="28" cy="16" r="2" fill="#fef08a" />
          </g>
          <defs>
            <linearGradient id="grad-s22-screen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#18181b" />
              <stop offset="60%" stopColor="#3f3f46" />
              <stop offset="100%" stopColor="#09090b" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'oneplus-nord3':
      return (
        <svg viewBox="0 0 160 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="10" width="56" height="118" rx="12" fill="#064e3b" stroke="#a7f3d0" strokeWidth="2" />
          <rect x="21" y="13" width="50" height="112" rx="10" fill="url(#grad-nord3-screen)" />
          <circle cx="46" cy="18" r="2" fill="#000" />
          <g transform="translate(76, 10)">
            <rect x="0" y="0" width="58" height="118" rx="12" fill="#d1fae5" stroke="#a7f3d0" strokeWidth="2" />
            {/* Dual circular rings */}
            <circle cx="18" cy="18" r="8" fill="#ecfdf5" stroke="#34d399" strokeWidth="1.5" />
            <circle cx="18" cy="18" r="4" fill="#064e3b" />
            <circle cx="18" cy="38" r="8" fill="#ecfdf5" stroke="#34d399" strokeWidth="1.5" />
            <circle cx="15" cy="38" r="2.5" fill="#064e3b" />
            <circle cx="21" cy="38" r="2.5" fill="#064e3b" />
            <circle cx="34" cy="18" r="2" fill="#34d399" />
          </g>
          <defs>
            <linearGradient id="grad-nord3-screen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#064e3b" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#d1fae5" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'moto-edge30':
      return (
        <svg viewBox="0 0 160 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="10" width="56" height="118" rx="12" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
          <rect x="21" y="13" width="50" height="112" rx="10" fill="url(#grad-moto-screen)" />
          <circle cx="46" cy="18" r="2" fill="#000" />
          <g transform="translate(76, 10)">
            <rect x="0" y="0" width="58" height="118" rx="12" fill="#312e81" stroke="#4338ca" strokeWidth="2" />
            <rect x="5" y="6" width="22" height="42" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.2" />
            <circle cx="16" cy="15" r="4.5" fill="#4338ca" />
            <circle cx="16" cy="27" r="4.5" fill="#4338ca" />
            <circle cx="16" cy="39" r="3" fill="#6366f1" />
            <circle cx="29" cy="65" r="6" fill="#4338ca" opacity="0.6" />
          </g>
          <defs>
            <linearGradient id="grad-moto-screen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#431407" />
              <stop offset="50%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'nothing-1':
      return (
        <svg viewBox="0 0 160 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="10" width="56" height="118" rx="12" fill="#000" stroke="#71717a" strokeWidth="2" />
          <rect x="21" y="13" width="50" height="112" rx="10" fill="#18181b" />
          <g transform="translate(76, 10)">
            <rect x="0" y="0" width="58" height="118" rx="12" fill="#18181b" stroke="#52525b" strokeWidth="2" />
            {/* Glyph LED light strips */}
            <circle cx="29" cy="62" r="16" stroke="#ffffff" strokeWidth="2.5" fill="none" strokeDasharray="6 4" opacity="0.9" />
            <path d="M 12 12 L 28 12 L 28 42" stroke="#ffffff" strokeWidth="2.5" fill="none" opacity="0.9" />
            <path d="M 29 88 L 29 110" stroke="#ffffff" strokeWidth="2.5" fill="none" opacity="0.9" />
            <circle cx="16" cy="22" r="5" fill="#000" stroke="#a1a1aa" />
            <circle cx="16" cy="34" r="5" fill="#000" stroke="#a1a1aa" />
          </g>
        </svg>
      );

    default:
      // Generic smart device front and back
      return (
        <svg viewBox="0 0 160 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="10" width="56" height="118" rx="12" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
          <rect x="21" y="13" width="50" height="112" rx="10" fill="url(#grad-gen-screen)" />
          <g transform="translate(76, 10)">
            <rect x="0" y="0" width="58" height="118" rx="12" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
            <rect x="6" y="8" width="20" height="30" rx="5" fill="#94a3b8" />
            <circle cx="16" cy="17" r="4" fill="#1e293b" />
            <circle cx="16" cy="28" r="4" fill="#1e293b" />
          </g>
          <defs>
            <linearGradient id="grad-gen-screen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="60%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#93c5fd" />
            </linearGradient>
          </defs>
        </svg>
      );
  }
}

// Brand SVG logos
export function BrandIcon({ name, className = "h-5 w-5" }) {
  switch (name.toLowerCase()) {
    case 'apple':
    case 'iphone':
      return (
        <svg viewBox="0 0 170 170" className={className} fill="currentColor">
          <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.74 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.08-7.77-8.08-12.24-15.01-6.73-10.46-11.83-22.11-15.3-34.95-3.47-12.84-5.2-24.62-5.2-35.34 0-16.14 4.09-29.43 12.27-39.88 8.18-10.45 18.25-15.77 30.2-15.96 4.35 0 9.28 1.15 14.79 3.44 5.51 2.29 9.17 3.49 10.99 3.6 2.05-.22 5.92-1.51 11.61-3.87 5.69-2.36 10.74-3.44 15.15-3.23 11.24.54 20.44 4.41 27.6 11.62 7.16 7.21 11.64 16.27 13.43 27.18-10.05 6.09-15.07 14.74-15.07 25.96 0 9.04 3.69 16.79 11.07 23.24 7.38 6.45 16.03 10.37 25.96 11.77-2.12 6.53-4.58 12.94-7.38 19.23zM119.22 33.14c0-7.38 2.65-14.28 7.95-20.7 5.3-6.42 11.7-10.57 19.2-12.44.45 1.57.67 3.23.67 4.98 0 7.49-2.73 14.44-8.19 20.86-5.46 6.42-12.02 10.49-19.68 12.21-.45-1.57-.67-3.23-.67-4.91z"/>
        </svg>
      );
    case 'samsung':
      return (
        <span className="font-extrabold text-[12px] tracking-tighter uppercase text-blue-700 font-sans">
          SAMSUNG
        </span>
      );
    case 'oneplus':
      return (
        <div className="w-5 h-5 bg-red-600 rounded flex items-center justify-center text-white font-bold text-[10px]">
          1+
        </div>
      );
    case 'xiaomi':
      return (
        <div className="w-5 h-5 bg-amber-500 rounded flex items-center justify-center text-white font-bold text-[9px]">
          mi
        </div>
      );
    case 'realme':
      return (
        <div className="w-5 h-5 bg-amber-400 rounded-sm flex items-center justify-center text-black font-extrabold text-[11px]">
          R
        </div>
      );
    case 'vivo':
      return (
        <span className="font-bold text-[12px] text-blue-600 lowercase tracking-wide">
          vivo
        </span>
      );
    case 'oppo':
      return (
        <span className="font-bold text-[12px] text-emerald-600 lowercase tracking-wider">
          oppo
        </span>
      );
    case 'google':
    case 'google pixel':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.25 21.37 7.33 24 12 24z"/>
          <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.97 0 12s.46 3.84 1.26 5.42l4.02-3.15z"/>
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.25 2.63 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
        </svg>
      );
    case 'motorola':
      return (
        <div className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold text-[10px]">
          M
        </div>
      );
    case 'nothing':
      return (
        <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-gray-900">
          (N)
        </span>
      );
    case 'nokia':
      return (
        <span className="font-black text-[10px] uppercase tracking-widest text-blue-800">
          NOKIA
        </span>
      );
    case 'infinix':
      return (
        <span className="font-semibold text-[10px] text-gray-900 tracking-tight">
          Infinix
        </span>
      );
    case 'tecno':
      return (
        <span className="font-bold text-[10px] text-blue-600 tracking-wider uppercase">
          TECNO
        </span>
      );
    default:
      return null;
  }
}
