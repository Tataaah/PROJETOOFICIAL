import React from 'react';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Gallery } from './components/Gallery';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { SalesNotifications } from './components/SalesNotifications';
import { CountdownTimer } from './components/CountdownTimer';

function App() {
  return (
    <div className="bg-[#FFF4E6] min-h-screen font-sans text-[#5B3924] overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#4C1C24] to-[#C1443D] p-2 flex justify-center items-center shadow-md">
        <CountdownTimer />
      </div>
      
      <div className="pt-14">
        <Hero />
        <Benefits />
        <Gallery />
        <Pricing />
        <Testimonials />
        <Guarantee />
        <FAQ />
        <Footer />
      </div>
      
      <SalesNotifications />
    </div>
  );
}

export default App;