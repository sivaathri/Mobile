import React, { useState, useMemo } from 'react';
import {
  Heart,
  ShoppingCart,
  Search,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ShieldCheck,
  Shield,
  Smartphone,
  RotateCcw,
  LayoutGrid,
  List,
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
  // Additional products for pagination
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
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

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

  // Brand pills for top bar
  const brandPills = [
    { id: 'All Brands', label: 'All Brands' },
    { id: 'Apple', label: 'Apple', icon: '🍎' },
    { id: 'Samsung', label: 'SAMSUNG', isCustom: true, style: 'font-extrabold text-[#0034a8] tracking-tight text-[11px]' },
    { id: 'OnePlus', label: '1+', isCustom: true, style: 'bg-red-600 text-white font-black px-1.5 py-0.2 rounded text-[10px]' },
    { id: 'Xiaomi', label: 'mi', isCustom: true, style: 'bg-orange-500 text-white font-bold px-1.5 py-0.2 rounded text-[10px]' },
    { id: 'Realme', label: 'R', isCustom: true, style: 'bg-amber-400 text-gray-950 font-black px-1.5 py-0.2 rounded text-[10px]' },
    { id: 'Vivo', label: 'vivo', isCustom: true, style: 'text-[#0051d5] font-bold text-[11px]' },
    { id: 'Oppo', label: 'oppo', isCustom: true, style: 'text-[#008751] font-bold text-[11px]' },
    { id: 'Google', label: 'Google', isCustom: true, style: 'font-bold text-[11px] text-gray-800' },
    { id: 'Motorola', label: 'M', isCustom: true, style: 'bg-blue-600 text-white font-black rounded-full px-1.5 text-[9.5px]' },
    { id: 'Nothing', label: 'Nothing', isCustom: true, style: 'font-mono text-gray-900 text-[11px]' },
    { id: 'Nokia', label: 'NOKIA', isCustom: true, style: 'font-extrabold text-[#124191] text-[10px] tracking-wider' },
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
      // Category filter
      if (selectedCategory !== 'All Smartphones' && p.category !== selectedCategory) {
        return false;
      }
      // Brand filter
      if (selectedBrand !== 'All Brands' && p.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
        return false;
      }
      // Price range filter
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
    <div className="w-full bg-[#f8faf8] min-h-screen py-4 sm:py-6">
      <div className="w-full px-2.5 sm:px-4 lg:px-6 xl:px-8">
        
        {/* ===================================================================
            HEADER: Breadcrumbs + Title + Promo Banner Box
           =================================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4 sm:mb-6">
          
          {/* Left Title & Breadcrumbs */}
          <div>
            {/* Breadcrumb Links */}
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1.5">
              <button
                onClick={onBackToHome}
                className="hover:text-[#00704A] hover:underline transition-colors cursor-pointer"
              >
                Home
              </button>
              <ChevronRight className="w-3 h-3 text-gray-400" />
              <span className="text-gray-900 font-semibold">New Phones</span>
            </div>

            {/* Page Heading */}
            <h1 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight leading-tight">
              New Phones
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5 max-w-xl">
              Explore the latest smartphones with full warranty. 100% original. Best prices.
            </p>
          </div>

          {/* Right Promotional Banner Box (Matching Reference) */}
          <div className="rounded-2xl bg-gradient-to-r from-[#eef9f3] via-[#e4f6ec] to-[#d8f2e4] border border-[#c4ebdb] p-3.5 sm:p-4 flex items-center justify-between gap-3 shadow-2xs">
            {/* Promo text & CTA */}
            <div className="max-w-[170px] sm:max-w-[200px]">
              <h3 className="text-xs sm:text-sm font-extrabold text-[#094936] leading-snug">
                Latest Smartphones
              </h3>
              <p className="text-[10px] sm:text-[11px] text-[#245d47] font-normal leading-tight mt-0.5">
                Brand New. Full Warranty. 100% Original.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All Smartphones');
                  showToast?.('Exploring all new phones below!');
                }}
                className="mt-2 inline-flex items-center gap-1 bg-[#00704A] hover:bg-[#00583a] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-2xs transition-all cursor-pointer active:scale-95"
              >
                <span>Explore Now</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            {/* Phone Image Graphic */}
            <div className="h-16 sm:h-18 flex items-center justify-center -space-x-4">
              <img
                src="/assets/phones/iphone13_pink.jpg"
                alt="Latest phone"
                className="h-16 sm:h-18 w-auto object-contain drop-shadow-xs"
              />
              <img
                src="/assets/phones/galaxy_s22.jpg"
                alt="Latest phone"
                className="h-16 sm:h-18 w-auto object-contain drop-shadow-xs"
              />
            </div>

            {/* 4 Trust Value Props in Banner */}
            <div className="hidden sm:grid grid-cols-4 gap-2.5 pl-3 border-l border-[#c4ebdb] text-[10px] text-gray-700">
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="w-4 h-4 text-[#00704A] mb-1" />
                <span className="font-bold text-[9px] leading-tight text-gray-900">100% Original</span>
                <span className="text-[8.5px] text-gray-500">Products</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="w-4 h-4 text-[#00704A] mb-1" />
                <span className="font-bold text-[9px] leading-tight text-gray-900">Brand</span>
                <span className="text-[8.5px] text-gray-500">Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Smartphone className="w-4 h-4 text-[#00704A] mb-1" />
                <span className="font-bold text-[9px] leading-tight text-gray-900">Latest</span>
                <span className="text-[8.5px] text-gray-500">Models</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <RotateCcw className="w-4 h-4 text-[#00704A] mb-1" />
                <span className="font-bold text-[9px] leading-tight text-gray-900">Hassle-Free</span>
                <span className="text-[8.5px] text-gray-500">Returns</span>
              </div>
            </div>

          </div>

        </div>


        {/* ===================================================================
            MAIN 2-COLUMN LAYOUT: Sidebar Filters (Left) + Catalog Grid (Right)
           =================================================================== */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-6">
          
          {/* Mobile Filter Toggle Button */}
          <div className="lg:hidden flex items-center justify-between pb-2 border-b border-gray-200">
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 shadow-2xs"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters ({selectedPriceRanges.length + (selectedBrand !== 'All Brands' ? 1 : 0)})</span>
            </button>

            <span className="text-xs text-gray-500 font-medium">
              245 New Phones
            </span>
          </div>

          {/* -----------------------------------------------------------------
              LEFT SIDEBAR: Filters (Sticky on desktop)
             ----------------------------------------------------------------- */}
          <aside
            className={`
              fixed inset-0 z-50 bg-black/50 p-4 lg:p-0 lg:static lg:z-0 lg:bg-transparent
              ${isMobileFilterOpen ? 'flex' : 'hidden lg:block'}
              w-full lg:w-64 xl:w-72 flex-shrink-0
            `}
          >
            <div className="bg-white rounded-2xl border border-gray-200/80 p-4 sm:p-5 shadow-2xs w-full max-w-xs lg:max-w-none max-h-[90vh] lg:max-h-none overflow-y-auto m-auto lg:m-0">
              
              {/* Filter Top Header */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
                <h2 className="text-base font-extrabold text-gray-900 tracking-tight">
                  Filters
                </h2>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleClearAll}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
                  >
                    Clear All
                  </button>
                  {/* Mobile close button */}
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="lg:hidden p-1 text-gray-400 hover:text-gray-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* 1. Category Accordion */}
              <div className="pb-4 border-b border-gray-100">
                <button
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="w-full flex items-center justify-between text-xs font-bold text-gray-900 py-1 cursor-pointer"
                >
                  <span>Category</span>
                  <span className="text-gray-400 text-sm font-bold">
                    {isCategoryOpen ? '−' : '+'}
                  </span>
                </button>

                {isCategoryOpen && (
                  <div className="mt-2.5 space-y-2">
                    {categoriesList.map((cat) => (
                      <label
                        key={cat.name}
                        onClick={() => setSelectedCategory(cat.name)}
                        className="flex items-center justify-between text-xs text-gray-700 hover:text-gray-950 cursor-pointer select-none group"
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedCategory === cat.name}
                            onChange={() => setSelectedCategory(cat.name)}
                            className="w-3.5 h-3.5 rounded border-gray-300 text-[#00704A] focus:ring-0 cursor-pointer"
                          />
                          <span className={selectedCategory === cat.name ? 'font-bold text-gray-950' : 'font-medium'}>
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
              <div className="py-4 border-b border-gray-100">
                <button
                  onClick={() => setIsBrandOpen(!isBrandOpen)}
                  className="w-full flex items-center justify-between text-xs font-bold text-gray-900 py-1 cursor-pointer"
                >
                  <span>Brand</span>
                  <span className="text-gray-400 text-sm font-bold">
                    {isBrandOpen ? '−' : '+'}
                  </span>
                </button>

                {isBrandOpen && (
                  <div className="mt-2.5 space-y-2.5">
                    {/* Brand search input */}
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search brand..."
                        value={brandSearch}
                        onChange={(e) => setBrandSearch(e.target.value)}
                        className="w-full pl-8 pr-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-800 placeholder-gray-400 focus:bg-white focus:border-[#00704A] transition-colors"
                      />
                    </div>

                    {/* Brand Checkbox List */}
                    <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                      {brandsList
                        .filter((b) => b.name.toLowerCase().includes(brandSearch.toLowerCase()))
                        .map((brand) => (
                          <label
                            key={brand.name}
                            onClick={() => setSelectedBrand(selectedBrand === brand.name ? 'All Brands' : brand.name)}
                            className="flex items-center justify-between text-xs text-gray-700 hover:text-gray-950 cursor-pointer select-none"
                          >
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                checked={selectedBrand === brand.name}
                                onChange={() => setSelectedBrand(selectedBrand === brand.name ? 'All Brands' : brand.name)}
                                className="w-3.5 h-3.5 rounded border-gray-300 text-[#00704A] focus:ring-0 cursor-pointer"
                              />
                              <span className={selectedBrand === brand.name ? 'font-bold text-gray-950' : 'font-medium'}>
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
                      onClick={() => showToast?.('All 13 brands displayed')}
                      className="text-[11px] text-[#00704A] hover:underline font-semibold flex items-center gap-0.5 pt-1"
                    >
                      <span>View More</span>
                      <ChevronDown className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>

              {/* 3. Price Range Accordion */}
              <div className="py-4 border-b border-gray-100">
                <button
                  onClick={() => setIsPriceOpen(!isPriceOpen)}
                  className="w-full flex items-center justify-between text-xs font-bold text-gray-900 py-1 cursor-pointer"
                >
                  <span>Price Range</span>
                  <span className="text-gray-400 text-sm font-bold">
                    {isPriceOpen ? '−' : '+'}
                  </span>
                </button>

                {isPriceOpen && (
                  <div className="mt-2.5 space-y-2">
                    {priceRanges.map((range) => {
                      const isChecked = selectedPriceRanges.includes(range.label);
                      return (
                        <label
                          key={range.label}
                          onClick={() => handleTogglePrice(range.label)}
                          className="flex items-center justify-between text-xs text-gray-700 hover:text-gray-950 cursor-pointer select-none"
                        >
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleTogglePrice(range.label)}
                              className="w-3.5 h-3.5 rounded border-gray-300 text-[#00704A] focus:ring-0 cursor-pointer"
                            />
                            <span className={isChecked ? 'font-bold text-gray-950' : 'font-medium'}>
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
              <div className="py-3 border-b border-gray-100">
                <button
                  onClick={() => setIsRamOpen(!isRamOpen)}
                  className="w-full flex items-center justify-between text-xs font-bold text-gray-900 py-1 cursor-pointer"
                >
                  <span>RAM</span>
                  <span className="text-gray-400 text-sm font-bold">
                    {isRamOpen ? '−' : '+'}
                  </span>
                </button>
                {isRamOpen && (
                  <div className="mt-2 space-y-1.5 text-xs text-gray-600">
                    <div className="flex items-center gap-2"><input type="checkbox" className="rounded" /> 4 GB</div>
                    <div className="flex items-center gap-2"><input type="checkbox" className="rounded" /> 6 GB</div>
                    <div className="flex items-center gap-2"><input type="checkbox" className="rounded" /> 8 GB</div>
                    <div className="flex items-center gap-2"><input type="checkbox" className="rounded" /> 12 GB</div>
                  </div>
                )}
              </div>

              {/* 5. Storage Accordion */}
              <div className="pt-3">
                <button
                  onClick={() => setIsStorageOpen(!isStorageOpen)}
                  className="w-full flex items-center justify-between text-xs font-bold text-gray-900 py-1 cursor-pointer"
                >
                  <span>Storage</span>
                  <span className="text-gray-400 text-sm font-bold">
                    {isStorageOpen ? '−' : '+'}
                  </span>
                </button>
                {isStorageOpen && (
                  <div className="mt-2 space-y-1.5 text-xs text-gray-600">
                    <div className="flex items-center gap-2"><input type="checkbox" className="rounded" /> 64 GB</div>
                    <div className="flex items-center gap-2"><input type="checkbox" className="rounded" /> 128 GB</div>
                    <div className="flex items-center gap-2"><input type="checkbox" className="rounded" /> 256 GB</div>
                    <div className="flex items-center gap-2"><input type="checkbox" className="rounded" /> 512 GB</div>
                  </div>
                )}
              </div>

            </div>
          </aside>


          {/* -----------------------------------------------------------------
              RIGHT MAIN AREA: Top Controls Bar + 12-Card Grid + Pagination
             ----------------------------------------------------------------- */}
          <main className="flex-1 min-w-0">
            
            {/* Sub-Header Controls: Brand Pills + Sorting + Layout View Toggle */}
            <div className="bg-white rounded-2xl border border-gray-200/80 p-3 sm:p-3.5 mb-4 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-3">
              
              {/* Left: Total Count + Horizontal Brand Filter Pills */}
              <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-1 md:pb-0">
                <span className="text-xs font-black text-gray-900 whitespace-nowrap pr-1">
                  245 New Phones
                </span>

                {brandPills.map((pill) => {
                  const isActive = selectedBrand === pill.id;
                  return (
                    <button
                      key={pill.id}
                      onClick={() => {
                        setSelectedBrand(pill.id);
                        setCurrentPage(1);
                      }}
                      className={`
                        inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer active:scale-95
                        ${
                          isActive
                            ? 'bg-[#00704A] text-white shadow-2xs'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                        }
                      `}
                    >
                      {pill.isCustom ? (
                        <span className={pill.style}>{pill.label}</span>
                      ) : (
                        <span>{pill.label}</span>
                      )}
                    </button>
                  );
                })}

                <button
                  onClick={() => showToast?.('Showing all brand selections')}
                  className="text-xs text-gray-600 hover:text-gray-900 font-medium flex items-center gap-0.5 whitespace-nowrap px-1"
                >
                  <span>More</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>

              {/* Right: Sort Dropdown + Grid/List View Toggles */}
              <div className="flex items-center gap-3 self-end md:self-center flex-shrink-0">
                {/* Sort Dropdown */}
                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                  <span className="hidden sm:inline text-gray-500">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-gray-50 hover:bg-gray-100 border border-gray-200 text-xs font-semibold text-gray-800 rounded-lg px-2.5 py-1.5 focus:bg-white focus:border-[#00704A] cursor-pointer"
                  >
                    <option value="Popularity">Popularity</option>
                    <option value="Price: Low to High">Price: Low to High</option>
                    <option value="Price: High to Low">Price: High to Low</option>
                    <option value="Newest First">Newest First</option>
                  </select>
                </div>

                {/* Grid / List Toggles */}
                <div className="flex items-center border border-gray-200 rounded-lg p-0.5 bg-gray-50">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1 rounded-md transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-white text-[#00704A] shadow-2xs'
                        : 'text-gray-400 hover:text-gray-700'
                    }`}
                    title="Grid View"
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1 rounded-md transition-colors ${
                      viewMode === 'list'
                        ? 'bg-white text-[#00704A] shadow-2xs'
                        : 'text-gray-400 hover:text-gray-700'
                    }`}
                    title="List View"
                  >
                    <List className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>


            {/* ===============================================================
                PRODUCT GRID: 6 columns on large screen, 2 rows of 6 = 12 items
               =============================================================== */}
            {paginatedProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5 sm:gap-3 lg:gap-3.5">
                {paginatedProducts.map((phone) => {
                  const isWishlisted = wishlistIds.includes(phone.id);
                  return (
                    <div
                      key={phone.id}
                      className="bg-white rounded-xl border border-gray-200/80 p-2.5 sm:p-3 hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between group relative"
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
                        className="mt-2.5 sm:mt-3 w-full py-1.5 sm:py-2 px-2 rounded-lg border border-[#009A44] text-[#009A44] hover:bg-[#009A44] hover:text-white transition-colors duration-200 flex items-center justify-center gap-1.5 text-xs font-semibold active:scale-[0.98]"
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
                  className="mt-3 inline-flex items-center gap-1.5 bg-[#00704A] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#00583a]"
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
                {/* Previous Button */}
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="w-8 h-8 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white text-gray-700 flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
                  aria-label="Previous Page"
                >
                  ←
                </button>

                {/* Page 1 */}
                <button
                  onClick={() => setCurrentPage(1)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                    currentPage === 1
                      ? 'bg-[#00704A] text-white shadow-2xs'
                      : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  1
                </button>

                {/* Page 2 */}
                <button
                  onClick={() => setCurrentPage(2)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                    currentPage === 2
                      ? 'bg-[#00704A] text-white shadow-2xs'
                      : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  2
                </button>

                {/* Page 3 */}
                <button
                  onClick={() => setCurrentPage(3)}
                  className={`hidden sm:flex w-8 h-8 rounded-lg text-xs font-bold items-center justify-center transition-all ${
                    currentPage === 3
                      ? 'bg-[#00704A] text-white shadow-2xs'
                      : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  3
                </button>

                {/* Page 4 */}
                <button
                  onClick={() => setCurrentPage(4)}
                  className={`hidden sm:flex w-8 h-8 rounded-lg text-xs font-bold items-center justify-center transition-all ${
                    currentPage === 4
                      ? 'bg-[#00704A] text-white shadow-2xs'
                      : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  4
                </button>

                {/* Page 5 */}
                <button
                  onClick={() => setCurrentPage(5)}
                  className={`hidden sm:flex w-8 h-8 rounded-lg text-xs font-bold items-center justify-center transition-all ${
                    currentPage === 5
                      ? 'bg-[#00704A] text-white shadow-2xs'
                      : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  5
                </button>

                {/* Ellipsis */}
                <span className="text-gray-400 px-1 text-xs">...</span>

                {/* Page 21 */}
                <button
                  onClick={() => setCurrentPage(21)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                    currentPage === 21
                      ? 'bg-[#00704A] text-white shadow-2xs'
                      : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  21
                </button>

                {/* Next Button */}
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
