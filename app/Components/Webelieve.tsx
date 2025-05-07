'use client';

import { CheckmarkOutline, IbmToolchain, WorkflowAutomation } from "@carbon/icons-react";
import React from "react";

const Webelieve: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full px-5 py-15 mt-6 md:mt-10">
      <div className="w-full max-w-[1216px] h-[auto] bg-white rounded-[16px] px-[48px] py-[40px] flex flex-col items-center gap-[32px] shadow-[0px_20px_72px_rgba(13,53,75,0.15)]">
        <p className="orbitron-font font-semibold text-[12px] leading-[100%] tracking-[0.55em] uppercase text-[#04040480]">
          We believe
        </p>

        <div className="flex w-full flex-col md:flex-row justify-between items-center gap-[32px]">
          <div className="flex flex-col items-center text-center gap-[16px] w-full md:w-[33%]">
            <IbmToolchain className="w-[32px] h-[32px] text-[#0979C5]" />
            <h2 className="text-[16px] md:text-[18px] font-poppins font-semibold text-[#040404] leading-[120%]">
              In removing friction, not adding more tools.
            </h2>
          </div>

          <div className="hidden md:flex w-[1px] h-[100px] bg-black opacity-[0.15]"></div>
          
          <div className="flex flex-col items-center text-center gap-[16px] w-full md:w-[33%]">
            <WorkflowAutomation className="w-[32px] h-[32px] text-[#00D4E2]" />
            <h2 className="text-[16px] md:text-[18px] font-poppins font-semibold text-[#040404] leading-[120%]">
              In automation that adapts to your workflow.
            </h2>
          </div>

          <div className="hidden md:flex w-[1px] h-[100px] bg-black opacity-[0.15]"></div>

          <div className="flex flex-col items-center text-center gap-[16px] w-full md:w-[33%]">
            <CheckmarkOutline className="w-[32px] h-[32px] text-[#D95DFB]" />
            <h2 className="text-[16px] md:text-[18px] font-poppins font-semibold text-[#040404] leading-[120%]">
              In real results, not just dashboards.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webelieve;
