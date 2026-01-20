import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Users, Award, Zap } from 'lucide-react';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import harshAuthorityImg from '@/assets/Harsh.jpeg';

const stats = [
  { icon: TrendingUp, value: 300, suffix: '%', label: 'Traffic Increase' },
  { icon: Users, value: 50, suffix: '+', label: 'Brands Transformed' },
  { icon: Award, value: 1000, suffix: '+', label: 'Keywords Ranked' },
  { icon: Zap, value: 98, suffix: '%', label: 'Client Retention' },
];

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="section-padding relative overflow-hidden" id="about">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/40 to-background" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image / Authority Block */}
          <motion.div style={{ y, opacity }} className="relative flex justify-center">
            <div className="relative w-72 h-80 md:w-80 md:h-[420px]">

              {/* Rotating Frame */}
              <motion.div
                className="absolute inset-0 border-2 border-primary/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />

              <motion.div
                className="absolute -inset-4 border border-primary/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              />

              {/* Image Container */}
              <div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                <img
                  src={harshAuthorityImg}
                  alt="Harsh Chauhan - God of SEO"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Sharp Glow */}
              <div className="absolute inset-0 bg-primary/10 blur-2xl pointer-events-none" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-none border border-primary/30 bg-primary/5 text-primary text-sm font-display tracking-widest uppercase mb-6">
              The Strategist
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Not Just SEO.</span>
              <br />
              <span className="text-gradient">Digital Domination.</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm <span className="text-primary font-semibold">Harsh Chauhan</span>, known as the
              <span className="text-primary"> God of SEO</span>. With the
              <span className="text-primary"> COCO Strategy</span>, I turn traffic into authority
              and authority into revenue.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              From <span className="text-foreground">HostGator</span> to
              <span className="text-foreground"> Hindustan Times</span>,
              <span className="text-foreground"> EaseMyTrip</span> to
              <span className="text-foreground"> Valentino India</span> —
              I don’t chase rankings, I control markets.
            </p>

            {/* Sharp Tags */}
            <div className="flex flex-wrap gap-3">
              {['E-E-A-T Expert', 'AI Optimization', 'COCO Strategy'].map(tag => (
                <span
                  key={tag}
                  className="px-4 py-2 border border-border bg-secondary text-secondary-foreground text-sm font-medium uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-border bg-card p-6 group"
            >
              <div className="mb-4 inline-flex p-3 border border-primary/30 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <stat.icon className="w-6 h-6" />
              </div>

              <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>

              <p className="text-muted-foreground text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
