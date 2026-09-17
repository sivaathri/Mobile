import React, { useState, useEffect, useRef } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import MegaMenu from './MegaMenu';

export default function CategoryNav({ 
  onSelectCategory, 
  activeCategory, 
  onSelectBrand, 
  onSelectFilter 
}) {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const navRef = useRef(null);
  const timeoutRef = useRef(null);

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

  // Open menu with hover
  const handleMouseEnterTrigger = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsMegaMenuOpen(true);
  };

  // Close menu with small debounce delay so mouse can cross into the menu
  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 250);
  };

  // Mouse enters dropdown: cancel any closing timeout
  const handleMouseEnterMenu = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsMegaMenuOpen(true);
  };

  const closeMenuImmediately = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsMegaMenuOpen(false);
  };

  // Click outside listener & Escape key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMenuImmediately();
      }
    };

    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeMenuImmediately();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleOutsideClick);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav ref={navRef} className="relative bg-white border-b border-gray-200/80 text-xs font-medium text-gray-700 w-full py-2 sm:py-2.5">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 flex items-center justify-center relative">
        
        {/* Centered Categories Row */}
        <div className="w-full overflow-x-auto no-scrollbar flex items-center justify-start sm:justify-center">
          <div className="flex items-center gap-1 min-w-max mx-auto px-1">
            
            {/* All Categories Dropdown Trigger (hover & click) */}
            <div 
              onMouseEnter={handleMouseEnterTrigger}
              onMouseLeave={handleMouseLeave}
              className="relative mr-1.5 sm:mr-2 flex-shrink-0"
            >
              <button
                onClick={() => {
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  setIsMegaMenuOpen((prev) => !prev);
                  if (onSelectCategory) onSelectCategory('All Categories');
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all font-bold cursor-pointer select-none border-0 outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 ${
                  isMegaMenuOpen || activeCategory === 'All Categories'
                    ? 'text-[#00684a] font-bold bg-emerald-50'
                    : 'text-gray-900 hover:text-[#00684a] hover:bg-gray-50'
                }`}
              >
                <Menu className={`w-4 h-4 transition-colors ${
                  isMegaMenuOpen || activeCategory === 'All Categories' ? 'text-[#00684a]' : 'text-gray-800'
                }`} />
                <span className="text-[13px]">All Categories</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isMegaMenuOpen 
                    ? 'rotate-180 text-[#00684a]' 
                    : activeCategory === 'All Categories' 
                    ? 'text-[#00684a]' 
                    : 'text-gray-500'
                }`} />
              </button>

              {/* Active Indicator Bar (Green bottom bar when open) */}
              {isMegaMenuOpen && (
                <div className="absolute -bottom-2 left-3 right-3 h-[2.5px] bg-[#00684a] rounded-t-full shadow-2xs pointer-events-none" />
              )}
            </div>

            {/* Categories Horizontal Links */}
            <div className="flex items-center gap-0.5">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onMouseEnter={() => {
                      // Close the mega menu if hovering over another category tab
                      closeMenuImmediately();
                    }}
                    onClick={() => {
                      closeMenuImmediately();
                      if (onSelectCategory) onSelectCategory(cat);
                    }}
                    className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors flex-shrink-0 text-[12.5px] border-0 outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 ${
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
        </div>

      </div>

      {/* Mega Menu Dropdown with hover persistence */}
      <MegaMenu
        isOpen={isMegaMenuOpen}
        onMouseEnter={handleMouseEnterMenu}
        onMouseLeave={handleMouseLeave}
        onClose={closeMenuImmediately}
        onSelectCategory={(cat) => {
          closeMenuImmediately();
          if (onSelectCategory) onSelectCategory(cat);
        }}
        onSelectBrand={(brand) => {
          closeMenuImmediately();
          if (onSelectBrand) onSelectBrand(brand);
        }}
        onSelectFilter={(filter) => {
          closeMenuImmediately();
          if (onSelectFilter) onSelectFilter(filter);
        }}
      />
    </nav>
  );
}

