import React from 'react';
import { Crown, Check } from 'lucide-react';

const PricingCards: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Basic Package */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-200 transition-transform duration-300 hover:shadow-xl relative">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">PACOTE BÁSICO</h3>
          
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-2" />
              <span>Receba seu acesso na hora</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-2" />
              <span>Acesso Vitalício</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-2" />
              <span>+150 Tipos de Recheios Diferentes</span>
            </div>
          </div>
          
          <div className="text-center mb-6">
            <span className="line-through text-gray-500 text-lg">R$120,00</span>
            <div className="text-3xl font-bold mt-1 text-gray-800">R$12,99</div>
          </div>
          
          <a 
            href="https://ofertadesconto.vercel.app/"
            className="block w-full py-3 px-4 bg-gray-800 hover:bg-gray-900 text-white text-center font-bold rounded-lg shadow transition-colors duration-300"
          >
            COMPRAR AGORA
          </a>
          
          <p className="mt-6 text-center text-sm text-gray-600">
            Mas antes de comprar… temos uma oferta AINDA MAIS vantajosa para você! Veja logo abaixo⬇️
          </p>
        </div>
      </div>
      
      {/* Premium Package */}
      <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg shadow-lg overflow-hidden border-2 border-yellow-400 transition-transform duration-300 hover:shadow-xl transform hover:scale-105 relative">
        <div className="absolute -top-3 -right-3 bg-yellow-400 text-white p-2 rounded-full">
          <Crown className="w-5 h-5" />
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold text-center mb-4 flex justify-center items-center text-pink-900">
            <Crown className="w-6 h-6 text-yellow-500 mr-2" />
            PACOTE PREMIUM
            <Crown className="w-6 h-6 text-yellow-500 ml-2" />
          </h3>
          
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-pink-900">Receba seu acesso na hora</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-pink-900">Acesso Vitalício</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-pink-900">+150 Recheios Diferentes</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-pink-900">+40 Receitas de Massas (Pão de Ló, Massa Amanteigada, Brownie, entre MUITOS outros)</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-pink-900">Dicas para Decorações de Bolos</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-pink-900">30 Receitas Completas de Coberturas</span>
            </div>
          </div>
          
          <div className="text-center mb-6">
            <span className="line-through text-gray-500 text-lg">R$200,00</span>
            <div className="text-3xl font-bold mt-1 text-yellow-600">R$19,99</div>
          </div>
          
          <a 
            href="https://pay.kirvano.com/9d9296aa-4d85-45b0-a3d4-09f42b71be06"
            className="block w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800 text-white text-center font-bold rounded-lg shadow-lg transition-colors duration-300"
          >
            COMPRAR PACOTE PREMIUM
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;