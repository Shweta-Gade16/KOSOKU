"use client";

import { useState } from "react";
import Navbar from "./Components/Navbar";
import LogoSlider from "./Components/LogoSlider";
import StaticCard from "./Components/StaticCards";
import Image from "next/image";
import { AiGovernanceLifecycle, ArrowRight, Cursor_1, DataUnstructured, IbmEventAutomation, IbmKnowledgeCatalogStandard, IbmZOpenEditor, MeterAlt, UserService } from "@carbon/icons-react";
import { MdChecklist } from "react-icons/md";
import AutomatedCard from "./Components/AutomatedCards";
import { IoMdCheckmark } from "react-icons/io";
import FeatureCard from "./Components/FeatureCard";
import { Cube, Connect, Chart_3D } from '@carbon/icons-react';
import ButtonWhite from "./Components/button-white";
import DownloadButton from "./Components/DownloadButton";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import ButtonPurple from "./Components/button-purple";
import { PiStarFourFill } from "react-icons/pi";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const plugins = [
    {
      title: "Alpha Software Plugin",
      version: "Version 1.0.3.910",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non.",
        iconColor: "bg-gradient-to-br from-gray-800 to-indigo-700", 
        icon: <Cube  className="text-white h-[40px] w-[40px] " />
    },
    {
      title: "Zetta Software Plugin",
      version: "Version 1.4.0.117",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non.",
        iconColor: "bg-gradient-to-br from-indigo-800 to-fuchsia-700", 
        icon: <Connect className="text-white  h-[40px] w-[40px]" /> 
    },
    {
      title: "Gamma Software Plugin",
      version: "Version 1.4.0.117",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non.",
      iconColor:"bg-gradient-to-br from-blue-800 to-emerald-500",
      icon: <Connect className="text-white  h-[40px] w-[40px]" />
    },
    {
      title: "Echo Software Plugin",
      version: "Version 1.0.3.910",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non.",
      iconColor: " bg-gradient-to-br from-green-800 to-teal-600",
      icon: <Cube className="text-white  h-[40px] w-[40px]" /> 
    },
    {
      title: "Charlie Software Plugin",
      version: "Version 1.4.0.117",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non.",
      iconColor: "bg-gradient-to-br from-teal-500 to-fuchsia-800",
      icon: <Connect className="text-white  h-[40px] w-[40px]" />
    },
    {
      title: "Omega Software Plugin",
      version: "Version 1.4.0.117",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non.",
      iconColor: " bg-gradient-to-br from-red-600 to-red-400",
      icon: <Connect className="text-white  h-[40px] w-[40px]" />
    },
  ];
  const features = [
    {
      icon: <DataUnstructured size={32} color="#0979C5" />,
      text: "Fully customized Tekla structures automation solutions",
    },
    {
      icon: <IbmKnowledgeCatalogStandard size={32} color="#0979C5" />,
      text: "Aligned With Your Standards and Processes. No rigid systems, just seamless fit",
    },
    {
      icon: <Cursor_1 size={32} color="#0979C5" />,
      text: "Simple, intuitive UI for quick team adoption",
    },
    {
      icon: <UserService size={32} color="#0979C5" />,
      text: "Expert Support — At Every Step",
    },
    {
      icon: <MeterAlt size={32} color="#0979C5" />,
      text: "High-Speed Automation with Zero Compromise on Accuracy",
    },
  ];
  const cardsData = [
    {
      title: "3D Chart Analysis",
      points: [
        "Streamlined modeling pipelines",
        "Automated GA/fabrication drawing generation",
        "Instant BOM and material reports",
      ],
      icon: <Chart_3D size={32} color="white" />,
      gradientFrom: "#2B516C",
      gradientTo: "#301E8B",
    },
    {
      title: "Powerful Custom APIs for Tekla",
      points: [
        "Custom logic-based automation",
        "QA automation and layout control",
        "API-driven tool integration",
        "Seamless interoperability with external software",
      ],
      icon: <IbmEventAutomation size={32} color="white" />,
      gradientFrom: "#312181",
      gradientTo: "#59188E",
    },
    {
      title: "Tailored Plug-Ins & Components",
      points: [
        "Purpose-built components",
        "Lightweight UI-friendly plug-ins",
        "Custom macros for recurring tasks",
      ],
      icon: <IbmZOpenEditor size={32} color="white" />,
      gradientFrom: "#551D82",
      gradientTo: "#7F1053",
    },
    {
      title: "Full Lifecycle Support & Enablement",
      points: [
        "Implementation planning",
        "Staff enablement",
        "Dedicated technical assistance",
      ],
      icon: <AiGovernanceLifecycle size={32} color="white" />,
      gradientFrom: "#7F1053",
      gradientTo: "#D4342B",
    },
  ];
 
const logos = [
  "/Logo_1.png",
  "/Logo_2.png",
  "/Logo_3.png",
  "/Logo_4.png",
  "/Logo_5.png",
  "/Logo_6.png",
];
  
  return (
    <div className="w-full ">
      <div className="w-full min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/bg.png')] relative overflow-hidden">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <section className="relative z-10 max-w-[1440px] mx-auto w-full px-5 md:px-10 pt-24 pb-[200px]"
           aria-label="Hero Section">
      <div className="flex flex-col md:flex-row flex-wrap gap-8 items-center md:items-start">
        <div className="w-full md:max-w-[1070px] flex flex-col gap-6 p-4 text-center md:text-left">
          <div className="w-full md:w-[336px] h-[32px] rounded-[4px] flex items-center justify-center  bg-[#FFFFFF1A] py-2" >
            <span
              className="orbitron-font flex items-center gap-4 text-white text-[12px] font-bold leading-none tracking-[0.55em] uppercase text-nowrap"
              aria-hidden="true">
              <PiStarFourFill className="w-4 h-4" />
              Welcome To Kosoku
            </span>
          </div>
          <div className="flex flex-col md:items-start text-left md:text-left space-y-6">
            <h1 className="font-poppins font-semibold text-[48px] leading-[120%] text-white">
              Automate Structural Detailing—<br/> Build Smarter, Deliver Flawlessly!
            </h1>
            <p className="w-full sm:w-[592px] font-poppins font-normal text-[16px] sm:text-[18px] leading-[150%] sm:leading-[160%] text-white opacity-80 text-left sm:text-left">
              We help structural detailing professionals eliminate manual work, boost productivity by 70%+, and deliver faster with custom-built automation.
            </p>
            <button
              type="button"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white text-[#020961] font-poppins font-semibold text-sm sm:text-base md:text-lg leading-[160%] transition-all duration-300 hover:bg-gray-100 whitespace-nowrap flex-shrink-0">
              Talk to an Automation Expert
              <ArrowRight className="ml-2 text-[#D95DFB] w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </section>
      </div>
      <div className="relative z-30 -mt-16 sm:-mt-20 lg:-mt-24 px-8 sm:px-8 md:px-8 flex justify-center">
      <LogoSlider logos={logos} />
      </div>
      <section className="relative max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-10 py-16 flex flex-col gap-16 bg-white z-10">
            <div className="flex flex-col sm:flex-col lg:flex-row w-full max-w-[1216px] gap-8 lg:gap-16 mx-auto">
              <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
                <Image
                  src="/Tekla_Img.png"
                  alt="Tekla Image"
                  width={488}
                  height={560}
                  className="w-full max-w-[488px] rounded-[16px] bg-[#F7F9F8]"
                />
              </div>
              <div className="flex flex-col w-full lg:w-1/2 gap-6 order-1 lg:order-2">
                <p className="font-poppins font-semibold text-[24px] sm:text-[32px] lg:text-[40px] leading-[120%] text-[#040404] text-left">
                  Facing delays, manual bottlenecks, and growing project complexity?
                </p>
                <div className="p-6 rounded-[8px] bg-[#F7F9F8]">
                  <p className="opacity-80 font-poppins text-[14px] sm:text-[16px] leading-[160%] text-[#040404] text-left">
                    You&apos;re not alone. Steel detailing and fabrication teams deal with:
                  </p>
                  <ul className="mt-4 font-poppins font-semibold text-[14px] sm:text-[16px] leading-[160%] text-[#040404] list-disc pl-6">
                    <li>Hours wasted on repetitive modeling, connections, and drawings (GA & Fabrication).</li>
                    <li>Re-work leading to delays and cost.</li>
                  </ul>
                </div>
                <p className="opacity-80 font-poppins text-[14px] sm:text-[16px] leading-[160%] text-[#040404] text-center lg:text-left">
                  You deserve automation that works for you.
                </p>
                <button
                  className="w-full lg:w-auto h-[58px] px-6 py-3 rounded-[8px] bg-[#020961] text-white font-poppins font-semibold text-[14px] sm:text-[16px] leading-[160%] transition-transform duration-[300ms] ease-out hover:scale-105 flex items-center justify-center">
                  Talk to a Detailing Automation Expert
                  <ArrowRight className="ml-2 text-[#D95DFB] w-[16px] h-[16px]" />
                </button>
              </div>
            </div>
            <div className="w-full max-w-[1216px] p-6 sm:p-12 rounded-[16px] bg-[#F7F9F8] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
              <div className="flex flex-col w-full lg:w-1/2 gap-6">
                <h1 className="font-poppins font-semibold text-[24px] sm:text-[32px] lg:text-[40px] leading-[120%] text-[#040404] text-center lg:text-left">
                  Kosoku is your detailing automation partner
                </h1>
                <p className="opacity-80 font-poppins text-[14px] sm:text-[16px] leading-[160%] text-[#040404] text-center lg:text-left">
                  We build plug-and-play Tekla tools, macros, and APIs that reduce manual work, speed up delivery, and help you scale operations with ease. We solve structural steel problems with automation.
                </p>
              </div>
             
              <div className="flex flex-col w-full lg:w-1/2 gap-6">
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
                  <StaticCard
                    number="100+"
                    description="Structural Steel Projects Automated"
                    barColor="bg-[#0979C5]"
                    textColor="text-[#040404]"
                    bgColor="bg-white"
                  />
                  <StaticCard
                    number="70%"
                    description="Faster Detailing"
                    barColor="bg-[#00D4E2]"
                    textColor="text-[#040404]"
                    bgColor="bg-white"
                  />
                </div>
                <div className="flex justify-center lg:justify-center">
                  <StaticCard
                    number="15+"
                    description="Clients Scaling Profits"
                    barColor="bg-[#D95DFB]"
                    textColor="text-[#040404]"
                    bgColor="bg-white"
                  />
                </div>
              </div>
            </div>
              <div className="max-w-full px-[20px] sm:px-[40px] flex flex-col lg:flex-row gap-[32px]">
                  <div className="w-full lg:w-[592px] flex justify-center items-center">
                    <div className="w-full max-w-[488px] h-auto flex items-center justify-center">
                         <Image
                           src="/Tekla.png"
                           alt="Tekla Partnership"
                           width={488}
                           height={239}
                           className="rounded-md"
                         />
                      </div>
                     </div>
                     <div className="w-full lg:w-[592px] flex flex-col justify-center gap-[16px]">
                       <h5 className="orbitron-font font-bold text-[12px] leading-[100%] tracking-[0.55em] uppercase text-[#04040480] text-center lg:text-left">
                         TEKLA PARTNERSHIP
                       </h5>
                <h1 className="font-poppins font-semibold text-[24px] lg:text-[40px] leading-[120%] tracking-normal text-[#040404] text-center lg:text-left">
                  Officially Recognized by Tekla® for Cutting-Edge Automation Excellence
                </h1>
              <p className="opacity-80 font-poppins font-normal text-[14px] lg:text-[16px] leading-[160%] tracking-normal text-[#040404] text-center lg:text-left">
                  Kosoku is a Tekla Partners Program Member, recognized for delivering cutting-edge automation solutions that enhance efficiency in structural detailing automation. Our expertise in Tekla Structures allows us to develop powerful plugins that reduce manual work, streamline workflows, and improve project accuracy.
              </p>
          </div>
        </div>
      </section>
      <div className="w-full">
      <section className="w-full px-4 sm:px-6 lg:px-10 pt-28 pb-56 bg-[#F7F9F8] flex flex-col items-center">
        <div className="max-w-[592px] mx-auto flex flex-col items-center text-center gap-4">
          <h3 className="font-poppins font-semibold text-[24px] sm:text-[32px] lg:text-[40px] leading-[120%] text-[#040404]">
            Automated structural detailing that works for you
          </h3>
          <p className="opacity-80 font-poppins text-[14px] sm:text-[16px] leading-[160%] text-[#040404]">
            From macros to APIs — we build plug-and-play solutions that turn your Tekla into a performance machine.
          </p>
        </div>
        <div className="w-full max-w-[1216px] mx-auto flex flex-col gap-[32px] mt-16">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
        {cardsData.map((card, index) => (
          <AutomatedCard
            key={index}
            title={card.title}
            points={card.points}
            icon={card.icon}
            gradientFrom={card.gradientFrom}
            gradientTo={card.gradientTo}
          />
        ))}
      </div>
    </div>
        <div className=" max-w-[768px] rounded-2xl py-3 px-6 mt-12 bg-white flex flex-col sm:flex-row items-center justify-between gap-[25px] sm:gap-6">
          <div className="flex items-center gap-4">
            <MdChecklist className="text-[#D95DFB] w-4 h-4" />
            <h2 className="font-poppins text-[14px] sm:text-[16px] leading-[160%] opacity-80">
              Want us to evaluate your workflow for free?
            </h2>
          </div>
          <ButtonPurple label={"Request a Free Workflow Audit"} />
        </div>
      </section>
      <div className="w-full flex justify-center relative mt-[-120px]">
        <div
          className="w-full max-w-[1216px] h-[454px] rounded-2xl bg-gradient-to-b from-transparent to-black/50 shadow-lg relative px-6 sm:px-12 lg:px-18 py-12 lg:py-20"
          style={{
            backgroundImage: 'url("/IntegrationBG.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="max-w-[488px] h-[290px] gap-[32px] text-white">
            <h2 className="font-poppins font-semibold text-[24px] sm:text-[32px] lg:text-[40px] leading-[120%]">
              Worried about integration?
            </h2>
            <p className="opacity-80 font-poppins text-[14px] sm:text-[16px] leading-[160%] mt-4">
              Our plugins work seamlessly with your existing tools—zero disruption, instant productivity gains.
            </p>
            <button
          type="button"
          className="mt-15 px-4 py-3 rounded-lg bg-white text-[#020961] font-poppins font-semibold text-[14px] sm:text-[16px] leading-[160%] transition-all duration-300 hover:bg-gray-100 flex items-center">
          Talk to an Automation Expert
          <ArrowRight className="ml-2 text-[#D95DFB] w-4 h-4" />
        </button>
          </div>
        </div>
      </div>
      </div>
      <div className="w-full h-auto px-4 sm:px-8 md:px-10 pt-[128px] pb-[128px] bg-white">
        <div className="w-full  flex flex-col items-center gap-[80px] bg-white">
          <div className="w-full  h-auto flex flex-col gap-[32px] text-center">
            <h3 className="font-poppins font-semibold text-[32px] sm:text-[40px] md:text-[48px] leading-[120%] tracking-normal text-[#040404]">
              What You Get When You Work With Kosoku
            </h3>
          </div>
          <div className="w-full max-w-[1216px] mx-auto flex flex-wrap gap-8 justify-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="w-full sm:w-[calc(50%-16px)] md:w-[calc(100% - 564px)] lg:w-[calc(25%-12px)]"
              >
                <FeatureCard icon={feature.icon} text={feature.text} />
              </div>
            ))}
          </div>
          <div className="w-full max-w-[703px] h-auto flex flex-col items-center gap-6 px-4 sm:px-0">
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 ">
          <div className="flex items-center gap-4">
            <IoMdCheckmark className="w-5 h-5 text-[#D95DFB]" />
            <h2 className="opacity-80 text-black text-base font-normal font-poppins leading-[160%] text-center sm:text-left">
              Value Delivered in Days, Not Weeks
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <IoMdCheckmark className="w-5 h-5 text-[#D95DFB]" />
            <h2 className="opacity-80 text-black text-base font-normal font-poppins leading-[160%] text-center sm:text-left">
              No long contracts. No unnecessary costs.
            </h2>
          </div>
        </div>
        <div className="w-full flex justify-center mt-4">
          <button
            className="w-[212px] h-[58px] rounded-md bg-[#020961] text-white font-poppins font-semibold text-base sm:text-lg leading-[160%] transition-transform duration-300 ease-out hover:scale-105 flex items-center justify-center">
            <span className="flex items-center justify-center">
              Talk to our Expert
            </span>
            <ArrowRight className="text-[#D95DFB] w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
          <div className="w-full max-w-screen-xl h-auto flex flex-col items-center gap-[80px]">
            <div className="w-full sm:w-[592px] h-auto flex flex-col gap-[32px] items-center">
              <h3 className="font-poppins font-semibold text-[32px] sm:text-[40px] md:text-[48px] leading-[120%] tracking-normal text-center text-[#040404]">
                Our Client Locations
              </h3>
              <h2 className="opacity-80 font-poppins font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[160%] tracking-normal text-center text-[#040404]">
                Kosoku is proud to work with leading companies in the structural steel industry. Our automation solutions have powered 100+ successful projects for companies worldwide.
              </h2>
            </div>
            <Image
              src="/map.png"
              alt="Client Location"
              width={1008}
              height={653.55}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch px-10 py-28 bg-gray-100 flex flex-col justify-center items-center gap-32">
        <div className="w-full max-w-[592px] flex flex-col justify-start items-center gap-8">
          <h2 className="self-stretch text-center text-black text-[40px] font-semibold font-poppins leading-[120%]">
            Get Started with Kosoku<br/> with Our Free Tools
          </h2>
          <p className="self-stretch opacity-80 text-center text-black text-base sm:text-lg md:text-xl font-normal font-poppins leading-relaxed">
            We offer free software solutions to help you explore our automation
            capabilities. Download now and experience smarter steel detailing.
          </p>
        </div>
        <div className="w-full max-w-[1216px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plugins.map((plugin, index) => (
            <div
              key={index}
              className="flex-1 p-8 bg-white rounded-2xl shadow-md flex flex-col justify-start items-start gap-10">
              <div className={`w-[72px] h-[72px] ${plugin.iconColor} rounded-2xl flex justify-center items-center sm:items-start p-[16px]`}>
                {plugin.icon} 
              </div>
              <div className="w-full max-w-[488px] flex flex-col justify-start items-start gap-10">
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                  <h3 className="text-black text-2xl font-semibold font-poppins leading-7">
                    {plugin.title}
                  </h3>
                  <p className="opacity-80 text-black text-base font-normal font-poppins leading-relaxed">
                    {plugin.version}
                  </p>
                  <p className="opacity-80 text-black text-base font-normal font-poppins leading-relaxed">
                    {plugin.description}
                  </p>
                </div>
                <div className="self-stretch flex flex-col justify-center items-start gap-4">
                <ButtonWhite placeholderText="View Details" arrowColor="#0979C5" />
                <DownloadButton text="Download" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
<Form/>
<Footer/>
    </div>
  );
}
