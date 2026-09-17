import React, { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import ProductCard from './ProductCard';

export default function ProductSection({
  title,
  subtitle,
  products = [],
  wishlistIds = [],
  onToggleWishlist,
  onAddToCart,
  onQuickView,
  onViewAll,
}) {
  // Initial visible count set to 28 so there are 4+ rows on desktop (more than 3 rows)
  const [visibleCount, setVisibleCount] = useState(28);

  const displayedProducts = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;

  const handleViewMore = () => {
    if (hasMore) {
      setVisibleCount((prev) => Math.min(prev + 12, products.length));
    } else {
      onViewAll?.();
    }
  };

  return (
    <section className="w-full px-2.5 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-5">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-3 sm:mb-4">
        <div>
          <div className="flex items-baseline gap-2 sm:gap-2.5">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <span className="hidden sm:inline text-xs text-gray-500 font-normal">
                {subtitle}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="sm:hidden text-xs text-gray-500 font-normal mt-0.5">
              {subtitle}
            </p>
          )}
        </div>

        {/* View All Link in Header */}
        <button
          onClick={onViewAll}
          className="flex items-center gap-1 text-xs font-semibold text-gray-700 hover:text-[#009A44] transition-colors group flex-shrink-0"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Grid of Products: 2 cols mobile, 3 cols tablet, 4-6 cols desktop, 8 cols ultra-wide */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 sm:gap-3.5">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isWishlisted={wishlistIds.includes(product.id)}
            onToggleWishlist={onToggleWishlist}
            onAddToCart={onAddToCart}
            onQuickView={onQuickView}
          />
        ))}
      </div>

      {/* Bottom Centre View More Button */}
      <div className="flex flex-col items-center justify-center mt-7 sm:mt-9 pb-2">
        <button
          onClick={handleViewMore}
          className="inline-flex items-center justify-center gap-2 px-8 sm:px-12 py-2.5 sm:py-3 bg-white hover:bg-[#009A44] text-[#009A44] hover:text-white border-2 border-[#009A44] rounded-full font-bold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 group cursor-pointer"
        >
          <span>{hasMore ? 'View More' : 'View All'}</span>
          {hasMore ? (
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          ) : (
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          )}
        </button>
        <span className="text-[11px] sm:text-xs text-gray-500 mt-2 font-medium">
          Showing {displayedProducts.length} of {products.length} phones
        </span>
      </div>
    </section>
  );
}
