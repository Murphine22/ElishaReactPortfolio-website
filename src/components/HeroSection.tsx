import React from 'react';
import { motion } from 'framer-motion';
import ImageGallery from './ImageGallery';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-16">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 mb-8 md:mb-0"
      >
        <ImageGallery />
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/2"
      >
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Elisha Ejimofor</h1>
        <p className="text-xl mb-6">
          A passionate Web Developer, Graphic Designer, and Digital Marketer with over a decade of experience. I specialize in creating beautiful, functional websites and optimizing digital strategies for businesses.
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Expert in React, PHP, and WordPress</li>
          <li>Skilled in SEO and content marketing</li>
          <li>Proficient in AI optimization and prompt engineering</li>
          <li>Dedicated mentor and trainer in tech</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default HeroSection;