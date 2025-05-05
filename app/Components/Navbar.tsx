"use client";

import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="py-4 px-[24px] sm:px-[40px] md:px-[50px] lg:px-[70px] h-[89px] flex items-center justify-between relative">
      <div className="relative w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-[41px] flex-shrink-0">
        <Image
          src="/logo.png"
          alt="Logo"
          width={208.89}
          height={40}
          className="object-contain"
        />
      </div>
      <div className="md:flex lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FiX size={30} className="text-white" />
          ) : (
            <FiMenu size={30} className="text-white" />
          )}
        </button>
      </div>

      <ul className="hidden lg:flex h-[41px] items-center gap-6 xl:gap-8 font-Poppins font-normal text-[14px] xl:text-[16px] text-white relative">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
        </li>
        <li className="relative group">
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center gap-1 hover:text-gray-300 transition"
          >
            Services <FiChevronDown size={16} />
          </button>

          {servicesOpen && (
            <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg w-48 py-2 z-50">
              <li>
                <Link
                  href="/services/structural-design"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setServicesOpen(false)}
                >
                  Efficient 3D Modeling and Drawing Workflows
                </Link>
              </li>
              <li>
                <Link
                  href="/services/steel-detailing"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setServicesOpen(false)}
                >
                  Powerful Custom APIs for Tekla
                </Link>
              </li>
              <li>
                <Link
                  href="/services/project-management"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setServicesOpen(false)}
                >
                  Tailored Plug-Ins & Components
                </Link>
              </li>
              <li>
                <Link
                  href="/services/project-management"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setServicesOpen(false)}
                >
                  Full Lifecycle Support & Enablement
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/case-studies">Marketplace</Link>
        </li>
        <li>
          <Link href="/case-studies">Case Studies</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
        <button className="w-[121px] h-[41px] px-4 py-3 flex items-center justify-center gap-2 text-white text-[14px] font-semibold rounded-lg bg-white/25">
          Get in Touch
        </button>
      </ul>

      {menuOpen && (
        <div className="fixed inset-0 bg-black opacity-90 flex flex-col items-center justify-center space-y-6 z-50 transform transition-all duration-300 md:flex lg:hidden">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 w-[50px] h-[50px]  flex items-center justify-center rounded-full hover:bg-white/30"
          >
            <FiX size={30} className="text-white" />
          </button>
          <ul className="flex flex-col items-center space-y-6 text-white text-xl">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/case-studies" onClick={() => setMenuOpen(false)}>
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/faq" onClick={() => setMenuOpen(false)}>
                FAQ
              </Link>
            </li>
          </ul>
          <button className="max-w-[121px] h-[41px] px-4 py-3 bg-white/25 rounded-lg flex justify-center items-center gap-2 hover:bg-white/40 transition-colors">
            <span className="block text-white text-nowrap text-xs sm:text-sm md:text-base font-semibold font-poppins leading-[120%] tracking-normal text-center">
              Get in Touch
            </span>
          </button>
        </div>
      )}
    </nav>
  );
}
