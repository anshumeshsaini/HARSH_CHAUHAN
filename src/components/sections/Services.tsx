import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  Target,
  TrendingUp,
  PenTool,
  BarChart3,
  Zap,
} from "lucide-react"
import { InteractiveGradient } from "./interactive-gradient-card.tsx"

const services = [
  {
    icon: Search,
    title: "SEO Engineering",
    problem: "Invisible on Google, losing to competitors",
    strategy: "Technical SEO + AI optimization + E-E-A-T authority building",
    outcome: "Page 1 rankings, 300%+ organic traffic growth",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Target,
    title: "Performance Ads",
    problem: "Wasted ad spend, low ROAS",
    strategy: "Data-driven targeting + conversion-optimized funnels",
    outcome: "Reduced CPA by 40%, maximized ROI",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    problem: "Traffic but no sales or leads",
    strategy: "CRO audits + A/B testing + UX optimization",
    outcome: "Double conversion rates, more revenue per visitor",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: PenTool,
    title: "Content & Authority",
    problem: "No brand recognition or trust",
    strategy: "E-E-A-T content + media mentions + influencer collabs",
    outcome: "Industry authority status, trusted brand",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: BarChart3,
    title: "Analytics Intelligence",
    problem: "Data chaos, no actionable insights",
    strategy: "Dashboard setup + funnel analysis + predictive analytics",
    outcome: "Crystal clear KPIs, data-driven decisions",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: Zap,
    title: "COCO Strategy",
    problem: "Fragmented digital presence",
    strategy: "Content Optimization + Conversion Optimization integration",
    outcome: "Unified growth engine, market domination",
    color: "from-cyan-400 to-cyan-600",
  },
]

export const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="section-padding relative" id="services">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 border border-primary/40 bg-primary/5 text-primary text-sm font-display tracking-widest uppercase mb-6">
            Services
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Growth Solutions</span>
            <br />
            <span className="text-gradient">Engineered for Dominance</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each service is a precision-engineered growth system.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <InteractiveGradient
                color="#1890ff"
                glowColor="#107667ed"
                followMouse
                hoverOnly={false}
                intensity={90}
                backgroundColor="#0e0e11"
                width="100%"
                height="100%"
                borderRadius="0px" // 🔪 ABSOLUTE SHARP
              >
                <div className="relative min-h-[280px] border border-border bg-card p-6 overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.12)]">
                  <AnimatePresence mode="wait">
                    {hoveredIndex === index ? (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="h-full"
                      >
                        <div className="space-y-4">
                          <div
                            className={`inline-flex p-3 bg-gradient-to-r ${service.color} text-white`}
                          >
                            <service.icon className="w-6 h-6" />
                          </div>

                          <h3 className="font-display text-xl font-bold text-foreground">
                            {service.title}
                          </h3>

                          <div className="space-y-3 text-sm">
                            <div>
                              <span className="text-red-400 font-semibold uppercase">
                                Problem
                              </span>
                              <p className="text-muted-foreground mt-1">
                                {service.problem}
                              </p>
                            </div>

                            <div>
                              <span className="text-primary font-semibold uppercase">
                                Strategy
                              </span>
                              <p className="text-muted-foreground mt-1">
                                {service.strategy}
                              </p>
                            </div>

                            <div>
                              <span className="text-green-400 font-semibold uppercase">
                                Outcome
                              </span>
                              <p className="text-muted-foreground mt-1">
                                {service.outcome}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="h-full flex flex-col items-center justify-center text-center"
                      >
                        <div
                          className={`inline-flex p-4 bg-gradient-to-r ${service.color} text-white mb-4`}
                        >
                          <service.icon className="w-8 h-8" />
                        </div>

                        <h3 className="font-display text-xl font-bold text-foreground mb-2">
                          {service.title}
                        </h3>

                        <p className="text-muted-foreground text-sm uppercase tracking-widest">
                          Hover to explore →
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </InteractiveGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
