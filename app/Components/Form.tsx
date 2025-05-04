'use client';

import { useState } from 'react';
import ButtonPurple from './button-purple';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};
const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };
    function handleClick(): void {
        throw new Error('Function not implemented.');
    }
  return (
    <section className="min-h-screen flex justify-center items-center px-10 py-28">
      <div className="w-full max-w-[1216px] rounded-2xl bg-white shadow-[0px_20px_72px_0px_rgba(13,53,75,0.15)] flex flex-col md:flex-row overflow-hidden">
        <div
          className="w-full md:w-1/2 p-8 md:p-12 bg-cover bg-center text-white flex flex-col"
          style={{ backgroundImage: "url('/form-bg.png')" }}
        >
          <p className="orbitron-font tracking-[0.55em] text-xs uppercase font-bold opacity-80">
            Reach Us Today
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-snug">
            Let’s Simplify <br /> Your Steel Detailing
          </h1>
          <p className="mt-4 text-base md:text-lg opacity-80 leading-relaxed">
            Our automation solutions for Tekla can save you time, minimize
            errors, and boost productivity. Tell us your needs, and let’s find
            the right solution for you.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col gap-6">
        <div className="w-full  gap-0">
        <h5 className="self-stretch justify-start text-V1-Color-Black-1000 text-xl font-semibold font-['Poppins'] leading-normal mb-0">
          Book a 15-minute consultation
        </h5>
        <h2 className="self-stretch opacity-80 justify-start text-V1-Color-Black-1000 text-base font-normal font-['Poppins'] leading-relaxed mt-0">
          No obligations. No sales pitch. Just solutions.
        </h2>
      </div>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <InputField
                label="First Name"
                name="firstName"
                placeholder="e.g. John"
                value={formData.firstName}
                onChange={handleChange}
              />
              <InputField
                label="Last Name"
                name="lastName"
                placeholder="e.g. Appleseed"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <InputField
                label="Email Address"
                name="email"
                type="email"
                placeholder="e.g. john@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              <InputField
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="e.g. +1-234-567-890"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <InputField
              label="Company Name"
              name="company"
              placeholder="e.g. Lorem Ipsum Inc."
              value={formData.company}
              onChange={handleChange}
            />
            <TextareaField
              label="Briefly describe your needs or challenges"
              name="message"
              placeholder="Let us know how we can help you!"
              value={formData.message}
              onChange={handleChange}
            />
            <ButtonPurple label="Book a 15-minute consultation" onClick={handleClick} />
          </form>
        </div>
      </div>
    </section>
  );
};

interface InputFieldProps {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}
const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  placeholder,
  type = 'text',
  value,
  onChange,
}) => (
  <div className="w-full flex flex-col gap-2">
    <label className="text-sm font-medium">
      {label}
      <span className="text-pink-500">*</span>
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
    />
  </div>
);
interface TextareaFieldProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}
const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
}) => (
  <div className="w-full flex flex-col gap-2">
    <label className="text-sm font-medium">
      {label}
      <span className="text-pink-500">*</span>
    </label>
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none h-32"
    />
  </div>
);

export default Form;
