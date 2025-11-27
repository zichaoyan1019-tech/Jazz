import React, { useEffect, useRef, useState } from 'react';
import { Slide } from '../types';

interface SliderProps {
  slides: Slide[];
  interval?: number;
  heightClass?: string;
  imageFit?: 'cover' | 'contain';
  onImageClick?: (slide: Slide, index: number) => void;
  maxWidthClass?: string;
}

const Slider: React.FC<SliderProps> = ({
  slides,
  interval = 10000,
  heightClass = 'h-[360px]',
  imageFit = 'cover',
  onImageClick,
  maxWidthClass = 'max-w-4xl',
}) => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const fitClass = imageFit === 'contain' ? 'object-contain' : 'object-cover';

  const start = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, interval);
  };

  useEffect(() => {
    start();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length, interval]);

  const go = (nextIndex: number) => {
    const newIndex = (nextIndex + slides.length) % slides.length;
    setIndex(newIndex);
    start();
  };

  const currentSlide = slides[index];

  if (!slides.length) return null;

  return (
    <div className={`group relative ${maxWidthClass} mx-auto perspective-1000`}>
      {/* Tape Effect */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/40 rotate-1 shadow-sm backdrop-blur-sm z-20 pointer-events-none border-l border-r border-white/20"></div>

      {/* Main Frame */}
      <div
        className={`relative w-full overflow-hidden bg-[#fdf6e3] p-3 shadow-[8px_8px_0px_rgba(44,24,16,0.2)] border-2 border-jazz-dark transition-transform duration-500 ease-out hover:scale-[1.01] hover:rotate-1 ${heightClass}`}
      >
        <div className="relative h-full w-full overflow-hidden border border-jazz-dark/20 bg-stone-200">
           <img
            key={currentSlide.src}
            src={currentSlide.src}
            alt={currentSlide.alt}
            className={`${fitClass} h-full w-full cursor-pointer transition-all duration-700 animate-fade-in hover:scale-105`}
            onClick={() => onImageClick?.(currentSlide, index)}
            style={{ animation: 'fadeIn 0.8s ease-out' }}
          />
          
          {/* Vintage Vignette */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_50%,rgba(44,24,16,0.2)_100%)]"></div>
        </div>
      </div>

      {/* Controls - Styled Art Deco */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 pointer-events-none">
          <button
            type="button"
            className="pointer-events-auto group/btn flex h-12 w-12 items-center justify-center rounded-full bg-jazz-dark text-jazz-gold shadow-lg transition-transform hover:scale-110 active:scale-95"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              go(index - 1);
            }}
          >
            <span className="text-2xl pb-1">‹</span>
          </button>
          
          <button
            type="button"
            className="pointer-events-auto group/btn flex h-12 w-12 items-center justify-center rounded-full bg-jazz-dark text-jazz-gold shadow-lg transition-transform hover:scale-110 active:scale-95"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              go(index + 1);
            }}
          >
             <span className="text-2xl pb-1">›</span>
          </button>
      </div>

      {/* Caption styled like a museum label */}
      <div className="absolute -bottom-6 right-4 rotate-1 z-20">
        <div className="bg-white px-3 py-1 shadow-md border border-gray-300 text-[10px] font-sans uppercase tracking-widest text-jazz-dark/80 max-w-xs truncate">
          {currentSlide.alt}
        </div>
      </div>

      {/* Dots - Retro Style */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((slide, i) => (
          <button
            key={`dot-${i}`}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-none rotate-45 border border-jazz-dark transition-all ${
              i === index ? 'bg-jazz-dark scale-125' : 'bg-transparent hover:bg-jazz-dark/50'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              go(i);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;