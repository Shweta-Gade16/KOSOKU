import React from 'react';
import { ArrowRight } from '@carbon/icons-react';

interface ButtonProps {
  label: string; 
  className?: string; 
}

const ButtonPurple: React.FC<ButtonProps> = ({ label}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-lg px-6 py-4 text-white transition-all duration-300 ease-out bg-[#020961] hover:bg-gradient-to-t hover:from-[#020961] hover:to-[#D95DFB40] `}
    >
      <span className='font-semibold text-base font-poppins leading-[160%] tracking-normal'>{label}</span>
      <ArrowRight className="text-[#D95DFB]" />
    </button>
  );
};

export default ButtonPurple;
