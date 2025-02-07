"use client"

import React, { useState } from "react";
import { Button, NavButtonNext, NavButtonPrev } from "@/lib/imports";
import { ProjectItems } from '@/data/index'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((Index) => (Index === 0 ? ProjectItems.length - 1 : Index - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((Index) => (Index === ProjectItems.length - 1 ? 0 : Index + 1));
  };

  return (
    <div className="relative w-auto md:w-[700px] flex items-center justify-center">
      <div className="flex gap-4 items-center justify-center">
      
        <NavButtonPrev 
        onClick={prevSlide}
        />
          

        
        <div className=" grid grid-flow-row md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden w-full h-auto md:h-96">
          <div className="w-full relative h-48 md:h-full flex items-center justify-center">
            <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">{currentIndex + 1}</span>
            <img src={ProjectItems[currentIndex].image} alt={ProjectItems[currentIndex].title} className="w-full h-auto max-h-48 md:max-h-full object-cover" />
          </div>
          <div className="p-4 flex flex-col justify-center w-full">
            <h2 className="text-lg font-bold">{ProjectItems[currentIndex].title}</h2>
            <p className="text-gray-600">{ProjectItems[currentIndex].description}</p>
            <div className="mt-4 flex gap-2">
              <Button
                label="Visit!"
                link={ProjectItems[currentIndex].visitLink}
                className="text-white bg-blue-500 px-6 py-2 text-sm sm:text-base hover:bg-blue-600 transition-colors duration-300"
              />

              <Button 
                label="Code!"
                link={ProjectItems[currentIndex].codeLink}
                className="text-blue-500 border-blue-500 border-1 px-6 py-2 text-sm sm:text-base hover:bg-blue-600 transition-colors duration-300"
              />
              
              
            </div>
          </div>
        </div>

        <NavButtonNext
        onClick={nextSlide}
        />

      </div>
    </div>
  );
};

export default Carousel;
