import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="bg-card text-foreground px-4 py-2 rounded-lg text-sm font-medium shadow-lg border border-border whitespace-nowrap"
          >
            Talk to a Growth Expert Now
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        {/* Pulse Ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-whatsapp"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
        
        {/* Main Button */}
        <div className="relative w-14 h-14 rounded-full bg-whatsapp flex items-center justify-center shadow-lg pulse-glow">
          <MessageCircle className="w-7 h-7 text-whatsapp-foreground" />
        </div>
      </motion.div>
    </motion.a>
  );
};
