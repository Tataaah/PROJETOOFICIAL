import React, { useRef } from 'react';
import Hero from './components/Hero';
import Bonus from './components/Bonus';
import Gallery from './components/Gallery';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CountdownTimer from './components/CountdownTimer';
import SalesNotification from './components/SalesNotification';

function App() {
  const packagesRef = useRef<HTMLDivElement>(null);

  const scrollToPackages = () => {
    packagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-pink-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative">
        <Hero scrollToPackages={scrollToPackages} />
        <Bonus />
        <Gallery />
        <div ref={packagesRef}>
          <Packages />
        </div>
        <Testimonials />
        <Guarantee />
        <FAQ />
      </div>
      <Footer />
      <CountdownTimer />
      <SalesNotification />
    </div>
  );
}

export default App;