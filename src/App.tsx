import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedPlants from './components/FeaturedPlants';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import PlantCareTips from './components/PlantCareTips';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import FloatingActionButton from './components/FloatingActionButton';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedPlants />
      <WhyChooseUs />
      <Gallery />
      <PlantCareTips />
      <Contact />
      <WhatsAppFloat />
      <Footer />
      <FloatingActionButton />
    </div>
  );
}

export default App;