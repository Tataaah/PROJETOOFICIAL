import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';

const SalesNotification: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState({
    name: '',
    location: '',
    product: ''
  });

  const firstNames = [
    'Ana', 'Maria', 'Sofia', 'Juliana', 'Carolina', 'Fernanda', 'Paula', 
    'Camila', 'Beatriz', 'Luiza', 'Mariana', 'Larissa', 'Amanda', 'Bruna'
  ];

  const locations = [
    'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Porto Alegre', 
    'Salvador', 'Recife', 'Fortaleza', 'Brasília', 'Goiânia', 'Florianópolis'
  ];

  const products = [
    'Pacote Básico', 'Pacote Premium', 'Receitas de Recheios'
  ];

  const generateRandomNotification = () => {
    const randomName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    const randomProduct = products[Math.floor(Math.random() * products.length)];

    setCurrentNotification({
      name: randomName,
      location: randomLocation,
      product: randomProduct
    });
  };

  useEffect(() => {
    // Initial delay before showing the first notification
    const initialTimeout = setTimeout(() => {
      showNotification();
    }, 5000);

    return () => clearTimeout(initialTimeout);
  }, []);

  const showNotification = () => {
    generateRandomNotification();
    setVisible(true);

    // Hide notification after 4 seconds
    setTimeout(() => {
      setVisible(false);

      // Show next notification after random delay (between 10-30 seconds)
      const nextNotificationDelay = Math.floor(Math.random() * 20000) + 10000;
      setTimeout(showNotification, nextNotificationDelay);
    }, 4000);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 right-4 max-w-[200px] z-50 animate-slide-in">
      <div className="bg-white rounded-lg shadow-lg p-2 border-l-4 border-green-500 flex items-start">
        <div className="bg-green-100 rounded-full p-1 mr-2">
          <ShoppingCart className="w-3 h-3 text-green-600" />
        </div>
        <div>
          <p className="text-xs font-medium text-gray-900">
            {currentNotification.name} de {currentNotification.location}
          </p>
          <p className="text-xs text-gray-600">
            acabou de comprar {currentNotification.product}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalesNotification;