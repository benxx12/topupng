import React from 'react';
import { FiCheck, FiChevronLeft, FiShield } from 'react-icons/fi';
import ProgressSteps from './ProgressSteps';

export default function ConfirmAccountPage({
  selectedAmount = 1000,
  onBack,
  onContinue,
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
              className='mb-[2px] flex w-fit items-center gap-[6px] text-[12px] font-semibold text-[#475569] transition hover:text-[#2563EB]'
            >
              <FiChevronLeft className='h-[16px] w-[16px]' />
              Back
            </button>
            <h1 className='text-[28px] font-extrabold tracking-[-0.04em] text-[#0F172A] md:text-[32px]'>Confirm Account</h1>
            <p className='text-[14px] text-[#64748B] md:text-[16px]'>Review the matched account before continuing</p>
          </div>

          <div className='w-full max-w-[420px]'>
            <ProgressSteps activeStep={3} />
          </div>
        </div>

        <div className='flex flex-col gap-[24px] xl:flex-row xl:items-stretch xl:justify-between'>
          <div className='w-full max-w-[760px] rounded-[24px] border border-[#E2E8F0] bg-white p-[20px] md:p-[28px]'>
            <div className='flex items-center gap-[16px] rounded-[16px] border border-[#BEE8D2] bg-[#EAFBF1] px-[18px] py-[18px]'>
              <span className='flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#22C55E] text-white'>
                <FiCheck className='h-[16px] w-[16px]' />
              </span>

              <div>
                <p className='text-[20px] font-extrabold tracking-[-0.03em] text-[#0F172A]'>Account verified</p>
                <p className='mt-[2px] text-[14px] text-[#0F172A]/80'>The account information matches your bank record</p>
              </div>
            </div>

            <div className='mt-[24px] space-y-[18px]'>
              <div className='grid gap-[18px] md:grid-cols-2'>
                <div>
                  <label className='mb-[8px] block text-[14px] font-semibold text-[#334155]'>Select Bank</label>
                  <div className='flex items-center justify-between rounded-[14px] border border-[#CBD5E1] bg-[#F8FAFC] px-[14px] py-[14px]'>
                    <span className='text-[16px] font-medium text-[#0F172A]'>{bankName}</span>
                    <button type='button' className='text-[14px] font-semibold text-[#2563EB]'>Change</button>
                  </div>
                </div>

                <div>
                  <label className='mb-[8px] block text-[14px] font-semibold text-[#334155]'>Account Number</label>
                  <div className='rounded-[14px] border border-[#CBD5E1] bg-[#F8FAFC] px-[14px] py-[14px] text-[16px] font-medium text-[#0F172A]'>
                    {accountNumber}
                  </div>
                </div>
              </div>

              <div>
                <label className='mb-[8px] block text-[14px] font-semibold text-[#334155]'>Account Name</label>
                <div className='rounded-[14px] border border-[#CBD5E1] bg-[#F8FAFC] px-[14px] py-[14px] text-[16px] font-medium text-[#0F172A]'>
                  {accountName}
                </div>
              </div>

              <div>
                <label className='mb-[8px] block text-[14px] font-semibold text-[#334155]'>Amount</label>
                <div className='flex items-center rounded-[14px] border border-[#CBD5E1] bg-[#F8FAFC] px-[14px] py-[14px]'>
                  <span className='mr-[8px] text-[18px] text-[#64748B]'>₦</span>
                  <input
                    type='number'
                    defaultValue={selectedAmount}
                    className='w-full bg-transparent text-[15px] text-[#0F172A] outline-none placeholder:text-[#94A3B8]'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='w-full max-w-[420px] self-start'>
            <div className='rounded-[24px] border border-[#D9EAF8] bg-[#F5F9FE] p-[20px]'>
              <h3 className='text-[20px] font-extrabold tracking-[-0.03em] text-[#0F172A]'>Transfer overview</h3>

              <div className='mt-[18px] space-y-[14px] text-[15px] text-[#334155]'>
                <div className='flex items-center justify-between gap-[12px] border-b border-[#E2E8F0] pb-[12px]'>
                  <span>Bank</span>
                  <span className='font-semibold text-[#0F172A]'>{bankName}</span>
                </div>

                <div className='flex items-center justify-between gap-[12px] border-b border-[#E2E8F0] pb-[12px]'>
                  <span>Account number</span>
                  <span className='font-semibold text-[#0F172A]'>{accountNumber}</span>
                </div>

                <div className='flex items-center justify-between gap-[12px] border-b border-[#E2E8F0] pb-[12px]'>
                  <span>Account name</span>
                  <span className='font-semibold text-[#0F172A]'>{accountName}</span>
                </div>

                <div className='flex items-center justify-between gap-[12px] border-b border-[#E2E8F0] pb-[12px]'>
                  <span>Amount</span>
                  <span className='font-semibold text-[#0F172A]'>₦{Number(selectedAmount || 0).toLocaleString()}.00</span>
                </div>
              </div>

              <div className='mt-[22px] flex items-center justify-between gap-[12px]'>
                <span className='text-[15px] font-semibold text-[#334155]'>Total to fund</span>
                <span className='text-[22px] font-extrabold tracking-[-0.04em] text-[#2563EB]'>₦{Number(selectedAmount || 0).toLocaleString()}.00</span>
              </div>

              <div className='mt-[18px] flex items-center gap-[10px] rounded-[12px] bg-[#E0F2FE] px-[12px] py-[12px] text-[13px] text-[#0F172A]'>
                <span className='flex h-[22px] w-[22px] items-center justify-center rounded-full bg-white text-[#2563EB]'>
                  <FiShield className='h-[12px] w-[12px]' />
                </span>
                <span>Confirm the account name carefully before you continue.</span>
              </div>

              <button
                type='button'
                onClick={onContinue}
                className='mt-[18px] w-full rounded-[14px] bg-[#2563EB] px-[18px] py-[14px] text-[18px] font-bold text-white transition hover:bg-[#1D4ED8]'
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
