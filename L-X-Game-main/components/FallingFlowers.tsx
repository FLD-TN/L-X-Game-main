import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface FallingFlower {
  id: number;
  type: 'hoadao' | 'hoamai';
  left: number;
  delay: number;
  duration: number;
  opacity: number;
  size: number;
}

export const FallingFlowers: React.FC = () => {
  // Generate random falling flowers
  const flowers = useMemo(() => {
    const items: FallingFlower[] = [];
    const totalFlowers = 40; // Tăng số lượng

    for (let i = 0; i < totalFlowers; i++) {
      items.push({
        id: i,
        type: Math.random() > 0.5 ? 'hoadao' : 'hoamai',
        left: Math.random() * 100, // 0-100%
        delay: Math.random() * 12, // 0-12s delay (rải rác hơn)
        duration: 18 + Math.random() * 15, // 18-33s duration (lâu hơn)
        opacity: 0.6 + Math.random() * 0.4, // 0.6-1.0
        size: 18 + Math.random() * 24, // 18-42px
      });
    }
    return items;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          className="absolute"
          style={{
            left: `${flower.left}%`,
            top: '-50px',
            width: `${flower.size}px`,
            height: `${flower.size}px`,
            opacity: flower.opacity,
          }}
          animate={{
            y: window.innerHeight + 100,
            x: Math.sin(flower.id) * 50, // Slight horizontal movement
            rotate: 360,
          }}
          transition={{
            duration: flower.duration,
            delay: flower.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <img
            src={
              flower.type === 'hoadao'
                ? '/imgs/icon_hoadao.png'
                : '/imgs/icon_hoamai.png'
            }
            alt={flower.type}
            className="w-full h-full object-contain"
            draggable={false}
          />
        </motion.div>
      ))}
    </div>
  );
};
