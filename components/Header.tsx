"use client";

import React, { useState, useEffect } from "react";
import { navItems } from "@/lib/imports";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setPrevScrollPos(currentScrollPos);

      if (currentScrollPos > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.link.substring(1));
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.link.substring(1));
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
  className={`w-full mx-auto px-mobile-margin md:px-tablet-margin lg:px-laptop-margin h-16 md:h-20 lg:h-24 flex justify-between items-center fixed top-0 left-0 right-0 transition-transform duration-300 ${
    isVisible ? "translate-y-0" : "-translate-y-full"
  } ${
    isScrolled ? "bg-white border-b-2 border-darkblue-800/20" : "bg-transparent"
  } z-[1000]`}
>

      <div className="flex py-2 items-center">
        <div className="flex lg:hidden pr-4 w-10 md:w-12" onClick={toggleMobileMenu}>
          <Image
            src="/burger.svg"
            alt="Menu"
            width={40}
            height={40}
            className="w-10 h-10 md:w-12 md:h-12 cursor-pointer text-darkblue-700"
            onClick={toggleMobileMenu}
          />
        </div>

        <div className="flex justify-center items-center">
          <Image
          src="/KeyNuine.svg"
          alt="KeyNuine Tech"
          width={45}
          height={45}
          className="w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14"
          />
        </div>
        <div className="pl-2">
          <p className="font-bold text-md md:text-lg lg:text-xl text-darkblue-400">KEYNUINE</p>
          <p className="font-semibold text-sm md:text-base lg:text-lg text-darkblue-200">
            Technologies
          </p>
        </div>
      </div>

      <div className="flex items-center justify-end gap-8">
        <div className="hidden lg:flex gap-8">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className={`text-darkblue-300 text-sm md:text-base border-b-4 ${
                activeSection === item.link.substring(1) ? "border-b-blue-500" : "border-b-transparent"
              } hover:border-b-blue-500`}
            >
              <Link href={item.link}>{item.label}</Link>
            </div>
          ))}
        </div>

        <Link
          href="#contact"
          className="text-white py-3 px-6 text-sm md:text-base bg-blue-500"
        >
          Contact
        </Link>
      </div>

      

      {isMobileMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 backdrop-blur-sm z-[1000]" // Added z-[1000] here
          onClick={toggleMobileMenu}
        >
          <div className="bg-white w-3/4 h-screen p-6">
            <div className="flex justify-end">
              <Image
                src="/close-icon.svg"
                alt="Close Menu"
                width={24}
                height={24}
                className="w-6 h-6 md:w-8 md:h-8 cursor-pointer text-darkblue-700"
                onClick={toggleMobileMenu}
              />
            </div>

            <div className="mt-8">
              {navItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`w-fit text-darkblue-300 text-base border-b-4 ${
                    activeSection === item.link.substring(1) ? "border-b-blue-500" : "border-b-transparent"
                  } hover:border-b-blue-500 mb-4`}
                >
                  <Link href={item.link}>{item.label}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;