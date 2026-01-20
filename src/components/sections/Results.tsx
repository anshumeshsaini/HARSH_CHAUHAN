import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, DollarSign, Percent, Users } from 'lucide-react';
import { AnimatedCounter } from '../ui/AnimatedCounter';

const kpis = [
  {
    icon: TrendingUp,
    value: 847,
    suffix: '%',
    label: 'Organic Traffic Growth',
    description: 'Average client growth over 12 months',
    color: 'text-green-400',
  },
  {
    icon: DollarSign,
    value: 62,
    suffix: '%',
    label: 'Cost Per Lead Reduction',
    description: 'Through optimized funnel strategies',
    color: 'text-cyan-400',
  },
  {
    icon: Percent,
    value: 4.2,
    suffix: 'x',
    label: 'Average ROI Multiplier',
    description: 'Return on marketing investment',
    color: 'text-amber-400',
  },
  {
    icon: Users,
    value: 2.8,
    suffix: 'M+',
    label: 'Impressions Generated',
    description: 'Across all client platforms',
    color: 'text-purple-400',
  },
];

export const Results: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  useTransform(scrollYProgress, [0.2, 0.6], ['20%', '100%']);

  return (
    <section ref={containerRef} className="section-padding relative overflow-hidden" id="results">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 border border-primary/30 bg-primary/5 text-primary text-sm font-display tracking-widest uppercase mb-6">
            Real-Time Results
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Numbers Don&apos;t Lie.</span>
            <br />
            <span className="text-gradient">Growth is Engineered.</span>
          </h2>
        </motion.div>

        {/* KPI Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {kpis.map((kpi, index) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-border bg-card p-6 relative group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-2 border border-border bg-muted ${kpi.color}`}>
                  <kpi.icon className="w-5 h-5" />
                </div>

                {/* Mini bar graph */}
                <div className="h-12 w-16 flex items-end gap-[2px]">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 bg-gradient-to-t from-primary/20 to-primary"
                      initial={{ height: '20%' }}
                      whileInView={{ height: `${30 + Math.random() * 70}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
                    />
                  ))}
                </div>
              </div>

              <div className={`font-display text-3xl md:text-4xl font-bold mb-2 ${kpi.color}`}>
                <AnimatedCounter value={kpi.value} suffix={kpi.suffix} />
              </div>

              <h3 className="text-foreground font-semibold mb-1 uppercase tracking-wide">
                {kpi.label}
              </h3>
              <p className="text-muted-foreground text-sm">
                {kpi.description}
              </p>

              {/* Sharp Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100"
              >
                <div className="border border-primary bg-background text-primary px-3 py-1 text-xs font-semibold uppercase whitespace-nowrap">
                  Strategy-driven results
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Growth Graph */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border border-border bg-card p-8"
        >
          <h3 className="font-display text-xl font-bold text-foreground mb-8 uppercase tracking-wide">
            Client Growth Trajectory
          </h3>

          <div className="h-64 flex items-end gap-2">
            {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((month, i) => (
              <div key={month} className="flex-1 flex flex-col items-center gap-2">
                <motion.div
                  className="w-full bg-gradient-to-t from-primary/30 to-primary relative group"
                  initial={{ height: '10%' }}
                  whileInView={{ height: `${20 + i * 6 + Math.random() * 10}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.8 }}
                >
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100">
                    <span className="border border-primary text-primary px-2 py-0.5 text-xs font-semibold">
                      +{20 + i * 6}%
                    </span>
                  </div>
                </motion.div>
                <span className="text-muted-foreground text-xs uppercase tracking-wide">
                  {month}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
