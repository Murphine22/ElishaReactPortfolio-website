import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings as SettingsIcon, Moon, Sun, LogIn, LogOut, UserPlus } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  const toggleSettings = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          onClick={toggleSettings}
          className="bg-indigo-600 text-white p-3 rounded-full shadow-lg"
        >
          <SettingsIcon size={24} />
        </button>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl z-50"
          >
            <button
              onClick={toggleTheme}
              className="flex items-center mb-4 text-gray-700 dark:text-gray-300"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              <span className="ml-2">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
            {user ? (
              <button
                onClick={logout}
                className="flex items-center text-gray-700 dark:text-gray-300"
              >
                <LogOut size={20} />
                <span className="ml-2">Logout</span>
              </button>
            ) : (
              <>
                <button
                  onClick={() => setShowLoginForm(true)}
                  className="flex items-center mb-4 text-gray-700 dark:text-gray-300"
                >
                  <LogIn size={20} />
                  <span className="ml-2">Login</span>
                </button>
                <button
                  onClick={() => setShowSignupForm(true)}
                  className="flex items-center text-gray-700 dark:text-gray-300"
                >
                  <UserPlus size={20} />
                  <span className="ml-2">Sign Up</span>
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      {showLoginForm && <LoginForm onClose={() => setShowLoginForm(false)} />}
      {showSignupForm && <SignupForm onClose={() => setShowSignupForm(false)} />}
    </>
  );
};

export default Settings;