import React from 'react';
import { ArrowRight, ShieldCheck, Truck, Leaf } from 'lucide-react';
import heroBg from '../assets/hero1.png';
import sellHandImg from '../assets/sell_phone_hand.jpg';
import upgradePhonesImg from '../assets/upgrade_phones.jpg';

export default function HeroSection({ onExplore, onSellClick, onViewDeals }) {
  return (
    <section className="w-full px-3 sm:px-4 lg:px-6 xl:px-8 pt-1.5 pb-2">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
        
        {/* Left Hero Banner (8 of 12 columns) */}
        <div 
          className="lg:col-span-8 rounded-2xl border border-emerald-100/90 p-4 sm:p-5 lg:p-5.5 relative overflow-hidden flex flex-col justify-between shadow-xs bg-[#e8f7f0] bg-cover bg-no-repeat min-h-[220px] lg:min-h-[235px]"
          style={{ 
            backgroundImage: `url(${heroBg})`,
            backgroundPosition: 'right bottom',
          }}
        >
          {/* Main Content (Left side) */}
          <div className="relative z-20 max-w-xs sm:max-w-sm lg:max-w-md">
            {/* Category Tag */}
            <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.14em] text-[#0d3b2e] uppercase mb-1 sm:mb-1.5">
              PRE-OWNED MOBILES
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[35px] font-black text-[#0c1a24] tracking-tight leading-[1.06] mb-1.5 sm:mb-2">
              Good Phones<br />
              New Opportunities
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-[11px] sm:text-[12px] lg:text-[12.5px] leading-snug sm:leading-relaxed mb-3 sm:mb-3.5 font-medium max-w-[270px] sm:max-w-[320px]">
              Buy and sell certified second-hand phones at the best prices.<br className="hidden sm:inline" /> Reliable. Affordable. Sustainable.
            </p>

            {/* Explore Phones Button */}
            <div>
              <button
                onClick={onExplore}
                className="inline-flex items-center gap-1.5 bg-[#00684a] hover:bg-[#00523a] text-white text-xs sm:text-[12.5px] font-semibold px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-lg shadow-2xs hover:shadow transition-all group cursor-pointer"
              >
                <span>Explore Phones</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Handwritten Angle Tagline ("Same Phones Brighter Futures") */}
          <div className="hidden md:block absolute left-[38%] lg:left-[41%] top-[46%] -translate-y-1/2 z-10 transform -rotate-[7deg] text-center select-none pointer-events-none">
            <div className="font-script text-[21px] lg:text-[25px] xl:text-[27px] font-bold text-[#0d3b2e] leading-[1.02] tracking-wide">
              <span>Same</span><br />
              <span>Phones</span><br />
              <span className="italic">Brighter</span><br />
              <span>Futures</span>
            </div>
            {/* Double Green Curve Swash Underline */}
            <svg viewBox="0 0 120 28" className="w-20 lg:w-24 h-4 lg:h-5 mx-auto text-[#059669] stroke-current fill-none stroke-[2.8] -mt-0.5">
              <path d="M 8 10 C 42 20, 82 17, 112 7" strokeLinecap="round" />
              <path d="M 42 20 C 66 24, 92 20, 110 15" strokeLinecap="round" strokeWidth="2.2" />
            </svg>
          </div>

          {/* Bottom 4 Assurance Highlights */}
          <div className="mt-4 sm:mt-auto pt-2 grid grid-cols-2 sm:flex sm:items-center sm:gap-4 lg:gap-5 xl:gap-6 gap-y-1.5 relative z-20">
            {/* Quality Checked */}
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[10.5px] lg:text-[11px] font-semibold text-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-800 flex-shrink-0 stroke-[2.2]" />
              <span>Quality Checked</span>
            </div>

            {/* 7-Day Returns (circular arrow with 7 inside) */}
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[10.5px] lg:text-[11px] font-semibold text-slate-800">
              <svg className="w-3.5 h-3.5 text-slate-800 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
                <text x="12" y="15" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="currentColor" stroke="none">7</text>
              </svg>
              <span>7-Day Returns</span>
            </div>

            {/* Pan India Delivery */}
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[10.5px] lg:text-[11px] font-semibold text-slate-800">
              <Truck className="w-3.5 h-3.5 text-slate-800 flex-shrink-0 stroke-[2.2]" />
              <span>Pan India Delivery</span>
            </div>

            {/* Eco-Friendly Choice */}
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[10.5px] lg:text-[11px] font-semibold text-slate-800">
              <Leaf className="w-3.5 h-3.5 text-slate-800 flex-shrink-0 stroke-[2.2]" />
              <span>Eco-Friendly Choice</span>
            </div>
          </div>

        </div>

        {/* Right Stacked Cards (4 of 12 columns) */}
        <div className="lg:col-span-4 flex flex-col gap-3 justify-between">
          
          {/* Card 1: Sell Your Phone */}
          <div 
            onClick={onSellClick}
            className="flex-1 rounded-2xl bg-gradient-to-r from-[#fef0f2] via-[#fde9ed] to-[#fce3e7] border border-rose-100/90 px-3.5 py-3 sm:px-4 sm:py-3.5 flex items-center justify-between relative overflow-hidden shadow-xs cursor-pointer group min-h-[105px]"
          >
            {/* Left: Text & Button */}
            <div className="z-10 flex flex-col items-start justify-center max-w-[125px] sm:max-w-[140px]">
              <h2 className="text-sm sm:text-[15px] lg:text-[16px] font-extrabold text-[#0f172a] leading-tight mb-0.5">
                Sell Your Phone
              </h2>
              <p className="text-[10px] sm:text-[10.5px] text-slate-500 font-medium leading-tight mb-2">
                Get instant price, free pickup
              </p>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSellClick();
                }}
                className="inline-flex items-center gap-1 bg-white hover:bg-gray-50 text-[#0f172a] border border-gray-200/90 text-[10px] sm:text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-2xs group-hover:shadow transition-all"
              >
                <span>Sell Now</span>
                <ArrowRight className="w-3 h-3 text-slate-700 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Middle: Hand Holding Pink Phone Image */}
            <div className="absolute left-[36%] sm:left-[39%] lg:left-[40%] bottom-0 h-full flex items-end justify-center pointer-events-none">
              <img 
                src={sellHandImg} 
                alt="Sell Phone" 
                className="h-[105%] sm:h-[110%] w-auto object-contain object-bottom mix-blend-multiply"
              />
            </div>

            {/* Right: 3 Benefits with Green Check Badges */}
            <div className="z-10 flex flex-col gap-1.5 sm:gap-2 justify-center pl-1">
              <div className="flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#059669] flex items-center justify-center flex-shrink-0 text-white shadow-2xs">
                  <svg className="w-2.5 h-2.5 stroke-current fill-none stroke-[2.8]" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[10px] sm:text-[10.5px] lg:text-[11px] font-bold text-slate-800 whitespace-nowrap">Best Price</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#059669] flex items-center justify-center flex-shrink-0 text-white shadow-2xs">
                  <svg className="w-2.5 h-2.5 stroke-current fill-none stroke-[2.8]" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[10px] sm:text-[10.5px] lg:text-[11px] font-bold text-slate-800 whitespace-nowrap">Free Pickup</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#059669] flex items-center justify-center flex-shrink-0 text-white shadow-2xs">
                  <svg className="w-2.5 h-2.5 stroke-current fill-none stroke-[2.8]" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[10px] sm:text-[10.5px] lg:text-[11px] font-bold text-slate-800 whitespace-nowrap">Instant Payment</span>
              </div>
            </div>
          </div>

          {/* Card 2: Upgrade for Less */}
          <div 
            onClick={onViewDeals}
            className="flex-1 rounded-2xl bg-gradient-to-r from-[#edf6fc] via-[#e5f0f8] to-[#d8eaf5] border border-sky-100/90 px-3.5 py-3 sm:px-4 sm:py-3.5 flex items-center justify-between relative overflow-hidden shadow-xs cursor-pointer group min-h-[105px]"
          >
            {/* Left: Text & Button */}
            <div className="z-10 flex flex-col items-start justify-center max-w-[125px] sm:max-w-[140px]">
              <h2 className="text-sm sm:text-[15px] lg:text-[16px] font-extrabold text-[#0f172a] leading-tight mb-0.5">
                Upgrade for Less
              </h2>
              <p className="text-[10px] sm:text-[10.5px] text-slate-500 font-medium leading-tight mb-2">
                Top brands at great prices
              </p>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onViewDeals();
                }}
                className="inline-flex items-center gap-1 bg-white hover:bg-gray-50 text-[#0f172a] border border-gray-200/90 text-[10px] sm:text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-2xs group-hover:shadow transition-all"
              >
                <span>View Deals</span>
                <ArrowRight className="w-3 h-3 text-slate-700 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Right: Phone Trio Image */}
            <div className="absolute right-0 bottom-0 h-full w-[52%] flex items-end justify-end pointer-events-none">
              <img 
                src={upgradePhonesImg} 
                alt="Upgrade Phones" 
                className="h-[105%] sm:h-[110%] w-auto object-contain object-right-bottom mix-blend-multiply"
              />
            </div>

            {/* Circular Green Badge: Save Up to 70% */}
            <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#00684a] text-white flex flex-col items-center justify-center text-center shadow-md select-none transform group-hover:scale-105 transition-transform">
              <span className="text-[7.5px] sm:text-[8px] font-medium leading-none uppercase tracking-wide">Save</span>
              <span className="text-[7px] sm:text-[7.5px] font-medium leading-none text-emerald-100 mt-0.5">Up to</span>
              <span className="text-[11px] sm:text-xs font-black leading-none mt-0.5">70%</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

