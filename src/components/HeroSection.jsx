import React from 'react';
import { ArrowRight, ShieldCheck, RotateCcw, Truck, Leaf, CheckCircle2 } from 'lucide-react';

export default function HeroSection({ onExplore, onSellClick, onViewDeals }) {
  return (
    <section className="w-full px-4 lg:px-6 xl:px-8 pt-2 pb-2">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
        
        {/* Left Hero Banner (8 of 12 columns) */}
        <div className="lg:col-span-8 rounded-2xl bg-gradient-to-br from-[#ebf8f2] via-[#e5f5ed] to-[#dcf1e6] border border-emerald-100/80 p-4 md:p-5 lg:p-6 relative overflow-hidden flex flex-col justify-between shadow-xs">
          
          {/* Top Tag & Main Typography */}
          <div className="relative z-10 max-w-md">
            {/* Category Pill */}
            <div className="inline-block px-2.5 py-0.5 bg-white/70 backdrop-blur-sm rounded-full text-[10px] font-bold tracking-wider text-emerald-900 uppercase mb-2 border border-emerald-100">
              PRE-OWNED MOBILES
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-extrabold text-gray-950 tracking-tight leading-[1.1] mb-2">
              Good Phones<br />
              <span className="text-[#093d2e]">New Opportunities</span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed mb-3.5 font-normal max-w-sm">
              Buy and sell certified second-hand phones at the best prices. Reliable. Affordable. Sustainable.
            </p>

            {/* Explore Phones CTA Button */}
            <div>
              <button
                onClick={onExplore}
                className="inline-flex items-center gap-1.5 bg-[#0b4d3c] hover:bg-[#07362a] text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-xs hover:shadow transition-all group"
              >
                <span>Explore Phones</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Artistic Phone Mockup Showcase & Handwritten Script */}
          <div className="relative lg:absolute right-4 bottom-10 lg:bottom-10 w-full lg:w-[320px] xl:w-[350px] h-[175px] pointer-events-none mt-3 lg:mt-0 flex items-center justify-center">
            
            {/* Handwritten Script Tagline: "Same Phones Brighter Futures" */}
            <div className="absolute -top-3 left-2 sm:left-4 lg:-left-10 z-20 transform -rotate-6 text-center select-none">
              <span className="font-script text-xl sm:text-2xl font-bold text-gray-800 tracking-wide block drop-shadow-xs">
                Same<br />
                <span className="text-[#0b4d3c] text-2xl sm:text-3xl">Phones</span><br />
                <span className="italic text-emerald-800">Brighter</span><br />
                Futures
              </span>
              {/* Hand-drawn Green Underline Swash */}
              <svg viewBox="0 0 100 20" className="w-20 h-3.5 mx-auto text-emerald-600 stroke-current fill-none stroke-[2.5]">
                <path d="M 5 12 Q 50 18 95 6" strokeLinecap="round" />
              </svg>
            </div>

            {/* Showcase Smartphones Trio */}
            <div className="relative flex items-end justify-center w-full h-full">
              
              {/* Phone 1: Black iPhone Pro Back Triple Camera */}
              <div className="relative -mr-8 transform -rotate-12 hover:rotate-0 transition-transform duration-300 z-10 filter drop-shadow-lg">
                <div className="w-22 h-44 rounded-[18px] bg-[#1e2329] border-[2.5px] border-[#374151] p-1 shadow-xl relative">
                  {/* Camera bump */}
                  <div className="w-11 h-11 rounded-xl bg-[#111827] p-0.5 shadow-inner relative">
                    <div className="w-4 h-4 rounded-full bg-black border border-gray-600 absolute top-1 left-1 shadow-xs" />
                    <div className="w-4 h-4 rounded-full bg-black border border-gray-600 absolute bottom-1 left-1 shadow-xs" />
                    <div className="w-4 h-4 rounded-full bg-black border border-gray-600 absolute top-3.5 right-1 shadow-xs" />
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-100 absolute bottom-2 right-1.5" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 rounded-[16px] pointer-events-none" />
                </div>
              </div>

              {/* Phone 2: Center Purple iPhone Front */}
              <div className="relative z-20 filter drop-shadow-xl transform -translate-y-1">
                <div className="w-26 h-48 rounded-[20px] bg-[#534369] border-[3px] border-[#725e8d] p-1 shadow-2xl relative overflow-hidden">
                  <div className="w-full h-full rounded-[16px] bg-gradient-to-b from-[#38224d] via-[#653f8a] to-[#251336] p-1.5 flex flex-col justify-between">
                    <div className="w-10 h-2.5 bg-black rounded-full mx-auto" />
                    <div className="text-center text-white/35 text-[8px] font-bold tracking-wider pb-1">
                      SecondKart Certified
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 3: Starlight / Gold Phone */}
              <div className="relative -ml-8 transform rotate-12 z-10 filter drop-shadow-lg">
                <div className="w-22 h-44 rounded-[18px] bg-[#fdfaf2] border-[2.5px] border-[#e2d5b6] p-1 shadow-xl relative">
                  <div className="w-10 h-18 rounded-lg bg-[#faf6eb] border border-[#e5d8b8] p-1">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#3d372e] border border-amber-300 mb-0.5" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#3d372e] border border-amber-300 mb-0.5" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#3d372e] border border-amber-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-bl from-white/40 via-transparent to-transparent rounded-[16px]" />
                </div>
              </div>

            </div>

          </div>

          {/* Bottom 4 Assurance Highlights */}
          <div className="mt-4 pt-2.5 border-t border-emerald-200/60 grid grid-cols-2 sm:grid-cols-4 gap-2 relative z-10">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
              <span>Quality Checked</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-800">
              <RotateCcw className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
              <span>7-Day Returns</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-800">
              <Truck className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
              <span>Pan India Delivery</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-800">
              <Leaf className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
              <span>Eco-Friendly Choice</span>
            </div>
          </div>

        </div>

        {/* Right Stacked Cards (4 of 12 columns) */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          
          {/* Card 1: Sell Your Phone */}
          <div className="flex-1 rounded-2xl bg-gradient-to-br from-[#fdf2f0] to-[#fcebe8] border border-rose-100 p-4 flex flex-col justify-between relative overflow-hidden shadow-xs">
            <div>
              <h2 className="text-base lg:text-lg font-bold text-gray-900 leading-tight mb-0.5">
                Sell Your Phone
              </h2>
              <p className="text-[11px] text-gray-600 mb-2.5">
                Get instant price, free pickup
              </p>
              
              <button
                onClick={onSellClick}
                className="inline-flex items-center gap-1 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-2xs hover:shadow transition-all group"
              >
                <span>Sell Now</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Hand Holding Phone Illustration & 3 Benefits */}
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-rose-200/50">
              {/* Phone Graphic */}
              <div className="relative w-12 h-18 rounded-lg bg-pink-100 border border-pink-200 p-0.5 flex-shrink-0 shadow-xs flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-b from-rose-200 to-rose-400 rounded-md flex items-center justify-center">
                  <span className="text-[8px] font-bold text-white">₹ Instant</span>
                </div>
              </div>

              {/* 3 Green Checklist items */}
              <div className="flex flex-col gap-1 text-[10px] font-medium text-gray-800">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                  <span>Best Price</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                  <span>Free Pickup</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                  <span>Instant Payment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Upgrade for Less */}
          <div className="flex-1 rounded-2xl bg-gradient-to-br from-[#eff6fa] to-[#e4f0f7] border border-sky-100 p-4 flex flex-col justify-between relative overflow-hidden shadow-xs">
            <div>
              <h2 className="text-base lg:text-lg font-bold text-gray-900 leading-tight mb-0.5">
                Upgrade for Less
              </h2>
              <p className="text-[11px] text-gray-600 mb-2.5">
                Top brands at great prices
              </p>
              
              <button
                onClick={onViewDeals}
                className="inline-flex items-center gap-1 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-2xs hover:shadow transition-all group"
              >
                <span>View Deals</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Cluster of phones & Green "Save Up To 70%" badge */}
            <div className="flex items-end justify-between mt-1 pt-1">
              {/* Phone lineup preview */}
              <div className="flex -space-x-3 items-end">
                <div className="w-7 h-13 rounded-md bg-gray-900 border border-gray-700 shadow-sm" />
                <div className="w-8 h-15 rounded-md bg-indigo-900 border border-indigo-700 shadow-sm" />
                <div className="w-9 h-17 rounded-md bg-blue-600 border border-blue-400 shadow" />
              </div>

              {/* Circular Badge: Save Up To 70% */}
              <div className="w-13 h-13 rounded-full bg-[#0e5c45] text-white flex flex-col items-center justify-center text-center p-1 shadow-sm transform hover:scale-105 transition-transform">
                <span className="text-[8px] font-medium leading-none uppercase">Save</span>
                <span className="text-[8px] font-medium leading-none">Up To</span>
                <span className="text-xs font-extrabold leading-none mt-0.5">70%</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
