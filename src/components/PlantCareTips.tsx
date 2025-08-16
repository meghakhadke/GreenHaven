import React from 'react';
import { Calendar, User, ArrowRight, Droplets, Sun, Scissors } from 'lucide-react';
import { motion } from 'framer-motion';

const PlantCareTips = () => {
  const tips = [
    {
      id: 1,
      title: "Winter Plant Care: Keeping Your Plants Healthy in Cold Weather",
      excerpt: "Learn essential tips to protect your plants during winter months and ensure they thrive when spring arrives.",
      author: "Green Heaven Expert",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/4751978/pexels-photo-4751978.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: <Droplets className="h-6 w-6" />,
      category: "Seasonal Care"
    },
    {
      id: 2,
      title: "The Ultimate Guide to Indoor Plant Lighting",
      excerpt: "Discover how to provide the perfect lighting conditions for your houseplants to flourish year-round.",
      author: "Plant Care Specialist",
      date: "Dec 12, 2024",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/4503624/pexels-photo-4503624.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: <Sun className="h-6 w-6" />,
      category: "Indoor Care"
    },
    {
      id: 3,
      title: "Pruning Techniques for Healthy Plant Growth",
      excerpt: "Master the art of pruning to promote healthy growth, better flowering, and maintain plant shape.",
      author: "Horticulture Expert",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: <Scissors className="h-6 w-6" />,
      category: "Maintenance"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-800 to-emerald-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Plant Care Tips
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Expert advice and practical tips to help your plants thrive. 
            Learn from our experienced horticulturists and plant care specialists.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <motion.article
              key={tip.id}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2">
                  <div className="text-green-600">
                    {tip.icon}
                  </div>
                  <span className="text-green-800 font-medium text-sm">{tip.category}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors line-clamp-2">
                  {tip.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {tip.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{tip.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{tip.date}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-medium text-sm">{tip.readTime}</span>
                  <motion.button 
                    className="group/btn flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Tips
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PlantCareTips;