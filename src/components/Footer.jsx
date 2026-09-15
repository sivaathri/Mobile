import React, { useState } from 'react';
import { Leaf } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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
    <footer className="bg-white border-t border-gray-200 mt-12 pt-12 pb-8 text-xs text-gray-600 w-full">
      <div className="w-full px-4 lg:px-6 xl:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-gray-100">
          
          {/* Col 1: Brand & Mission (4 of 12 cols) */}
          <div className="lg:col-span-4 pr-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center text-white">
                <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none stroke-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                </svg>
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-[#083e2e] block leading-none">
                  Second<span className="text-[#0e5c45]">Kart</span>
                </span>
                <span className="text-[9px] font-semibold text-emerald-800 tracking-wider block mt-0.5">
                  Good Phones. Greater Tomorrows.
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed max-w-sm mt-3">
              A trusted marketplace for buying and selling second-hand mobiles. Together for a cleaner, greener tomorrow.
            </p>
          </div>

          {/* Col 2: Shop Links (2 of 12 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-gray-900 text-xs tracking-wider mb-3">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#phones" className="hover:text-emerald-700 transition-colors">All Phones</a></li>
              <li><a href="#deals" className="hover:text-emerald-700 transition-colors">Top Deals</a></li>
              <li><a href="#new" className="hover:text-emerald-700 transition-colors">New Arrivals</a></li>
              <li><a href="#accessories" className="hover:text-emerald-700 transition-colors">Accessories</a></li>
            </ul>
          </div>

          {/* Col 3: Support Links (2 of 12 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-gray-900 text-xs tracking-wider mb-3">Support</h4>
            <ul className="space-y-2">
              <li><a href="#help" className="hover:text-emerald-700 transition-colors">Help Center</a></li>
              <li><a href="#shipping" className="hover:text-emerald-700 transition-colors">Shipping & Delivery</a></li>
              <li><a href="#returns" className="hover:text-emerald-700 transition-colors">Returns & Refunds</a></li>
              <li><a href="#contact" className="hover:text-emerald-700 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 4: Company Links (2 of 12 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-gray-900 text-xs tracking-wider mb-3">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-emerald-700 transition-colors">About Us</a></li>
              <li><a href="#careers" className="hover:text-emerald-700 transition-colors">Careers</a></li>
              <li><a href="#blog" className="hover:text-emerald-700 transition-colors">Blog</a></li>
              <li><a href="#sustainability" className="hover:text-emerald-700 transition-colors">Sustainability</a></li>
            </ul>
          </div>

          {/* Col 5: Newsletter & Eco Signature (2 of 12 cols / expanded) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-gray-900 text-xs tracking-wider mb-1">Stay Updated</h4>
            <p className="text-[11px] text-gray-500 mb-3">
              Get the latest deals and offers.
            </p>

            {/* Newsletter form */}
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex flex-col gap-1.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-3 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
                />
                <button
                  type="submit"
                  className="w-full bg-[#0b4d3c] hover:bg-[#07362a] text-white text-xs font-semibold py-1.5 px-3 rounded-md transition-colors shadow-2xs"
                >
                  {subscribed ? 'Subscribed! ✓' : 'Subscribe'}
                </button>
              </div>
            </form>

            {/* Social media icons */}
            <div className="flex items-center gap-3 mt-4 text-gray-700">
              <a href="#facebook" aria-label="Facebook" className="hover:text-emerald-800 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </a>
              <a href="#instagram" aria-label="Instagram" className="hover:text-emerald-800 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-currentColor stroke-2 stroke-linecap-round stroke-linejoin-round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#youtube" aria-label="YouTube" className="hover:text-emerald-800 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#twitter" aria-label="X (formerly Twitter)" className="hover:text-emerald-800 transition-colors">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Green Leaf Tagline */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-gray-500">
            © 2025 SecondKart. All rights reserved.
          </p>

          {/* Eco Brand Signature */}
          <div className="flex items-center gap-2 text-emerald-800">
            <Leaf className="w-5 h-5 text-emerald-600 stroke-[2]" />
            <span className="font-script text-lg text-[#0b4d3c] font-bold tracking-wide">
              Good Phones. Brighter Tomorrows.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
