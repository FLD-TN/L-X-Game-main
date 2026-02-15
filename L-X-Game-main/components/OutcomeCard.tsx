import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CARDS_DB } from '../constants'; // Bỏ import ENVELOPES
import { X, ChevronDown } from 'lucide-react';
import { Language } from '../types';

interface OutcomeCardProps {
  onClose: () => void;
  cardId: number;
  language: Language;
  moneyAmount: number; // Thêm prop này để nhận tiền động
}

export const OutcomeCard: React.FC<OutcomeCardProps> = ({ onClose, cardId, language, moneyAmount }) => {
  const [copied, setCopied] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'spinning' | 'card'>('spinning');
  const scrollRef = useRef<HTMLDivElement>(null);

  // Retrieve card data based on ID
  const cardData = CARDS_DB.find(c => c.id === cardId) || CARDS_DB[0];
  const content = cardData[language];
  const video = cardData.youtube;

  // Sử dụng moneyAmount được truyền vào thay vì tìm trong constants
  const displayMoney = moneyAmount > 0 ? `${(moneyAmount / 1000).toFixed(0)}K VND` : '';

  const displayImage = cardData.image;

  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        const { scrollHeight, clientHeight, scrollTop } = scrollRef.current;
        setShowScrollIndicator(scrollHeight > clientHeight && scrollTop < 40);
      }
    };

    const timeoutId = setTimeout(checkScroll, 100); 
    window.addEventListener('resize', checkScroll);
    
    // Start animation sequence
    const spinTimer = setTimeout(() => {
      setAnimationPhase('card');
    }, 2000); // 2 giây xoay envelope
    
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(spinTimer);
      window.removeEventListener('resize', checkScroll);
    };
  }, [cardId, language]); 

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop } = scrollRef.current;
      if (scrollTop > 40 && showScrollIndicator) {
        setShowScrollIndicator(false);
      } else if (scrollTop <= 40 && !showScrollIndicator) {
         const { scrollHeight, clientHeight } = scrollRef.current;
         if (scrollHeight > clientHeight) setShowScrollIndicator(true);
      }
    }
  };

  const handleShare = async () => {
    const url = `https://www.youtube.com/watch?v=${video.video_id}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: content.benediction_text,
          text: content.context_quote,
          url: url
        });
      } catch (err) { }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) { }
    }
  };

  // If still spinning, show envelope animation instead of card
  if (animationPhase === 'spinning') {
    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80, damping: 12 }}
        >
          {/* Spinning Envelope */}
          <motion.div
            animate={{ rotateY: 360, rotateZ: [0, -5, 0] }}
            transition={{ 
              rotateY: { duration: 1.8, repeat: Infinity, ease: 'linear' },
              rotateZ: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="relative"
            style={{ perspective: '1200px' }}
          >
            <div className="w-32 h-40 bg-gradient-to-br from-tet-red via-red-700 to-red-900 rounded-lg shadow-2xl border-4 border-tet-gold flex flex-col items-center justify-center transform"
              style={{
                boxShadow: '0 20px 60px rgba(220, 20, 60, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                transformStyle: 'preserve-3d'
              }}>
              {/* Envelope flap */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-tet-gold to-yellow-400 rounded-t-lg border-b-2 border-yellow-300 flex items-center justify-center transform" 
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%, 0 100%)' }}>
              </div>
              
              {/* Main envelope body */}
              <div className="flex flex-col items-center justify-center gap-2 relative z-10">
                <div className="text-white text-3xl font-black drop-shadow-lg">LÌ XÌ</div>
                <div className="w-16 h-1 bg-tet-gold shadow-lg"></div>
                <div className="text-yellow-200 text-sm font-bold">Tết Bính Ngọ</div>
              </div>
            </div>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-center"
          >
            <p className="text-tet-gold text-xl font-bold">
              {language === 'vi' ? '✨ Đang mở lì xì... ✨' : '✨ Opening envelope... ✨'}
            </p>
            <p className="text-yellow-300 text-sm mt-2">
              {language === 'vi' ? 'Chúc bạn may mắn!' : 'Good luck!'}
            </p>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] md:w-[850px] max-w-[95vw] bg-off-white brutalist-border brutalist-shadow md:aspect-[1.6/1] flex flex-col md:flex-row overflow-hidden max-h-[90vh]"
      initial={{ scale: 0.8, opacity: 0, rotate: -2, x: "-50%", y: "-50%" }}
      animate={{ scale: 1, opacity: 1, rotate: 0, x: "-50%", y: "-50%" }}
      exit={{ scale: 0.8, opacity: 0, x: "-50%", y: "-50%" }}
      transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
    >
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(31,31,31,0.05);
          border-left: 1px solid rgba(31,31,31,0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1F1F1F;
          border: 2px solid #F5F2EB;
          border-right: 0;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #C84639;
        }
      `}</style>

      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-2 right-2 md:top-4 md:right-4 z-50 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-off-white border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-off-white transition-colors brutalist-shadow-sm active:translate-y-0.5 active:shadow-none"
        aria-label="Close"
      >
        <X size={20} strokeWidth={2.5} />
      </button>

      {/* Left Column: Image */}
      <div className="hidden md:flex w-full md:w-5/12 bg-tet-green-light border-b-2 md:border-b-0 md:border-r-2 border-charcoal p-4 flex-col relative justify-center items-center">
        <div className="absolute top-4 left-4 flex justify-between items-center font-mono text-xs text-charcoal/70 z-20">
          <span>CARD #{cardId.toString().padStart(2, '0')}</span>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-6 right-6 w-16 h-16 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#1F1F1F 2px, transparent 2px)', backgroundSize: '6px 6px' }} />
        <div className="absolute bottom-6 left-6 w-24 h-24 opacity-5 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(45deg, #1F1F1F 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
        <div className="absolute inset-6 border border-charcoal/20 pointer-events-none"></div>

        {/* Image Container: Stamp Poster Style */}
        <div className="relative w-full h-[80%] bg-off-white border-4 border-charcoal p-3 -rotate-1 shadow-[5px_5px_0px_0px_rgba(31,31,31,1)] flex-shrink-0">
           {/* Inner Frame */}
           <div className="w-full h-full overflow-hidden bg-off-white relative group border-2 border-charcoal">
             <img src={displayImage} alt="Outcome" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-noise opacity-[0.15] mix-blend-multiply pointer-events-none z-10" />

             {/* Text Overlay inside image */}
             <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-charcoal/95 via-charcoal/70 to-transparent p-5 pt-16 flex flex-col gap-1.5 z-20">
                <div className="font-mono text-[9px] uppercase tracking-widest text-off-white/80">
                    {language === 'vi' ? 'Lì xì (Tiền):' : 'Lucky Money (VND):'}
                </div>
                {displayMoney && (
                   <div className="font-sans font-black text-4xl md:text-5xl text-tet-gold leading-[0.9] tracking-tighter drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]">
                      {displayMoney}
                   </div>
                )}
             </div>
           </div>
           
           <div className="absolute top-2 right-2 w-20 h-20 rounded-full bg-tet-gold border-2 border-tet-red flex items-center justify-center rotate-12 shadow-sm z-30 p-1">
              <span className="text-[9px] font-bold text-tet-red text-center leading-tight uppercase transform -rotate-12">
                Tết Vui
              </span>
           </div>

           <div className="absolute -bottom-3 -left-2 bg-tet-red text-off-white text-xs font-bold px-2 py-1 border border-charcoal rotate-[-2deg] z-30 shadow-sm">
             Lì Xì
           </div>
        </div>
      </div>

      {/* Right Column: Text & Context */}
      <div className="w-full md:w-7/12 flex flex-col relative bg-off-white h-full overflow-hidden">
        <div className="flex-shrink-0 px-6 pt-8 pb-2 md:px-8 md:pt-8 bg-off-white z-10">
            <h2 className="font-sans font-black text-2xl md:text-3xl uppercase leading-none text-charcoal">
              {content.benediction_title}
            </h2>
        </div>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex-grow overflow-y-auto custom-scrollbar relative"
        >
           <div className="px-6 md:px-8 py-6 space-y-5 pb-8">
                <div>
                  <p className="font-serif italic text-3xl md:text-4xl text-tet-red leading-tight font-bold">
                    "{content.benediction_text}"
                  </p>
                  <div className="w-16 h-2 bg-tet-gold mt-4"></div>
                </div>
             </div>
        </div>

        <AnimatePresence>
          {showScrollIndicator && (
             <motion.div 
               className="absolute bottom-6 right-5 pointer-events-none z-20"
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: 10 }}
               transition={{ duration: 0.3 }}
             >
                <div className="flex flex-col items-center gap-1">
                   <div className="bg-tet-red text-off-white w-8 h-8 rounded-full border-2 border-charcoal shadow-md flex items-center justify-center animate-bounce">
                      <ChevronDown size={20} strokeWidth={3} />
                   </div>
                </div>
             </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};