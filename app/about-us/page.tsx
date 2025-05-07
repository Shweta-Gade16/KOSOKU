'use client';

import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Webelieve from "../Components/Webelieve";
import Image from "next/image";
import { ArrowRight, LogoLinkedin } from "@carbon/icons-react";
import FAQCard from "../Components/FAQcard";
import Form from "../Components/Form";
import Footer from "../Components/Footer";
interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "We already use Tekla. Why add automation?",
    answer:
      "Because Tekla is only as good as the efficiency of your workflow. We unlock its full power.",
  },
  {
    question: "We’re not sure what to automate.",
    answer:
      "That’s what our free audit identifies—your top automation opportunities.",
  },
  {
    question: "Is this suitable for small teams or only big companies?",
    answer:
      "Our solutions are scalable. Whether you're a 3-person team or a 300-person firm, we tailor the automation to your setup.",
  },
  {
    question: "What if I don’t know what needs automating?",
    answer:
      "That’s exactly what we help with. Book a free audit and we’ll show you",
  },
  {
    question: "Is this going to be expensive?",
    answer:
       "Think of it this way — how much are you already spending in time, delays, and rework? Most clients say our solution pays for itself within weeks."
  },
];
const AboutUs: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  
  const [openIndex, setOpenIndex] = useState<number[]>(faqs.map((_, index) => index));

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  return (
    <div>
      <div className="relative w-full">
        <div className="w-full h-[690px] relative">
          <div className="absolute inset-0 -z-10 bg-cover bg-center h-[690px] bg-[url('/about-bg.png')]">
            <div className="absolute inset-0 bg-[#000000A8] pointer-events-none"></div>
          </div>
          <div className="absolute inset-x-0 top-0 z-20">
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
          <div className="relative w-full h-[690px] max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col items-center justify-center z-10">
            <div className="max-w-[1216px]">
              <h1 className="opacity-80 orbitron-font font-bold text-[14px] sm:text-[16px] md:text-[18px] leading-[100%] tracking-widest uppercase text-white">
                About Us
              </h1>
              <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-8 mt-6">
                <div className="w-full lg:w-1/2">
                  <p className="font-poppins font-semibold text-[28px] sm:text-[36px] md:text-[48px] leading-[120%] text-white">
                    We Don’t Just Build Tools — We Build Trust, Speed, and Accuracy
                  </p>
                </div>
                <div className="w-full lg:w-1/2">
                  <ul className="opacity-80 font-poppins font-normal text-[14px] sm:text-[16px] md:text-[16px] leading-[160%] text-white space-y-4">
                    <li>
                      After 15+ years battling manual processes, we built Kosoku to eliminate the frustrations we hated.
                    </li>
                    <li>
                      Your success = our success. We only win when you save 200+ hours/year. Kosoku is a team of structural
                      tech experts, certified Tekla developers, and problem-solvers who understand the pain points of
                      real-world detailing.
                    </li>
                    <li>
                      We help steel professionals move from manual chaos to digital clarity — by building tools that actually
                      work.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-20 -mt-[90px] lg:-mt-[180px] flex justify-center">
          <div className="w-full max-w-[1216px] px-4 sm:px-6 lg:px-10">
            <Webelieve />
          </div>
        </div>
        <div className="w-full flex justify-center items-center bg-white min-h-screen">
        <div className="w-full max-w-[1440px] px-5 sm:px-[40px] py-[64px] md:py-[112px] flex flex-col items-center bg-white">
          <div className="w-full max-w-[1216px] flex flex-col gap-[64px] items-center">
            <div className="flex flex-col gap-6 sm:gap-8 max-w-[592px] items-center text-center mx-auto">
              <h3 className="font-poppins font-semibold text-[24px] sm:text-[28px] md:text-[32px] xl:text-[40px] leading-[120%] text-[#040404]">
                Meet our Experts—they<br/> speak your language!
              </h3>
              <p className="font-poppins font-normal text-[14px] sm:text-[16px] leading-[160%] text-[#040404]">
                At Kosoku Technologies, we&apos;re committed to delivering innovative solutions that empower businesses to
                thrive in a rapidly evolving digital landscape. Partner with us to unlock the full potential of technology and
                transform your vision into reality.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-[1008px] mx-auto">
              <div className="flex flex-col w-full rounded-[16px] border border-[#0404041A] p-[32px] gap-[40px] bg-white shadow-sm">
                <Image
                  src="/co-founder-img.png"
                  alt="Chintaman Sanap - Co-Founder"
                  width={424}
                  height={360}
                  className="rounded-md object-cover w-full h-auto"
                />
                <div className="flex flex-col gap-4 items-center text-center">
                  <h4 className="font-poppins font-semibold text-lg md:text-xl lg:text-2xl leading-tight text-gray-900">
                    Chintaman Sanap
                  </h4>
                  <h2 className="font-poppins font-semibold text-sm md:text-base text-blue-600">
                    Co-Founder
                  </h2>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Chintaman brings in energy and liveliness to our organization. He is an experienced construction professional having hands-on experience in implementing strategies and operations management. He looks after day-to-day operations and implements strategies to grow and deliver business.
                  </p>
                  <div className="flex justify-center">
                    <LogoLinkedin className="w-6 md:w-8 h-6 md:h-8 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full rounded-[16px] border border-[#0404041A] p-[32px] gap-[40px] bg-white shadow-sm">
                <Image
                  src="/co-founder-img-2.png"
                  alt="Akshay Patil - Co-Founder"
                  width={424}
                  height={360}
                  className="rounded-md object-cover w-full h-auto"
                />
                <div className="flex flex-col gap-4 items-center text-center">
                  <h4 className="font-poppins font-semibold text-lg md:text-xl lg:text-2xl leading-tight text-gray-900">
                    Akshay Patil
                  </h4>
                  <h2 className="font-poppins font-semibold text-sm md:text-base text-blue-600">
                    Co-Founder
                  </h2>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Akshay has a passion for technology and loves being a part of the digital revolution. In the last 9 years, he has worked with companies like Galadari Group, JFE Engineering in India, Dubai, and Japan. He believes that technology has the potential to revolutionize the way various activities in the construction industry are done.
                  </p>
                  <div className="flex justify-center">
                    <LogoLinkedin className="w-6 md:w-8 h-6 md:h-8 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full px-5 md:px-10 xl:px-[40px] pb-20 flex justify-center">
        <div className="w-full max-w-[1216px] flex flex-col items-center gap-[40px] md:gap-[60px] xl:gap-[80px]">
          <h1 className="font-poppins font-semibold text-[28px] sm:text-[32px] md:text-[36px] xl:text-[40px] leading-[120%] text-center text-[#040404] pt-10">
            Case Studies
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 xl:gap-10 w-full ">
            {["cs-1.png", "cs-2.png", "cs-3.png", "cs-4.png"].map((img, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-white rounded-[8px] shadow-sm max-w-full w-full h-[400px] md:h-[200px] overflow-hidden">
                <div className="w-full h-[200px] md:w-[176px] md:h-[200px]">
                  <Image
                    src={`/${img}`}
                    alt={`Case Study ${index + 1}`}
                    className="w-full h-full object-cover rounded-t-[8px] md:rounded-l-[8px]"
                    width={176}
                    height={200}
                    priority
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-2  space-y-4">
                  <h2 className="font-poppins font-semibold text-[16px] md:text-[18px] xl:text-[20px] leading-[120%] text-[#040404] ">
                    Donec odio quisque volutpat mattis eros. Nullam malesuada erat ut.
                  </h2>
                  <p className="font-poppins font-normal text-[14px] md:text-[16px] leading-[160%] text-[#040404] opacity-80 line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
                    Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                    Suspendisse urna nibh viverra non semper suscipit posuere a pede.
                  </p>
                  <div className="mt-auto flex justify-start ">
                    <button className="w-fit flex items-center gap-2">
                      <span className="font-poppins font-semibold text-[12px] sm:text-[14px] md:text-[16px] leading-[160%] text-[#020961]">
                        View Case Study
                      </span>
                      <ArrowRight size={16} className="text-[#D95DFB]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="w-[200px] sm:w-[240px] md:w-[266px] h-[50px] sm:h-[54px] md:h-[58px] flex items-center justify-center gap-2 px-6 py-4 rounded-md border border-[#02096126] ">
                <span className="font-poppins font-semibold text-sm sm:text-base md:text-lg leading-[160%] text-[#020961]">
                View More Case Studies
                </span>
                  <ArrowRight size={16} className="text-[#D95DFB]" />
                </button>
              </div>
          </div>
      </section>  
      <section className="w-full h-auto px-4 md:px-10 lg:px-20 py-[64px] flex flex-col gap-[64px] mx-auto">
      <div className="w-full max-w-full md:max-w-[800px] flex flex-col gap-[64px] mx-auto">
        <h1 className="w-full text-[32px] md:text-[40px] font-poppins font-semibold leading-[120%] text-center text-[#040404]">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="w-full max-w-full md:max-w-[800px] flex flex-col gap-[24px] mx-auto">
        {faqs.map((faq, index) => (
          <FAQCard
            key={index}
            faq={faq}
            isOpen={openIndex.includes(index)}
            toggle={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </section>
    <Form/>
    <Footer/>
    </div>
  );
};

export default AboutUs;
