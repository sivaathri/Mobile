import React, { useEffect } from 'react';
import {
  X,
  Flame,
  Sparkles,
  Heart,
  ShoppingCart,
  ShieldCheck,
  RotateCcw,
  Truck,
  CreditCard,
  ArrowRight,
  Leaf,
} from 'lucide-react';
import { PhoneMockup } from './PhoneGraphics';

export default function OffersPopupModal({
  isOpen,
  onClose,
  onAddToCart,
  onToggleWishlist,
  wishlistIds = [],
  onQuickView,
  onViewAllNew,
}) {
  // Prevent body scroll when modal is open and handle ESC key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // 3 Special Offers products (matching screenshot)
  const specialOffers = [
    {
      id: 'offer-1',
      name: 'iPhone 14',
      specs: '128 GB · Excellent',
      brand: 'iPhone',
      price: 34999,
      originalPrice: 59000,
      discount: '20% OFF',
      image: '/assets/phones/iphone14_purple.jpg',
      imageType: 'iphone14-purple',
    },
    {
      id: 'offer-2',
      name: 'Samsung Galaxy S23',
      specs: '256 GB · Like New',
      brand: 'Samsung',
      price: 28999,
      originalPrice: 72999,
      discount: '18% OFF',
      image: '/assets/phones/galaxy_s23.jpg',
      imageType: 'galaxy-s23',
    },
    {
      id: 'offer-3',
      name: 'OnePlus 11R',
      specs: '128 GB · Excellent',
      brand: 'OnePlus',
      price: 26499,
      originalPrice: 45999,
      discount: '25% OFF',
      image: '/assets/phones/oneplus_11r.jpg',
      imageType: 'oneplus-11r',
    },
  ];

  // 3 New Arrivals products (matching screenshot)
  const newArrivals = [
    {
      id: 'new-arr-1',
      name: 'iPhone 15',
      specs: '128 GB · Brand New',
      brand: 'iPhone',
      price: 54999,
      image: '/assets/phones/iphone13_pink.jpg',
      imageType: 'iphone13-pink',
    },
    {
      id: 'new-arr-2',
      name: 'Google Pixel 8',
      specs: '128 GB · Brand New',
      brand: 'Google Pixel',
      price: 49999,
      image: '/assets/phones/pixel_7.jpg',
      imageType: 'pixel-7',
    },
    {
      id: 'new-arr-3',
      name: 'Realme GT 2',
      specs: '128 GB · Brand New',
      brand: 'Realme',
      price: 29999,
      image: '/assets/phones/realme_gt2.jpg',
      imageType: 'realme-gt2',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 animate-fadeIn">
      {/* Backdrop with soft dark blur */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[94vh] overflow-y-auto transform transition-all animate-scaleUp">
        
        {/* Top-Right Circular Close Button */}
        <button
          onClick={onClose}
          aria-label="Close popup"
          className="absolute top-3.5 sm:top-4 right-3.5 sm:right-4 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-gray-100 border border-gray-200 text-gray-600 hover:text-gray-900 flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
        </button>

        {/* =====================================================================
            TOP HERO BANNER SECTION (Brand + Big Savings Badges + Hero Phones)
           ===================================================================== */}
        <div className="relative px-5 sm:px-7 md:px-9 pt-5 sm:pt-6 pb-4 sm:pb-5 bg-gradient-to-r from-[#f7fcf9] via-[#f2faf5] to-[#ecf8f1] overflow-hidden">
          
          {/* Decorative Confetti Background Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
            {/* Confetti specks */}
            <div className="absolute top-4 left-1/3 w-3 h-1.5 bg-[#f59e0b] rounded-full rotate-45" />
            <div className="absolute top-10 left-1/2 w-2 h-3 bg-[#10b981] rounded-xs rotate-12" />
            <div className="absolute top-6 right-1/4 w-3.5 h-1.5 bg-[#ec4899] rounded-full -rotate-45" />
            <div className="absolute bottom-4 left-2/5 w-2 h-2.5 bg-[#f97316] rounded-xs rotate-45" />
            <div className="absolute top-14 left-1/4 w-2 h-2 bg-[#8b5cf6] rounded-full" />
            <div className="absolute bottom-6 right-1/3 w-3 h-1.5 bg-[#06b6d4] rounded-full rotate-30" />
            <div className="absolute top-3 right-1/3 w-2.5 h-2.5 bg-[#eab308] rounded-xs rotate-12" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Left Column: Brand & Catchy Headline */}
            <div className="max-w-md">
              {/* Brand Pill */}
              <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#00704A] flex items-center justify-center text-white shadow-2xs">
                  <Leaf className="w-4 h-4 fill-white text-white" />
                </div>
                <div>
                  <h1 className="font-black text-[#094936] text-lg sm:text-xl tracking-tight leading-tight">
                    SecondKart
                  </h1>
                  <p className="text-[10px] text-[#245d47] font-semibold -mt-0.5">
                    Good Phones. Greater Tomorrows.
                  </p>
                </div>
              </div>

              {/* Main Headline */}
              <div className="mt-2 sm:mt-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-950 tracking-tight leading-none">
                  Exclusive Offers
                </h2>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-black text-[#00704A] tracking-tight leading-tight mt-0.5">
                  Just for You!
                </span>
                <p className="text-xs sm:text-[13px] text-gray-600 font-medium mt-1 sm:mt-1.5">
                  Best deals on popular phones. Don't miss out!
                </p>
              </div>
            </div>

            {/* Right Column: Exact Graphic Provided by User */}
            <div className="relative flex items-center justify-center md:justify-end flex-shrink-0 self-end -mb-4 sm:-mb-5 md:-mr-9 md:-mt-6 overflow-hidden">
              <img
                src="/assets/offers_banner_hero.png"
                alt="Big Savings on Popular Phones"
                className="h-36 sm:h-44 md:h-52 lg:h-56 w-auto max-w-full object-contain object-right"
              />
            </div>

          </div>
        </div>


        {/* =====================================================================
            MIDDLE SECTION: TWO SIDE-BY-SIDE PANELS (Special Offers & New Arrivals)
           ===================================================================== */}
        <div className="p-3.5 sm:p-5 pt-3 sm:pt-4 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 lg:gap-5">
            
            {/* -----------------------------------------------------------------
                LEFT PANEL: Special Offers (Soft Pink / Coral Theme)
               ----------------------------------------------------------------- */}
            <div className="bg-[#fff1f2] border border-[#ffe4e6] rounded-2xl p-3 sm:p-4 flex flex-col justify-between shadow-2xs">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-2.5 border-b border-[#fed7aa]/50">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#ffe4e6] flex items-center justify-center text-[#e11d48]">
                    <Flame className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#e11d48]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#e11d48] text-sm sm:text-base leading-tight">
                      Special Offers
                    </h3>
                    <p className="text-[10px] sm:text-[10.5px] text-gray-500 font-normal">
                      Grab the best deals before they're gone!
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="text-[11px] sm:text-xs font-bold text-[#e11d48] hover:underline flex items-center gap-0.5 group flex-shrink-0"
                >
                  <span>View All Offers</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* 3 Product Cards */}
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mt-2.5">
                {specialOffers.map((product) => {
                  const isWishlisted = wishlistIds.includes(product.id);
                  return (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl border border-gray-200/80 p-2 sm:p-2.5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all group/card relative"
                    >
                      {/* Top Bar: Discount Badge + Wishlist */}
                      <div className="flex items-center justify-between min-h-[20px] mb-0.5">
                        <span className="bg-[#e11d48] text-white text-[8.5px] sm:text-[9.5px] font-black px-1.5 py-0.5 rounded-sm uppercase tracking-tight">
                          {product.discount}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleWishlist?.(product);
                          }}
                          className="p-0.5 text-gray-400 hover:text-rose-500 transition-colors"
                        >
                          <Heart
                            className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                              isWishlisted ? 'fill-rose-500 text-rose-500' : 'stroke-[1.5]'
                            }`}
                          />
                        </button>
                      </div>

                      {/* Product Image */}
                      <div
                        onClick={() => onQuickView?.(product)}
                        className="h-20 sm:h-24 flex items-center justify-center cursor-pointer my-1 overflow-hidden"
                      >
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-18 sm:h-22 w-auto max-w-full object-contain group-hover/card:scale-105 transition-transform duration-200"
                          />
                        ) : (
                          <PhoneMockup type={product.imageType} className="h-18 sm:h-22 w-auto object-contain" />
                        )}
                      </div>

                      {/* Info */}
                      <div className="mt-0.5" onClick={() => onQuickView?.(product)}>
                        <h4 className="text-[11px] sm:text-xs font-bold text-gray-900 truncate group-hover/card:text-[#e11d48] transition-colors cursor-pointer">
                          {product.name}
                        </h4>
                        <p className="text-[9.5px] sm:text-[10px] text-gray-500 truncate font-normal">
                          {product.specs}
                        </p>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-xs sm:text-[13px] font-black text-gray-950">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                          {product.originalPrice && (
                            <span className="text-[9px] sm:text-[10px] text-gray-400 line-through">
                              ₹{product.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Add to Cart Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart?.(product);
                        }}
                        className="mt-2 w-full py-1 px-1 rounded-lg border border-[#009A44] text-[#009A44] hover:bg-[#009A44] hover:text-white transition-colors duration-150 flex items-center justify-center gap-1 text-[10px] sm:text-[11px] font-bold active:scale-95"
                      >
                        <ShoppingCart className="w-3 h-3 stroke-[2.2]" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  );
                })}
              </div>

            </div>


            {/* -----------------------------------------------------------------
                RIGHT PANEL: New Arrivals (Soft Mint Theme)
               ----------------------------------------------------------------- */}
            <div className="bg-[#edf9f3] border border-[#d1f0e1] rounded-2xl p-3 sm:p-4 flex flex-col justify-between shadow-2xs">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-2.5 border-b border-[#c2ecd6]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#d7f3e4] flex items-center justify-center text-[#00704A]">
                    <Sparkles className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#00704A]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#00704A] text-sm sm:text-base leading-tight">
                      New Arrivals
                    </h3>
                    <p className="text-[10px] sm:text-[10.5px] text-gray-500 font-normal">
                      Be the first to get the latest phones!
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onViewAllNew?.();
                  }}
                  className="text-[11px] sm:text-xs font-bold text-[#00704A] hover:underline flex items-center gap-0.5 group flex-shrink-0 cursor-pointer"
                >
                  <span>View All New</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* 3 Product Cards */}
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mt-2.5">
                {newArrivals.map((product) => {
                  const isWishlisted = wishlistIds.includes(product.id);
                  return (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl border border-gray-200/80 p-2 sm:p-2.5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all group/card relative"
                    >
                      {/* Top Bar: NEW Badge + Wishlist */}
                      <div className="flex items-center justify-between min-h-[20px] mb-0.5">
                        <span className="bg-[#009A44] text-white text-[8.5px] sm:text-[9.5px] font-black px-1.5 py-0.5 rounded-sm uppercase tracking-tight">
                          NEW
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleWishlist?.(product);
                          }}
                          className="p-0.5 text-gray-400 hover:text-rose-500 transition-colors"
                        >
                          <Heart
                            className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                              isWishlisted ? 'fill-rose-500 text-rose-500' : 'stroke-[1.5]'
                            }`}
                          />
                        </button>
                      </div>

                      {/* Product Image */}
                      <div
                        onClick={() => onQuickView?.(product)}
                        className="h-20 sm:h-24 flex items-center justify-center cursor-pointer my-1 overflow-hidden"
                      >
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-18 sm:h-22 w-auto max-w-full object-contain group-hover/card:scale-105 transition-transform duration-200"
                          />
                        ) : (
                          <PhoneMockup type={product.imageType} className="h-18 sm:h-22 w-auto object-contain" />
                        )}
                      </div>

                      {/* Info */}
                      <div className="mt-0.5" onClick={() => onQuickView?.(product)}>
                        <h4 className="text-[11px] sm:text-xs font-bold text-gray-900 truncate group-hover/card:text-[#009A44] transition-colors cursor-pointer">
                          {product.name}
                        </h4>
                        <p className="text-[9.5px] sm:text-[10px] text-gray-500 truncate font-normal">
                          {product.specs}
                        </p>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-xs sm:text-[13px] font-black text-gray-950">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>

                      {/* Add to Cart Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart?.(product);
                        }}
                        className="mt-2 w-full py-1 px-1 rounded-lg border border-[#009A44] text-[#009A44] hover:bg-[#009A44] hover:text-white transition-colors duration-150 flex items-center justify-center gap-1 text-[10px] sm:text-[11px] font-bold active:scale-95"
                      >
                        <ShoppingCart className="w-3 h-3 stroke-[2.2]" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>


        {/* =====================================================================
            BOTTOM BAR: 4 Trust Value Props + "Start Shopping →" Button
           ===================================================================== */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 bg-[#fbfdfc] border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          
          {/* 4 Trust Value Props */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 w-full sm:w-auto">
            {/* 1. Quality Checked */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#e8f7ee] text-[#00704A] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <div className="text-[11px] sm:text-xs font-bold text-gray-900">Quality Checked</div>
                <div className="text-[9.5px] sm:text-[10px] text-gray-500">Trusted & Tested Devices</div>
              </div>
            </div>

            {/* 2. 7-Day Returns */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#e8f7ee] text-[#00704A] flex items-center justify-center flex-shrink-0">
                <RotateCcw className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <div className="text-[11px] sm:text-xs font-bold text-gray-900">7-Day Returns</div>
                <div className="text-[9.5px] sm:text-[10px] text-gray-500">Hassle-Free Returns</div>
              </div>
            </div>

            {/* 3. Pan India Delivery */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#e8f7ee] text-[#00704A] flex items-center justify-center flex-shrink-0">
                <Truck className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <div className="text-[11px] sm:text-xs font-bold text-gray-900">Pan India Delivery</div>
                <div className="text-[9.5px] sm:text-[10px] text-gray-500">Fast & Reliable Shipping</div>
              </div>
            </div>

            {/* 4. Secure Payments */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#e8f7ee] text-[#00704A] flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <div className="text-[11px] sm:text-xs font-bold text-gray-900">Secure Payments</div>
                <div className="text-[9.5px] sm:text-[10px] text-gray-500">100% Safe & Secure</div>
              </div>
            </div>
          </div>

          {/* Action Button: Start Shopping */}
          <button
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00583a] hover:bg-[#00422c] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-md transition-all duration-150 active:scale-95 flex-shrink-0 cursor-pointer"
          >
            <span>Start Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>
    </div>
  );
}
