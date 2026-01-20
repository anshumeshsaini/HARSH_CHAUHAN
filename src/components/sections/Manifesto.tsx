import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Manifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Lines */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent"
            style={{
              top: `${i * 5}%`,
              width: '200%',
              left: '-50%',
            }}
            animate={{
              x: ['-25%', '25%'],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Data Stream Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0"
            style={{
              left: `${10 + i * 10}%`,
              height: '30%',
            }}
            animate={{
              top: ['-30%', '130%'],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-4">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          <span className="text-foreground">"Growth isn't luck.</span>
          <br />
          <span className="neon-text">It's engineered."</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
        >
          Every ranking, every conversion, every market position is the result of strategic engineering.
          I don't believe in shortcuts. I believe in systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 font-display text-primary text-lg"
        >
          — Harsh Chauhan
        </motion.div>
      </motion.div>
    </section>
  );
};
