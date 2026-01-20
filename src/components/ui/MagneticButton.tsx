import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'whatsapp' | 'outline';
  onClick?: () => void;
  href?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className,
  variant = 'primary',
  onClick,
  href,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.3;
    const y = (clientY - top - height / 2) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:shadow-[0_0_40px_hsl(180_100%_50%/0.5)]',
    whatsapp: 'bg-whatsapp text-whatsapp-foreground pulse-glow hover:shadow-[0_0_50px_hsl(142_70%_45%/0.6)]',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_30px_hsl(180_100%_50%/0.3)]',
  };

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        className={cn(
          'relative inline-flex items-center justify-center gap-2 px-8 py-4 font-display font-semibold text-sm uppercase tracking-wider rounded-lg transition-all duration-300 overflow-hidden group',
          variantClasses[variant],
          className
        )}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        <motion.div
          className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={false}
        />
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            background: variant === 'primary' 
              ? 'radial-gradient(circle at center, hsl(180 100% 60%) 0%, hsl(180 100% 50%) 100%)'
              : variant === 'whatsapp'
              ? 'radial-gradient(circle at center, hsl(142 70% 55%) 0%, hsl(142 70% 45%) 100%)'
              : 'transparent',
          }}
        />
      </Component>
    </motion.div>
  );
};
