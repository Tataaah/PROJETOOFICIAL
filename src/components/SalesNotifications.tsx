import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

const names = [
  'Ana', 'João', 'Maria', 'Pedro', 'Júlia', 'Lucas', 'Beatriz', 'Carlos',
  'Fernanda', 'Ricardo', 'Amanda', 'Marcelo', 'Patrícia', 'Roberto', 'Camila'
];

const locations = [
  'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Fortaleza',
  'Recife', 'Porto Alegre', 'Curitiba', 'Manaus', 'Brasília', 'Florianópolis',
  'Goiânia', 'Vitória', 'Belém', 'Campinas'
];

const products = [
  'Pacote Básico', 'Pacote Premium'
];

export const SalesNotifications = () => {
  const [notification, setNotification] = useState<null | {
    name: string;
    location: string;
    product: string;
    time: number;
  }>(null);
  
  const [visible, setVisible] = useState(false);
  
  const generateNotification = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    const randomTime = Math.floor(Math.random() * 10) + 1;
    
    setNotification({
      name: randomName,
      location: randomLocation,
      product: randomProduct,
      time: randomTime
    });
    
    setVisible(true);
    
    setTimeout(() => {
      setVisible(false);
      setTimeout(generateNotification, Math.random() * 15000 + 5000);
    }, 5000);
  };
  
  useEffect(() => {
    // Start notifications after a delay
    const timer = setTimeout(() => {
      generateNotification();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!notification) return null;
  
  return (
    <div 
      className={`fixed bottom-4 left-4 max-w-xs bg-white rounded-lg shadow-lg p-4 transform transition-transform duration-500 z-50 ${
        visible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <div className="flex items-start">
        <div className="bg-[#7D9774] p-2 rounded-full mr-3">
          <ShoppingBag className="w-5 h-5 text-white" />
        </div>
        
        <div>
          <p className="text-sm font-medium text-[#5B3924]">
            <span className="font-bold">{notification.name}</span> de {notification.location}
          </p>
          <p className="text-xs text-[#5B3924]/70">
            Comprou o {notification.product} há {notification.time} {notification.time === 1 ? 'minuto' : 'minutos'}
          </p>
        </div>
      </div>
    </div>
  );
};