import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/4751978/pexels-photo-4751978.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Snake Plant Collection",
      category: "indoor",
      title: "Snake Plant",
      description: "Perfect air-purifying plant for beginners"
    },
    {
      src: "https://images.pexels.com/photos/158063/bellis-perennis-daisy-flower-spring-158063.jpeg?auto=compress&cs=tinysrgb&w=800", 
      alt: "Colorful outdoor flowering plants",
      category: "outdoor",
      title: "Garden Flowers",
      description: "Vibrant outdoor blooms for your garden"
    },
    {
      src: "https://images.pexels.com/photos/4503624/pexels-photo-4503624.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Peace Lily with white blooms",
      category: "flowering",
      title: "Peace Lily",
      description: "Elegant flowering houseplant"
    },
    {
      src: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Air purifying plants collection",
      category: "air-purifying",
      title: "Air Purifying Collection",
      description: "Plants that clean your indoor air naturally"
    },
    {
      src: "https://images.pexels.com/photos/4751978/pexels-photo-4751978.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Bougainvillea climbing vine",
      category: "outdoor",
      title: "Bougainvillea",
      description: "Spectacular climbing plant with colorful bracts"
    },
    {
      src: "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Rose garden in full bloom",
      category: "flowering",
      title: "Rose Garden",
      description: "Classic roses in various colors"
    },
    {
      src: "https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Succulent arrangement display",
      category: "indoor",
      title: "Succulent Collection",
      description: "Low-maintenance indoor succulents"
    },
    {
      src: "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Tree sapling nursery area",
      category: "outdoor",
      title: "Tree Saplings",
      description: "Young trees for landscaping projects"
    },
    {
      src: "https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Indoor plant corner setup",
      category: "air-purifying",
      title: "Indoor Plant Corner",
      description: "Perfect setup for air purification"
    }
  ];

  const filters = [
    { id: 'all', name: 'All Plants', count: galleryImages.length },
    { id: 'indoor', name: 'Indoor', count: galleryImages.filter(img => img.category === 'indoor').length },
    { id: 'outdoor', name: 'Outdoor', count: galleryImages.filter(img => img.category === 'outdoor').length },
    { id: 'flowering', name: 'Flowering', count: galleryImages.filter(img => img.category === 'flowering').length },
    { id: 'air-purifying', name: 'Air-Purifying', count: galleryImages.filter(img => img.category === 'air-purifying').length }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <>
      <section id="gallery" className="py-20 bg-gradient-to-b from-green-50 to-white">
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
              Plant Gallery
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Explore our beautiful collection of plants, from air-purifying indoor varieties 
              to stunning outdoor flowering species.
            </motion.p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200 shadow-sm'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="h-4 w-4" />
                {filter.name}
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeFilter === filter.id ? 'bg-white/20' : 'bg-gray-100'
                }`}>
                  {filter.count}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Masonry Grid */}
          <motion.div 
            className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
            layout
          >
            {filteredImages.map((image, index) => (
              <motion.div 
                key={`${activeFilter}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer break-inside-avoid"
                onClick={() => openLightbox(index)}
                whileHover={{ y: -5 }}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-green-800 font-semibold text-sm">View Details</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {filteredImages[selectedImage].title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {filteredImages[selectedImage].description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {filteredImages[selectedImage].category.replace('-', ' ')}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {selectedImage + 1} of {filteredImages.length}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Close Button */}
              <button 
                onClick={closeLightbox}
                className="absolute -top-4 -right-4 bg-white text-gray-800 hover:text-red-600 transition-colors rounded-full p-2 shadow-lg"
              >
                <X className="h-6 w-6" />
              </button>
              
              {/* Navigation Buttons */}
              <button 
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 transition-colors rounded-full p-3 shadow-lg"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button 
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 transition-colors rounded-full p-3 shadow-lg"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;