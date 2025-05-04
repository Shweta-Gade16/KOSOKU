import React from "react";

interface StaticCardProps {
  number: string;
  description: string;
  barColor: string;
  textColor: string;
  bgColor: string;
}

const StaticCard: React.FC<StaticCardProps> = ({
  number,
  description,
  barColor,
  textColor,
  bgColor,
}) => {
  return (
    <div
      className={`relative flex w-[240px] h-[156px] rounded-[16px] p-[24px] gap-[40px] ${bgColor} shadow-[0px_20px_72px_0px_#0D354B26] items-center justify-center`}
    >
      <div className="w-[192px] h-[108px] gap-[8px]">
        <h3 className={`w-[192px] h-[48px] ${textColor} font-poppins font-semibold text-[40px] leading-[120%] tracking-normal`}>
          {number}
        </h3>
        <p className="w-[192px] h-[52px] opacity-80 font-poppins font-normal text-[16px] leading-[160%] tracking-normal">
          {description}
        </p>
      </div>
      <div
        className={`absolute right-0 h-[48px] w-[4px] ${barColor}`}
        style={{ top: "30%", transform: "translateY(-50%)" }}
      ></div>
    </div>
  );
};

export default StaticCard;
