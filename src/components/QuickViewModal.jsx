import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Check, RotateCcw, Truck, ShoppingCart, Heart } from 'lucide-react';
import { PhoneMockup } from './PhoneGraphics';

export default function QuickViewModal({
  product,
  isOpen,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
}) {
  const [isRendered, setIsRendered] = useState(isOpen);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timeoutId;
    let animFrameId;

    if (isOpen && product) {
      setIsRendered(true);
      animFrameId = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
      document.body.style.overflow = 'hidden';
    } else {
      setIsAnimating(false);
      timeoutId = setTimeout(() => {
        setIsRendered(false);
        document.body.style.overflow = '';
      }, 250);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, [isOpen, product]);

  // ESC key handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isRendered && !isOpen) return null;
  if (!product) return null;

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-250 ${
        isAnimating ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <div 
        onClick={onClose} 
        className={`fixed inset-0 bg-black/55 backdrop-blur-xs transition-opacity duration-250 ease-out cursor-pointer ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`} 
      />
      
      <div 
        className={`relative bg-white rounded-2xl max-w-2xl w-full p-4 sm:p-6 shadow-2xl z-10 overflow-hidden max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isAnimating ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        }`}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all duration-200 hover:rotate-90 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* Left: Phone Visual & Badge */}
          <div className="bg-gray-50/80 rounded-2xl p-6 flex flex-col items-center justify-center relative border border-gray-100">
            {product.tag && (
              <span className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-0.5 rounded-full ${product.tagColor || 'bg-emerald-600 text-white'}`}>
                {product.tag}
              </span>
            )}
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-auto max-w-full object-contain my-2 drop-shadow-md"
              />
            ) : (
              <PhoneMockup type={product.imageType} className="h-56 w-auto object-contain my-2" />
            )}
            <span className="text-[11px] text-gray-400 font-medium">
              360° Inspected & Refurbished
            </span>
          </div>

          {/* Right: Specs & Actions */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
                {product.brand}
              </div>
              <h2 className="text-2xl font-extrabold text-gray-950 leading-snug">
                {product.name}
              </h2>
              <p className="text-xs text-gray-600 font-medium mt-1">
                {product.specs} · Available in {product.location}
              </p>

              {/* Price & Savings */}
              <div className="mt-4 p-3 bg-emerald-50/50 rounded-xl border border-emerald-100/80">
                <div className="flex items-baseline gap-2.5">
                  <span className="text-2xl font-black text-gray-950">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                    Save {discount}%
                  </span>
                </div>
                <p className="text-[11px] text-emerald-900 mt-1">
                  Inclusive of all taxes & doorstep delivery
                </p>
              </div>

              {/* 32-point check breakdown */}
              <div className="mt-4 space-y-2 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>32-Point Quality Diagnostic Passed</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>6 Months SecondKart Warranty included</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>7-Day Replacement or Money-back guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Express 24-48h Dispatched from {product.location}</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="flex-1 bg-[#0b4d3c] hover:bg-[#07362a] text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={() => onToggleWishlist(product)}
                className={`p-2.5 rounded-xl border transition-all ${
                  isWishlisted
                    ? 'border-rose-300 bg-rose-50 text-rose-600'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-500' : ''}`} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
