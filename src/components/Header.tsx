import React from 'react';
import { Link } from 'react-router-dom';
import { Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="bg-indigo-600 text-white shadow-lg dark:bg-indigo-800"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Code size={32} />
          <span className="text-xl font-bold">Elisha Ejimofor</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/about" className="hover:text-indigo-200 transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-indigo-200 transition-colors">Services</Link></li>
            <li><Link to="/experience" className="hover:text-indigo-200 transition-colors">Experience</Link></li>
            <li><Link to="/blog" className="hover:text-indigo-200 transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-200 transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;