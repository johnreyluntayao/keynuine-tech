import React from "react";
import { Button } from "@/lib/imports";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex items-center justify-center bg-gradient-to-t from-blue-100 to-white h-screen -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-[90rem] py-8 md:py-16 px-mobile-margin md:px-tablet-margin lg:px-laptop-margin">
        <div className="text-center md:text-left">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2rem] md:tracking-[0.3rem] xl:tracking-[0.9rem] text-blue-950/50 pb-2 md:pv-4">
            KEYNUINE TECHNOLOGIES
          </p>
          
          <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold text-blue-950 pb-2 md:pb-4">
            Pushing Through
            <span className="text-blue-500"> Bound</span>aries
          </h1>
          <p className="font-semibold text-base md:text-lg xl:text-xl  text-blue-300">
            Making your ideas beyond extraordinary!
          </p>
          <div className="pt-6 md:pt-12 lg:pt-14">
            <Button
              label="Contact Us!"
              link="#contact"
              className="text-white bg-blue-500 px-6 py-2 text-sm sm:text-base hover:bg-blue-600 transition-colors duration-300"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/hero.svg"
            alt="Hero Image"
            width={512}
            height={512}
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;