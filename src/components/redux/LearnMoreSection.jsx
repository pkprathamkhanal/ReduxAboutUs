import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const links = [
  { label: 'Github', url: 'https://github.com' },
  { label: 'Wikipedia: What is NP-Complete?', url: 'https://en.wikipedia.org/wiki/NP-completeness' },
  { label: "Karp's 21 NP-Complete Problems", url: 'https://en.wikipedia.org/wiki/Karp%27s_21_NP-complete_problems' },
  { label: 'Redux GUI Documentation', url: '#' },
  { label: 'Redux Backend Documentation', url: '#' }
];

export default function LearnMoreSection() {
  return (
    <section className="px-6 md:px-12 py-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white/5 rounded-lg border border-white/10 p-4">
          <h2 className="text-sm font-medium tracking-widest text-white mb-1.5">
            LEARN MORE
          </h2>

          <p className="text-gray-400 text-xs mb-2">
            Additional documentation can be found at the following links:
          </p>

          <div className="space-y-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-xs"
              >
                • {link.label}
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}