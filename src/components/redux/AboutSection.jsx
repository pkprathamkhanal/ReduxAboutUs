import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="px-6 md:px-12 py-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]">
          <h2 className="text-sm font-semibold tracking-widest text-white mb-3">
            ABOUT US
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed">
            Welcome to <span className="text-white font-medium">Redux</span>, a platform for NP-Complete problems.
            Input your challenges and gain access to reductions, solutions, verifiers, and visualizations.
            Join our community of problem solvers and unravel computational complexities using the application's library.
            The project was greatly inspired by Richard Karp's paper{' '}
            <a
              href="https://link.springer.com/chapter/10.1007/978-1-4684-2001-2_9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
            >
              "Reducibility Among Combinatorial Problems"
              <ExternalLink className="w-3 h-3" />
            </a>{' '}
            (Karp, 1972).
          </p>
        </div>
      </motion.div>
    </section>
  );
}