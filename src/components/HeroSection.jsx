import React from 'react';
import { ArrowRight, ShieldCheck, RotateCcw, Truck, Leaf, CheckCircle2 } from 'lucide-react';
import heroBg from '../assets/hero1.png';

export default function HeroSection({ onExplore, onSellClick, onViewDeals }) {
  return (
    <section className="w-full px-4 lg:px-6 xl:px-8 pt-1.5 pb-1.5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
        
        {/* Left Hero Banner with hero.png as background */}
        <div 
          className="lg:col-span-8 rounded-2xl border border-emerald-100/80 p-3 sm:p-4 lg:p-4.5 relative overflow-hidden flex flex-col justify-between shadow-xs bg-cover bg-right bg-no-repeat min-h-[185px] lg:min-h-[195px]"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          
          {/* Top Tag & Main Typography */}
          <div className="relative z-20 max-w-xs sm:max-w-sm">
            {/* Category Pill */}
            <div className="inline-block px-2 py-0.5 bg-white/80 backdrop-blur-sm rounded-full text-[9px] font-bold tracking-wider text-emerald-900 uppercase mb-1 border border-emerald-100">
              PRE-OWNED MOBILES
            </div>

            {/* Headline */}
            <h1 className="text-xl sm:text-2xl lg:text-[27px] xl:text-[31px] font-extrabold text-gray-950 tracking-tight leading-[1.08] mb-1">
              Good Phones<br />
              <span className="text-[#093d2e]">New Opportunities</span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-700 text-[11px] sm:text-xs leading-snug mb-2 font-medium max-w-[270px] sm:max-w-[310px]">
              Buy and sell certified second-hand phones at the best prices. Reliable. Affordable. Sustainable.
            </p>

            {/* Explore Phones CTA Button */}
            <div>
              <button
                onClick={onExplore}
                className="inline-flex items-center gap-1.5 bg-[#0b4d3c] hover:bg-[#07362a] text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow-2xs hover:shadow transition-all group"
              >
                <span>Explore Phones</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Handwritten Script Tagline positioned in the open space to the left of the phone */}
          <div className="hidden sm:block absolute left-[36%] md:left-[38%] lg:left-[40%] bottom-8 lg:bottom-9 z-20 transform -rotate-6 text-center select-none pointer-events-none">
            <span className="font-script text-lg lg:text-xl font-bold text-gray-800 tracking-wide block drop-shadow-xs leading-tight">
              Same<br />
              <span className="text-[#0b4d3c] text-xl lg:text-2xl">Phones</span><br />
              <span className="italic text-emerald-800">Brighter</span><br />
              Futures
            </span>
            {/* Hand-drawn Green Underline Swash */}
            <svg viewBox="0 0 100 20" className="w-16 h-3 mx-auto text-emerald-600 stroke-current fill-none stroke-[2.5]">
              <path d="M 5 12 Q 50 18 95 6" strokeLinecap="round" />
            </svg>
          </div>

          {/* Bottom 4 Assurance Highlights */}
          <div className="mt-2 pt-1.5 border-t border-emerald-300/40 grid grid-cols-2 sm:grid-cols-4 gap-2 relative z-20">
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[10.5px] font-semibold text-gray-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
              <span>Quality Checked</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[10.5px] font-semibold text-gray-800">
              <RotateCcw className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
              <span>7-Day Returns</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[10.5px] font-semibold text-gray-800">
              <Truck className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
              <span>Pan India Delivery</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[10.5px] font-semibold text-gray-800">
              <Leaf className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
              <span>Eco-Friendly Choice</span>
            </div>
          </div>

        </div>

        {/* Right Stacked Cards (4 of 12 columns) */}
        <div className="lg:col-span-4 flex flex-col gap-2.5">
          
          {/* Card 1: Sell Your Phone */}
          <div className="flex-1 rounded-xl bg-gradient-to-br from-[#fdf2f0] to-[#fcebe8] border border-rose-100 p-3 flex flex-col justify-between relative overflow-hidden shadow-2xs">
            <div>
              <h2 className="text-sm lg:text-base font-bold text-gray-900 leading-tight mb-0.5">
                Sell Your Phone
              </h2>
              <p className="text-[10px] text-gray-600 mb-1.5">
                Get instant price, free pickup
              </p>
              
              <button
                onClick={onSellClick}
                className="inline-flex items-center gap-1 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-2xs hover:shadow transition-all group"
              >
                <span>Sell Now</span>
                <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Hand Holding Phone Illustration & 3 Benefits */}
            <div className="flex items-center justify-between mt-1 pt-1 border-t border-rose-200/50">
              <div className="relative w-9 h-14 rounded-md bg-pink-100 border border-pink-200 p-0.5 flex-shrink-0 shadow-2xs flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-b from-rose-200 to-rose-400 rounded-sm flex items-center justify-center">
                  <span className="text-[7px] font-bold text-white">₹ Instant</span>
                </div>
              </div>

              {/* 3 Green Checklist items */}
              <div className="flex flex-col gap-0.5 text-[9.5px] font-medium text-gray-800">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600 flex-shrink-0" />
                  <span>Best Price</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600 flex-shrink-0" />
                  <span>Free Pickup</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600 flex-shrink-0" />
                  <span>Instant Payment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Upgrade for Less */}
          <div className="flex-1 rounded-xl bg-gradient-to-br from-[#eff6fa] to-[#e4f0f7] border border-sky-100 p-3 flex flex-col justify-between relative overflow-hidden shadow-2xs">
            <div>
              <h2 className="text-sm lg:text-base font-bold text-gray-900 leading-tight mb-0.5">
                Upgrade for Less
              </h2>
              <p className="text-[10px] text-gray-600 mb-1.5">
                Top brands at great prices
              </p>
              
              <button
                onClick={onViewDeals}
                className="inline-flex items-center gap-1 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-2xs hover:shadow transition-all group"
              >
                <span>View Deals</span>
                <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Cluster of phones & Green "Save Up To 70%" badge */}
            <div className="flex items-end justify-between mt-1 pt-1">
              <div className="flex -space-x-2.5 items-end">
                <div className="w-6 h-10 rounded-sm bg-gray-900 border border-gray-700 shadow-2xs" />
                <div className="w-6.5 h-12 rounded-sm bg-indigo-900 border border-indigo-700 shadow-2xs" />
                <div className="w-7 h-13 rounded-sm bg-blue-600 border border-blue-400 shadow-xs" />
              </div>

              {/* Circular Badge: Save Up To 70% */}
              <div className="w-10 h-10 rounded-full bg-[#0e5c45] text-white flex flex-col items-center justify-center text-center p-0.5 shadow-2xs transform hover:scale-105 transition-transform">
                <span className="text-[7px] font-medium leading-none uppercase">Save</span>
                <span className="text-[7px] font-medium leading-none">Up To</span>
                <span className="text-[10px] font-extrabold leading-none mt-0.5">70%</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
