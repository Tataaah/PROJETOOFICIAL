import React from 'react';
import { Crown } from 'lucide-react';

export const Pricing = () => {
  return (
    <section id="pricing" className="py-16 px-4 bg-[#FFF4E6]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12 text-[#4C1C24] relative">
          <span className="relative inline-block">
            ADQUIRA AS RECEITAS:
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent"></span>
          </span>
          <span className="absolute -top-6 -right-6 text-[#D4AF37] opacity-20 text-6xl">✦</span>
          <span className="absolute -bottom-6 -left-6 text-[#D4AF37] opacity-20 text-6xl">✦</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Basic Package */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:scale-105">
            <div className="bg-[#4C1C24]/90 text-white p-6 relative">
              <h3 className="text-2xl font-bold font-serif">PACOTE BÁSICO</h3>
              <div className="mt-4">
                <span className="line-through text-white/70 text-lg">R$120,00</span>
                <div className="text-3xl font-bold">R$12,99</div>
              </div>
            </div>
            
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-[#7D9774] mr-2">✓</span>
                  <span>Receba seu acesso na hora</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7D9774] mr-2">✓</span>
                  <span>Acesso Vitalício</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#7D9774] mr-2">✓</span>
                  <span>+150 Tipos de Recheios Diferentes</span>
                </li>
              </ul>
              
              <a 
                href="https://pay.kirvano.com/7b35b62b-f8b7-433f-9278-1aa162058f65"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#5B3924] hover:bg-[#4a2e1d] text-white text-center font-bold py-3 px-4 rounded transition-colors duration-300"
              >
                QUERO AS RECEITAS
              </a>
              
              <p className="mt-4 text-sm text-center text-[#5B3924]/80 italic">
                Mas antes de comprar… temos uma oferta AINDA MAIS vantajosa para você!
                <br />Veja logo abaixo⬇️
              </p>
            </div>
          </div>
          
          {/* Premium Package */}
          <div className="bg-gradient-to-br from-white to-[#FFF8E7] rounded-lg shadow-xl border-2 border-[#D4AF37] overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105 relative">
            <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
              <div className="bg-[#D4AF37] text-white text-xs font-bold py-1 px-4 rotate-45 origin-bottom-left absolute top-0 right-0 transform translate-y-6 translate-x-6 shadow-md">
                RECOMENDADO
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#D4AF37] to-[#C1A046] text-white p-6 relative">
              <div className="flex items-center">
                <Crown className="h-6 w-6 mr-2 text-white" />
                <h3 className="text-2xl font-bold font-serif text-white">PACOTE PREMIUM</h3>
              </div>
              <div className="mt-4">
                <span className="line-through text-white/70 text-lg">R$200,00</span>
                <div className="text-3xl font-bold">R$19,99</div>
              </div>
            </div>
            
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span>Receba seu acesso na hora</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span>Acesso Vitalício</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span>+150 Recheios Diferentes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span>+40 Receitas de Massas (Pão de Ló, Massa Amanteigada, Brownie, entre MUITOS outros)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span>Dicas para Decorações de Bolos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span>30 Receitas Completas de Coberturas</span>
                </li>
              </ul>
              
              <a 
                href="https://pay.kirvano.com/9d9296aa-4d85-45b0-a3d4-09f42b71be06"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-[#C1443D] to-[#a13832] hover:from-[#a13832] hover:to-[#8a302b] text-white text-center font-bold py-3 px-4 rounded shadow-lg transition-all duration-300 animate-pulse"
              >
                EU QUERO AS RECEITAS PREMIUM!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};