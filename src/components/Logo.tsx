import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface LogoProps {
  className?: string;
  showIcon?: boolean;
  theme?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "", showIcon = true, theme = 'dark' }) => {
  return (
    <div className={`flex items-center group ${className}`}>
      <div className="transition-transform group-hover:scale-105">
        <img 
          src="/logo-dark.png" 
          alt="Sociodigit" 
          className="h-12 lg:h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(232,66,26,0.3)] hover:drop-shadow-[0_0_25px_rgba(232,66,26,0.5)] transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default Logo;
