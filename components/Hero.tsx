import React from "react";
import { Button } from "@/lib/imports";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex items-center justify-center bg-gradient-to-t from-blue-100 to-white h-screen -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-8 md:py-16  px-mobile-margin md:px-tablet-margin lg:px-laptop-margin">
        <div className="text-center md:text-left lg:pl-16">
          <h2 className="text-xs md:text-sm font-semibold tracking-[0.2rem] md:tracking-[0.3rem] lg:tracking-[0.9rem] text-blue-950/50 pb-2">
            KEYNUINE TECHNOLOGIES
          </h2>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-blue-950 pb-4">
            Pushing Through
            <span className="text-blue-500"> Bound</span>aries
          </h1>
          <p className="font-semibold text-base md:text-lg lg:text-xl text-blue-300 pb-8 md:pb-12">
            Making your ideas beyond extraordinary!
          </p>
          <div>
            <Button
              label="Contact Us!"
              link="#contact"
              className="text-darkblue-50 bg-blue-500 px-6 py-2 text-sm sm:text-base"
            />
          </div>
        </div>
        <div className="flex justify-center items-start md:items-center">
          <Image
            src="/ambo.jpg"
            alt="Hero Image"
            width={300}
            height={300}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;