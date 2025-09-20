'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState(0); // 0: particles, 1: initials, 2: fade out

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase(1), 1000); // Show initials after 1s
    const timer2 = setTimeout(() => setPhase(2), 3500); // Start fade out after 3.5s (was 2.5s)
    const timer3 = setTimeout(() => onComplete(), 4200); // Complete after 4.2s (was 3.2s)

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-background z-50 flex items-center justify-center transition-opacity duration-700 ${
        phase === 2 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className='absolute inset-0 overflow-hidden'>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-primary rounded-full transition-all duration-2000 ${
              phase >= 1 ? 'animate-converge' : 'animate-float'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 1}s`,
            }}
          />
        ))}
      </div>

      <div className='text-center z-10'>
        {/* Animated initials */}
        <div className='relative'>
          <div
            className={`transition-all duration-1000 ${
              phase >= 1 ? 'scale-100 opacity-100' : 'scale-150 opacity-0'
            }`}
          >
            <div className='relative'>
              {/* Glowing background effect */}
              <div className='absolute inset-0 blur-xl bg-primary/20 rounded-full animate-pulse'></div>

              {/* Main initials */}
              <h1 className='text-8xl font-bold gradient-text relative z-10 animate-glow'>
                AP
              </h1>

              {/* Subtle subtitle that appears after initials */}
              <div
                className={`mt-4 transition-all duration-1000 delay-500 ${
                  phase >= 1
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <p className='text-lg text-muted-foreground font-light tracking-wider'>
                  Welcome to my portfolio
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-8 transition-all duration-1000 delay-1000 ${
            phase >= 1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className='flex justify-center'>
            <div className='w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
