import React from 'react';
import { ShieldCheck, Zap, Lock } from 'lucide-react';

const OfferCard: React.FC = () => {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-10 transform transition-all duration-500 hover:shadow-2xl border-2 border-amber-200">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-pink-600 to-amber-500 mb-2 animate-pulse">
          Meus PARABÉNS!
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-6">
          Você ganhou um desconto em nosso PLANO PREMIUM
        </h2>
      </div>
      
      {/* Pricing */}
      <div className="text-center mb-8">
        <p className="text-lg text-gray-500 line-through mb-1">DE ~R$19,99~</p>
        <p className="text-lg font-medium text-gray-700 mb-2">POR APENAS</p>
        <div className="relative">
          <div className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-pink-600 to-amber-500 animate-pulse mb-4 drop-shadow-lg">
            R$9,99
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-200 via-pink-200 to-amber-200 opacity-30 blur-lg -z-10 rounded-full"></div>
        </div>
      </div>
      
      {/* Value proposition */}
      <div className="text-center mb-8">
        <p className="font-bold text-lg md:text-xl text-gray-800 mb-3">
          ADQUIRA TODOS OS NOSSOS CONTEÚDOS DO NOSSO PLANO PREMIUM
        </p>
        <p className="text-gray-600 text-sm md:text-base italic mb-6">
          "Eu não devia estar te proporcionando este acesso aos conteúdos MAIS SECRETOS dos confeiteiros MAIS RENOMADOS do nosso país… Mas eu sei o quanto isso irá te proporcionar bons conhecimentos culinários!"
        </p>
      </div>
      
      {/* CTA Button */}
      <div className="mb-4 relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-pink-600 to-amber-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <a 
          href="https://pay.kirvano.com/9d9296aa-4d85-45b0-a3d4-09f42b71be06" 
          className="relative block w-full py-4 px-6 bg-gradient-to-r from-pink-600 via-amber-500 to-pink-600 text-white font-bold text-lg md:text-xl rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-center border border-amber-200/30"
        >
          SIM! QUERO MEU DESCONTO ESPECIAL
        </a>
      </div>

      {/* No thanks link */}
      <div className="text-center mb-8">
        <a 
          href="https://pay.kirvano.com/7b35b62b-f8b7-433f-9278-1aa162058f65" 
          className="text-sm text-gray-500 underline hover:text-pink-600 transition-colors duration-300"
        >
          Não quero. Obrigado(a)!
        </a>
      </div>
      
      {/* Trust indicators */}
      <div className="flex justify-center space-x-8">
        <div className="flex flex-col items-center">
          <ShieldCheck className="h-6 w-6 text-amber-500 mb-1" />
          <span className="text-xs text-gray-600">Garantia</span>
        </div>
        <div className="flex flex-col items-center">
          <Zap className="h-6 w-6 text-amber-500 mb-1" />
          <span className="text-xs text-gray-600">Acesso Imediato</span>
        </div>
        <div className="flex flex-col items-center">
          <Lock className="h-6 w-6 text-amber-500 mb-1" />
          <span className="text-xs text-gray-600">Pagamento Seguro</span>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;