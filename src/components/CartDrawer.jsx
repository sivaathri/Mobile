import React, { useState, useEffect } from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, ShoppingBag, Sparkles } from 'lucide-react';
import { PhoneMockup } from './PhoneGraphics';

export default function CartDrawer({ isOpen, onClose, cartItems, onRemoveItem, onCheckout }) {
  const [isRendered, setIsRendered] = useState(isOpen);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timeoutId;
    let animFrameId;

    if (isOpen) {
      setIsRendered(true);
      // Wait for two frames to ensure DOM mounted with translate-x-full before animating to translate-x-0
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
      }, 350);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, [isOpen]);

  // Handle ESC key to smoothly close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isRendered && !isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div 
      className={`fixed inset-0 z-50 overflow-hidden transition-all duration-350 ${
        isAnimating ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop with smooth blur and fade */}
      <div 
        onClick={onClose}
        className={`fixed inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity duration-350 ease-out cursor-pointer ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* Drawer Container with iOS/Stripe-style smooth glide */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10 pointer-events-none">
        <div 
          className={`w-screen max-w-md bg-white flex flex-col justify-between pointer-events-auto transform transition-transform duration-350 ${
            isAnimating ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            boxShadow: isAnimating ? '-10px 0 35px -5px rgba(0, 0, 0, 0.25)' : 'none',
          }}
        >
          
          {/* Header */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white/95 backdrop-blur-xs sticky top-0 z-10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-800">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 leading-none">Your Cart</h3>
                <span className="text-[11px] text-gray-500 font-medium">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} selected
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all duration-200 hover:rotate-90 active:scale-90"
              title="Close Cart"
              aria-label="Close Cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 divide-y divide-gray-100">
            {cartItems.length === 0 ? (
              <div 
                className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-400"
                style={{
                  animation: isAnimating ? 'scaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) both' : 'none'
                }}
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3 shadow-inner ring-8 ring-emerald-50/50">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="font-bold text-gray-800 text-base">Your cart is empty</p>
                <p className="text-xs text-gray-500 mt-1 max-w-xs leading-relaxed">
                  Browse our verified second-hand smartphones and premium tech to add deals to your cart.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-5 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-[#0b4d3c] font-bold text-xs rounded-xl transition-all duration-200 active:scale-95"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div 
                  key={`${item.id}-${index}`} 
                  className="py-3.5 flex items-center gap-3.5 group hover:bg-emerald-50/30 px-2 rounded-xl transition-all duration-200"
                  style={{
                    animation: isAnimating ? `fadeInUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) ${Math.min(index * 40, 200)}ms both` : 'none'
                  }}
                >
                  <div className="w-16 h-16 bg-gray-50 rounded-xl p-1 border border-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden shadow-xs group-hover:scale-105 transition-transform duration-200">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="h-12 w-auto max-w-full object-contain" />
                    ) : (
                      <PhoneMockup type={item.imageType} className="h-12 w-auto" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-gray-900 truncate group-hover:text-emerald-900 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-gray-500 truncate">{item.specs}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-extrabold text-[#0b4d3c]">
                        ₹{item.price.toLocaleString('en-IN')}
                      </span>
                      {item.originalPrice && (
                        <span className="text-[10px] text-gray-400 line-through">
                          ₹{item.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveItem(index)}
                    className="p-2 text-gray-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-all duration-200 hover:scale-110 active:scale-90"
                    title="Remove from Cart"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-4 border-t border-gray-100 bg-gray-50/80 backdrop-blur-xs">
              <div className="flex items-center justify-between mb-3 text-sm">
                <span className="text-gray-600 font-medium">Subtotal</span>
                <span className="font-extrabold text-lg text-gray-900">
                  ₹{total.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="text-[11px] text-emerald-800 flex items-center gap-1.5 mb-3 bg-emerald-50/70 p-2 rounded-lg border border-emerald-100/60">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="leading-tight">Includes 6-Month Warranty & Free Express Shipping</span>
              </div>
              <button
                onClick={onCheckout}
                className="group w-full bg-gradient-to-r from-[#0b4d3c] to-[#0d5c48] hover:from-[#08382c] hover:to-[#0b4d3c] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/20 hover:shadow-xl hover:shadow-emerald-950/30 transition-all duration-200 active:scale-[0.99]"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
