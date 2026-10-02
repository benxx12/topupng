import React from 'react';
import { FiUser, FiMail, FiPhone, FiCalendar } from 'react-icons/fi';

function ProfileSettingsSection() {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex items-center justify-between gap-[16px] flex-wrap">
        <div className="flex flex-col gap-[6px]">
          <h2 className="text-[20px] font-bold text-gray-900">Profile Settings</h2>
          <p className="text-[14px] text-gray-500">Update your personal details and account information.</p>
        </div>
        <button className="px-[20px] py-[10px] rounded-[12px] bg-[#3B82F6] text-white text-[14px] font-bold hover:bg-[#2563EB] transition">
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
        <div className="flex flex-col gap-[8px]">
          <label className="text-[14px] font-bold text-gray-900">Full Name</label>
          <div className="flex items-center gap-[12px] border border-[#E5E7EB] rounded-[12px] bg-white px-[16px] focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
            <FiUser className="text-gray-400 w-[18px] h-[18px]" />
            <input
              type="text"
              defaultValue="Sarah Adebayo"
              className="h-[48px] w-full border-none bg-transparent text-[16px] text-gray-900 placeholder:text-gray-400 outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[8px]">
          <label className="text-[14px] font-bold text-gray-900">Email Address</label>
          <div className="flex items-center gap-[12px] border border-[#E5E7EB] rounded-[12px] bg-white px-[16px] focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
            <FiMail className="text-gray-400 w-[18px] h-[18px]" />
            <input
              type="email"
              defaultValue="sarah.ade@domain.com"
              className="h-[48px] w-full border-none bg-transparent text-[16px] text-gray-900 placeholder:text-gray-400 outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[8px]">
          <label className="text-[14px] font-bold text-gray-900">Phone Number</label>
          <div className="flex items-center gap-[12px] border border-[#E5E7EB] rounded-[12px] bg-white px-[16px] focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
            <FiPhone className="text-gray-400 w-[18px] h-[18px]" />
            <input
              type="tel"
              defaultValue="0803 123 4567"
              className="h-[48px] w-full border-none bg-transparent text-[16px] text-gray-900 placeholder:text-gray-400 outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[8px]">
          <label className="text-[14px] font-bold text-gray-900">Date of Birth</label>
          <div className="flex items-center gap-[12px] border border-[#E5E7EB] rounded-[12px] bg-white px-[16px] focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
            <FiCalendar className="text-gray-400 w-[18px] h-[18px]" />
            <input
              type="text"
              defaultValue="12/08/1994"
              placeholder="dd/mm/yyyy"
              className="h-[48px] w-full border-none bg-transparent text-[16px] text-gray-900 placeholder:text-gray-400 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSettingsSection;
