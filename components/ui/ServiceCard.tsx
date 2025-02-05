"use client";

import Image from "next/image";
import React, { useState } from "react";
import { serviceCardProps } from "@/lib/imports";

const ServiceCard = ({ icon, title, description }: serviceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const isActive = isHovered || isClicked;

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div
      className="relative max-w-[250px] max-h-[300px] border-1 border-blue-400 
      p-16 flex flex-col items-center overflow-hidden transition-all duration-300 ease-in-out cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div
        className={`place-items-center transition-all duration-300 ease-in-out ${
          isActive ? "backdrop-blur-sm" : ""
        }`}
      >
        <div className="pb-8">
          <Image
            src={icon}
            width={80}
            height={80}
            alt={title}
            className="w-[80px] h-[80px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]"
          />
        </div>
        <h1 className="text-blue-400 text-center font-bold text-medium md:text-lg lg:text-xl">
          {title}
        </h1>
      </div>

      {isActive && (
        <div className="absolute inset-0 flex items-center justify-center p-4 bg-darkblue-800 bg-opacity-90">
          <p className="text-blue-400 text-center text-sm md:text-base">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;