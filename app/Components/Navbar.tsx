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
    <nav className="py-4 px-6 sm:px-8 md:px-12 lg:px-16 h-[89px] flex items-center justify-between">
      <div className="relative w-40 sm:w-44 md:w-48 lg:w-52 h-10">
        <Image
          src="/logo.png"
          alt="Logo"
          width={208.89}
          height={40}
          className="object-contain"
          priority
        />
      </div>

      <div className="md:flex lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={menuOpen}
          className="focus:outline-none"
        >
          {menuOpen ? <FiX size={30} className="text-white" /> : <FiMenu size={30} className="text-white" />}
        </button>
      </div>

      <ul className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm xl:text-[14px] text-white">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about-us">About Us</Link></li>
        <li className="relative group">
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center gap-1 hover:text-gray-300"
            aria-expanded={servicesOpen}
          >
            Services <FiChevronDown size={16} />
          </button>
          {servicesOpen && (
            <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg w-56 py-2 z-50">
              <li><Link href="/services/structural-design" className="block px-4 py-2 hover:bg-gray-100">3D Modeling</Link></li>
              <li><Link href="/services/steel-detailing" className="block px-4 py-2 hover:bg-gray-100">Custom APIs</Link></li>
              <li><Link href="/services/project-management" className="block px-4 py-2 hover:bg-gray-100">Plug-Ins</Link></li>
              <li><Link href="/services/project-management" className="block px-4 py-2 hover:bg-gray-100">Lifecycle Support</Link></li>
            </ul>
          )}
        </li>
        <li><Link href="/marketplace">Marketplace</Link></li>
        <li><Link href="/case-studies">Case Studies</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/faq">FAQ</Link></li>
        <li>
        <button className="max-w-[121px] h-[41px] px-4 py-3 bg-white/25 rounded-lg flex justify-center items-center gap-2 hover:bg-white/50">
            <span className="block text-white text-nowrap text-[14px] sm:text-sm md:text-[12px] font-semibold font-poppins leading-[120%] tracking-normal text-center">
              Get in Touch
            </span>
          </button>
        </li>
      </ul>

      {menuOpen && (
        <div className="fixed inset-0 bg-black opacity-90 flex flex-col items-center justify-center space-y-6 z-50">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 p-2 hover:bg-white/30 rounded-full"
            aria-label="Close Menu"
          >
            <FiX size={30} className="text-white" />
          </button>
          <ul className="flex flex-col items-center space-y-6 text-white text-lg">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link></li>
            <li><Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link href="/marketplace" onClick={() => setMenuOpen(false)}>Marketplace</Link></li>
            <li><Link href="/case-studies" onClick={() => setMenuOpen(false)}>Case Studies</Link></li>
            <li><Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
            <li><Link href="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link></li>
          </ul>
          <button className="px-4 py-2 bg-white/25 rounded-lg hover:bg-white/50">
            <span className="text-white font-semibold">Get in Touch</span>
          </button>
        </div>
      )}
    </nav>
  );
}
