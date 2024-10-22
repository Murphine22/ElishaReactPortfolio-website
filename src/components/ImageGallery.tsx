import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-64 h-64 mx-auto">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`Elisha Ejimofor ${index + 1}`}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg"
          initial={{ opacity: 0, rotateY: -180 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            rotateY: index === currentIndex ? 0 : 180,
            zIndex: index === currentIndex ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </div>
  );
};

export default ImageGallery;