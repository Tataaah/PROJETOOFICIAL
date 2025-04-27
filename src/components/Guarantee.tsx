import React from 'react';
import { Shield } from 'lucide-react';

const Guarantee = () => {
  return (
    <div className="py-12 max-w-4xl mx-auto">
      <div className="bg-green-50 backdrop-blur-sm rounded-lg border-2 border-green-500 p-8 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-green-100 rounded-full transform translate-x-20 -translate-y-20 opacity-50"></div>
        
        <div className="flex items-center mb-6">
          <Shield className="text-green-600 mr-4" size={48} />
          <h2 className="text-2xl md:text-3xl font-bold text-green-800">
            GARANTIA DE SATISFAÇÃO
          </h2>
        </div>
        
        <p className="text-green-800 text-lg mb-4 relative z-10">
          Tenha a certeza de que está fazendo um investimento seguro. Se você não ficar satisfeito com o material por qualquer motivo, você tem 7 dias para solicitar seu reembolso.
        </p>
        
        <p className="text-green-800 text-lg relative z-10">
          Nos comprometemos 100% com a qualidade do nosso produto e queremos que você tenha total confiança na sua compra.
        </p>
      </div>
    </div>
  );
};

export default Guarantee;