import React from 'react';
import { Shield } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div 
        className="relative bg-green-50 bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg p-6 border-2 border-green-500"
        style={{ backdropFilter: 'blur(8px)' }}
      >
        <div className="flex flex-col items-center">
          <Shield className="w-16 h-16 text-green-600 mb-4" />
          <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">Garantia de Satisfação</h3>
          <p className="text-green-700 text-center">
            Confiamos tanto na qualidade e eficácia de nossas receitas que oferecemos garantia total.
            Se por qualquer motivo você não ficar satisfeito com o material, basta entrar em contato
            com nosso suporte e solicitar o reembolso integral dentro do prazo de 7 dias após a compra.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Guarantee;