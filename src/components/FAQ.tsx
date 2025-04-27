import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqItems = [
  {
    question: "Para quem é indicado estes conteúdos?",
    answer: "Estes conteúdos são ideais para qualquer pessoa, desde iniciantes sem experiência até confeiteiros mais avançados que desejam aprimorar suas habilidades em bolos caseiros e aprender técnicas eficazes de venda."
  },
  {
    question: "Preciso de equipamentos especiais para começar?",
    answer: "Não. Começamos com o básico, ensinando você a trabalhar com materiais e utensílios que provavelmente já possui em sua cozinha."
  },
  {
    question: "Tenho que pagar todo mês?",
    answer: "Não! O conteúdo é todo entregue assim que o pagamento for feito, com acesso vitalício e você não precisa se preocupar com mensalidades. Isso o torna uma ótima opção para confeiteiros (as) que desejam aprender novos sabores e expandir seu cardápio sem ter que se preocupar com valores mensais para isso."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Você tem as opções de pagamento via cartões de crédito ou PIX."
  },
  {
    question: "Ainda não recebi o material. O que fazer?",
    answer: "Nós damos um prazo de até 24 horas para receber seu material, caso esse prazo já tenha passado indicamos a verificar as caixas de SPAM/lixo/outros de seu e-mail. Caso ainda não encontre seu material, envie um e-mail para o nosso suporte com o comprovante de compra."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        PERGUNTAS FREQUENTES
      </h2>
      
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md overflow-hidden border border-pink-100"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="flex justify-between items-center w-full p-5 text-left font-semibold text-gray-800 hover:bg-pink-50 transition-colors duration-200"
            >
              <span>{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="text-pink-600" />
              ) : (
                <ChevronDown className="text-pink-600" />
              )}
            </button>
            
            {openIndex === index && (
              <div className="p-5 bg-pink-50 border-t border-pink-100">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;