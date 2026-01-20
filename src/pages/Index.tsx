import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Results } from '@/components/sections/Results';
import { Tools } from '@/components/sections/Tools';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Testimonials } from '@/components/sections/Testimonials';
import { Manifesto } from '@/components/sections/Manifesto';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index: React.FC = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Sections */}
      <Hero />
      <About />
      <Services />
      <Results />
      <Tools />
      <CaseStudies />
      <Testimonials />
      <Manifesto />
      <Contact />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </main>
  );
};

export default Index;
