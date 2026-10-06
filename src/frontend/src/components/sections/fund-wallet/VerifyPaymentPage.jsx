import React from 'react';
import { FiChevronLeft, FiShield, FiMessageSquare } from 'react-icons/fi';
import ProgressSteps from './ProgressSteps';

export default function VerifyPaymentPage({
  selectedAmount = 3000,
  onBack,
  onVerify,
  bankName = 'GT Bank',
  accountNumber = '******1234',
  accountName = 'Peace Jeremiah',
}) {
  return (
    <div className='w-full'>
      

      <div className='flex flex-col gap-[20px] md:gap-[28px]'>
        <div className='flex flex-col gap-[18px] xl:flex-row xl:items-center xl:justify-between'>
          <div className='flex flex-col gap-[8px]'>
            <button
              type='button'
              onClick={onBack}
              className='mb-[2px] flex w-fit items-center gap-[6px] rounded-full text-[12px] font-semibold text-[#3B82F6] transition hover:text-[#2563EB]'
            >
              <FiChevronLeft className='h-[16px] w-[16px]' />
              Back
            </button>
            <h1 className='text-[28px] font-extrabold tracking-[-0.04em] text-[#0F172A] md:text-[32px]'>Confirm Payment</h1>
            <p className='text-[14px] text-[#64748B] md:text-[16px]'>Complete verification to authorize this wallet funding</p>
          </div>

          <div className='w-full max-w-[420px]'>
            <ProgressSteps activeStep={3} />
          </div>
        </div>

        <div className='flex flex-col gap-[24px] xl:flex-row xl:items-stretch xl:justify-between'>
          <div className='w-full max-w-[760px] rounded-[24px] border border-[#E2E8F0] bg-white p-[20px] md:p-[28px]'>
            <div className='rounded-[18px] border border-[#D9EAF8] bg-[#F8FBFF] p-[20px]'>
              <div className='flex items-center gap-[16px]'>
                <span className='flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#E0F2FE] text-[#2563EB]'>
                  <FiMessageSquare className='h-[18px] w-[18px]' />
                </span>
                <div>
                  <h2 className='text-[22px] font-extrabold tracking-[-0.03em] text-[#0F172A]'>Enter verification code</h2>
                  <p className='mt-[4px] text-[14px] text-[#64748B]'>Enter the 6-digit verification code sent to +234 ••• ••• ••• 89</p>
                </div>
              </div>

              <div className='mt-[24px] flex items-center gap-[12px]'>
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className={[
                      'flex h-[58px] w-[48px] items-center justify-center rounded-[12px] border bg-[#F8FAFC] text-[22px] font-bold text-[#0F172A]',
                      index === 0 ? 'border-[#2563EB] shadow-[0_0_0_1px_rgba(37,99,235,0.08)]' : 'border-[#CBD5E1]',
                    ].join(' ')}
                  >
                    {index === 0 ? '|' : ''}
                  </div>
                ))}
              </div>

              <div className='mt-[18px] text-center text-[14px]'>
                <span className='text-[#64748B]'>Didn't receive code?</span>
                <button type='button' className='ml-[6px] rounded-full px-[6px] py-[4px] font-semibold text-[#3B82F6]'>Resend code</button>
              </div>

              <div className='mt-[18px] flex items-center gap-[10px] rounded-[12px] bg-[#E0F2FE] px-[12px] py-[12px] text-[13px] text-[#0F172A]'>
                <span className='flex h-[22px] w-[22px] items-center justify-center rounded-full bg-white text-[#2563EB]'>
                  <FiShield className='h-[12px] w-[12px]' />
                </span>
                <span>For your security, this code expires in 05:00 minutes. Never share it with anyone.</span>
              </div>
            </div>

            <button
              type='button'
              onClick={onVerify}
              className='mt-[20px] w-full rounded-full bg-[#3B82F6] px-[18px] py-[16px] text-[18px] font-bold text-white transition hover:bg-[#2563EB]'
            >
              Verify
            </button>
          </div>

          <div className='w-full max-w-[420px] self-start'>
            <div className='rounded-[24px] border border-[#D9EAF8] bg-[#F5F9FE] p-[20px]'>
              <h3 className='text-[20px] font-extrabold tracking-[-0.03em] text-[#0F172A]'>Payment summary</h3>

              <div className='mt-[18px] space-y-[12px] text-[15px] text-[#334155]'>
                <div className='flex items-center justify-between gap-[12px] border-b border-[#E2E8F0] pb-[12px]'>
                  <span>Method</span>
                  <span className='font-semibold text-[#0F172A]'>Bank transfer</span>
                </div>
                <div className='flex items-center justify-between gap-[12px] border-b border-[#E2E8F0] pb-[12px]'>
                  <span>From</span>
                  <span className='font-semibold text-[#0F172A]'>{bankName} • {accountNumber}</span>
                </div>
                <div className='flex items-center justify-between gap-[12px] border-b border-[#E2E8F0] pb-[12px]'>
                  <span>Account name</span>
                  <span className='font-semibold text-[#0F172A]'>{accountName}</span>
                </div>
              </div>

              <div className='mt-[18px] flex items-center justify-between gap-[12px]'>
                <span className='text-[15px] font-semibold text-[#334155]'>Total</span>
                <span className='text-[22px] font-extrabold tracking-[-0.04em] text-[#2563EB]'>₦{Number(selectedAmount || 0).toLocaleString()}.00</span>
              </div>
            </div>

            <div className='mt-[18px] rounded-[18px] bg-[#0F172A] p-[20px] text-white'>
              <div className='flex items-center gap-[12px]'>
                <span className='flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white/15 text-[16px] font-bold'>?</span>
                <span className='text-[20px] font-extrabold tracking-[-0.03em]'>Need help?</span>
              </div>

              <p className='mt-[12px] text-[14px] text-blue-100'>Contact support if you no longer have access to this phone number.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
