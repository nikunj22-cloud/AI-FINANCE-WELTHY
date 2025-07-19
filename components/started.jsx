import { useState } from 'react';

export default function PremiumButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center space-x-4 p-8">
      <a href="/dashboard" className="inline-block">
        <button
          className={`
            relative px-8 py-3 text-lg font-semibold text-white
            bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700
            rounded-lg shadow-xl
            transform transition-all duration-300 ease-out
            hover:scale-105 hover:shadow-2xl
            hover:from-purple-500 hover:via-blue-500 hover:to-indigo-600
            active:scale-95
            overflow-hidden
            ${isHovered ? 'animate-pulse' : ''}
          `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated gradient overlay */}
          <div className={`
            absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
            transform -skew-x-12 transition-transform duration-1000
            ${isHovered ? 'translate-x-full' : '-translate-x-full'}
          `} />
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500 opacity-0 hover:opacity-20 transition-opacity duration-300 blur-xl" />
          
          {/* Button content */}
          <span className="relative z-10 flex items-center space-x-2">
            <span>Get Started</span>
            <svg className="w-5 h-5 transition-transform duration-300 hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          
          {/* Border glow */}
          <div className="absolute inset-0 rounded-lg border border-white/20" />
        </button>
      </a>
    </div>
  );
}