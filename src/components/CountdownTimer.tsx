import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(prevTime => {
        const totalSeconds = prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds - 1;
        
        if (totalSeconds <= 0) {
          // Reset to 24 hours when timer reaches zero
          return { hours: 24, minutes: 0, seconds: 0 };
        }
        
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        return { hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const formatTime = (value: number) => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className="bg-white rounded-lg shadow-lg p-3 border-2 border-pink-400">
        <div className="text-sm font-semibold text-center mb-1 text-pink-800">A OFERTA ACABA EM:</div>
        <div className="flex items-center justify-center gap-1">
          <Clock className="w-4 h-4 text-pink-600 mr-1" />
          <span className="text-lg font-bold text-pink-800">
            {formatTime(timeRemaining.hours)}:{formatTime(timeRemaining.minutes)}:{formatTime(timeRemaining.seconds)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;