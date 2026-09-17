import React, { useState, useMemo } from 'react';
import {
  Heart,
  ShoppingCart,
  Search,
  ChevronDown,
  ChevronRight,
  SlidersHorizontal,
  X,
  ShieldCheck,
  RotateCcw,
  Truck,
  Award,
  Leaf,
  MapPin,
  LayoutGrid,
  List,
} from 'lucide-react';
import { PhoneMockup, BrandIcon } from './PhoneGraphics';

// 12 Primary Products matching Page 1 of the user's reference screenshot + additional products
const ALL_USED_PHONES_CATALOG = [
  // Page 1 (Exact match to reference screenshot)
  {
    id: 'up-1',
    name: 'iPhone 14',
    specs: '128 GB · Excellent',
    condition: 'Excellent',
    storage: '128 GB',
    brand: 'Apple',
    ram: '6 GB',
    price: 34999,
    originalPrice: 59000,
    city: 'Chennai',
    graphicType: 'iphone14-purple',
    tag: 'Certified',
  },
  {
    id: 'up-2',
    name: 'Samsung Galaxy S23',
    specs: '256 GB · Like New',
    condition: 'Like New',
    storage: '256 GB',
    brand: 'Samsung',
    ram: '8 GB',
    price: 28999,
    originalPrice: 72999,
    city: 'Bangalore',
    graphicType: 'galaxy-s23',
    tag: 'Certified',
  },
  {
    id: 'up-3',
    name: 'OnePlus 11R',
    specs: '128 GB · Excellent',
    condition: 'Excellent',
    storage: '128 GB',
    brand: 'OnePlus',
    ram: '8 GB',
    price: 26499,
    originalPrice: 45999,
    city: 'Coimbatore',
    graphicType: 'oneplus-11r',
    tag: 'Certified',
  },
  {
    id: 'up-4',
    name: 'Xiaomi 13 Pro',
    specs: '256 GB · Good',
    condition: 'Good',
    storage: '256 GB',
    brand: 'Xiaomi',
    ram: '12 GB',
    price: 32999,
    originalPrice: 59999,
    city: 'Madurai',
    graphicType: 'xiaomi-13pro',
    tag: 'Certified',
  },
  {
    id: 'up-5',
    name: 'Google Pixel 7',
    specs: '128 GB · Like New',
    condition: 'Like New',
    storage: '128 GB',
    brand: 'Google',
    ram: '8 GB',
    price: 27999,
    originalPrice: 49999,
    city: 'Trichy',
    graphicType: 'pixel-7',
    tag: 'Certified',
  },
  {
    id: 'up-6',
    name: 'Realme GT 2',
    specs: '128 GB · Good',
    condition: 'Good',
    storage: '128 GB',
    brand: 'Realme',
    ram: '8 GB',
    price: 18999,
    originalPrice: 37999,
    city: 'Salem',
    graphicType: 'realme-gt2',
    tag: 'Certified',
  },
  {
    id: 'up-7',
    name: 'iPhone 13',
    specs: '128 GB · Excellent',
    condition: 'Excellent',
    storage: '128 GB',
    brand: 'Apple',
    ram: '4 GB',
    price: 29999,
    originalPrice: 49000,
    city: 'Chennai',
    graphicType: 'iphone13-pink',
    tag: 'Certified',
  },
  {
    id: 'up-8',
    name: 'Samsung Galaxy S22',
    specs: '128 GB · Good',
    condition: 'Good',
    storage: '128 GB',
    brand: 'Samsung',
    ram: '8 GB',
    price: 24999,
    originalPrice: 42999,
    city: 'Bangalore',
    graphicType: 'galaxy-s22',
    tag: 'Certified',
  },
  {
    id: 'up-9',
    name: 'OnePlus Nord 3',
    specs: '128 GB · Like New',
    condition: 'Like New',
    storage: '128 GB',
    brand: 'OnePlus',
    ram: '8 GB',
    price: 21999,
    originalPrice: 36999,
    city: 'Hyderabad',
    graphicType: 'oneplus-nord3',
    tag: 'Certified',
  },
  {
    id: 'up-10',
    name: 'Vivo V27',
    specs: '128 GB · Good',
    condition: 'Good',
    storage: '128 GB',
    brand: 'Vivo',
    ram: '8 GB',
    price: 24999,
    originalPrice: 42999,
    city: 'Coimbatore',
    graphicType: 'vivo-v27',
    tag: 'Certified',
  },
  {
    id: 'up-11',
    name: 'Motorola Edge 30',
    specs: '128 GB · Excellent',
    condition: 'Excellent',
    storage: '128 GB',
    brand: 'Motorola',
    ram: '8 GB',
    price: 17499,
    originalPrice: 28999,
    city: 'Mysore',
    graphicType: 'moto-edge30',
    tag: 'Certified',
  },
  {
    id: 'up-12',
    name: 'Nothing Phone (1)',
    specs: '128 GB · Good',
    condition: 'Good',
    storage: '128 GB',
    brand: 'Nothing',
    ram: '8 GB',
    price: 18499,
    originalPrice: 32999,
    city: 'Trichy',
    graphicType: 'nothing-1',
    tag: 'Certified',
  },

  // Page 2 & extra products
  {
    id: 'up-13',
    name: 'iPhone 12',
    specs: '64 GB · Good',
    condition: 'Good',
    storage: '64 GB',
    brand: 'Apple',
    ram: '4 GB',
    price: 23999,
    originalPrice: 49900,
    city: 'Chennai',
    graphicType: 'iphone14-purple',
    tag: 'Certified',
  },
  {
    id: 'up-14',
    name: 'Samsung Galaxy S21 FE',
    specs: '128 GB · Excellent',
    condition: 'Excellent',
    storage: '128 GB',
    brand: 'Samsung',
    ram: '8 GB',
    price: 19999,
    originalPrice: 39999,
    city: 'Coimbatore',
    graphicType: 'galaxy-s22',
    tag: 'Certified',
  },
  {
    id: 'up-15',
    name: 'OnePlus 10T 5G',
    specs: '128 GB · Excellent',
    condition: 'Excellent',
    storage: '128 GB',
    brand: 'OnePlus',
    ram: '8 GB',
    price: 22499,
    originalPrice: 42999,
    city: 'Bangalore',
    graphicType: 'oneplus-11r',
    tag: 'Certified',
  },
  {
    id: 'up-16',
    name: 'Google Pixel 6a',
    specs: '128 GB · Fair',
    condition: 'Fair',
    storage: '128 GB',
    brand: 'Google',
    ram: '6 GB',
    price: 15999,
    originalPrice: 31999,
    city: 'Madurai',
    graphicType: 'pixel-7',
    tag: 'Certified',
  },
  {
    id: 'up-17',
    name: 'Realme 11 Pro+ 5G',
    specs: '256 GB · Like New',
    condition: 'Like New',
    storage: '256 GB',
    brand: 'Realme',
    ram: '12 GB',
    price: 19499,
    originalPrice: 29999,
    city: 'Salem',
    graphicType: 'realme-gt2',
    tag: 'Certified',
  },
  {
    id: 'up-18',
    name: 'Vivo V29e',
    specs: '128 GB · Excellent',
    condition: 'Excellent',
    storage: '128 GB',
    brand: 'Vivo',
    ram: '8 GB',
    price: 16999,
    originalPrice: 28999,
    city: 'Trichy',
    graphicType: 'vivo-v27',
    tag: 'Certified',
  },
  {
    id: 'up-19',
    name: 'Xiaomi 12 Pro',
    specs: '256 GB · Good',
    condition: 'Good',
    storage: '256 GB',
    brand: 'Xiaomi',
    ram: '12 GB',
    price: 27999,
    originalPrice: 62999,
    city: 'Bangalore',
    graphicType: 'xiaomi-13pro',
    tag: 'Certified',
  },
  {
    id: 'up-20',
    name: 'Motorola Edge 40',
    specs: '256 GB · Like New',
    condition: 'Like New',
    storage: '256 GB',
    brand: 'Motorola',
    ram: '8 GB',
    price: 21999,
    originalPrice: 34999,
    city: 'Chennai',
    graphicType: 'moto-edge30',
    tag: 'Certified',
  },
  {
    id: 'up-21',
    name: 'iPhone 11',
    specs: '64 GB · Fair',
    condition: 'Fair',
    storage: '64 GB',
    brand: 'Apple',
    ram: '4 GB',
    price: 16999,
    originalPrice: 39900,
    city: 'Mysore',
    graphicType: 'iphone13-pink',
    tag: 'Certified',
  },
  {
    id: 'up-22',
    name: 'Samsung Galaxy A54',
    specs: '128 GB · Excellent',
    condition: 'Excellent',
    storage: '128 GB',
    brand: 'Samsung',
    ram: '8 GB',
    price: 18499,
    originalPrice: 38999,
    city: 'Hyderabad',
    graphicType: 'galaxy-s23',
    tag: 'Certified',
  },
  {
    id: 'up-23',
    name: 'OnePlus 9 Pro',
    specs: '256 GB · Good',
    condition: 'Good',
    storage: '256 GB',
    brand: 'OnePlus',
    ram: '12 GB',
    price: 23999,
    originalPrice: 64999,
    city: 'Coimbatore',
    graphicType: 'oneplus-11r',
    tag: 'Certified',
  },
  {
    id: 'up-24',
    name: 'Nothing Phone (2)',
    specs: '256 GB · Like New',
    condition: 'Like New',
    storage: '256 GB',
    brand: 'Nothing',
    ram: '12 GB',
    price: 29999,
    originalPrice: 44999,
    city: 'Bangalore',
    graphicType: 'nothing-1',
    tag: 'Certified',
  },
];

export default function UsedPhonesPage({
  onAddToCart,
  wishlistIds = [],
  onToggleWishlist,
  onQuickView,
  onGoHome,
  showToast,
}) {
  // Filter states (initialized matching user's reference screenshot where Excellent & 128GB are checked)
  const [selectedConditions, setSelectedConditions] = useState(['Excellent']);
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [brandSearch, setBrandSearch] = useState('');
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedStorage, setSelectedStorage] = useState(['128 GB']);
  const [selectedRam, setSelectedRam] = useState([]);
  const [sortBy, setSortBy] = useState('Popularity');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Accordion open states
  const [isConditionOpen, setIsConditionOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isBrandOpen, setIsBrandOpen] = useState(true);
  const [isStorageOpen, setIsStorageOpen] = useState(true);
  const [isRamOpen, setIsRamOpen] = useState(false);

  // Filter options with exact counts from screenshot
  const conditionList = [
    { label: 'Like New', count: 56 },
    { label: 'Excellent', count: 120 },
    { label: 'Good', count: 98 },
    { label: 'Fair', count: 34 },
  ];

  const priceRangesList = [
    { label: 'Under ₹10,000', count: 45, min: 0, max: 10000 },
    { label: '₹10,000 - ₹20,000', count: 68, min: 10000, max: 20000 },
    { label: '₹20,000 - ₹30,000', count: 74, min: 20000, max: 30000 },
    { label: '₹30,000 - ₹40,000', count: 42, min: 30000, max: 40000 },
    { label: 'Above ₹40,000', count: 26, min: 40000, max: Infinity },
  ];

  const brandsList = [
    { name: 'Apple', count: 56 },
    { name: 'Samsung', count: 72 },
    { name: 'OnePlus', count: 38 },
    { name: 'Xiaomi', count: 28 },
    { name: 'Realme', count: 25 },
    { name: 'Vivo', count: 22 },
    { name: 'Oppo', count: 20 },
    { name: 'Google', count: 18 },
    { name: 'Motorola', count: 15 },
    { name: 'Nothing', count: 10 },
  ];

  const storageList = [
    { label: '64 GB', count: 38 },
    { label: '128 GB', count: 122 },
    { label: '256 GB', count: 96 },
    { label: '512 GB', count: 28 },
  ];

  const ramList = [
    { label: '4 GB', count: 8 },
    { label: '6 GB', count: 42 },
    { label: '8 GB', count: 85 },
    { label: '12 GB', count: 34 },
  ];

  // Toggle helpers
  const handleToggleCondition = (cond) => {
    setSelectedConditions((prev) =>
      prev.includes(cond) ? prev.filter((c) => c !== cond) : [...prev, cond]
    );
    setCurrentPage(1);
  };

  const handleTogglePrice = (label) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(label) ? prev.filter((p) => p !== label) : [...prev, label]
    );
    setCurrentPage(1);
  };

  const handleToggleStorage = (storage) => {
    setSelectedStorage((prev) =>
      prev.includes(storage) ? prev.filter((s) => s !== storage) : [...prev, storage]
    );
    setCurrentPage(1);
  };

  const handleToggleRam = (ram) => {
    setSelectedRam((prev) =>
      prev.includes(ram) ? prev.filter((r) => r !== ram) : [...prev, ram]
    );
    setCurrentPage(1);
  };

  const handleClearAll = () => {
    setSelectedConditions([]);
    setSelectedBrand('All Brands');
    setBrandSearch('');
    setSelectedPriceRanges([]);
    setSelectedStorage([]);
    setSelectedRam([]);
    setCurrentPage(1);
    showToast?.('All filters reset');
  };

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return ALL_USED_PHONES_CATALOG.filter((phone) => {
      // Brand filter
      if (selectedBrand !== 'All Brands' && phone.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
        return false;
      }

      // Condition filter
      if (selectedConditions.length > 0 && !selectedConditions.includes(phone.condition)) {
        return false;
      }

      // Storage filter
      if (selectedStorage.length > 0 && !selectedStorage.includes(phone.storage)) {
        return false;
      }

      // RAM filter
      if (selectedRam.length > 0 && !selectedRam.includes(phone.ram)) {
        return false;
      }

      // Price filter
      if (selectedPriceRanges.length > 0) {
        const matchesPrice = selectedPriceRanges.some((rangeLabel) => {
          const rangeObj = priceRangesList.find((r) => r.label === rangeLabel);
          if (!rangeObj) return false;
          return phone.price >= rangeObj.min && phone.price <= rangeObj.max;
        });
        if (!matchesPrice) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'Price: Low to High') return a.price - b.price;
      if (sortBy === 'Price: High to Low') return b.price - a.price;
      if (sortBy === 'Newest First') return b.id.localeCompare(a.id);
      return 0; // Popularity default
    });
  }, [selectedBrand, selectedConditions, selectedStorage, selectedRam, selectedPriceRanges, sortBy]);

  // Fallback nicely so user always sees data
  const displayItems = filteredProducts.length > 0 ? filteredProducts : ALL_USED_PHONES_CATALOG;
  const itemsPerPage = 12;
  const totalPages = Math.ceil(displayItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = displayItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-gray-800 pb-16">
      
      {/* Container matching full width grid */}
      <div className="max-w-[1536px] mx-auto px-3 sm:px-4 lg:px-6 pt-3 sm:pt-4">

        {/* ===================================================================
            EXACT 2-COLUMN LAYOUT: 
            Left = Filters Sidebar starting at top baseline
            Right = Breadcrumbs + Title & Banner + 5 Trust Badges + Brand Pills + Cards Grid
           =================================================================== */}
        <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-5 lg:gap-6">
          
          {/* -----------------------------------------------------------------
              LEFT COLUMN: Filters Sidebar
             ----------------------------------------------------------------- */}
          <aside className="hidden lg:block w-56 xl:w-60 flex-shrink-0 bg-white rounded-xl border border-gray-200/80 p-4 shadow-2xs sticky top-28 self-start">
            
            {/* Header: Filters + Clear All */}
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
              <h3 className="font-extrabold text-sm text-gray-900 tracking-tight">Filters</h3>
              <button
                onClick={handleClearAll}
                className="text-xs font-semibold text-[#00704A] hover:underline cursor-pointer"
              >
                Clear All
              </button>
            </div>

            {/* 1. Condition Accordion */}
            <div className="border-b border-gray-100 py-3">
              <button
                onClick={() => setIsConditionOpen(!isConditionOpen)}
                className="w-full flex items-center justify-between text-xs font-bold text-gray-800 hover:text-gray-950 cursor-pointer"
              >
                <span>Condition</span>
                <span className="text-gray-400 font-bold text-xs">{isConditionOpen ? '—' : '+'}</span>
              </button>

              {isConditionOpen && (
                <div className="mt-2.5 space-y-2">
                  {conditionList.map((item) => {
                    const isChecked = selectedConditions.includes(item.label);
                    return (
                      <label
                        key={item.label}
                        onClick={() => handleToggleCondition(item.label)}
                        className="flex items-center justify-between text-xs text-gray-600 hover:text-gray-900 cursor-pointer select-none group"
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            className="w-3.5 h-3.5 rounded border-gray-300 text-[#00704A] focus:ring-[#00704A] cursor-pointer accent-[#00704A]"
                          />
                          <span className={`group-hover:text-gray-900 ${isChecked ? 'font-semibold text-gray-900' : ''}`}>
                            {item.label}
                          </span>
                        </div>
                        <span className="text-[11px] text-gray-400">({item.count})</span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 2. Price Range Accordion */}
            <div className="border-b border-gray-100 py-3">
              <button
                onClick={() => setIsPriceOpen(!isPriceOpen)}
                className="w-full flex items-center justify-between text-xs font-bold text-gray-800 hover:text-gray-950 cursor-pointer"
              >
                <span>Price Range</span>
                <span className="text-gray-400 font-bold text-xs">{isPriceOpen ? '—' : '+'}</span>
              </button>

              {isPriceOpen && (
                <div className="mt-2.5 space-y-2">
                  {priceRangesList.map((item) => {
                    const isChecked = selectedPriceRanges.includes(item.label);
                    return (
                      <label
                        key={item.label}
                        onClick={() => handleTogglePrice(item.label)}
                        className="flex items-center justify-between text-xs text-gray-600 hover:text-gray-900 cursor-pointer select-none group"
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            className="w-3.5 h-3.5 rounded border-gray-300 text-[#00704A] focus:ring-[#00704A] cursor-pointer accent-[#00704A]"
                          />
                          <span className={`group-hover:text-gray-900 ${isChecked ? 'font-semibold text-gray-900' : ''}`}>
                            {item.label}
                          </span>
                        </div>
                        <span className="text-[11px] text-gray-400">({item.count})</span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 3. Brand Accordion */}
            <div className="border-b border-gray-100 py-3">
              <button
                onClick={() => setIsBrandOpen(!isBrandOpen)}
                className="w-full flex items-center justify-between text-xs font-bold text-gray-800 hover:text-gray-950 cursor-pointer"
              >
                <span>Brand</span>
                <span className="text-gray-400 font-bold text-xs">{isBrandOpen ? '—' : '+'}</span>
              </button>

              {isBrandOpen && (
                <div className="mt-2.5">
                  {/* Search brand input */}
                  <div className="relative mb-2">
                    <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search brand..."
                      value={brandSearch}
                      onChange={(e) => setBrandSearch(e.target.value)}
                      className="w-full pl-8 pr-2.5 py-1 text-xs bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#00704A] focus:bg-white"
                    />
                  </div>

                  <div className="max-h-48 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                    {brandsList
                      .filter((b) => b.name.toLowerCase().includes(brandSearch.toLowerCase()))
                      .map((brand) => {
                        const isChecked = selectedBrand === brand.name;
                        return (
                          <label
                            key={brand.name}
                            onClick={() => {
                              setSelectedBrand(isChecked ? 'All Brands' : brand.name);
                              setCurrentPage(1);
                            }}
                            className="flex items-center justify-between text-xs text-gray-600 hover:text-gray-900 cursor-pointer select-none group"
                          >
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => {}}
                                className="w-3.5 h-3.5 rounded border-gray-300 text-[#00704A] focus:ring-[#00704A] cursor-pointer accent-[#00704A]"
                              />
                              <span className={`group-hover:text-gray-900 ${isChecked ? 'font-semibold text-gray-900' : ''}`}>
                                {brand.name}
                              </span>
                            </div>
                            <span className="text-[11px] text-gray-400">({brand.count})</span>
                          </label>
                        );
                      })}
                  </div>

                  <button
                    onClick={() => showToast?.('All available brands shown')}
                    className="text-[11px] font-semibold text-[#00704A] hover:underline mt-2 flex items-center gap-0.5 cursor-pointer"
                  >
                    <span>View More</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>

            {/* 4. Storage Accordion */}
            <div className="border-b border-gray-100 py-3">
              <button
                onClick={() => setIsStorageOpen(!isStorageOpen)}
                className="w-full flex items-center justify-between text-xs font-bold text-gray-800 hover:text-gray-950 cursor-pointer"
              >
                <span>Storage</span>
                <span className="text-gray-400 font-bold text-xs">{isStorageOpen ? '—' : '+'}</span>
              </button>

              {isStorageOpen && (
                <div className="mt-2.5 space-y-2">
                  {storageList.map((item) => {
                    const isChecked = selectedStorage.includes(item.label);
                    return (
                      <label
                        key={item.label}
                        onClick={() => handleToggleStorage(item.label)}
                        className="flex items-center justify-between text-xs text-gray-600 hover:text-gray-900 cursor-pointer select-none group"
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            className="w-3.5 h-3.5 rounded border-gray-300 text-[#00704A] focus:ring-[#00704A] cursor-pointer accent-[#00704A]"
                          />
                          <span className={`group-hover:text-gray-900 ${isChecked ? 'font-semibold text-gray-900' : ''}`}>
                            {item.label}
                          </span>
                        </div>
                        <span className="text-[11px] text-gray-400">({item.count})</span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 5. RAM Accordion */}
            <div className="py-3">
              <button
                onClick={() => setIsRamOpen(!isRamOpen)}
                className="w-full flex items-center justify-between text-xs font-bold text-gray-800 hover:text-gray-950 cursor-pointer"
              >
                <span>RAM</span>
                <span className="text-gray-400 font-bold text-xs">{isRamOpen ? '—' : '+'}</span>
              </button>

              {isRamOpen && (
                <div className="mt-2.5 space-y-2">
                  {ramList.map((item) => {
                    const isChecked = selectedRam.includes(item.label);
                    return (
                      <label
                        key={item.label}
                        onClick={() => handleToggleRam(item.label)}
                        className="flex items-center justify-between text-xs text-gray-600 hover:text-gray-900 cursor-pointer select-none group"
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            className="w-3.5 h-3.5 rounded border-gray-300 text-[#00704A] focus:ring-[#00704A] cursor-pointer accent-[#00704A]"
                          />
                          <span className={`group-hover:text-gray-900 ${isChecked ? 'font-semibold text-gray-900' : ''}`}>
                            {item.label}
                          </span>
                        </div>
                        <span className="text-[11px] text-gray-400">({item.count})</span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>

          </aside>

          {/* -----------------------------------------------------------------
              RIGHT MAIN SECTION: BREADCRUMBS + HEADER & BANNER + 5 BADGES + CONTROLS + PRODUCT GRID + PAGINATION
             ----------------------------------------------------------------- */}
          <div className="flex-1 min-w-0">
            
            {/* 1. Breadcrumb Navigation */}
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2.5">
              <button
                onClick={onGoHome}
                className="hover:text-[#00704A] hover:underline cursor-pointer transition-colors"
              >
                Home
              </button>
              <span className="text-gray-400">&gt;</span>
              <span className="text-gray-800 font-medium">Used Phones</span>
            </div>

            {/* 2. Top Header: Title (left) + Right Side Banner */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4 mb-3.5">
              {/* Left Title Area */}
              <div className="flex-shrink-0">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  Used Phones
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 font-normal">
                  Quality checked second-hand phones at the best prices.
                </p>
              </div>

              {/* Right Banner matching user's design */}
              <div className="relative flex-1 max-w-full lg:max-w-[560px] xl:max-w-[620px] rounded-xl overflow-hidden shadow-2xs border border-purple-100 group">
                <img
                  src="/assets/used_phones_banner.png"
                  alt="Quality Used Phones - Same Phones. Brighter Futures."
                  className="w-full h-auto object-cover block"
                />
              </div>
            </div>

            {/* 3. 5 TRUST / VALUE PROPOSITION BADGES */}
            <div className="bg-white rounded-xl border border-gray-200/80 p-3 sm:p-3.5 mb-4 shadow-2xs">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                
                {/* 1. Quality Checked */}
                <div className="flex items-center gap-2.5 pt-2 sm:pt-0 sm:px-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 text-[#00704A]">
                    <ShieldCheck className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                      Quality Checked
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      Tested by experts
                    </p>
                  </div>
                </div>

                {/* 2. 7-Day Returns */}
                <div className="flex items-center gap-2.5 pt-2 sm:pt-0 sm:px-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 text-[#00704A]">
                    <RotateCcw className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                      7-Day Returns
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      Hassle-free returns
                    </p>
                  </div>
                </div>

                {/* 3. Pan India Delivery */}
                <div className="flex items-center gap-2.5 pt-2 sm:pt-0 sm:px-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 text-[#00704A]">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                      Pan India Delivery
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      Fast & reliable shipping
                    </p>
                  </div>
                </div>

                {/* 4. Best Value */}
                <div className="flex items-center gap-2.5 pt-2 sm:pt-0 sm:px-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 text-[#00704A]">
                    <Award className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                      Best Value
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      Premium phones, lower prices
                    </p>
                  </div>
                </div>

                {/* 5. Sustainable Choice */}
                <div className="flex items-center gap-2.5 pt-2 sm:pt-0 sm:px-2 col-span-2 sm:col-span-1">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 text-[#00704A]">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                      Sustainable Choice
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      Good for you, good for the planet
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* 4. Sub-header Controls Bar */}
            <div className="bg-white rounded-xl border border-gray-200/80 p-2.5 sm:p-3 mb-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 shadow-2xs">
              
              {/* Left: Count + Brand Quick-Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 custom-scrollbar flex-1 min-w-0">
                
                {/* Count */}
                <div className="text-xs sm:text-sm font-extrabold text-gray-900 whitespace-nowrap mr-2 flex-shrink-0">
                  245 Used Phones
                </div>

                {/* Mobile Filter Button */}
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-1.5 flex-shrink-0"
                >
                  <SlidersHorizontal className="w-3 h-3" />
                  <span>Filters</span>
                </button>

                {/* Brand Pills */}
                {/* 1. All Brands */}
                <button
                  onClick={() => {
                    setSelectedBrand('All Brands');
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all whitespace-nowrap flex-shrink-0 cursor-pointer ${
                    selectedBrand === 'All Brands'
                      ? 'bg-[#00704A] text-white shadow-2xs'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  All Brands
                </button>

                {/* 2. Apple */}
                <button
                  onClick={() => {
                    setSelectedBrand('Apple');
                    setCurrentPage(1);
                  }}
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all flex items-center justify-center flex-shrink-0 cursor-pointer ${
                    selectedBrand === 'Apple'
                      ? 'bg-[#00704A] text-white shadow-2xs'
                      : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-200'
                  }`}
                  title="Apple"
                >
                  <BrandIcon name="apple" className="w-3.5 h-3.5" />
                </button>

                {/* 3. Samsung */}
                <button
                  onClick={() => {
                    setSelectedBrand('Samsung');
                    setCurrentPage(1);
                  }}
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all flex items-center justify-center flex-shrink-0 cursor-pointer ${
                    selectedBrand === 'Samsung'
                      ? 'bg-[#00704A] text-white shadow-2xs'
                      : 'bg-white hover:bg-gray-100 border border-gray-200'
                  }`}
                  title="Samsung"
                >
                  <BrandIcon name="samsung" className="w-4 h-4" />
                </button>

                {/* 4. OnePlus */}
                <button
                  onClick={() => {
                    setSelectedBrand('OnePlus');
                    setCurrentPage(1);
                  }}
                  className={`px-2 py-0.5 rounded-full text-xs font-semibold transition-all flex items-center justify-center flex-shrink-0 cursor-pointer ${
                    selectedBrand === 'OnePlus'
                      ? 'bg-[#00704A] text-white shadow-2xs'
                      : 'bg-white hover:bg-gray-100 border border-gray-200'
                  }`}
                  title="OnePlus"
                >
                  <BrandIcon name="oneplus" className="w-4 h-4" />
                </button>

                {/* 5. Xiaomi */}
                <button
                  onClick={() => {
                    setSelectedBrand('Xiaomi');
                    setCurrentPage(1);
                  }}
                  className={`px-2 py-0.5 rounded-full text-xs font-semibold transition-all flex items-center justify-center flex-shrink-0 cursor-pointer ${
                    selectedBrand === 'Xiaomi'
                      ? 'bg-[#00704A] text-white shadow-2xs'
                      : 'bg-white hover:bg-gray-100 border border-gray-200'
                  }`}
                  title="Xiaomi"
                >
                  <BrandIcon name="xiaomi" className="w-4 h-4" />
                </button>

                {/* 6. Realme */}
                <button
                  onClick={() => {
                    setSelectedBrand('Realme');
                    setCurrentPage(1);
                  }}
                  className={`px-2 py-0.5 rounded-full text-xs font-semibold transition-all flex items-center justify-center flex-shrink-0 cursor-pointer ${
                    selectedBrand === 'Realme'
                      ? 'bg-[#00704A] text-white shadow-2xs'
                      : 'bg-white hover:bg-gray-100 border border-gray-200'
                  }`}
                  title="Realme"
                >
                  <BrandIcon name="realme" className="w-4 h-4" />
                </button>

                {/* 7. Vivo */}
                <button
                  onClick={() => {
                    setSelectedBrand('Vivo');
                    setCurrentPage(1);
                  }}
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all flex items-center justify-center flex-shrink-0 cursor-pointer ${
                    selectedBrand === 'Vivo'
                      ? 'bg-[#00704A] text-white shadow-2xs'
                      : 'bg-white hover:bg-gray-100 border border-gray-200'
                  }`}
                  title="Vivo"
                >
                  <BrandIcon name="vivo" className="w-4 h-4" />
                </button>

                {/* 8. Oppo */}
                <button
                  onClick={() => {
                    setSelectedBrand('Oppo');
                    setCurrentPage(1);
                  }}
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all flex items-center justify-center flex-shrink-0 cursor-pointer ${
                    selectedBrand === 'Oppo'
                      ? 'bg-[#00704A] text-white shadow-2xs'
                      : 'bg-white hover:bg-gray-100 border border-gray-200'
                  }`}
                  title="Oppo"
                >
                  <BrandIcon name="oppo" className="w-4 h-4" />
                </button>

                {/* 9. Google */}
                <button
                  onClick={() => {
                    setSelectedBrand('Google');
                    setCurrentPage(1);
                  }}
                  className={`px-2 py-1 rounded-full text-xs font-semibold transition-all flex items-center justify-center flex-shrink-0 cursor-pointer ${
                    selectedBrand === 'Google'
                      ? 'bg-[#00704A] text-white shadow-2xs'
                      : 'bg-white hover:bg-gray-100 border border-gray-200'
                  }`}
                  title="Google"
                >
                  <BrandIcon name="google" className="w-4 h-4" />
                </button>

                {/* 10. Motorola */}
                <button
                  onClick={() => {
                    setSelectedBrand('Motorola');
                    setCurrentPage(1);
                  }}
                  className={`px-2 py-1 rounded-full text-xs font-semibold transition-all flex items-center justify-center flex-shrink-0 cursor-pointer ${
                    selectedBrand === 'Motorola'
                      ? 'bg-[#00704A] text-white shadow-2xs'
                      : 'bg-white hover:bg-gray-100 border border-gray-200'
                  }`}
                  title="Motorola"
                >
                  <BrandIcon name="motorola" className="w-4 h-4" />
                </button>

                {/* 11. Nothing */}
                <button
                  onClick={() => {
                    setSelectedBrand('Nothing');
                    setCurrentPage(1);
                  }}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all flex items-center justify-center flex-shrink-0 cursor-pointer ${
                    selectedBrand === 'Nothing'
                      ? 'bg-[#00704A] text-white shadow-2xs'
                      : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-200'
                  }`}
                  title="Nothing"
                >
                  <span className="font-mono text-[11px]">Nothing</span>
                </button>

                {/* 12. Nokia */}
                <button
                  onClick={() => {
                    setSelectedBrand('Nokia');
                    setCurrentPage(1);
                  }}
                  className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all flex items-center justify-center flex-shrink-0 cursor-pointer ${
                    selectedBrand === 'Nokia'
                      ? 'bg-[#00704A] text-white shadow-2xs'
                      : 'bg-white hover:bg-gray-100 border border-gray-200'
                  }`}
                  title="Nokia"
                >
                  <span className={`font-black tracking-wider text-[10px] ${selectedBrand === 'Nokia' ? 'text-white' : 'text-[#124191]'}`}>
                    NOKIA
                  </span>
                </button>

                {/* 13. More */}
                <button
                  onClick={() => showToast?.('Showing all brand options')}
                  className="px-2.5 py-1 rounded-full text-xs font-medium text-gray-600 hover:text-gray-900 bg-white border border-gray-200 hover:border-gray-400 flex items-center gap-0.5 whitespace-nowrap flex-shrink-0 cursor-pointer"
                >
                  <span>More</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>

              {/* Right: Sort Dropdown + Grid/List Toggle matching user screenshot */}
              <div className="flex items-center gap-2 self-end md:self-center flex-shrink-0 text-xs text-gray-600">
                <span className="hidden sm:inline text-gray-500">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white hover:bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-800 rounded-lg px-2.5 py-1.5 focus:border-[#00704A] cursor-pointer"
                >
                  <option value="Popularity">Popularity</option>
                  <option value="Price: Low to High">Price: Low to High</option>
                  <option value="Price: High to Low">Price: High to Low</option>
                  <option value="Newest First">Newest First</option>
                </select>

                {/* Layout Toggle Widget */}
                <div className="flex items-center border border-gray-200 rounded-lg p-0.5 bg-gray-50 shadow-2xs">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1 rounded transition-colors cursor-pointer ${
                      viewMode === 'grid'
                        ? 'bg-white text-[#00704A] shadow-xs'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                    title="Grid View"
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1 rounded transition-colors cursor-pointer ${
                      viewMode === 'list'
                        ? 'bg-white text-[#00704A] shadow-xs'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                    title="List View"
                  >
                    <List className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

            {/* ===============================================================
                PRODUCT GRID: 6 columns on wide screens, 2 rows of 6 = 12 items
               =============================================================== */}
            {paginatedProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5 sm:gap-3 lg:gap-3.5">
                {paginatedProducts.map((phone) => {
                  const isWishlisted = wishlistIds.includes(phone.id);
                  return (
                    <div
                      key={phone.id}
                      className="bg-white rounded-xl border border-gray-200/80 p-2.5 sm:p-3 hover:shadow-md hover:border-purple-300 transition-all duration-200 flex flex-col justify-between group relative"
                    >
                      {/* Top Bar: Purple "Certified" Badge (left) + Wishlist Heart (right) */}
                      <div className="flex items-center justify-between min-h-[22px] mb-1">
                        <span className="bg-[#7B2CBF] text-white text-[9.5px] sm:text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs tracking-wide">
                          {phone.tag || 'Certified'}
                        </span>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleWishlist(phone.id);
                          }}
                          className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
                          aria-label="Wishlist"
                        >
                          <Heart
                            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform active:scale-125 ${
                              isWishlisted
                                ? 'fill-red-500 text-red-500'
                                : 'text-gray-400 group-hover:text-gray-600'
                            }`}
                          />
                        </button>
                      </div>

                      {/* Phone Image / Mockup */}
                      <div
                        onClick={() => onQuickView?.(phone)}
                        className="w-full h-32 sm:h-36 flex items-center justify-center my-1 cursor-pointer overflow-hidden group-hover:scale-105 transition-transform duration-300"
                      >
                        <PhoneMockup type={phone.graphicType} className="h-28 sm:h-32 w-auto object-contain" />
                      </div>

                      {/* Phone Info */}
                      <div className="mt-1">
                        {/* Title */}
                        <h3
                          onClick={() => onQuickView?.(phone)}
                          className="font-bold text-xs sm:text-[13px] text-gray-900 line-clamp-1 hover:text-[#00704A] cursor-pointer transition-colors"
                        >
                          {phone.name}
                        </h3>

                        {/* Specs */}
                        <p className="text-[11px] text-gray-500 mt-0.5 font-normal line-clamp-1">
                          {phone.specs}
                        </p>

                        {/* Price Row */}
                        <div className="flex items-baseline gap-1.5 mt-1.5">
                          <span className="font-extrabold text-sm sm:text-base text-gray-950">
                            ₹{phone.price.toLocaleString('en-IN')}
                          </span>
                          {phone.originalPrice && (
                            <span className="text-[11px] text-gray-400 line-through font-normal">
                              ₹{phone.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>

                        {/* City Location */}
                        <div className="flex items-center gap-1 text-[11px] text-gray-500 mt-1">
                          <MapPin className="w-3 h-3 text-[#00704A] flex-shrink-0" />
                          <span className="truncate">{phone.city}</span>
                        </div>
                      </div>

                      {/* Bottom Button: Green outline "Add to Cart" */}
                      <button
                        onClick={() => onAddToCart(phone)}
                        className="w-full mt-2.5 py-1.5 px-2 rounded-lg border border-[#00704A] text-[#00704A] hover:bg-[#00704A] hover:text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs group-hover:border-[#00704A]"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </button>

                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                <p className="text-gray-500 text-sm">No used phones match the selected criteria.</p>
                <button
                  onClick={handleClearAll}
                  className="mt-3 px-4 py-2 rounded-lg bg-[#00704A] text-white text-xs font-semibold hover:bg-[#005a3b]"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* ===============================================================
                PAGINATION BAR
               =============================================================== */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-200/80">
              {/* Left: Count */}
              <div className="text-xs text-gray-500">
                Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, displayItems.length)} of {displayItems.length} products
              </div>

              {/* Right: Page Buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-7 h-7 rounded border border-gray-200 hover:bg-gray-50 flex items-center justify-center text-xs text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  ←
                </button>

                {[1, 2, 3, 4, 5].map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => {
                      setCurrentPage(pageNum);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-7 h-7 rounded text-xs font-semibold transition-colors cursor-pointer ${
                      currentPage === pageNum
                        ? 'bg-[#00704A] text-white shadow-2xs'
                        : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}

                <span className="px-1 text-gray-400 text-xs">...</span>

                <button
                  onClick={() => {
                    setCurrentPage(21);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-7 h-7 rounded text-xs font-semibold transition-colors cursor-pointer ${
                    currentPage === 21
                      ? 'bg-[#00704A] text-white shadow-2xs'
                      : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  21
                </button>

                <button
                  onClick={() => setCurrentPage((p) => Math.min(21, p + 1))}
                  disabled={currentPage === 21}
                  className="w-7 h-7 rounded border border-gray-200 hover:bg-gray-50 flex items-center justify-center text-xs text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  →
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ===============================================================
          MOBILE FILTER DRAWER
         =============================================================== */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            onClick={() => setIsMobileFilterOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs"
          />
          <div className="relative w-4/5 max-w-sm bg-white h-full ml-auto shadow-2xl p-5 overflow-y-auto flex flex-col justify-between z-10">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="font-extrabold text-base text-gray-900">Filters</h3>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100 text-gray-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Condition */}
              <div className="py-3 border-b border-gray-100">
                <span className="text-xs font-bold text-gray-800 block mb-2">Condition</span>
                <div className="space-y-2">
                  {conditionList.map((item) => (
                    <label
                      key={item.label}
                      onClick={() => handleToggleCondition(item.label)}
                      className="flex items-center justify-between text-xs text-gray-700"
                    >
                      <span>{item.label}</span>
                      <input
                        type="checkbox"
                        checked={selectedConditions.includes(item.label)}
                        onChange={() => {}}
                        className="accent-[#00704A]"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Mobile Price */}
              <div className="py-3 border-b border-gray-100">
                <span className="text-xs font-bold text-gray-800 block mb-2">Price</span>
                <div className="space-y-2">
                  {priceRangesList.map((item) => (
                    <label
                      key={item.label}
                      onClick={() => handleTogglePrice(item.label)}
                      className="flex items-center justify-between text-xs text-gray-700"
                    >
                      <span>{item.label}</span>
                      <input
                        type="checkbox"
                        checked={selectedPriceRanges.includes(item.label)}
                        onChange={() => {}}
                        className="accent-[#00704A]"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Mobile Storage */}
              <div className="py-3 border-b border-gray-100">
                <span className="text-xs font-bold text-gray-800 block mb-2">Storage</span>
                <div className="space-y-2">
                  {storageList.map((item) => (
                    <label
                      key={item.label}
                      onClick={() => handleToggleStorage(item.label)}
                      className="flex items-center justify-between text-xs text-gray-700"
                    >
                      <span>{item.label}</span>
                      <input
                        type="checkbox"
                        checked={selectedStorage.includes(item.label)}
                        onChange={() => {}}
                        className="accent-[#00704A]"
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex gap-2">
              <button
                onClick={handleClearAll}
                className="flex-1 py-2 text-xs font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Reset
              </button>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="flex-1 py-2 text-xs font-semibold text-white bg-[#00704A] rounded-lg hover:bg-[#005a3b]"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
