import React from 'react';
import { LayoutGrid, Tablet, Watch, Headphones } from 'lucide-react';
import { BRANDS } from '../data/products';
import { BrandIcon } from './PhoneGraphics';

export default function BrandFilterBar({ selectedBrand, onSelectBrand }) {
  return (
    <section className="w-full px-4 lg:px-6 xl:px-8 py-2">
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2">
        {BRANDS.map((item) => {
          const isSelected = selectedBrand === item.name || (item.id === 'all' && selectedBrand === 'All Phones');

          return (
            <button
              key={item.id}
              onClick={() => onSelectBrand(item.name)}
              className={`flex flex-col items-center justify-center min-w-[76px] sm:min-w-[84px] h-[78px] px-2 rounded-xl transition-all flex-shrink-0 ${
                isSelected
                  ? 'bg-[#eaf7f0] border-2 border-emerald-600 shadow-sm text-emerald-950'
                  : 'bg-white border border-gray-200/80 hover:border-gray-300 text-gray-700 hover:shadow-xs'
              }`}
            >
              {/* Icon / Brand Mark */}
              <div className="h-7 flex items-center justify-center mb-1.5">
                {item.id === 'all' && (
                  <LayoutGrid className={`w-5 h-5 ${isSelected ? 'text-emerald-700' : 'text-gray-700'}`} />
                )}
                {item.icon === 'tablet' && (
                  <Tablet className={`w-5 h-5 ${isSelected ? 'text-emerald-700' : 'text-gray-700'}`} />
                )}
                {item.icon === 'watch' && (
                  <Watch className={`w-5 h-5 ${isSelected ? 'text-emerald-700' : 'text-gray-700'}`} />
                )}
                {item.icon === 'headphones' && (
                  <Headphones className={`w-5 h-5 ${isSelected ? 'text-emerald-700' : 'text-gray-700'}`} />
                )}
                {item.symbol && (
                  <BrandIcon name={item.symbol} className="h-5 w-auto object-contain" />
                )}
              </div>

              {/* Brand Name */}
              <span className={`text-[11px] leading-tight text-center font-medium ${isSelected ? 'font-bold text-emerald-950' : 'text-gray-600'}`}>
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
