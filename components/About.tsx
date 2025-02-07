"use client"

import React, { useState } from "react";
import { NavButtonNext, NavButtonPrev } from "@/lib/imports";
import { AboutContent } from '@/data/index'
import StackCarousel from "./ui/StackCarousel";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((Index) => (Index === 0 ? AboutContent.length - 1 : Index - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((Index) => (Index === AboutContent.length - 1 ? 0 : Index + 1));
  };
  return (
    <section className="py-4 md:py-12 h-screen flex items-center justify-center -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin">
        <div className=" grid grid-cols-2 px-mobile-margin md:px-tablet-margin lg:px-laptop-margin">

        <div>
          <StackCarousel currentIndex={currentIndex}/>
        </div>

        <div className="p-4 gap-10 flex flex-col justify-start w-full">
          <div>
            <hr className="w-[20px] h-[5px] bg-blue-300 border-none" />
            <h2 className="text-2xl md:text-3xl font-bold">{AboutContent[currentIndex].title}</h2>
          </div>

          <p className="text-sm md:text-base text-gray-600">{AboutContent[currentIndex].description}</p>

          <div className="flex gap-4">
            <NavButtonPrev
            onClick={prevSlide}
            />
            <NavButtonNext
            onClick={nextSlide}
            />
          </div>
          
        </div>

        </div>
    </section>
  )
}

export default About