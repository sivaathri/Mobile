import React from 'react';
import { ShieldCheck, Tag, CreditCard, Truck, RotateCcw, Leaf } from 'lucide-react';

export default function TrustBadges() {
  const items = [
    {
      id: 'verified',
      icon: ShieldCheck,
      iconColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      title: 'Verified Sellers',
      desc: 'Real people, real phones',
    },
    {
      id: 'prices',
      icon: Tag,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      title: 'best prices',
      desc: 'Unbeatable deals',
    },
    {
      id: 'payments',
      icon: CreditCard,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      title: 'Safe Payments',
      desc: '100% secure transactions',
    },
    {
      id: 'delivery',
      icon: Truck,
      iconColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      title: 'Fast Delivery',
      desc: 'Across India',
    },
    {
      id: 'returns',
      icon: RotateCcw,
      iconColor: 'text-violet-600',
      bgColor: 'bg-violet-50',
      title: 'Easy Returns',
      desc: 'Hassle-free',
    },
    {
      id: 'sustainable',
      icon: Leaf,
      iconColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      title: 'Sustainable Choice',
      desc: 'Reduce e-waste',
    },
  ];

  return (
    <section className="w-full px-4 lg:px-6 xl:px-8 py-2 my-2">
      <div className="bg-white rounded-xl border border-gray-200/80 p-4 shadow-subtle grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
        {items.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.id} className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-full ${item.bgColor} flex items-center justify-center flex-shrink-0`}>
                <IconComponent className={`w-4 h-4 ${item.iconColor}`} />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-gray-900 leading-tight">
                  {item.title}
                </h4>
                <p className="text-[11px] text-gray-500 truncate leading-tight mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
