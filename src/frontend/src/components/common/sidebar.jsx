import React from "react";
import logo from "../../assets/logos/w-logo-icon.svg";

const Sidebar = () => {
  return (
    <div className=" max-w-[560px] h-[100vh] flex-col justify-between p-[48px] bg-gradient-to-r to-[#1E52E8] from-[#1e42ba] hidden md:flex ">
      {/* Top Header Text */}
      <div className="w-full max-w-[464px] flex flex-col gap-[48px] items-start">
        <div className="flex gap-[8px] items-center">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <h1 className="text-[24px] font-bold text-white">
            TopUp<span className="text-[#93C5FD]">NG</span>
          </h1>
        </div>

        <div className="flex flex-col gap-[16px]">
          <h1 className="text-[36px] text-white font-bold leading-tight">
            Top-up Airtime & Data <br /> instantly, anytime
          </h1>
          <p className="text-[15px] text-white/80 font-normal leading-relaxed">
            Experience lightning-fast mobile transactions across all major
            Nigerian network operators. Fast, Secure, Smarter.
          </p>
        </div>
      </div>

      {/* Middle Floating Transaction Cards */}
      {/* 1. Changed max-w-[320px] -> max-w-[464px] (or w-full) so it spans edge-to-edge */}
      <div className="w-full max-w-[464px] flex flex-col gap-[16px]">
        {/* Card 1 */}
        <div className="flex justify-between items-center px-[20px] py-[16px] w-full max-w-[320px] mx-auto bg-white/[0.12] backdrop-blur-md rounded-[20px] border border-white/20 ">
          {/* Left Side */}
          <div className="flex gap-[14px] items-center">
            <div className="w-10 h-10 rounded-xl bg-[#E50914] text-white font-bold flex items-center justify-center text-sm">
              A
            </div>
            <div className="flex flex-col gap-[2px]">
              <h2 className="text-[14px] font-semibold text-white">
                Data Top-up
              </h2>
              <p className="text-[12px] font-normal text-white/70">
                0802 *** 6789 • Airtel
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-[4px] items-end">
            <h2 className="text-[14px] font-semibold text-white">₦1,200</h2>
            <span className="text-[11px] font-medium text-[#10B981] bg-[#10B981]/20 rounded-md px-2 py-[2px]">
              Success
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex justify-between items-center px-[20px] py-[16px] w-full max-w-[320px] mx-auto bg-white/[0.12] backdrop-blur-md rounded-[20px] border border-white/20 ">
          {/* Left Side */}
          <div className="flex gap-[14px] items-center">
            <div className="w-10 h-10 rounded-xl bg-[#FFCC00] text-black font-bold flex items-center justify-center text-sm">
              M
            </div>
            <div className="flex flex-col gap-[2px]">
              <h2 className="text-[14px] font-semibold text-white">
                Airtime Top-up
              </h2>
              <p className="text-[12px] font-normal text-white/70">
                0803 *** 2222 • MTN
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-[4px] items-end">
            <h2 className="text-[14px] font-semibold text-white">₦1,000</h2>
            <span className="text-[11px] font-medium text-[#10B981] bg-[#10B981]/20 rounded-md px-2 py-[2px]">
              Success
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex justify-between items-center px-[20px] py-[16px] w-full max-w-[320px] mx-auto bg-white/[0.12] backdrop-blur-md rounded-[20px] border border-white/20 ">
          {/* Left Side */}
          <div className="flex gap-[14px] items-center">
            <div className="w-10 h-10 rounded-xl bg-[#008751] text-white font-bold flex items-center justify-center text-sm">
              G
            </div>
            <div className="flex flex-col gap-[2px]">
              <h2 className="text-[14px] font-semibold text-white">
                Data Top-up
              </h2>
              <p className="text-[12px] font-normal text-white/70">
                0905 *** 5555 • Glo
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-[4px] items-end">
            <h2 className="text-[14px] font-semibold text-white">₦2,500</h2>
            <span className="text-[11px] font-medium text-[#F59E0B] bg-[#F59E0B]/20 rounded-md px-2 py-[2px]">
              Pending
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full max-w-[464px] flex justify-between items-center pt-8">
        <p className="text-[12px] text-white/70 font-normal">
          © 2026 TopUpNG Technologies.
        </p>
        <div className="flex gap-[6px] items-center">
          <p className="text-[12px] font-normal text-white">🛡️ CBN Licensed</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
