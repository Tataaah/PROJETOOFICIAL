import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-[#5B3924]/20 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left text-[#5B3924] font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-serif">{question}</span>
        {isOpen ? (
          <ChevronUp className="flex-shrink-0 ml-2" />
        ) : (
          <ChevronDown className="flex-shrink-0 ml-2" />
        )}
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-4 text-[#5B3924]/80">{answer}</p>
      </div>
    </div>
  );
};

export const FAQ = () => {
  const faqs = [
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
      question: "O PACOTE PREMIUM realmente vale a pena?",
      answer: "SIM! Com o pacote premium você terá acesso às melhores receitas dos confeiteiros mais renomados, incluindo receitas secretas e diversos bônus que não foram adicionados no Pacote Básico."
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

  return (
    <section className="py-16 px-4 bg-[#FFF4E6]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12 text-[#4C1C24]">
          Perguntas Frequentes
        </h2>
        
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};