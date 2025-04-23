import React from 'react';
import { CurrentDate } from './CurrentDate';
import { scrollToSection } from '../utils/scrollUtils';

export const Hero = () => {
  return (
    <section className="relative px-4 py-12 md:py-20 bg-gradient-to-br from-[#4C1C24] to-[#5B3924] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://i.im.ge/2025/04/20/vr6hwD.Capabook.th.jpeg')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 backdrop-blur-sm bg-[#4C1C24]/30"></div>
      
      <div className="container mx-auto relative z-10 max-w-5xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4 leading-tight">
            SEGREDO QUE SOMENTE OS GRANDES CONFEITEIROS SABEM - AGORA NO SEU PRATO
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6">
            TRANSFORME RECHEIOS SEM FOGO EM UMA RENDA EXTRA DE 
            <span className="font-bold text-[#D4AF37] animate-pulse"> ATÉ R$3.735 POR MÊS!</span>
          </h2>
          
          <div className="inline-block mb-6">
            <CurrentDate />
          </div>
          
          <div className="bg-[#7D9774] text-white font-bold py-2 px-4 rounded inline-block mb-4 transform hover:scale-105 transition-transform duration-300">
            90% de desconto
          </div>
          
          <p className="text-lg md:text-xl mb-6">
            <span className="line-through opacity-75">DE R$120,00</span> POR APENAS <span className="font-bold text-[#D4AF37]">R$12,99</span>
          </p>
          
          <button 
            onClick={() => scrollToSection('pricing')}
            className="bg-[#C1443D] hover:bg-[#a13832] text-white font-bold py-3 px-8 rounded-lg text-xl shadow-lg transform hover:scale-105 transition-all duration-300 animate-bounce"
          >
            EU QUERO AS RECEITAS
          </button>
          
          <div className="mt-6 flex justify-center">
            <div className="flex items-center">
              <span className="text-[#D4AF37]">★★★★★</span>
              <span className="ml-2">Avaliado por mais de 1.000 clientes satisfeitos</span>
            </div>
          </div>
        </div>
        
        <div className="max-w-md mx-auto mt-8">
          <img 
            src="https://i.im.ge/2025/04/20/vr6hwD.Capabook.th.jpeg" 
            alt="Capa do livro de receitas" 
            className="w-full h-auto rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};