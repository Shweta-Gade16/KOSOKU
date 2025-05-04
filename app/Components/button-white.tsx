import React, { useState } from "react";
import { ArrowRight } from "@carbon/icons-react";

interface ButtonWhiteProps {
  placeholderText?: string;
  arrowColor?: string; 
}

const ButtonWhite: React.FC<ButtonWhiteProps> = ({
  placeholderText = "Placeholder",
  arrowColor, 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      className={`w-full px-6 py-4 rounded-lg flex items-center justify-center gap-2
        ${isHovered ? "bg-[#D95DFB40] border border-[#D95DFB26]" : "bg-white border border-blue-900/15"}
        transition-all duration-300 ease-out`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-[#020961] font-semibold text-[14px] sm:text-[16px] leading-6">
        {placeholderText}
      </span>
    
      <ArrowRight
        className="w-[16px] h-[16px]"
        style={{ color: arrowColor }} 
      />
    </button>
  );
};

export default ButtonWhite;
