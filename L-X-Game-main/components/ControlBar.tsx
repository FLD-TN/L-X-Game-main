import React from 'react';
import { Volume2, VolumeX, RotateCcw, Shuffle } from 'lucide-react';

interface ControlBarProps {
  muted: boolean;
  volume: number;
  disabled?: boolean; // Thêm prop này
  onToggleMute: () => void;
  onVolumeChange: (vol: number) => void;
  onReset: () => void;
  onRandom: () => void;
}

export const ControlBar: React.FC<ControlBarProps> = ({ 
  muted, 
  volume,
  disabled = false,
  onToggleMute, 
  onVolumeChange, 
  onReset, 
  onRandom 
}) => {
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    onVolumeChange(newVolume);
  };

  // Class chung cho các nút khi bị disabled
  const buttonClass = (baseClass: string) => 
    `${baseClass} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto w-max max-w-[90vw]">
      <div className="bg-off-white/80 backdrop-blur-md border border-charcoal/20 rounded-full px-3 py-2 md:px-4 flex items-center gap-2 md:gap-4 shadow-xl">
        <button 
          onClick={onToggleMute}
          className={`p-2 rounded-full transition-colors ${
            !muted ? 'bg-tet-gold text-tet-red' : 'hover:bg-charcoal/5 text-charcoal'
          }`}
        >
          {!muted ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>

        <div className="hidden md:flex items-center gap-2">
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 h-1 bg-charcoal/20 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #DC143C 0%, #DC143C ${volume * 100}%, rgba(31,31,31,0.2) ${volume * 100}%, rgba(31,31,31,0.2) 100%)`
            }}
          />
        </div>

        <div className="w-px h-6 bg-charcoal/20"></div>
        
        <button 
          onClick={disabled ? undefined : onReset}
          disabled={disabled}
          className={buttonClass("p-2 hover:bg-charcoal/5 rounded-full transition-colors text-charcoal")}
          title="Reset"
        >
          <RotateCcw size={20} />
        </button>

        <button 
          onClick={disabled ? undefined : onRandom}
          disabled={disabled}
          className={buttonClass("h-9 px-3 border-2 border-charcoal rounded-md font-mono text-xs font-bold uppercase hover:bg-charcoal hover:text-off-white transition-colors flex items-center gap-2")}
        >
          <Shuffle size={14} />
          <span className="hidden md:inline">Random</span>
        </button>
      </div>
    </div>
  );
};