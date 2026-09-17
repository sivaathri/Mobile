import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import CategoryNav from './components/CategoryNav';
import HeroSection from './components/HeroSection';
import BrandFilterBar from './components/BrandFilterBar';
import ProductSection from './components/ProductSection';
import TrustBadges from './components/TrustBadges';
import PromoBanners from './components/PromoBanners';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import SellPhoneModal from './components/SellPhoneModal';
import QuickViewModal from './components/QuickViewModal';
import { FEATURED_PHONES, MORE_PHONES } from './data/products';

export default function App() {
  // State management
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
  const [toastMessage, setToastMessage] = useState(null);

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

  const filteredFeatured = useMemo(() => filterList(FEATURED_PHONES), [selectedBrand, searchQuery]);
  const filteredMore = useMemo(() => filterList(MORE_PHONES), [selectedBrand, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafcfa] text-gray-800">
      
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 animate-bounce">
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
        />

        {/* Subheader / Category Navigation with Mega Menu */}
        <CategoryNav
          activeCategory={activeCategory}
          onSelectCategory={(cat) => {
            setActiveCategory(cat);
            if (cat === 'Top Deals') {
              showToast('Showing handpicked top deals below!');
            }
          }}
          onSelectBrand={(brand) => {
            setSelectedBrand(brand);
            const el = document.getElementById('featured-phones');
            el?.scrollIntoView({ behavior: 'smooth' });
            showToast(`Filtered by ${brand}`);
          }}
          onSelectFilter={(filterName) => {
            showToast(`Filtered by ${filterName}`);
            const el = document.getElementById('featured-phones');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </header>

      {/* Main Container */}
      <main className="flex-1">
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

        {/* Featured Phones Section (Row 1) */}
        <div id="featured-phones">
          <ProductSection
            title="Featured Phones"
            subtitle="Handpicked deals just for you"
            products={filteredFeatured.length > 0 ? filteredFeatured : FEATURED_PHONES}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onAddToCart={handleAddToCart}
            onQuickView={(phone) => setQuickViewProduct(phone)}
            onViewAll={() => setSelectedBrand('All Phones')}
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

        {/* 6-Item Trust & Value Badges Strip */}
        <TrustBadges />

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

    </div>
  );
}
