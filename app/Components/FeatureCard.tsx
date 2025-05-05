import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode; 
  text: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, text }) => (
  <div className="w-full h-[130px] max-w-[384px] rounded-2xl p-6 sm:p-8 bg-[#F7F9F8] flex flex-col justify-center items-center ">
    <div className="flex items-center gap-[24px] w-full">
      <div className="flex-shrink-0">{icon}</div>
      <h6 className="font-poppins font-semibold text-sm sm:text-base md:text-[18px] leading-[120%] tracking-normal text-[#040404] text-center sm:text-left">
        {text}
      </h6>
    </div>
  </div>
);

export default FeatureCard;
