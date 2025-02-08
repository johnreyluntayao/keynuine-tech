"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { serviceCardProps } from "@/lib/imports";

const ServiceCard = ({ icon, title, description }: serviceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const isActive = isHovered || isClicked;

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <motion.div
      className="relative w-[200px] h-[250px] lg:w-[250px] lg:h-[300px] border-1 border-blue-400 flex flex-col items-center justify-center overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="place-items-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: isActive ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="pb-8">
          <Image
            src={icon}
            width={80}
            height={80}
            alt={title}
            className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]"
          />
        </div>
        <h1 className="text-blue-400 text-center font-bold text-medium lg:text-xl">
          {title}
        </h1>
      </motion.div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center p-4 bg-darkblue-800 bg-opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-blue-400 text-center text-sm lg:text-base">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ServiceCard;