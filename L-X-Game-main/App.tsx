import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './components/Header';
import { ControlBar } from './components/ControlBar';
import { Envelope } from './components/Envelope';
import { OutcomeCard } from './components/OutcomeCard';
import { WelcomeScreen } from './components/WelcomeScreen';
import { FallingFlowers } from './components/FallingFlowers';
import { ENVELOPES, MONEY_DENOMINATIONS } from './constants';
import { Language, EnvelopeData } from './types';
import confetti from 'canvas-confetti';

// Hàm xáo trộn tiền theo số lượng cố định
const shuffleEnvelopes = (): EnvelopeData[] => {
  // Cấu hình số lượng các tờ tiền
  // Tổng cộng: 3 + 6 + 7 = 16 tờ
  const moneyDistribution = [
    { value: 100000, count: 3 },  // 3 tờ 100k
    { value: 50000, count: 6 },   // 6 tờ 50k
    { value: 20000, count: 7 },   // 7 tờ 20k
  ];

  let moneyPool: number[] = [];
  moneyDistribution.forEach(item => {
    for (let i = 0; i < item.count; i++) {
      moneyPool.push(item.value);
    }
  });

  // Xáo trộn bể tiền (Fisher-Yates Shuffle)
  for (let i = moneyPool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [moneyPool[i], moneyPool[j]] = [moneyPool[j], moneyPool[i]];
  }

  // Gán tiền đã xáo trộn vào danh sách bao lì xì gốc
  return ENVELOPES.map((env, index) => ({
    ...env,
    money: moneyPool[index]
  }));
};

const App: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [gameEnvelopes, setGameEnvelopes] = useState<EnvelopeData[]>([]); 
  const [openedIds, setOpenedIds] = useState<number[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  
  // STATE MỚI: isProcessing để khóa nút bấm khi đang có hiệu ứng
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [language, setLanguage] = useState<Language>('vi');
  
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setGameEnvelopes(shuffleEnvelopes());
  }, []);

  const handleStartGame = () => {
    setHasStarted(true);
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.play().catch(e => console.error("Audio error:", e));
    }
  };

  useEffect(() => {
    if (audioRef.current && hasStarted) {
      audioRef.current.volume = volume;
      if (muted) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [muted, volume, hasStarted]);

  const triggerConfetti = () => {
      const colors = ['#C84639', '#E6BC68', '#F5F2EB'];
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: colors,
        disableForReducedMotion: true,
        shapes: ['square', 'circle'],
        scalar: 1.2,
        zIndex: 60,
      });
  }

  const handleEnvelopeClick = (id: number) => {
    // Chặn click nếu đang xử lý hoặc thẻ đó đã mở
    if (isProcessing || openedIds.includes(id) || selectedId) return;

    const openSound = new Audio("/sounds/open.mp3");
    if (!muted) {
      openSound.volume = 0.6;
      openSound.play().catch(e => console.log(e));
    }

    triggerConfetti();
    setSelectedId(id);
    setOpenedIds(prev => [...prev, id]);
  };

  const handleRandom = () => {
    // LOGIC CHẶN SPAM:
    // 1. Nếu đang xử lý (isProcessing = true) -> Chặn
    // 2. Nếu đang có thẻ mở (selectedId != null) -> Chặn
    if (isProcessing || selectedId) return;

    const availableIds = gameEnvelopes
      .map(e => e.id)
      .filter(id => !openedIds.includes(id));

    if (availableIds.length > 0) {
      // BẮT ĐẦU KHÓA
      setIsProcessing(true);

      const randomId = availableIds[Math.floor(Math.random() * availableIds.length)];
      
      const openSound = new Audio("/sounds/open.mp3");
      if (!muted) {
        openSound.volume = 0.6;
        openSound.play().catch(e => console.log(e));
      }

      triggerConfetti();
      
      setOpenedIds(prev => [...prev, randomId]);
      setSelectedId(randomId);

      // MỞ KHÓA SAU 2.2 GIÂY (Khớp với thời gian animation xoay thẻ trong OutcomeCard)
      setTimeout(() => {
        setIsProcessing(false);
      }, 2200);
    }
  };

  const handleCloseCard = () => {
    setSelectedId(null);
    // Đảm bảo reset trạng thái xử lý khi đóng card
    setIsProcessing(false);
  };

  const handleReset = () => {
    // Cũng chặn reset nếu đang quay random dở
    if (isProcessing) return;

    setOpenedIds([]);
    setSelectedId(null);
    setTimeout(() => {
      setGameEnvelopes(shuffleEnvelopes());
    }, 300);
  };

  const selectedEnvelopeMoney = selectedId 
    ? gameEnvelopes.find(e => e.id === selectedId)?.money || 0 
    : 0;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-tet-gold via-tet-red to-tet-green font-sans">
      
      <audio 
        ref={audioRef} 
        src="https://audio.jukehost.co.uk/fQ5t4X4oQId3FPgN7JeicqvWAdWQFaRp" 
        loop 
        preload="auto"
      />

      <AnimatePresence>
        {!hasStarted && (
           <motion.div 
             className="absolute inset-0 z-50"
             exit={{ opacity: 0, transition: { duration: 1 } }}
           >
             <WelcomeScreen onStart={handleStartGame} />
           </motion.div>
        )}
      </AnimatePresence>

      <FallingFlowers />

      <div className={`absolute inset-0 flex flex-col transition-opacity duration-1000 ${hasStarted ? 'opacity-100' : 'opacity-0'}`}>
          
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-tet-gold/30 via-tet-red/20 to-tet-green/30" />
            
            {/* ... (Các phần trang trí background motion.div) ... */}
            <motion.div 
              className="absolute top-15 left-4 md:top-20 md:left-12 w-32 h-32 md:w-48 md:h-48 opacity-100 pointer-events-none"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src="/imgs/hoadao_trai.png" alt="Hoa Đào" className="w-full h-full object-contain drop-shadow-lg" />
            </motion.div>
            <motion.div 
              className="absolute bottom-8 right-4 md:bottom-16 md:right-12 w-32 h-32 md:w-48 md:h-48 opacity-100 pointer-events-none"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <img src="/imgs/hoamai.png" alt="Hoa Mai" className="w-full h-full object-contain drop-shadow-lg" />
            </motion.div>
            <motion.div 
              className="absolute top-1/4 right-2 md:right-8 w-24 h-24 md:w-36 md:h-36 opacity-100 pointer-events-none"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src="/imgs/hoadao.png" alt="Hoa Đào" className="w-full h-full object-contain drop-shadow-md" />
            </motion.div>
            <motion.div 
              className="absolute bottom-1/4 left-2 md:left-8 w-24 h-24 md:w-36 md:h-36 opacity-200 pointer-events-none"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >
              <img src="/imgs/hoamai_trai.png" alt="Hoa Mai" className="w-full h-full object-contain drop-shadow-md" />
            </motion.div>
             {/* ... (Kết thúc phần trang trí) ... */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_120%)] z-20" />
          </div>

          <div className="absolute inset-2 md:inset-6 z-0 rounded-[2rem] md:rounded-[3rem] border-2 border-tet-red/40 shadow-2xl pointer-events-none overflow-hidden">
             <div className="absolute inset-0 bg-tet-gold/5 backdrop-blur-md"></div>
             <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
             <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(255,215,0,0.2)]"></div>
          </div>

          <div className="relative z-10 flex-none">
            <Header 
              openedCount={openedIds.length} 
              total={ENVELOPES.length} 
              language={language}
            />
          </div>

          <main className="relative z-10 flex-1 min-h-0 w-full flex items-center justify-center p-2 md:p-4">
            <div className="relative w-full h-full max-w-[1000px] max-h-[80vh] grid grid-cols-4 grid-rows-4 gap-2 md:gap-4 lg:gap-6">
                {gameEnvelopes.map((env) => (
                   <div key={env.id} className="w-full h-full flex items-center justify-center pointer-events-auto">
                      <div className={`w-full max-w-[4.5rem] md:max-w-[7rem] aspect-[3/4] transition-opacity duration-300 ${selectedId === env.id ? 'opacity-0' : 'opacity-100'}`}>
                        <Envelope 
                          data={env} 
                          // Truyền thêm điều kiện disabled khi đang xử lý
                          onClick={() => handleEnvelopeClick(env.id)}
                          disabled={!!selectedId || isProcessing} 
                          isOpened={openedIds.includes(env.id)} 
                        />
                      </div>
                   </div>
                ))}
            </div>
          </main>

          <AnimatePresence>
            {selectedId && (
              <>
                 <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="fixed inset-0 z-40 bg-off-white/60 backdrop-blur-md pointer-events-auto"
                   onClick={handleCloseCard}
                 />
                 <OutcomeCard 
                    key={selectedId} 
                    onClose={handleCloseCard} 
                    cardId={selectedId}
                    language={language}
                    moneyAmount={selectedEnvelopeMoney}
                 />
              </>
            )}
          </AnimatePresence>

          {/* Truyền prop disabled xuống ControlBar */}
          <ControlBar 
            muted={muted} 
            volume={volume}
            disabled={isProcessing || !!selectedId} // Vô hiệu hóa khi đang xử lý HOẶC đang mở thẻ
            onToggleMute={() => setMuted(!muted)} 
            onVolumeChange={(v) => setVolume(v)}
            onReset={handleReset} 
            onRandom={handleRandom}
          />
      </div>
    </div>
  );
};

export default App;