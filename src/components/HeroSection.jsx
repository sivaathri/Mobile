import React from 'react';
import { ArrowRight, ShieldCheck, RotateCcw, Truck, Leaf, CheckCircle2 } from 'lucide-react';

export default function HeroSection({ onExplore, onSellClick, onViewDeals }) {
  return (
    <section className="w-full px-4 lg:px-6 xl:px-8 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 xl:gap-5 items-stretch">
        
        {/* Left Hero Banner (8 of 12 columns) */}
        <div className="lg:col-span-8 rounded-2xl bg-gradient-to-br from-[#ebf8f2] via-[#e5f5ed] to-[#dcf1e6] border border-emerald-100/80 p-6 md:p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between shadow-sm">
          
          {/* Top Tag & Main Typography */}
          <div className="relative z-10 max-w-lg">
            {/* Category Pill */}
            <div className="inline-block px-3 py-1 bg-white/70 backdrop-blur-sm rounded-full text-[11px] font-bold tracking-wider text-emerald-900 uppercase mb-3 border border-emerald-100">
              PRE-OWNED MOBILES
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-[52px] font-extrabold text-gray-950 tracking-tight leading-[1.08] mb-3">
              Good Phones<br />
              <span className="text-[#093d2e]">New Opportunities</span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-normal max-w-md">
              Buy and sell certified second-hand phones at the best prices. Reliable. Affordable. Sustainable.
            </p>

            {/* Explore Phones CTA Button */}
            <div>
              <button
                onClick={onExplore}
                className="inline-flex items-center gap-2 bg-[#0b4d3c] hover:bg-[#07362a] text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-sm hover:shadow transition-all group"
              >
                <span>Explore Phones</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Artistic Phone Mockup Showcase & Handwritten Script */}
          <div className="relative lg:absolute right-4 bottom-14 lg:bottom-12 w-full lg:w-[380px] h-[240px] pointer-events-none mt-6 lg:mt-0 flex items-center justify-center">
            
            {/* Handwritten Script Tagline: "Same Phones Brighter Futures" */}
            <div className="absolute -top-4 left-2 sm:left-6 lg:-left-12 z-20 transform -rotate-6 text-center select-none">
              <span className="font-script text-2xl sm:text-3xl font-bold text-gray-800 tracking-wide block drop-shadow-sm">
                Same<br />
                <span className="text-[#0b4d3c] text-3xl sm:text-4xl">Phones</span><br />
                <span className="italic text-emerald-800">Brighter</span><br />
                Futures
              </span>
              {/* Hand-drawn Green Underline Swash */}
              <svg viewBox="0 0 100 20" className="w-24 h-4 mx-auto text-emerald-600 stroke-current fill-none stroke-[3]">
                <path d="M 5 12 Q 50 18 95 6" strokeLinecap="round" />
              </svg>
            </div>

            {/* Showcase Smartphones Trio */}
            <div className="relative flex items-end justify-center w-full h-full">
              
              {/* Phone 1: Black iPhone Pro Back Triple Camera */}
              <div className="relative -mr-10 transform -rotate-12 hover:rotate-0 transition-transform duration-300 z-10 filter drop-shadow-xl">
                <div className="w-28 h-56 rounded-[24px] bg-[#1e2329] border-[3px] border-[#374151] p-1.5 shadow-2xl relative">
                  {/* Camera bump */}
                  <div className="w-14 h-14 rounded-2xl bg-[#111827] p-1 shadow-inner relative">
                    <div className="w-5 h-5 rounded-full bg-black border-2 border-gray-600 absolute top-1.5 left-1.5 shadow-sm" />
                    <div className="w-5 h-5 rounded-full bg-black border-2 border-gray-600 absolute bottom-1.5 left-1.5 shadow-sm" />
                    <div className="w-5 h-5 rounded-full bg-black border-2 border-gray-600 absolute top-4 right-1.5 shadow-sm" />
                    <div className="w-2 h-2 rounded-full bg-amber-100 absolute bottom-2.5 right-2" />
                  </div>
                  {/* Glass sheen reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 rounded-[22px] pointer-events-none" />
                </div>
              </div>

              {/* Phone 2: Center Purple iPhone Front / Dual */}
              <div className="relative z-20 filter drop-shadow-2xl transform -translate-y-2">
                <div className="w-32 h-60 rounded-[26px] bg-[#534369] border-[3.5px] border-[#725e8d] p-1.5 shadow-2xl relative overflow-hidden">
                  <div className="w-full h-full rounded-[20px] bg-gradient-to-b from-[#38224d] via-[#653f8a] to-[#251336] p-2 flex flex-col justify-between">
                    {/* Notch / Dynamic Island */}
                    <div className="w-12 h-3.5 bg-black rounded-full mx-auto" />
                    <div className="text-center text-white/30 text-[9px] font-bold tracking-wider">
                      SecondKart Certified
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 3: Starlight / Gold Phone */}
              <div className="relative -ml-10 transform rotate-12 z-10 filter drop-shadow-xl">
                <div className="w-28 h-56 rounded-[24px] bg-[#fdfaf2] border-[3px] border-[#e2d5b6] p-1.5 shadow-2xl relative">
                  {/* Gold camera island */}
                  <div className="w-12 h-24 rounded-xl bg-[#faf6eb] border border-[#e5d8b8] p-1">
                    <div className="w-5 h-5 rounded-full bg-[#3d372e] border border-amber-300 mb-1" />
                    <div className="w-5 h-5 rounded-full bg-[#3d372e] border border-amber-300 mb-1" />
                    <div className="w-5 h-5 rounded-full bg-[#3d372e] border border-amber-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-bl from-white/40 via-transparent to-transparent rounded-[22px]" />
                </div>
              </div>

            </div>

          </div>

          {/* Bottom 4 Assurance Highlights */}
          <div className="mt-8 pt-6 border-t border-emerald-200/60 grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
              <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0" />
              <span>Quality Checked</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
              <RotateCcw className="w-4 h-4 text-emerald-700 flex-shrink-0" />
              <span>7-Day Returns</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
              <Truck className="w-4 h-4 text-emerald-700 flex-shrink-0" />
              <span>Pan India Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-800">
              <Leaf className="w-4 h-4 text-emerald-700 flex-shrink-0" />
              <span>Eco-Friendly Choice</span>
            </div>
          </div>

        </div>

        {/* Right Stacked Cards (4 of 12 columns) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          
          {/* Card 1: Sell Your Phone */}
          <div className="flex-1 rounded-2xl bg-gradient-to-br from-[#fdf2f0] to-[#fcebe8] border border-rose-100 p-5 md:p-6 flex flex-col justify-between relative overflow-hidden shadow-sm">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                Sell Your Phone
              </h2>
              <p className="text-xs text-gray-600 mb-4">
                Get instant price, free pickup
              </p>
              
              <button
                onClick={onSellClick}
                className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 text-xs font-bold px-4 py-2 rounded-full shadow-xs hover:shadow transition-all group"
              >
                <span>Sell Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Hand Holding Phone Illustration & 3 Benefits */}
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-rose-200/50">
              {/* Phone Graphic */}
              <div className="relative w-16 h-24 rounded-xl bg-pink-100 border-2 border-pink-200 p-1 flex-shrink-0 shadow-sm flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-b from-rose-200 to-rose-400 rounded-lg flex items-center justify-center">
                  <span className="text-[9px] font-bold text-white">₹ Instant</span>
                </div>
              </div>

              {/* 3 Green Checklist items */}
              <div className="flex flex-col gap-1.5 text-[11px] font-medium text-gray-800">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Best Price</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Free Pickup</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Instant Payment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Upgrade for Less */}
          <div className="flex-1 rounded-2xl bg-gradient-to-br from-[#eff6fa] to-[#e4f0f7] border border-sky-100 p-5 md:p-6 flex flex-col justify-between relative overflow-hidden shadow-sm">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                Upgrade for Less
              </h2>
              <p className="text-xs text-gray-600 mb-4">
                Top brands at great prices
              </p>
              
              <button
                onClick={onViewDeals}
                className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 text-xs font-bold px-4 py-2 rounded-full shadow-xs hover:shadow transition-all group"
              >
                <span>View Deals</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Cluster of phones & Green "Save Up To 70%" badge */}
            <div className="flex items-end justify-between mt-2 pt-2">
              {/* Phone lineup preview */}
              <div className="flex -space-x-4 items-end">
                <div className="w-10 h-18 rounded-lg bg-gray-900 border border-gray-700 shadow-md" />
                <div className="w-11 h-20 rounded-lg bg-indigo-900 border border-indigo-700 shadow-md" />
                <div className="w-12 h-22 rounded-lg bg-blue-600 border border-blue-400 shadow-lg" />
              </div>

              {/* Circular Badge: Save Up To 70% */}
              <div className="w-16 h-16 rounded-full bg-[#0e5c45] text-white flex flex-col items-center justify-center text-center p-1 shadow-md transform hover:scale-105 transition-transform">
                <span className="text-[9px] font-medium leading-none uppercase">Save</span>
                <span className="text-[9px] font-medium leading-none">Up To</span>
                <span className="text-sm font-extrabold leading-none mt-0.5">70%</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
