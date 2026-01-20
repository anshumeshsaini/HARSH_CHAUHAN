import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 border border-primary text-primary text-xs tracking-widest mb-6">
            LET&apos;S CONNECT
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-primary">Dominate?</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let&apos;s engineer your path to market leadership.  
            Book a free strategy call or reach out directly.
          </p>
        </motion.div>

        {/* Centered Content */}
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-12">

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full border border-primary p-8 bg-background"
          >
            <h3 className="font-display text-xl font-bold mb-6 text-center">
              What You&apos;ll Get
            </h3>

            <ul className="space-y-4 max-w-xl mx-auto">
              {[
                'Comprehensive SEO & digital presence audit',
                'Custom growth roadmap for your business',
                'Competitor analysis & opportunity mapping',
                'ROI projections & timeline estimates',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 border border-primary flex items-center justify-center mt-0.5">
                    <ArrowRight className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-md flex flex-col gap-4"
          >
            <MagneticButton
              variant="primary"
              href="#"
              className="w-full justify-center border border-primary"
            >
              <Calendar className="w-5 h-5" />
              Book Free Strategy Call
            </MagneticButton>

            <MagneticButton
              variant="whatsapp"
              href="https://wa.me/919876543210"
              className="w-full justify-center border border-primary"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Instant Chat
            </MagneticButton>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
