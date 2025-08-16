import React from 'react';
import { Leaf, Facebook, Instagram, MessageSquare, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-green-800 to-green-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <Leaf className="h-32 w-32 text-green-300 transform rotate-12" />
        </div>
        <div className="absolute top-20 right-20">
          <Leaf className="h-24 w-24 text-green-400 transform -rotate-12" />
        </div>
        <div className="absolute bottom-20 left-1/4">
          <Leaf className="h-28 w-28 text-green-200 transform rotate-45" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Leaf className="h-10 w-10 text-green-400" />
              </motion.div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                Green Heaven
              </h3>
            </div>
            <p className="text-green-100 leading-relaxed">
              Where nature meets nurture. Your trusted partner for premium plants, 
              expert care, and eco-friendly gardening solutions since 2014.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-700 hover:bg-green-600 p-3 rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-700 hover:bg-green-600 p-3 rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="https://wa.me/919518959193" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-700 hover:bg-green-600 p-3 rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <MessageSquare className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-green-300">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'Featured Plants', id: 'featured-plants' },
                { name: 'Plant Gallery', id: 'gallery' },
                { name: 'Plant Care Tips', id: 'plant-care-tips' },
                { name: 'Contact Us', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <motion.button 
                    onClick={() => scrollToSection(item.id)}
                    className="text-green-100 hover:text-white transition-colors duration-300 hover:translate-x-2 transform"
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Plant Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-green-300">Plant Categories</h4>
            <ul className="space-y-3 text-green-100">
              <li className="hover:text-white transition-colors cursor-pointer">Indoor Plants</li>
              <li className="hover:text-white transition-colors cursor-pointer">Outdoor Plants</li>
              <li className="hover:text-white transition-colors cursor-pointer">Seasonal Plants</li>
              <li className="hover:text-white transition-colors cursor-pointer">Air-Purifying Plants</li>
              <li className="hover:text-white transition-colors cursor-pointer">Flowering Plants</li>
              <li className="hover:text-white transition-colors cursor-pointer">Medicinal Plants</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-green-300">Contact Info</h4>
            <div className="space-y-4 text-green-100">
              <motion.div 
                className="flex items-start gap-3 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <MapPin className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p>123 Garden Lane</p>
                  <p>Green Valley, BC 12345</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
                onClick={() => window.location.href = 'tel:+919518959193'}
              >
                <Phone className="h-5 w-5 text-green-400" />
                <p>+91 95189 59193</p>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
                onClick={() => window.location.href = 'mailto:info@greenheaven.com'}
              >
                <Mail className="h-5 w-5 text-green-400" />
                <p>info@greenheaven.com</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-green-700 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-green-200 flex items-center justify-center gap-2 flex-wrap">
            © 2024 Green Heaven Nursery. All rights reserved. | 
            <span className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-400" /> for plant lovers
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;