import React from 'react';
import { Heart, ShoppingCart, ArrowRight } from 'lucide-react';
import { PhoneMockup } from './PhoneGraphics';

export default function FeaturedPhonesDual({
  newPhones = [],
  preOwnedPhones = [],
  wishlistIds = [],
  onToggleWishlist,
  onAddToCart,
  onQuickView,
  onViewAllNew,
  onViewAllPreOwned,
}) {
  return (
    <section className="w-full px-2.5 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-5">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
        
        {/* =========================================================
            LEFT BLOCK: Latest New Phones (Mint Green Theme)
           ========================================================= */}
        <div className="bg-[#eff9f4] border border-[#d2ecde] rounded-2xl p-3.5 sm:p-4.5 md:p-5 flex flex-col justify-between shadow-2xs">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 pb-3 sm:pb-3.5 border-b border-[#d8efe2]">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="bg-[#009A44] text-white text-[11px] sm:text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-2xs flex-shrink-0">
                NEW
              </span>
              <div>
                <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 leading-tight">
                  Latest New Phones
                </h2>
                <p className="text-[11px] sm:text-xs text-gray-500 font-normal mt-0.5">
                  Explore brand-new smartphones with full warranty
                </p>
              </div>
            </div>

            <button
              onClick={onViewAllNew}
              className="self-end sm:self-center text-xs sm:text-sm font-semibold text-[#009A44] hover:underline flex items-center gap-1 group flex-shrink-0"
            >
              <span>View All New Phones</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-3.5 sm:mt-4">
            {newPhones.map((phone) => {
              const isWishlisted = wishlistIds.includes(phone.id);
              return (
                <div
                  key={phone.id}
                  className="bg-white rounded-xl border border-gray-200/80 p-2.5 sm:p-3 hover:shadow-md hover:border-[#a3dfbe] transition-all duration-200 flex flex-col justify-between group relative"
                >
                  {/* Top Bar: Spacer left + Wishlist heart right */}
                  <div className="flex items-center justify-between min-h-[22px] mb-1">
                    <span /> {/* Empty spacer */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist?.(phone);
                      }}
                      aria-label="Add to Wishlist"
                      className="p-1 rounded-full text-gray-400 hover:text-rose-500 hover:bg-rose-50 transition-colors z-10"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform active:scale-125 ${
                          isWishlisted ? 'fill-rose-500 text-rose-500' : 'stroke-[1.5]'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Phone Image */}
                  <div
                    onClick={() => onQuickView?.(phone)}
                    className="py-1 h-32 sm:h-36 flex items-center justify-center cursor-pointer overflow-hidden"
                  >
                    {phone.image ? (
                      <img
                        src={phone.image}
                        alt={phone.name}
                        className="h-28 sm:h-32 w-auto max-w-full object-contain drop-shadow-2xs group-hover:scale-105 transition-transform duration-200"
                        loading="lazy"
                      />
                    ) : (
                      <PhoneMockup
                        type={phone.imageType}
                        className="h-28 sm:h-32 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                      />
                    )}
                  </div>

                  {/* Product Specs */}
                  <div className="mt-1 sm:mt-1.5" onClick={() => onQuickView?.(phone)}>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#009A44] transition-colors truncate cursor-pointer">
                      {phone.name}
                    </h3>
                    <p className="text-[10.5px] sm:text-xs text-gray-500 mt-0.5 truncate font-normal">
                      {phone.specs}
                    </p>
                    <div className="flex items-baseline gap-1.5 mt-1.5">
                      <span className="text-sm sm:text-base font-extrabold text-gray-950">
                        ₹{phone.price.toLocaleString('en-IN')}
                      </span>
                      {phone.originalPrice && (
                        <span className="text-[10.5px] sm:text-xs text-gray-400 line-through">
                          ₹{phone.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Button: Green Outlined Add to Cart */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart?.(phone);
                    }}
                    className="mt-2.5 sm:mt-3 w-full py-1.5 sm:py-2 px-2 rounded-lg border border-[#009A44] text-[#009A44] hover:bg-[#009A44] hover:text-white transition-colors duration-200 flex items-center justify-center gap-1.5 text-xs font-semibold active:scale-[0.98]"
                  >
                    <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>


        {/* =========================================================
            RIGHT BLOCK: Quality Pre-Owned Phones (Lavender Theme)
           ========================================================= */}
        <div className="bg-[#f4f2fd] border border-[#e2dcfc] rounded-2xl p-3.5 sm:p-4.5 md:p-5 flex flex-col justify-between shadow-2xs">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 pb-3 sm:pb-3.5 border-b border-[#e5dffc]">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="bg-[#5B21B6] text-white text-[11px] sm:text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-2xs flex-shrink-0">
                USED PHONES
              </span>
              <div>
                <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 leading-tight">
                  Quality Used Phones
                </h2>
                <p className="text-[11px] sm:text-xs text-gray-500 font-normal mt-0.5">
                  Certified devices at amazing prices
                </p>
              </div>
            </div>

            <button
              onClick={onViewAllPreOwned}
              className="self-end sm:self-center text-xs sm:text-sm font-semibold text-[#6D28D9] hover:underline flex items-center gap-1 group flex-shrink-0"
            >
              <span>View All Used Phones</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-3.5 sm:mt-4">
            {preOwnedPhones.map((phone) => {
              const isWishlisted = wishlistIds.includes(phone.id);
              return (
                <div
                  key={phone.id}
                  className="bg-white rounded-xl border border-gray-200/80 p-2.5 sm:p-3 hover:shadow-md hover:border-[#c4b5fd] transition-all duration-200 flex flex-col justify-between group relative"
                >
                  {/* Top Bar: Certified Badge left + Wishlist heart right */}
                  <div className="flex items-center justify-between min-h-[22px] mb-1">
                    <span className="bg-[#6D28D9] text-white text-[9.5px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full shadow-2xs">
                      {phone.tag || 'Certified'}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist?.(phone);
                      }}
                      aria-label="Add to Wishlist"
                      className="p-1 rounded-full text-gray-400 hover:text-rose-500 hover:bg-rose-50 transition-colors z-10"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform active:scale-125 ${
                          isWishlisted ? 'fill-rose-500 text-rose-500' : 'stroke-[1.5]'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Phone Image */}
                  <div
                    onClick={() => onQuickView?.(phone)}
                    className="py-1 h-32 sm:h-36 flex items-center justify-center cursor-pointer overflow-hidden"
                  >
                    {phone.image ? (
                      <img
                        src={phone.image}
                        alt={phone.name}
                        className="h-28 sm:h-32 w-auto max-w-full object-contain drop-shadow-2xs group-hover:scale-105 transition-transform duration-200"
                        loading="lazy"
                      />
                    ) : (
                      <PhoneMockup
                        type={phone.imageType}
                        className="h-28 sm:h-32 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                      />
                    )}
                  </div>

                  {/* Product Specs */}
                  <div className="mt-1 sm:mt-1.5" onClick={() => onQuickView?.(phone)}>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#6D28D9] transition-colors truncate cursor-pointer">
                      {phone.name}
                    </h3>
                    <p className="text-[10.5px] sm:text-xs text-gray-500 mt-0.5 truncate font-normal">
                      {phone.specs}
                    </p>
                    <div className="flex items-baseline gap-1.5 mt-1.5">
                      <span className="text-sm sm:text-base font-extrabold text-gray-950">
                        ₹{phone.price.toLocaleString('en-IN')}
                      </span>
                      {phone.originalPrice && (
                        <span className="text-[10.5px] sm:text-xs text-gray-400 line-through">
                          ₹{phone.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Button: Purple Outlined Add to Cart */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart?.(phone);
                    }}
                    className="mt-2.5 sm:mt-3 w-full py-1.5 sm:py-2 px-2 rounded-lg border border-[#7C3AED] text-[#6D28D9] hover:bg-[#6D28D9] hover:text-white transition-colors duration-200 flex items-center justify-center gap-1.5 text-xs font-semibold active:scale-[0.98]"
                  >
                    <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
