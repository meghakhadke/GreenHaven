import React, { useState } from 'react';
import { Phone, MessageSquare, Calendar, X, Flower } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919518959193?text=Hello! I\'m interested in your plants', '_blank');
    setIsOpen(false);
  };

  const handleCall = () => {
    window.location.href = 'tel:+919518959193';
    setIsOpen(false);
  };

  const handleCallbackRequest = () => {
    setShowCallbackForm(true);
    setIsOpen(false);
  };

  const submitCallbackForm = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the callback request
    alert(`Thank you ${formData.name}! We'll call you back at ${formData.phone} within 30 minutes.`);
    setShowCallbackForm(false);
    setFormData({ name: '', phone: '' });
  };

  const actions = [
    {
      icon: <MessageSquare className="h-5 w-5" />,
      label: 'WhatsApp',
      onClick: handleWhatsApp,
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Call Now',
      onClick: handleCall,
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      label: 'Request Callback',
      onClick: handleCallbackRequest,
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-600 hover:to-orange-700'
    }
  ];

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {/* Action Buttons */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute bottom-16 right-0 space-y-3"
            >
              {actions.map((action, index) => (
                <motion.button
                  key={action.label}
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.8 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={action.onClick}
                  className={`flex items-center gap-3 bg-gradient-to-r ${action.color} ${action.hoverColor} text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 group`}
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {action.icon}
                  <span className="font-medium whitespace-nowrap">{action.label}</span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main FAB */}
        <motion.button
          onClick={toggleMenu}
          className={`relative w-14 h-14 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center overflow-hidden ${
            isOpen ? 'rotate-45' : ''
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: isOpen ? 45 : 0 }}
        >
          {/* Blooming flower animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            animate={{ rotate: isOpen ? -45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Flower className="h-6 w-6" />}
          </motion.div>
        </motion.button>
      </div>

      {/* Callback Form Modal */}
      <AnimatePresence>
        {showCallbackForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowCallbackForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Request a Callback</h3>
                <p className="text-gray-600">We'll call you back within 30 minutes!</p>
              </div>

              <form onSubmit={submitCallbackForm} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                    placeholder="+91 9518959193"
                    required
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowCallbackForm(false)}
                    className="flex-1 px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all"
                  >
                    Request Call
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingActionButton;