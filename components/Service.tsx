"use client"

import React from "react";
import { motion } from "framer-motion";
import { ServiceCardContent, ServiceCard } from "@/lib/imports";

const Service = () => {
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
    <section className="py-8 md:py-16 bg-darkblue-1000 flex items-center justify-center -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin">
      <div className="px-mobile-margin md:px-tablet-margin lg:px-laptop-margin">
        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          <motion.h1
            className="text-white pb-8 text-3xl md:text-4xl lg:text-5xl font-bold"
            variants={childVariants}
          >
            What we offer
          </motion.h1>

          <motion.h2
            className="text-blue-400 pb-16 text-sm md:text-base text-center max-w-lg md:max-w-3xl"
            variants={childVariants}
          >
            We specialize in crafting innovative solutions through web, mobile,
            and game development, delivering tailored experiences that bring
            your ideas to life.
          </motion.h2>

          <motion.div
            className="grid place-items-center grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16"
            variants={containerVariants}
          >
            {ServiceCardContent.map((content, index) => (
              <motion.div key={index} variants={childVariants}>
                <ServiceCard
                  id={content.id}
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

export default Service;