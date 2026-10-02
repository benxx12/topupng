import React from 'react';
import { FiCreditCard, FiPlus, FiCheckCircle } from 'react-icons/fi';

function PaymentMethodsSection() {
  const cards = [
    {
      name: 'Visa •••• 4582',
      type: 'Primary card',
      expires: 'Expires 08/28',
      accent: 'bg-[#EFF6FF] text-[#2563EB]'
    },
    {
      name: 'Mastercard •••• 9104',
      type: 'Backup card',
      expires: 'Expires 11/27',
      accent: 'bg-[#F3F4F6] text-gray-700'
    }
  ];

  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex items-center justify-between gap-[16px] flex-wrap">
        <div className="flex flex-col gap-[6px]">
          <h2 className="text-[20px] font-bold text-gray-900">Payment Methods</h2>
          <p className="text-[14px] text-gray-500">Manage your saved cards and default payment method.</p>
        </div>
        <button className="flex items-center gap-[8px] px-[20px] py-[10px] rounded-[12px] bg-[#3B82F6] text-white text-[14px] font-bold hover:bg-[#2563EB] transition">
          <FiPlus className="w-[16px] h-[16px]" />
          Add Card
        </button>
      </div>

      <div className="grid gap-[16px]">
        {cards.map((card) => (
          <div key={card.name} className="flex items-center justify-between gap-[16px] rounded-[20px] border border-[#E2E8F0] bg-white p-[20px]">
            <div className="flex items-center gap-[14px]">
              <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-[#EFF6FF] text-[#2563EB]">
                <FiCreditCard className="h-[22px] w-[22px]" />
              </div>
              <div>
                <p className="text-[16px] font-bold text-gray-900">{card.name}</p>
                <p className="text-[14px] text-gray-500">{card.expires}</p>
              </div>
            </div>

            <div className="flex items-center gap-[12px]">
              <span className={`rounded-full px-[10px] py-[6px] text-[12px] font-bold ${card.accent}`}>
                {card.type}
              </span>
              {card.type === 'Primary card' && <FiCheckCircle className="h-[20px] w-[20px] text-[#16A34A]" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaymentMethodsSection;
