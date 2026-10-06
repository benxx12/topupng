import React from 'react';

const steps = ['Amount', 'Details', 'Verify', 'Done'];

export default function ProgressSteps({ activeStep = 0 }) {
  return (
    <div className="flex w-full items-center justify-between gap-[12px]">
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isComplete = index < activeStep;

        return (
          <div key={step} className="flex items-center gap-[8px]">
            <div
              className={[
                'flex h-[26px] w-[26px] items-center justify-center rounded-full text-[12px] font-bold transition-all duration-200',
                isActive ? 'bg-[#3B82F6] text-white shadow-sm shadow-blue-200' : '',
                isComplete ? 'bg-[#E0F2FE] text-[#2563EB]' : 'bg-[#F1F5F9] text-[#64748B]',
              ].join(' ')}
            >
              {index + 1}
            </div>

            <span
              className={[
                'hidden text-[12px] font-semibold md:inline-block',
                isActive ? 'text-[#0F172A]' : 'text-[#64748B]',
              ].join(' ')}
            >
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
}
