'use client';

import { useState, useEffect } from 'react';

interface CounterProps {
  target: number;
  duration?: number; // in milliseconds
  className?: string;
  suffix?: string;
}

export default function Counter({ target, duration = 2000, className = '', suffix = '+' }: CounterProps) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += step;
      if (current < target) {
        setCount(Math.floor(current));
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };
    
    updateCounter();
    
    return () => {
      // Cleanup if needed
    };
  }, [target, duration]);

  return (
    <div className={`text-2xl font-bold text-primary mb-1 ${className}`}>
      {count}{suffix}
    </div>
  );
}