import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeData } from '../types';

interface EnvelopeProps {
  data: EnvelopeData;
  onClick: (id: number) => void;
  disabled: boolean;
  isOpened: boolean;
}

export const Envelope: React.FC<EnvelopeProps> = ({ data, onClick, disabled, isOpened }) => {
  const isInteractive = !disabled && !isOpened;

  return (
    <motion.div
      className={`relative w-full h-full flex items-center justify-center group ${isInteractive ? 'cursor-pointer' : 'cursor-default'}`}
      initial={{ rotate: data.rotation, y: data.yOffset, x: data.xOffset }}
      animate={isOpened ? {
        y: data.yOffset, // Stop floating
        rotate: data.rotation, // Reset rotation variance
        scale: 0.95 // Slightly recede
      } : {
        y: [data.yOffset, data.yOffset - 10, data.yOffset],
        rotate: [data.rotation, data.rotation + 1, data.rotation - 1, data.rotation],
      }}
      transition={isOpened ? { duration: 0.5, ease: "easeOut" } : {
        duration: 4 + (data.id % 3), // Varied float speed
        repeat: Infinity,
        ease: "easeInOut",
        delay: data.delay,
      }}
      whileHover={isInteractive ? {
        scale: 1.05,
        rotate: 0,
        transition: { duration: 0.2 }
      } : {}}
      onClick={() => isInteractive && onClick(data.id)}
    >
      {/* Wrapper for visual effects (opacity, blur, etc) to separate from layout motion */}
      <div className={`relative w-full h-full transition-all duration-700 ease-out ${
        isOpened ? 'opacity-50 grayscale-[0.5] blur-[1px]' : 'opacity-100'
      }`}>
        
        {/* Shadow Element */}
        <div className={`absolute inset-0 bg-charcoal rounded-sm transition-transform ${
            isInteractive ? 'translate-y-1 translate-x-1 group-hover:translate-y-2 group-hover:translate-x-2' : 'translate-y-1 translate-x-1'
        }`} />

        {/* Main Envelope Body */}
        <div className={`relative w-full h-full border-2 border-charcoal rounded-sm overflow-hidden flex flex-col items-center justify-center transition-colors duration-500 ${isOpened ? 'bg-tet-red-dark' : 'bg-tet-red'}`}>
          {/* Paper Texture Overlay */}
          <div className="absolute inset-0 opacity-20 bg-noise mix-blend-multiply pointer-events-none" />
          
          {/* Decorative Top Flap Line */}
          <div className="absolute top-0 w-full h-1/3 border-b-2 border-charcoal/30" 
               style={{ borderRadius: '0 0 50% 50%' }} />

          {/* Center Folk Motif - Show Money Amount */}
          <div className={`w-12 h-12 rounded-full border-2 border-charcoal flex items-center justify-center relative z-10 shadow-sm transition-colors duration-500 ${isOpened ? 'bg-charcoal/10 border-charcoal/40' : 'bg-tet-gold'}`}>
             <div className="w-full h-full flex items-center justify-center">
                {isOpened && data.money ? (
                   <span className="font-mono font-bold text-xs text-charcoal text-center leading-tight">
                      {(data.money / 1000).toFixed(0)}K
                   </span>
                ) : (
                   <span className="font-mono font-bold text-sm text-charcoal">{data.id}</span>
                )}
             </div>
          </div>
          
          {/* Decorative Patterns */}
          <div className="absolute bottom-2 left-2 w-4 h-4 border border-charcoal/20 rotate-45" />
          <div className="absolute top-2 right-2 w-4 h-4 border border-charcoal/20 rotate-45" />

          {/* Opened Stamp/Mark */}
          {isOpened && (
             <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <div className="border-2 border-tet-gold/60 text-tet-gold font-mono font-black text-[10px] px-2 py-1 -rotate-12 uppercase tracking-[0.2em] bg-charcoal/20 backdrop-blur-sm">
                   ÃM LỘC
                </div>
             </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
