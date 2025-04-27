import React from 'react';
import Header from './components/Header';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import PricingCards from './components/PricingCards';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CountdownTimer from './components/CountdownTimer';
import SalesNotification from './components/SalesNotification';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      <Header />
      <Benefits />
      <Gallery />
      <div id="pricing" className="py-12">
        <h2 className="text-4xl font-bold text-center mb-10 relative">
          <span className="relative inline-block">
            NOSSOS PACOTES
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-300 to-yellow-400"></span>
            <span className="absolute -top-1 -right-3 w-6 h-6 text-yellow-500">✨</span>
            <span className="absolute -top-1 -left-3 w-6 h-6 text-yellow-500">✨</span>
          </span>
        </h2>
        <PricingCards />
      </div>
      <div id="testimonials" className="py-12 bg-pink-50">
        <h2 className="text-4xl font-bold text-center mb-10">
          O QUE NOSSAS CLIENTES ESTÃO FALANDO SOBRE OS RECHEIOS
        </h2>
        <Testimonials />
      </div>
      <Guarantee />
      <FAQ />
      <Footer />
      <CountdownTimer />
      <SalesNotification />
    </div>
  );
}

export default App;