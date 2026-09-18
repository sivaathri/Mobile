import React, { useState, useMemo, useEffect } from 'react';
import {
  Heart,
  ShoppingCart,
  Search,
  ChevronDown,
  ChevronRight,
  SlidersHorizontal,
  X,
  Star,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Sparkles,
  Zap,
  Tag,
  Building2,    
  Store,
  Layers,
  ArrowRight,
  Eye,
  Check,
  Smartphone,
  Tablet,
  Watch,
  Headphones,
  Volume2,
  Clock,
  FileText,
  Percent,
} from 'lucide-react';
import { PhoneMockup, BrandIcon } from './PhoneGraphics';
import { CATEGORY_METADATA, CATEGORY_PRODUCTS } from '../data/categoryProducts';

export default function CategoryPage({
  category = 'Smartphones',
  onBackToHome,
  onSelectCategory,
  wishlistIds = [],
  onToggleWishlist,
  onAddToCart,
  onQuickView,
  showToast,
  searchQuery = '',
}) {
  // Metadata for the active category
  const meta = useMemo(() => {
    return (
      CATEGORY_METADATA[category] || {
        title: category,
        badge: 'Official Catalog',
        subtitle: `Explore genuine, warranty-backed ${category} with express delivery and best price guarantee.`,
        totalCount: 'Available Items',
        icon: 'Smartphone',
        subCategories: ['All ' + category],
        brands: ['Apple', 'Samsung', 'OnePlus', 'Google Pixel', 'Xiaomi'],
      }
    );
  }, [category]);

  // Filters State
  const [selectedSubCat, setSelectedSubCat] = useState('All ' + category);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Accordion toggle states
  const [isSubCatOpen, setIsSubCatOpen] = useState(true);
  const [isBrandOpen, setIsBrandOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isRatingOpen, setIsRatingOpen] = useState(true);

  // Bulk Quote Form State
  const [quoteForm, setQuoteForm] = useState({
    companyName: '',
    gstin: '',
    contactName: '',
    phone: '',
    email: '',
    modelRequirement: '',
    quantity: '10',
    notes: '',
  });
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  // Reset page & filters when category changes
  useEffect(() => {
    setSelectedSubCat('All ' + category);
    setSelectedBrands([]);
    setSelectedPriceRanges([]);
    setMinRating(0);
    setCurrentPage(1);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [category]);

  // Price Range Options
  const priceRangeOptions = [
    { label: 'Under ₹10,000', min: 0, max: 10000 },
    { label: '₹10,000 - ₹25,000', min: 10000, max: 25000 },
    { label: '₹25,000 - ₹50,000', min: 25000, max: 50000 },
    { label: '₹50,000 - ₹80,000', min: 50000, max: 80000 },
    { label: 'Above ₹80,000', min: 80000, max: 999999 },
  ];

  // Base Products for current category
  const baseCategoryProducts = useMemo(() => {
    return CATEGORY_PRODUCTS.filter((p) => p.category === category);
  }, [category]);

  // Available brands in this category
  const categoryBrands = useMemo(() => {
    const brandSet = new Set(baseCategoryProducts.map((p) => p.brand));
    meta.brands.forEach((b) => brandSet.add(b));
    return Array.from(brandSet);
  }, [baseCategoryProducts, meta]);

  // Filter logic
  const filteredProducts = useMemo(() => {
    return baseCategoryProducts.filter((product) => {
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(q);
        const matchBrand = product.brand.toLowerCase().includes(q);
        const matchSpecs = (product.specs || '').toLowerCase().includes(q);
        if (!matchName && !matchBrand && !matchSpecs) return false;
      }

      // Subcategory
      if (
        selectedSubCat &&
        !selectedSubCat.startsWith('All') &&
        product.subCategory !== selectedSubCat
      ) {
        return false;
      }

      // Brand
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false;
      }

      // Price Range
      if (selectedPriceRanges.length > 0) {
        const inAnyRange = selectedPriceRanges.some((rangeLabel) => {
          const opt = priceRangeOptions.find((o) => o.label === rangeLabel);
          if (!opt) return true;
          return product.price >= opt.min && product.price <= opt.max;
        });
        if (!inAnyRange) return false;
      }

      // Rating
      if (minRating > 0 && product.rating < minRating) {
        return false;
      }

      // In stock
      if (inStockOnly && !product.inStock) {
        return false;
      }

      return true;
    });
  }, [
    baseCategoryProducts,
    searchQuery,
    selectedSubCat,
    selectedBrands,
    selectedPriceRanges,
    minRating,
    inStockOnly,
  ]);

  // Sort logic
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    switch (sortBy) {
      case 'price-low':
        return list.sort((a, b) => a.price - b.price);
      case 'price-high':
        return list.sort((a, b) => b.price - a.price);
      case 'discount':
        return list.sort((a, b) => {
          const discA = a.originalPrice ? ((a.originalPrice - a.price) / a.originalPrice) : 0;
          const discB = b.originalPrice ? ((b.originalPrice - b.price) / b.originalPrice) : 0;
          return discB - discA;
        });
      case 'rating':
        return list.sort((a, b) => b.rating - a.rating);
      case 'newest':
        return list.reverse();
      case 'relevance':
      default:
        return list;
    }
  }, [filteredProducts, sortBy]);

  // Pagination (8 items per page)
  const itemsPerPage = 8;
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage) || 1;
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedProducts.slice(start, start + itemsPerPage);
  }, [sortedProducts, currentPage]);

  const handleBrandToggle = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
    setCurrentPage(1);
  };

  const handlePriceToggle = (label) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
    setCurrentPage(1);
  };

  const handleClearAll = () => {
    setSelectedSubCat('All ' + category);
    setSelectedBrands([]);
    setSelectedPriceRanges([]);
    setMinRating(0);
    setInStockOnly(false);
    setCurrentPage(1);
  };

  const activeFiltersCount =
    (selectedSubCat && !selectedSubCat.startsWith('All') ? 1 : 0) +
    selectedBrands.length +
    selectedPriceRanges.length +
    (minRating > 0 ? 1 : 0) +
    (inStockOnly ? 1 : 0);

  // Render Icon according to category meta
  const renderCategoryIcon = () => {
    switch (meta.icon) {
      case 'Tablet':
        return <Tablet className="w-5 h-5" />;
      case 'Watch':
        return <Watch className="w-5 h-5" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5" />;
      case 'Volume2':
        return <Volume2 className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      case 'Store':
        return <Store className="w-5 h-5" />;
      case 'Smartphone':
      default:
        return <Smartphone className="w-5 h-5" />;
    }
  };

  const handleBulkQuoteSubmit = (e) => {
    e.preventDefault();
    if (!quoteForm.companyName || !quoteForm.phone) {
      alert('Please fill in required fields (Company Name and Contact Number).');
      return;
    }
    setQuoteSubmitted(true);
    setTimeout(() => {
      setQuoteSubmitted(false);
      setIsQuoteModalOpen(false);
      if (showToast) {
        showToast('Bulk Inquiry Received! Our B2B manager will contact you within 2 business hours.');
      }
    }, 1800);
  };

  return (
    <div className="w-full bg-[#f8faf8] min-h-screen pb-16">
      
      {/* Top Breadcrumb Navigation */}
      <div className="w-full bg-white border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToHome}
              className="hover:text-[#00684a] font-medium transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="font-semibold text-gray-900">{meta.title}</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11.5px] text-gray-500">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00684a]" /> 100% Genuine
            </span>
            <span className="flex items-center gap-1">
              <Truck className="w-3.5 h-3.5 text-[#00684a]" /> Express Delivery
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00684a]" /> Certified Warranty
            </span>
          </div>
        </div>
      </div>

      {/* Dynamic Category Hero Banner */}
      <div className="w-full bg-gradient-to-r from-[#033b2b] via-[#04523b] to-[#00684a] text-white py-6 sm:py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Left Info */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 text-emerald-100 text-xs font-semibold backdrop-blur-xs mb-2.5">
                {renderCategoryIcon()}
                <span>{meta.badge}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white mb-2">
                {meta.title}
              </h1>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                {meta.subtitle}
              </p>
            </div>

            {/* Right Action / Special Badges */}
            <div className="flex flex-wrap items-center gap-3">
              {category === 'Top Deals' ? (
                <div className="bg-black/30 border border-emerald-300/30 rounded-xl p-3 backdrop-blur-xs flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-400 text-gray-950 flex items-center justify-center font-black">
                    <Zap className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-amber-300 font-bold">
                      Flash Deal Ends In
                    </div>
                    <div className="text-sm font-black font-mono text-white flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-300" />
                      <span>07h : 42m : 19s</span>
                    </div>
                  </div>
                </div>
              ) : category === 'Bulk Orders' ? (
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-gray-950 font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
                >
                  <Building2 className="w-4 h-4" />
                  <span>Request Instant B2B Quote</span>
                </button>
              ) : (
                <div className="bg-white/10 rounded-xl px-4 py-3 border border-white/15 text-center">
                  <div className="text-xl sm:text-2xl font-black text-white">
                    {filteredProducts.length}
                  </div>
                  <div className="text-[11px] text-emerald-100 font-medium">
                    Available Items
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Special Module: Wholesale Tier Cards for Bulk Orders */}
      {category === 'Bulk Orders' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <div className="bg-white rounded-xl p-4 border border-emerald-200/80 shadow-2xs flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                5-10
              </div>
              <div>
                <div className="text-xs font-bold text-gray-900">Small Business Tier</div>
                <div className="text-sm font-black text-[#00684a] mt-0.5">8% to 12% Volume Discount</div>
                <p className="text-[11px] text-gray-500 mt-1">Single GST Invoice with 18% Input Tax Credit benefit.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-emerald-300 shadow-2xs flex items-start gap-3.5 ring-2 ring-emerald-500/15">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                11-25
              </div>
              <div>
                <div className="text-xs font-bold text-gray-900">Corporate Fleet Tier</div>
                <div className="text-sm font-black text-[#00684a] mt-0.5">15% to 18% Volume Discount</div>
                <p className="text-[11px] text-gray-500 mt-1">Free Insured Transit + Priority 48-Hour Dispatch.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-emerald-200/80 shadow-2xs flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                26+
              </div>
              <div>
                <div className="text-xs font-bold text-gray-900">Enterprise Wholesale Tier</div>
                <div className="text-sm font-black text-[#00684a] mt-0.5">Up to 26% Off + Custom Quote</div>
                <p className="text-[11px] text-gray-500 mt-1">Dedicated Key Account Manager + Custom MDM Setup.</p>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Main Catalog Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Quick Brand Pills Row */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-4">
          <span className="text-xs font-bold text-gray-500 mr-1 flex-shrink-0">
            Filter by Brand:
          </span>
          <button
            onClick={() => setSelectedBrands([])}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedBrands.length === 0
                ? 'bg-[#00684a] text-white shadow-2xs'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/40'
            }`}
          >
            All Brands ({baseCategoryProducts.length})
          </button>
          {categoryBrands.map((b) => {
            const isSelected = selectedBrands.includes(b);
            const count = baseCategoryProducts.filter((p) => p.brand === b).length;
            return (
              <button
                key={b}
                onClick={() => handleBrandToggle(b)}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#00684a] text-white font-bold shadow-2xs'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/40'
                }`}
              >
                <span>{b}</span>
                {count > 0 && (
                  <span
                    className={`text-[10.5px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-emerald-800 text-emerald-100' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* 2-Column Layout (Left Filters, Right Catalog) */}
        <div className="flex flex-col lg:flex-row items-start gap-6">

          {/* ==========================================================
              LEFT FILTER SIDEBAR (Desktop & Mobile Sheet)
             ========================================================== */}
          <aside
            className={`
              fixed inset-0 z-50 bg-black/50 p-4 lg:p-0 lg:static lg:z-0 lg:bg-transparent
              ${isMobileFilterOpen ? 'flex' : 'hidden lg:block'}
              w-full lg:w-64 flex-shrink-0 animate-fadeInUp
            `}
          >
            <div className="bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs w-full max-w-xs lg:max-w-none max-h-[90vh] lg:max-h-none overflow-y-auto m-auto lg:m-0">
              
              {/* Header: Filters + Clear All */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-emerald-700" />
                  <h2 className="text-sm font-extrabold text-gray-950 tracking-tight">
                    Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                  </h2>
                </div>
                <div className="flex items-center gap-2.5">
                  {activeFiltersCount > 0 && (
                    <button
                      onClick={handleClearAll}
                      className="text-xs font-semibold text-[#00684a] hover:underline cursor-pointer"
                    >
                      Clear All
                    </button>
                  )}
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="lg:hidden p-1 text-gray-400 hover:text-gray-700 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* 1. Subcategory Filter Accordion */}
              {meta.subCategories && meta.subCategories.length > 1 && (
                <div className="pb-3.5 border-b border-gray-100">
                  <button
                    onClick={() => setIsSubCatOpen(!isSubCatOpen)}
                    className="w-full flex items-center justify-between text-xs font-bold text-gray-900 py-0.5 cursor-pointer"
                  >
                    <span>Subcategories</span>
                    <span className="text-gray-400 text-sm font-bold">
                      {isSubCatOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isSubCatOpen && (
                    <div className="mt-2 space-y-1.5">
                      {meta.subCategories.map((subcat) => {
                        const isSelected = selectedSubCat === subcat;
                        const count =
                          subcat.startsWith('All')
                            ? baseCategoryProducts.length
                            : baseCategoryProducts.filter((p) => p.subCategory === subcat).length;

                        return (
                          <label
                            key={subcat}
                            onClick={() => {
                              setSelectedSubCat(subcat);
                              setCurrentPage(1);
                            }}
                            className={`flex items-center justify-between text-xs px-2 py-1 rounded-md cursor-pointer transition-colors ${
                              isSelected
                                ? 'bg-emerald-50 text-[#00684a] font-bold'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            <span className="truncate">{subcat}</span>
                            <span className="text-[10.5px] text-gray-400 font-normal">
                              ({count})
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* 2. Brand Checkboxes */}
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
                  <div className="mt-2 space-y-2 max-h-48 overflow-y-auto no-scrollbar pr-1">
                    {categoryBrands.map((brand) => {
                      const isChecked = selectedBrands.includes(brand);
                      const count = baseCategoryProducts.filter((p) => p.brand === brand).length;

                      return (
                        <label
                          key={brand}
                          className="flex items-center justify-between text-xs text-gray-700 hover:text-gray-950 cursor-pointer select-none"
                        >
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleBrandToggle(brand)}
                              className="w-3.5 h-3.5 rounded border-gray-300 text-[#00684a] focus:ring-0 cursor-pointer accent-[#00684a]"
                            />
                            <span className={isChecked ? 'font-bold text-gray-950' : 'text-gray-700'}>
                              {brand}
                            </span>
                          </div>
                          <span className="text-[11px] text-gray-400 font-normal">
                            ({count})
                          </span>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* 3. Price Range Checkboxes */}
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
                  <div className="mt-2 space-y-2">
                    {priceRangeOptions.map((opt) => {
                      const isChecked = selectedPriceRanges.includes(opt.label);
                      const count = baseCategoryProducts.filter(
                        (p) => p.price >= opt.min && p.price <= opt.max
                      ).length;

                      return (
                        <label
                          key={opt.label}
                          className="flex items-center justify-between text-xs text-gray-700 hover:text-gray-950 cursor-pointer select-none"
                        >
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handlePriceToggle(opt.label)}
                              className="w-3.5 h-3.5 rounded border-gray-300 text-[#00684a] focus:ring-0 cursor-pointer accent-[#00684a]"
                            />
                            <span className={isChecked ? 'font-bold text-gray-950' : 'text-gray-700'}>
                              {opt.label}
                            </span>
                          </div>
                          <span className="text-[11px] text-gray-400 font-normal">
                            ({count})
                          </span>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* 4. Customer Rating Filter */}
              <div className="py-3.5 border-b border-gray-100">
                <button
                  onClick={() => setIsRatingOpen(!isRatingOpen)}
                  className="w-full flex items-center justify-between text-xs font-bold text-gray-900 py-0.5 cursor-pointer"
                >
                  <span>Customer Rating</span>
                  <span className="text-gray-400 text-sm font-bold">
                    {isRatingOpen ? '−' : '+'}
                  </span>
                </button>

                {isRatingOpen && (
                  <div className="mt-2 space-y-1.5">
                    {[4.5, 4.0, 3.5].map((star) => (
                      <button
                        key={star}
                        onClick={() => {
                          setMinRating(minRating === star ? 0 : star);
                          setCurrentPage(1);
                        }}
                        className={`w-full flex items-center justify-between px-2 py-1 rounded-md text-xs transition-colors ${
                          minRating === star
                            ? 'bg-amber-50 text-amber-900 font-bold'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span>{star} & above</span>
                        </div>
                        {minRating === star && (
                          <Check className="w-3.5 h-3.5 text-amber-600" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* 5. In Stock Only Toggle */}
              <div className="pt-3.5">
                <label className="flex items-center justify-between cursor-pointer select-none">
                  <span className="text-xs font-bold text-gray-800">In Stock Only</span>
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => {
                      setInStockOnly(e.target.checked);
                      setCurrentPage(1);
                    }}
                    className="w-4 h-4 rounded text-[#00684a] focus:ring-0 accent-[#00684a]"
                  />
                </label>
              </div>

            </div>
          </aside>

          {/* ==========================================================
              RIGHT COLUMN: Controls, Active Tags & Product Grid
             ========================================================== */}
          <div className="flex-1 w-full">
            
            {/* Controls Bar: Mobile filter trigger, result count & Sorting */}
            <div className="bg-white rounded-xl border border-gray-200/80 p-3 mb-4 flex flex-wrap items-center justify-between gap-3 shadow-2xs">
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-semibold text-gray-800 cursor-pointer"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#00684a]" />
                  <span>Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
                </button>
                <div className="text-xs text-gray-600 font-medium">
                  Showing <span className="font-bold text-gray-900">{sortedProducts.length}</span> items
                </div>
              </div>

              {/* Active Filter Tags */}
              {activeFiltersCount > 0 && (
                <div className="hidden sm:flex items-center flex-wrap gap-1.5 max-w-md">
                  {selectedSubCat && !selectedSubCat.startsWith('All') && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#00684a] text-[11px] font-semibold">
                      {selectedSubCat}
                      <X
                        className="w-3 h-3 cursor-pointer hover:text-emerald-900"
                        onClick={() => setSelectedSubCat('All ' + category)}
                      />
                    </span>
                  )}
                  {selectedBrands.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#00684a] text-[11px] font-semibold"
                    >
                      {b}
                      <X
                        className="w-3 h-3 cursor-pointer hover:text-emerald-900"
                        onClick={() => handleBrandToggle(b)}
                      />
                    </span>
                  ))}
                  {selectedPriceRanges.map((p) => (
                    <span
                      key={p}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#00684a] text-[11px] font-semibold"
                    >
                      {p}
                      <X
                        className="w-3 h-3 cursor-pointer hover:text-emerald-900"
                        onClick={() => handlePriceToggle(p)}
                      />
                    </span>
                  ))}
                  {minRating > 0 && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-semibold">
                      {minRating}★+
                      <X
                        className="w-3 h-3 cursor-pointer hover:text-amber-950"
                        onClick={() => setMinRating(0)}
                      />
                    </span>
                  )}
                </div>
              )}

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs text-gray-500 font-medium hidden sm:inline">
                  Sort By:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-50 border border-gray-200 rounded-lg text-xs font-semibold text-gray-800 px-2.5 py-1.5 outline-none focus:border-[#00684a] cursor-pointer"
                >
                  <option value="relevance">Relevance / Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="discount">Highest Discount %</option>
                  <option value="rating">Highest Customer Rating</option>
                  <option value="newest">Newest Arrivals</option>
                </select>
              </div>

            </div>

            {/* Product Cards Grid or Empty State */}
            {paginatedProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-200/80 p-12 text-center shadow-2xs">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  No matching items found
                </h3>
                <p className="text-xs text-gray-500 max-w-sm mx-auto mb-4">
                  We couldn't find any {meta.title} matching your active filters or search terms. Try clearing filters to see all available items.
                </p>
                <button
                  onClick={handleClearAll}
                  className="px-4 py-2 bg-[#00684a] text-white text-xs font-bold rounded-lg shadow-sm hover:bg-[#00553c] transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {paginatedProducts.map((product) => {
                  const isWishlisted = wishlistIds.includes(product.id);
                  const discount = product.originalPrice
                    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
                    : 0;

                  return (
                    <div
                      key={product.id}
                      className="group bg-white rounded-2xl border border-gray-200/80 hover:border-emerald-300 p-3.5 flex flex-col justify-between shadow-2xs hover:shadow-lg transition-all duration-300 relative"
                    >
                      {/* Top Badges & Wishlist Button */}
                      <div className="flex items-center justify-between mb-2">
                        {product.tag ? (
                          <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[10px] font-bold text-emerald-800 uppercase tracking-tight">
                            {product.tag}
                          </span>
                        ) : (
                          <span className="inline-block px-2 py-0.5 rounded-full bg-gray-50 text-[10px] font-semibold text-gray-500">
                            {product.brand}
                          </span>
                        )}

                        <button
                          onClick={() => onToggleWishlist && onToggleWishlist(product)}
                          className="p-1.5 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                          title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                        >
                          <Heart
                            className={`w-4 h-4 ${
                              isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'
                            }`}
                          />
                        </button>
                      </div>

                      {/* Product Image / PhoneMockup Graphic */}
                      <div className="relative py-4 flex items-center justify-center min-h-[160px] cursor-pointer"
                           onClick={() => onQuickView && onQuickView(product)}>
                        {product.imageType ? (
                          <PhoneMockup
                            type={product.imageType}
                            className="h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className="w-28 h-32 rounded-xl bg-emerald-50/70 border border-emerald-100 flex flex-col items-center justify-center text-[#00684a]">
                            {renderCategoryIcon()}
                            <span className="text-[10px] font-bold mt-1 text-gray-600">{product.brand}</span>
                          </div>
                        )}

                        {/* Quick View Hover Button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-2xs rounded-xl">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (onQuickView) onQuickView(product);
                            }}
                            className="px-3 py-1.5 bg-gray-900 text-white rounded-lg text-xs font-semibold shadow-md flex items-center gap-1.5 hover:bg-[#00684a] transition-colors cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Quick View</span>
                          </button>
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="pt-2 border-t border-gray-100">
                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-1">
                          <div className="flex items-center text-amber-500">
                            <Star className="w-3 h-3 fill-current" />
                            <span className="text-xs font-bold ml-1 text-gray-800">
                              {product.rating}
                            </span>
                          </div>
                          <span className="text-[10.5px] text-gray-400">
                            ({product.reviewCount || 120})
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          onClick={() => onQuickView && onQuickView(product)}
                          className="text-xs font-bold text-gray-900 group-hover:text-[#00684a] transition-colors line-clamp-1 cursor-pointer"
                          title={product.name}
                        >
                          {product.name}
                        </h3>

                        {/* Specs */}
                        <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">
                          {product.specs}
                        </p>

                        {/* Feature bullets or Bulk tier highlights */}
                        {product.bulkTiers ? (
                          <div className="mt-1.5 bg-emerald-50/70 rounded-md p-1.5 border border-emerald-100/60">
                            <div className="text-[10px] font-bold text-emerald-800">
                              Bulk Tiers Available:
                            </div>
                            <div className="text-[10px] text-emerald-700 font-medium">
                              From {product.bulkTiers[2].pricePerUnit} / unit (26+ units)
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-[10.5px] text-emerald-700 font-medium mt-1">
                            <CheckCircle2 className="w-3 h-3 flex-shrink-0 text-emerald-600" />
                            <span className="truncate">{product.warranty || '1 Year Official Warranty'}</span>
                          </div>
                        )}

                        {/* Pricing */}
                        <div className="flex items-baseline gap-2 mt-2 pt-1 border-t border-gray-100">
                          <span className="text-base font-black text-gray-950">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-gray-400 line-through">
                              ₹{product.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                          {discount > 0 && (
                            <span className="text-[10.5px] font-bold text-emerald-700 ml-auto bg-emerald-50 px-1.5 py-0.5 rounded">
                              {discount}% OFF
                            </span>
                          )}
                        </div>

                        {/* Add to Cart Button */}
                        <div className="mt-3">
                          <button
                            onClick={() => onAddToCart && onAddToCart(product)}
                            className="w-full py-2 bg-[#00684a] hover:bg-[#00553c] active:scale-[0.98] text-white rounded-xl text-xs font-bold transition-all shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <ShoppingCart className="w-3.5 h-3.5" />
                            <span>Add to Cart</span>
                          </button>
                        </div>

                      </div>

                    </div>
                  );
                })}
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8 pt-4 border-t border-gray-200">
                <button
                  disabled={currentPage === 1}
                  onClick={() => {
                    setCurrentPage((p) => Math.max(p - 1, 1));
                    window.scrollTo({ top: 120, behavior: 'smooth' });
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                    currentPage === 1
                      ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50 cursor-pointer'
                  }`}
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      window.scrollTo({ top: 120, behavior: 'smooth' });
                    }}
                    className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      currentPage === page
                        ? 'bg-[#00684a] text-white shadow-2xs'
                        : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => {
                    setCurrentPage((p) => Math.min(p + 1, totalPages));
                    window.scrollTo({ top: 120, behavior: 'smooth' });
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                    currentPage === totalPages
                      ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50 cursor-pointer'
                  }`}
                >
                  Next
                </button>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* ================================================================
          INSTANT B2B BULK QUOTE MODAL (for Bulk Orders)
         ================================================================ */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-2xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative border border-gray-100">
            
            <button
              onClick={() => setIsQuoteModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#00684a] flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-gray-950">
                  Request B2B Bulk Price Quote
                </h3>
                <p className="text-xs text-gray-500">
                  Save up to 26% with wholesale tiered pricing and GST tax credits.
                </p>
              </div>
            </div>

            {quoteSubmitted ? (
              <div className="py-8 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-gray-900">
                  Quote Request Submitted!
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Our Corporate Account Manager is generating your customized quotation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBulkQuoteSubmit} className="space-y-3 mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={quoteForm.companyName}
                      onChange={(e) => setQuoteForm({ ...quoteForm, companyName: e.target.value })}
                      placeholder="e.g. Acme Corp Ltd"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-gray-300 focus:border-[#00684a] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      GSTIN (Optional for 18% ITC)
                    </label>
                    <input
                      type="text"
                      value={quoteForm.gstin}
                      onChange={(e) => setQuoteForm({ ...quoteForm, gstin: e.target.value })}
                      placeholder="e.g. 33AAAAA0000A1Z5"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-gray-300 focus:border-[#00684a] outline-none uppercase"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      value={quoteForm.contactName}
                      onChange={(e) => setQuoteForm({ ...quoteForm, contactName: e.target.value })}
                      placeholder="Your Name"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-gray-300 focus:border-[#00684a] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={quoteForm.phone}
                      onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-gray-300 focus:border-[#00684a] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Model / Requirement
                    </label>
                    <input
                      type="text"
                      value={quoteForm.modelRequirement}
                      onChange={(e) => setQuoteForm({ ...quoteForm, modelRequirement: e.target.value })}
                      placeholder="e.g. Samsung A15 5G / iPhone 14"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-gray-300 focus:border-[#00684a] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Approx Quantity
                    </label>
                    <select
                      value={quoteForm.quantity}
                      onChange={(e) => setQuoteForm({ ...quoteForm, quantity: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-gray-300 focus:border-[#00684a] outline-none bg-white"
                    >
                      <option value="5-10">5 - 10 Units (8% - 12% Off)</option>
                      <option value="11-25">11 - 25 Units (15% - 18% Off)</option>
                      <option value="26-50">26 - 50 Units (20% - 24% Off)</option>
                      <option value="50+">50+ Units (Enterprise Custom Rate)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#00684a] hover:bg-[#00553c] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    Submit Quotation Request
                  </button>
                  <p className="text-[10px] text-gray-400 text-center mt-2">
                    🔒 No obligation quote. We respect your confidentiality.
                  </p>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
