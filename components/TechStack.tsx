"use client";
import React, { useState, useEffect } from "react";
import { techStack } from "@/lib/imports";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

// Define the type for a single tech stack item
interface Tech {
  id: number;
  label: string;
  img: string;
  description: string;
  link: string;
}

const TechStack: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  // Function to toggle tooltip on click
  const handleToggleTooltip = (idx: number): void => {
    setActiveTooltip(activeTooltip === idx ? null : idx);
  };

  // Close tooltip when clicking outside
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

  return (
    <section className="bg-blue-400 w-full max-w-7xl h-auto py-8 flex items-center justify-center">
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 py-4 md:py-8 xl:py-16 px-8 md:px-16 lg:px-24">
        {techStack.map((tech: Tech, idx: number) => (
          <div
            key={tech.id}
            className="relative flex-shrink-0 group cursor-pointer tooltip-container"
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation(); // Prevent immediate closing when clicking inside the tooltip
              handleToggleTooltip(idx);
            }}
          >
            {/* Tooltip on hover & click */}
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
            <Image
              src={tech.img}
              alt={tech.label}
              width={48}
              height={48}
              className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 transition-transform duration-200 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
