import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Music, Pause, Play, Volume2, VolumeX } from "lucide-react";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showControls, setShowControls] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      
      const handleError = (e: Event) => {
        console.error('Audio failed to load:', audioRef.current?.error);
        setError('Failed to load audio');
        setIsReady(false);
      };
      
      const handleCanPlay = () => {
        setError(null);
        setIsReady(true);
        
        // Attempt autoplay when audio is ready
        if (audioRef.current && !isPlaying) {
          audioRef.current.play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch(() => {
              // Autoplay blocked - user will need to click play button
            });
        }
      };

      const handleLoadedData = () => {
        setIsReady(true);
      };

      const handlePlay = () => {
        setIsPlaying(true);
      };

      const handlePause = () => {
        setIsPlaying(false);
      };
      
      const audio = audioRef.current;
      audio.addEventListener('error', handleError);
      audio.addEventListener('canplay', handleCanPlay);
      audio.addEventListener('loadeddata', handleLoadedData);
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
      
      return () => {
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('loadeddata', handleLoadedData);
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  // Separate effect for volume and mute
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  const togglePlay = async () => {
    if (!audioRef.current) {
      return;
    }

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Ensure audio is loaded
        if (audioRef.current.readyState < 2) {
          await audioRef.current.load();
        }
        
        // Try to play
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          await playPromise;
          setIsPlaying(true);
          // Unmute on first play if muted
          if (isMuted) {
            setIsMuted(false);
          }
        }
      }
    } catch (err) {
      console.error('Failed to play audio:', err);
      setError(`Failed to play audio: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
      {/* Audio element with proper attributes for production */}
      <audio
        ref={audioRef}
        loop
        autoPlay
        preload="auto"
        crossOrigin="anonymous"
      >
        <source src="/music/MUSIC.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-20 right-4 z-40 sm:bottom-20 sm:right-6 lg:bottom-24 lg:right-6"
        style={{ right: '1rem', left: 'auto' }}
      >
        <div
          className="relative"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          {/* Main Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={togglePlay}
            disabled={!isReady && !error}
            className="w-14 h-14 bg-gradient-to-br from-[#2A3B6C] to-[#5C1F1F] rounded-full shadow-2xl flex items-center justify-center border-2 border-[#D4AF37] hover:border-[#F4EFE6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <AnimatePresence mode="wait">
              {!isReady && !error ? (
                <motion.div
                  key="loading"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.3, rotate: { duration: 1, repeat: Infinity, ease: "linear" } }}
                >
                  <Music className="w-6 h-6 text-[#D4AF37] opacity-50" />
                </motion.div>
              ) : isPlaying ? (
                <motion.div
                  key="playing"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Music className="w-6 h-6 text-[#D4AF37]" />
                </motion.div>
              ) : (
                <motion.div
                  key="paused"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Play className="w-6 h-6 text-[#D4AF37] ml-1" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Animated music notes */}
          {isPlaying && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 0, opacity: 0 }}
                  animate={{
                    y: -40,
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                  className="absolute top-0 left-1/2"
                  style={{
                    left: `${50 + (i - 1) * 15}%`,
                  }}
                >
                  <span className="text-[#D4AF37] text-lg">♪</span>
                </motion.div>
              ))}
            </div>
          )}

          {/* Controls Panel */}
          <AnimatePresence>
            {showControls && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full right-0 mb-4 bg-white rounded-2xl shadow-2xl p-4 border-2 border-[#D4AF37]/20 min-w-[200px]"
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[#2A3B6C] text-sm font-['Plus_Jakarta_Sans']">
                    🎵 NEMEN NDX
                  </p>
                  {isReady && (
                    <span className="text-xs text-green-600">●</span>
                  )}
                  {!isReady && !error && (
                    <span className="text-xs text-yellow-600">○</span>
                  )}
                  {error && (
                    <span className="text-xs text-red-600">✕</span>
                  )}
                </div>

                {/* Play/Pause Button */}
                <button
                  onClick={togglePlay}
                  disabled={!isReady && !error}
                  className="w-full flex items-center gap-3 px-4 py-2 rounded-lg bg-[#F4EFE6] hover:bg-[#2A3B6C] hover:text-white transition-colors mb-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4" />
                      <span className="text-sm font-['Plus_Jakarta_Sans']">Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span className="text-sm font-['Plus_Jakarta_Sans']">Play</span>
                    </>
                  )}
                </button>

                {/* Mute Button */}
                <button
                  onClick={toggleMute}
                  className="w-full flex items-center gap-3 px-4 py-2 rounded-lg bg-[#F4EFE6] hover:bg-[#2A3B6C] hover:text-white transition-colors mb-2"
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-4 h-4" />
                      <span className="text-sm font-['Plus_Jakarta_Sans']">Unmute</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4" />
                      <span className="text-sm font-['Plus_Jakarta_Sans']">Mute</span>
                    </>
                  )}
                </button>

                {/* Volume Slider */}
                <div className="flex items-center gap-2 px-2">
                  <Volume2 className="w-4 h-4 text-[#5C1F1F]" />
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="flex-1 h-1 bg-[#D4AF37]/30 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#D4AF37]"
                  />
                </div>

                <p className="text-xs text-[#5C1F1F] mt-3 text-center font-['Plus_Jakarta_Sans'] italic">
                  NEMEN NDX
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}
