import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const totalSeconds = prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds - 1;
        
        if (totalSeconds <= 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        return { hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number): string => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <p className="text-sm font-semibold text-gray-700 mb-2 text-center">
        A OFERTA ACABA EM:
      </p>
      <div className="flex items-center bg-white bg-opacity-95 p-3 rounded-full shadow-lg border border-pink-300">
        <Clock className="text-pink-600 mr-2" size={20} />
        <div className="text-lg font-mono font-bold">
          <span className="text-pink-700">{formatTime(timeLeft.hours)}</span>
          <span className="text-gray-500">:</span>
          <span className="text-pink-700">{formatTime(timeLeft.minutes)}</span>
          <span className="text-gray-500">:</span>
          <span className="text-pink-700">{formatTime(timeLeft.seconds)}</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;