import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const columns = [
  [
    'Kaden Marchetti',
    'Caleb Eardley',
    'Daniel Igbokwe',
    'Alex Diviney',
    'Janita Aamir',
    'Andrija Sevaljevic',
    'Garret Stouffer',
    'Alex Svancara'
  ],
  [
    'Porter Glines',
    'Show Pratoomratana',
    'Russell Phillips',
    'Michael Crapse',
    'Ian Gonzalez',
    'Sabal Subedi',
    'Himanshu Jha'
  ],
  [
    'Sansar Kharal',
    'Pratham Khanal',
    'George Lake',
    'Grant Gardner',
    'Jason Wright',
    'Diya Pandey',
    'Michael Trosper'
  ]
];

const popovers = {
  'Pratham Khanal': {
    image: 'https://github.com/pkprathamkhanal.png',
    github: 'https://github.com/pkprathamkhanal'
  },
  'Sansar Kharal': {
    image: 'https://github.com/kharsans.png',
    github: 'https://github.com/kharsans'
  },
  'Himanshu Jha': {
    image: 'https://github.com/himanshujha05.png',
    github: 'https://github.com/himanshujha05'
  },
  'Andrija Sevaljevic': {
    image: 'https://github.com/Andrija-Sevaljevic.png',
    github: 'https://github.com/Andrija-Sevaljevic'
  },
  'Jason Wright': {
    image: 'https://github.com/wrigjl.png',
    github: 'https://github.com/wrigjl'
  },
  'Daniel Igbokwe': {
    image: 'https://github.com/igbodani.png',
    github: 'https://github.com/igbodani'
  },
  'Sabal Subedi': {
    image: 'https://github.com/sabal_subedi.png',
    github: 'https://github.com/sabal_subedi'
  },
  'Diya Pandey': {
    image: 'https://github.com/diyapandey0.png',
    github: 'https://github.com/diyapandey0'
  },
  'Michael Trosper': {
    image: 'https://github.com/trosper3.png',
    github: 'https://github.com/trosper3'
  },
  'Alex Svancara': {
    image: 'https://github.com/svanalex.png',
    github: 'https://github.com/svanalex'
  }
};

function Contributor({ name }) {
  const data = popovers[name];

  if (!data) {
    return (
      <div className="block w-full text-gray-300 text-sm leading-relaxed">
        • {name}
      </div>
    );
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="block w-full text-left text-gray-300 text-sm leading-relaxed hover:text-purple-300 transition-colors cursor-pointer">
          • {name}
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-72 bg-[#111118] border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.18)]">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img
              src={data.image}
              alt={name}
              className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/50"
            />
            <div>
              <h3 className="text-white font-semibold text-sm">{name}</h3>
              <p className="text-gray-400 text-xs">Contributor</p>
            </div>
          </div>

          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-xs"
          >
            <Github className="w-4 h-4" />
            View GitHub Profile
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default function ContributorsSection() {
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
            CONTRIBUTORS
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            This project was started by{' '}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
            >
              Dr. Paul Bodily
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
            , who is also the ISU Faculty Sponsor of the project.
          </p>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            The students who contributed to the creation of the application are:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10">
            {columns.map((column, index) => (
              <div key={index}>
                {column.map((name) => (
                  <Contributor key={name} name={name} />
                ))}
              </div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}