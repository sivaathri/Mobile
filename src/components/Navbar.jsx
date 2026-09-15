import React, { useState } from 'react';
import { Search, MapPin, Heart, ShoppingCart, User, Plus, ChevronDown } from 'lucide-react';

export default function Navbar({ 
  cartCount = 0, 
  wishlistCount = 0, 
  onOpenCart, 
  onOpenSellModal,
  searchQuery,
  setSearchQuery,
  selectedCity,
  setSelectedCity
}) {
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const cities = ['All India', 'Chennai', 'Bangalore', 'Coimbatore', 'Madurai', 'Trichy', 'Salem', 'Hyderabad', 'Mumbai', 'Delhi'];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-[0_1px_3px_rgba(0,0,0,0.04)] w-full">
      <div className="w-full px-4 lg:px-6 xl:px-8 py-3 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center text-white shadow-sm ring-4 ring-emerald-50">
            {/* Eco Leaf Recycled Icon */}
            <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-white fill-none stroke-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
            </svg>
          </div>
          <div>
            <span className="text-[22px] font-extrabold tracking-tight text-[#083e2e] leading-none block">
              Second<span className="text-[#0e5c45]">Kart</span>
            </span>
            <span className="text-[10px] font-medium text-emerald-800 tracking-wider block mt-0.5">
              Good Phones. Greater Tomorrows.
            </span>
          </div>
        </div>

        {/* Search Bar with Location Selector & Search Button */}
        <div className="flex-1 max-w-2xl xl:max-w-3xl ml-8 lg:ml-20 xl:ml-32 mr-4 lg:mr-8 hidden md:block">
          <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50/50 hover:border-gray-300 focus-within:border-emerald-600 focus-within:bg-white transition-all overflow-hidden shadow-sm">
            {/* Magnifying Glass & Input */}
            <div className="flex items-center flex-1 pl-4 pr-3 py-2">
              <Search className="w-4 h-4 text-gray-400 mr-2.5 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for iPhone, Samsung, OnePlus and more..."
                className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
              />
            </div>

            {/* City Dropdown Separator */}
            <div className="relative border-l border-gray-200">
              <button
                type="button"
                onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-gray-700 hover:text-gray-900 bg-gray-50/70"
              >
                <MapPin className="w-3.5 h-3.5 text-gray-500" />
                <span className="whitespace-nowrap">{selectedCity}</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              {isCityDropdownOpen && (
                <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        setIsCityDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs hover:bg-emerald-50 hover:text-emerald-800 ${
                        selectedCity === city ? 'font-bold text-emerald-700 bg-emerald-50/60' : 'text-gray-600'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Submit Button */}
            <button 
              type="button"
              className="bg-[#0b4d3c] hover:bg-[#083d2f] text-white px-4 py-2.5 flex items-center justify-center transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Actions: Sell Button, Wishlist, Cart, Account */}
        <div className="flex items-center gap-4 lg:gap-6 flex-shrink-0">
          {/* Sell Your Phone CTA */}
          <button
            onClick={onOpenSellModal}
            className="flex items-center gap-1.5 bg-[#0b4d3c] hover:bg-[#07362a] text-white text-xs lg:text-sm font-semibold px-3.5 py-2 rounded-lg shadow-sm transition-all hover:shadow"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Sell Your Phone</span>
          </button>

          {/* Wishlist */}
          <button className="flex items-center gap-1.5 text-gray-700 hover:text-emerald-800 text-xs lg:text-sm font-medium transition-colors relative">
            <div className="relative">
              <Heart className="w-5 h-5 text-gray-600 hover:text-emerald-700 transition-colors" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-rose-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </div>
            <span className="hidden sm:inline">Wishlist</span>
          </button>

          {/* Cart */}
          <button 
            onClick={onOpenCart}
            className="flex items-center gap-1.5 text-gray-700 hover:text-emerald-800 text-xs lg:text-sm font-medium transition-colors relative"
          >
            <div className="relative">
              <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-emerald-700 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-emerald-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden sm:inline">Cart</span>
          </button>

          {/* Account */}
          <button className="flex items-center gap-1.5 text-gray-700 hover:text-emerald-800 text-xs lg:text-sm font-medium transition-colors">
            <User className="w-5 h-5 text-gray-600" />
            <span className="hidden sm:inline">Account</span>
          </button>
        </div>

      </div>

      {/* Mobile Search Bar View */}
      <div className="p-3 border-t border-gray-100 md:hidden bg-gray-50/50">
        <div className="flex items-center border border-gray-200 rounded-lg bg-white px-3 py-1.5 shadow-sm">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search phones, brands..."
            className="w-full bg-transparent text-sm text-gray-800 focus:outline-none"
          />
        </div>
      </div>
    </header>
  );
}
