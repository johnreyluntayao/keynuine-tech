"use client"

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/lib/imports";
import Image from "next/image";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" className="flex w-full items-center justify-center bg-gradient-to-t from-blue-100 to-white h-screen xl:max-h-[50rem]">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-[90rem] py-8 md:py-16 px-mobile-margin md:px-tablet-margin lg:px-laptop-margin"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <motion.div
          className="text-center md:text-left"
          variants={containerVariants}
        >
          <motion.p
            className="text-xs md:text-sm font-semibold tracking-[0.2rem] md:tracking-[0.3rem] xl:tracking-[0.9rem] text-blue-950/50 pb-2 md:pv-4"
            variants={childVariants}
          >
            KEYNUINE TECHNOLOGIES
          </motion.p>

          <motion.h1
            className="text-3xl md:text-4xl xl:text-6xl font-bold text-blue-950 pb-2 md:pb-4"
            variants={childVariants}
          >
            Pushing Through
            <span className="text-blue-500"> Bound</span>aries
          </motion.h1>

          <motion.p
            className="font-semibold text-base md:text-lg xl:text-xl text-blue-300"
            variants={childVariants}
          >
            Making your ideas beyond extraordinary!
          </motion.p>

          <motion.div
            className="pt-6 md:pt-12 lg:pt-14"
            variants={childVariants}
          >
            <Button
              label="Contact Us!"
              link="#contact"
              className="text-white bg-blue-500 px-6 py-2 text-sm sm:text-base hover:bg-blue-600 transition-colors duration-300"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center items-center"
          variants={imageVariants}
        >
          <Image
            src="/hero-animate.gif"
            alt="Hero Image"
            width={512}
            height={512}
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
            priority
            aria-label="Hero Image"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;