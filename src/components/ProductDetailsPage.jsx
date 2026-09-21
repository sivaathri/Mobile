import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  ChevronDown,
  Star,
  ShieldCheck,
  RotateCcw,
  Truck,
  CreditCard,
  Tag,
  Leaf,
  Check,
  Heart,
  ShoppingCart,
  Zap,
  ZoomIn,
  X,
  Info,
  MapPin,
  Sparkles,
  Package,
  Award,
  Smartphone,
  Cpu,
  Camera,
  Battery,
  Maximize2
} from 'lucide-react';
import { PhoneMockup } from './PhoneGraphics';

// Color themes matching the screenshot & iPhone 14 variants
const COLOR_OPTIONS = [
  { id: 'purple', name: 'Purple', hex: '#8c74b8', bgClass: 'bg-[#8c74b8]', borderClass: 'border-[#715c89]', textColor: 'text-purple-700' },
  { id: 'blue', name: 'Blue', hex: '#7da7c9', bgClass: 'bg-[#7da7c9]', borderClass: 'border-[#6185a3]', textColor: 'text-sky-700' },
  { id: 'midnight', name: 'Midnight', hex: '#1c222e', bgClass: 'bg-[#1c222e]', borderClass: 'border-[#111827]', textColor: 'text-gray-900' },
  { id: 'starlight', name: 'Starlight', hex: '#f4f0e6', bgClass: 'bg-[#f4f0e6]', borderClass: 'border-amber-200', textColor: 'text-amber-800' },
  { id: 'red', name: '(PRODUCT)RED', hex: '#d41c2c', bgClass: 'bg-[#d41c2c]', borderClass: 'border-red-600', textColor: 'text-red-600' },
];

const STORAGE_OPTIONS = ['128 GB', '256 GB', '512 GB'];

const CONDITION_OPTIONS = [
  {
    id: 'Excellent',
    title: 'Excellent',
    subtitle: 'Minimal signs of use',
    footnote: 'Fully functional',
    priceDelta: 0,
  },
  {
    id: 'Good',
    title: 'Good',
    subtitle: 'Light signs of use',
    footnote: 'Fully functional',
    priceDelta: -3000,
  },
  {
    id: 'Fair',
    title: 'Fair',
    subtitle: 'Visible signs of use',
    footnote: 'Fully functional',
    priceDelta: -6000,
  },
];

export default function ProductDetailsPage({
  product,
  onGoHome,
  onGoUsedPhones,
  onGoNewPhones,
  onSelectBrand,
  onAddToCart,
  onBuyNow,
  isWishlisted,
  onToggleWishlist,
  onSelectProduct,
  showToast,
}) {
  // Safe defaults if product is missing
  const currentProduct = product || {
    id: 'feat-1',
    name: 'iPhone 14',
    brand: 'Apple',
    price: 34999,
    originalPrice: 59000,
    specs: '128 GB · Excellent',
    imageType: 'iphone14-purple',
    image: '/assets/phones/iphone14_purple.jpg',
    tag: 'Certified',
  };

  const brandName = currentProduct.brand === 'iPhone' ? 'Apple' : (currentProduct.brand || 'Apple');

  // Variant selections
  const [selectedStorage, setSelectedStorage] = useState('128 GB');
  const [selectedCondition, setSelectedCondition] = useState('Excellent');
  const [selectedColor, setSelectedColor] = useState(COLOR_OPTIONS[0]);
  const [activeThumb, setActiveThumb] = useState(0);
  const [activeTab, setActiveTab] = useState('Overview');
  const [pincode, setPincode] = useState('600001');
  const [isChangingPincode, setIsChangingPincode] = useState(false);
  const [tempPincode, setTempPincode] = useState(pincode);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  // Price calculations based on storage and condition
  const basePrice = currentProduct.price || 34999;
  const baseOriginal = currentProduct.originalPrice || 59000;

  const storageExtra = selectedStorage === '512 GB' ? 9000 : selectedStorage === '256 GB' ? 4000 : 0;
  const condDelta = CONDITION_OPTIONS.find(c => c.id === selectedCondition)?.priceDelta || 0;

  const finalPrice = Math.max(12999, basePrice + storageExtra + condDelta);
  const finalOriginal = Math.max(finalPrice + 10000, baseOriginal + storageExtra);
  const discountPercent = Math.round(((finalOriginal - finalPrice) / finalOriginal) * 100);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentProduct.id]);

  const handlePincodeSubmit = (e) => {
    e.preventDefault();
    if (tempPincode.trim().length === 6) {
      setPincode(tempPincode.trim());
      setIsChangingPincode(false);
      showToast?.(`Delivery pincode set to ${tempPincode.trim()}`);
    }
  };

  const handleAddToCartClick = () => {
    const itemToAdd = {
      ...currentProduct,
      specs: `${selectedStorage} • ${selectedCondition} Condition (${selectedColor.name})`,
      price: finalPrice,
      originalPrice: finalOriginal,
      selectedStorage,
      selectedCondition,
      selectedColor: selectedColor.name,
    };
    onAddToCart?.(itemToAdd);
  };

  const handleBuyNowClick = () => {
    const itemToAdd = {
      ...currentProduct,
      specs: `${selectedStorage} • ${selectedCondition} Condition (${selectedColor.name})`,
      price: finalPrice,
      originalPrice: finalOriginal,
      selectedStorage,
      selectedCondition,
      selectedColor: selectedColor.name,
    };
    onBuyNow?.(itemToAdd);
  };

  // Similar used phones for the bottom right section
  const SIMILAR_PHONES = [
    {
      id: 'feat-13',
      name: 'iPhone 13',
      specs: '128 GB • Excellent',
      brand: 'Apple',
      price: 29999,
      originalPrice: 49000,
      tag: 'Certified',
      imageType: 'iphone13-pink',
      image: '/assets/phones/iphone13_pink.jpg',
    },
    {
      id: 'feat-s22',
      name: 'Samsung Galaxy S22',
      specs: '256 GB • Good',
      brand: 'Samsung',
      price: 24999,
      originalPrice: 42999,
      tag: 'Certified',
      imageType: 'galaxy-s22',
      image: '/assets/phones/galaxy_s22.jpg',
    },
  ];

  return (
    <div className="w-full bg-[#fbfcfb] text-gray-900 pb-16 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">

        {/* 1. Breadcrumb Trail */}
        <nav className="flex items-center gap-1.5 text-xs text-gray-500 mb-4 overflow-x-auto whitespace-nowrap pb-1">
          <button 
            onClick={onGoHome} 
            className="hover:text-emerald-800 transition-colors font-medium cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
          <button 
            onClick={onGoUsedPhones} 
            className="hover:text-emerald-800 transition-colors font-medium cursor-pointer"
          >
            Used Phones
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
          <button 
            onClick={() => onSelectBrand?.(brandName)} 
            className="hover:text-emerald-800 transition-colors font-medium cursor-pointer"
          >
            {brandName}
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
          <span className="text-gray-900 font-bold truncate">
            {currentProduct.name}
          </span>
        </nav>

        {/* 2. Main Top Grid: 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-start">

          {/* Left Column: Vertical Thumbnails + Main Phone Gallery (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">
            
            {/* Vertical Thumbnail Strip */}
            <div className="flex sm:flex-col gap-2.5 overflow-x-auto sm:overflow-visible pb-1 sm:pb-0 flex-shrink-0">
              {[0, 1, 2, 3, 4].map((idx) => {
                const isActive = activeThumb === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveThumb(idx)}
                    className={`w-14 h-16 sm:w-16 sm:h-18 rounded-xl border bg-white p-1 flex items-center justify-center transition-all cursor-pointer relative overflow-hidden ${
                      isActive 
                        ? 'border-2 border-emerald-600 ring-2 ring-emerald-100 shadow-sm' 
                        : 'border-gray-200 hover:border-emerald-300'
                    }`}
                    title={`View angle ${idx + 1}`}
                  >
                    {idx === 0 && (
                      <DualPhoneGraphic color={selectedColor.hex} className="h-14 w-auto object-contain" />
                    )}
                    {idx === 1 && (
                      <div className="flex items-center justify-center h-full w-full">
                        <div className="w-2.5 h-12 rounded-sm bg-gray-200 border border-gray-300 flex flex-col justify-between py-1">
                          <div className="w-1.5 h-2 bg-gray-400 mx-auto rounded-xs" />
                          <div className="w-1.5 h-3 bg-gray-400 mx-auto rounded-xs" />
                          <div className="w-1.5 h-3 bg-gray-400 mx-auto rounded-xs" />
                        </div>
                      </div>
                    )}
                    {idx === 2 && (
                      <div className="w-10 h-10 rounded-lg p-1 flex flex-col justify-center items-center" style={{ backgroundColor: selectedColor.hex }}>
                        <div className="w-6 h-6 rounded-md bg-black/40 p-0.5 flex flex-col justify-between">
                          <div className="w-2 h-2 rounded-full bg-black ring-1 ring-white/30 self-start" />
                          <div className="w-2 h-2 rounded-full bg-black ring-1 ring-white/30 self-end" />
                        </div>
                      </div>
                    )}
                    {idx === 3 && (
                      <div className="flex items-center justify-center h-full w-full rotate-12 scale-90">
                        <DualPhoneGraphic color={selectedColor.hex} className="h-12 w-auto object-contain" />
                      </div>
                    )}
                    {idx === 4 && (
                      <div className="w-9 h-14 rounded-lg bg-gray-900 border border-gray-400 p-0.5 flex flex-col items-center">
                        <div className="w-3 h-1 bg-black rounded-full mt-0.5 mb-1" />
                        <div className="w-full flex-1 rounded bg-gradient-to-b from-purple-800 to-indigo-950" />
                      </div>
                    )}
                  </button>
                );
              })}
              <div className="hidden sm:flex items-center justify-center py-1">
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Main Image Showcase Card */}
            <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 flex flex-col items-center justify-center relative min-h-[380px] sm:min-h-[440px] shadow-xs">
              
              {/* Purple 'Certified' Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1 bg-[#6936d3] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                  <Sparkles className="w-3 h-3 fill-white" />
                  <span>Certified</span>
                </span>
              </div>

              {/* Wishlist Button */}
              <button
                onClick={() => onToggleWishlist?.(currentProduct)}
                className={`absolute top-4 right-4 w-9 h-9 rounded-full border bg-white flex items-center justify-center shadow-xs transition-all cursor-pointer z-10 ${
                  isWishlisted 
                    ? 'border-rose-200 text-rose-500 bg-rose-50' 
                    : 'border-gray-200 text-gray-400 hover:text-rose-500 hover:border-rose-200'
                }`}
                title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                aria-label="Wishlist"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500' : ''}`} />
              </button>

              {/* Main Phone Visual (Front & Back View side-by-side as in screenshot) */}
              <div 
                onClick={() => setIsZoomOpen(true)}
                className="w-full h-72 sm:h-84 flex items-center justify-center cursor-zoom-in group transition-transform duration-300 hover:scale-[1.02]"
              >
                {activeThumb === 0 ? (
                  <DualPhoneGraphic color={selectedColor.hex} className="h-64 sm:h-76 w-auto object-contain drop-shadow-xl" />
                ) : activeThumb === 1 ? (
                  <div className="h-64 sm:h-72 w-20 flex flex-col items-center justify-center">
                    <div className="w-5 h-64 rounded-md bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 border border-gray-300 shadow-md flex flex-col justify-between py-6">
                      <div className="w-2.5 h-4 bg-gray-500 mx-auto rounded-xs shadow-xs" />
                      <div className="w-2.5 h-8 bg-gray-500 mx-auto rounded-xs shadow-xs" />
                      <div className="w-2.5 h-8 bg-gray-500 mx-auto rounded-xs shadow-xs" />
                    </div>
                  </div>
                ) : activeThumb === 2 ? (
                  <div className="w-56 h-56 rounded-3xl p-6 shadow-xl flex flex-col justify-center items-center border border-black/10" style={{ backgroundColor: selectedColor.hex }}>
                    <div className="w-36 h-36 rounded-2xl bg-black/40 p-3 shadow-inner flex flex-col justify-between border border-white/10">
                      <div className="w-12 h-12 rounded-full bg-black ring-4 ring-white/20 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-sky-950 ring-2 ring-emerald-400/50" />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-black ring-4 ring-white/20 self-end flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-sky-950 ring-2 ring-emerald-400/50" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <DualPhoneGraphic color={selectedColor.hex} className="h-64 sm:h-76 w-auto object-contain drop-shadow-xl" />
                )}
              </div>

              {/* Click to Zoom Button */}
              <button
                onClick={() => setIsZoomOpen(true)}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xs border border-gray-200 text-xs font-semibold text-gray-700 px-3.5 py-1.5 rounded-full shadow-xs hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <ZoomIn className="w-3.5 h-3.5 text-gray-500" />
                <span>Click to zoom</span>
              </button>
            </div>

          </div>

          {/* Center Column: Title, Rating, Price, Storage, Condition, Color (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col">
            
            {/* Brand */}
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              {brandName}
            </span>

            {/* Title + Certified Badge */}
            <div className="flex items-center gap-2 mt-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-950 tracking-tight leading-tight">
                {currentProduct.name} <span className="font-semibold text-gray-600 text-xl sm:text-2xl">(Used)</span>
              </h1>
              <span className="bg-[#6936d3] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md self-center shadow-xs">
                Certified
              </span>
            </div>

            {/* Specs Subtitle */}
            <p className="text-xs sm:text-sm font-semibold text-gray-600 mt-1">
              {selectedStorage} • {selectedCondition} Condition
            </p>

            {/* Ratings & Sold Stats */}
            <div className="flex items-center gap-2 mt-2.5 text-xs text-gray-600">
              <div className="flex items-center text-emerald-600">
                {[1, 2, 3, 4].map(i => (
                  <Star key={i} className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
                ))}
                <Star className="w-3.5 h-3.5 fill-emerald-500/70 text-emerald-500" />
              </div>
              <span className="font-bold text-emerald-700 hover:underline cursor-pointer">
                4.6 (320 reviews)
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-500 font-medium">1K+ sold</span>
            </div>

            {/* Price Section */}
            <div className="mt-4 pb-4 border-b border-gray-100">
              <div className="flex items-baseline gap-2.5">
                <span className="text-3xl font-black text-gray-950 tracking-tight">
                  ₹{finalPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-sm font-medium text-gray-400 line-through">
                  ₹{finalOriginal.toLocaleString('en-IN')}
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-2 py-0.5 rounded-md">
                  {discountPercent}% OFF
                </span>
              </div>
              <span className="text-[11px] text-gray-500 mt-0.5 block">
                Inclusive of all taxes
              </span>
            </div>

            {/* Storage Selector */}
            <div className="mt-4">
              <label className="text-xs font-bold text-gray-800 block mb-2">
                Storage
              </label>
              <div className="grid grid-cols-3 gap-2">
                {STORAGE_OPTIONS.map((size) => {
                  const isSelected = selectedStorage === size;
                  return (
                    <button
                      key={size}
                      onClick={() => setSelectedStorage(size)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                        isSelected
                          ? 'border-2 border-emerald-600 bg-emerald-50/40 text-emerald-900 shadow-xs'
                          : 'border border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Condition Selector */}
            <div className="mt-4">
              <div className="flex items-center gap-1 mb-2">
                <label className="text-xs font-bold text-gray-800">
                  Condition
                </label>
                <Info className="w-3.5 h-3.5 text-gray-400 cursor-pointer" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {CONDITION_OPTIONS.map((c) => {
                  const isSelected = selectedCondition === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCondition(c.id)}
                      className={`p-2.5 rounded-xl transition-all cursor-pointer text-left flex flex-col justify-between ${
                        isSelected
                          ? 'border-2 border-emerald-600 bg-white shadow-xs'
                          : 'border border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="font-bold text-xs text-gray-900 leading-tight">
                        {c.title}
                      </div>
                      <div className="text-[10px] text-gray-400 mt-1 leading-tight">
                        {c.subtitle}
                      </div>
                      <div className="text-[10px] text-gray-600 font-medium mt-0.5 leading-tight">
                        {c.footnote}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Color Selector */}
            <div className="mt-4">
              <label className="text-xs font-bold text-gray-800 block mb-2">
                Color
              </label>
              <div className="flex items-center gap-4">
                {COLOR_OPTIONS.map((col) => {
                  const isSelected = selectedColor.id === col.id;
                  return (
                    <button
                      key={col.id}
                      onClick={() => setSelectedColor(col)}
                      className="flex flex-col items-center gap-1 cursor-pointer group"
                    >
                      <div
                        className={`w-7 h-7 rounded-full transition-all duration-200 ${
                          isSelected
                            ? 'ring-2 ring-offset-2 ring-emerald-600 scale-105'
                            : 'hover:scale-105 border border-black/10'
                        }`}
                        style={{ backgroundColor: col.hex }}
                      />
                      <span className={`text-[11px] transition-colors ${
                        isSelected ? 'font-bold text-gray-900' : 'text-gray-500 group-hover:text-gray-700'
                      }`}>
                        {col.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: SecondKart Certified Assurance & Purchase Box (3 Cols) */}
          <div className="lg:col-span-3">
            <div className="bg-emerald-50/40 rounded-2xl border border-emerald-100 p-5 shadow-xs flex flex-col justify-between sticky top-24">
              
              {/* Header: Shield + Title */}
              <div className="flex items-start gap-3 pb-4 border-b border-emerald-100/80">
                <div className="w-10 h-10 rounded-xl bg-emerald-100/90 flex items-center justify-center text-emerald-800 flex-shrink-0 shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-[#0b4d3c]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-gray-900 leading-tight">
                    SecondKart Certified
                  </h3>
                  <p className="text-[11px] text-gray-600 mt-0.5 leading-snug">
                    This phone is quality checked by experts
                  </p>
                </div>
              </div>

              {/* 5-Point Checklist with Green Badges */}
              <div className="py-4 space-y-2.5 border-b border-emerald-100/80">
                {[
                  '100% Functional',
                  '70+ Point Quality Check',
                  '7-Day Easy Returns',
                  'Pan India Delivery',
                  'No Hidden Charges',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2.5 text-xs font-semibold text-gray-800">
                    <div className="w-4 h-4 rounded-full bg-emerald-600 flex items-center justify-center text-white flex-shrink-0 shadow-xs">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Delivery Pincode Section */}
              <div className="py-3.5 border-b border-emerald-100/80 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-bold text-gray-800">
                    <Truck className="w-4 h-4 text-emerald-700" />
                    <span>Deliver to {pincode}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                  </div>
                  <button
                    onClick={() => setIsChangingPincode(!isChangingPincode)}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline cursor-pointer"
                  >
                    Change
                  </button>
                </div>

                {isChangingPincode && (
                  <form onSubmit={handlePincodeSubmit} className="mt-2.5 flex gap-2">
                    <input
                      type="text"
                      maxLength={6}
                      value={tempPincode}
                      onChange={(e) => setTempPincode(e.target.value.replace(/\D/g, ''))}
                      placeholder="Enter 6-digit Pincode"
                      className="flex-1 px-2.5 py-1.5 text-xs bg-white border border-emerald-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 bg-[#0b4d3c] text-white font-bold text-xs rounded-lg hover:bg-[#07362a]"
                    >
                      Apply
                    </button>
                  </form>
                )}

                <div className="text-[11px] text-gray-500 mt-1 pl-5.5">
                  Estimated delivery: <span className="font-semibold text-gray-700">2 - 4 days</span>
                </div>
              </div>

              {/* Actions: Add to Cart & Buy Now */}
              <div className="pt-4 space-y-2.5">
                <button
                  onClick={handleAddToCartClick}
                  className="w-full bg-[#0b4d3c] hover:bg-[#08382c] active:scale-[0.98] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4 stroke-[2.5]" />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={handleBuyNowClick}
                  className="w-full bg-white hover:bg-emerald-50/60 active:scale-[0.98] border-2 border-[#0b4d3c] text-[#0b4d3c] font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Zap className="w-4 h-4 fill-[#0b4d3c] text-[#0b4d3c]" />
                  <span>Buy Now</span>
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* 3. Trust Badges Row (6 Cards matching the screenshot) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-8">
          {[
            {
              icon: ShieldCheck,
              title: 'Quality Checked',
              subtitle: 'By Experts',
              bgColor: 'bg-emerald-50/80',
              iconColor: 'text-emerald-700',
            },
            {
              icon: RotateCcw,
              title: '7-Day Returns',
              subtitle: 'Hassle-Free',
              bgColor: 'bg-teal-50/80',
              iconColor: 'text-teal-700',
            },
            {
              icon: Truck,
              title: 'Pan India Delivery',
              subtitle: 'Across India',
              bgColor: 'bg-emerald-50/80',
              iconColor: 'text-emerald-700',
            },
            {
              icon: CreditCard,
              title: 'Secure Payments',
              subtitle: '100% Safe',
              bgColor: 'bg-cyan-50/80',
              iconColor: 'text-cyan-700',
            },
            {
              icon: Tag,
              title: 'Best Value',
              subtitle: 'Premium Phones',
              bgColor: 'bg-emerald-50/80',
              iconColor: 'text-emerald-700',
            },
            {
              icon: Leaf,
              title: 'Sustainable Choice',
              subtitle: 'Good for You, Good for the Planet',
              bgColor: 'bg-emerald-50/80',
              iconColor: 'text-emerald-700',
            },
          ].map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 p-3.5 flex items-center gap-3 shadow-2xs hover:shadow-xs hover:border-emerald-200 transition-all"
              >
                <div className={`w-10 h-10 rounded-xl ${badge.bgColor} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${badge.iconColor}`} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-gray-900 truncate leading-tight">
                    {badge.title}
                  </h4>
                  <p className="text-[10px] text-gray-500 truncate leading-tight mt-0.5">
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. Bottom Section: Tabs + Similar Phones */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">

          {/* Left Area: Detailed Tabs & Content (7 Cols) */}
          <div className="lg:col-span-7">
            
            {/* Tab Navigation */}
            <div className="flex items-center gap-6 border-b border-gray-200 overflow-x-auto no-scrollbar">
              {[
                'Overview',
                'Specifications',
                'Condition Details',
                "What's in the Box",
                'Ratings & Reviews',
                'FAQs',
              ].map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer relative ${
                      isActive 
                        ? 'text-emerald-800 font-bold' 
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {tab}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Tab 1: Overview */}
            {activeTab === 'Overview' && (
              <div className="mt-5 space-y-5 animate-fadeIn">
                <div>
                  <h3 className="text-base font-bold text-gray-900">
                    Product Overview
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                    Get the powerful {currentProduct.name} at an amazing price. This certified used device is thoroughly tested and fully functional, giving you the premium Apple experience without the high price tag.
                  </p>
                </div>

                {/* Key Highlights (Light Green Container with 2-column checklist) */}
                <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100/70">
                  <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wider mb-3">
                    Key Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      'A15 Bionic Chip',
                      '6.1" Super Retina XDR Display',
                      '12MP Dual Camera System',
                      'iOS 17 Compatible',
                      'Great Battery Life',
                      'Premium Build Quality',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                        <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Specifications */}
            {activeTab === 'Specifications' && (
              <div className="mt-5 bg-white rounded-2xl border border-gray-100 overflow-hidden divide-y divide-gray-100 text-xs animate-fadeIn">
                {[
                  { label: 'Model', val: currentProduct.name },
                  { label: 'Display', val: '6.1-inch Super Retina XDR OLED, 2532 x 1170 pixels' },
                  { label: 'Processor', val: 'Apple A15 Bionic (5nm) 6-core CPU, 5-core GPU' },
                  { label: 'Camera', val: '12 MP Dual Rear Camera (Wide + Ultra-Wide) with 4K Dolby Vision' },
                  { label: 'Front Camera', val: '12 MP TrueDepth with Autofocus and Photonic Engine' },
                  { label: 'Battery Health', val: '90%+ Certified Peak Performance' },
                  { label: 'Operating System', val: 'iOS 16 (Upgradable to latest iOS 17/18)' },
                  { label: 'Build', val: 'Ceramic Shield front, Glass back, Aerospace aluminum frame' },
                  { label: 'SIM Support', val: 'Dual SIM (nano-SIM and eSIM)' },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 p-3 hover:bg-gray-50">
                    <span className="font-semibold text-gray-500">{row.label}</span>
                    <span className="col-span-2 font-bold text-gray-900">{row.val}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Condition Details */}
            {activeTab === 'Condition Details' && (
              <div className="mt-5 space-y-4 text-xs animate-fadeIn">
                <div className="p-4 bg-white rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 text-sm mb-2">Grading Criteria</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li><strong className="text-emerald-800">Excellent:</strong> Screen and body have almost zero visible marks. Looks virtually new from 10 inches away. Battery health 90%+.</li>
                    <li><strong className="text-emerald-800">Good:</strong> Minor micro-scratches on casing, screen free of cracks or deep gouges. Fully functional, 85%+ battery.</li>
                    <li><strong className="text-emerald-800">Fair:</strong> Noticeable scuffs or signs of usage on frame, 100% functional hardware. Best price-to-performance ratio.</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Tab 4: What's in the Box */}
            {activeTab === "What's in the Box" && (
              <div className="mt-5 p-5 bg-white rounded-2xl border border-gray-100 animate-fadeIn text-xs space-y-3">
                <h4 className="font-bold text-gray-900 text-sm">Package Contents</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  {['Certified Smartphone', 'Braided Type-C Cable', 'SIM Ejector Tool', 'SecondKart Warranty Card', 'Inspection Checklist'].map((item, idx) => (
                    <div key={idx} className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-2">
                      <Package className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="font-semibold text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 5: Ratings & Reviews */}
            {activeTab === 'Ratings & Reviews' && (
              <div className="mt-5 space-y-4 animate-fadeIn text-xs">
                <div className="p-4 bg-white rounded-2xl border border-gray-100 flex items-center gap-6">
                  <div>
                    <div className="text-3xl font-black text-emerald-800">4.6</div>
                    <div className="flex text-emerald-500 mt-1">
                      {[1, 2, 3, 4, 5].map(i => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <div className="text-gray-400 text-[11px] mt-0.5">Based on 320 reviews</div>
                  </div>
                </div>
                <div className="space-y-2.5">
                  {[
                    { author: 'Rahul V.', rating: 5, date: '3 days ago', comment: 'Battery health was 94%! Practically looks brand new. Super fast express delivery.' },
                    { author: 'Ananya S.', rating: 5, date: '1 week ago', comment: 'Got the Purple 128GB version. Camera quality is pristine and Apple diagnostics check passed with flying colors.' },
                  ].map((rev, i) => (
                    <div key={i} className="p-3.5 bg-white rounded-xl border border-gray-100">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-gray-900">{rev.author}</span>
                        <span className="text-[10px] text-gray-400">{rev.date}</span>
                      </div>
                      <p className="text-gray-600">{rev.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 6: FAQs */}
            {activeTab === 'FAQs' && (
              <div className="mt-5 space-y-2.5 animate-fadeIn text-xs">
                {[
                  { q: 'Is this phone original and authentic?', a: 'Yes, 100% genuine original Apple devices verified by our 70+ point diagnostic scan.' },
                  { q: 'What warranty is included?', a: 'Every Certified phone comes with a free 6-Month SecondKart Doorstep Warranty covering hardware and functionality.' },
                  { q: 'Can I return it if I am not satisfied?', a: 'Yes! We offer a 7-day hassle-free money-back guarantee with doorstep pickup.' },
                ].map((faq, i) => (
                  <div key={i} className="p-3.5 bg-white rounded-xl border border-gray-100">
                    <h5 className="font-bold text-gray-900 mb-1">{faq.q}</h5>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Right Area: Similar Used Phones (5 Cols matching screenshot) */}
          <div className="lg:col-span-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-gray-900">
                Similar Used Phones
              </h3>
              <button
                onClick={onGoUsedPhones}
                className="text-xs font-bold text-emerald-800 hover:text-emerald-950 hover:underline cursor-pointer"
              >
                View All
              </button>
            </div>

            {/* 2 Side-by-Side Product Cards matching screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SIMILAR_PHONES.map((phone) => (
                <div
                  key={phone.id}
                  onClick={() => onSelectProduct?.(phone)}
                  className="bg-white rounded-2xl border border-gray-100 p-4 shadow-2xs hover:shadow-md hover:border-emerald-200 transition-all cursor-pointer relative group flex flex-col justify-between"
                >
                  {/* Purple Certified Badge */}
                  <span className="absolute top-3 left-3 bg-[#6936d3] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full z-10">
                    Certified
                  </span>

                  {/* Wishlist Heart */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist?.(phone);
                    }}
                    className="absolute top-3 right-3 text-gray-400 hover:text-rose-500 z-10 transition-colors"
                  >
                    <Heart className="w-4 h-4" />
                  </button>

                  {/* Phone Graphic */}
                  <div className="w-full h-36 flex items-center justify-center my-2 group-hover:scale-105 transition-transform duration-200">
                    {phone.imageType === 'iphone13-pink' ? (
                      <DualPhoneGraphic color="#f9d3d9" className="h-32 w-auto object-contain" />
                    ) : (
                      <PhoneMockup type={phone.imageType} className="h-32 w-auto object-contain" />
                    )}
                  </div>

                  {/* Details */}
                  <div className="pt-2 border-t border-gray-50">
                    <h4 className="text-xs font-bold text-gray-900 group-hover:text-emerald-900 transition-colors truncate">
                      {phone.name}
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-0.5 truncate">
                      {phone.specs}
                    </p>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-sm font-extrabold text-gray-950">
                        ₹{phone.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[11px] text-gray-400 line-through">
                        ₹{phone.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox / Zoom Modal */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <button
            onClick={() => setIsZoomOpen(false)}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-2xl w-full p-4 flex flex-col items-center justify-center">
            <DualPhoneGraphic color={selectedColor.hex} className="h-[75vh] w-auto object-contain drop-shadow-2xl" />
            <div className="text-white text-sm font-semibold mt-4 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full">
              {currentProduct.name} - {selectedColor.name} ({selectedStorage})
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

// Dedicated High-Fidelity Front + Back Graphic Component matching the user screenshot
export function DualPhoneGraphic({ color = '#8c74b8', className = "h-64 w-auto object-contain" }) {
  return (
    <svg viewBox="0 0 280 230" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 1. Back View of Phone (Positioned on the Left) */}
      <g transform="translate(20, 15)">
        {/* Outer Shadow */}
        <rect x="0" y="0" width="105" height="195" rx="22" fill="#000" opacity="0.12" filter="blur(6px)" />
        
        {/* Metal Frame Border */}
        <rect x="0" y="0" width="105" height="195" rx="22" fill={color} stroke="#000" strokeOpacity="0.15" strokeWidth="2.5" />
        
        {/* Matte Glass Back Cover with subtle gradient */}
        <rect x="2" y="2" width="101" height="191" rx="20" fill="url(#back-glass-grad)" />

        {/* Apple Logo Centered */}
        <g transform="translate(52.5, 92) scale(0.9)">
          <path
            d="M -1 -7 C 0 -9 2 -11 4 -11 C 5 -11 5 -10 4 -9 C 3 -7 1 -5 -1 -5 C -1 -5 -1 -6 -1 -7 Z M 4.8 0 C 4.8 -3.2 7.4 -4.8 7.5 -4.9 C 6 -7.1 3.7 -7.4 2.9 -7.5 C 1 -7.7 -0.8 -6.3 -1.8 -6.3 C -2.8 -6.3 -4.2 -7.5 -5.7 -7.4 C -7.7 -7.4 -9.5 -6.2 -10.5 -4.5 C -12.6 -0.8 -11 4.6 -9 7.4 C -8 8.8 -6.9 10.4 -5.4 10.3 C -3.9 10.2 -3.4 9.3 -1.6 9.3 C 0.1 9.3 0.6 10.3 2.2 10.3 C 3.8 10.3 4.8 8.9 5.8 7.4 C 6.9 5.8 7.4 4.3 7.5 4.2 C 7.3 4.1 4.8 3.2 4.8 0 Z"
            fill="#ffffff"
            opacity="0.25"
          />
        </g>

        {/* Camera Module (Rounded Square on top-left) */}
        <g transform="translate(10, 10)">
          <rect x="0" y="0" width="46" height="48" rx="14" fill="#ffffff" fillOpacity="0.18" stroke="#ffffff" strokeOpacity="0.3" strokeWidth="1" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))" />
          
          {/* Top Camera Lens */}
          <circle cx="16" cy="16" r="10" fill="#18141f" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />
          <circle cx="16" cy="16" r="5" fill="#08060b" />
          <circle cx="14" cy="14" r="1.8" fill="#4682b4" opacity="0.8" />
          <circle cx="17" cy="17" r="1" fill="#fff" opacity="0.6" />

          {/* Bottom Diagonal Camera Lens */}
          <circle cx="30" cy="32" r="10" fill="#18141f" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />
          <circle cx="30" cy="32" r="5" fill="#08060b" />
          <circle cx="28" cy="30" r="1.8" fill="#4682b4" opacity="0.8" />
          <circle cx="31" cy="33" r="1" fill="#fff" opacity="0.6" />

          {/* Flash Circle */}
          <circle cx="33" cy="14" r="3.2" fill="#fffbe6" stroke="#d4c99e" strokeWidth="0.8" />
          {/* Microphone Dot */}
          <circle cx="15" cy="34" r="1.2" fill="#2d2836" />
        </g>
      </g>

      {/* 2. Front View of Phone (Positioned on the Right, slightly overlapping) */}
      <g transform="translate(125, 18)">
        {/* Outer Shadow */}
        <rect x="0" y="0" width="103" height="195" rx="22" fill="#000" opacity="0.18" filter="blur(8px)" />

        {/* Phone Frame */}
        <rect x="0" y="0" width="103" height="195" rx="22" fill="#15121c" stroke="#2d2538" strokeWidth="2.5" />

        {/* OLED Screen Bezel */}
        <rect x="2.5" y="2.5" width="98" height="190" rx="19.5" fill="#000" />

        {/* Screen Display with Purple Fluid Wallpaper (matching screenshot) */}
        <rect x="4" y="4" width="95" height="187" rx="18" fill="url(#front-screen-grad)" />

        {/* Dynamic Island / Notch at top */}
        <rect x="36" y="8" width="31" height="9" rx="4.5" fill="#000000" />
        <circle cx="43" cy="12.5" r="2.2" fill="#111827" />
        <circle cx="58" cy="12.5" r="1.5" fill="#1e293b" />

        {/* Screen Glare Highlight */}
        <path d="M 4 22 L 99 22 L 99 65 L 4 105 Z" fill="url(#screen-glare)" opacity="0.08" />

        {/* Home Bar Indicator at bottom */}
        <rect x="36" y="184" width="31" height="2.5" rx="1.25" fill="#ffffff" opacity="0.6" />
      </g>

      {/* Gradients */}
      <defs>
        <linearGradient id="back-glass-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.9" />
          <stop offset="50%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.25" />
        </linearGradient>

        <linearGradient id="front-screen-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#13091f" />
          <stop offset="35%" stopColor="#411b6d" />
          <stop offset="55%" stopColor="#7c3aed" />
          <stop offset="75%" stopColor="#311042" />
          <stop offset="100%" stopColor="#0a0512" />
        </linearGradient>

        <linearGradient id="screen-glare" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
