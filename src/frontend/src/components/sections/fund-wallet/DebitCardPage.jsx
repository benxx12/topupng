import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import ProgressSteps from './ProgressSteps';

export default function DebitCardPage({
  selectedAmount = 1000,
  onBack,
  onFundWallet,
}) {

 

  return (
    <div className='w-full'>
      
      <div className='flex flex-col gap-[20px] md:gap-[28px]'>
        <div className='flex flex-col gap-[18px] xl:flex-row xl:items-center xl:justify-between'>
          <div className='flex flex-col gap-[8px]'>
            <button
              type='button'
              onClick={onBack}
              className='mb-[2px] flex w-fit items-center gap-[6px] text-[12px] font-semibold text-[#475569] transition hover:text-[#2563EB]'
            >
              <FiChevronLeft className='h-[16px] w-[16px]' />
              Back
            </button>
            <h1 className='text-[28px] font-extrabold tracking-[-0.04em] text-[#0F172A] md:text-[32px]'>Debit Card</h1>
            <p className='text-[14px] text-[#64748B] md:text-[16px]'>Enter your card details to fund your wallet securely</p>
          </div>

          <div className='w-full max-w-[420px]'>
            <ProgressSteps activeStep={2} />
          </div>
        </div>

        <div className='flex flex-col gap-[24px] xl:flex-row xl:items-stretch xl:justify-between'>
          <div className='w-full max-w-[760px] rounded-[24px] border border-[#E2E8F0] bg-white p-[20px] md:p-[28px]'>
            <div className='flex flex-col gap-[8px]'>
              <h2 className='text-[18px] font-extrabold tracking-[-0.03em] text-[#0F172A] md:text-[22px]'>Card details</h2>
              <p className='text-[14px] text-[#64748B] md:text-[15px]'>We accept Visa, Mastercard and Verve cards</p>
            </div>

            <div className='mt-[26px] flex flex-col gap-[18px]'>
              <label className='block'>
                <span className='mb-[8px] block text-[14px] font-semibold text-[#334155]'>Cardholder Name</span>
                <input
                  type='text'
                  placeholder='Name on card'
                  className='w-full rounded-[14px] border border-[#CBD5E1] bg-[#F8FAFC] px-[14px] py-[14px] text-[15px] text-[#0F172A] outline-none placeholder:text-[#94A3B8]'
                />
              </label>

              <label className='block'>
                <span className='mb-[8px] block text-[14px] font-semibold text-[#334155]'>Card Number</span>
                <div className='flex items-center rounded-[14px] border border-[#CBD5E1] bg-[#F8FAFC] px-[14px] py-[14px]'>
                  <input
                    type='text'
                    placeholder='1234 5678 9012 3456'
                    className='w-full bg-transparent text-[15px] text-[#0F172A] outline-none placeholder:text-[#94A3B8]'
                  />
                  <span className='ml-[12px] rounded-[8px] bg-[#F1F5F9] px-[10px] py-[5px] text-[12px] font-bold text-[#475569]'>VISA</span>
                </div>
              </label>

              <div className='grid gap-[18px] md:grid-cols-2'>
                <label className='block'>
                  <span className='mb-[8px] block text-[14px] font-semibold text-[#334155]'>Expiry Date</span>
                  <input
                    type='text'
                    placeholder='MM/YY'
                    className='w-full rounded-[14px] border border-[#CBD5E1] bg-[#F8FAFC] px-[14px] py-[14px] text-[15px] text-[#0F172A] outline-none placeholder:text-[#94A3B8]'
                  />
                </label>

                <label className='block'>
                  <span className='mb-[8px] block text-[14px] font-semibold text-[#334155]'>CVV</span>
                  <div className='flex items-center gap-[8px]'>
                    <input
                      type='text'
                      placeholder='123'
                      className='w-full rounded-[14px] border border-[#CBD5E1] bg-[#F8FAFC] px-[14px] py-[14px] text-[15px] text-[#0F172A] outline-none placeholder:text-[#94A3B8]'
                    />
                    <span className='whitespace-nowrap text-[12px] font-medium text-[#2563EB]'>What is this?</span>
                  </div>
                </label>
              </div>

              <label className='block'>
                <span className='mb-[8px] block text-[14px] font-semibold text-[#334155]'>Amount</span>
                <div className='flex items-center rounded-[14px] border border-[#CBD5E1] bg-[#F8FAFC] px-[14px] py-[14px]'>
                  <span className='mr-[8px] text-[18px] text-[#64748B]'>₦</span>
                  <input
                    type='number'
                    min='50'
                    defaultValue={selectedAmount}
                    className='w-full bg-transparent text-[15px] text-[#0F172A] outline-none placeholder:text-[#94A3B8]'
                  />
                </div>
              </label>
            </div>
          </div>

          <div className='w-full max-w-[420px] self-start'>
            <div className='rounded-[24px] border border-[#D9EAF8] bg-[#F5F9FE] p-[20px] shadow-[0_10px_24px_rgba(148,163,184,0.08)]'>
              <div className='rounded-[20px] bg-gradient-to-r from-[#3B82F6] to-[#2563EB] p-[18px] text-white shadow-[0_18px_34px_rgba(37,99,235,0.22)]'>
                <div className='flex items-center justify-between gap-[12px]'>
                  <p className='text-[12px] font-semibold tracking-[0.16em] text-blue-100 uppercase'>TopUpNG</p>
                  <p className='text-[12px] font-semibold tracking-[0.16em] text-blue-100'>VISA</p>
                </div>

                <div className='mt-[28px] flex items-center gap-[10px]'>
                  {Array.from({ length: 8 }).map((_, index) => (
                    <span key={index} className='h-[10px] w-[10px] rounded-full bg-white/80' />
                  ))}
                  <span className='ml-[10px] text-[16px] font-semibold tracking-[0.12em] text-white'>3456</span>
                </div>

                <div className='mt-[26px] flex items-end justify-between gap-[14px]'>
                  <div>
                    <p className='text-[10px] font-semibold tracking-[0.16em] text-blue-100 uppercase'>Cardholder Name</p>
                    <p className='mt-[8px] text-[12px] font-semibold tracking-[0.16em] text-white'>MM/YY</p>
                  </div>
                  <p className='text-[12px] font-semibold tracking-[0.12em] text-white'>MM/YY</p>
                </div>
              </div>

              <div className='mt-[18px] rounded-[18px] border border-[#D9EAF8] bg-[#F8FBFF] p-[18px]'>
                <h3 className='text-[18px] font-extrabold tracking-[-0.03em] text-[#0F172A]'>Payment summary</h3>

                <div className='mt-[18px] space-y-[12px] text-[15px] text-[#334155]'>
                  <div className='flex items-center justify-between gap-[12px]'>
                    <span>Funding method</span>
                    <span className='font-semibold text-[#0F172A]'>Debit Card</span>
                  </div>
                  <div className='flex items-center justify-between gap-[12px]'>
                    <span>Amount</span>
                    <span className='font-semibold text-[#0F172A]'>₦{Number(selectedAmount || 0).toLocaleString()}.00</span>
                  </div>
                </div>

                <div className='mt-[18px] flex items-center gap-[10px] rounded-[12px] bg-[#E0F2FE] px-[12px] py-[12px] text-[13px] text-[#0F172A]'>
                  <span className='flex h-[22px] w-[22px] items-center justify-center rounded-full bg-white text-[#2563EB]'>✓</span>
                  <span>Your card information is encrypted and never stored.</span>
                </div>

                <button
                  type='button'
                  onClick={onFundWallet}
                  className='mt-[18px] w-full rounded-[14px] bg-[#2563EB] px-[18px] py-[14px] text-[18px] font-bold text-white transition hover:bg-[#1D4ED8]'
                >
                  Fund Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
