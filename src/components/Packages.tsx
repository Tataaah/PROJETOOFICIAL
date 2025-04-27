import React from 'react';
import { Crown } from 'lucide-react';

const Packages = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 relative">
        <span className="relative inline-block">
          NOSSOS PACOTES
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-pink-600"></span>
          <span className="absolute -bottom-2 left-1/4 transform -translate-x-1/2 w-6 h-1 bg-yellow-400"></span>
          <span className="absolute -bottom-2 right-1/4 transform translate-x-1/2 w-6 h-1 bg-yellow-400"></span>
        </span>
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Basic Package */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-200">
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">PACOTE BÁSICO</h3>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <span className="text-gray-700 mr-2">✓</span> 
                <span className="text-gray-600">Receba seu acesso na hora</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-700 mr-2">✓</span> 
                <span className="text-gray-600">Acesso Vitalício</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-700 mr-2">✓</span> 
                <span className="text-gray-600">+150 Tipos de Recheios Diferentes</span>
              </li>
            </ul>
            
            <div className="text-center mb-6">
              <p className="text-gray-500 line-through">R$120,00</p>
              <p className="text-3xl font-bold text-gray-800">R$12,99</p>
            </div>
            
            <a 
              href="https://ofertadesconto.vercel.app/"
              className="block w-full bg-gray-800 hover:bg-gray-900 text-white text-center font-bold py-3 px-4 rounded-lg transition duration-300"
            >
              COMPRAR AGORA
            </a>
            
            <p className="mt-6 text-sm text-center text-gray-600">
              Mas antes de comprar… temos uma oferta AINDA MAIS vantajosa para você!
              <br />Veja logo abaixo⬇️
            </p>
          </div>
        </div>
        
        {/* Premium Package */}
        <div className="bg-gradient-to-r from-pink-100 to-pink-200 rounded-lg shadow-xl overflow-hidden border-2 border-yellow-400 transform hover:scale-105 transition-transform duration-300">
          <div className="p-6 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-300 to-yellow-500 transform rotate-45 translate-x-12 -translate-y-12"></div>
            
            <div className="flex items-center mb-4">
              <Crown className="text-yellow-500 mr-2" size={28} />
              <h3 className="text-2xl font-bold text-yellow-600">PACOTE PREMIUM</h3>
            </div>
            
            <ul className="mb-6 space-y-2 text-pink-900">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> 
                <span>Receba seu acesso na hora</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> 
                <span>Acesso Vitalício</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> 
                <span>+150 Recheios Diferentes</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> 
                <span>+40 Receitas de Massas (Pão de Ló, Massa Amanteigada, Brownie, entre MUITOS outros)</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> 
                <span>Dicas para Decorações de Bolos</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> 
                <span>30 Receitas Completas de Coberturas</span>
              </li>
            </ul>
            
            <div className="text-center mb-6">
              <p className="text-gray-600 line-through">R$200,00</p>
              <p className="text-3xl font-bold text-yellow-600">R$19,99</p>
            </div>
            
            <a 
              href="https://pay.kirvano.com/9d9296aa-4d85-45b0-a3d4-09f42b71be06"
              className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white text-center font-bold py-3 px-4 rounded-lg transition duration-300 shadow-md"
            >
              COMPRAR PACOTE PREMIUM
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;