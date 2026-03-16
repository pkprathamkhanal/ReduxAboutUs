import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { createPageUrl } from '@/utils';
import AnimatedBackground from '@/components/redux/AnimatedBackground';
import Footer from '@/components/redux/Footer';
import reduxLogo from '@/assets/redux-logo.png';

const resources = [
  {
    label: 'Reductions of NP-complete problems, by Richard Karp',
    url: 'https://people.eecs.berkeley.edu/~luca/cs172/karp.pdf',
  },
  {
    label: 'Computers and Intractability: A Guide to the Theory of NP-Completeness, by Garey and Johnson',
    url: 'https://www.amazon.com/Computers-Intractability-NP-Completeness-Mathematical-Sciences/dp/0716710455',
  },
  {
    label: "The P=NP Question and Gödel's Lost Letter, by Richard J. Lipton",
    url: 'https://rjlipton.wpcomstaging.com/',
  },
  {
    label: 'The Complexity Zoo, by Scott Aaronson',
    url: 'https://complexityzoo.net/Complexity_Zoo',
  },
];

export default function Help() {
  useEffect(() => {
    document.title = 'Help - Redux';
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10">

        {/* SAME HEADER AS HOME */}
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

              <Link to="/#about">
                <span className="text-sm tracking-wide text-gray-400 px-3 py-1.5 rounded-full transition-all duration-300 hover:text-white hover:bg-white/5 cursor-pointer">
                  ABOUT US
                </span>
              </Link>

              {/* ACTIVE TAB */}
              <span className="text-sm tracking-wide text-white px-3 py-1.5 rounded-full border border-purple-500/30 bg-white/5 shadow-[0_0_18px_rgba(168,85,247,0.12)]">
                HELP
              </span>

              <Link to={createPageUrl('Contribute')}>
                <span className="text-sm tracking-wide text-gray-400 px-3 py-1.5 rounded-full transition-all duration-300 hover:text-white hover:bg-white/5 cursor-pointer">
                  CONTRIBUTE
                </span>
              </Link>
            </motion.div>
          </nav>

          <div className="relative py-3 px-8 text-center">
            <p className="text-gray-400 text-sm tracking-wide">
              A Platform for NP-Complete Problems
            </p>
          </div>
        </header>


        {/* HELP CONTENT */}
        <section className="px-6 md:px-12 py-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]">
              <h2 className="text-sm font-semibold tracking-widest text-white mb-3">
                HELP
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed">
                This page includes a setup tutorial and additional resources to help you use Redux
                and explore NP-Complete problems in more detail.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]">
              <h2 className="text-sm font-semibold tracking-widest text-white mb-3">
                VIDEO TUTORIAL
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                With the wonderful idea and guidance of Dr. Paul Bodily and Michael Trosper, we are excited to share the Redux setup tutorial. This video will help you get Redux running on your local machine. More tutorials and creative walkthroughs will be coming soon.
              </p>

              <div className="overflow-hidden rounded-lg border border-white/10 bg-black">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/9vTl522tyhU"
                    title="Redux Tutorial"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]">
              <h2 className="text-sm font-semibold tracking-widest text-white mb-3">
                RESOURCES
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                These references provide more background on NP-Completeness, reductions, and
                computational complexity.
              </p>

              <div className="space-y-3">
                {resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{resource.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </div>
  );
}