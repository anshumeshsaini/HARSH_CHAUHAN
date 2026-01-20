import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { ParticleField } from '../ui/ParticleField';
import { TypeWriter } from '../ui/TypeWriter';
import { GlowingOrb } from '../ui/GlowingOrb';

export const Hero: React.FC = () => {
  const words = ['SEO Domination', 'Paid Ads Mastery', 'Brand Authority', 'Revenue Scaling'];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - CHANGED TO MATCH SCREENSHOT */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      <div className="cyber-grid" />
      <ParticleField />

      {/* Glowing Orbs */}
      <GlowingOrb size="lg" color="cyan" className="-top-20 -left-20" />
      <GlowingOrb size="md" color="teal" className="bottom-20 right-10" />

      {/* Animated Wave Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{ top: `${20 + i * 15}%` }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-none border border-primary/30 bg-primary/5 text-primary text-sm font-display tracking-widest uppercase">
            The God of SEO
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="text-foreground">I Engineer </span>
          <span className="neon-text">Digital Growth</span>
          <br />
          <span className="text-foreground">That </span>
          <span className="text-gradient">Dominates Markets</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-4 font-body"
        >
          <TypeWriter words={words} className="text-2xl md:text-3xl font-semibold tracking-wide" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Harsh Chauhan — Transforming brands into market leaders through the revolutionary COCO Strategy
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <MagneticButton variant="primary" className="rounded-none border border-primary/40" href="#contact">
            Get Free Growth Audit
            <ArrowRight className="w-5 h-5" />
          </MagneticButton>

          <MagneticButton
            variant="whatsapp"
            className="rounded-none border border-emerald-400/40"
            href="https://wa.me/919876543210"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </MagneticButton>
        </motion.div>
      </div>

      {/* Noise Overlay */}
      <div className="noise-overlay" />
    </section>
  );
};