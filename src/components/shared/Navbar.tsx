"use client";

import { useState, useEffect } from "react";
import { Menu, X, User, Search, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Sub Navbar */}
      <div
        className={`bg-white transition-transform duration-500 ease-in-out hidden md:block ${
          isScrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-14 flex justify-between items-center h-10 text-sm">
          <div className="flex gap-4">
            <span className=" text-purple-950">📞 10648</span>
            <span>✉️ hrhealthcare@hridoy.com</span>
          </div>
          <div className="flex gap-4 text-gray-600">
            <span className="flex items-center gap-2 cursor-pointer">
              <Facebook size={16} />
              <Instagram size={16} />
            </span>
            <span className="flex items-center gap-1 cursor-pointer">
              <User size={16} /> My Account
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`bg-white shadow-md fixed w-full transition-all duration-500 ease-in-out ${
          isScrolled ? "top-0" : "md:top-10"
        }`}
      >
        <div className="max-w-7xl mx-auto md:px-6 px-2 flex justify-between items-center h-20 ">
          {/* Logo */}
          <div className=" font-bold text-lg flex items-center gap-2">
            <Image
              src={
                "https://i.ibb.co.com/XrpSQmXM/Chat-GPT-Image-Sep-2-2025-11-21-57-AM.png"
              }
              alt="image"
              height={130}
              width={200}
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-6 text-sm font-medium">
            <Link
              href="/"
              className="text-purple-900 border-b-2 border-blue-600 pb-1"
            >
              HOME
            </Link>
            <Link href="/service">SERVICES</Link>
            <Link href="/doctor">OUR DOCTORS</Link>
            <Link href="/pa">PRAAVAMD</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/community">COMMUNITY</Link>
          </nav>
          <div className="flex px-4 items-center gap-2 md:gap-4">
            <button className="text-gray-600 lg:hidden">
              <Search size={24} />
            </button>
            <button className="text-gray-600 lg:hidden">
              <User size={24} />
            </button>

            <Button className="bg-[#6d237ef8] hover:bg-[#601172f8] hidden lg:block">
              Book Appointment →
            </Button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-gray-600"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-md px-4 py-3 space-y-2">
            <a href="#" className="block">
              HOME
            </a>
            <a href="#" className="block">
              SERVICES
            </a>
            <a href="#" className="block">
              OUR DOCTORS
            </a>
            <a href="#" className="block">
              PRAAVAMD
            </a>
            <a href="#" className="block">
              ABOUT
            </a>
            <a href="#" className="block">
              COMMUNITY
            </a>
            <div className="pt-2">
              <Button className="w-full bg-[#611074] ">
                Book Appointment →
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
