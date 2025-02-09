"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NavButtonPrev, NavButtonNext, AboutProps } from "@/lib/imports";

export const AboutUs = ({
  about,
  autoplay = false,
}: {
  about: AboutProps[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % about.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + about.length) % about.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    setRotateY(Math.floor(Math.random() * 21) - 10);
  }, [active]);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section id="about" className="place-items-center antialiased pt-8 md:pt-16 pb-8 md:pb-24 lg:pb-32 xl:pb-24 bg-gradient-to-b from-white to-darkblue-100 -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <motion.h1 
        variants={childVariants}
        className="pb-16 text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950">
          About Us
        </motion.h1>
      </motion.div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-20 pb-40 px-4 md:px-8 lg:px-12 max-w-sm md:max-w-4xl ">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {about.map((data, index) => (
                <motion.div
                  key={data.id}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: rotateY,
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : rotateY,
                    zIndex: isActive(index) ? 999 : about.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: rotateY,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom place-items-center"
                >
                  <Image
                    src={data.img}
                    alt={data.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-[300px] lg:h-[350px] w-[300px] lg:w-[350px] object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-950">
              {about[active].name}
            </h3>
            <p className="text-xs md:text-sm text-blue-500">
              {about[active].designation}
            </p>
            <motion.p className="text-sm md:text-base text-blue-900 mt-2 md:mt-4 lg:mt-8">
              {about[active].description.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-6 md:pt-0">
            <NavButtonPrev onClick={handlePrev} />
            <NavButtonNext onClick={handleNext} />
          </div>
        </div>
      </div>
    </section>
  );
};
