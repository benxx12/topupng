import React from 'react';
import { FiShield, FiSmartphone, FiGlobe, FiClock } from 'react-icons/fi';

function SecurityLoginsSection() {
  const devices = [
    { name: 'iPhone 15 Pro', location: 'Lagos, Nigeria', time: 'Active now', type: 'Current device' },
    { name: 'MacBook Pro', location: 'Lekki, Nigeria', time: '2 hours ago', type: 'Trusted device' },
    { name: 'Samsung A54', location: 'Abuja, Nigeria', time: '1 day ago', type: 'Previous login' }
  ];

  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex flex-col gap-[6px]">
        <h2 className="text-[20px] font-bold text-gray-900">Security & Logins</h2>
        <p className="text-[14px] text-gray-500">Review your recent device activity and secure your account.</p>
      </div>

      <div className="space-y-[16px]">
        {devices.map((device) => (
          <div key={device.name} className="flex items-center justify-between gap-[16px] rounded-[18px] border border-[#E2E8F0] bg-white p-[18px]">
            <div className="flex items-center gap-[14px]">
              <div className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-[#EFF6FF] text-[#2563EB]">
                {device.name.includes('Mac') ? <FiGlobe className="h-[20px] w-[20px]" /> : <FiSmartphone className="h-[20px] w-[20px]" />}
              </div>
              <div>
                <p className="text-[16px] font-bold text-gray-900">{device.name}</p>
                <p className="text-[14px] text-gray-500">{device.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-[12px] text-right">
              <div>
                <p className="text-[12px] font-bold uppercase tracking-wide text-gray-500">{device.type}</p>
                <p className="text-[14px] text-gray-500">{device.time}</p>
              </div>
              <FiClock className="h-[18px] w-[18px] text-gray-400" />
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-[18px] border border-[#E2E8F0] bg-[#F8FAFC] p-[18px]">
        <div className="flex items-center gap-[12px] text-[#2563EB]">
          <FiShield className="h-[18px] w-[18px]" />
          <span className="text-[14px] font-bold">Last password change: 24 days ago</span>
        </div>
      </div>
    </div>
  );
}

export default SecurityLoginsSection;
