import React, { useState } from 'react';
import { 
  Smartphone, 
  Tablet, 
  Watch, 
  Laptop, 
  Headphones, 
  Volume2, 
  Gamepad2, 
  Camera, 
  Tv, 
  Activity, 
  Zap, 
  Shield, 
  HardDrive, 
  MoreHorizontal, 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Leaf 
} from 'lucide-react';
import heroBg from '../assets/hero1.png';

export default function MegaMenu({ 
  isOpen, 
  onClose, 
  onSelectCategory, 
  onSelectBrand, 
  onSelectFilter,
  onMouseEnter,
  onMouseLeave,
}) {
  const [selectedSidebarCat, setSelectedSidebarCat] = useState('Mobiles');

  if (!isOpen) return null;

  // Sidebar 14 categories
  const sidebarCategories = [
    { id: 'mobiles', name: 'Mobiles', icon: Smartphone },
    { id: 'tablets', name: 'Tablets', icon: Tablet },
    { id: 'smartwatches', name: 'Smartwatches', icon: Watch },
    { id: 'laptops', name: 'Laptops', icon: Laptop },
    { id: 'accessories', name: 'Accessories', icon: Headphones },
    { id: 'audio', name: 'Audio', icon: Volume2 },
    { id: 'gaming', name: 'Gaming', icon: Gamepad2 },
    { id: 'cameras', name: 'Cameras', icon: Camera },
    { id: 'tv-home', name: 'TV & Smart Home', icon: Tv },
    { id: 'wearables', name: 'Wearables', icon: Activity },
    { id: 'power', name: 'Power & Chargers', icon: Zap },
    { id: 'cases', name: 'Cases & Covers', icon: Shield },
    { id: 'storage', name: 'Storage', icon: HardDrive },
    { id: 'others', name: 'Others', icon: MoreHorizontal },
  ];

  // Column 2: Mobiles Subcategories
  const mobileSubcategories = [
    'All Mobiles',
    '5G Phones',
    'Android Phones',
    'iPhones',
    'Refurbished Phones',
    'New Arrivals',
    'Best Sellers',
    'Budget Phones (Under ₹15,000)',
    'Premium Phones (Above ₹50,000)',
  ];

  // Column 3: 12 Brands with official-styled logo marks
  const brands = [
    {
      name: 'Apple',
      logo: (
        <svg viewBox="0 0 170 170" className="w-3.5 h-3.5 text-black fill-current flex-shrink-0">
          <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.74 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.08-7.77-8.08-12.24-15.01-6.73-10.46-11.83-22.11-15.3-34.95-3.47-12.84-5.2-24.62-5.2-35.34 0-16.14 4.09-29.43 12.27-39.88 8.18-10.45 18.25-15.77 30.2-15.96 4.35 0 9.28 1.15 14.79 3.44 5.51 2.29 9.17 3.49 10.99 3.6 2.05-.22 5.92-1.51 11.61-3.87 5.69-2.36 10.74-3.44 15.15-3.23 11.24.54 20.44 4.41 27.6 11.62 7.16 7.21 11.64 16.27 13.43 27.18-10.05 6.09-15.07 14.74-15.07 25.96 0 9.04 3.69 16.79 11.07 23.24 7.38 6.45 16.03 10.37 25.96 11.77-2.12 6.53-4.58 12.94-7.38 19.23zM119.22 33.14c0-7.38 2.65-14.28 7.95-20.7 5.3-6.42 11.7-10.57 19.2-12.44.45 1.57.67 3.23.67 4.98 0 7.49-2.73 14.44-8.19 20.86-5.46 6.42-12.02 10.49-19.68 12.21-.45-1.57-.67-3.23-.67-4.91z"/>
        </svg>
      )
    },
    {
      name: 'Samsung',
      logo: (
        <div className="w-5 h-2.5 bg-[#034ea2] rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
          <span className="text-[5.5px] font-black text-white tracking-tighter leading-none font-sans">SAMSUNG</span>
        </div>
      )
    },
    {
      name: 'OnePlus',
      logo: (
        <div className="w-4 h-4 bg-[#eb0028] rounded-[3px] flex items-center justify-center text-white font-black text-[9px] leading-none flex-shrink-0">
          1+
        </div>
      )
    },
    {
      name: 'Xiaomi',
      logo: (
        <div className="w-4 h-4 bg-[#ff6900] rounded-[3px] flex items-center justify-center text-white font-bold text-[8.5px] leading-none flex-shrink-0">
          mi
        </div>
      )
    },
    {
      name: 'Realme',
      logo: (
        <div className="w-4 h-4 bg-[#ffc915] rounded-[3px] flex items-center justify-center text-black font-extrabold text-[10px] leading-none flex-shrink-0">
          R
        </div>
      )
    },
    {
      name: 'Vivo',
      logo: (
        <span className="font-extrabold text-[10.5px] text-[#0082f4] lowercase tracking-tight leading-none flex-shrink-0 font-sans">
          vivo
        </span>
      )
    },
    {
      name: 'Oppo',
      logo: (
        <div className="w-4 h-2 bg-[#00875a] rounded-full flex items-center justify-center flex-shrink-0" />
      )
    },
    {
      name: 'Google Pixel',
      logo: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 flex-shrink-0">
          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.25 21.37 7.33 24 12 24z"/>
          <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.97 0 12s.46 3.84 1.26 5.42l4.02-3.15z"/>
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.25 2.63 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
        </svg>
      )
    },
    {
      name: 'Motorola',
      logo: (
        <div className="w-4 h-4 rounded-full bg-[#001438] flex items-center justify-center text-white font-extrabold text-[8.5px] leading-none flex-shrink-0">
          M
        </div>
      )
    },
    {
      name: 'Nothing',
      logo: (
        <span className="font-mono text-[9px] uppercase font-bold text-gray-900 leading-none flex-shrink-0">
          (N)
        </span>
      )
    },
    {
      name: 'Infinix',
      logo: (
        <span className="font-bold text-[9px] text-gray-900 tracking-tight font-sans leading-none flex-shrink-0">
          infinix
        </span>
      )
    },
    {
      name: 'Tecno',
      logo: (
        <span className="font-black text-[9px] text-[#0055ff] tracking-wider uppercase font-sans leading-none flex-shrink-0">
          TCO
        </span>
      )
    },
  ];

  // Column 4: Price Ranges & Features
  const priceRanges = [
    'Under ₹10,000',
    '₹10,000 - ₹20,000',
    '₹20,000 - ₹30,000',
    '₹30,000 - ₹50,000',
    'Above ₹50,000',
  ];

  const features = [
    'Best Camera Phones',
    'Best Gaming Phones',
    'Long Battery Life',
    'Curved Display Phones',
    'Foldable Phones',
    'Dual SIM Phones',
    'Water Resistant Phones',
  ];

  return (
    <>
      {/* Backdrop overlay below header - does NOT block navbar or hover bridge */}
      <div 
        onClick={onClose}
        className="fixed inset-x-0 bottom-0 top-[106px] bg-black/25 z-20 transition-opacity backdrop-blur-2xs"
      />

      {/* Mega Menu Dropdown Container */}
      <div 
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="absolute top-full -mt-[1px] left-0 w-full bg-white z-50 border-b border-gray-200/90 shadow-2xl transition-all duration-200 ease-out max-h-[calc(100vh-115px)] overflow-y-auto"
      >
        <div className="w-full px-4 lg:px-6 xl:px-8 py-5">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 xl:gap-6 items-start">

            {/* Column 1: Categories Sidebar (2.5 of 12 cols) */}
            <div className="lg:col-span-3 xl:col-span-2 border-r border-gray-100 pr-2 flex flex-col gap-0.5">
              {sidebarCategories.map((item) => {
                const IconComponent = item.icon;
                const isActive = selectedSidebarCat === item.name;

                return (
                  <button
                    key={item.id}
                    onMouseEnter={() => setSelectedSidebarCat(item.name)}
                    onClick={() => {
                      setSelectedSidebarCat(item.name);
                      if (item.name !== 'Mobiles' && onSelectCategory) {
                        onSelectCategory(item.name);
                      }
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all group cursor-pointer ${
                      isActive
                        ? 'bg-[#ecfdf5] text-[#059669] font-bold shadow-2xs'
                        : 'text-gray-700 hover:text-gray-950 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <IconComponent className={`w-4 h-4 flex-shrink-0 transition-colors ${
                        isActive ? 'text-[#059669]' : 'text-gray-500 group-hover:text-gray-800'
                      }`} />
                      <span className="text-[12.5px] leading-none">{item.name}</span>
                    </div>
                    <ChevronRight className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${
                      isActive ? 'text-[#059669] translate-x-0.5' : 'text-gray-400 group-hover:text-gray-700'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Column 2: Mobiles Subcategories (2 of 12 cols) */}
            <div className="lg:col-span-2 flex flex-col">
              <h3 className="text-sm lg:text-[14.5px] font-extrabold text-gray-950 mb-3 pb-0.5">
                Mobiles
              </h3>
              <ul className="flex flex-col gap-2">
                {mobileSubcategories.map((subcat) => (
                  <li key={subcat}>
                    <button
                      onClick={() => {
                        if (onSelectFilter) onSelectFilter(subcat);
                        onClose();
                      }}
                      className="text-[12.5px] text-gray-600 hover:text-[#00684a] hover:translate-x-1 font-medium text-left transition-all block"
                    >
                      {subcat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Shop by Brand (2.5 of 12 cols) */}
            <div className="lg:col-span-3 xl:col-span-2 flex flex-col">
              <h3 className="text-sm lg:text-[14.5px] font-extrabold text-gray-950 mb-3 pb-0.5">
                Shop by Brand
              </h3>
              <div className="flex flex-col gap-1.5">
                {brands.map((brand) => (
                  <button
                    key={brand.name}
                    onClick={() => {
                      if (onSelectBrand) onSelectBrand(brand.name);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between py-1 px-1 rounded-md text-gray-700 hover:text-[#00684a] hover:bg-emerald-50/60 font-medium text-[12.5px] group transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 flex items-center justify-center">
                        {brand.logo}
                      </div>
                      <span>{brand.name}</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#00684a] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ))}
              </div>

              {/* View All Brands Button */}
              <div className="mt-3.5">
                <button
                  onClick={() => {
                    if (onSelectBrand) onSelectBrand('All Phones');
                    onClose();
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-bold text-gray-700 hover:text-[#00684a] hover:border-emerald-300 hover:bg-emerald-50/40 transition-all"
                >
                  <span>View All Brands</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Column 4: Shop by Price & Features (2 of 12 cols) */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {/* Top: Shop by Price */}
              <div>
                <h3 className="text-sm lg:text-[14.5px] font-extrabold text-gray-950 mb-2.5">
                  Shop by Price
                </h3>
                <ul className="flex flex-col gap-1.5">
                  {priceRanges.map((price) => (
                    <li key={price}>
                      <button
                        onClick={() => {
                          if (onSelectFilter) onSelectFilter(price);
                          onClose();
                        }}
                        className="text-[12.5px] text-gray-600 hover:text-[#00684a] hover:translate-x-0.5 font-medium text-left transition-all block"
                      >
                        {price}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom: Shop by Features */}
              <div>
                <h3 className="text-sm lg:text-[14.5px] font-extrabold text-gray-950 mb-2.5">
                  Shop by Features
                </h3>
                <ul className="flex flex-col gap-1.5">
                  {features.map((feat) => (
                    <li key={feat}>
                      <button
                        onClick={() => {
                          if (onSelectFilter) onSelectFilter(feat);
                          onClose();
                        }}
                        className="text-[12.5px] text-gray-600 hover:text-[#00684a] hover:translate-x-0.5 font-medium text-left transition-all block"
                      >
                        {feat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 5: Right Promo Card Banner (3 of 12 cols) */}
            <div className="lg:col-span-2 xl:col-span-3 rounded-2xl bg-gradient-to-b from-[#eef9f4] via-[#e6f5ed] to-[#d9f1e6] border border-emerald-100/90 p-4 xl:p-5 relative overflow-hidden flex flex-col justify-between shadow-2xs min-h-[380px]">
              
              {/* Top Text & CTA */}
              <div className="relative z-10 max-w-[190px] xl:max-w-[210px]">
                {/* Category Pill / Tag */}
                <div className="text-[10px] font-black tracking-[0.14em] text-[#0d3b2e] uppercase mb-1">
                  LATEST SMARTPHONES
                </div>

                {/* Headline */}
                <h2 className="text-xl xl:text-[23px] font-black text-[#0c1a24] tracking-tight leading-[1.08] mb-1.5">
                  Upgrade<br />
                  to a Smarter You
                </h2>

                {/* Subtitle */}
                <p className="text-slate-600 text-[11px] xl:text-[11.5px] font-medium leading-snug mb-3">
                  Top brands. Great prices.<br />
                  Certified second-hand phones.
                </p>

                {/* Button */}
                <button
                  onClick={() => {
                    if (onSelectCategory) onSelectCategory('Smartphones');
                    onClose();
                  }}
                  className="inline-flex items-center gap-1.5 bg-[#00684a] hover:bg-[#00523a] text-white text-xs font-semibold px-3.5 py-2 rounded-lg shadow-2xs hover:shadow transition-all group cursor-pointer"
                >
                  <span>View All Mobiles</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Graphic: Phones on Podium with soft mint radial aura */}
              <div className="absolute right-0 top-10 w-[60%] h-[58%] pointer-events-none overflow-hidden">
                {/* Mint Radial Aura behind phones */}
                <div className="absolute right-2 top-2 w-36 h-36 rounded-full bg-emerald-200/50 blur-xl" />
                
                {/* Phones image from hero1.png aligned right */}
                <img 
                  src={heroBg} 
                  alt="Phones collection" 
                  className="absolute right-[-10px] bottom-0 h-[120%] w-auto max-w-none object-cover object-right drop-shadow-md"
                />
              </div>

              {/* Bottom 4 Assurance Highlights in Promo Card */}
              <div className="relative z-10 pt-3 mt-4 border-t border-emerald-200/60 grid grid-cols-4 gap-1 text-center">
                {/* Quality Checked */}
                <div className="flex flex-col items-center">
                  <ShieldCheck className="w-5 h-5 text-[#059669] mb-1 stroke-[2.2]" />
                  <span className="text-[9px] xl:text-[9.5px] font-bold text-slate-800 leading-tight">
                    Quality<br />Checked
                  </span>
                </div>

                {/* Pan India Delivery */}
                <div className="flex flex-col items-center">
                  <Truck className="w-5 h-5 text-[#059669] mb-1 stroke-[2.2]" />
                  <span className="text-[9px] xl:text-[9.5px] font-bold text-slate-800 leading-tight">
                    Pan India<br />Delivery
                  </span>
                </div>

                {/* 7-Day Returns */}
                <div className="flex flex-col items-center">
                  <svg className="w-5 h-5 text-[#059669] mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                    <text x="12" y="15" textAnchor="middle" fontSize="8" fontWeight="800" fill="currentColor" stroke="none">7</text>
                  </svg>
                  <span className="text-[9px] xl:text-[9.5px] font-bold text-slate-800 leading-tight">
                    7-Day<br />Returns
                  </span>
                </div>

                {/* Eco-Friendly Choice */}
                <div className="flex flex-col items-center">
                  <Leaf className="w-5 h-5 text-[#059669] mb-1 stroke-[2.2]" />
                  <span className="text-[9px] xl:text-[9.5px] font-bold text-slate-800 leading-tight">
                    Eco-Friendly<br />Choice
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}
