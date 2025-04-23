import React, { useEffect, useState } from 'react';

export const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState('');
  
  useEffect(() => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      day: '2-digit', 
      month: 'long', 
      year: 'numeric' 
    };
    const formattedDate = now.toLocaleDateString('pt-BR', options);
    setCurrentDate(formattedDate);
  }, []);
  
  return (
    <div className="text-sm md:text-base bg-white/10 backdrop-blur-sm py-1 px-3 rounded inline-block">
      <span className="font-medium">ATUALIZADO EM: </span>
      <span className="font-bold">{currentDate}</span>
    </div>
  );
};