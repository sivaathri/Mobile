import React from 'react';
import { ArrowRight } from 'lucide-react';

/* =========================================================================
   1. Exchange & Upgrade Graphic (3 Angled Phones + Floating Exchange Badge)
   ========================================================================= */
function ExchangeGraphic() {
  return (
    <svg
      viewBox="0 0 160 140"
      className="h-28 sm:h-32 w-auto object-contain flex-shrink-0 drop-shadow-xs"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Soft mint backdrop blob */}
        <radialGradient id="mint-glow" cx="70%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#b6e7ce" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#b6e7ce" stopOpacity="0" />
        </radialGradient>
        {/* Phone 1 (Black) Gradient */}
        <linearGradient id="phone-black" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2c3038" />
          <stop offset="100%" stopColor="#15171b" />
        </linearGradient>
        {/* Phone 2 (White/Cream) Gradient */}
        <linearGradient id="phone-white" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e8ecea" />
        </linearGradient>
        {/* Phone 3 (Alpine Green) Gradient */}
        <linearGradient id="phone-green" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#305845" />
          <stop offset="100%" stopColor="#193326" />
        </linearGradient>
        {/* Badge Drop Shadow */}
        <filter id="badge-shadow-1" x="50" y="55" width="46" height="46" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#004d30" floodOpacity="0.22" />
        </filter>
      </defs>

      {/* Background Soft Organic Blob */}
      <ellipse cx="115" cy="70" rx="42" ry="50" fill="url(#mint-glow)" />

      {/* Phone 1: Space Black (Back-Left) */}
      <g transform="translate(48, 26) rotate(-8)">
        <rect x="0" y="0" width="38" height="76" rx="9" fill="url(#phone-black)" stroke="#3f4550" strokeWidth="1.2" />
        <rect x="3" y="4" width="16" height="16" rx="4.5" fill="#1e2126" />
        <circle cx="8" cy="9" r="3.2" fill="#0c0d0f" stroke="#4b515d" strokeWidth="0.8" />
        <circle cx="8" cy="9" r="1.3" fill="#1e2229" />
        <circle cx="14" cy="15" r="3.2" fill="#0c0d0f" stroke="#4b515d" strokeWidth="0.8" />
        <circle cx="14" cy="15" r="1.3" fill="#1e2229" />
      </g>

      {/* Phone 2: Starlight White (Center) */}
      <g transform="translate(68, 18) rotate(3)">
        <rect x="0" y="0" width="39" height="78" rx="9.5" fill="url(#phone-white)" stroke="#d2d9d5" strokeWidth="1.2" />
        <rect x="4" y="4" width="16" height="16" rx="4.5" fill="#f0f4f2" stroke="#d5dcda" strokeWidth="0.6" />
        <circle cx="9" cy="9" r="3.2" fill="#1c2024" stroke="#c0c9c5" strokeWidth="0.8" />
        <circle cx="9" cy="9" r="1.2" fill="#323840" />
        <circle cx="15" cy="15" r="3.2" fill="#1c2024" stroke="#c0c9c5" strokeWidth="0.8" />
        <circle cx="15" cy="15" r="1.2" fill="#323840" />
      </g>

      {/* Phone 3: Alpine Green Pro (Front-Right) */}
      <g transform="translate(90, 8)">
        <rect x="0" y="0" width="44" height="92" rx="10" fill="url(#phone-green)" stroke="#43775f" strokeWidth="1.4" />
        {/* Triple Camera Island */}
        <rect x="5" y="6" width="22" height="23" rx="6" fill="#244535" stroke="#36654f" strokeWidth="0.8" />
        <circle cx="11" cy="12" r="3.8" fill="#0d1f16" stroke="#4d876d" strokeWidth="1" />
        <circle cx="11" cy="12" r="1.5" fill="#203f2f" />
        <circle cx="11" cy="23" r="3.8" fill="#0d1f16" stroke="#4d876d" strokeWidth="1" />
        <circle cx="11" cy="23" r="1.5" fill="#203f2f" />
        <circle cx="21" cy="17" r="3.8" fill="#0d1f16" stroke="#4d876d" strokeWidth="1" />
        <circle cx="21" cy="17" r="1.5" fill="#203f2f" />
        <circle cx="21" cy="9" r="1.2" fill="#fef08a" />
      </g>

      {/* Floating Circular Badge with Exchange Arrows */}
      <g filter="url(#badge-shadow-1)">
        <circle cx="73" cy="78" r="16" fill="#ffffff" stroke="#c8ecd9" strokeWidth="1.2" />
        {/* Top curved clockwise arrow */}
        <path
          d="M66.5 73.5 A 7.5 7.5 0 0 1 78.5 72.5"
          stroke="#00704A"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M76 70.5 L79.5 72.5 L76.5 75.5"
          stroke="#00704A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Bottom curved counter-clockwise arrow */}
        <path
          d="M79.5 82.5 A 7.5 7.5 0 0 1 67.5 83.5"
          stroke="#00704A"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M70 85.5 L66.5 83.5 L69.5 80.5"
          stroke="#00704A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  );
}

/* =========================================================================
   2. Student Special Graphic (3D Graduation Cap with Spark Rays)
   ========================================================================= */
function StudentGraphic() {
  return (
    <svg
      viewBox="0 0 160 140"
      className="h-28 sm:h-32 w-auto object-contain flex-shrink-0 drop-shadow-xs"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Soft purple glow */}
        <radialGradient id="purple-glow" cx="65%" cy="55%" r="60%">
          <stop offset="0%" stopColor="#d8caf9" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#d8caf9" stopOpacity="0" />
        </radialGradient>
        {/* Mortarboard top gradient */}
        <linearGradient id="cap-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2c2838" />
          <stop offset="45%" stopColor="#1f1b29" />
          <stop offset="100%" stopColor="#0f0c17" />
        </linearGradient>
        {/* Mortarboard skullcap gradient */}
        <linearGradient id="cap-skull" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#241f32" />
          <stop offset="100%" stopColor="#120e1c" />
        </linearGradient>
        {/* Drop shadow */}
        <filter id="cap-shadow" x="20" y="30" width="125" height="95" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#2a1b4e" floodOpacity="0.28" />
        </filter>
      </defs>

      {/* Background Soft Purple Glow */}
      <ellipse cx="95" cy="72" rx="46" ry="46" fill="url(#purple-glow)" />

      {/* Celebratory Spark Rays */}
      <g strokeWidth="2.5" strokeLinecap="round">
        {/* Top spark */}
        <line x1="84" y1="28" x2="84" y2="34" stroke="#5b21b6" />
        {/* Left spark */}
        <line x1="73" y1="36" x2="78" y2="40" stroke="#7c3aed" />
        {/* Right spark (orange/gold) */}
        <line x1="95" y1="36" x2="90" y2="40" stroke="#f59e0b" strokeWidth="2.8" />
      </g>

      {/* Graduation Cap with Shadow */}
      <g filter="url(#cap-shadow)">
        {/* Skull cap underneath */}
        <path
          d="M58 72 Q86 91 114 72 L114 83 Q86 102 58 83 Z"
          fill="url(#cap-skull)"
          stroke="#3d3356"
          strokeWidth="1.2"
        />

        {/* 3D Mortarboard Top diamond */}
        <polygon
          points="86,45 136,63 86,81 36,63"
          fill="url(#cap-top)"
          stroke="#44395e"
          strokeWidth="1.6"
        />

        {/* Gloss highlight edge on the diamond */}
        <line x1="37" y1="63" x2="86" y2="80" stroke="#68568e" strokeWidth="1.2" opacity="0.6" />

        {/* Center button */}
        <circle cx="86" cy="63" r="3.8" fill="#f59e0b" stroke="#b45309" strokeWidth="0.8" />

        {/* Golden hanging tassel */}
        <path
          d="M86 63 C100 70 106 82 108 97"
          stroke="#f59e0b"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Golden Tassel Fringe Band & Brush */}
        <rect x="105" y="96" width="6" height="3" rx="1" fill="#b45309" />
        <polygon points="104,99 112,99 113,113 103,113" fill="#f59e0b" />
        <line x1="106" y1="100" x2="106" y2="112" stroke="#d97706" strokeWidth="0.8" />
        <line x1="110" y1="100" x2="110" y2="112" stroke="#d97706" strokeWidth="0.8" />
      </g>
    </svg>
  );
}

/* =========================================================================
   3. Accessories Graphic (Sage Green Phone + AirPods Case + Smartwatch)
   ========================================================================= */
function AccessoriesGraphic() {
  return (
    <svg
      viewBox="0 0 160 140"
      className="h-28 sm:h-32 w-auto object-contain flex-shrink-0 drop-shadow-xs"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Warm amber backdrop glow */}
        <radialGradient id="amber-glow" cx="65%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#fed7aa" stopOpacity="0" />
        </radialGradient>
        {/* Phone in Sage Green Case */}
        <linearGradient id="phone-case" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4f6355" />
          <stop offset="100%" stopColor="#37483c" />
        </linearGradient>
        {/* Smartwatch screen glow */}
        <linearGradient id="watch-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#151b22" />
          <stop offset="100%" stopColor="#080c10" />
        </linearGradient>
      </defs>

      {/* Warm Amber Glow Background */}
      <circle cx="102" cy="68" r="44" fill="url(#amber-glow)" />

      {/* 1. Sage Green Phone in Silicone Case (Back Center) */}
      <g transform="translate(64, 14)">
        <rect x="0" y="0" width="46" height="88" rx="11" fill="url(#phone-case)" stroke="#607667" strokeWidth="1.5" />
        {/* Dual camera cutout bump */}
        <rect x="5" y="5" width="20" height="20" rx="5.5" fill="#303f34" stroke="#46584b" strokeWidth="0.8" />
        <circle cx="11" cy="11" r="3.8" fill="#141c16" stroke="#5d7263" strokeWidth="1" />
        <circle cx="11" cy="11" r="1.4" fill="#2c3a30" />
        <circle cx="11" cy="19" r="2.8" fill="#141c16" stroke="#5d7263" strokeWidth="1" />
        <circle cx="11" cy="19" r="1" fill="#2c3a30" />
      </g>

      {/* 2. Apple Watch / Smartwatch (Right Side) */}
      <g transform="translate(98, 42)">
        {/* Top strap */}
        <rect x="9" y="0" width="16" height="15" rx="3" fill="#1f242d" />
        {/* Bottom strap */}
        <rect x="9" y="47" width="16" height="17" rx="3" fill="#1f242d" />
        {/* Watch body casing */}
        <rect x="0" y="10" width="34" height="42" rx="9" fill="#11161d" stroke="#2d3748" strokeWidth="1.8" />
        {/* Watch screen */}
        <rect x="3.5" y="13.5" width="27" height="35" rx="6.5" fill="url(#watch-screen)" />
        {/* Crown button */}
        <rect x="34" y="20" width="2" height="7" rx="1" fill="#4a5568" />
        {/* Fitness / Watch UI Dial (Green Activity Ring) */}
        <circle cx="17" cy="31" r="8" stroke="#10b981" strokeWidth="1.8" strokeDasharray="38 12" fill="none" />
        <circle cx="17" cy="31" r="5" stroke="#3b82f6" strokeWidth="1.4" strokeDasharray="20 10" fill="none" />
        <circle cx="17" cy="31" r="1.2" fill="#ef4444" />
      </g>

      {/* 3. AirPods / Wireless Earbuds Case (Front Left) */}
      <g transform="translate(42, 58)">
        {/* Drop shadow */}
        <ellipse cx="23" cy="46" rx="20" ry="4" fill="#1f2937" opacity="0.15" />
        {/* Open White Case Base */}
        <rect x="5" y="16" width="36" height="28" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.2" />
        {/* Case Lid open / top notch */}
        <path d="M10 16 Q23 11 36 16" stroke="#cbd5e1" strokeWidth="1" fill="none" />
        {/* Status LED dot */}
        <circle cx="23" cy="27" r="1.3" fill="#10b981" />
        {/* Left Earbud in case */}
        <rect x="13" y="2" width="7" height="15" rx="3.5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
        <circle cx="16.5" cy="5.5" r="3.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
        <circle cx="18" cy="5.5" r="1" fill="#0f172a" />
        {/* Right Earbud in case */}
        <rect x="26" y="2" width="7" height="15" rx="3.5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
        <circle cx="29.5" cy="5.5" r="3.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
        <circle cx="31" cy="5.5" r="1" fill="#0f172a" />
      </g>
    </svg>
  );
}

/* =========================================================================
   4. Bulk Orders Graphic (Phone Trio + Floating Institution/Building Badge)
   ========================================================================= */
function BulkOrdersGraphic() {
  return (
    <svg
      viewBox="0 0 160 140"
      className="h-28 sm:h-32 w-auto object-contain flex-shrink-0 drop-shadow-xs"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Soft cool blue glow */}
        <radialGradient id="sky-glow" cx="65%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0" />
        </radialGradient>
        {/* Phone Silver */}
        <linearGradient id="phone-silver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dbe0e5" />
        </linearGradient>
        {/* Phone Deep Purple */}
        <linearGradient id="phone-deep-purple" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#433758" />
          <stop offset="100%" stopColor="#251d33" />
        </linearGradient>
        {/* Phone Sierra Blue */}
        <linearGradient id="phone-sierra-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9ec0db" />
          <stop offset="100%" stopColor="#6e93b0" />
        </linearGradient>
        {/* Floating badge drop shadow */}
        <filter id="badge-shadow-4" x="80" y="55" width="46" height="46" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#0f54c9" floodOpacity="0.22" />
        </filter>
      </defs>

      {/* Background Soft Sky Blue Glow */}
      <circle cx="106" cy="68" r="44" fill="url(#sky-glow)" />

      {/* Phone 1: Silver / Starlight (Back Left) */}
      <g transform="translate(56, 26)">
        <rect x="0" y="0" width="36" height="76" rx="8.5" fill="url(#phone-silver)" stroke="#c2cbd4" strokeWidth="1.2" />
        {/* Triple camera */}
        <rect x="3" y="4" width="16" height="17" rx="4.5" fill="#f1f4f7" stroke="#d5dde4" strokeWidth="0.6" />
        <circle cx="7.5" cy="8.5" r="2.6" fill="#1e252d" />
        <circle cx="7.5" cy="16.5" r="2.6" fill="#1e252d" />
        <circle cx="14.5" cy="12.5" r="2.6" fill="#1e252d" />
      </g>

      {/* Phone 2: Deep Purple (Center) */}
      <g transform="translate(76, 12)">
        <rect x="0" y="0" width="41" height="88" rx="9.5" fill="url(#phone-deep-purple)" stroke="#5d4f77" strokeWidth="1.4" />
        {/* Camera bump */}
        <rect x="4.5" y="5" width="19" height="20" rx="5" fill="#322846" stroke="#4c3d67" strokeWidth="0.8" />
        <circle cx="10" cy="10.5" r="3.2" fill="#120c1d" stroke="#5d4c7b" strokeWidth="0.8" />
        <circle cx="10" cy="19.5" r="3.2" fill="#120c1d" stroke="#5d4c7b" strokeWidth="0.8" />
        <circle cx="18" cy="15" r="3.2" fill="#120c1d" stroke="#5d4c7b" strokeWidth="0.8" />
        <circle cx="18" cy="8" r="1" fill="#fef08a" />
      </g>

      {/* Phone 3: Sierra Blue (Right) */}
      <g transform="translate(100, 18)">
        <rect x="0" y="0" width="38" height="82" rx="9" fill="url(#phone-sierra-blue)" stroke="#81a5c2" strokeWidth="1.3" />
        {/* Camera bump */}
        <rect x="4" y="5" width="18" height="19" rx="4.5" fill="#5c819f" stroke="#7198b9" strokeWidth="0.8" />
        <circle cx="9" cy="10" r="3" fill="#1a2d3c" stroke="#8cb2d0" strokeWidth="0.8" />
        <circle cx="9" cy="18" r="3" fill="#1a2d3c" stroke="#8cb2d0" strokeWidth="0.8" />
        <circle cx="16.5" cy="14" r="3" fill="#1a2d3c" stroke="#8cb2d0" strokeWidth="0.8" />
      </g>

      {/* Floating Circular Badge with Bank/Institution Building Icon */}
      <g filter="url(#badge-shadow-4)">
        <circle cx="103" cy="78" r="16" fill="#ffffff" stroke="#bfdbfe" strokeWidth="1.2" />
        {/* Classic Temple / Bank Institution Icon */}
        {/* Roof Pediment Triangle */}
        <polygon points="103,69 94,74 112,74" fill="#1366f0" />
        {/* Architrave beam under roof */}
        <rect x="94" y="74.5" width="18" height="1.8" rx="0.5" fill="#1366f0" />
        {/* 4 Columns */}
        <rect x="95" y="77" width="2" height="7.5" rx="0.5" fill="#1366f0" />
        <rect x="99" y="77" width="2" height="7.5" rx="0.5" fill="#1366f0" />
        <rect x="105" y="77" width="2" height="7.5" rx="0.5" fill="#1366f0" />
        <rect x="109" y="77" width="2" height="7.5" rx="0.5" fill="#1366f0" />
        {/* Base steps */}
        <rect x="93" y="85" width="20" height="2" rx="0.5" fill="#1366f0" />
      </g>
    </svg>
  );
}

/* =========================================================================
   Main PromoBanners Component (Matching Exact Reference UI Design)
   ========================================================================= */
export default function PromoBanners({ onPromoClick }) {
  return (
    <section className="w-full px-2.5 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-4.5">

        {/* -----------------------------------------------------------------
            Card 1: Exchange & Upgrade
           ----------------------------------------------------------------- */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#effaf4] via-[#e2f6eb] to-[#cef0de] border border-[#c4ebdb] p-4 sm:p-5 flex items-center justify-between shadow-2xs hover:shadow-md transition-all duration-200 group">
          {/* Left Content */}
          <div className="relative z-10 flex flex-col justify-between h-full max-w-[58%]">
            <div>
              <h3 className="text-base sm:text-[17px] lg:text-lg font-extrabold text-[#094936] tracking-tight leading-tight mb-1.5">
                Exchange & Upgrade
              </h3>
              <p className="text-[11px] sm:text-xs text-[#245d47] font-medium leading-snug mb-3.5">
                Give your old phone a new life with the best value.
              </p>
            </div>

            <button
              onClick={() => onPromoClick?.('Exchange')}
              className="inline-flex items-center gap-1.5 bg-[#00704A] hover:bg-[#00583a] text-white text-[11px] sm:text-xs font-bold px-3.5 sm:px-4 py-2 rounded-full shadow-xs hover:shadow transition-all duration-150 active:scale-95 group/btn w-fit"
            >
              <span>Exchange Now</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Right Visual Graphic */}
          <div className="relative z-0 flex items-center justify-end -mr-1 sm:-mr-2">
            <ExchangeGraphic />
          </div>
        </div>

        {/* -----------------------------------------------------------------
            Card 2: Student Special
           ----------------------------------------------------------------- */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#f6f2fe] via-[#ede6fc] to-[#ded2fa] border border-[#ded2fa] p-4 sm:p-5 flex items-center justify-between shadow-2xs hover:shadow-md transition-all duration-200 group">
          {/* Left Content */}
          <div className="relative z-10 flex flex-col justify-between h-full max-w-[58%]">
            <div>
              {/* Badge */}
              <div className="mb-1.5">
                <span className="inline-block bg-[#eae1fa] border border-[#c6b0f5] text-[#6234cc] text-[10px] sm:text-[10.5px] font-bold px-2.5 py-0.5 rounded-full shadow-2xs">
                  Student Special
                </span>
              </div>
              <h3 className="text-sm sm:text-base lg:text-[16.5px] font-extrabold text-[#1b1446] tracking-tight leading-tight mb-1.5">
                Extra Savings for a Smarter Future
              </h3>
              <p className="text-[11px] sm:text-xs text-[#554d7d] font-medium leading-snug mb-3.5">
                Exclusive deals for students.
              </p>
            </div>

            <button
              onClick={() => onPromoClick?.('Student Special')}
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#6234cc] to-[#4e22b8] hover:from-[#5428cb] hover:to-[#431c9e] text-white text-[11px] sm:text-xs font-bold px-3.5 sm:px-4 py-2 rounded-full shadow-xs hover:shadow transition-all duration-150 active:scale-95 group/btn w-fit"
            >
              <span>Get Offer</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Right Visual Graphic */}
          <div className="relative z-0 flex items-center justify-end -mr-1 sm:-mr-2">
            <StudentGraphic />
          </div>
        </div>

        {/* -----------------------------------------------------------------
            Card 3: Accessories
           ----------------------------------------------------------------- */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#fff7ed] via-[#ffedd5] to-[#fed7aa]/60 border border-[#fed7aa] p-4 sm:p-5 flex items-center justify-between shadow-2xs hover:shadow-md transition-all duration-200 group">
          {/* Left Content */}
          <div className="relative z-10 flex flex-col justify-between h-full max-w-[58%]">
            <div>
              <h3 className="text-base sm:text-[17px] lg:text-lg font-extrabold text-[#1f2937] tracking-tight leading-tight mb-1.5">
                Accessories
              </h3>
              <p className="text-[11px] sm:text-xs text-[#4b5563] font-medium leading-snug mb-3.5">
                Cases, chargers, earphones & more.
              </p>
            </div>

            <button
              onClick={() => onPromoClick?.('Accessories')}
              className="inline-flex items-center gap-1.5 bg-[#e67300] hover:bg-[#cc6600] text-white text-[11px] sm:text-xs font-bold px-3.5 sm:px-4 py-2 rounded-full shadow-xs hover:shadow transition-all duration-150 active:scale-95 group/btn w-fit"
            >
              <span>Shop Accessories</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Right Visual Graphic */}
          <div className="relative z-0 flex items-center justify-end -mr-1 sm:-mr-2">
            <AccessoriesGraphic />
          </div>
        </div>

        {/* -----------------------------------------------------------------
            Card 4: Bulk Orders
           ----------------------------------------------------------------- */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#eff6ff] via-[#dbeafe] to-[#bfdbfe]/60 border border-[#bfdbfe] p-4 sm:p-5 flex items-center justify-between shadow-2xs hover:shadow-md transition-all duration-200 group">
          {/* Left Content */}
          <div className="relative z-10 flex flex-col justify-between h-full max-w-[58%]">
            <div>
              <h3 className="text-base sm:text-[17px] lg:text-lg font-extrabold text-[#0f172a] tracking-tight leading-tight mb-1.5">
                Bulk Orders
              </h3>
              <p className="text-[11px] sm:text-xs text-[#334155] font-medium leading-snug mb-3.5">
                For businesses & institutions
              </p>
            </div>

            <button
              onClick={() => onPromoClick?.('Bulk Orders')}
              className="inline-flex items-center gap-1.5 bg-[#1366f0] hover:bg-[#0f54c9] text-white text-[11px] sm:text-xs font-bold px-3.5 sm:px-4 py-2 rounded-full shadow-xs hover:shadow transition-all duration-150 active:scale-95 group/btn w-fit"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Right Visual Graphic */}
          <div className="relative z-0 flex items-center justify-end -mr-1 sm:-mr-2">
            <BulkOrdersGraphic />
          </div>
        </div>

      </div>
    </section>
  );
}
