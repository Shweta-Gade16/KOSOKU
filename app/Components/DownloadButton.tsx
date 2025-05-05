import { Download } from "@carbon/icons-react";
import React, { useState } from "react";

interface DownloadButtonProps {
  text: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-full h-[58px] rounded-[8px] px-[24px] py-[16px]
        flex justify-center items-center gap-[8px] transition-all duration-300 ease-out
        ${isHovered
          ? "bg-[#020961] hover:bg-gradient-to-t hover:from-[#020961] hover:to-[#D95DFB40] gap-[16px]" 
          : "bg-[#020961]"} 
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-white font-semibold text-lg">{text}</span>

      <Download className="text-[#0979C5] w-[16px] h-[16px]" />
    </div>
  );
};

export default DownloadButton;
