"use client"

import { motion } from "framer-motion";
import { Button } from "@/lib/imports";
import React from "react";

const Contact = () => {

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

  return (
    <section id="contact" className="py-8 md:py-16 bg-darkblue-1000 flex items-center justify-center -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin">
      <motion.div
        className="px-mobile-margin md:px-tablet-margin lg:px-laptop-margin"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <motion.div
          className="max-w-3xl flex flex-col items-center"
          variants={containerVariants}
        >
          <motion.h1
            className="text-white pb-6 text-2xl md:text-3xl lg:text-4xl font-bold"
            variants={childVariants}
          >
            Connect with us&#33;
          </motion.h1>

          <motion.p
            className="text-blue-400 pb-12 text-sm md:text-base text-center"
            variants={childVariants}
          >
            Ready to bring your ideas to life? Contact us for innovative web,
            mobile, and game development. Whether it&apos;s a project, collaboration,
            or consultation, let&apos;s create something extraordinary together!
          </motion.p>

          <motion.div
            variants={childVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="text-darkblue-100 bg-blue-400 hover:bg-blue-500 transition-colors duration-300"
              link="/contact"
              label="Contact Us&#33;"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;