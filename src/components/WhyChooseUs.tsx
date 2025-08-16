import { Leaf, Award, Truck, Users, Shield, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Eco-Friendly Practices",
      description: "100% organic fertilizers, sustainable growing methods, and zero harmful chemicals.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Expert Plant Care",
      description: "Certified horticulturists with 10+ years of experience in plant nurturing.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Free Home Delivery",
      description: "Safe packaging and free delivery within 10km radius. Plants reach you healthy.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "10,000+ Happy Customers",
      description: "Trusted by plant lovers across the region for quality and reliability.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Plant Health Guarantee",
      description: "30-day replacement guarantee on all plants with proper care instructions.",
      color: "from-teal-500 to-green-500",
      bgColor: "bg-teal-50"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Lifetime Support",
      description: "Free plant care consultation and support whenever you need guidance.",
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50"
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
            Why Choose Green Heaven?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            We're not just a nursery - we're your partners in creating beautiful, healthy green spaces 
            that bring joy and wellness to your life.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${feature.bgColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group cursor-pointer`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div 
                className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 5 }}
              >
                {feature.icon}
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-700 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {feature.description}
              </p>

              <motion.div 
                className="mt-6 w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <Leaf className="h-6 w-6" />
            <span>Experience the Green Heaven difference today!</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;