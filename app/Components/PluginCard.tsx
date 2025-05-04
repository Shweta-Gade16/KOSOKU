import React from "react";

interface PluginCardProps {
  title: string;
  version: string;
  description: string;
  iconColor: string;
}

const PluginCard: React.FC<PluginCardProps> = ({ title, version, description, iconColor }) => {
  return (
    <div className="self-stretch p-8 bg-white rounded-2xl inline-flex flex-col justify-start items-start gap-10 overflow-hidden">
      <div className={`w-16 h-16 relative ${iconColor} rounded-2xl overflow-hidden`}>
        <div className="w-10 h-10 left-[16px] top-[16px] absolute overflow-hidden">
          <div className="w-8 h-9 left-[3.75px] top-[1.25px] absolute bg-white"></div>
        </div>
      </div>

      <div className="w-full max-w-[488px] flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="self-stretch text-black text-2xl font-semibold leading-7">
            {title}
          </div>
          <div className="self-stretch opacity-80 text-black text-base font-normal leading-relaxed">
            {version}
          </div>
          <div className="self-stretch opacity-80 text-black text-base font-normal leading-relaxed">
            {description}
          </div>
        </div>

        <div className="self-stretch flex flex-col justify-center items-start gap-4">
          <button className="self-stretch px-6 py-4 bg-white rounded-lg outline  outline-offset-[-1px] outline-blue-500/20 flex justify-center items-center gap-2">
            <span className="text-blue-700 text-base font-semibold">View Details</span>
          </button>
          <button className="self-stretch px-6 py-4 bg-blue-700 text-white rounded-lg flex justify-center items-center gap-2">
            <span className="text-base font-semibold">Download</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PluginCard;
