import React from 'react';

type BenefitProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

const Benefit = ({ title, description, icon, color }: BenefitProps) => (
  <div className={`bg-white/90 backdrop-blur rounded-lg shadow-lg p-4 border-t-4 ${color} transform transition-transform duration-300 hover:scale-105`}>
    <div className="text-center mb-2">
      {icon}
    </div>
    <h3 className="text-lg font-bold font-serif mb-2 text-[#5B3924] text-center">{title}</h3>
    <p className="text-sm text-[#5B3924]/80">{description}</p>
  </div>
);

export const Benefits = () => {
  const benefits = [
    {
      icon: '👨‍🍳',
      title: 'APRENDA MESMO SENDO TOTALMENTE INICIANTE',
      description: 'Receitas com passo a passo didático e facilitado, perfeitas para confeiteiras do básico ao avançado criarem recheios lucrativos sem complicação e aumentarem suas vendas com praticidade.',
      color: 'border-[#C1443D]'
    },
    {
      icon: '💰',
      title: 'BAIXO INVESTIMENTO',
      description: 'A produção de bolos caseiros exige um investimento inicial baixo. Com utensílios básicos e ingredientes acessíveis, você pode começar sem grandes custos e lucrar rápido!',
      color: 'border-[#7D9774]'
    },
    {
      icon: '📈',
      title: 'MERCADO EM CRESCIMENTO',
      description: 'A demanda por alimentos caseiros e artesanais cresce a cada ano. Cada vez mais pessoas buscam produtos feitos à mão, criando um mercado em expansão para bolos lucrativos.',
      color: 'border-[#D4AF37]'
    },
    {
      icon: '💎',
      title: 'MARGEM DE LUCRO ATRATIVA',
      description: 'A produção de bolos caseiros garante uma margem de lucro alta. Com custos baixos de ingredientes e utensílios, é possível vender por um preço atrativo e lucrar de verdade.',
      color: 'border-[#4C1C24]'
    },
    {
      icon: '😊',
      title: 'SATISFAÇÃO PESSOAL',
      description: 'Produzir bolos caseiros traz uma satisfação única. Ver a alegria dos clientes é gratificante, além de permitir expressar sua criatividade com saberes e decorações que encantam e vendem.',
      color: 'border-[#5B3924]'
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#FFF4E6]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12 text-[#4C1C24]">
          <span className="relative inline-block">
            QUAIS SÃO OS BÔNUS?
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <Benefit
              key={index}
              icon={<span className="text-4xl">{benefit.icon}</span>}
              title={benefit.title}
              description={benefit.description}
              color={benefit.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};