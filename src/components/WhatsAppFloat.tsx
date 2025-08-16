import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppFloat = () => {
  const whatsappNumber = "9518959193";  
  const whatsappMessage = "Hello! I'm interested in knowing more about your plants";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
    >
      <div className="relative">
        {/* Pulse animation (behind icon) */}
        <motion.div
          className="absolute inset-0 bg-green-500 rounded-full pointer-events-none z-0"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.7, 0, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* WhatsApp button */}
        <div className="relative z-10 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300">
          <MessageCircle className="h-6 w-6" />
        </div>
      </div>
    </motion.a>
  );
};

export default WhatsAppFloat;
