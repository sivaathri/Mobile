import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import CategoryNav from './components/CategoryNav';
import HeroSection from './components/HeroSection';
import BrandFilterBar from './components/BrandFilterBar';
import ProductSection from './components/ProductSection';
import FeaturedPhonesDual from './components/FeaturedPhonesDual';
import PromoBanners from './components/PromoBanners';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import SellPhoneModal from './components/SellPhoneModal';
import QuickViewModal from './components/QuickViewModal';
import OffersPopupModal from './components/OffersPopupModal';
import NewPhonesPage from './components/NewPhonesPage';
import UsedPhonesPage from './components/UsedPhonesPage';
import { FEATURED_PHONES, MORE_PHONES, LATEST_NEW_PHONES, QUALITY_PREOWNED_PHONES } from './data/products';

export default function App() {
  // State management
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'new-phones' | 'used-phones'
  const [selectedBrand, setSelectedBrand] = useState('All Phones');
  const [activeCategory, setActiveCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('All India');
  
  // Cart & Wishlist state
  const [cartItems, setCartItems] = useState([
    FEATURED_PHONES[0], // Start with iPhone 14 in cart as a nice sample
  ]);
  const [wishlistIds, setWishlistIds] = useState(['feat-1', 'feat-3']);
  
  // Modals & Drawers state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSellModalOpen, setIsSellModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isOffersPopupOpen, setIsOffersPopupOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Always start at the top of the screen on refresh and initial mount
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Immediate scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Handle deferred browser scroll restoration
    const scrollTimer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 10);

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearTimeout(scrollTimer);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Scroll to top whenever switching main view
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentView]);

  // Show exclusive offers popup on home screen initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOffersPopupOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Cart actions
  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    showToast(`Added "${product.name}" to cart!`);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  // Wishlist actions
  const handleToggleWishlist = (product) => {
    if (wishlistIds.includes(product.id)) {
      setWishlistIds((prev) => prev.filter((id) => id !== product.id));
      showToast(`Removed from Wishlist`);
    } else {
      setWishlistIds((prev) => [...prev, product.id]);
      showToast(`Added "${product.name}" to Wishlist! ❤️`);
    }
  };

  // Filter phones based on active Brand & Search
  const filterList = (list) => {
    return list.filter((phone) => {
      const matchBrand =
        selectedBrand === 'All Phones' ||
        selectedBrand === 'All' ||
        phone.brand.toLowerCase() === selectedBrand.toLowerCase() ||
        phone.name.toLowerCase().includes(selectedBrand.toLowerCase());

      const matchSearch =
        !searchQuery.trim() ||
        phone.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        phone.specs.toLowerCase().includes(searchQuery.toLowerCase()) ||
        phone.brand.toLowerCase().includes(searchQuery.toLowerCase());

      return matchBrand && matchSearch;
    });
  };

  const filteredNewPhones = useMemo(() => {
    if (selectedBrand === 'All Phones' && !searchQuery.trim()) return LATEST_NEW_PHONES;
    const res = filterList(LATEST_NEW_PHONES);
    return res.length > 0 ? res : LATEST_NEW_PHONES;
  }, [selectedBrand, searchQuery]);

  const filteredPreOwnedPhones = useMemo(() => {
    if (selectedBrand === 'All Phones' && !searchQuery.trim()) return QUALITY_PREOWNED_PHONES;
    const res = filterList(QUALITY_PREOWNED_PHONES);
    return res.length > 0 ? res : QUALITY_PREOWNED_PHONES;
  }, [selectedBrand, searchQuery]);

  const filteredFeatured = useMemo(() => filterList(FEATURED_PHONES), [selectedBrand, searchQuery]);
  const filteredMore = useMemo(() => filterList(MORE_PHONES), [selectedBrand, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafcfa] text-gray-800">
      
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-20 right-6 z-50 bg-gray-900 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Unified Sticky Header */}
      <header className="sticky top-0 z-40 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] w-full">
        {/* Top Navbar */}
        <Navbar
          cartCount={cartItems.length}
          wishlistCount={wishlistIds.length}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenSellModal={() => setIsSellModalOpen(true)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          onGoHome={() => {
            setCurrentView('home');
            setActiveCategory('All Categories');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* Subheader / Category Navigation with Mega Menu */}
        <CategoryNav
          activeCategory={currentView === 'new-phones' ? 'New Phones' : currentView === 'used-phones' ? 'Used Phones' : activeCategory}
          onSelectCategory={(cat) => {
            if (cat === 'New Phones') {
              setCurrentView('new-phones');
              setActiveCategory('New Phones');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (cat === 'Used Phones') {
              setCurrentView('used-phones');
              setActiveCategory('Used Phones');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              setCurrentView('home');
              setActiveCategory(cat);
              if (cat === 'Top Deals') {
                showToast('Showing handpicked top deals below!');
              }
            }
          }}
          onSelectBrand={(brand) => {
            setCurrentView('home');
            setSelectedBrand(brand);
            const el = document.getElementById('featured-phones');
            el?.scrollIntoView({ behavior: 'smooth' });
            showToast(`Filtered by ${brand}`);
          }}
          onSelectFilter={(filterName) => {
            if (filterName === 'New Phones') {
              setCurrentView('new-phones');
              setActiveCategory('New Phones');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (filterName === 'Used Phones' || filterName === 'Refurbished Phones') {
              setCurrentView('used-phones');
              setActiveCategory('Used Phones');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              setCurrentView('home');
              showToast(`Filtered by ${filterName}`);
              const el = document.getElementById('featured-phones');
              el?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
      </header>

      {/* Main Container */}
      <main className="flex-1">
        {currentView === 'new-phones' ? (
          <NewPhonesPage
            onBackToHome={() => {
              setCurrentView('home');
              setActiveCategory('All Categories');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onAddToCart={handleAddToCart}
            onQuickView={(phone) => setQuickViewProduct(phone)}
            showToast={showToast}
          />
        ) : currentView === 'used-phones' ? (
          <UsedPhonesPage
            onGoHome={() => {
              setCurrentView('home');
              setActiveCategory('All Categories');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onAddToCart={handleAddToCart}
            onQuickView={(phone) => setQuickViewProduct(phone)}
            showToast={showToast}
          />
        ) : (
          <>
            {/* Hero Section */}
            <HeroSection
              onExplore={() => {
                const el = document.getElementById('featured-phones');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onSellClick={() => setIsSellModalOpen(true)}
              onViewDeals={() => {
                setSelectedBrand('All Phones');
                const el = document.getElementById('featured-phones');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Brand & Category Filter Slider */}
            <BrandFilterBar
              selectedBrand={selectedBrand}
              onSelectBrand={(brand) => {
                setSelectedBrand(brand);
                if (brand !== 'All Phones') {
                  showToast(`Filtered by ${brand}`);
                }
              }}
            />

            {/* Active Filter Indicator if filtered */}
            {selectedBrand !== 'All Phones' && (
              <div className="w-full px-4 lg:px-6 xl:px-8 py-1 flex items-center justify-between">
                <div className="text-xs text-gray-500 flex items-center gap-2">
                  <span>Showing results for:</span>
                  <span className="font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {selectedBrand}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedBrand('All Phones')}
                  className="text-xs text-emerald-700 hover:underline font-medium"
                >
                  Reset to All Phones
                </button>
              </div>
            )}

            {/* Featured Phones Section - Exact Side-by-Side UI (Latest New Phones & Quality Pre-Owned Phones) */}
            <div id="featured-phones">
              <FeaturedPhonesDual
                newPhones={filteredNewPhones}
                preOwnedPhones={filteredPreOwnedPhones}
                wishlistIds={wishlistIds}
                onToggleWishlist={handleToggleWishlist}
                onAddToCart={handleAddToCart}
                onQuickView={(phone) => setQuickViewProduct(phone)}
                onViewAllNew={() => {
                  setCurrentView('new-phones');
                  setActiveCategory('New Phones');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  showToast('Viewing All New Phones');
                }}
                onViewAllPreOwned={() => {
                  setCurrentView('used-phones');
                  setActiveCategory('Used Phones');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  showToast('Viewing All Used Phones');
                }}
              />
            </div>

            {/* More Phones for You Section (Row 2) */}
            <div id="more-phones">
              <ProductSection
                title="More Phones for You"
                subtitle="Explore a wider range of options"
                products={filteredMore.length > 0 ? filteredMore : MORE_PHONES}
                wishlistIds={wishlistIds}
                onToggleWishlist={handleToggleWishlist}
                onAddToCart={handleAddToCart}
                onQuickView={(phone) => setQuickViewProduct(phone)}
                onViewAll={() => setSelectedBrand('All Phones')}
              />
            </div>

            {/* 4 Bottom Promotional Banners */}
            <PromoBanners
              onPromoClick={(type) => {
                if (type === 'Exchange') {
                  setIsSellModalOpen(true);
                } else {
                  showToast(`Opening ${type} offers...`);
                }
              }}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={() => {
          alert('Proceeding to Secure Gateway! Order total: ₹' + cartItems.reduce((s, c) => s + c.price, 0).toLocaleString('en-IN'));
          setIsCartOpen(false);
        }}
      />

      {/* Interactive Sell Phone Modal */}
      <SellPhoneModal
        isOpen={isSellModalOpen}
        onClose={() => setIsSellModalOpen(false)}
      />

      {/* Interactive Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Initial Home Screen Exclusive Offers Popup Modal */}
      <OffersPopupModal
        isOpen={isOffersPopupOpen}
        onClose={() => setIsOffersPopupOpen(false)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        wishlistIds={wishlistIds}
        onViewAllNew={() => {
          setIsOffersPopupOpen(false);
          setCurrentView('new-phones');
          setActiveCategory('New Phones');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onQuickView={(prod) => {
          setIsOffersPopupOpen(false);
          setQuickViewProduct(prod);
        }}
      />

    </div>
  );
}
