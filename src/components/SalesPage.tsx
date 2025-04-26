import React, { useEffect } from 'react';
import OfferCard from './OfferCard';
import { AnimatedBackground } from './AnimatedBackground';

const SalesPage: React.FC = () => {
  useEffect(() => {
    document.title = "Oferta Especial - Plano Premium";
    
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          element.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-pink-500 to-white">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <OfferCard />
        </div>
        <footer className="text-center mt-8 text-sm text-gray-500">
          © Segredos da Cozinha - Todos os Direitos Reservados
        </footer>
      </div>
    </div>
  );
};

export default SalesPage;