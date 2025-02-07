"use client"

import React from "react";
import {  IndexNumber } from "@/lib/imports";
import { AboutContent } from '@/data/index'

const StackCarousel = ({ currentIndex }: IndexNumber) => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute left-32 transform -rotate-6 scale-90 opacity-70">
        <img src={AboutContent[(currentIndex - 1 + AboutContent.length) % AboutContent.length].image} alt="Previous" className="w-[250px] h-[250px] object-cover rounded-lg shadow-lg" />
      </div>
      <div className="absolute right-32 transform rotate-6 scale-90 opacity-70">
        <img src={AboutContent[(currentIndex + 1) % AboutContent.length].image} alt="Next" className="w-[250px] h-[250px] object-cover rounded-lg shadow-lg" />
      </div>
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-[250px] h-[250px] relative z-10">
        <div className="w-full relative h-48 md:h-full">
          <img src={AboutContent[currentIndex].image} alt={AboutContent[currentIndex].title} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default StackCarousel;
