import React, { useState } from 'react';
import {
  MapPin,
  Truck,
  ShieldCheck,
  Check,
  ArrowLeft,
  ArrowRight,
  Gift,
  RotateCcw,
  Tag,
  CreditCard,
  Building,
  Plus,
  Edit2,
  Trash2,
  Info,
  CheckCircle2,
  Phone,
  Lock,
  Sparkles,
  ShoppingBag,
  Clock,
  Radio
} from 'lucide-react';
import { DualPhoneGraphic } from './ProductDetailsPage';
import { PhoneMockup } from './PhoneGraphics';

export default function CheckoutPage({
  product,
  cartItems = [],
  onBack,
  onOrderComplete,
  showToast,
}) {
  // Active checkout step: 1: Delivery Address | 2: Payment | 3: Order Review | 4: Confirmation
  const [currentStep, setCurrentStep] = useState(1);

  // Address selection state
  const [selectedAddressId, setSelectedAddressId] = useState('home');
  const [addresses, setAddresses] = useState([
    {
      id: 'home',
      type: 'Home',
      isDefault: true,
      name: 'Siva Athri',
      addressLine1: 'No. 12, 3rd Cross Street, Lawspet',
      addressLine2: 'Puducherry - 605008',
      state: 'Puducherry',
      phone: '+91 98765 43210',
    },
    {
      id: 'office',
      type: 'Office',
      isDefault: false,
      name: 'Siva Athri',
      addressLine1: 'AAHA Solutions, 4th Floor, XYZ Tower',
      addressLine2: 'Perungudi, Chennai - 600096',
      state: 'Tamil Nadu',
      phone: '+91 98765 43210',
    },
  ]);

  // Delivery options state: 'standard' (FREE) | 'express' (₹99)
  const [deliveryOption, setDeliveryOption] = useState('standard');

  // Add protection / extended warranty
  const [hasExtendedWarranty, setHasExtendedWarranty] = useState(false);

  // Coupon state
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null); // { code: 'SAVE500', discount: 500 }

  // Add new address modal state
  const [isAddAddressOpen, setIsAddAddressOpen] = useState(false);
  const [newAddressForm, setNewAddressForm] = useState({
    type: 'Home',
    name: '',
    addressLine1: '',
    addressLine2: '',
    state: '',
    phone: '',
  });

  // Payment method state (for step 2)
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [upiId, setUpiId] = useState('sivaathri@okaxis');

  // Normalizing the product to be purchased
  const item = product || (cartItems.length > 0 ? cartItems[0] : {
    id: 'feat-1',
    name: 'iPhone 14',
    brand: 'Apple',
    specs: '128 GB • Excellent Condition',
    colorName: 'Purple',
    selectedStorage: '128 GB',
    selectedCondition: 'Excellent',
    price: 34999,
    originalPrice: 59000,
    tag: 'Certified',
  });

  const isApple = item.brand === 'Apple' || item.brand === 'iPhone' || item.name?.toLowerCase().includes('iphone');
  const colorName = item.selectedColor || item.colorName || 'Purple';
  const storageName = item.selectedStorage || '128 GB';
  const conditionName = item.selectedCondition || 'Excellent';

  // Dynamic calculations
  const productPrice = item.price || 34999;
  const originalPrice = item.originalPrice || 59000;
  const deliveryCharges = deliveryOption === 'express' ? 99 : 0;
  const handlingCharges = 0;
  const warrantyPrice = hasExtendedWarranty ? 1499 : 0;
  const couponDiscount = appliedCoupon ? appliedCoupon.discount : 0;

  const totalAmount = Math.max(0, productPrice + deliveryCharges + handlingCharges + warrantyPrice - couponDiscount);
  const totalSavings = Math.max(0, originalPrice - productPrice + (deliveryOption === 'standard' ? 99 : 0) + couponDiscount);
  const savingsPercent = Math.round((totalSavings / (originalPrice + 99)) * 100);

  // Address Handlers
  const handleAddNewAddress = (e) => {
    e.preventDefault();
    if (!newAddressForm.name || !newAddressForm.addressLine1 || !newAddressForm.phone) {
      showToast?.('Please fill out the required address fields');
      return;
    }
    const created = {
      id: `addr-${Date.now()}`,
      type: newAddressForm.type || 'Home',
      isDefault: false,
      name: newAddressForm.name,
      addressLine1: newAddressForm.addressLine1,
      addressLine2: newAddressForm.addressLine2,
      state: newAddressForm.state,
      phone: newAddressForm.phone,
    };
    setAddresses((prev) => [...prev, created]);
    setSelectedAddressId(created.id);
    setIsAddAddressOpen(false);
    setNewAddressForm({ type: 'Home', name: '', addressLine1: '', addressLine2: '', state: '', phone: '' });
    showToast?.('New address added successfully!');
  };

  const handleRemoveAddress = (id) => {
    if (addresses.length <= 1) {
      showToast?.('You must have at least one delivery address.');
      return;
    }
    setAddresses((prev) => prev.filter((a) => a.id !== id));
    if (selectedAddressId === id) {
      const remaining = addresses.filter((a) => a.id !== id);
      setSelectedAddressId(remaining[0]?.id || '');
    }
    showToast?.('Address removed.');
  };

  // Coupon Handler
  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const clean = couponCode.trim().toUpperCase();
    if (clean === 'SAVE500' || clean === 'SECONDKART' || clean === 'WELCOME10' || clean === 'EXPRESS') {
      setAppliedCoupon({ code: clean, discount: 500 });
      setIsCouponModalOpen(false);
      showToast?.(`Coupon "${clean}" applied! ₹500 saved.`);
    } else {
      showToast?.('Invalid coupon code. Try "SAVE500" or "SECONDKART"');
    }
  };

  // Order Placement
  const handlePlaceOrder = () => {
    setCurrentStep(4);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    onOrderComplete?.();
  };

  return (
    <div className="w-full bg-[#fbfcfb] text-gray-900 pb-20 pt-4 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. 4-Step Progress Stepper (Matching Screenshot) */}
        <div className="w-full max-w-3xl mx-auto mb-8 pt-2">
          <div className="flex items-center justify-between relative">
            
            {/* Connecting Track 1-2 */}
            <div className={`absolute top-4 left-[12%] right-[63%] h-0.5 transition-colors duration-300 ${
              currentStep >= 2 ? 'bg-emerald-600' : 'bg-gray-200'
            }`} />
            
            {/* Connecting Track 2-3 */}
            <div className={`absolute top-4 left-[37%] right-[38%] h-0.5 transition-colors duration-300 ${
              currentStep >= 3 ? 'bg-emerald-600' : 'bg-gray-200'
            }`} />

            {/* Connecting Track 3-4 */}
            <div className={`absolute top-4 left-[63%] right-[12%] h-0.5 transition-colors duration-300 ${
              currentStep >= 4 ? 'bg-emerald-600' : 'bg-gray-200'
            }`} />

            {/* Step 1: Delivery Address */}
            <div 
              onClick={() => currentStep > 1 && setCurrentStep(1)}
              className="flex flex-col items-center relative z-10 cursor-pointer group"
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                currentStep >= 1 
                  ? 'bg-[#0b4d3c] text-white shadow-sm ring-4 ring-emerald-50' 
                  : 'bg-white border-2 border-gray-300 text-gray-500'
              }`}>
                {currentStep > 1 ? <Check className="w-4 h-4 stroke-[3]" /> : '1'}
              </div>
              <span className={`text-xs mt-2 transition-colors ${
                currentStep === 1 ? 'font-bold text-gray-900' : 'font-medium text-gray-500'
              }`}>
                Delivery Address
              </span>
            </div>

            {/* Step 2: Payment */}
            <div 
              onClick={() => currentStep > 2 && setCurrentStep(2)}
              className="flex flex-col items-center relative z-10 cursor-pointer group"
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                currentStep >= 2 
                  ? 'bg-[#0b4d3c] text-white shadow-sm ring-4 ring-emerald-50' 
                  : 'bg-white border-2 border-gray-300 text-gray-500'
              }`}>
                {currentStep > 2 ? <Check className="w-4 h-4 stroke-[3]" /> : '2'}
              </div>
              <span className={`text-xs mt-2 transition-colors ${
                currentStep === 2 ? 'font-bold text-gray-900' : 'font-medium text-gray-500'
              }`}>
                Payment
              </span>
            </div>

            {/* Step 3: Order Review */}
            <div 
              onClick={() => currentStep > 3 && setCurrentStep(3)}
              className="flex flex-col items-center relative z-10 cursor-pointer group"
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                currentStep >= 3 
                  ? 'bg-[#0b4d3c] text-white shadow-sm ring-4 ring-emerald-50' 
                  : 'bg-white border-2 border-gray-300 text-gray-500'
              }`}>
                {currentStep > 3 ? <Check className="w-4 h-4 stroke-[3]" /> : '3'}
              </div>
              <span className={`text-xs mt-2 transition-colors ${
                currentStep === 3 ? 'font-bold text-gray-900' : 'font-medium text-gray-500'
              }`}>
                Order Review
              </span>
            </div>

            {/* Step 4: Confirmation */}
            <div className="flex flex-col items-center relative z-10">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                currentStep >= 4 
                  ? 'bg-[#0b4d3c] text-white shadow-sm ring-4 ring-emerald-50' 
                  : 'bg-white border-2 border-gray-300 text-gray-500'
              }`}>
                {currentStep >= 4 ? <Check className="w-4 h-4 stroke-[3]" /> : '4'}
              </div>
              <span className={`text-xs mt-2 transition-colors ${
                currentStep === 4 ? 'font-bold text-gray-900' : 'font-medium text-gray-500'
              }`}>
                Confirmation
              </span>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* STEP 4: ORDER CONFIRMED VIEW                                              */}
        {/* ========================================================================= */}
        {currentStep === 4 ? (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-gray-100 p-8 shadow-xl text-center animate-scaleUp">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4 ring-8 ring-emerald-50">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
              Order Placed Successfully!
            </span>
            <h2 className="text-2xl font-black text-gray-950 mt-3">
              Thank You, Siva Athri!
            </h2>
            <p className="text-xs text-gray-500 mt-1.5">
              Order ID: <span className="font-mono font-bold text-gray-800">SK-2026-98124</span> • A confirmation SMS & email have been dispatched.
            </p>

            {/* Delivery Timeline Card */}
            <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100 mt-6 text-left">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">
                    Estimated Delivery: {deliveryOption === 'express' ? 'Within 2 Days' : '3 - 5 Business Days'}
                  </h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Shipping to: {addresses.find(a => a.id === selectedAddressId)?.addressLine1}, {addresses.find(a => a.id === selectedAddressId)?.state}
                  </p>
                </div>
              </div>
            </div>

            {/* Purchased Item Summary */}
            <div className="mt-6 border border-gray-100 rounded-2xl p-4 flex items-center gap-4 text-left">
              <div className="w-16 h-16 bg-gray-50 rounded-xl p-1 border border-gray-100 flex items-center justify-center flex-shrink-0">
                {isApple ? (
                  <DualPhoneGraphic color="#8c74b8" className="h-14 w-auto object-contain" />
                ) : item.image ? (
                  <img src={item.image} alt={item.name} className="h-14 w-auto object-contain" />
                ) : (
                  <PhoneMockup type={item.imageType} className="h-14 w-auto object-contain" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-gray-900 truncate">{item.name} (Used)</h4>
                <p className="text-[11px] text-gray-500">{storageName} • {conditionName} Condition • {colorName}</p>
                <div className="text-xs font-black text-[#0b4d3c] mt-0.5">
                  Paid ₹{totalAmount.toLocaleString('en-IN')} (via {paymentMethod.toUpperCase()})
                </div>
              </div>
            </div>

            <button
              onClick={onBack}
              className="mt-8 bg-[#0b4d3c] hover:bg-[#08382c] text-white font-bold py-3 px-8 rounded-xl text-xs transition-all shadow-md active:scale-95"
            >
              Continue Shopping
            </button>
          </div>
        ) : (

          /* ========================================================================= */
          /* 2-COLUMN CHECKOUT LAYOUT (STEPS 1, 2, 3)                                  */
          /* ========================================================================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* ======================================================================= */}
            {/* LEFT COLUMN: SECTIONS 1, 2, 3                                           */}
            {/* ======================================================================= */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-6">

              {/* ------------------------------------------------------------------- */}
              {/* SECTION 1: DELIVERY ADDRESS                                          */}
              {/* ------------------------------------------------------------------- */}
              <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-xs">
                
                {/* Header: Pin Icon + Title + Add New Address */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-800 flex-shrink-0">
                      <MapPin className="w-5 h-5 text-teal-700" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 leading-tight">
                        Delivery Address
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Where should we deliver your order?
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsAddAddressOpen(true)}
                    className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                    <span>Add New Address</span>
                  </button>
                </div>

                {/* Address Cards Grid: Home vs Office */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                  {addresses.map((addr) => {
                    const isSelected = selectedAddressId === addr.id;
                    return (
                      <div
                        key={addr.id}
                        onClick={() => setSelectedAddressId(addr.id)}
                        className={`rounded-2xl p-4.5 transition-all cursor-pointer relative flex flex-col justify-between ${
                          isSelected
                            ? 'border-2 border-emerald-600 bg-emerald-50/20 shadow-xs'
                            : 'border border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        {/* Top: Custom Radio + Title + Default Badge */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center border transition-all ${
                              isSelected
                                ? 'border-emerald-600 bg-emerald-600'
                                : 'border-gray-300 bg-white'
                            }`}>
                              {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                            <span className="font-bold text-xs text-gray-900">
                              {addr.type}
                            </span>
                            {addr.isDefault && (
                              <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                                Default
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Name & Address Details */}
                        <div className="mt-3 space-y-0.5 text-xs text-gray-600">
                          <p className="font-bold text-gray-900">{addr.name}</p>
                          <p>{addr.addressLine1}</p>
                          <p>{addr.addressLine2}</p>
                          <p>{addr.state}</p>
                        </div>

                        {/* Phone Number */}
                        <div className="mt-3 text-xs text-gray-600 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-gray-400" />
                          <span>{addr.phone}</span>
                        </div>

                        {/* Edit | Remove Action Links */}
                        <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-end gap-3 text-xs font-semibold text-sky-700">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              showToast?.('Editing address...');
                            }}
                            className="hover:underline cursor-pointer"
                          >
                            Edit
                          </button>
                          <span className="text-gray-300">|</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveAddress(addr.id);
                            }}
                            className="hover:underline text-rose-600 cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* ------------------------------------------------------------------- */}
              {/* SECTION 2: DELIVERY OPTIONS                                          */}
              {/* ------------------------------------------------------------------- */}
              <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-xs">
                
                {/* Header: Truck Icon + Title */}
                <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-800 flex-shrink-0">
                    <Truck className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 leading-tight">
                      Delivery Options
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Choose a delivery option that works for you
                    </p>
                  </div>
                </div>

                {/* 2 Delivery Option Cards: Standard (FREE) vs Express (₹99) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                  
                  {/* Standard Delivery (FREE) */}
                  <div
                    onClick={() => setDeliveryOption('standard')}
                    className={`rounded-2xl p-4.5 transition-all cursor-pointer relative flex flex-col justify-between ${
                      deliveryOption === 'standard'
                        ? 'border-2 border-emerald-600 bg-emerald-50/20 shadow-xs'
                        : 'border border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center border transition-all ${
                          deliveryOption === 'standard'
                            ? 'border-emerald-600 bg-emerald-600'
                            : 'border-gray-300 bg-white'
                        }`}>
                          {deliveryOption === 'standard' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                        <span className="font-bold text-xs text-gray-900">
                          Standard Delivery
                        </span>
                      </div>
                      <span className="font-black text-xs text-emerald-700">
                        FREE
                      </span>
                    </div>

                    <div className="mt-2.5 pl-6.5 text-xs">
                      <p className="font-semibold text-gray-700">Delivered in 3 - 5 days</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">Safe and reliable delivery across India</p>
                    </div>
                  </div>

                  {/* Express Delivery (₹99) */}
                  <div
                    onClick={() => setDeliveryOption('express')}
                    className={`rounded-2xl p-4.5 transition-all cursor-pointer relative flex flex-col justify-between ${
                      deliveryOption === 'express'
                        ? 'border-2 border-emerald-600 bg-emerald-50/20 shadow-xs'
                        : 'border border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center border transition-all ${
                          deliveryOption === 'express'
                            ? 'border-emerald-600 bg-emerald-600'
                            : 'border-gray-300 bg-white'
                        }`}>
                          {deliveryOption === 'express' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                        <span className="font-bold text-xs text-gray-900">
                          Express Delivery
                        </span>
                      </div>
                      <span className="font-black text-xs text-gray-900">
                        ₹99
                      </span>
                    </div>

                    <div className="mt-2.5 pl-6.5 text-xs">
                      <p className="font-semibold text-gray-700">Delivered in 1 - 2 days</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">Faster delivery to select locations</p>
                    </div>
                  </div>

                </div>

              </div>

              {/* ------------------------------------------------------------------- */}
              {/* SECTION 3: ADD PROTECTION (OPTIONAL)                                */}
              {/* ------------------------------------------------------------------- */}
              <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-xs">
                
                {/* Header: Shield Icon + Title */}
                <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-800 flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 leading-tight">
                      Add Protection (Optional)
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Extra care for your device
                    </p>
                  </div>
                </div>

                {/* Extended Warranty Card with Checkbox */}
                <div
                  onClick={() => setHasExtendedWarranty(!hasExtendedWarranty)}
                  className={`mt-5 rounded-2xl p-4.5 border transition-all cursor-pointer flex items-start justify-between gap-4 ${
                    hasExtendedWarranty
                      ? 'border-2 border-emerald-600 bg-emerald-50/20 shadow-xs'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center mt-0.5 transition-colors ${
                      hasExtendedWarranty 
                        ? 'bg-emerald-600 border-emerald-600 text-white' 
                        : 'border-gray-300 bg-white'
                    }`}>
                      {hasExtendedWarranty && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-gray-900">
                        Extended Warranty (6 Months)
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        Covers manufacturing defects, gives you peace of mind.
                      </p>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <span className="font-black text-sm text-gray-900">
                      ₹1,499
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        showToast?.('6 Months Doorstep Service Warranty included.');
                      }}
                      className="text-[11px] font-semibold text-sky-700 hover:underline flex items-center gap-1 mt-1 justify-end cursor-pointer"
                    >
                      <span>View Details</span>
                      <Info className="w-3 h-3 text-sky-600" />
                    </button>
                  </div>
                </div>

              </div>

              {/* ------------------------------------------------------------------- */}
              {/* STEP 2: PAYMENT METHOD (ACCORDION / ADVANCE)                         */}
              {/* ------------------------------------------------------------------- */}
              {currentStep === 2 && (
                <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-xs animate-fadeIn space-y-4">
                  <h3 className="text-base font-bold text-gray-900">Select Payment Method</h3>
                  <div className="space-y-3">
                    {[
                      { id: 'upi', name: 'Instant UPI (Google Pay, PhonePe, Paytm)', icon: Zap },
                      { id: 'card', name: 'Credit / Debit Card (Visa, MasterCard, RuPay)', icon: CreditCard },
                      { id: 'netbanking', name: 'Net Banking (All Major Indian Banks)', icon: Building },
                      { id: 'cod', name: 'Cash on Delivery (Verified Doorstep Delivery)', icon: Truck },
                    ].map((p) => {
                      const isSel = paymentMethod === p.id;
                      return (
                        <div
                          key={p.id}
                          onClick={() => setPaymentMethod(p.id)}
                          className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                            isSel ? 'border-2 border-emerald-600 bg-emerald-50/20' : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSel ? 'border-emerald-600 bg-emerald-600' : 'border-gray-300'
                            }`}>
                              {isSel && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                            <span className="text-xs font-bold text-gray-900">{p.name}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* CTA Button: Proceed to Payment or Place Order */}
              <div className="pt-2">
                {currentStep === 1 ? (
                  <button
                    onClick={() => {
                      setCurrentStep(2);
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                      showToast?.('Address confirmed. Select payment method.');
                    }}
                    className="w-full bg-[#0b4d3c] hover:bg-[#07392c] active:scale-[0.99] text-white font-bold py-3.5 px-6 rounded-2xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/20 transition-all cursor-pointer"
                  >
                    <span>Proceed to Payment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handlePlaceOrder}
                    className="w-full bg-[#0b4d3c] hover:bg-[#07392c] active:scale-[0.99] text-white font-bold py-3.5 px-6 rounded-2xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/20 transition-all cursor-pointer"
                  >
                    <span>Pay ₹{totalAmount.toLocaleString('en-IN')} & Place Order</span>
                    <Lock className="w-4 h-4" />
                  </button>
                )}

                {/* Trust Seal */}
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 font-medium mt-3.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Secure Payment</span>
                  <span className="text-gray-300">|</span>
                  <span>Your information is safe with us</span>
                </div>
              </div>

            </div>

            {/* ======================================================================= */}
            {/* RIGHT COLUMN: STICKY ORDER SUMMARY (MATCHING SCREENSHOT)                */}
            {/* ======================================================================= */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-xs flex flex-col gap-5 sticky top-24">
                
                {/* Header: Cart Icon + Order Summary + Back to Cart */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                      <ShoppingBag className="w-4 h-4 text-[#0b4d3c]" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm text-gray-900 leading-tight">
                        Order Summary
                      </h3>
                      <p className="text-[11px] text-gray-500 mt-0.5">
                        1 item in your cart
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={onBack}
                    className="text-xs font-bold text-sky-700 hover:text-sky-900 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Cart</span>
                  </button>
                </div>

                {/* Product Card in Summary */}
                <div className="flex items-center gap-4 pb-5 border-b border-gray-100">
                  <div className="w-20 h-24 bg-gray-50 rounded-2xl p-1.5 border border-gray-100 flex items-center justify-center flex-shrink-0 shadow-2xs">
                    {isApple ? (
                      <DualPhoneGraphic color="#8c74b8" className="h-20 w-auto object-contain" />
                    ) : item.image ? (
                      <img src={item.image} alt={item.name} className="h-20 w-auto object-contain" />
                    ) : (
                      <PhoneMockup type={item.imageType} className="h-20 w-auto object-contain" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xs text-gray-900 truncate leading-tight">
                      {item.name} (Used)
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-0.5 truncate">
                      {storageName} • {conditionName} Condition
                    </p>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      Color: <span className="font-semibold text-gray-700">{colorName}</span>
                    </p>
                    <p className="text-[11px] text-gray-500">
                      Condition: <span className="font-semibold text-gray-700">{conditionName}</span>
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <span className="bg-[#6936d3] text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                        {item.tag || 'Certified'}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between mt-2">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-black text-sm text-gray-950">
                          ₹{productPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[11px] text-gray-400 line-through">
                          ₹{originalPrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <span className="text-[11px] text-gray-500 font-medium">
                        Qty: 1
                      </span>
                    </div>
                  </div>
                </div>

                {/* Price Details Breakdown */}
                <div className="space-y-2.5 text-xs pb-4 border-b border-gray-100">
                  <h4 className="font-bold text-xs text-gray-900 mb-2">
                    Price Details
                  </h4>

                  <div className="flex items-center justify-between text-gray-600">
                    <span>Product Price</span>
                    <span className="font-bold text-gray-900">₹{productPrice.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="flex items-center justify-between text-gray-600">
                    <span>Delivery Charges</span>
                    {deliveryOption === 'standard' ? (
                      <span className="font-bold text-emerald-700">FREE</span>
                    ) : (
                      <span className="font-bold text-gray-900">₹99</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-gray-600">
                    <span>Handling Charges</span>
                    <span className="font-bold text-gray-900">₹0</span>
                  </div>

                  {hasExtendedWarranty && (
                    <div className="flex items-center justify-between text-gray-600">
                      <span>Extended Warranty</span>
                      <span className="font-bold text-gray-900">+ ₹1,499</span>
                    </div>
                  )}

                  {appliedCoupon && (
                    <div className="flex items-center justify-between text-emerald-800 font-semibold">
                      <span>Coupon ({appliedCoupon.code})</span>
                      <span>- ₹{appliedCoupon.discount}</span>
                    </div>
                  )}

                  {/* Total Amount */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-sm text-gray-900 block leading-tight">Total Amount</span>
                      <span className="text-[10px] text-gray-400">Inclusive of all taxes</span>
                    </div>
                    <span className="text-xl font-black text-[#0b4d3c]">
                      ₹{totalAmount.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Savings Banner */}
                <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-3.5 flex items-start gap-3">
                  <Tag className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-xs text-emerald-950 leading-tight">
                      You are saving ₹{totalSavings.toLocaleString('en-IN')} ({savingsPercent}%)
                    </h5>
                    <p className="text-[11px] text-emerald-700 mt-0.5">
                      Great choice! Get more for less.
                    </p>
                  </div>
                </div>

                {/* 3 Trust Badges */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  {[
                    { icon: ShieldCheck, title: 'Quality Checked', sub: 'By Experts' },
                    { icon: RotateCcw, title: '7-Day Returns', sub: 'Hassle-Free' },
                    { icon: Truck, title: 'Pan India Delivery', sub: 'Across India' },
                  ].map((tb, idx) => {
                    const Icon = tb.icon;
                    return (
                      <div key={idx} className="bg-gray-50/80 rounded-xl p-2 text-center border border-gray-100 flex flex-col items-center">
                        <Icon className="w-4 h-4 text-emerald-700 mb-1" />
                        <span className="text-[10px] font-bold text-gray-900 leading-tight truncate w-full">{tb.title}</span>
                        <span className="text-[9px] text-gray-400 mt-0.5 leading-tight truncate w-full">{tb.sub}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Coupon Box */}
                <div className="bg-[#fff6ea] border border-[#fde4cb] rounded-2xl p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#fde5cc] flex items-center justify-center text-amber-800 flex-shrink-0">
                      <Gift className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-bold text-xs text-gray-900 leading-tight">
                        {appliedCoupon ? `Applied: ${appliedCoupon.code}` : 'Have a Coupon Code?'}
                      </h5>
                      <p className="text-[10px] text-gray-500 mt-0.5">
                        {appliedCoupon ? '₹500 discount added to total' : 'Apply now and save more!'}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsCouponModalOpen(true)}
                    className="text-xs font-bold text-[#0b4d3c] hover:underline flex-shrink-0 cursor-pointer"
                  >
                    {appliedCoupon ? 'Change' : 'Apply Coupon'}
                  </button>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>

      {/* Add New Address Modal */}
      {isAddAddressOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl animate-scaleUp">
            <h3 className="font-bold text-base text-gray-900 mb-4">Add New Delivery Address</h3>
            <form onSubmit={handleAddNewAddress} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-gray-700 block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={newAddressForm.name}
                  onChange={(e) => setNewAddressForm({ ...newAddressForm, name: e.target.value })}
                  placeholder="e.g. Siva Athri"
                  className="w-full p-2.5 border border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="font-semibold text-gray-700 block mb-1">Address Line 1</label>
                <input
                  type="text"
                  required
                  value={newAddressForm.addressLine1}
                  onChange={(e) => setNewAddressForm({ ...newAddressForm, addressLine1: e.target.value })}
                  placeholder="House / Flat No., Street"
                  className="w-full p-2.5 border border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="font-semibold text-gray-700 block mb-1">City, Pincode</label>
                <input
                  type="text"
                  required
                  value={newAddressForm.addressLine2}
                  onChange={(e) => setNewAddressForm({ ...newAddressForm, addressLine2: e.target.value })}
                  placeholder="e.g. Lawspet, Puducherry - 605008"
                  className="w-full p-2.5 border border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="font-semibold text-gray-700 block mb-1">State</label>
                <input
                  type="text"
                  required
                  value={newAddressForm.state}
                  onChange={(e) => setNewAddressForm({ ...newAddressForm, state: e.target.value })}
                  placeholder="e.g. Puducherry or Tamil Nadu"
                  className="w-full p-2.5 border border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="font-semibold text-gray-700 block mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={newAddressForm.phone}
                  onChange={(e) => setNewAddressForm({ ...newAddressForm, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full p-2.5 border border-gray-200 rounded-xl focus:border-emerald-600 focus:outline-none"
                />
              </div>
              <div className="flex gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setIsAddAddressOpen(false)}
                  className="flex-1 py-2.5 rounded-xl border border-gray-200 font-bold text-gray-600 hover:bg-gray-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#0b4d3c] text-white font-bold hover:bg-[#07362a] cursor-pointer"
                >
                  Save Address
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Coupon Modal */}
      {isCouponModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl animate-scaleUp text-xs">
            <h3 className="font-bold text-base text-gray-900 mb-1">Apply Coupon Code</h3>
            <p className="text-gray-500 mb-4">Enter a promo code to unlock instant discounts</p>
            <form onSubmit={handleApplyCoupon} className="space-y-3">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter SAVE500 or SECONDKART"
                className="w-full p-2.5 border border-gray-200 rounded-xl uppercase font-bold text-center tracking-wider focus:border-emerald-600 focus:outline-none"
              />
              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCouponModalOpen(false)}
                  className="flex-1 py-2.5 rounded-xl border border-gray-200 font-bold text-gray-600 hover:bg-gray-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#0b4d3c] text-white font-bold hover:bg-[#07362a] cursor-pointer"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
