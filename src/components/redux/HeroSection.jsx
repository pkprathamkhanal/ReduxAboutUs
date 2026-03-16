import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import reduxLogo from '@/assets/redux-logo.png';

export default function HeroSection() {
  return (
    <header className="relative">
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-3 border-b border-white/10 bg-black/30 backdrop-blur-md supports-[backdrop-filter]:bg-black/20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3"
        >
          <img
            src={reduxLogo}
            alt="Redux Logo"
            className="h-8"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3 md:gap-6"
        >
          <a
            href="#"
            className="text-sm tracking-wide text-white px-3 py-1.5 rounded-full border border-purple-500/30 bg-white/5 shadow-[0_0_18px_rgba(168,85,247,0.12)] transition-all duration-300 hover:bg-white/10"
          >
            HOME
          </a>

          <a
            href="#about"
            className="text-sm tracking-wide text-gray-400 px-3 py-1.5 rounded-full transition-all duration-300 hover:text-white hover:bg-white/5"
          >
            ABOUT US
          </a>

          <Link to={createPageUrl('Help')}>
            <span className="text-sm tracking-wide text-gray-400 px-3 py-1.5 rounded-full transition-all duration-300 hover:text-white hover:bg-white/5 cursor-pointer">
              HELP
            </span>
          </Link>

          <Link to={createPageUrl('Contribute')}>
            <span className="text-sm tracking-wide text-gray-400 px-3 py-1.5 rounded-full transition-all duration-300 hover:text-white hover:bg-white/5 cursor-pointer">
              CONTRIBUTE
            </span>
          </Link>
        </motion.div>
      </nav>

      <div className="relative py-3 px-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-sm tracking-wide"
        >
          A Platform for NP-Complete Problems
        </motion.p>
      </div>
    </header>
  );
}