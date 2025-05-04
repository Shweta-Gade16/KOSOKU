import React from "react";
import { ArrowRight } from "@carbon/icons-react";

interface CardProps {
  title: string;
  points: string[];
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
}

const AutomatedCard: React.FC<CardProps> = ({ title, points, icon, gradientFrom, gradientTo }) => (
  <div className="w-full max-w-[592px] rounded-[16px] px-4 sm:px-8 py-6 sm:py-12 bg-white flex flex-col gap-6 sm:gap-10">
    <div
      className="w-18 h-18 rounded-2xl flex items-center justify-center"
      style={{
        background: `linear-gradient(133.57deg, ${gradientFrom} 2.37%, ${gradientTo} 100%)`,
      }}
    >
      {icon}
    </div>
    <div className="flex flex-col gap-4">
      <h4 className="sm:text-left font-semibold text-[18px] sm:text-[24px] leading-[120%] text-[#040404]">
        {title}
      </h4>
      <ul className="list-disc font-poppins font-normal pl-5 sm:pl-6 opacity-80 text-[14px] sm:text-[16px] leading-[160%] text-[#040404]">
        {points.map((point, index) => (
          <li key={index} className="ml-0">
            {point}
          </li>
        ))}
      </ul>
      <button className="flex items-center gap-2 mt-4 sm:mt-auto font-semibold text-[14px] sm:text-[16px] text-[#020961] bg-transparent border-none">
        Learn More
        <ArrowRight size={16} color="#D95DFB" />
      </button>
    </div>
  </div>
);

export default AutomatedCard;
