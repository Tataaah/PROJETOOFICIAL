import React from 'react';
import { Star, DollarSign, TrendingUp, ShoppingBag, Heart } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "APRENDA MESMO SENDO TOTALMENTE INICIANTE",
      description: "Receitas com passo a passo didático e facilitado, perfeitas para confeiteiras do básico ao avançado criarem recheios lucrativos sem complicação e aumentarem suas vendas com praticidade",
      icon: <Star className="w-8 h-8 text-pink-600" />
    },
    {
      title: "BAIXO INVESTIMENTO",
      description: "A produção de bolos caseiros exige um investimento inicial baixo. Com utensílios básicos e ingredientes acessíveis, você pode começar sem grandes custos e lucrar rápido!",
      icon: <DollarSign className="w-8 h-8 text-pink-600" />
    },
    {
      title: "MERCADO EM CRESCIMENTO",
      description: "A demanda por alimentos caseiros e artesanais cresce a cada ano. Cada vez mais pessoas buscam produtos feitos à mão, criando um mercado em expansão para bolos lucrativos",
      icon: <TrendingUp className="w-8 h-8 text-pink-600" />
    },
    {
      title: "MARGEM DE LUCRO ATRATIVA",
      description: "A produção de bolos caseiros garante uma margem de lucro alta. Com custos baixos de ingredientes e utensílios, é possível vender por um preço atrativo e lucrar de verdade.",
      icon: <ShoppingBag className="w-8 h-8 text-pink-600" />
    },
    {
      title: "SATISFAÇÃO PESSOAL",
      description: "Produzir bolos caseiros traz uma satisfação única. Ver a alegria dos clientes é gratificante, além de permitir expressar sua criatividade com saberes e decorações que encantam e vendem.",
      icon: <Heart className="w-8 h-8 text-pink-600" />
    }
  ];

  return (
    <section className="py-12 px-4 bg-pink-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-pink-900">
          <span className="relative inline-block">
            QUAIS SÃO OS BÔNUS?
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-300 to-yellow-400"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-pink-200 h-full flex flex-col"
            >
              <div className="flex items-center justify-center mb-4 bg-pink-100 w-16 h-16 rounded-full mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-pink-800">{benefit.title}</h3>
              <p className="text-gray-700 flex-grow text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;