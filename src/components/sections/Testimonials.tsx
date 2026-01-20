import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Lens } from "./lens";

const testimonials = [
  {
    quote: "Harsh doesn't just do SEO—he engineers growth. Our organic traffic increased 400% in 6 months. He's truly the God of SEO.",
    author: "Rajesh Kumar",
    role: "Marketing Head, HostGator India",
    avatar: "RK",
  },
  {
    quote: "The COCO Strategy transformed our entire digital presence. We went from page 5 to dominating page 1 for our key terms.",
    author: "Priya Sharma",
    role: "CEO, Travel Startup",
    avatar: "PS",
  },
  {
    quote: "Working with Harsh was a game-changer. His strategic approach to SEO and conversion optimization doubled our leads.",
    author: "Amit Verma",
    role: "Founder, E-commerce Brand",
    avatar: "AV",
  },
  {
    quote: "Harsh's expertise in technical SEO and content strategy helped us outrank competitors we thought were untouchable.",
    author: "Sneha Patel",
    role: "Digital Director, Media Company",
    avatar: "SP",
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const navigate = (direction: 'prev' | 'next') => {
    setCurrentIndex((prev) =>
      direction === 'prev'
        ? (prev - 1 + testimonials.length) % testimonials.length
        : (prev + 1) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 border border-primary text-primary text-xs tracking-widest mb-6">
            TESTIMONIALS
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Voices of <span className="text-primary">Success</span>
          </h2>
        </motion.div>

        {/* Slider */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="border border-primary p-10 bg-background"
            >
              <Quote className="w-10 h-10 text-primary mb-6" />

              {/* Quote */}
              <Lens
                zoomFactor={3}
                lensSize={180}
                maskShape="square"
                blurEdge={true}
                shadowIntensity="heavy"
                animationDuration={0.5}
                smoothFollow={false}
              >
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-10">
                  “{testimonials[currentIndex].quote}”
                </p>
              </Lens>

              {/* Author & Avatar */}
              <div className="flex items-center gap-4">
                <Lens
                  zoomFactor={2}
                  lensSize={60}
                  maskShape="circle"
                  blurEdge={true}
                  shadowIntensity="medium"
                  animationDuration={0.5}
                  smoothFollow={false}
                >
                  <div className="w-14 h-14 border border-primary flex items-center justify-center text-primary font-bold">
                    {testimonials[currentIndex].avatar}
                  </div>
                </Lens>

                <div>
                  <Lens
                    zoomFactor={2}
                    lensSize={150}
                    maskShape="square"
                    blurEdge={true}
                    shadowIntensity="medium"
                    animationDuration={0.5}
                    smoothFollow={false}
                  >
                    <h4 className="font-display font-bold">
                      {testimonials[currentIndex].author}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                  </Lens>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">

            <button
              onClick={() => navigate('prev')}
              className="border border-primary p-3 hover:bg-primary hover:text-background"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 transition-all ${
                    i === currentIndex
                      ? 'w-10 bg-primary'
                      : 'w-2 bg-muted'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate('next')}
              className="border border-primary p-3 hover:bg-primary hover:text-background"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};
