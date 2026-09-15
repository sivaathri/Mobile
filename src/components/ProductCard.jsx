import React from 'react';
import { Heart, ShoppingCart, MapPin } from 'lucide-react';
import { PhoneMockup } from './PhoneGraphics';

export default function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onQuickView,
}) {
  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="bg-white rounded-xl border border-gray-200/80 p-3.5 hover:shadow-card-hover hover:border-emerald-200 transition-all duration-200 flex flex-col justify-between group relative">
      
      {/* Top Bar: Badge (left) & Wishlist Icon (right) */}
      <div className="flex items-center justify-between min-h-[24px] mb-1">
        {product.tag ? (
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-full shadow-2xs ${
              product.tagColor || 'bg-emerald-600 text-white'
            }`}
          >
            {product.tag}
          </span>
        ) : (
          <span /> // Spacer
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          aria-label="Add to Wishlist"
          className="p-1 rounded-full text-gray-400 hover:text-rose-500 hover:bg-rose-50 transition-colors z-10"
        >
          <Heart
            className={`w-4 h-4 transition-transform active:scale-125 ${
              isWishlisted ? 'fill-rose-500 text-rose-500' : 'stroke-[1.75]'
            }`}
          />
        </button>
      </div>

      {/* Phone Image Container / Clickable for Quick View */}
      <div 
        onClick={() => onQuickView(product)}
        className="py-2 flex items-center justify-center cursor-pointer group-hover:scale-105 transition-transform duration-200"
      >
        <PhoneMockup type={product.imageType} className="h-32 w-auto object-contain" />
      </div>

      {/* Product Information */}
      <div className="mt-2" onClick={() => onQuickView(product)}>
        {/* Title */}
        <h3 className="text-sm font-bold text-gray-900 group-hover:text-emerald-800 transition-colors leading-snug cursor-pointer line-clamp-1">
          {product.name}
        </h3>

        {/* Storage & Condition */}
        <p className="text-xs text-gray-500 mt-0.5 font-normal">
          {product.specs}
        </p>

        {/* Pricing Row */}
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-base font-extrabold text-gray-950">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
          )}
        </div>
      </div>

      {/* Card Footer: Location & Cart Button */}
      <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-gray-100 text-[11px] text-gray-500">
        {/* Location */}
        <div className="flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-gray-400" />
          <span className="truncate max-w-[90px]">{product.location}</span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          aria-label="Add to cart"
          className="p-1.5 rounded-lg border border-gray-200 hover:border-emerald-600 hover:bg-emerald-50 text-gray-700 hover:text-emerald-800 transition-colors"
          title="Add to cart"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
}
