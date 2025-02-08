"use client"

import React, { useState } from "react";
import Image from "next/image";
import { Button, NavButtonNext, NavButtonPrev, ProjectItems } from "@/lib/imports";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? ProjectItems.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === ProjectItems.length - 1 ? 0 : prevIndex + 1));

  const currentItem = ProjectItems[currentIndex];

  return (
    <div className="relative w-auto flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">

        <div className="hidden md:block">
          <NavButtonPrev onClick={prevSlide} />
        </div>

        <div className="grid grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden w-[450px] h-[300px] md:w-[500px] md:h-[350px] lg:w-[550px] lg:h-[400px]">
          <div>
            <Image
              width={300}
              height={300}
              src={currentItem.image}
              alt={currentItem.title}
              className="bg-darkblue-600 w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex flex-col justify-center w-full">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-blue-950 pb-4">
              {currentItem.title}
            </h2>
            <p className="text-sm md:text-base text-blue-950 pb-6">
              {currentItem.description}
            </p>
            <div className="mt-4 flex gap-2">
              <Button
                label="Visit!"
                link={currentItem.visitLink}
                className="text-white bg-blue-500"
              />
              <Button
                label="Code!"
                link={currentItem.codeLink}
                className="text-blue-500 border-blue-500 border-1 bg-white"
              />
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <NavButtonNext onClick={nextSlide} />
        </div>

        <div className="flex md:hidden gap-4 mt-4">
          <NavButtonPrev onClick={prevSlide} />
          <NavButtonNext onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;