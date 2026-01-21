import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, DollarSign, Percent, Users, TrendingDown, Target, BarChart3, Activity } from 'lucide-react';
import { AnimatedCounter } from '../ui/AnimatedCounter';


const kpis = [
  {
    icon: TrendingUp,
    value: 847,
    suffix: '%',
    label: 'Organic Traffic Growth',
    description: 'Average client growth over 12 months',
    color: 'text-green-400',
    trend: 'up' as const,
    change: '+12.5%',
  },
  {
    icon: DollarSign,
    value: 62,
    suffix: '%',
    label: 'Cost Per Lead Reduction',
    description: 'Through optimized funnel strategies',
    color: 'text-cyan-400',
    trend: 'up' as const,
    change: '-8.3%',
  },
  {
    icon: Percent,
    value: 4.2,
    suffix: 'x',
    label: 'Average ROI Multiplier',
    description: 'Return on marketing investment',
    color: 'text-amber-400',
    trend: 'up' as const,
    change: '+0.4x',
  },
  {
    icon: Users,
    value: 2.8,
    suffix: 'M+',
    label: 'Impressions Generated',
    description: 'Across all client platforms',
    color: 'text-purple-400',
    trend: 'up' as const,
    change: '+23%',
  },
];

// Realistic client growth data
const clientGrowthData = [
  { month: 'Jan', revenue: 125000, clients: 42, growth: 8.2 },
  { month: 'Feb', revenue: 138000, clients: 48, growth: 12.5 },
  { month: 'Mar', revenue: 152000, clients: 55, growth: 15.8 },
  { month: 'Apr', revenue: 168000, clients: 62, growth: 18.3 },
  { month: 'May', revenue: 185000, clients: 70, growth: 22.1 },
  { month: 'Jun', revenue: 205000, clients: 78, growth: 25.6 },
  { month: 'Jul', revenue: 228000, clients: 87, growth: 29.3 },
  { month: 'Aug', revenue: 255000, clients: 96, growth: 32.8 },
  { month: 'Sep', revenue: 285000, clients: 105, growth: 36.4 },
  { month: 'Oct', revenue: 320000, clients: 115, growth: 40.2 },
  { month: 'Nov', revenue: 360000, clients: 125, growth: 44.7 },
  { month: 'Dec', revenue: 410000, clients: 138, growth: 48.5 },
];

// Client categories with realistic data
const clientCategories = [
  { type: 'Enterprise', count: 28, growth: 25, color: 'bg-primary' },
  { type: 'Mid-Market', count: 45, growth: 42, color: 'bg-primary/80' },
  { type: 'SMB', count: 65, growth: 58, color: 'bg-primary/60' },
  { type: 'Startup', count: 42, growth: 35, color: 'bg-primary/40' },
];

// Industry performance data
const industryPerformance = [
  { industry: 'Tech', growth: 48.5, avgROI: 4.8, color: 'text-cyan-400' },
  { industry: 'E-commerce', growth: 42.3, avgROI: 4.2, color: 'text-green-400' },
  { industry: 'Finance', growth: 38.7, avgROI: 3.9, color: 'text-amber-400' },
  { industry: 'Healthcare', growth: 35.2, avgROI: 3.6, color: 'text-purple-400' },
  { industry: 'Education', growth: 32.8, avgROI: 3.4, color: 'text-red-400' },
];

export const Results: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Find max values for scaling
  const maxRevenue = Math.max(...clientGrowthData.map(d => d.revenue));
  const maxClients = Math.max(...clientGrowthData.map(d => d.clients));
  const maxGrowth = Math.max(...clientGrowthData.map(d => d.growth));

  return (
    <section ref={containerRef} className="section-padding relative overflow-hidden" id="results">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{ y: [30, 0, 30] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 border border-primary/30 bg-primary/5 text-primary text-sm font-display tracking-widest uppercase mb-6">
            Performance Metrics
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Data-Driven Results</span>
            <br />
            <span className="text-gradient">Proven Growth Engine</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real performance metrics from our client portfolio. All numbers are based on actual campaign results.
          </p>
        </motion.div>

        {/* KPI Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {kpis.map((kpi, index) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-border bg-card/50 backdrop-blur-sm p-6 relative group hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg border border-border bg-background ${kpi.color}`}>
                  <kpi.icon className="w-6 h-6" />
                </div>
                
                {/* Trend indicator */}
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                  kpi.trend === 'up' 
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                    : 'bg-red-500/10 text-red-400 border border-red-500/20'
                }`}>
                  {kpi.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {kpi.change}
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

              {/* Performance sparkline */}
              <div className="mt-4 h-1 w-full bg-muted rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${kpi.color.replace('text-', 'bg-')}`}
                  initial={{ width: '0%' }}
                  whileInView={{ width: `${60 + Math.random() * 40}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Growth Dashboard */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
         
              
        

            
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="border border-border bg-card/50 backdrop-blur-sm p-6 text-center">
            <BarChart3 className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="font-display text-2xl font-bold text-foreground mb-1">
              <AnimatedCounter value={180} suffix="+" />
            </div>
            <div className="text-muted-foreground text-sm">Active Campaigns</div>
          </div>
          
          <div className="border border-border bg-card/50 backdrop-blur-sm p-6 text-center">
            <Activity className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <div className="font-display text-2xl font-bold text-foreground mb-1">
              <AnimatedCounter value={96.7} suffix="%" />
            </div>
            <div className="text-muted-foreground text-sm">Client Retention Rate</div>
          </div>
          
          <div className="border border-border bg-card/50 backdrop-blur-sm p-6 text-center">
            <Target className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="font-display text-2xl font-bold text-foreground mb-1">
              <AnimatedCounter value={42} suffix=" days" />
            </div>
            <div className="text-muted-foreground text-sm">Avg. Time to Results</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};