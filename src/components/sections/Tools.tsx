import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  'Ahrefs','SEMrush','Google Analytics','Search Console',
  'Screaming Frog','Surfer SEO','Hotjar','Moz',
  'ChatGPT','Canva','Figma','HubSpot'
];

export const Tools = () => {
  return (
    <section className="section-padding bg-black overflow-hidden" id="tools">
      <h2 className="text-center text-4xl font-bold mb-14">
        <span className="text-white">SEO</span>{' '}
        <span className="text-gradient">Weapon Stack</span>
      </h2>

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        className="flex gap-10 w-max"
      >
        {[...tools, ...tools].map((tool, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.15 }}
            className="relative group"
          >
            <div className="w-28 h-28 flex items-center justify-center rounded-full glass-card">
              <span className="text-sm text-muted-foreground group-hover:text-cyan-400 transition">
                {tool}
              </span>
            </div>

            {/* Neon Ring */}
            <div className="absolute inset-0 rounded-full border border-cyan-400/0 group-hover:border-cyan-400/50 transition" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
