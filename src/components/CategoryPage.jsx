import React, { useState, useMemo, useEffect } from 'react';
import {
  Heart,
  ShoppingCart,
  Search,
  ChevronDown,
  ChevronRight,
  SlidersHorizontal,
  X,
  MapPin,
  LayoutGrid,
  List,
  Building2,
  CheckCircle2,
  Sparkles,
  Zap,
  Tag,
  ShieldCheck,
  Truck,
  Star,
  Clock,
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
  // Category Metadata from catalog
  const meta = useMemo(() => {
    return (
      CATEGORY_METADATA[category] || {
        title: category,
        badge: 'Official Catalog',
        subtitle: `Explore genuine, warranty-backed ${category} with express delivery and best price guarantee.`,
        totalCount: `${category} Catalog`,
        icon: 'Smartphone',
        subCategories: ['All ' + category],
        brands: ['Apple', 'Samsung', 'OnePlus', 'Google Pixel', 'Xiaomi'],
      }
    );
  }, [category]);

  // Filters State matching Used Phones
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedStorage, setSelectedStorage] = useState([]);
  const [selectedRam, setSelectedRam] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('Popularity');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [currentPage, setCurrentPage] = useState(1);
  const [brandSearch, setBrandSearch] = useState('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Accordion States matching Used Phones
  const [isSubCatOpen, setIsSubCatOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isBrandOpen, setIsBrandOpen] = useState(true);
  const [isStorageOpen, setIsStorageOpen] = useState(true);
  const [isRamOpen, setIsRamOpen] = useState(true);
  const [isRatingOpen, setIsRatingOpen] = useState(false);

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

  // Reset state whenever category changes
  useEffect(() => {
    setSelectedBrand('All Brands');
    setSelectedSubCategories([]);
    setSelectedPriceRanges([]);
    setSelectedStorage([]);
    setSelectedRam([]);
    setMinRating(0);
    setInStockOnly(false);
    setCurrentPage(1);
    setBrandSearch('');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [category]);

  // Base Products for active category
  const baseCategoryProducts = useMemo(() => {
    return CATEGORY_PRODUCTS.filter((p) => p.category === category);
  }, [category]);

  // Price Ranges Definition
  const priceRangesList = useMemo(
    () => [
      { label: 'Under ₹10,000', min: 0, max: 10000 },
      { label: '₹10,000 - ₹25,000', min: 10000, max: 25000 },
      { label: '₹25,000 - ₹50,000', min: 25000, max: 50000 },
      { label: '₹50,000 - ₹80,000', min: 50000, max: 80000 },
      { label: 'Above ₹80,000', min: 80000, max: 9999999 },
    ],
    []
  );

  // Available brands in active category with product counts
  const brandsList = useMemo(() => {
    const counts = {};
    baseCategoryProducts.forEach((p) => {
      counts[p.brand] = (counts[p.brand] || 0) + 1;
    });
    if (meta.brands) {
      meta.brands.forEach((b) => {
        if (!counts[b]) counts[b] = 0;
      });
    }
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, [baseCategoryProducts, meta]);

  // Subcategories with counts
  const subCategoriesList = useMemo(() => {
    const rawSubcats = meta.subCategories || ['All ' + category];
    return rawSubcats
      .filter((s) => !s.startsWith('All'))
      .map((label) => {
        const count = baseCategoryProducts.filter((p) => p.subCategory === label).length;
        return { label, count };
      });
  }, [meta, baseCategoryProducts, category]);

  // Storage list with counts
  const storageList = useMemo(() => {
    const options = ['64 GB', '128 GB', '256 GB', '512 GB', '1 TB'];
    return options.map((label) => {
      const count = baseCategoryProducts.filter(
        (p) => p.storage === label || (p.specs && p.specs.includes(label))
      ).length;
      return { label, count };
    });
  }, [baseCategoryProducts]);

  // RAM list with counts
  const ramList = useMemo(() => {
    const options = ['4 GB', '6 GB', '8 GB', '12 GB', '16 GB'];
    return options.map((label) => {
      const count = baseCategoryProducts.filter(
        (p) => p.ram === label || (p.specs && p.specs.includes(label))
      ).length;
      return { label, count };
    });
  }, [baseCategoryProducts]);

  // Toggle Handlers
  const handleToggleSubCategory = (label) => {
    setSelectedSubCategories((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
    setCurrentPage(1);
  };

  const handleTogglePrice = (label) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
    setCurrentPage(1);
  };

  const handleToggleStorage = (label) => {
    setSelectedStorage((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
    setCurrentPage(1);
  };

  const handleToggleRam = (label) => {
    setSelectedRam((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
    setCurrentPage(1);
  };

  const handleClearAll = () => {
    setSelectedBrand('All Brands');
    setSelectedSubCategories([]);
    setSelectedPriceRanges([]);
    setSelectedStorage([]);
    setSelectedRam([]);
    setMinRating(0);
    setInStockOnly(false);
    setCurrentPage(1);
    setBrandSearch('');
    showToast?.('All filters reset');
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return baseCategoryProducts
      .filter((phone) => {
        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = phone.name.toLowerCase().includes(q);
          const matchBrand = phone.brand.toLowerCase().includes(q);
          const matchSpecs = (phone.specs || '').toLowerCase().includes(q);
          if (!matchName && !matchBrand && !matchSpecs) return false;
        }

        // Brand filter
        if (
          selectedBrand !== 'All Brands' &&
          phone.brand.toLowerCase() !== selectedBrand.toLowerCase()
        ) {
          return false;
        }

        // Subcategory filter
        if (
          selectedSubCategories.length > 0 &&
          !selectedSubCategories.includes(phone.subCategory)
        ) {
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

        // Storage filter
        if (selectedStorage.length > 0) {
          const matchesStorage = selectedStorage.some(
            (s) => phone.storage === s || (phone.specs && phone.specs.includes(s))
          );
          if (!matchesStorage) return false;
        }

        // RAM filter
        if (selectedRam.length > 0) {
          const matchesRam = selectedRam.some(
            (r) => phone.ram === r || (phone.specs && phone.specs.includes(r))
          );
          if (!matchesRam) return false;
        }

        // Customer Rating
        if (minRating > 0 && (phone.rating || 0) < minRating) {
          return false;
        }

        // In stock
        if (inStockOnly && !phone.inStock) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'Price: Low to High') return a.price - b.price;
        if (sortBy === 'Price: High to Low') return b.price - a.price;
        if (sortBy === 'Newest First') return b.id.localeCompare(a.id);
        if (sortBy === 'Highest Rated') return (b.rating || 0) - (a.rating || 0);
        return 0; // Popularity default
      });
  }, [
    baseCategoryProducts,
    searchQuery,
    selectedBrand,
    selectedSubCategories,
    selectedPriceRanges,
    selectedStorage,
    selectedRam,
    minRating,
    inStockOnly,
    sortBy,
    priceRangesList,
  ]);

  // Fallback nicely so user always sees data
  const displayItems = filteredProducts.length > 0 ? filteredProducts : baseCategoryProducts;
  const itemsPerPage = 12;
  const totalPages = Math.ceil(displayItems.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = displayItems.slice(startIndex, startIndex + itemsPerPage);

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
    }, 1600);
  };

  // Top Brands Quick Pills (derived from category metadata brands or top available)
  const topBrandPills = useMemo(() => {
    const list = ['All Brands'];
    if (meta.brands && meta.brands.length > 0) {
      meta.brands.slice(0, 10).forEach((b) => list.push(b));
    } else {
      ['Apple', 'Samsung', 'OnePlus', 'Xiaomi', 'Realme', 'Vivo', 'Oppo', 'Google', 'Motorola'].forEach((b) =>
        list.push(b)
      );
    }
    return list;
  }, [meta]);

  return (
    <div className="w-full bg-[#F8F9FA] text-gray-800 pb-16 animate-fadeIn">
      {/* Container matching Used Phones full width grid */}
      <div className="w-full mx-auto px-3 sm:px-4 lg:px-6 pt-3 sm:pt-4">
        {/* ===================================================================
            EXACT 2-COLUMN LAYOUT (Matching Used Phones Page):
            Left = Filters Sidebar starting at top baseline
            Right = Breadcrumbs + Title & Banner + Controls Bar + Product Grid + Pagination
           =================================================================== */}
        <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-5 lg:gap-6">
          
          {/* -----------------------------------------------------------------
              LEFT COLUMN: Filters Sidebar (Sticky on Desktop)
             ----------------------------------------------------------------- */}
          <aside
            className="hidden lg:block w-56 xl:w-60 flex-shrink-0 bg-white rounded-xl border border-gray-200/80 p-4 shadow-2xs sticky top-28 self-start animate-fadeInUp"
            style={{ animationDelay: '40ms' }}
          >
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

            {/* 1. Subcategories / Type Accordion */}
            {subCategoriesList.length > 0 && (
              <div className="border-b border-gray-100 py-3">
                <button
                  onClick={() => setIsSubCatOpen(!isSubCatOpen)}
                  className="w-full flex items-center justify-between text-xs font-bold text-gray-800 hover:text-gray-950 cursor-pointer"
                >
                  <span>Category Type</span>
                  <span className="text-gray-400 font-bold text-xs">
                    {isSubCatOpen ? '—' : '+'}
                  </span>
                </button>

                {isSubCatOpen && (
                  <div className="mt-2.5 space-y-2 max-h-48 overflow-y-auto pr-1 no-scrollbar">
                    {subCategoriesList.map((item) => {
                      const isChecked = selectedSubCategories.includes(item.label);
                      return (
                        <label
                          key={item.label}
                          onClick={() => handleToggleSubCategory(item.label)}
                          className="flex items-center justify-between text-xs text-gray-600 hover:text-gray-900 cursor-pointer select-none group"
                        >
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => {}}
                              className="w-3.5 h-3.5 rounded border-gray-300 text-[#00704A] focus:ring-[#00704A] cursor-pointer accent-[#00704A]"
                            />
                            <span
                              className={`group-hover:text-gray-900 truncate max-w-[120px] ${
                                isChecked ? 'font-semibold text-gray-900' : ''
                              }`}
                            >
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
            )}

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
                    const count = baseCategoryProducts.filter(
                      (p) => p.price >= item.min && p.price <= item.max
                    ).length;

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
                          <span
                            className={`group-hover:text-gray-900 ${
                              isChecked ? 'font-semibold text-gray-900' : ''
                            }`}
                          >
                            {item.label}
                          </span>
                        </div>
                        <span className="text-[11px] text-gray-400">({count})</span>
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

                  <div className="max-h-48 overflow-y-auto space-y-2 pr-1 no-scrollbar">
                    {brandsList
                      .filter((b) => b.name.toLowerCase().includes(brandSearch.toLowerCase()))
                      .map((brand) => {
                        const isChecked = selectedBrand.toLowerCase() === brand.name.toLowerCase();
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
                              <span
                                className={`group-hover:text-gray-900 ${
                                  isChecked ? 'font-semibold text-gray-900' : ''
                                }`}
                              >
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

            {/* 4. Storage Accordion (for phones/tablets) */}
            {storageList.some((s) => s.count > 0) && (
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
                    {storageList
                      .filter((item) => item.count > 0)
                      .map((item) => {
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
                              <span
                                className={`group-hover:text-gray-900 ${
                                  isChecked ? 'font-semibold text-gray-900' : ''
                                }`}
                              >
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
            )}

            {/* 5. RAM Accordion */}
            {ramList.some((r) => r.count > 0) && (
              <div className="border-b border-gray-100 py-3">
                <button
                  onClick={() => setIsRamOpen(!isRamOpen)}
                  className="w-full flex items-center justify-between text-xs font-bold text-gray-800 hover:text-gray-950 cursor-pointer"
                >
                  <span>RAM</span>
                  <span className="text-gray-400 font-bold text-xs">{isRamOpen ? '—' : '+'}</span>
                </button>

                {isRamOpen && (
                  <div className="mt-2.5 space-y-2">
                    {ramList
                      .filter((item) => item.count > 0)
                      .map((item) => {
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
                              <span
                                className={`group-hover:text-gray-900 ${
                                  isChecked ? 'font-semibold text-gray-900' : ''
                                }`}
                              >
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
            )}

            {/* 6. Rating Accordion */}
            <div className="border-b border-gray-100 py-3">
              <button
                onClick={() => setIsRatingOpen(!isRatingOpen)}
                className="w-full flex items-center justify-between text-xs font-bold text-gray-800 hover:text-gray-950 cursor-pointer"
              >
                <span>Customer Rating</span>
                <span className="text-gray-400 font-bold text-xs">{isRatingOpen ? '—' : '+'}</span>
              </button>

              {isRatingOpen && (
                <div className="mt-2.5 space-y-2">
                  {[4.5, 4.0, 3.5].map((star) => (
                    <label
                      key={star}
                      onClick={() => {
                        setMinRating(minRating === star ? 0 : star);
                        setCurrentPage(1);
                      }}
                      className="flex items-center justify-between text-xs text-gray-600 hover:text-gray-900 cursor-pointer select-none group"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={minRating === star}
                          onChange={() => {}}
                          className="w-3.5 h-3.5 rounded border-gray-300 text-[#00704A] focus:ring-[#00704A] cursor-pointer accent-[#00704A]"
                        />
                        <span className="flex items-center gap-1 font-medium">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span>{star}★ & above</span>
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* 7. In Stock Only Toggle */}
            <div className="pt-3">
              <label className="flex items-center justify-between cursor-pointer select-none">
                <span className="text-xs font-bold text-gray-800">In Stock Only</span>
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => {
                    setInStockOnly(e.target.checked);
                    setCurrentPage(1);
                  }}
                  className="w-4 h-4 rounded text-[#00704A] focus:ring-0 accent-[#00704A] cursor-pointer"
                />
              </label>
            </div>

          </aside>

          {/* -----------------------------------------------------------------
              RIGHT MAIN SECTION: BREADCRUMBS + HEADER & BANNER + CONTROLS + PRODUCT GRID + PAGINATION
             ----------------------------------------------------------------- */}
          <div className="flex-1 min-w-0 w-full">
            
            {/* 1. Breadcrumb Navigation */}
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2.5">
              <button
                onClick={onBackToHome}
                className="hover:text-[#00704A] hover:underline cursor-pointer transition-colors"
              >
                Home
              </button>
              <span className="text-gray-400">&gt;</span>
              <span className="text-gray-800 font-medium">{meta.title}</span>
            </div>

            {/* 2. Top Header: Title (left) + Right Side Banner */}
            <div
              className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4 mb-3.5 animate-fadeInUp"
              style={{ animationDelay: '60ms' }}
            >
              {/* Left Title Area */}
              <div className="flex-shrink-0 max-w-md">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-50 text-[#00704A] font-bold text-[10px] tracking-wide mb-1 uppercase">
                  <span>{meta.badge || 'Official Catalog'}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {meta.title}
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 font-normal line-clamp-2">
                  {meta.subtitle}
                </p>
              </div>

              {/* Right Panoramic Mint / Category Themed Banner */}
              <div
                className="relative flex-1 max-w-full lg:max-w-[560px] xl:max-w-[620px] rounded-xl overflow-hidden shadow-2xs border border-emerald-100 group animate-fadeInScale"
                style={{ animationDelay: '100ms' }}
              >
                {category === 'Smartphones' ? (
                  <img
                    src="/assets/latest_smartphones_banner.png"
                    alt="Latest Smartphones - Brand New. Full Warranty. 100% Original."
                    className="w-full h-auto object-cover block hover:scale-[1.01] transition-transform duration-300"
                  />
                ) : category === 'Bulk Orders' ? (
                  <div className="bg-gradient-to-r from-[#033b2b] via-[#04523b] to-[#00704a] text-white p-3.5 sm:p-4 rounded-xl flex items-center justify-between gap-3">
                    <div className="max-w-xs">
                      <span className="bg-amber-400 text-gray-950 text-[10px] font-black px-2 py-0.5 rounded">
                        B2B WHOLESALE
                      </span>
                      <h3 className="font-extrabold text-sm sm:text-base text-white mt-1">
                        Corporate Bulk Tech Orders
                      </h3>
                      <p className="text-[11px] text-emerald-100/90 mt-0.5">
                        Save up to 26% with wholesale tiered pricing & 18% GST invoice.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="px-3.5 py-2 bg-amber-400 hover:bg-amber-300 text-gray-950 font-extrabold text-xs rounded-lg shadow-sm transition-all whitespace-nowrap cursor-pointer hover:scale-105 active:scale-95 flex-shrink-0"
                    >
                      Instant B2B Quote
                    </button>
                  </div>
                ) : category === 'New Arrivals' ? (
                  <div className="bg-gradient-to-r from-[#064e3b] via-[#047857] to-[#059669] text-white p-3.5 sm:p-4 rounded-xl flex items-center justify-between gap-3 relative overflow-hidden">
                    <div className="relative z-10">
                      <span className="bg-emerald-300 text-emerald-950 text-[9.5px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                        Fresh Releases 2026
                      </span>
                      <h3 className="font-extrabold text-sm sm:text-base text-white mt-1">
                        Newly Launched Tech & Flagships
                      </h3>
                      <p className="text-[11px] text-emerald-100/90 mt-0.5">
                        Be the first to unbox next-gen devices with official warranty.
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-xs">
                      <Sparkles className="w-5 h-5 text-amber-300" />
                    </div>
                  </div>
                ) : (
                  <div className="bg-gradient-to-r from-[#033b2b] via-[#04523b] to-[#00704a] text-white p-3.5 sm:p-4 rounded-xl flex items-center justify-between gap-3 relative overflow-hidden">
                    <div>
                      <span className="bg-white/20 text-white text-[9.5px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
                        {meta.badge}
                      </span>
                      <h3 className="font-extrabold text-sm sm:text-base text-white mt-1">
                        Quality {meta.title} at Best Prices
                      </h3>
                      <p className="text-[11px] text-emerald-100/90 mt-0.5">
                        100% genuine verified products with express doorstep delivery.
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-100 font-semibold bg-black/20 px-3 py-1.5 rounded-lg">
                      <ShieldCheck className="w-4 h-4 text-emerald-300" />
                      <span>Certified</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 3. Sub-header Controls Bar */}
            <div
              className="bg-white rounded-xl border border-gray-200/80 p-2.5 sm:p-3 mb-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 shadow-2xs animate-fadeInUp"
              style={{ animationDelay: '120ms' }}
            >
              {/* Left: Count + Brand Quick-Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 no-scrollbar flex-1 min-w-0">
                {/* Count */}
                <div className="text-xs sm:text-sm font-extrabold text-gray-900 whitespace-nowrap mr-2 flex-shrink-0">
                  {meta.totalCount || `${baseCategoryProducts.length} ${meta.title}`}
                </div>

                {/* Mobile Filter Button */}
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
                >
                  <SlidersHorizontal className="w-3 h-3" />
                  <span>Filters</span>
                </button>

                {/* Brand Pills */}
                {topBrandPills.map((brandName) => {
                  const isAll = brandName === 'All Brands';
                  const isSelected = isAll
                    ? selectedBrand === 'All Brands'
                    : selectedBrand.toLowerCase() === brandName.toLowerCase();

                  return (
                    <button
                      key={brandName}
                      onClick={() => {
                        setSelectedBrand(isSelected && !isAll ? 'All Brands' : brandName);
                        setCurrentPage(1);
                      }}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 flex-shrink-0 cursor-pointer ${
                        isSelected
                          ? 'bg-[#00704A] text-white shadow-2xs border border-[#00704A]'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                      }`}
                      title={brandName}
                    >
                      {!isAll && (
                        <BrandIcon name={brandName} className="w-3.5 h-3.5 object-contain" />
                      )}
                      <span>{brandName}</span>
                    </button>
                  );
                })}

                {/* More Button */}
                <button
                  onClick={() => {
                    setIsMobileFilterOpen(true);
                    showToast?.('Use the sidebar to explore all filters & brands');
                  }}
                  className="px-2.5 py-1 rounded-full text-xs font-medium text-gray-600 hover:text-gray-900 bg-white border border-gray-200 hover:border-gray-400 flex items-center gap-0.5 whitespace-nowrap flex-shrink-0 cursor-pointer"
                >
                  <span>More</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>

              {/* Right: Sort Dropdown + Grid/List Toggle */}
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
                  <option value="Highest Rated">Highest Rated</option>
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
              viewMode === 'grid' ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5 sm:gap-3 lg:gap-3.5">
                  {paginatedProducts.map((phone, index) => {
                    const isWishlisted = wishlistIds.includes(phone.id);
                    return (
                      <div
                        key={phone.id}
                        style={{ animationDelay: `${Math.min(index * 35, 400)}ms` }}
                        className="bg-white rounded-xl border border-gray-200/80 p-2.5 sm:p-3 hover:shadow-md hover:border-purple-300 transition-all duration-200 flex flex-col justify-between group relative animate-fadeInUp"
                      >
                        {/* Top Bar: Purple / Green Badge (left) + Wishlist Heart (right) */}
                        <div className="flex items-center justify-between min-h-[22px] mb-1">
                          <span className="bg-[#7B2CBF] text-white text-[9.5px] sm:text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs tracking-wide truncate max-w-[100px]">
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
                          className="w-full h-32 sm:h-36 flex items-center justify-center my-1 cursor-pointer overflow-hidden"
                        >
                          {phone.image ? (
                            <img
                              src={phone.image}
                              alt={phone.name}
                              className="h-28 sm:h-32 w-auto max-w-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-200"
                              loading="lazy"
                            />
                          ) : (
                            <PhoneMockup
                              type={phone.graphicType || phone.imageType}
                              className="h-28 sm:h-32 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                            />
                          )}
                        </div>

                        {/* Phone Info */}
                        <div className="mt-1">
                          {/* Title */}
                          <h3
                            onClick={() => onQuickView?.(phone)}
                            className="font-bold text-xs sm:text-[13px] text-gray-900 line-clamp-1 hover:text-[#00704A] cursor-pointer transition-colors"
                            title={phone.name}
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
                            <span className="truncate">{phone.city || 'Express Delivery'}</span>
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
                /* List View */
                <div className="space-y-3">
                  {paginatedProducts.map((phone) => {
                    const isWishlisted = wishlistIds.includes(phone.id);
                    return (
                      <div
                        key={phone.id}
                        className="bg-white rounded-xl border border-gray-200/80 p-3 hover:shadow-md hover:border-[#00704A]/40 transition-all flex flex-col sm:flex-row items-center justify-between gap-4 group"
                      >
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                          <div
                            onClick={() => onQuickView?.(phone)}
                            className="w-24 h-24 flex-shrink-0 flex items-center justify-center cursor-pointer overflow-hidden rounded-lg bg-gray-50 p-2"
                          >
                            {phone.image ? (
                              <img
                                src={phone.image}
                                alt={phone.name}
                                className="h-20 w-auto object-contain group-hover:scale-105 transition-transform"
                              />
                            ) : (
                              <PhoneMockup
                                type={phone.graphicType || phone.imageType}
                                className="h-20 w-auto object-contain group-hover:scale-105 transition-transform"
                              />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="bg-[#7B2CBF] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs">
                                {phone.tag || 'Certified'}
                              </span>
                              <span className="text-xs text-gray-500 font-medium">
                                {phone.brand}
                              </span>
                            </div>
                            <h3
                              onClick={() => onQuickView?.(phone)}
                              className="font-bold text-sm text-gray-900 hover:text-[#00704A] cursor-pointer"
                            >
                              {phone.name}
                            </h3>
                            <p className="text-xs text-gray-500 mt-0.5">{phone.specs}</p>
                            <div className="flex items-center gap-1 text-xs text-gray-500 mt-1.5">
                              <MapPin className="w-3.5 h-3.5 text-[#00704A]" />
                              <span>{phone.city || 'Express Delivery'}</span>
                              <span className="mx-1.5 text-gray-300">•</span>
                              <span className="text-emerald-700 font-medium">
                                {phone.warranty || '1 Year Official Warranty'}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 flex-shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-gray-100">
                          <div className="text-right">
                            <div className="font-black text-base sm:text-lg text-gray-950">
                              ₹{phone.price.toLocaleString('en-IN')}
                            </div>
                            {phone.originalPrice && (
                              <div className="text-xs text-gray-400 line-through">
                                ₹{phone.originalPrice.toLocaleString('en-IN')}
                              </div>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => onToggleWishlist(phone.id)}
                              className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                              <Heart
                                className={`w-4 h-4 ${
                                  isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'
                                }`}
                              />
                            </button>
                            <button
                              onClick={() => onAddToCart(phone)}
                              className="px-4 py-2 rounded-lg border border-[#00704A] text-[#00704A] hover:bg-[#00704A] hover:text-white font-semibold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
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
              )
            ) : (
              <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                <p className="text-gray-500 text-sm">No items match the selected filter criteria.</p>
                <button
                  onClick={handleClearAll}
                  className="mt-3 px-4 py-2 rounded-lg bg-[#00704A] text-white text-xs font-semibold hover:bg-[#005a3b] cursor-pointer"
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
                Showing {displayItems.length > 0 ? startIndex + 1 : 0}-
                {Math.min(startIndex + itemsPerPage, displayItems.length)} of {displayItems.length}{' '}
                products
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

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-7 h-7 rounded text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer ${
                      currentPage === pageNum
                        ? 'bg-[#00704A] text-white'
                        : 'border border-gray-200 hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages || totalPages === 0}
                  className="w-7 h-7 rounded border border-gray-200 hover:bg-gray-50 flex items-center justify-center text-xs text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  →
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ===================================================================
          MOBILE FILTER DRAWER MODAL
         =================================================================== */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex bg-black/50 backdrop-blur-2xs lg:hidden animate-fadeIn">
          <div className="bg-white w-4/5 max-w-xs h-full p-4 overflow-y-auto ml-auto flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-4">
                <h3 className="font-extrabold text-sm text-gray-900">Filters</h3>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1 rounded hover:bg-gray-100 text-gray-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Subcategories */}
              {subCategoriesList.length > 0 && (
                <div className="mb-4 pb-3 border-b border-gray-100">
                  <div className="text-xs font-bold text-gray-900 mb-2">Category Type</div>
                  <div className="space-y-2">
                    {subCategoriesList.map((item) => {
                      const isChecked = selectedSubCategories.includes(item.label);
                      return (
                        <label
                          key={item.label}
                          onClick={() => handleToggleSubCategory(item.label)}
                          className="flex items-center justify-between text-xs text-gray-700 cursor-pointer"
                        >
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => {}}
                              className="rounded text-[#00704A] accent-[#00704A]"
                            />
                            <span>{item.label}</span>
                          </div>
                          <span className="text-gray-400">({item.count})</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Brands */}
              <div className="mb-4 pb-3 border-b border-gray-100">
                <div className="text-xs font-bold text-gray-900 mb-2">Brands</div>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {brandsList.map((brand) => (
                    <label
                      key={brand.name}
                      onClick={() => {
                        setSelectedBrand(selectedBrand === brand.name ? 'All Brands' : brand.name);
                        setCurrentPage(1);
                      }}
                      className="flex items-center justify-between text-xs text-gray-700 cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedBrand === brand.name}
                          onChange={() => {}}
                          className="rounded text-[#00704A] accent-[#00704A]"
                        />
                        <span>{brand.name}</span>
                      </div>
                      <span className="text-gray-400">({brand.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Ranges */}
              <div className="mb-4 pb-3 border-b border-gray-100">
                <div className="text-xs font-bold text-gray-900 mb-2">Price Range</div>
                <div className="space-y-2">
                  {priceRangesList.map((item) => {
                    const isChecked = selectedPriceRanges.includes(item.label);
                    return (
                      <label
                        key={item.label}
                        onClick={() => handleTogglePrice(item.label)}
                        className="flex items-center justify-between text-xs text-gray-700 cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            className="rounded text-[#00704A] accent-[#00704A]"
                          />
                          <span>{item.label}</span>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex gap-2">
              <button
                onClick={handleClearAll}
                className="flex-1 py-2 rounded-lg border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-50"
              >
                Reset All
              </button>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="flex-1 py-2 rounded-lg bg-[#00704A] text-xs font-semibold text-white hover:bg-[#005a3b]"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================
          B2B BULK QUOTE MODAL (for Bulk Orders)
         =================================================================== */}
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
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#00704A] flex items-center justify-center">
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
                <h4 className="text-base font-bold text-gray-900">Quote Request Submitted!</h4>
                <p className="text-xs text-gray-500 mt-1">
                  Our Corporate Account Manager will contact you within 2 business hours.
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
                      onChange={(e) =>
                        setQuoteForm({ ...quoteForm, companyName: e.target.value })
                      }
                      placeholder="e.g. Acme Corp Ltd"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-gray-300 focus:border-[#00704A] outline-none"
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
                      className="w-full text-xs px-3 py-2 rounded-lg border border-gray-300 focus:border-[#00704A] outline-none uppercase"
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
                      onChange={(e) =>
                        setQuoteForm({ ...quoteForm, contactName: e.target.value })
                      }
                      placeholder="Your Name"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-gray-300 focus:border-[#00704A] outline-none"
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
                      className="w-full text-xs px-3 py-2 rounded-lg border border-gray-300 focus:border-[#00704A] outline-none"
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
                      onChange={(e) =>
                        setQuoteForm({ ...quoteForm, modelRequirement: e.target.value })
                      }
                      placeholder="e.g. Samsung A15 5G / iPhone 14"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-gray-300 focus:border-[#00704A] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Approx Quantity
                    </label>
                    <select
                      value={quoteForm.quantity}
                      onChange={(e) => setQuoteForm({ ...quoteForm, quantity: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-gray-300 focus:border-[#00704A] outline-none bg-white"
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
                    className="w-full py-2.5 bg-[#00704A] hover:bg-[#005a3b] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    Submit Quotation Request
                  </button>
                  <p className="text-[10px] text-gray-400 text-center mt-2">
                    🔒 No obligation quote. GST input credit documentation guaranteed.
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
