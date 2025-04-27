import React, { useEffect, useState } from 'react';
import { Crown } from 'lucide-react';

const Header: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    };
    setCurrentDate(today.toLocaleDateString('pt-BR', options));
  }, []);

  const scrollToOffer = () => {
    const offerSection = document.getElementById('pricing');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative pt-10 pb-16 px-4 md:px-8 text-center">
      <div className="max-w-4xl mx-auto bg-pink-50 rounded-lg shadow-lg p-6 md:p-10 border-2 border-pink-200">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-pink-900">
          TRANSFORME RECHEIOS SEM FOGO EM UMA RENDA EXTRA DE <span className="text-pink-600 underline decoration-wavy decoration-pink-400">ATÉ R$3.735 POR MÊS!</span>
        </h1>
        
        <div className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-md inline-block mb-4">
          90% de desconto
        </div>
        
        <div className="flex justify-center mb-4">
          <p className="text-sm uppercase tracking-wider text-gray-500">
            ATUALIZADO EM <span className="font-bold">{currentDate}</span>
          </p>
        </div>

        <div className="mb-6">
          <img 
            src="https://i.im.ge/2025/04/20/vr6hwD.Capabook.jpeg" 
            alt="Capa do E-book" 
            className="max-w-full h-auto mx-auto rounded-lg shadow-lg mb-6 max-h-96 object-contain"
          />
        </div>

        <div className="text-xl md:text-2xl mb-4 flex items-center justify-center">
          <span className="line-through text-gray-500 mr-2">DE R$120,00</span>
          <span className="font-bold text-2xl md:text-3xl text-pink-700">POR APENAS R$12,99</span>
        </div>

        <div className="flex justify-center mb-6">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
              </svg>
            ))}
          </div>
        </div>

        <button 
          onClick={scrollToOffer}
          className="py-4 px-8 bg-pink-600 hover:bg-pink-700 text-white text-xl font-bold rounded-lg shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 uppercase tracking-wider"
        >
          EU QUERO AS RECEITAS
        </button>
      </div>
    </header>
  );
};

export default Header;