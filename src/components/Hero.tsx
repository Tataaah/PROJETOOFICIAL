import React from 'react';
import { Star } from 'lucide-react';
import { getCurrentDate } from '../utils/formatDate';

interface HeroProps {
  scrollToPackages: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToPackages }) => {
  return (
    <div className="pt-16 pb-12 text-center">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 border-2 border-pink-200">
        <div className="bg-green-600 text-white font-bold py-2 px-4 rounded-full inline-block mb-4 text-lg">
          90% de desconto
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
          TRANSFORME RECHEIOS SEM FOGO EM UMA RENDA EXTRA DE 
          <span className="text-pink-600"> ATÉ R$3.735 POR MÊS!</span>
        </h1>
        
        <p className="text-sm font-medium text-gray-500 mb-2">
          ATUALIZADO EM {getCurrentDate()}
        </p>
        
        <div className="my-6">
          <p className="text-gray-500 line-through text-xl mb-1">DE R$120,00</p>
          <p className="text-3xl font-bold text-pink-600 mb-4">POR APENAS R$12,99</p>
        </div>
        
        <button 
          onClick={scrollToPackages}
          className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition duration-300 transform hover:scale-105 mb-6"
        >
          EU QUERO AS RECEITAS
        </button>
        
        <div className="flex justify-center mt-3 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} fill="#FFD700" color="#FFD700" size={24} />
          ))}
        </div>
        
        <div className="mt-6">
          <img 
            src="https://i.im.ge/2025/04/20/vr6hwD.Capabook.th.jpeg" 
            alt="Capa do E-book de Receitas" 
            className="rounded-lg shadow-lg max-w-full h-auto mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;