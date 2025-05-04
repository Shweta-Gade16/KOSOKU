import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode; 
  text: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, text }) => (
  <div className="w-[384px] h-[130px] rounded-2xl p-[32px] gap-[24px] bg-[#F7F9F8] flex flex-col justify-center items-center">
    <div className="flex items-center gap-[24px]">
      <div className="flex-shrink-0">{icon}</div>
      <h6 className="font-poppins font-semibold text-[18px] leading-[120%] tracking-normal text-[#040404]">
        {text}
      </h6>
    </div>
  </div>
);

export default FeatureCard;
