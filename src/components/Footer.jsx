import React, { useState, useEffect } from 'react';
import { Mail, ShieldCheck, Truck, Leaf, Phone, MapPin, Headphones, ArrowRight, RotateCcw, ArrowUp } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="w-full bg-white border-t border-gray-100 mt-12 pt-8 pb-6 text-gray-600">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">

        {/* =================================================================== */}
        {/* 1. NEWSLETTER BANNER                                                */}
        {/* =================================================================== */}
        <div className="bg-[#eef8f3] border border-[#d2ece0] rounded-2xl px-4 py-5 sm:px-6 sm:py-6 md:px-10 md:py-7 mb-8 sm:mb-10 shadow-2xs">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6">
            
            {/* Left: Envelope Icon + Title & Subtitle */}
            <div className="flex items-center gap-3.5 sm:gap-4 text-left w-full lg:w-auto">
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-white/90 border border-[#bfe7d4] flex items-center justify-center flex-shrink-0 shadow-2xs text-[#0b4d3c]">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 tracking-tight leading-snug">
                  Stay Updated with the Latest Deals!
                </h3>
                <p className="text-xs sm:text-sm text-[#3b6051] mt-0.5">
                  Subscribe to our newsletter and never miss an offer.
                </p>
              </div>
            </div>

            {/* Middle: Email Input & Subscribe Button */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full lg:w-auto max-w-xl">
              <div className="relative flex-1 sm:w-80 md:w-96 lg:w-[380px]">
                <Mail className="w-4 h-4 text-[#759c8b] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-[#cbe4d7] rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-700 text-gray-800 placeholder:text-[#8ba79b] shadow-2xs transition-all"
                />
              </div>
              <button
                type="submit"
                className="bg-[#0b4d3c] hover:bg-[#07392c] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-lg shadow-xs transition-all flex-shrink-0 cursor-pointer text-center"
              >
                {subscribed ? 'Subscribed! ✓' : 'Subscribe'}
              </button>
            </form>

            {/* Right: Paper Plane + Dotted Loop + Stylized Handwritten Tagline */}
            <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0">
              <div className="relative w-22 h-12 flex items-center justify-center">
                <svg className="w-full h-full text-[#0b4d3c]" viewBox="0 0 95 45" fill="none">
                  {/* Curved dotted flight trail */}
                  <path
                    d="M 5 38 C 0 26, 6 16, 15 16 C 24 16, 22 36, 32 36 C 42 36, 50 22, 66 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    strokeLinecap="round"
                    opacity="0.65"
                  />
                  {/* Paper airplane */}
                  <g transform="translate(64, 4) rotate(-6)">
                    <path
                      d="M 0 12 L 20 0 L 13 20 L 8 13 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M 20 0 L 8 13"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </g>
                </svg>
              </div>

              <div className="font-script text-[#0b4d3c] font-bold text-base lg:text-lg leading-[1.1] -rotate-3 select-none">
                <div>Better Phones</div>
                <div>Brighter Tomorrows</div>
              </div>
            </div>

          </div>
        </div>

        {/* =================================================================== */}
        {/* 2. VALUE PROPOSITIONS BAR (4 Features)                             */}
        {/* =================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6 border-b border-gray-100">
          
          {/* Feature 1: Quality Checked */}
          <div className="flex items-center gap-3.5 lg:justify-center lg:border-r border-gray-200/70 lg:px-4">
            <div className="w-11 h-11 rounded-full bg-[#e2f7ed] flex items-center justify-center flex-shrink-0 text-[#0b4d3c]">
              <ShieldCheck className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                Quality Checked
              </h4>
              <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 leading-tight">
                Certified & Tested Devices
              </p>
            </div>
          </div>

          {/* Feature 2: 7-Day Returns */}
          <div className="flex items-center gap-3.5 lg:justify-center lg:border-r border-gray-200/70 lg:px-4">
            <div className="w-11 h-11 rounded-full bg-[#e2f7ed] flex items-center justify-center flex-shrink-0 text-[#0b4d3c]">
              {/* Isometric box return icon */}
              <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#0b4d3c] fill-none stroke-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.5 9.4-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline strokeLinecap="round" strokeLinejoin="round" points="3.29 7 12 12.01 20.71 7" />
                <line strokeLinecap="round" strokeLinejoin="round" x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                7-Day Returns
              </h4>
              <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 leading-tight">
                Hassle-Free Returns
              </p>
            </div>
          </div>

          {/* Feature 3: Pan India Delivery */}
          <div className="flex items-center gap-3.5 lg:justify-center lg:border-r border-gray-200/70 lg:px-4">
            <div className="w-11 h-11 rounded-full bg-[#e2f7ed] flex items-center justify-center flex-shrink-0 text-[#0b4d3c]">
              <Truck className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                Pan India Delivery
              </h4>
              <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 leading-tight">
                Fast & Reliable Shipping
              </p>
            </div>
          </div>

          {/* Feature 4: Eco-Friendly Choice */}
          <div className="flex items-center gap-3.5 lg:justify-center lg:px-4">
            <div className="w-11 h-11 rounded-full bg-[#e2f7ed] flex items-center justify-center flex-shrink-0 text-[#0b4d3c]">
              <Leaf className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                Eco-Friendly Choice
              </h4>
              <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 leading-tight">
                Good for You, Good for the Planet
              </p>
            </div>
          </div>

        </div>        {/* =================================================================== */}
        {/* 3. MAIN FOOTER CONTENT (5 Columns)                                 */}
        {/* =================================================================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 pt-8 sm:pt-10 pb-10">
          
          {/* Col 1: Brand, Description, Socials, App Downloads */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 xl:col-span-4 pr-0 lg:pr-6">
            
            {/* Logo & Tagline */}
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#0b4d3c] flex items-center justify-center text-white flex-shrink-0 shadow-2xs">
                <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none stroke-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                </svg>
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-[#083e2e] block leading-none">
                  Second<span className="text-[#0e5c45]">Kart</span>
                </span>
                <span className="text-[10px] font-semibold text-[#0e5c45] tracking-wide block mt-0.5">
                  Good Phones. Greater Tomorrows.
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-500 leading-relaxed max-w-sm mt-3.5 mb-4">
              Buy and sell certified second-hand phones at the best prices. Affordable. Reliable. Sustainable.
            </p>

            {/* Social Media Circular Buttons */}
            <div className="flex items-center gap-2.5">
              {/* Facebook */}
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#182521] hover:bg-[#0b4d3c] flex items-center justify-center transition-all duration-200 shadow-2xs group"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#182521] hover:bg-[#0b4d3c] flex items-center justify-center transition-all duration-200 shadow-2xs group"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-white fill-none stroke-[2] stroke-linecap-round stroke-linejoin-round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-[#182521] hover:bg-[#0b4d3c] flex items-center justify-center transition-all duration-200 shadow-2xs group"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="#twitter"
                aria-label="X (formerly Twitter)"
                className="w-8 h-8 rounded-full bg-[#182521] hover:bg-[#0b4d3c] flex items-center justify-center transition-all duration-200 shadow-2xs group"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-[#182521] hover:bg-[#0b4d3c] flex items-center justify-center transition-all duration-200 shadow-2xs group"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
                  <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.95 4.77 0V21H22v-7.93c0-6.17-6.62-5.96-8.68-2.91V8.48z" />
                </svg>
              </a>
            </div>

            {/* Download Our App */}
            <div className="mt-6">
              <h5 className="text-xs font-bold text-gray-900 mb-2.5">
                Download Our App
              </h5>
              <div className="flex items-center gap-2.5 flex-wrap">
                {/* Google Play Store Badge */}
                <a
                  href="#playstore"
                  className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white px-3 py-1.5 rounded-lg border border-gray-800 transition-all cursor-pointer shadow-2xs"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
                    <path d="M3.6 1.8A1.8 1.8 0 0 0 3 3.3v17.4a1.8 1.8 0 0 0 .6 1.5l.1.1 9.8-9.8v-.2L3.7 1.7l-.1.1z" fill="#00E676" />
                    <path d="M16.8 15.5l-3.3-3.3v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.6 0 2.2l-3.9 2.2-.1.1z" fill="#FFC107" />
                    <path d="M13.5 12.1L3.6 22.3c.4.4 1 .5 1.7.1l11.5-6.5-3.3-3.8z" fill="#FF3D00" />
                    <path d="M13.5 11.9l3.3-3.8-11.5-6.5c-.7-.4-1.3-.3-1.7.1l9.9 10.2z" fill="#00B0FF" />
                  </svg>
                  <div className="text-left leading-none">
                    <span className="block text-[8px] font-medium text-gray-300 uppercase tracking-wider">GET IT ON</span>
                    <span className="block text-xs font-bold text-white tracking-tight mt-0.5">Google Play</span>
                  </div>
                </a>

                {/* App Store Badge */}
                <a
                  href="#appstore"
                  className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white px-3 py-1.5 rounded-lg border border-gray-800 transition-all cursor-pointer shadow-2xs"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.76 1.04-1.82.92-2.88-.9.04-1.99.6-2.63 1.36-.58.67-.99 1.74-.86 2.78 1 .08 2.03-.5 2.57-1.26z"/>
                  </svg>
                  <div className="text-left leading-none">
                    <span className="block text-[8px] font-medium text-gray-300 tracking-wider">Download on the</span>
                    <span className="block text-xs font-bold text-white tracking-tight mt-0.5">App Store</span>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Col 2: Shop */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h4 className="font-bold text-gray-900 text-xs sm:text-sm tracking-wider mb-3.5">
              Shop
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#all-phones" className="hover:text-emerald-700 transition-colors">All Phones</a></li>
              <li><a href="#smartphones" className="hover:text-emerald-700 transition-colors">Smartphones</a></li>
              <li><a href="#tablets" className="hover:text-emerald-700 transition-colors">Tablets</a></li>
              <li><a href="#smartwatches" className="hover:text-emerald-700 transition-colors">Smartwatches</a></li>
              <li><a href="#accessories" className="hover:text-emerald-700 transition-colors">Accessories</a></li>
              <li><a href="#top-deals" className="hover:text-emerald-700 transition-colors">Top Deals</a></li>
              <li><a href="#new-arrivals" className="hover:text-emerald-700 transition-colors">New Arrivals</a></li>
              <li><a href="#brand-stores" className="hover:text-emerald-700 transition-colors">Brand Stores</a></li>
              <li><a href="#bulk-orders" className="hover:text-emerald-700 transition-colors">Bulk Orders</a></li>
            </ul>
          </div>

          {/* Col 3: Help & Support */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h4 className="font-bold text-gray-900 text-xs sm:text-sm tracking-wider mb-3.5">
              Help & Support
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#track-order" className="hover:text-emerald-700 transition-colors">Track Your Order</a></li>
              <li><a href="#returns-refunds" className="hover:text-emerald-700 transition-colors">Returns & Refunds</a></li>
              <li><a href="#how-it-works" className="hover:text-emerald-700 transition-colors">How It Works</a></li>
              <li><a href="#buying-guide" className="hover:text-emerald-700 transition-colors">Buying Guide</a></li>
              <li><a href="#selling-guide" className="hover:text-emerald-700 transition-colors">Selling Guide</a></li>
              <li><a href="#faq" className="hover:text-emerald-700 transition-colors">FAQ</a></li>
              <li><a href="#contact-us" className="hover:text-emerald-700 transition-colors">Contact Us</a></li>
              <li><a href="#report-issue" className="hover:text-emerald-700 transition-colors">Report an Issue</a></li>
            </ul>
          </div>

          {/* Col 4: About SecondKart */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h4 className="font-bold text-gray-900 text-xs sm:text-sm tracking-wider mb-3.5">
              About SecondKart
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#our-story" className="hover:text-emerald-700 transition-colors">Our Story</a></li>
              <li><a href="#why-secondkart" className="hover:text-emerald-700 transition-colors">Why SecondKart</a></li>
              <li><a href="#sustainability" className="hover:text-emerald-700 transition-colors">Sustainability</a></li>
              <li><a href="#careers" className="hover:text-emerald-700 transition-colors">Careers</a></li>
              <li><a href="#partner-with-us" className="hover:text-emerald-700 transition-colors">Partner With Us</a></li>
              <li><a href="#press-media" className="hover:text-emerald-700 transition-colors">Press & Media</a></li>
              <li><a href="#terms-conditions" className="hover:text-emerald-700 transition-colors">Terms & Conditions</a></li>
              <li><a href="#privacy-policy" className="hover:text-emerald-700 transition-colors">Privacy Policy</a></li>
              <li><a href="#sitemap" className="hover:text-emerald-700 transition-colors">Sitemap</a></li>
            </ul>
          </div>

          {/* Col 5: Contact Us & Support CTA */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h4 className="font-bold text-gray-900 text-xs sm:text-sm tracking-wider mb-3.5">
              Contact Us
            </h4>
            
            <div className="space-y-2.5 text-xs">
              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0b4d3c] flex-shrink-0" />
                <a href="tel:+919551565200" className="font-semibold text-gray-800 hover:text-emerald-700">
                  +91 95515 65200
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0b4d3c] flex-shrink-0" />
                <a href="mailto:support@secondkart.com" className="text-gray-600 hover:text-emerald-700 truncate">
                  support@secondkart.com
                </a>
              </div>

              {/* Location */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0b4d3c] flex-shrink-0 mt-0.5" />
                <div className="leading-tight text-gray-600">
                  <div>Chennai, Tamil Nadu</div>
                  <div className="text-gray-500">India - 600001</div>
                </div>
              </div>
            </div>

            {/* We're Here to Help Box */}
            <div className="mt-5 pt-3">
              <h5 className="font-bold text-gray-900 text-xs leading-tight">
                We're Here to Help!
              </h5>
              <p className="text-[11px] text-gray-500 mt-0.5 mb-2.5 leading-tight">
                Mon - Sat, 9:00 AM - 7:00 PM
              </p>
              <a
                href="#support"
                className="w-full flex items-center justify-between border border-[#0b4d3c] text-[#0b4d3c] hover:bg-[#0b4d3c] hover:text-white rounded-lg py-1.5 px-3 text-xs font-semibold transition-all group shadow-2xs"
              >
                <span className="flex items-center gap-1.5">
                  <Headphones className="w-3.5 h-3.5" />
                  <span>Contact Support</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>

        {/* =================================================================== */}
        {/* 4. BOTTOM COPYRIGHT & PAYMENT METHODS BAR                          */}
        {/* =================================================================== */}
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          
          {/* Copyright */}
          <p className="text-gray-500 text-[11px] sm:text-xs text-center sm:text-left">
            © 2024 SecondKart. All rights reserved.
          </p>

          {/* Slogan in green */}
          <div className="font-bold text-[#0b4d3c] text-xs sm:text-sm tracking-wide text-center">
            Good Phones. Greater Tomorrows.
          </div>

          {/* Payment Badges: VISA, Mastercard, RuPay, UPI, Net Banking, COD */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            
            {/* VISA */}
            <div className="h-6 px-2 py-0.5 bg-white border border-gray-200 rounded flex items-center justify-center shadow-2xs hover:border-gray-300 transition-colors" title="Visa">
              <span className="font-black italic text-[#1A1F71] text-[11px] tracking-tighter">VISA</span>
            </div>

            {/* Mastercard */}
            <div className="h-6 px-2 py-0.5 bg-white border border-gray-200 rounded flex items-center justify-center shadow-2xs hover:border-gray-300 transition-colors" title="Mastercard">
              <svg className="w-6 h-4" viewBox="0 0 32 20" fill="none">
                <circle cx="10" cy="10" r="9" fill="#EB001B" />
                <circle cx="22" cy="10" r="9" fill="#F79E1B" fillOpacity="0.9" />
              </svg>
            </div>

            {/* RuPay */}
            <div className="h-6 px-2 py-0.5 bg-white border border-gray-200 rounded flex items-center justify-center gap-0.5 shadow-2xs hover:border-gray-300 transition-colors" title="RuPay">
              <span className="font-black text-[#1B365D] text-[10px] tracking-tight">RuPay</span>
              <span className="text-[#F26522] font-black text-[10px] leading-none">❯</span>
            </div>

            {/* UPI */}
            <div className="h-6 px-2 py-0.5 bg-white border border-gray-200 rounded flex items-center justify-center gap-1 shadow-2xs hover:border-gray-300 transition-colors" title="Unified Payments Interface (UPI)">
              <span className="font-bold text-gray-800 text-[10px] tracking-tight">UPI</span>
              <div className="w-2.5 h-2.5 flex items-center justify-center">
                <svg viewBox="0 0 16 16" className="w-2.5 h-2.5 fill-none">
                  <path d="M8 1L14 8L8 15" stroke="#009A44" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 1L8 8L2 15" stroke="#F26522" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Net Banking */}
            <div className="h-6 px-2 py-0.5 bg-white border border-gray-200 rounded flex items-center justify-center text-gray-700 shadow-2xs hover:border-gray-300 transition-colors" title="Net Banking">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-gray-700 fill-none stroke-2">
                <path d="M3 21h18M3 10h18M5 10v7M9 10v7M15 10v7M19 10v7M12 3L2 8h20L12 3z"/>
              </svg>
            </div>

            {/* COD */}
            <div className="h-6 px-2 py-0.5 bg-gray-50 border border-gray-200 rounded flex items-center justify-center shadow-2xs hover:border-gray-300 transition-colors" title="Cash on Delivery">
              <span className="font-bold text-gray-700 text-[9px] tracking-wider">COD</span>
            </div>

          </div>

        </div>

      </div>

      {/* Back to Top Floating Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0b4d3c] hover:bg-[#07392c] text-white flex items-center justify-center shadow-lg hover:shadow-xl border border-emerald-500/30 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 cursor-pointer group ${
          showScrollTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
        title="Back to Top"
      >
        <ArrowUp className="w-5 h-5 stroke-[2.5] group-hover:-translate-y-0.5 transition-transform duration-200" />
      </button>
    </footer>
  );
}
