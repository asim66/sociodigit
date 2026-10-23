// @ts-nocheck
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface LogoProps {
  className?: string;
  showIcon?: boolean;
  theme?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "", showIcon = true, theme = 'dark' }) => {
  const isLight = theme === 'light';
  const webpSrc = isLight ? '/logo-light.webp' : '/logo-dark.webp';
  const pngSrc = isLight ? '/logo-light.png' : '/logo-dark.png';

  return (
    <div className={`flex items-center group ${className}`}>
      <div className="transition-transform group-hover:scale-105">
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <img 
            src={pngSrc} 
            alt="Sociodigit" 
            width={160}
            height={42}
            decoding="async"
            className="h-12 lg:h-10 w-auto object-contain drop-shadow-[0_0_15px_rgba(232,66,26,0.3)] hover:drop-shadow-[0_0_25px_rgba(232,66,26,0.5)] transition-all duration-300"
          />
        </picture>
      </div>
    </div>
  );
};

export default Logo;
