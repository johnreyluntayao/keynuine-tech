"use client";

import React, { useState, useEffect } from "react";
import { navItems } from "@/lib/imports";
import Link from "next/link";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
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
      className={`px-mobile-margin md:px-tablet-margin lg:px-laptop-margin h-16 md:20 border-b-1 border-blue-50 flex justify-between fixed top-0 left-0 right-0 bg-white transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex py-2 items-center">
        <div className="flex md:hidden pr-4 w-10" onClick={toggleMobileMenu}>
          <img
            src="/burger.svg"
            alt="Menu"
            className="w-10 h-10 cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>

        <div className="flex justify-center items-center bg-gray-400 p-3">
          <p>LOGO</p>
        </div>
        <div className="pl-2">
          <p className="font-bold text-md md:text-lg lg:text-xl text-darkblue-400">KEYNUINE</p>
          <p className="font-semibold text-sm md:text-base lg:text-lg text-darkblue-200">
            Technologies
          </p>
        </div>
      </div>

      <div className="flex items-center justify-end gap-8">
        <div className="hidden md:flex gap-8">
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
          className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 backdrop-blur-sm z-50"
          onClick={toggleMobileMenu}
        >
          <div className="bg-white w-3/4 h-screen p-6">
            <div className="flex justify-end">
              <img
                src="/close-icon.svg"
                alt="Close Menu"
                className="w-6 h-6 cursor-pointer"
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