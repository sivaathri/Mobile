import React, { useState } from 'react';
import { Menu } from 'lucide-react';

export default function CategoryNav({ onSelectCategory, activeCategory }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    { name: 'Help', icon: true, href: '#help' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200/70 text-xs font-medium text-gray-700 w-full">
      <div className="w-full px-4 lg:px-6 xl:px-8 flex items-center justify-between">
        
        {/* Left: All Categories Button + Categories Row */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-2">
          {/* All Categories Dropdown Trigger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-gray-100 font-semibold text-gray-900 border-r border-gray-200 mr-2 flex-shrink-0"
          >
            <Menu className="w-4 h-4 text-gray-700" />
            <span>All Categories</span>
          </button>

          {/* Categories Horizontal Links */}
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory && onSelectCategory(cat)}
                className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors flex-shrink-0 ${
                  isActive
                    ? 'text-emerald-800 font-semibold bg-emerald-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Right: Buy, Sell, Exchange, Help */}
        <div className="hidden xl:flex items-center gap-6 pl-4 border-l border-gray-200/80 flex-shrink-0">
          {utilityLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-1 text-gray-600 hover:text-emerald-800 font-medium transition-colors"
            >
              {link.icon && (
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-gray-500 fill-none stroke-2 stroke-linecap-round stroke-linejoin-round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              )}
              <span>{link.name}</span>
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}
