import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const publications = [
  {
    authors: 'R. Phillips and P. M. Bodily',
    title: 'Spade: A library for programmatic parsing and verification of discrete data structures',
    venue: '2025 Intermountain Engineering, Technology and Computing (IETC), pp. 1–5, IEEE, 2025',
    pdfUrl: '#'
  },
  {
    authors: 'K. Marchetti, A. Sevaljevic, A. Diviney, R. Phillips, C. Eardley, R. Khadka, D. Igbokwe, and P. M. Bodily',
    title: 'Redux: An interactive, dynamic knowledge base for teaching NP-completeness',
    venue: 'Proceedings of the 29th annual ACM conference on Innovation and Technology in Computer Science Education (ITiCSE), 2024',
    pdfUrl: '#'
  },
  {
    authors: 'A. Sevaljevic and P. M. Bodily',
    title: 'Comparative empirical analysis of dancing links implementations to solve the exact cover problem',
    venue: 'Proceedings of the 4th Intermountain Engineering, Technology, and Computing Conference (i-ETC), pp. 255–258, IEEE, 2024',
    pdfUrl: '#'
  },
  {
    authors: 'K. Marchetti and P. Bodily',
    title: 'Visualizing the 3SAT to CLIQUE Reduction Process',
    venue: '2022 Intermountain Engineering, Technology and Computing (IETC), Orem, UT, USA, 2022, pp. 1-5',
    pdfUrl: '#'
  },
  {
    authors: 'K. Marchetti and P. Bodily',
    title: 'KAMI: Leveraging the power of crowd-sourcing to solve complex, real-world problems',
    venue: '2022 Intermountain Engineering, Technology and Computing (IETC), Orem, UT, USA, 2022, pp. 1-4',
    pdfUrl: '#'
  }
];

export default function PublicationsSection() {
  return (
    <section className="px-6 md:px-12 py-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]">
          <h2 className="text-sm font-semibold tracking-widest text-white mb-3">
            PUBLICATIONS
          </h2>

          <p className="text-gray-400 text-xs mb-4">
            Below are research publications associated with the Redux project and its contributors.
          </p>

          <div className="space-y-3">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="text-gray-300 text-xs leading-relaxed rounded-lg border border-white/5 bg-white/[0.02] p-3 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/[0.04]"
              >
                <span className="text-gray-400">{pub.authors},</span>{' '}
                <span className="text-white">"{pub.title},"</span>{' '}
                <span className="text-gray-500 italic">{pub.venue}.</span>{' '}
                <a
                  href={pub.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  [PDF]
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}