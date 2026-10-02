import React from 'react';
import { FiHelpCircle, FiMessageCircle, FiPhone, FiMail } from 'react-icons/fi';

function HelpSupportSection() {
  const faqs = [
    'How do I change my default payment method?',
    'Why is my airtime purchase pending?',
    'How do I reset my transaction PIN?',
    'How can I update my contact details?'
  ];

  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex flex-col gap-[6px]">
        <h2 className="text-[20px] font-bold text-gray-900">Help & Support</h2>
        <p className="text-[14px] text-gray-500">Get help with your account, transactions, and service issues.</p>
      </div>

      <div className="grid gap-[16px] md:grid-cols-3">
        <div className="rounded-[18px] border border-[#E2E8F0] bg-white p-[18px]">
          <div className="mb-[12px] flex h-[42px] w-[42px] items-center justify-center rounded-[12px] bg-[#EFF6FF] text-[#2563EB]">
            <FiPhone className="h-[20px] w-[20px]" />
          </div>
          <p className="text-[16px] font-bold text-gray-900">Call Support</p>
          <p className="mt-[8px] text-[14px] text-gray-500">+234 800 123 4567</p>
        </div>

        <div className="rounded-[18px] border border-[#E2E8F0] bg-white p-[18px]">
          <div className="mb-[12px] flex h-[42px] w-[42px] items-center justify-center rounded-[12px] bg-[#EFF6FF] text-[#2563EB]">
            <FiMail className="h-[20px] w-[20px]" />
          </div>
          <p className="text-[16px] font-bold text-gray-900">Email Us</p>
          <p className="mt-[8px] text-[14px] text-gray-500">support@topupng.com</p>
        </div>

        <div className="rounded-[18px] border border-[#E2E8F0] bg-white p-[18px]">
          <div className="mb-[12px] flex h-[42px] w-[42px] items-center justify-center rounded-[12px] bg-[#EFF6FF] text-[#2563EB]">
            <FiMessageCircle className="h-[20px] w-[20px]" />
          </div>
          <p className="text-[16px] font-bold text-gray-900">Live Chat</p>
          <p className="mt-[8px] text-[14px] text-gray-500">Available 8 AM - 8 PM</p>
        </div>
      </div>

      <div className="rounded-[18px] border border-[#E2E8F0] bg-[#F8FAFC] p-[18px]">
        <div className="mb-[14px] flex items-center gap-[10px] text-[#2563EB]">
          <FiHelpCircle className="h-[18px] w-[18px]" />
          <span className="text-[14px] font-bold">Popular Questions</span>
        </div>

        <div className="space-y-[10px]">
          {faqs.map((faq) => (
            <div key={faq} className="rounded-[12px] bg-white p-[12px] text-[14px] text-gray-700 border border-[#E2E8F0]">
              {faq}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HelpSupportSection;
