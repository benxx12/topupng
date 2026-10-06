import React from 'react';
import { FiCheck, FiChevronLeft, FiDownload, FiHeadphones } from 'react-icons/fi';
import ProgressSteps from './ProgressSteps';

export default function PaymentCompletePage({
  selectedAmount = 3000,
  onBack,
  onBackHome,
  reference = 'TUN-8F4K9J1',
  method = 'Bank transfer',
  date = '29 Sep, 3:12 PM',
  newBalance = '₦9,850.00',
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
            <h1 className='text-[28px] font-extrabold tracking-[-0.04em] text-[#0F172A] md:text-[32px]'>Payment Complete</h1>
            <p className='text-[14px] text-[#64748B] md:text-[16px]'>Your wallet funding has been processed successfully</p>
          </div>

          <div className='w-full max-w-[420px]'>
            <ProgressSteps activeStep={4} />
          </div>
        </div>

        <div className='flex flex-col gap-[24px] xl:flex-row xl:items-stretch xl:justify-between'>
          <div className='w-full max-w-[760px] rounded-[24px] border border-[#E2E8F0] bg-white p-[20px] md:p-[28px]'>
            <div className='flex flex-col items-center justify-center px-[10px] py-[12px]'>
              <div className='flex h-[75px] w-[75px] items-center justify-center rounded-full bg-[#DFF7E9] text-[#1EB36A] shadow-[0_12px_28px_rgba(16,185,129,0.18)]'>
                <FiCheck className='h-[34px] w-[34px]' />
              </div>

              <h2 className='mt-[24px] text-[28px] font-extrabold tracking-[-0.04em] text-[#0F172A]'>Wallet Funded</h2>
              <p className='mt-[8px] text-[16px] text-[#64748B]'>₦{Number(selectedAmount || 0).toLocaleString()}.00 has been added to your wallet.</p>

              <div className='mt-[24px] flex w-full items-center justify-between gap-[12px] rounded-[18px] border border-[#D9EAF8] bg-[#EAF4FF] px-[18px] py-[18px]'>
                <div>
                  <p className='text-[11px] font-semibold tracking-[0.16em] text-[#64748B] uppercase'>New wallet balance</p>
                  <p className='mt-[8px] text-[30px] font-extrabold tracking-[-0.04em] text-[#2563EB]'>{newBalance}</p>
                </div>

                <span className='flex items-center gap-[8px] rounded-full bg-[#DFF7E9] px-[12px] py-[8px] text-[12px] font-semibold text-[#166534]'>
                  <FiCheck className='h-[14px] w-[14px]' />
                  Successful
                </span>
              </div>

              <button
                type='button'
                onClick={onBackHome}
                className='mt-[24px] w-full rounded-full bg-[#3B82F6] px-[18px] py-[16px] text-[20px] font-bold text-white shadow-[0_14px_32px_rgba(37,99,235,0.25)] transition hover:bg-[#2563EB]'
              >
                Back to home
              </button>
            </div>
          </div>

          <div className='w-full max-w-[420px] self-start'>
            <div className='rounded-[22px] border border-[#D9EAF8] bg-white p-[18px]'>
              <div className='flex items-center justify-between gap-[12px]'>
                <h3 className='text-[20px] font-extrabold tracking-[-0.03em] text-[#0F172A]'>Transaction receipt</h3>
                <button type='button' aria-label='Download receipt' className='flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#E0F2FE] text-[#3B82F6]'>
                  <FiDownload className='h-[16px] w-[16px]' />
                </button>
              </div>

              <div className='mt-[18px] space-y-[12px] text-[15px] text-[#334155]'>
                <div className='flex items-center justify-between gap-[12px]'>
                  <span>Reference</span>
                  <span className='font-semibold text-[#0F172A]'>{reference}</span>
                </div>
                <div className='flex items-center justify-between gap-[12px]'>
                  <span>Method</span>
                  <span className='font-semibold text-[#0F172A]'>{method}</span>
                </div>
                <div className='flex items-center justify-between gap-[12px]'>
                  <span>Date</span>
                  <span className='font-semibold text-[#0F172A]'>{date}</span>
                </div>
                <div className='flex items-center justify-between gap-[12px]'>
                  <span>New balance</span>
                  <span className='font-semibold text-[#0F172A]'>{newBalance}</span>
                </div>
              </div>
            </div>

            <div className='mt-[18px] rounded-[22px] border border-[#D9EAF8] bg-white p-[18px]'>
              <div className='flex items-center gap-[12px]'>
                <span className='flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#E0F2FE] text-[#2563EB]'>
                  <FiHeadphones className='h-[16px] w-[16px]' />
                </span>
                <div>
                  <h4 className='text-[20px] font-extrabold tracking-[-0.03em] text-[#0F172A]'>Need help with this transaction?</h4>
                  <p className='mt-[6px] text-[14px] text-[#64748B]'>Our support team is available 24/7.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
