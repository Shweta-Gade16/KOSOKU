import React from "react";
import { ChevronDown } from "@carbon/icons-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCardProps {
  faq: FAQItem;
  isOpen: boolean;
  toggle: () => void;
}

const FAQCard: React.FC<FAQCardProps> = ({ faq, isOpen, toggle }) => {
  return (
    <div
      className=" w-full max-w-[800px]  h-auto flex flex-col gap-6 p-6 rounded-lg border border-gray-300 bg-white ">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggle}>
        <h6 className="text-lg font-poppins font-semibold text-[#040404] leading-[120%] tracking-normal">
          {faq.question}
        </h6>
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-md bg-[#D95DFB26] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}>
          <ChevronDown className="text-[#D95DFB] w-5 h-5" />
        </div>
      </div>
      {isOpen && (
        <h2 className="text-base font-poppins font-normal leading-[160%] tracking-normal text-[#040404] opacity-80">
          {faq.answer}
        </h2>
      )}
    </div>
  );
};

export default FAQCard;
