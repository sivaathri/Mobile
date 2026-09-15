import React from 'react';
import { ArrowRight, RefreshCw, GraduationCap, Headphones } from 'lucide-react';

export default function PromoBanners({ onPromoClick }) {
  return (
    <section className="w-full px-4 lg:px-6 xl:px-8 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Exchange & Upgrade */}
        <div className="rounded-2xl bg-gradient-to-br from-[#ebf8f2] to-[#daf1e5] border border-emerald-100 p-5 flex flex-col justify-between relative overflow-hidden shadow-sm group">
          <div className="relative z-10">
            <h3 className="text-base font-bold text-gray-900 leading-tight mb-1">
              Exchange & Upgrade
            </h3>
            <p className="text-xs text-gray-600 mb-4 leading-tight">
              Give your old phone a new life
            </p>
            <button
              onClick={() => onPromoClick && onPromoClick('Exchange')}
              className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xs hover:shadow transition-all group-hover:border-emerald-500"
            >
              <span>Exchange Now</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Graphic: Recycling loop around phones */}
          <div className="absolute right-1 bottom-1 w-28 h-20 flex items-center justify-end pointer-events-none opacity-90">
            <div className="relative flex items-center justify-center">
              {/* Green circular arrow */}
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-emerald-500 flex items-center justify-center animate-spin-slow">
                <RefreshCw className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="absolute w-8 h-12 rounded-lg bg-gray-800 border border-gray-600 -rotate-12 shadow-sm" />
              <div className="absolute w-8 h-12 rounded-lg bg-emerald-900 border border-emerald-700 rotate-6 shadow-sm" />
            </div>
          </div>
        </div>

        {/* Card 2: Student Special */}
        <div className="rounded-2xl bg-gradient-to-br from-[#f2effb] to-[#e4def6] border border-purple-100 p-5 flex flex-col justify-between relative overflow-hidden shadow-sm group">
          <div className="relative z-10">
            <h3 className="text-base font-bold text-gray-900 leading-tight mb-1">
              Student Special
            </h3>
            <p className="text-xs text-gray-600 mb-4 leading-tight">
              Extra savings for a smarter future
            </p>
            <button
              onClick={() => onPromoClick && onPromoClick('Student Special')}
              className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xs hover:shadow transition-all group-hover:border-purple-500"
            >
              <span>Get Offer</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Graphic: Graduation Cap */}
          <div className="absolute right-2 bottom-2 w-24 h-20 flex items-end justify-end pointer-events-none opacity-85">
            <div className="relative flex items-center justify-center">
              <GraduationCap className="w-16 h-16 text-[#35255e] transform -rotate-12 drop-shadow-md" />
            </div>
          </div>
        </div>

        {/* Card 3: Accessories */}
        <div className="rounded-2xl bg-gradient-to-br from-[#fdf5eb] to-[#faebd7] border border-amber-100 p-5 flex flex-col justify-between relative overflow-hidden shadow-sm group">
          <div className="relative z-10">
            <h3 className="text-base font-bold text-gray-900 leading-tight mb-1">
              Accessories
            </h3>
            <p className="text-xs text-gray-600 mb-4 leading-tight">
              Cases, chargers, earphones & more
            </p>
            <button
              onClick={() => onPromoClick && onPromoClick('Accessories')}
              className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xs hover:shadow transition-all group-hover:border-amber-500"
            >
              <span>Shop Accessories</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Graphic: Earbuds & Charger */}
          <div className="absolute right-2 bottom-2 w-28 h-20 flex items-end justify-end gap-1.5 pointer-events-none">
            {/* Earbuds case */}
            <div className="w-9 h-11 rounded-xl bg-gray-900 border border-gray-700 shadow-md flex items-center justify-center">
              <Headphones className="w-4 h-4 text-gray-400" />
            </div>
            {/* Fast wall charger */}
            <div className="w-8 h-10 rounded-lg bg-white border border-gray-300 shadow-sm flex items-center justify-center">
              <div className="w-3 h-1.5 bg-gray-300 rounded-xs" />
            </div>
            {/* Power bank */}
            <div className="w-7 h-13 rounded-lg bg-gray-800 border border-gray-700 shadow-sm" />
          </div>
        </div>

        {/* Card 4: Bulk Orders */}
        <div className="rounded-2xl bg-gradient-to-br from-[#ebf4fd] to-[#d8eafb] border border-sky-100 p-5 flex flex-col justify-between relative overflow-hidden shadow-sm group">
          <div className="relative z-10">
            <h3 className="text-base font-bold text-gray-900 leading-tight mb-1">
              Bulk Orders
            </h3>
            <p className="text-xs text-gray-600 mb-4 leading-tight">
              For businesses & institutions
            </p>
            <button
              onClick={() => onPromoClick && onPromoClick('Bulk Orders')}
              className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xs hover:shadow transition-all group-hover:border-sky-500"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Graphic: Row of devices */}
          <div className="absolute right-1 bottom-1 w-32 h-16 flex items-end justify-end -space-x-2 pointer-events-none opacity-90">
            <div className="w-8 h-14 rounded-lg bg-gray-900 border border-gray-700 shadow" />
            <div className="w-8 h-15 rounded-lg bg-blue-900 border border-blue-700 shadow" />
            <div className="w-8 h-16 rounded-lg bg-slate-800 border border-slate-600 shadow" />
            <div className="w-8 h-15 rounded-lg bg-black border border-gray-700 shadow" />
          </div>
        </div>

      </div>
    </section>
  );
}
