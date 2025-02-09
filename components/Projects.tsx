'use client'
import React from 'react';
import { Carousel } from '@/lib/imports';
import { motion} from "framer-motion";

const Projects = () => {
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
    <section id="projects" className="py-8 md:py-16 -mx-mobile-margin md:-mx-tablet-margin lg:-mx-laptop-margin">
            <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            className="flex flex-col items-center">
                <motion.h1 
                variants={childVariants}
                className="pb-16 text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950">Projects</motion.h1>
                <motion.div variants={childVariants}>
                <Carousel/>
                </motion.div>
            </motion.div>           

    </section>
  )
}

export default Projects