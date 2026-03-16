import React from 'react';
import { motion } from 'framer-motion';
import isuLogo from '@/assets/isu-logo.png';

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-4 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto flex justify-center"
      >
        <a 
          href="https://www.isu.edu/cs/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-80"
        >
          <img
  src={isuLogo}
  alt="Idaho State University"
  className="h-12 opacity-80"
/>
        </a>
      </motion.div>
    </footer>
  );
}