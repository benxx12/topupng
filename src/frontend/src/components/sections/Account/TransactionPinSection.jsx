import React from 'react';
import { FiLock, FiShield, FiCheckCircle } from 'react-icons/fi';

function TransactionPinSection() {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex items-center justify-between gap-[16px] flex-wrap">
        <div className="flex flex-col gap-[6px]">
          <h2 className="text-[20px] font-bold text-gray-900">Transaction PIN</h2>
          <p className="text-[14px] text-gray-500">Protect your payments and secure every purchase.</p>
        </div>
        <button className="px-[20px] py-[10px] rounded-[12px] bg-[#3B82F6] text-white text-[14px] font-bold hover:bg-[#2563EB] transition">
          Change PIN
        </button>
      </div>

      <div className="rounded-[20px] border border-[#E2E8F0] bg-[#F8FAFC] p-[20px]">
        <div className="flex items-center gap-[14px]">
          <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[#EFF6FF] text-[#2563EB]">
            <FiLock className="h-[24px] w-[24px]" />
          </div>
          <div>
            <p className="text-[16px] font-bold text-gray-900">Current PIN status</p>
            <p className="text-[14px] text-gray-500">Your PIN was last updated 2 months ago.</p>
          </div>
        </div>

        <div className="mt-[20px] grid gap-[12px]">
          <div className="flex items-center justify-between rounded-[12px] bg-white p-[14px] border border-[#E2E8F0]">
            <div className="flex items-center gap-[10px]">
              <FiShield className="h-[18px] w-[18px] text-[#2563EB]" />
              <span className="text-[14px] font-medium text-gray-700">PIN protects every airtime and data purchase</span>
            </div>
            <FiCheckCircle className="h-[18px] w-[18px] text-[#16A34A]" />
          </div>

          <div className="flex items-center justify-between rounded-[12px] bg-white p-[14px] border border-[#E2E8F0]">
            <div className="flex items-center gap-[10px]">
              <FiShield className="h-[18px] w-[18px] text-[#2563EB]" />
              <span className="text-[14px] font-medium text-gray-700">Two-step confirmation is enabled for card payments</span>
            </div>
            <FiCheckCircle className="h-[18px] w-[18px] text-[#16A34A]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionPinSection;
