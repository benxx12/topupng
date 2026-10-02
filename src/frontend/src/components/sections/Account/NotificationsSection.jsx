import React from 'react';
import { FiBell, FiCheck, FiMail, FiSmartphone } from 'react-icons/fi';

function ToggleRow({ label, icon: Icon, enabled = true }) {
  return (
    <div className="flex items-center justify-between rounded-[14px] border border-[#E2E8F0] bg-white p-[16px]">
      <div className="flex items-center gap-[12px]">
        <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] bg-[#F8FAFC] text-gray-600">
          <Icon className="h-[18px] w-[18px]" />
        </div>
        <span className="text-[14px] font-medium text-gray-700">{label}</span>
      </div>

      <button
        type="button"
        className={`relative h-[28px] w-[52px] rounded-full transition ${enabled ? 'bg-[#3B82F6]' : 'bg-[#E2E8F0]'}`}
      >
        <span
          className={`absolute top-[4px] h-[20px] w-[20px] rounded-full bg-white shadow-sm transition ${enabled ? 'left-[28px]' : 'left-[4px]'}`}
        />
      </button>
    </div>
  );
}

function NotificationsSection() {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex flex-col gap-[6px]">
        <h2 className="text-[20px] font-bold text-gray-900">Notifications</h2>
        <p className="text-[14px] text-gray-500">Choose which updates you want to receive about your account and transactions.</p>
      </div>

      <div className="space-y-[14px]">
        <ToggleRow label="Transaction alerts" icon={FiBell} enabled={true} />
        <ToggleRow label="Email updates" icon={FiMail} enabled={true} />
        <ToggleRow label="SMS reminders" icon={FiSmartphone} enabled={false} />
      </div>

      <div className="rounded-[18px] border border-[#E2E8F0] bg-[#F8FAFC] p-[18px]">
        <div className="flex items-center gap-[10px] text-[#16A34A]">
          <FiCheck className="h-[18px] w-[18px]" />
          <span className="text-[14px] font-bold">Your notification preferences were synced successfully.</span>
        </div>
      </div>
    </div>
  );
}

export default NotificationsSection;
