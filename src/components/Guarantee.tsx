import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Guarantee = () => {
  return (
    <section className="py-16 px-4 bg-[#FFF4E6]">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-[#7D9774]/20 backdrop-blur-sm border-2 border-[#7D9774] rounded-lg p-6 md:p-8 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#7D9774]/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#7D9774]/10 rounded-full -ml-16 -mb-16"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 relative">
            <div className="md:w-1/4 flex justify-center">
              <div className="bg-[#7D9774] rounded-full p-4 shadow-lg">
                <ShieldCheck size={64} className="text-white" />
              </div>
            </div>
            
            <div className="md:w-3/4">
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-[#5B3924] mb-4">
                SATISFAÇÃO 100% GARANTIDA
              </h3>
              
              <p className="text-[#5B3924] mb-4">
                Estamos tão confiantes na qualidade das nossas receitas que oferecemos uma garantia de satisfação total. Se você não ficar 100% satisfeito com o conteúdo, basta solicitar o reembolso em até 7 dias após a compra.
              </p>
              
              <p className="text-[#5B3924] font-medium">
                Sem perguntas, sem complicações. Seu investimento está protegido!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};