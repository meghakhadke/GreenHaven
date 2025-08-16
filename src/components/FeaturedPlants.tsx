import React, { useState } from 'react';
import { Leaf, Sun, Droplets, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturedPlants = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const plants = [
    {
      id: 1,
      name: "Snake Plant",
      type: "Indoor",
      category: "indoor",
      image: "https://images.pexels.com/photos/4751978/pexels-photo-4751978.jpeg?auto=compress&cs=tinysrgb&w=600",
      benefits: ["Air Purifying", "Low Light", "Easy Care"],
      price: "₹299",
      description: "Perfect for beginners, thrives in low light and purifies air naturally."
    },
    {
      id: 2,
      name: "Hibiscus",
      type: "Outdoor",
      category: "outdoor",
      image: "https://images.pexels.com/photos/158063/bellis-perennis-daisy-flower-spring-158063.jpeg?auto=compress&cs=tinysrgb&w=600",
      benefits: ["Vibrant Blooms", "Heat Tolerant", "Attracts Butterflies"],
      price: "₹199",
      description: "Stunning tropical flowers that bloom throughout the growing season."
    },
    {
      id: 3,
      name: "Marigold",
      type: "Seasonal",
      category: "seasonal",
      image: "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=600",
      benefits: ["Seasonal Blooms", "Pest Repellent", "Easy Growing"],
      price: "₹49",
      description: "Bright seasonal flowers perfect for festivals and celebrations."
    },
    {
      id: 4,
      name: "Peace Lily",
      type: "Indoor",
      category: "indoor",
      image: "https://images.pexels.com/photos/4503624/pexels-photo-4503624.jpeg?auto=compress&cs=tinysrgb&w=600",
      benefits: ["Air Purifying", "Beautiful Blooms", "Humidity Loving"],
      price: "₹399",
      description: "Elegant white flowers and glossy leaves make this a stunning centerpiece."
    },
    {
      id: 5,
      name: "Bougainvillea",
      type: "Outdoor",
      category: "outdoor",
      image: "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600",
      benefits: ["Colorful Bracts", "Drought Resistant", "Climbing Vine"],
      price: "₹249",
      description: "Spectacular climbing plant with papery colorful bracts in various hues."
    },
    {
      id: 6,
      name: "Chrysanthemum",
      type: "Seasonal",
      category: "seasonal",
      image: "https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=600",
      benefits: ["Winter Blooms", "Colorful Varieties", "Long Lasting"],
      price: "₹89",
      description: "Beautiful winter flowering plants available in multiple colors."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Plants', icon: <Leaf className="h-5 w-5" /> },
    { id: 'indoor', name: 'Indoor', icon: <Heart className="h-5 w-5" /> },
    { id: 'outdoor', name: 'Outdoor', icon: <Sun className="h-5 w-5" /> },
    { id: 'seasonal', name: 'Seasonal', icon: <Droplets className="h-5 w-5" /> }
  ];

  const filteredPlants = activeCategory === 'all' 
    ? plants 
    : plants.filter(plant => plant.category === activeCategory);

  const getBenefitColor = (benefit: string) => {
    if (benefit.includes('Air Purifying')) return 'bg-green-100 text-green-800';
    if (benefit.includes('Blooms') || benefit.includes('Flowers')) return 'bg-pink-100 text-pink-800';
    if (benefit.includes('Easy') || benefit.includes('Low')) return 'bg-blue-100 text-blue-800';
    return 'bg-purple-100 text-purple-800';
  };

  return (
    <section id="featured-plants" className="py-20 bg-gradient-to-b from-emerald-50 via-white to-green-50">
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
            Featured Plants
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Discover our handpicked collection of premium plants, carefully selected for their beauty, 
            health benefits, and ease of care.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Plants Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredPlants.map((plant, index) => (
            <motion.div
              key={plant.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-green-800 font-bold text-lg">{plant.price}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-800">{plant.name}</h3>
                  <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    {plant.type}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{plant.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {plant.benefits.map((benefit, idx) => (
                    <span 
                      key={idx} 
                      className={`text-xs font-medium px-3 py-1 rounded-full ${getBenefitColor(benefit)}`}
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
                
                <motion.button 
                  className="group/btn w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Plants
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPlants;