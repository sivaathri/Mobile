import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function SellPhoneModal({ isOpen, onClose }) {
  const [brand, setBrand] = useState('Apple');
  const [model, setModel] = useState('iPhone 13 (128GB)');
  const [condition, setCondition] = useState('Excellent');
  const [estimatedPrice, setEstimatedPrice] = useState(25500);
  const [step, setStep] = useState(1);

  if (!isOpen) return null;

  const handleCalculate = (e) => {
    e.preventDefault();
    let base = 25000;
    if (condition === 'Like New') base = 28500;
    if (condition === 'Good') base = 21000;
    if (brand === 'Samsung') base -= 3000;
    setEstimatedPrice(base);
    setStep(2);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="fixed inset-0 bg-black/50 backdrop-blur-xs" />
      <div className="relative bg-white rounded-2xl max-w-lg w-full p-4 sm:p-6 shadow-2xl z-10 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <div>
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
              SecondKart BuyBack
            </span>
            <h3 className="text-lg font-bold text-gray-900">
              Sell Your Smartphone Instantly
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 1 ? (
          <form onSubmit={handleCalculate} className="mt-4 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Select Brand</label>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full text-xs p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600"
              >
                <option value="Apple">Apple iPhone</option>
                <option value="Samsung">Samsung</option>
                <option value="OnePlus">OnePlus</option>
                <option value="Xiaomi">Xiaomi</option>
                <option value="Vivo">Vivo</option>
                <option value="Google">Google Pixel</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Model & Storage</label>
              <input
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="e.g. iPhone 13 128GB"
                className="w-full text-xs p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Device Condition</label>
              <div className="grid grid-cols-3 gap-2">
                {['Like New', 'Excellent', 'Good'].map((cond) => (
                  <button
                    type="button"
                    key={cond}
                    onClick={() => setCondition(cond)}
                    className={`py-2 px-3 text-xs rounded-lg border font-medium transition-all ${
                      condition === cond
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    {cond}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#f0f9f4] p-3 rounded-xl border border-emerald-100 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-700 flex-shrink-0" />
              <div className="text-[11px] text-emerald-900 leading-tight">
                Doorstep pickup with instant UPI / Bank transfer right at inspection.
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0b4d3c] hover:bg-[#07362a] text-white font-bold py-2.5 px-4 rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Get Valuation Price</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="mt-4 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div>
              <p className="text-xs text-gray-500">Estimated BuyBack Value for {brand} {model}</p>
              <h4 className="text-3xl font-extrabold text-[#0b4d3c] mt-1">
                ₹{estimatedPrice.toLocaleString('en-IN')}
              </h4>
              <span className="text-[10px] text-gray-400">Guaranteed for next 48 hours</span>
            </div>

            <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 text-left text-xs space-y-2">
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero pickup fee across India</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Instant spot payment to UPI / Bank</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Certified factory data wipe certificate</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setStep(1)}
                className="flex-1 py-2 text-xs font-semibold text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={() => {
                  alert(`Pickup scheduled for ${brand} ${model}! Our representative will contact you.`);
                  onClose();
                  setStep(1);
                }}
                className="flex-1 py-2 text-xs font-bold text-white bg-[#0b4d3c] hover:bg-[#07362a] rounded-xl shadow-sm"
              >
                Schedule Free Pickup
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
