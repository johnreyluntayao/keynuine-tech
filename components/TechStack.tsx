"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { techStack, Tech } from "@/lib/imports";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const TechStack: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  const handleToggleTooltip = (idx: number): void => {
    setActiveTooltip(activeTooltip === idx ? null : idx);
  };

  useEffect(() => {
    if (typeof document === "undefined") return;

    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".tooltip-container")) {
        setActiveTooltip(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.section 
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.7 }}
    className="bg-blue-400 w-full max-w-[1450px] h-auto py-8 flex items-center justify-center relative -mt-44 md:-mt-48 lg:-mt-48 xl:-mt-32 z-[500]">
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-8 xl:gap-12 py-4 md:py-8 lg:py-16 px-8 md:px-16">
        {techStack.map((tech: Tech, idx: number) => (
          <div
            key={tech.id}
            className="relative flex-shrink-0 group cursor-pointer tooltip-container"
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              handleToggleTooltip(idx);
            }}
          >
            <div
              className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 ${
                activeTooltip === idx ? "flex" : "hidden group-hover:flex"
              } flex-col bg-blue-950 text-blue-400 px-3 py-2 rounded-lg shadow-lg w-[180px] text-center`}
            >
              <Link
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 text-xs text-blue-300 mt-1 hover:text-blue-500"
              >
                <h1 className="text-sm font-bold">{tech.label}</h1>
                <FaArrowUpRightFromSquare className="w-3 h-3" />
              </Link>
              <h2 className="text-xs text-white">{tech.description}</h2>
            </div>
            <motion.div 
            variants={childVariants}>
            <Image
              src={tech.img}
              alt={tech.label}
              width={48}
              height={48}
              className="w-12 h-12 md:w-14 md:h-14  transition-transform duration-200 group-hover:scale-110"
            />
            </motion.div>
          
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default TechStack;
