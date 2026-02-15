import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './components/Header';
import { ControlBar } from './components/ControlBar';
import { Envelope } from './components/Envelope';
import { OutcomeCard } from './components/OutcomeCard';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ENVELOPES, MONEY_DENOMINATIONS } from './constants'; // Import MONEY_DENOMINATIONS
import { Language, EnvelopeData } from './types';
import confetti from 'canvas-confetti';

// Hàm xáo trộn tiền (Fisher-Yates Shuffle)
const shuffleEnvelopes = (): EnvelopeData[] => {
  // 1. Tạo một bể tiền (pool) đảm bảo mỗi mệnh giá xuất hiện đều nhau
  // Có 16 bao, 4 mệnh giá => mỗi mệnh giá xuất hiện 4 lần
  let moneyPool: number[] = [];
  const repeatCount = 16 / MONEY_DENOMINATIONS.length;
  
  for (let i = 0; i < repeatCount; i++) {
    moneyPool = [...moneyPool, ...MONEY_DENOMINATIONS];
  }

  // 2. Xáo trộn bể tiền
  for (let i = moneyPool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [moneyPool[i], moneyPool[j]] = [moneyPool[j], moneyPool[i]];
  }

  // 3. Gán tiền đã xáo trộn vào danh sách bao lì xì gốc (giữ nguyên vị trí ID và tọa độ)
  return ENVELOPES.map((env, index) => ({
    ...env,
    money: moneyPool[index]
  }));
};

const App: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);
  // Thay vì dùng ENVELOPES tĩnh, ta dùng state để lưu danh sách đã random
  const [gameEnvelopes, setGameEnvelopes] = useState<EnvelopeData[]>([]); 
  const [openedIds, setOpenedIds] = useState<number[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [language, setLanguage] = useState<Language>('vi');
  
  const audioRef = useRef<HTMLAudioElement>(null);

  // Khởi tạo game: Random tiền ngay khi load trang
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

  const handleEnvelopeClick = (id: number) => {
    if (openedIds.includes(id)) return;

    const openSound = new Audio("/sounds/open.mp3");
    if (!muted) {
      openSound.volume = 0.6;
      openSound.play().catch(e => console.log(e));
    }

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

    setSelectedId(id);
    setOpenedIds(prev => [...prev, id]);
  };

  const handleRandom = () => {
    // Tìm trong gameEnvelopes hiện tại
    const availableIds = gameEnvelopes
      .map(e => e.id)
      .filter(id => !openedIds.includes(id));

    if (availableIds.length > 0) {
      const randomId = availableIds[Math.floor(Math.random() * availableIds.length)];
      handleEnvelopeClick(randomId);
    }
  };

  const handleCloseCard = () => {
    setSelectedId(null);
  };

  const handleReset = () => {
    setOpenedIds([]);
    setSelectedId(null);
    // RANDOM LẠI TIỀN KHI RESET
    // Thêm delay nhỏ để user không thấy tiền bị đổi đột ngột trước khi đóng hết animation
    setTimeout(() => {
      setGameEnvelopes(shuffleEnvelopes());
    }, 300);
  };

  // Lấy giá trị tiền của bao đang chọn để truyền vào OutcomeCard
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

      <div className={`absolute inset-0 flex flex-col transition-opacity duration-1000 ${hasStarted ? 'opacity-100' : 'opacity-0'}`}>
          
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-tet-gold/30 via-tet-red/20 to-tet-green/30" />
            <div className="absolute left-[-50px] top-[-50px] w-64 h-64 opacity-40">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle cx="100" cy="100" r="80" fill="#FF69B4" opacity="0.3"/>
                <circle cx="60" cy="60" r="20" fill="#FFB6D9"/>
                <circle cx="140" cy="60" r="20" fill="#FFB6D9"/>
                <circle cx="100" cy="100" r="25" fill="#FFC0CB"/>
              </svg>
            </div>
            <div className="absolute right-[-50px] bottom-[-50px] w-64 h-64 opacity-40">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle cx="100" cy="100" r="80" fill="#FFD700" opacity="0.3"/>
                <circle cx="60" cy="60" r="20" fill="#FFED4E"/>
                <circle cx="140" cy="60" r="20" fill="#FFED4E"/>
                <circle cx="100" cy="100" r="25" fill="#FFE135"/>
              </svg>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_120%)] z-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/5 z-20" />
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
              setLanguage={setLanguage}
            />
          </div>

          <main className="relative z-10 flex-1 min-h-0 w-full flex items-center justify-center p-2 md:p-4">
            <div className="relative w-full h-full max-w-[1000px] max-h-[80vh] grid grid-cols-4 grid-rows-4 gap-2 md:gap-4 lg:gap-6">
                {/* Render từ gameEnvelopes (State) thay vì ENVELOPES (Constant) */}
                {gameEnvelopes.map((env) => (
                   <div key={env.id} className="w-full h-full flex items-center justify-center pointer-events-auto">
                      <div className={`w-full max-w-[4.5rem] md:max-w-[7rem] aspect-[3/4] transition-opacity duration-300 ${selectedId === env.id ? 'opacity-0' : 'opacity-100'}`}>
                        <Envelope 
                          data={env} 
                          onClick={handleEnvelopeClick}
                          disabled={!!selectedId} 
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
                    onClose={handleCloseCard} 
                    cardId={selectedId}
                    language={language}
                    moneyAmount={selectedEnvelopeMoney} // Truyền số tiền đã random vào đây
                 />
              </>
            )}
          </AnimatePresence>

          <ControlBar 
            muted={muted} 
            volume={volume}
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