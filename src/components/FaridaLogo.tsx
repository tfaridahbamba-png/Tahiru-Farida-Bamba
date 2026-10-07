import React from 'react';

interface FaridaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const FaridaLogo: React.FC<FaridaLogoProps> = ({ className = '', size = 'md' }) => {
  // Dimension presets matching the exact proportions in FARIDA.png
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-10 w-auto',
    lg: 'h-14 w-auto',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 240 130"
        className={`${sizeClasses[size]} transition-transform duration-150 hover:scale-[1.02]`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Farida Blog Logo"
      >
        {/* Outer Top Box - White background with solid black border */}
        <rect
          x="4"
          y="4"
          width="232"
          height="60"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="8"
        />
        {/* Top Text: FARIDA */}
        <text
          x="120"
          y="48"
          fill="#000000"
          fontFamily="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif"
          fontSize="40"
          fontWeight="900"
          letterSpacing="4"
          textAnchor="middle"
        >
          FARIDA
        </text>

        {/* Outer Bottom Box - Solid black fill */}
        <rect
          x="4"
          y="64"
          width="232"
          height="62"
          fill="#000000"
          stroke="#000000"
          strokeWidth="8"
        />
        {/* Bottom Text: BLoG */}
        <text
          x="120"
          y="108"
          fill="#FFFFFF"
          fontFamily="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif"
          fontSize="42"
          fontWeight="800"
          letterSpacing="12"
          textAnchor="middle"
        >
          BLoG
        </text>
      </svg>
    </div>
  );
};
