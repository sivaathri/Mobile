import React, { useState, useEffect, useRef } from 'react';
import { Menu, ChevronDown, HelpCircle } from 'lucide-react';
import MegaMenu from './MegaMenu';

export default function CategoryNav({ 
  onSelectCategory, 
  activeCategory, 
  onSelectBrand, 
  onSelectFilter 
}) {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const navRef = useRef(null);

  const categories = [
    'Smartphones',
    'Tablets',
    'Smartwatches',
    'Accessories',
    'Audio',
    'Top Deals',
    'New Arrivals',
    'Brand Stores',
    'Bulk Orders',
  ];

  const utilityLinks = [
    { name: 'Buy', href: '#products' },
    { name: 'Sell', href: '#sell' },
    { name: 'Exchange', href: '#exchange' },
  ];

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMegaMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <nav ref={navRef} className="relative bg-white border-b border-gray-200/80 text-xs font-medium text-gray-700 w-full z-40">
      <div className="w-full px-3 sm:px-4 lg:px-6 xl:px-8 flex items-center justify-between">
        
        {/* Left: All Categories Button + Categories Row */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          
          {/* All Categories Dropdown Trigger */}
          <div className="relative py-2.5 mr-2 flex-shrink-0">
            <button
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all font-bold cursor-pointer select-none ${
                isMegaMenuOpen
                  ? 'text-[#00684a] bg-emerald-50/70'
                  : 'text-gray-900 hover:text-[#00684a] hover:bg-gray-50'
              }`}
            >
              <Menu className={`w-4 h-4 transition-colors ${
                isMegaMenuOpen ? 'text-[#00684a]' : 'text-gray-800'
              }`} />
              <span className="text-[13px]">All Categories</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                isMegaMenuOpen ? 'rotate-180 text-[#00684a]' : 'text-gray-500'
              }`} />
            </button>

            {/* Active Indicator Bar (Green bottom bar when open) */}
            {isMegaMenuOpen && (
              <div className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#00684a] rounded-t-full shadow-2xs" />
            )}
          </div>

          {/* Categories Horizontal Links */}
          <div className="flex items-center gap-0.5 py-2.5">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setIsMegaMenuOpen(false);
                    if (onSelectCategory) onSelectCategory(cat);
                  }}
                  className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors flex-shrink-0 text-[12.5px] ${
                    isActive
                      ? 'text-[#00684a] font-bold bg-emerald-50'
                      : 'text-gray-600 hover:text-gray-950 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Buy, Sell, Exchange, Help */}
        <div className="hidden xl:flex items-center gap-5 pl-4 border-l border-gray-200/80 flex-shrink-0 py-2.5">
          {utilityLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-[#00684a] font-semibold text-xs transition-colors"
            >
              <span>{link.name}</span>
            </a>
          ))}
          
          {/* Help link with icon */}
          <a
            href="#help"
            className="flex items-center gap-1.5 text-gray-600 hover:text-[#00684a] font-semibold text-xs transition-colors"
          >
            <HelpCircle className="w-3.5 h-3.5 text-gray-500 stroke-[2]" />
            <span>Help</span>
          </a>
        </div>

      </div>

      {/* Mega Menu Dropdown */}
      <MegaMenu
        isOpen={isMegaMenuOpen}
        onClose={() => setIsMegaMenuOpen(false)}
        onSelectCategory={(cat) => {
          setIsMegaMenuOpen(false);
          if (onSelectCategory) onSelectCategory(cat);
        }}
        onSelectBrand={(brand) => {
          setIsMegaMenuOpen(false);
          if (onSelectBrand) onSelectBrand(brand);
        }}
        onSelectFilter={(filter) => {
          setIsMegaMenuOpen(false);
          if (onSelectFilter) onSelectFilter(filter);
        }}
      />
    </nav>
  );
}

