import React from 'react';
import { X, Trash2, ArrowRight, ShieldCheck } from 'lucide-react';
import { PhoneMockup } from './PhoneGraphics';

export default function CartDrawer({ isOpen, onClose, cartItems, onRemoveItem, onCheckout }) {
  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-gray-900">Your Cart</h3>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">
                {cartItems.length} items
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 divide-y divide-gray-100">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-400">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <p className="font-semibold text-gray-700 text-sm">Your cart is empty</p>
                <p className="text-xs text-gray-500 mt-1">Browse our verified second-hand smartphones and add deals to your cart.</p>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div key={`${item.id}-${index}`} className="py-3 flex items-center gap-3">
                  <div className="w-16 h-16 bg-gray-50 rounded-lg p-1 border border-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="h-12 w-auto max-w-full object-contain" />
                    ) : (
                      <PhoneMockup type={item.imageType} className="h-12 w-auto" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-gray-900 truncate">{item.name}</h4>
                    <p className="text-[11px] text-gray-500">{item.specs}</p>
                    <p className="text-xs font-extrabold text-[#0b4d3c] mt-1">
                      ₹{item.price.toLocaleString('en-IN')}
                    </p>
                  </div>
                  <button
                    onClick={() => onRemoveItem(index)}
                    className="p-1.5 text-gray-400 hover:text-rose-600 rounded-md hover:bg-rose-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-4 border-t border-gray-100 bg-gray-50/70">
              <div className="flex items-center justify-between mb-3 text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-extrabold text-base text-gray-900">
                  ₹{total.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="text-[11px] text-emerald-800 flex items-center gap-1 mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Includes 6-Month Warranty & Free Express Shipping</span>
              </div>
              <button
                onClick={onCheckout}
                className="w-full bg-[#0b4d3c] hover:bg-[#08382c] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
