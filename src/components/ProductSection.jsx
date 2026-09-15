import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';

export default function ProductSection({
  title,
  subtitle,
  products,
  wishlistIds = [],
  onToggleWishlist,
  onAddToCart,
  onQuickView,
  onViewAll,
}) {
  return (
    <section className="w-full px-4 lg:px-6 xl:px-8 py-4">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-4">
        <div>
          <div className="flex items-baseline gap-2.5">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
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

        {/* View All Link */}
        <button
          onClick={onViewAll}
          className="flex items-center gap-1 text-xs font-semibold text-gray-700 hover:text-emerald-800 transition-colors group flex-shrink-0"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Grid of Products: 2 columns mobile, 4 columns tablet, 8 columns ultra-wide/xl */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3.5">
        {products.map((product) => (
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
    </section>
  );
}
