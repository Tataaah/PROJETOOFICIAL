import React from 'react';

const bonusItems = [
  {
    title: "APRENDA MESMO SENDO TOTALMENTE INICIANTE",
    description: "Receitas com passo a passo didático e facilitado, perfeitas para confeiteiras do básico ao avançado criarem recheios lucrativos sem complicação e aumentarem suas vendas com praticidade"
  },
  {
    title: "BAIXO INVESTIMENTO",
    description: "A produção de bolos caseiros exige um investimento inicial baixo. Com utensílios básicos e ingredientes acessíveis, você pode começar sem grandes custos e lucrar rápido!"
  },
  {
    title: "MERCADO EM CRESCIMENTO",
    description: "A demanda por alimentos caseiros e artesanais cresce a cada ano. Cada vez mais pessoas buscam produtos feitos à mão, criando um mercado em expansão para bolos lucrativos"
  },
  {
    title: "MARGEM DE LUCRO ATRATIVA",
    description: "A produção de bolos caseiros garante uma margem de lucro alta. Com custos baixos de ingredientes e utensílios, é possível vender por um preço atrativo e lucrar de verdade."
  },
  {
    title: "SATISFAÇÃO PESSOAL",
    description: "Produzir bolos caseiros traz uma satisfação única. Ver a alegria dos clientes é gratificante, além de permitir expressar sua criatividade com saberes e decorações que encantam e vendem."
  }
];

const Bonus = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 relative">
        <span className="relative inline-block">
          QUAIS SÃO OS BÔNUS?
          <span className="absolute bottom-0 left-0 w-full h-1 bg-pink-400"></span>
        </span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bonusItems.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md border-2 border-pink-200 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold text-pink-700 mb-3">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bonus;