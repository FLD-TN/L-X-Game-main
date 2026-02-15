
import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Language } from '../types';

interface HeaderProps {
  openedCount: number;
  total: number;
  language: Language;
}

export const Header: React.FC<HeaderProps> = ({ openedCount, total, language }) => {
  const percentage = Math.round((openedCount / total) * 100);
  const [milestoneMsg, setMilestoneMsg] = useState<string | null>(null);
  const prevPercentageRef = useRef(percentage);

  // Define milestones and handle message triggering
  useEffect(() => {
    const milestones = [30, 50, 70, 100];
    const prev = prevPercentageRef.current;
    
    // Check if we crossed a milestone in this update (increasing)
    const crossed = milestones.find(m => percentage >= m && prev < m);

    if (crossed) {
      // Play Milestone Sound
      const milestoneSound = new Audio("/sounds/milestone.mp3");
      milestoneSound.volume = 0.5;
      milestoneSound.play().catch(() => {});

      let msg = '';
      if (language === 'vi') {
        if (crossed === 30) msg = "Bắt đầu nhận ra rồi đấy.";
        if (crossed === 50) msg = "Nửa tỉnh nửa mê.";
        if (crossed === 70) msg = "Ngộ ra kha khá.";
        if (crossed === 100) msg = "Giác ngộ hoàn toàn.";
      } else {
        if (crossed === 30) msg = "You’re starting to see.";
        if (crossed === 50) msg = "Half awake.";
        if (crossed === 70) msg = "Clarity emerging.";
        if (crossed === 100) msg = "Full awareness unlocked.";
      }
      setMilestoneMsg(msg);
      
      // Clear message after 2.5 seconds
      const timer = setTimeout(() => setMilestoneMsg(null), 2500);
      return () => clearTimeout(timer);
    }

    prevPercentageRef.current = percentage;
  }, [percentage, language]);

  return (
    <header className="fixed inset-0 z-40 pointer-events-none">
      {/* Top Left: Headline */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 pointer-events-auto">
        <div className="bg-tet-red text-off-white px-3 py-1 inline-block transform -rotate-1 brutalist-shadow-sm mb-1">
          <h1 className="font-sans font-black uppercase text-lg md:text-xl tracking-tighter">
            MIAMI TẾT BÍNH NGỌ 2026
          </h1>
        </div>
        <div className="block">
          <span className="bg-tet-gold border-2 border-tet-red px-2 py-0.5 text-xs font-serif italic text-tet-red inline-block transform rotate-1">
           Rút Lì Xì, Đón May Mắn
          </span>
        </div>
      </div>

      {/* Top Right: Circular Logo */}
      <div className="absolute top-4 right-4 md:top-10 md:right-8 pointer-events-auto">
        <div className="w-16 h-16 rounded-full border-3 border-charcoal bg-tet-gold p-1 shadow-lg overflow-hidden hover:scale-110 transition-transform">
          <img 
            src="/imgs/sticker.png" 
            alt="Logo" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </header>
  );
};
