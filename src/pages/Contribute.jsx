import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { createPageUrl } from '@/utils';
import AnimatedBackground from '@/components/redux/AnimatedBackground';
import Footer from '@/components/redux/Footer';
import reduxLogo from '@/assets/redux-logo.png';

export default function Contribute() {
  useEffect(() => {
    document.title = 'Contribute - Redux';
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
<header className="relative">
  <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-3 border-b border-white/10 bg-black/30 backdrop-blur-md supports-[backdrop-filter]:bg-black/20">
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-3"
    >
      <Link to={createPageUrl('Home')}>
        <img
  src={reduxLogo}
  alt="Redux Logo"
  className="h-8 cursor-pointer"
/>
      </Link>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="flex items-center gap-3 md:gap-6"
    >
      <Link to={createPageUrl('Home')}>
        <span className="text-sm tracking-wide text-gray-400 px-3 py-1.5 rounded-full transition-all duration-300 hover:text-white hover:bg-white/5 cursor-pointer">
          HOME
        </span>
      </Link>

      <a
        href="/#about"
        className="text-sm tracking-wide text-gray-400 px-3 py-1.5 rounded-full transition-all duration-300 hover:text-white hover:bg-white/5"
      >
        ABOUT US
      </a>

      <Link to={createPageUrl('Help')}>
        <span className="text-sm tracking-wide text-gray-400 px-3 py-1.5 rounded-full transition-all duration-300 hover:text-white hover:bg-white/5 cursor-pointer">
          HELP
        </span>
      </Link>

      <span className="text-sm tracking-wide text-white px-3 py-1.5 rounded-full border border-purple-500/30 bg-white/5 shadow-[0_0_18px_rgba(168,85,247,0.12)]">
        CONTRIBUTE
      </span>
    </motion.div>
  </nav>

  <div className="relative py-3 px-8 text-center">
    <p className="text-gray-400 text-sm tracking-wide">
      A Platform for NP-Complete Problems
    </p>
  </div>
</header>

        <section className="px-6 md:px-12 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contribute to Redux
            </h1>
            <p className="text-gray-400">
              Content coming soon...
            </p>
          </motion.div>
        </section>

        <Footer />
      </div>
    </div>
  );
}