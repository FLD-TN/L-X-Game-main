import React from 'react';
import { motion } from 'framer-motion';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-tet-red-dark via-tet-red to-tet-gold-dark">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      
      {/* Decorative Circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tet-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-tet-red-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 text-center p-6 max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-5xl md:text-7xl text-tet-gold mb-2 font-bold drop-shadow-lg">
            LÌ XÌ
          </h1>
          <h2 className="font-sans text-2xl md:text-3xl text-off-white tracking-widest uppercase mb-8 font-light">
            Tết Bính Ngọ 2026
          </h2>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <button
            onClick={onStart}
            className="group relative px-8 py-4 bg-tet-gold text-tet-red-dark font-bold text-xl rounded-full shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:shadow-[0_0_50px_rgba(255,215,0,0.8)] transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              🧧 KHAI XUÂN NGAY
            </span>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>
        </motion.div>
      </div>
    </div>
  );
};