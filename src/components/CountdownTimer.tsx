import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export const CountdownTimer = () => {
  const [hours, setHours] = useState(24);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [hours, minutes, seconds]);
  
  return (
    <div className="flex items-center text-white">
      <Clock className="w-5 h-5 mr-2" />
      <span className="font-medium mr-2">A OFERTA ACABA EM:</span>
      <div className="bg-white/20 backdrop-blur-sm rounded px-2 py-1 font-mono font-bold">
        {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
    </div>
  );
};