"use client"

import React, { useState } from "react";
import Image from "next/image";
import { carouselItems } from '@/data/index'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="flex items-center justify-center">
      
        <button
          onClick={prevSlide}
          className="flex items-start mr-2  p-2 bg-blue-300 rounded-full"
        >
            <Image
                src="/previous.svg"
                alt="Previous Button"
                width={20}
                height={20}
                className=" p-1 "

            />
        </button>
        
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full h-auto md:h-96">
          <div className="w-full relative h-48 md:h-full flex items-center justify-center">
            <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">{currentIndex + 1}</span>
            <img src={carouselItems[currentIndex].image} alt={carouselItems[currentIndex].title} className="w-full h-auto max-h-48 md:max-h-full object-contain" />
          </div>
          <div className="p-4 flex flex-col justify-center w-full">
            <h2 className="text-lg font-bold">{carouselItems[currentIndex].title}</h2>
            <p className="text-gray-600">{carouselItems[currentIndex].description}</p>
            <div className="mt-4 flex gap-2">
              <a href={carouselItems[currentIndex].visitLink} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                Visit!
              </a>
              <a href={carouselItems[currentIndex].codeLink} className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg">
                Code.
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="flex items-end ml-2  p-2 bg-blue-300 rounded-full"
        >
            <Image
                src="/Next.svg"
                alt="Next Button"
                width={20}
                height={20}
                className=" p-1 "

            />
        </button>

      </div>
    </div>
  );
};

export default Carousel;
