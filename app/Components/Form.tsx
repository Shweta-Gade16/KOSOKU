'use client';

import React from 'react';
import ButtonPurple from './button-purple';

const Form: React.FC = () => {
  return (
    <section className="min-h-screen flex justify-center items-center px-10 py-28">
      <div className="w-full max-w-[1216px] rounded-2xl bg-white shadow-[0px_20px_72px_0px_rgba(13,53,75,0.15)] flex flex-wrap lg:flex-nowrap overflow-hidden">
        <div
          className="w-full lg:w-1/2 p-8 lg:p-12 bg-cover bg-center text-white flex flex-col bg-[url('/form-bg.png')]" >
          <p className="orbitron-font tracking-[0.55em] text-xs uppercase font-bold opacity-80">
            Reach Us Today
          </p>
          <h1 className="mt-4 text-4xl lg:text-5xl font-semibold leading-snug">
            Let’s Simplify <br /> Your Steel Detailing
          </h1>
          <p className="mt-4 text-base lg:text-lg opacity-80 leading-relaxed">
            Our automation solutions for Tekla can save you time, minimize
            errors, and boost productivity. Tell us your needs, and let’s find
            the right solution for you.
          </p>
        </div>

        <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col gap-6">
          <div className="w-full gap-0">
            <h5 className="self-stretch justify-start text-V1-Color-Black-1000 text-xl font-semibold font-Poppins leading-normal mb-0">
              Book a 15-minute consultation
            </h5>
            <h2 className="self-stretch opacity-80 justify-start text-V1-Color-Black-1000 text-base font-normal font-Poppins leading-relaxed mt-0">
              No obligations. No sales pitch. Just solutions.
            </h2>
          </div>

          <form className="w-full flex flex-col gap-4">
            <div className="flex flex-col md:flex-row lg:flex-row gap-4">
              <InputField label="First Name" placeholder="e.g. John" />
              <InputField label="Last Name" placeholder="e.g. Appleseed" />
            </div>

            <div className="flex flex-col md:flex-row lg:flex-row gap-4">
              <InputField label="Email Address" placeholder="e.g. john@example.com" />
              <InputField label="Phone Number" placeholder="e.g. +1-234-567-890" />
            </div>

            <InputField label="Company Name" placeholder="e.g. Lorem Ipsum Inc." />
            <TextareaField
              label="Briefly describe your needs or challenges"
              placeholder="Let us know how we can help you!"
            />
            <ButtonPurple label="Book a 15-minute consultation" />
          </form>
        </div>
      </div>
    </section>
  );
};

interface InputFieldProps {
  label: string;
  placeholder: string;
}
const InputField: React.FC<InputFieldProps> = ({ label, placeholder }) => (
  <div className="w-full flex flex-col gap-2">
    <label className="text-sm font-medium">
      {label}
      <span className="text-pink-500">*</span>
    </label>
    <input
      type="text"
      name={label.toLowerCase().replace(' ', '')}
      placeholder={placeholder}
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none "
    />
  </div>
);

interface TextareaFieldProps {
  label: string;
  placeholder: string;
}
const TextareaField: React.FC<TextareaFieldProps> = ({ label, placeholder }) => (
  <div className="w-full flex flex-col gap-2">
    <label className="text-sm font-medium">
      {label}
      <span className="text-pink-500">*</span>
    </label>
    <textarea
      placeholder={placeholder}
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none resize-none h-32"
    />
  </div>
);

export default Form;
