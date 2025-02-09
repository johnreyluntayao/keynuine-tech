"use client"
import React from "react";
import { motion } from "framer-motion";
import { TechStack, ApproachCardContent, ApproachCard } from "@/lib/imports";


const Approach = () => {
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
    <section id="approach" className="relative py-8 md:py-16 bg-gradient-to-b from-white to-darkblue-100 flex items-center justify-center -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin">
      <div className="absolute -top-36 mx-mobile-margin md:mx-tablet-margin lg:mx-laptop-margin">
        <TechStack />
      </div>

      <div className="px-mobile-margin md:px-tablet-margin lg:px-laptop-margin pt-24 md:pt-32">
        <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className="flex flex-col items-center">
          <motion.h1 
          variants={childVariants}
          className="text-blue-950 pb-6 text-2xl md:text-3xl lg:text-4xl font-bold">
            Our Approach
          </motion.h1>
          <motion.h2 
          variants={childVariants}
          className="text-blue-600 pb-16 text-sm md:text-base text-center max-w-3xl">
            We turn your vision into reality through Agile methodology—embracing
            adaptive planning, continuous development, and iterative
            improvements to deliver high-quality solutions efficiently.
          </motion.h2>
          <motion.div 
          variants={containerVariants}
          className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {ApproachCardContent.map((content, index) => (
              <motion.div key={index} variants={childVariants}>
                <ApproachCard
                  id={content.id}
                  count={content.count}
                  icon={content.icon}
                  title={content.title}
                  description={content.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;
