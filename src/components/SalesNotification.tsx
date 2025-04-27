import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

// Random names for notifications
const names = [
  "Maria", "João", "Ana", "Carlos", "Patricia", 
  "Luciana", "Roberto", "Fernanda", "Lucas", "Camila",
  "Pedro", "Juliana", "Ricardo", "Mariana", "Paulo",
  "Beatriz", "Eduardo", "Clara", "Gabriel", "Larissa"
];

// Cities
const cities = [
  "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Salvador", 
  "Fortaleza", "Brasília", "Curitiba", "Recife", "Porto Alegre",
  "Manaus", "Goiânia", "Belém", "Florianópolis", "Campinas"
];

// Products
const products = [
  "Pacote Básico de Receitas",
  "Pacote Premium de Receitas",
  "Receitas Completas"
];

const SalesNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [notification, setNotification] = useState({
    name: '',
    city: '',
    product: '',
    time: ''
  });

  const generateRandomNotification = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    const randomMinutes = Math.floor(Math.random() * 30) + 1;
    
    return {
      name: randomName,
      city: randomCity,
      product: randomProduct,
      time: `${randomMinutes} ${randomMinutes === 1 ? 'minuto' : 'minutos'}`
    };
  };

  useEffect(() => {
    // Initial delay before first notification
    const initialDelay = setTimeout(() => {
      showNotification();
    }, 5000);
    
    return () => clearTimeout(initialDelay);
  }, []);

  const showNotification = () => {
    setNotification(generateRandomNotification());
    setIsVisible(true);
    
    // Hide after 4 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      
      // Schedule next notification to appear in 10-30 seconds
      const nextNotificationDelay = Math.floor(Math.random() * 20000) + 10000;
      setTimeout(showNotification, nextNotificationDelay);
    }, 4000);
    
    return () => clearTimeout(hideTimer);
  };

  return (
    <div 
      className={`fixed bottom-20 right-4 z-50 max-w-xs bg-white bg-opacity-95 shadow-lg rounded-lg border-l-4 border-green-500 overflow-hidden transition-transform duration-500 transform ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex p-4">
        <div className="flex-shrink-0 bg-green-100 rounded-full p-2 mr-3">
          <ShoppingBag className="h-6 w-6 text-green-600" />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800">
            {notification.name} de {notification.city}
          </p>
          <p className="text-sm text-gray-600">
            Comprou {notification.product}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Há {notification.time} atrás
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalesNotification;