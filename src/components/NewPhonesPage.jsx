import React, { useState, useMemo, useEffect } from 'react';
import {
  Heart,
  ShoppingCart,
  Search,
  ChevronDown,
  ChevronRight,
  SlidersHorizontal,
  X,
} from 'lucide-react';
import { PhoneMockup } from './PhoneGraphics';

// 12 Products matching page 1 of user's reference screenshot + more for page 2
const ALL_NEW_PHONES_CATALOG = [
  {
    id: 'np-1',
    name: 'iPhone 15',
    specs: '128 GB · Brand New',
    brand: 'Apple',
    category: '5G Phones',
    price: 54999,
    originalPrice: 69999,
    ram: '6 GB',
    storage: '128 GB',
    image: '/assets/phones/iphone13_pink.jpg',
    imageType: 'iphone13-pink',
  },
  {
    id: 'np-2',
    name: 'Samsung Galaxy S24',
    specs: '256 GB · Brand New',
    brand: 'Samsung',
    category: '5G Phones',
    price: 69999,
    originalPrice: 79999,
    ram: '8 GB',
    storage: '256 GB',
    image: '/assets/phones/galaxy_s22.jpg',
    imageType: 'galaxy-s22',
  },
  {
    id: 'np-3',
    name: 'OnePlus 12R',
    specs: '128 GB · Brand New',
    brand: 'OnePlus',
    category: 'Gaming Phones',
    price: 39999,
    originalPrice: 45999,
    ram: '8 GB',
    storage: '128 GB',
    image: '/assets/phones/oneplus_11r.jpg',
    imageType: 'oneplus-11r',
  },
  {
    id: 'np-4',
    name: 'Xiaomi 14',
    specs: '256 GB · Brand New',
    brand: 'Xiaomi',
    category: 'Camera Phones',
    price: 59999,
    originalPrice: 69999,
    ram: '12 GB',
    storage: '256 GB',
    image: '/assets/phones/xiaomi_13pro.jpg',
    imageType: 'xiaomi-13pro',
  },
  {
    id: 'np-5',
    name: 'Realme GT 6',
    specs: '256 GB · Brand New',
    brand: 'Realme',
    category: 'Gaming Phones',
    price: 40999,
    originalPrice: 46999,
    ram: '12 GB',
    storage: '256 GB',
    image: '/assets/phones/realme_gt2.jpg',
    imageType: 'realme-gt2',
  },
  {
    id: 'np-6',
    name: 'Vivo V30',
    specs: '256 GB · Brand New',
    brand: 'Vivo',
    category: 'Camera Phones',
    price: 34999,
    originalPrice: 39999,
    ram: '8 GB',
    storage: '256 GB',
    image: '/assets/phones/vivo_v27.jpg',
    imageType: 'vivo-v27',
  },
  {
    id: 'np-7',
    name: 'Oppo Reno 12',
    specs: '256 GB · Brand New',
    brand: 'Oppo',
    category: '5G Phones',
    price: 32999,
    originalPrice: 37999,
    ram: '8 GB',
    storage: '256 GB',
    image: '/assets/phones/vivo_t2pro.jpg',
    imageType: 'vivo-t2pro',
  },
  {
    id: 'np-8',
    name: 'Google Pixel 8',
    specs: '128 GB · Brand New',
    brand: 'Google',
    category: 'Camera Phones',
    price: 49999,
    originalPrice: 59999,
    ram: '8 GB',
    storage: '128 GB',
    image: '/assets/phones/pixel_7.jpg',
    imageType: 'pixel-7',
  },
  {
    id: 'np-9',
    name: 'Nothing Phone (2)',
    specs: '256 GB · Brand New',
    brand: 'Nothing',
    category: '5G Phones',
    price: 44999,
    originalPrice: 49999,
    ram: '12 GB',
    storage: '256 GB',
    image: '/assets/phones/nothing_1.jpg',
    imageType: 'nothing-1',
  },
  {
    id: 'np-10',
    name: 'Motorola Edge 50 Pro',
    specs: '256 GB · Brand New',
    brand: 'Motorola',
    category: 'Camera Phones',
    price: 31999,
    originalPrice: 36999,
    ram: '8 GB',
    storage: '256 GB',
    image: '/assets/phones/moto_edge30.jpg',
    imageType: 'moto-edge30',
  },
  {
    id: 'np-11',
    name: 'Samsung Galaxy A55',
    specs: '256 GB · Brand New',
    brand: 'Samsung',
    category: '5G Phones',
    price: 28999,
    originalPrice: 32999,
    ram: '8 GB',
    storage: '256 GB',
    image: '/assets/phones/galaxy_a54.jpg',
    imageType: 'galaxy-a54',
  },
  {
    id: 'np-12',
    name: 'iPhone 14',
    specs: '128 GB · Brand New',
    brand: 'Apple',
    category: 'Compact Phones',
    price: 49999,
    originalPrice: 59999,
    ram: '6 GB',
    storage: '128 GB',
    image: '/assets/phones/iphone14_purple.jpg',
    imageType: 'iphone14-purple',
  },
  // Additional items for pagination
  {
    id: 'np-13',
    name: 'iPhone 15 Plus',
    specs: '128 GB · Brand New',
    brand: 'Apple',
    category: '5G Phones',
    price: 64999,
    originalPrice: 79999,
    ram: '6 GB',
    storage: '128 GB',
    image: '/assets/phones/iphone13_pink.jpg',
    imageType: 'iphone13-pink',
  },
  {
    id: 'np-14',
    name: 'Samsung Galaxy S24 Ultra',
    specs: '512 GB · Brand New',
    brand: 'Samsung',
    category: 'Camera Phones',
    price: 119999,
    originalPrice: 134999,
    ram: '12 GB',
    storage: '512 GB',
    image: '/assets/phones/galaxy_s23.jpg',
    imageType: 'galaxy-s23',
  },
  {
    id: 'np-15',
    name: 'OnePlus 12',
    specs: '256 GB · Brand New',
    brand: 'OnePlus',
    category: '5G Phones',
    price: 64999,
    originalPrice: 69999,
    ram: '12 GB',
    storage: '256 GB',
    image: '/assets/phones/oneplus_11r.jpg',
    imageType: 'oneplus-11r',
  },
  {
    id: 'np-16',
    name: 'Google Pixel 8 Pro',
    specs: '128 GB · Brand New',
    brand: 'Google',
    category: 'Camera Phones',
    price: 79999,
    originalPrice: 106999,
    ram: '12 GB',
    storage: '128 GB',
    image: '/assets/phones/pixel_7.jpg',
    imageType: 'pixel-7',
  },
];

export default function NewPhonesPage({
  onBackToHome,
  wishlistIds = [],
  onToggleWishlist,
  onAddToCart,
  onQuickView,
  showToast,
}) {
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState('All Smartphones');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [brandSearch, setBrandSearch] = useState('');
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [sortBy, setSortBy] = useState('Popularity');
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Always ensure this screen opens directly from the top with smooth presentation
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 15);
    return () => clearTimeout(timer);
  }, []);

  // When switching page number, smoothly scroll back to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Accordion open states
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isBrandOpen, setIsBrandOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isRamOpen, setIsRamOpen] = useState(false);
  const [isStorageOpen, setIsStorageOpen] = useState(false);

  // Category counts
  const categoriesList = [
    { name: 'All Smartphones', count: 245 },
    { name: '5G Phones', count: 189 },
    { name: 'Gaming Phones', count: 28 },
    { name: 'Camera Phones', count: 42 },
    { name: 'Compact Phones', count: 16 },
  ];

  // Brand items for sidebar
  const brandsList = [
    { name: 'Apple', count: 42 },
    { name: 'Samsung', count: 58 },
    { name: 'OnePlus', count: 24 },
    { name: 'Xiaomi', count: 36 },
    { name: 'Realme', count: 28 },
    { name: 'Vivo', count: 22 },
    { name: 'Oppo', count: 20 },
    { name: 'Google', count: 12 },
    { name: 'Motorola', count: 10 },
    { name: 'Nothing', count: 8 },
    { name: 'Nokia', count: 6 },
    { name: 'Infinix', count: 7 },
    { name: 'Tecno', count: 4 },
  ];

  // Price ranges
  const priceRanges = [
    { label: 'Under ₹10,000', min: 0, max: 10000, count: 12 },
    { label: '₹10,000 - ₹20,000', min: 10000, max: 20000, count: 45 },
    { label: '₹20,000 - ₹30,000', min: 20000, max: 30000, count: 62 },
    { label: '₹30,000 - ₹50,000', min: 30000, max: 50000, count: 78 },
    { label: 'Above ₹50,000', min: 50000, max: Infinity, count: 48 },
  ];

  // Clear all filters
  const handleClearAll = () => {
    setSelectedCategory('All Smartphones');
    setSelectedBrand('All Brands');
    setSelectedPriceRanges([]);
    setBrandSearch('');
    showToast?.('Cleared all filters');
  };

  // Toggle price range
  const handleTogglePrice = (label) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(label) ? prev.filter((p) => p !== label) : [...prev, label]
    );
  };

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return ALL_NEW_PHONES_CATALOG.filter((p) => {
      if (selectedCategory !== 'All Smartphones' && p.category !== selectedCategory) {
        return false;
      }
      if (selectedBrand !== 'All Brands' && p.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
        return false;
      }
      if (selectedPriceRanges.length > 0) {
        const matchesAnyPrice = selectedPriceRanges.some((rangeLabel) => {
          const rangeObj = priceRanges.find((r) => r.label === rangeLabel);
          if (!rangeObj) return true;
          return p.price >= rangeObj.min && p.price < rangeObj.max;
        });
        if (!matchesAnyPrice) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedBrand, selectedPriceRanges]);

  // Paginated products: 12 per page
  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full bg-[#f8faf8] min-h-screen py-3 sm:py-5 animate-fadeIn">
      <div className="w-full px-2.5 sm:px-4 lg:px-6 xl:px-8">

        {/* Mobile Filter Trigger Button */}
        <div className="lg:hidden flex items-center justify-between pb-3 mb-3 border-b border-gray-200 animate-fadeInUp">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 shadow-2xs cursor-pointer"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters ({selectedPriceRanges.length + (selectedBrand !== 'All Brands' ? 1 : 0)})</span>
          </button>
          <span className="text-xs text-gray-500 font-medium">245 New Phones</span>
        </div>

        {/* ===================================================================
            EXACT 2-COLUMN LAYOUT: 
            Left = Filters Sidebar starting at top baseline
            Right = Breadcrumbs + Title + Mint Banner + Brand Pills + 12-Card Grid
           =================================================================== */}
        <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-5 lg:gap-6">

          {/* -----------------------------------------------------------------
              LEFT COLUMN: Filters Sidebar Card
             ----------------------------------------------------------------- */}
          <aside
            className={`
              fixed inset-0 z-50 bg-black/50 p-4 lg:p-0 lg:static lg:z-0 lg:bg-transparent
              ${isMobileFilterOpen ? 'flex' : 'hidden lg:block'}
              w-full lg:w-60 xl:w-64 flex-shrink-0 animate-fadeInUp
            `}
            style={{ animationDelay: '40ms' }}
          >
            <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs w-full max-w-xs lg:max-w-none max-h-[90vh] lg:max-h-none overflow-y-auto m-auto lg:m-0">
              
              {/* Header: Filters + Clear All */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
                <h2 className="text-base font-extrabold text-gray-950 tracking-tight">
                  Filters
                </h2>
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={handleClearAll}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="lg:hidden p-1 text-gray-400 hover:text-gray-700 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* 1. Category Accordion */}
              <div className="pb-3.5 border-b border-gray-100">
                <button
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="w-full flex items-center justify-between text-xs font-bold text-gray-900 py-0.5 cursor-pointer"
                >
                  <span>Category</span>
                  <span className="text-gray-400 text-sm font-bold">
                    {isCategoryOpen ? '−' : '+'}
                  </span>
                </button>

                {isCategoryOpen && (
                  <div className="mt-2 space-y-2">
                    {categoriesList.map((cat) => (
                      <label
                        key={cat.name}
                        onClick={() => setSelectedCategory(cat.name)}
                        className="flex items-center justify-between text-xs text-gray-700 hover:text-gray-950 cursor-pointer select-none"
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedCategory === cat.name}
                            onChange={() => setSelectedCategory(cat.name)}
                            className="w-3.5 h-3.5 rounded border-gray-300 text-[#00704A] focus:ring-0 cursor-pointer"
                          />
                          <span className={selectedCategory === cat.name ? 'font-bold text-gray-950' : 'font-normal text-gray-700'}>
                            {cat.name}
                          </span>
                        </div>
                        <span className="text-[11px] text-gray-400 font-normal">
                          ({cat.count})
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* 2. Brand Accordion */}
              <div className="py-3.5 border-b border-gray-100">
                <button
                  onClick={() => setIsBrandOpen(!isBrandOpen)}
                  className="w-full flex items-center justify-between text-xs font-bold text-gray-900 py-0.5 cursor-pointer"
                >
                  <span>Brand</span>
                  <span className="text-gray-400 text-sm font-bold">
                    {isBrandOpen ? '−' : '+'}
                  </span>
                </button>

                {isBrandOpen && (
                  <div className="mt-2 space-y-2">
                    {/* Search Input */}
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 absolute left-2.5 top-2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search brand..."
                        value={brandSearch}
                        onChange={(e) => setBrandSearch(e.target.value)}
                        className="w-full pl-8 pr-2 py-1 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-800 placeholder-gray-400 focus:bg-white focus:border-[#00704A] transition-colors"
                      />
                    </div>

                    {/* Brand List */}
                    <div className="space-y-1.5 max-h-52 overflow-y-auto pr-1">
                      {brandsList
                        .filter((b) => b.name.toLowerCase().includes(brandSearch.toLowerCase()))
                        .map((brand) => (
                          <label
                            key={brand.name}
                            onClick={() => setSelectedBrand(selectedBrand === brand.name ? 'All Brands' : brand.name)}
                            className="flex items-center justify-between text-xs text-gray-700 hover:text-gray-950 cursor-pointer select-none py-0.5"
                          >
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                checked={selectedBrand === brand.name}
                                onChange={() => setSelectedBrand(selectedBrand === brand.name ? 'All Brands' : brand.name)}
                                className="w-3.5 h-3.5 rounded border-gray-300 text-[#00704A] focus:ring-0 cursor-pointer"
                              />
                              <span className={selectedBrand === brand.name ? 'font-bold text-gray-950' : 'font-normal text-gray-700'}>
                                {brand.name}
                              </span>
                            </div>
                            <span className="text-[11px] text-gray-400 font-normal">
                              ({brand.count})
                            </span>
                          </label>
                        ))}
                    </div>

                    <button
                      onClick={() => showToast?.('Showing all brands')}
                      className="text-[11px] text-[#00704A] hover:underline font-semibold flex items-center gap-0.5 pt-0.5 cursor-pointer"
                    >
                      <span>View More</span>
                      <ChevronDown className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>

              {/* 3. Price Range Accordion */}
              <div className="py-3.5 border-b border-gray-100">
                <button
                  onClick={() => setIsPriceOpen(!isPriceOpen)}
                  className="w-full flex items-center justify-between text-xs font-bold text-gray-900 py-0.5 cursor-pointer"
                >
                  <span>Price Range</span>
                  <span className="text-gray-400 text-sm font-bold">
                    {isPriceOpen ? '−' : '+'}
                  </span>
                </button>

                {isPriceOpen && (
                  <div className="mt-2 space-y-1.5">
                    {priceRanges.map((range) => {
                      const isChecked = selectedPriceRanges.includes(range.label);
                      return (
                        <label
                          key={range.label}
                          onClick={() => handleTogglePrice(range.label)}
                          className="flex items-center justify-between text-xs text-gray-700 hover:text-gray-950 cursor-pointer select-none py-0.5"
                        >
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleTogglePrice(range.label)}
                              className="w-3.5 h-3.5 rounded border-gray-300 text-[#00704A] focus:ring-0 cursor-pointer"
                            />
                            <span className={isChecked ? 'font-bold text-gray-950' : 'font-normal text-gray-700'}>
                              {range.label}
                            </span>
                          </div>
                          <span className="text-[11px] text-gray-400 font-normal">
                            ({range.count})
                          </span>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* 4. RAM Accordion */}
              <div className="py-2.5 border-b border-gray-100">
                <button
                  onClick={() => setIsRamOpen(!isRamOpen)}
                  className="w-full flex items-center justify-between text-xs font-bold text-gray-900 py-0.5 cursor-pointer"
                >
                  <span>RAM</span>
                  <span className="text-gray-400 text-sm font-bold">{isRamOpen ? '−' : '+'}</span>
                </button>
                {isRamOpen && (
                  <div className="mt-1.5 space-y-1 text-xs text-gray-600">
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded" /> 4 GB</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded" /> 6 GB</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded" /> 8 GB</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded" /> 12 GB</label>
                  </div>
                )}
              </div>

              {/* 5. Storage Accordion */}
              <div className="pt-2.5">
                <button
                  onClick={() => setIsStorageOpen(!isStorageOpen)}
                  className="w-full flex items-center justify-between text-xs font-bold text-gray-900 py-0.5 cursor-pointer"
                >
                  <span>Storage</span>
                  <span className="text-gray-400 text-sm font-bold">{isStorageOpen ? '−' : '+'}</span>
                </button>
                {isStorageOpen && (
                  <div className="mt-1.5 space-y-1 text-xs text-gray-600">
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded" /> 64 GB</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded" /> 128 GB</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded" /> 256 GB</label>
                    <label className="flex items-center gap-2"><input type="checkbox" className="rounded" /> 512 GB</label>
                  </div>
                )}
              </div>

            </div>
          </aside>


          {/* -----------------------------------------------------------------
              RIGHT COLUMN: Top Row (Title + Panoramic Banner) + Sub-Header + Grid
             ----------------------------------------------------------------- */}
          <main className="flex-1 min-w-0 w-full">
            
            {/* ROW 1: Breadcrumbs/Title on Left + Exact Panoramic Mint Banner on Right */}
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-3 sm:gap-4 mb-3 sm:mb-3.5 animate-fadeInUp" style={{ animationDelay: '60ms' }}>
              
              {/* Left Title Area */}
              <div className="max-w-md flex-shrink-0">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                  <button
                    onClick={onBackToHome}
                    className="hover:text-[#00704A] hover:underline transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                  <ChevronRight className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-800 font-semibold">New Phones</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#0f172a] tracking-tight leading-tight">
                  New Phones
                </h1>
                <p className="text-xs sm:text-[12.5px] text-gray-500 font-normal mt-0.5 leading-snug">
                  Explore the latest smartphones with full warranty. 100% original. Best prices.
                </p>
              </div>

              {/* Right: Exact Panoramic Mint Banner Image from Reference */}
              <div className="flex-1 max-w-2xl flex justify-start xl:justify-end animate-fadeInScale" style={{ animationDelay: '100ms' }}>
                <img
                  src="/assets/latest_smartphones_banner.png"
                  alt="Latest Smartphones - Brand New. Full Warranty. 100% Original."
                  className="w-full h-auto max-h-24 sm:max-h-26 object-contain rounded-xl sm:rounded-2xl drop-shadow-2xs hover:scale-[1.01] transition-transform duration-300"
                />
              </div>

            </div>


            {/* ROW 2: Sub-Header Filter Bar (Count + Horizontal Brand Pills + Sort + Grid/List Toggle) */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200/80 p-2.5 sm:p-3 mb-3.5 sm:mb-4 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-2.5 animate-fadeInUp" style={{ animationDelay: '120ms' }}>
              
              {/* Left: 245 Count + Brand Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
                <span className="text-xs sm:text-sm font-black text-gray-900 whitespace-nowrap pr-1 flex-shrink-0">
                  245 New Phones
                </span>

                {/* 1. All Brands (Active Green) */}
                <button
                  onClick={() => setSelectedBrand('All Brands')}
                  className={`
                    h-9 px-3.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center justify-center flex-shrink-0 cursor-pointer active:scale-95
                    ${
                      selectedBrand === 'All Brands'
                        ? 'bg-[#00704A] text-white shadow-2xs'
                        : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-400'
                    }
                  `}
                >
                  All Brands
                </button>

                {/* 2. Apple */}
                <button
                  onClick={() => setSelectedBrand('Apple')}
                  className={`w-9 h-9 rounded-full text-xs font-semibold whitespace-nowrap flex items-center justify-center flex-shrink-0 border transition-all cursor-pointer ${
                    selectedBrand === 'Apple'
                      ? 'bg-[#00704A] text-white border-[#00704A]'
                      : 'bg-white border-gray-200 text-gray-800 hover:border-gray-400'
                  }`}
                  title="Apple"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 170 170">
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.69-7.85-11.96-14.43-5.26-8.08-9.43-17.1-12.51-27.06-3.08-9.96-4.62-19.53-4.62-28.71 0-14.28 3.59-25.79 10.77-34.53 7.18-8.74 16.27-13.23 27.27-13.48 4.67 0 10.02 1.25 16.06 3.75 6.04 2.5 9.94 3.8 11.69 3.9 1.48-.1 5.34-1.4 11.59-3.9 6.24-2.5 11.45-3.65 15.63-3.45 11.98.61 21.36 4.78 28.14 12.51-10.45 6.33-15.54 15.04-15.28 26.13.26 8.7 3.55 15.98 9.87 21.84 6.32 5.86 13.88 9.3 22.68 10.32-2.17 6.42-4.93 12.92-8.28 19.51zM119.22 31.84c0-7.05 2.53-13.86 7.6-20.44 5.07-6.57 11.4-10.87 18.99-12.89.26 1.48.39 2.85.39 4.12 0 7.18-2.67 14.15-8.01 20.91-5.34 6.76-11.78 10.82-19.33 12.18-.32-1.27-.48-2.39-.48-3.88z" />
                  </svg>
                </button>

                {/* 3. Samsung */}
                <button
                  onClick={() => setSelectedBrand('Samsung')}
                  className={`h-9 px-3.5 rounded-full text-xs font-semibold whitespace-nowrap flex items-center justify-center flex-shrink-0 border transition-all cursor-pointer ${
                    selectedBrand === 'Samsung'
                      ? 'bg-[#00704A] text-white border-[#00704A]'
                      : 'bg-white border-gray-200 hover:border-gray-400'
                  }`}
                  title="Samsung"
                >
                  <span className={`font-black tracking-tight text-[11px] ${selectedBrand === 'Samsung' ? 'text-white' : 'text-[#0034a8]'}`}>
                    SAMSUNG
                  </span>
                </button>

                {/* 4. OnePlus (1+) */}
                <button
                  onClick={() => setSelectedBrand('OnePlus')}
                  className={`w-9 h-9 rounded-full text-xs font-semibold whitespace-nowrap flex items-center justify-center flex-shrink-0 border transition-all cursor-pointer ${
                    selectedBrand === 'OnePlus'
                      ? 'bg-[#00704A] text-white border-[#00704A]'
                      : 'bg-white border-gray-200 hover:border-gray-400'
                  }`}
                  title="OnePlus"
                >
                  <span className="bg-red-600 text-white font-black px-1.5 py-0.2 rounded text-[10px]">
                    1+
                  </span>
                </button>

                {/* 5. Xiaomi (mi) */}
                <button
                  onClick={() => setSelectedBrand('Xiaomi')}
                  className={`w-9 h-9 rounded-full text-xs font-semibold whitespace-nowrap flex items-center justify-center flex-shrink-0 border transition-all cursor-pointer ${
                    selectedBrand === 'Xiaomi'
                      ? 'bg-[#00704A] text-white border-[#00704A]'
                      : 'bg-white border-gray-200 hover:border-gray-400'
                  }`}
                  title="Xiaomi"
                >
                  <span className="bg-[#ff6900] text-white font-bold px-1.5 py-0.2 rounded text-[10px]">
                    mi
                  </span>
                </button>

                {/* 6. Realme (R) */}
                <button
                  onClick={() => setSelectedBrand('Realme')}
                  className={`w-9 h-9 rounded-full text-xs font-semibold whitespace-nowrap flex items-center justify-center flex-shrink-0 border transition-all cursor-pointer ${
                    selectedBrand === 'Realme'
                      ? 'bg-[#00704A] text-white border-[#00704A]'
                      : 'bg-white border-gray-200 hover:border-gray-400'
                  }`}
                  title="Realme"
                >
                  <span className="bg-[#ffc700] text-gray-950 font-black px-1.5 py-0.2 rounded text-[10px]">
                    R
                  </span>
                </button>

                {/* 7. Vivo */}
                <button
                  onClick={() => setSelectedBrand('Vivo')}
                  className={`h-9 px-3.5 rounded-full text-xs font-semibold whitespace-nowrap flex items-center justify-center flex-shrink-0 border transition-all cursor-pointer ${
                    selectedBrand === 'Vivo'
                      ? 'bg-[#00704A] text-white border-[#00704A]'
                      : 'bg-white border-gray-200 hover:border-gray-400'
                  }`}
                  title="Vivo"
                >
                  <span className={`font-bold text-[12px] ${selectedBrand === 'Vivo' ? 'text-white' : 'text-[#0051d5]'}`}>
                    vivo
                  </span>
                </button>

                {/* 8. Oppo */}
                <button
                  onClick={() => setSelectedBrand('Oppo')}
                  className={`h-9 px-3.5 rounded-full text-xs font-semibold whitespace-nowrap flex items-center justify-center flex-shrink-0 border transition-all cursor-pointer ${
                    selectedBrand === 'Oppo'
                      ? 'bg-[#00704A] text-white border-[#00704A]'
                      : 'bg-white border-gray-200 hover:border-gray-400'
                  }`}
                  title="Oppo"
                >
                  <span className={`font-bold text-[12px] ${selectedBrand === 'Oppo' ? 'text-white' : 'text-[#008751]'}`}>
                    oppo
                  </span>
                </button>

                {/* 9. Google */}
                <button
                  onClick={() => setSelectedBrand('Google')}
                  className={`w-9 h-9 rounded-full text-xs font-semibold whitespace-nowrap flex items-center justify-center flex-shrink-0 border transition-all cursor-pointer ${
                    selectedBrand === 'Google'
                      ? 'bg-[#00704A] text-white border-[#00704A]'
                      : 'bg-white border-gray-200 hover:border-gray-400'
                  }`}
                  title="Google"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.97 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                </button>

                {/* 10. Motorola */}
                <button
                  onClick={() => setSelectedBrand('Motorola')}
                  className={`w-9 h-9 rounded-full text-xs font-semibold whitespace-nowrap flex items-center justify-center flex-shrink-0 border transition-all cursor-pointer ${
                    selectedBrand === 'Motorola'
                      ? 'bg-[#00704A] text-white border-[#00704A]'
                      : 'bg-white border-gray-200 hover:border-gray-400'
                  }`}
                  title="Motorola"
                >
                  <span className="bg-[#001489] text-white font-black rounded-full px-1.5 py-0.2 text-[9px]">
                    M
                  </span>
                </button>

                {/* 11. Nothing */}
                <button
                  onClick={() => setSelectedBrand('Nothing')}
                  className={`h-9 px-3.5 rounded-full text-xs font-semibold whitespace-nowrap flex items-center justify-center flex-shrink-0 border transition-all cursor-pointer ${
                    selectedBrand === 'Nothing'
                      ? 'bg-[#00704A] text-white border-[#00704A]'
                      : 'bg-white border-gray-200 hover:border-gray-400'
                  }`}
                  title="Nothing"
                >
                  <span className={`font-mono text-[11px] ${selectedBrand === 'Nothing' ? 'text-white' : 'text-gray-900'}`}>
                    Nothing
                  </span>
                </button>

                {/* 12. Nokia */}
                <button
                  onClick={() => setSelectedBrand('Nokia')}
                  className={`h-9 px-3.5 rounded-full text-xs font-semibold whitespace-nowrap flex items-center justify-center flex-shrink-0 border transition-all cursor-pointer ${
                    selectedBrand === 'Nokia'
                      ? 'bg-[#00704A] text-white border-[#00704A]'
                      : 'bg-white border-gray-200 hover:border-gray-400'
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
                  className="h-9 px-3 rounded-full text-xs font-medium text-gray-600 hover:text-gray-900 bg-white border border-gray-200 hover:border-gray-400 flex items-center gap-1 whitespace-nowrap flex-shrink-0 cursor-pointer"
                >
                  <span>More</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Right: Sort Dropdown */}
              <div className="flex items-center gap-1.5 self-end md:self-center flex-shrink-0 text-xs text-gray-600">
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
              </div>

            </div>


            {/* ===============================================================
                PRODUCT GRID: 6 columns on wide screens, 2 rows of 6 = 12 items
               =============================================================== */}
            {paginatedProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5 sm:gap-3 lg:gap-3.5">
                {paginatedProducts.map((phone, index) => {
                  const isWishlisted = wishlistIds.includes(phone.id);
                  return (
                    <div
                      key={phone.id}
                      style={{ animationDelay: `${Math.min(index * 35, 400)}ms` }}
                      className="bg-white rounded-xl border border-gray-200/80 p-2.5 sm:p-3 hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between group relative animate-fadeInUp"
                    >
                      {/* Top Bar: Green "New" Badge (left) + Wishlist Heart (right) */}
                      <div className="flex items-center justify-between min-h-[22px] mb-1">
                        <span className="bg-[#009A44] text-white text-[9.5px] sm:text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-2xs uppercase tracking-tight">
                          New
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleWishlist?.(phone);
                          }}
                          aria-label="Add to Wishlist"
                          className="p-1 rounded-full text-gray-400 hover:text-rose-500 hover:bg-rose-50 transition-colors z-10 cursor-pointer"
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

                      {/* Product Details */}
                      <div className="mt-1 sm:mt-1.5" onClick={() => onQuickView?.(phone)}>
                        <h3 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#00704A] transition-colors truncate cursor-pointer">
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

                      {/* Green Outline "Add to Cart" Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart?.(phone);
                        }}
                        className="mt-2.5 sm:mt-3 w-full py-1.5 sm:py-2 px-2 rounded-lg border border-[#009A44] text-[#009A44] hover:bg-[#009A44] hover:text-white transition-colors duration-200 flex items-center justify-center gap-1.5 text-xs font-semibold active:scale-[0.98] cursor-pointer"
                      >
                        <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center my-6">
                <p className="text-base font-bold text-gray-800">No phones match the selected filters.</p>
                <button
                  onClick={handleClearAll}
                  className="mt-3 inline-flex items-center gap-1.5 bg-[#00704A] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#00583a] cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            )}


            {/* ===============================================================
                BOTTOM PAGINATION: Showing 1-12 of 245 products + [1][2]...
               =============================================================== */}
            <div className="mt-8 pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Left Item Count */}
              <div className="text-xs text-gray-500 font-medium">
                Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, 245)} of 245 products
              </div>

              {/* Right Pagination Number Buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="w-8 h-8 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white text-gray-700 flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
                  aria-label="Previous Page"
                >
                  ←
                </button>

                <button
                  onClick={() => setCurrentPage(1)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    currentPage === 1
                      ? 'bg-[#00704A] text-white shadow-2xs'
                      : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  1
                </button>

                <button
                  onClick={() => setCurrentPage(2)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    currentPage === 2
                      ? 'bg-[#00704A] text-white shadow-2xs'
                      : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  2
                </button>

                <button
                  onClick={() => setCurrentPage(3)}
                  className={`hidden sm:flex w-8 h-8 rounded-lg text-xs font-bold items-center justify-center transition-all cursor-pointer ${
                    currentPage === 3
                      ? 'bg-[#00704A] text-white shadow-2xs'
                      : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  3
                </button>

                <button
                  onClick={() => setCurrentPage(4)}
                  className={`hidden sm:flex w-8 h-8 rounded-lg text-xs font-bold items-center justify-center transition-all cursor-pointer ${
                    currentPage === 4
                      ? 'bg-[#00704A] text-white shadow-2xs'
                      : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  4
                </button>

                <button
                  onClick={() => setCurrentPage(5)}
                  className={`hidden sm:flex w-8 h-8 rounded-lg text-xs font-bold items-center justify-center transition-all cursor-pointer ${
                    currentPage === 5
                      ? 'bg-[#00704A] text-white shadow-2xs'
                      : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  5
                </button>

                <span className="text-gray-400 px-1 text-xs">...</span>

                <button
                  onClick={() => setCurrentPage(21)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    currentPage === 21
                      ? 'bg-[#00704A] text-white shadow-2xs'
                      : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  21
                </button>

                <button
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="w-8 h-8 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white text-gray-700 flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
                  aria-label="Next Page"
                >
                  →
                </button>
              </div>

            </div>

          </main>

        </div>

      </div>
    </div>
  );
}
