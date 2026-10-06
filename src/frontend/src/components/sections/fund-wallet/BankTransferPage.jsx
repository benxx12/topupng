import React from 'react';
import { FiChevronLeft, FiHome, FiShield } from 'react-icons/fi';
import ProgressSteps from './ProgressSteps';

export default function BankTransferPage({ selectedAmount = 1000, onBack, onContinue }) {
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
            <h1 className='text-[28px] font-extrabold tracking-[-0.04em] text-[#0F172A] md:text-[32px]'>Bank Transfer</h1>
            <p className='text-[14px] text-[#64748B] md:text-[16px]'>Provide your bank account details to continue</p>
          </div>

          <div className='w-full max-w-[420px]'>
            <ProgressSteps activeStep={1} />
          </div>
        </div>

        <div className='flex flex-col gap-[24px] xl:flex-row xl:items-stretch xl:justify-between'>
          <div className='w-full max-w-[760px] rounded-[24px] border border-[#E2E8F0] bg-white p-[20px] md:p-[28px]'>
            <div className='flex flex-col gap-[8px]'>
              <h2 className='text-[18px] font-extrabold tracking-[-0.03em] text-[#0F172A] md:text-[22px]'>Bank account details</h2>
              <p className='text-[14px] text-[#64748B] md:text-[15px]'>Select the bank account you want to fund from</p>
            </div>

            <div className='mt-[26px] flex flex-col gap-[18px]'>
              <label className='block'>
                <span className='mb-[8px] block text-[14px] font-semibold text-[#334155]'>Select Bank</span>
                <div className='rounded-[14px] border border-[#CBD5E1] bg-[#F8FAFC] px-[14px] py-[14px]'>
                  <select className='w-full appearance-none bg-transparent text-[15px] text-[#0F172A] outline-none placeholder:text-[#94A3B8]'>
                    <option value='' disabled selected hidden>
                      Choose your bank
                    </option>
                    <option>Access Bank</option>
                    <option>First Bank</option>
                    <option>GTBank</option>
                    <option>UBA</option>
                    <option>Zenith Bank</option>
                  </select>
                </div>
              </label>

              <label className='block'>
                <span className='mb-[8px] block text-[14px] font-semibold text-[#334155]'>Account Number</span>
                <input
                  type='text'
                  placeholder='Enter account number'
                  className='w-full rounded-[14px] border border-[#CBD5E1] bg-[#F8FAFC] px-[14px] py-[14px] text-[15px] text-[#0F172A] outline-none placeholder:text-[#94A3B8]'
                />
              </label>

              <label className='block'>
                <span className='mb-[8px] block text-[14px] font-semibold text-[#334155]'>Amount</span>
                <div className='flex items-center rounded-[14px] border border-[#CBD5E1] bg-[#F8FAFC] px-[14px] py-[14px]'>
                  <span className='mr-[8px] text-[18px] text-[#64748B]'>₦</span>
                  <input
                    type='number'
                    min='50'
                    defaultValue={selectedAmount}
                    placeholder='Enter amount (Min: ₦50)'
                    className='w-full bg-transparent text-[15px] text-[#0F172A] outline-none placeholder:text-[#94A3B8]'
                  />
                </div>
              </label>

              <div className='flex items-center gap-[12px] rounded-[14px] border border-[#D9EAF8] bg-[#F4FAFF] px-[14px] py-[14px] text-[14px] text-[#0F172A]'>
                <span className='flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#E0F2FE] text-[#2563EB]'>
                  <FiShield className='h-[14px] w-[14px]' />
                </span>
                <span>We will verify the account name before you approve the transfer.</span>
              </div>
            </div>
          </div>

          <div className='w-full max-w-[420px] self-start'>
            <div className='flex flex-col gap-[18px]'>
              <div className='rounded-[22px] border border-[#D9EAF8] bg-[#F5F9FE] p-[18px]'>
                <h3 className='text-[20px] font-extrabold tracking-[-0.03em] text-[#0F172A]'>How bank transfer works</h3>

                <div className='mt-[18px] flex flex-col gap-[12px]'>
                  {[ 
                    'Enter your bank and account details',
                    'Confirm the matched account name',
                    'Verify the payment with your phone',
                  ].map((step, index) => (
                    <div key={step} className='flex items-center gap-[12px] rounded-[12px] border border-[#E2E8F0] bg-white px-[12px] py-[12px]'>
                      <span className='flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#E0F2FE] text-[12px] font-bold text-[#2563EB]'>
                        {index + 1}
                      </span>
                      <span className='text-[15px] text-[#334155]'>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className='rounded-[22px] border border-[#D9EAF8] bg-[#F5F9FE] p-[18px]'>
                <div className='flex items-center gap-[12px] rounded-[14px] bg-[#F8FBFF] px-[14px] py-[14px]'>
                  <span className='flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#E0F2FE] text-[#2563EB]'>
                    <FiHome className='h-[18px] w-[18px]' />
                  </span>
                  <span className='text-[20px] font-extrabold tracking-[-0.03em] text-[#0F172A]'>Bank Transfer</span>
                </div>

                <div className='mt-[18px] flex items-center justify-between gap-[12px] text-[15px] text-[#334155]'>
                  <span>Amount</span>
                  <span className='text-[16px] font-bold text-[#0F172A]'>₦{Number(selectedAmount || 0).toLocaleString()}.00</span>
                </div>

                <button
                  type='button'
                  onClick={onContinue}
                  className='mt-[18px] w-full rounded-full bg-[#3B82F6] px-[18px] py-[14px] text-[18px] font-bold text-white transition hover:bg-[#2563EB]'
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
