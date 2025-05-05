import React from 'react';
import Image from 'next/image';
import { LogoFacebook, LogoInstagram, LogoLinkedin } from '@carbon/icons-react';

const Footer: React.FC = () => {
  return (
    <div
      className="w-full px-6 py-16 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center gap-4 overflow-hidden"
      style={{ backgroundImage: "url('/Footer-bg.png')" }}
    >
      <div className="w-full max-w-[1216px] flex flex-col gap-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-4 w-full md:w-96">
            <Image
              src="/logo.png"
              alt="Kosoku Logo"
              width={208}
              height={40}
              className="w-52"
            />
            <p className="w-[208px] text-white text-sm font-normal leading-[160%] tracking-normal font-poppins">
              Reduce manual work, minimize errors, and boost productivity with
              Kosoku’s Tekla automation solutions.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 flex-1">
          <div className="flex flex-col gap-4 md:w-1/3">
            <h3 className="text-white text-sm sm:text-base md:text-xl font-semibold">
              Our Site
            </h3>
            {['Home', 'About Us', 'Services', 'Case Studies', 'Blog', 'FAQs'].map((item, index) => (
              <a
                key={index}
                href={`#${item.replace(/\s+/g, '').toLowerCase()}`}
                className="text-white text-xs sm:text-sm md:text-lg font-poppins font-normal leading-[150%]"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 md:w-1/3">
            <h3 className="text-white text-sm sm:text-base md:text-xl font-semibold">
              Privacy
            </h3>
            {['Cookies', 'Privacy Policy', 'Terms & Conditions'].map((item, index) => (
              <a
                key={index}
                href={`#${item.replace(/\s+/g, '').toLowerCase()}`}
                className="text-white text-xs sm:text-sm md:text-lg font-poppins font-normal leading-[150%]"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-4">
          <h3 className="text-white text-sm sm:text-base md:text-xl font-semibold">
            Contact Us
          </h3>
          <p className="text-white text-xs sm:text-sm md:text-lg leading-[150%]">
            +91 9657421755
          </p>
          <p className="text-white text-xs sm:text-sm md:text-lg leading-[150%]">
            inquire@kosoku.tech
          </p>
          <p className="text-white text-xs sm:text-sm md:text-lg font-normal leading-[150%]">
            2nd Floor, Aditi Commerce, Baner, Pune, Maharashtra, India
          </p>
          <button className="max-w-[121px] h-[41px] px-4 py-3 bg-white/25 rounded-lg flex justify-center items-center gap-2 hover:bg-white/50">
            <span className="block text-white text-nowrap text-xs sm:text-sm md:text-base font-semibold font-poppins leading-[120%] tracking-normal text-center">
              Get in Touch
            </span>
          </button>
        </div>
        </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:justify-between md:items-center">
          <p className="text-white text-sm sm:text-base md:text-lg text-center md:text-left">
            2025 Kosoku Technologies Private Limited
          </p>
          <div className="flex justify-center md:justify-start gap-6">
            <a href="https://facebook.com" target="_blank" aria-label="Facebook">
              <LogoFacebook className="w-6 h-6 text-white hover:text-gray-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <LogoLinkedin className="w-6 h-6 text-white hover:text-gray-300" />
            </a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram">
              <LogoInstagram className="w-6 h-6 text-white hover:text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
