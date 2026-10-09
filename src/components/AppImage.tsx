import React, { useState, useEffect } from 'react';
import { resolveImageUrl } from '../utils/images';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

interface AppImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src?: string | null;
  alt: string;
  fallbackLabel?: string;
  className?: string;
  containerClassName?: string;
}

export const AppImage: React.FC<AppImageProps> = ({
  src,
  alt,
  fallbackLabel,
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const resolvedSrc = resolveImageUrl(src);

  // Reset error state if src changes
  useEffect(() => {
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  if (hasError || !resolvedSrc) {
    return (
      <div
        className={`relative overflow-hidden flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white shadow-inner ${containerClassName}`}
      >
        <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl mb-2 border border-white/30 shadow-md">
          <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
        </div>
        <p className="text-xs font-bold leading-tight max-w-[200px] line-clamp-2 drop-shadow-sm">
          {fallbackLabel || alt || 'Featured Asset'}
        </p>
        <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-xs text-indigo-100 border border-white/20">
          Visual Media
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-indigo-200 to-pink-200 animate-pulse" />
      )}
      <img
        {...props}
        src={resolvedSrc}
        alt={alt}
        loading={props.loading || 'lazy'}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};
