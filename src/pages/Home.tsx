import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <Helmet>
        <title>Elisha Ejimofor - Web Developer, Designer & Digital Marketer</title>
        <meta name="description" content="Portfolio of Elisha Ejimofor, a skilled web developer, graphic designer, and digital marketer with expertise in AI optimization." />
      </Helmet>
      <HeroSection />
      <Portfolio />
      <Skills />
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-center mt-12"
      >
        <Link
          to="/contact"
          className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Contact Me
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Home;