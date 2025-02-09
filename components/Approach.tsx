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
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative py-8 md:py-16 bg-gradient-to-b from-white to-darkblue-100 flex items-center justify-center -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin">
      <motion.div
        className="absolute -top-36 mx-mobile-margin md:mx-tablet-margin lg:mx-laptop-margin"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
      >
        <TechStack />
      </motion.div>

      <motion.div
        className="px-mobile-margin md:px-tablet-margin lg:px-laptop-margin pt-24 md:pt-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <motion.div className="flex flex-col items-center">
          <motion.h1
            className="text-blue-950 pb-6 text-3xl md:text-4xl lg:text-5xl font-bold"
            variants={childVariants}
          >
            Our Approach
          </motion.h1>

          <motion.h2
            className="text-blue-600 pb-16 text-sm md:text-base text-center max-w-3xl"
            variants={childVariants}
          >
            We turn your vision into reality through Agile methodology—embracing
            adaptive planning, continuous development, and iterative
            improvements to deliver high-quality solutions efficiently.
          </motion.h2>

          <motion.div
            className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
            variants={containerVariants}
          >
            {ApproachCardContent.map((content, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
              >
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
      </motion.div>
    </section>
  );
};

export default Approach;