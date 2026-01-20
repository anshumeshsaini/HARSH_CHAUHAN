import React from 'react';
import { motion } from 'framer-motion';

interface GlowingOrbProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'cyan' | 'teal';
  className?: string;
}

export const GlowingOrb: React.FC<GlowingOrbProps> = ({
  size = 'md',
  color = 'cyan',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
  };

  const colorClasses = {
    cyan: 'bg-primary/20',
    teal: 'bg-accent/20',
  };

  return (
    <motion.div
      className={`absolute rounded-full blur-[100px] ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};
