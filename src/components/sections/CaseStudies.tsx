import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X, TrendingUp, Target, Zap } from 'lucide-react';
import { InteractiveCard } from './interactive-card';

const caseStudies = [
  {
    client: 'HostGator India',
    industry: 'Web Hosting',
    challenge: 'Low organic visibility in highly competitive hosting market',
    strategy: 'Technical SEO overhaul + content authority building + link acquisition',
    execution: 'Implemented E-E-A-T framework, optimized 500+ pages, built 200+ quality backlinks',
    results: {
      traffic: '+340%',
      rankings: '150+ keywords on Page 1',
      revenue: '2.8x increase',
    },
  },
  {
    client: 'Hindustan Times',
    industry: 'Media & Publishing',
    challenge: 'Declining organic reach despite massive content library',
    strategy: 'Content optimization + Core Web Vitals improvement + topic clustering',
    execution: 'Restructured 10,000+ articles, improved page speed by 60%, semantic SEO implementation',
    results: {
      traffic: '+520%',
      rankings: 'Featured snippets for 500+ queries',
      revenue: '4.5x ad revenue',
    },
  },
  {
    client: 'EaseMyTrip',
    industry: 'Travel & Tourism',
    challenge: 'Intense competition from OTA giants',
    strategy: 'Long-tail keyword domination + local SEO + conversion optimization',
    execution: 'Created 2,000+ destination pages, implemented schema markup, A/B tested booking flow',
    results: {
      traffic: '+280%',
      rankings: '800+ travel keywords ranked',
      revenue: '3.2x bookings',
    },
  },
];

export const CaseStudies: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<number | null>(null);

  return (
    <section id="case-studies" className="py-24 bg-background relative">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 border border-primary text-primary text-xs tracking-widest mb-6">
            CASE STUDIES
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Transformations <span className="text-primary">That Speak</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real brands. Real execution. Measurable growth.
          </p>
        </motion.div>

        {/* Cards with InteractiveCard wrapper */}
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <InteractiveCard
              key={study.client}
              InteractiveColor="#00f0ff"
              tailwindBgClass="bg-background"
              className="cursor-pointer"
              onClick={() => setSelectedStudy(index)}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-primary/40 h-full flex flex-col"
              >
                <div className="flex justify-between mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold">
                      {study.client}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {study.industry}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-primary" />
                </div>

                <p className="text-sm text-muted-foreground mb-6 line-clamp-2 flex-grow">
                  {study.challenge}
                </p>

                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-green-400">{study.results.traffic}</span>
                  <span className="text-primary">{study.results.revenue}</span>
                </div>
              </motion.div>
            </InteractiveCard>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedStudy !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/90"
              onClick={() => setSelectedStudy(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="border border-primary bg-background max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
              >
                {/* Modal Header */}
                <div className="flex justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold">
                      {caseStudies[selectedStudy].client}
                    </h3>
                    <p className="text-primary text-sm">
                      {caseStudies[selectedStudy].industry}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedStudy(null)}
                    className="border border-primary p-2 hover:bg-primary hover:text-background"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Timeline */}
                <div className="space-y-6 border-l border-primary pl-6">
                  {[
                    { icon: Target, label: 'Challenge', content: caseStudies[selectedStudy].challenge },
                    { icon: Zap, label: 'Strategy', content: caseStudies[selectedStudy].strategy },
                    { icon: TrendingUp, label: 'Execution', content: caseStudies[selectedStudy].execution },
                  ].map((step, i) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15 }}
                      className="flex gap-4"
                    >
                      <div className="w-10 h-10 border border-primary flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>

                      <div>
                        <h4 className="text-xs text-primary font-semibold mb-1">
                          {step.label}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {step.content}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Results */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-10 border border-primary p-6"
                >
                  <h4 className="text-center font-bold mb-6">
                    RESULTS
                  </h4>

                  <div className="grid grid-cols-3 text-center gap-4">
                    <div>
                      <div className="text-xl font-bold text-green-400">
                        {caseStudies[selectedStudy].results.traffic}
                      </div>
                      <div className="text-xs text-muted-foreground">Traffic</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-primary">
                        {caseStudies[selectedStudy].results.rankings}
                      </div>
                      <div className="text-xs text-muted-foreground">Rankings</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-amber-400">
                        {caseStudies[selectedStudy].results.revenue}
                      </div>
                      <div className="text-xs text-muted-foreground">Revenue</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};