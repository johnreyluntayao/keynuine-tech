import Image from "next/image";
import Link from "next/link";
import React from "react";
import { quickLinks, contactInfo, socialMedia } from '@/lib/imports';

const Footer = () => {

  return (
    <footer className="bg-darkblue-800 text-blue-50 py-8 md:py-16 border-y-2 border-blue-600 w-full place-items-center">
      <div className=" px-mobile-margin md:px-tablet-margin lg:px-laptop-margin max-w-max">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center sm:items-start space-y-4">
            <div className="flex items-center space-x-4 ">
              <Image src="/Keynuine.svg" alt="KeyNuine Tech" width={100} height={100} />
              <h1 className="font-bold text-lg md:text-xl lg:text-2xl">KeyNuine Tech</h1>
            </div>
            <p className="text-blue-400 text-sm md:text-base text-center sm:text-left max-w-md">
            KeyNuine Tech is a creative agency dedicated to making your ideas truly extraordinary. Crafting compelling brand experiences of your own.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start space-y-4 lg:pl-8">
            <h2 className="font-bold text-lg lg:text-xl">Menu</h2>
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-blue-400 hover:text-blue-600 text-sm md:text-base"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center sm:items-start space-y-4 lg:pl-8">
            <h2 className="font-bold text-lg lg:text-xl">Contact Us</h2>
            {contactInfo.map((info, index) => (
              <p key={index} className="text-blue-400 text-sm md:text-base">
                {info.type}: {info.value}
              </p>
            ))}
          </div>

          <div className="flex flex-col items-center sm:items-start space-y-4 lg:pl-8">
            <h2 className="font-bold text-lg lg:text-xl">Connect with Us</h2>
            <div className="flex space-x-4">
              {socialMedia.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-blue-400 hover:text-blue-600 text-sm md:text-base"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;