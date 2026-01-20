import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Mail, href: 'mailto:hello@harshchauhan.com', label: 'Email' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 px-4">
      {/* Animated Line Separator */}
      <div className="container mx-auto mb-12">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
        />
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="font-display text-2xl font-bold text-foreground">
              Harsh <span className="text-primary">Chauhan</span>
            </h3>
            <p className="text-muted-foreground text-sm mt-1">
              The God of SEO
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-3 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary transition-all group"
              >
                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Harsh Chauhan. All rights reserved.
            </p>
            <p className="text-muted-foreground/50 text-xs mt-1">
              Engineered for growth.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
