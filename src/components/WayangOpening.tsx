import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface WayangOpeningProps {
  onComplete: () => void;
}

export function WayangOpening({ onComplete }: WayangOpeningProps) {
  const [stage, setStage] = useState<"intro" | "gunungan" | "split" | "reveal" | "fadeout" | "complete">("intro");
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    if (isSkipped) {
      onComplete();
      return;
    }

    const timers = [
      setTimeout(() => setStage("gunungan"), 1000),  // Longer intro
      setTimeout(() => setStage("split"), 3500),     // More time to appreciate gunungan
      setTimeout(() => setStage("reveal"), 5000),    // Smoother transition to reveal
      setTimeout(() => setStage("fadeout"), 10000),  // Much more time to read text
      setTimeout(() => {
        setStage("complete");
        onComplete();
      }, 11000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [isSkipped, onComplete]);

  const handleSkip = () => {
    setIsSkipped(true);
  };

  if (stage === "complete" || isSkipped) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: stage === "fadeout" ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 bg-gradient-to-b from-[#1F2D5C] via-[#2A3B6C] to-[#2A3B6C] flex items-center justify-center overflow-hidden"
      >
        {/* Skip Button with smooth fade */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          onClick={handleSkip}
          className="absolute top-6 right-6 z-50 text-[#D4AF37] hover:text-[#F4EFE6] hover:scale-110 transition-all flex items-center gap-2 bg-[#2A3B6C]/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#D4AF37]/40 hover:border-[#D4AF37] shadow-lg"
        >
          <span className="text-sm font-['Plus_Jakarta_Sans']">Skip</span>
          <X className="w-4 h-4" />
        </motion.button>

        {/* Gunungan Animation with Spring Physics */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Center Gunungan (appears first, then splits) - Using Real Image */}
          {stage === "intro" || stage === "gunungan" ? (
            <motion.div
              initial={{ scale: 0.3, rotate: -20, opacity: 0, y: 100 }}
              animate={{ 
                scale: stage === "gunungan" ? 1 : 0.3, 
                rotate: stage === "gunungan" ? 0 : -20,
                y: stage === "gunungan" ? 0 : 100,
                opacity: stage === "gunungan" ? 1 : 0 
              }}
              transition={{ 
                duration: 1.8,
                type: "spring",
                stiffness: 80,
                damping: 15,
                mass: 1
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div 
                animate={{ 
                  filter: [
                    "drop-shadow(0 0 40px rgba(212, 175, 55, 0.5))",
                    "drop-shadow(0 0 60px rgba(212, 175, 55, 0.8))",
                    "drop-shadow(0 0 45px rgba(212, 175, 55, 0.6))"
                  ],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="relative"
              >
                {/* Real Gunungan Wayang Image */}
                <motion.img 
                  src="/images/gunungan-wayang.png"
                  alt="Gunungan Wayang"
                  className="h-[450px] md:h-[550px] lg:h-[650px] w-auto object-contain drop-shadow-2xl"
                  style={{
                    filter: 'brightness(1.15) contrast(1.15) saturate(1.1)',
                  }}
                  initial={{ filter: 'brightness(0.8)' }}
                  animate={{ 
                    filter: 'brightness(1.15) contrast(1.15) saturate(1.1)'
                  }}
                  transition={{ duration: 1.5 }}
                />
                {/* Enhanced Gold Overlay Glow */}
                <motion.div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.25) 0%, transparent 70%)'
                  }}
                  animate={{
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          ) : null}
          
          {/* Left Half - Slides from center - Using Real Image */}
          <motion.div
            initial={{ x: 0, opacity: 0, scale: 1 }}
            animate={{
              x: stage === "split" || stage === "reveal" || stage === "fadeout" ? "-52%" : 0,
              opacity: stage === "split" || stage === "reveal" || stage === "fadeout" ? 1 : 0,
              scale: stage === "split" || stage === "reveal" || stage === "fadeout" ? 1.08 : 1,
              rotate: stage === "split" || stage === "reveal" || stage === "fadeout" ? -2 : 0,
            }}
            transition={{ 
              duration: 1.8,
              type: "spring",
              stiffness: 70,
              damping: 18,
              mass: 0.8
            }}
            className="absolute inset-0 flex items-center justify-center overflow-hidden"
          >
            <motion.div
              className="relative"
              animate={{
                filter: [
                  "drop-shadow(10px 15px 50px rgba(212, 175, 55, 0.5))",
                  "drop-shadow(10px 20px 60px rgba(212, 175, 55, 0.7))",
                  "drop-shadow(10px 15px 50px rgba(212, 175, 55, 0.5))"
                ]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <img 
                src="/images/gunungan-wayang.png"
                alt="Gunungan Left"
                className="h-[450px] md:h-[550px] lg:h-[650px] w-auto object-contain"
                style={{
                  clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
                  filter: 'brightness(1.15) contrast(1.15) saturate(1.1)',
                }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/25 to-transparent pointer-events-none"
                animate={{
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right Half - Slides from center - Using Real Image */}
          <motion.div
            initial={{ x: 0, opacity: 0, scale: 1 }}
            animate={{
              x: stage === "split" || stage === "reveal" || stage === "fadeout" ? "52%" : 0,
              opacity: stage === "split" || stage === "reveal" || stage === "fadeout" ? 1 : 0,
              scale: stage === "split" || stage === "reveal" || stage === "fadeout" ? 1.08 : 1,
              rotate: stage === "split" || stage === "reveal" || stage === "fadeout" ? 2 : 0,
            }}
            transition={{ 
              duration: 1.8,
              type: "spring",
              stiffness: 70,
              damping: 18,
              mass: 0.8
            }}
            className="absolute inset-0 flex items-center justify-center overflow-hidden"
          >
            <motion.div
              className="relative"
              animate={{
                filter: [
                  "drop-shadow(-10px 15px 50px rgba(212, 175, 55, 0.5))",
                  "drop-shadow(-10px 20px 60px rgba(212, 175, 55, 0.7))",
                  "drop-shadow(-10px 15px 50px rgba(212, 175, 55, 0.5))"
                ]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <img 
                src="/images/gunungan-wayang.png"
                alt="Gunungan Right"
                className="h-[450px] md:h-[550px] lg:h-[650px] w-auto object-contain"
                style={{
                  clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
                  filter: 'brightness(1.15) contrast(1.15) saturate(1.1)',
                }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-l from-[#D4AF37]/25 to-transparent pointer-events-none"
                animate={{
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Text Reveal with Staggered Animation */}
          {(stage === "reveal" || stage === "fadeout") && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: stage === "fadeout" ? 0 : 1 }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              className="absolute inset-0 flex items-center justify-center z-20"
            >
              <div className="text-center space-y-6 px-4">
                {/* "THE WEDDING OF" with slow blur effect */}
                <motion.p
                  initial={{ y: 60, opacity: 0, filter: "blur(20px)", scale: 0.85 }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)", scale: 1 }}
                  transition={{ 
                    duration: 1.8, 
                    delay: 0.8,
                    ease: [0.19, 1, 0.22, 1]
                  }}
                  className="text-[#D4AF37] text-sm md:text-base mb-6 font-['Plus_Jakarta_Sans'] tracking-[0.4em] uppercase drop-shadow-lg"
                >
                   The Wedding of 
                </motion.p>

                {/* Names with Javanese Font - Slower animation */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 1.6, 
                    delay: 1.2,
                    ease: [0.19, 1, 0.22, 1]
                  }}
                  className="space-y-4"
                >
                  <motion.h1 
                    initial={{ x: -80, opacity: 0, filter: "blur(15px)" }}
                    animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ 
                      duration: 1.6, 
                      delay: 1.8,
                      ease: [0.19, 1, 0.22, 1]
                    }}
                    className="javanese-title text-5xl md:text-7xl text-[#F4EFE6] drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                  >
                    Shakila
                  </motion.h1>
                  
                  <motion.div 
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ 
                      duration: 1.2, 
                      delay: 2.6,
                      ease: [0.19, 1, 0.22, 1]
                    }}
                    className="flex items-center justify-center gap-4 my-6"
                  >
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1.2, delay: 2.6 }}
                      className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                    />
                    <motion.span 
                      initial={{ scale: 0, rotate: -360, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      transition={{ 
                        duration: 1.4, 
                        delay: 3.2, 
                        ease: [0.34, 1.56, 0.64, 1],
                        type: "spring",
                        stiffness: 150,
                        damping: 12
                      }}
                      className="text-3xl text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]"
                    >
                      &
                    </motion.span>
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1.2, delay: 2.6 }}
                      className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                    />
                  </motion.div>
                  
                  <motion.h1 
                    initial={{ x: 80, opacity: 0, filter: "blur(15px)" }}
                    animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ 
                      duration: 1.6, 
                      delay: 3.8,
                      ease: [0.19, 1, 0.22, 1]
                    }}
                    className="javanese-title text-5xl md:text-7xl text-[#F4EFE6] drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                  >
                    Ganang
                  </motion.h1>
                </motion.div>

                {/* Date with slow fade-in */}
                <motion.p
                  initial={{ y: 40, opacity: 0, filter: "blur(12px)", scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)", scale: 1 }}
                  transition={{ 
                    duration: 1.4, 
                    delay: 4.8,
                    ease: [0.19, 1, 0.22, 1]
                  }}
                  className="text-[#D4AF37] text-lg md:text-2xl font-['Cormorant_Garamond'] mt-8 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                >
                   30 November 2025
                </motion.p>
              </div>
            </motion.div>
          )}

          {/* Background glow with pulsing effect */}
          {(stage === "split" || stage === "reveal") && (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.5, 0.35, 0.4], 
                  scale: [0, 2.2, 2.5, 2.3] 
                }}
                transition={{ 
                  duration: 3,
                  times: [0, 0.4, 0.7, 1],
                  ease: [0.19, 1, 0.22, 1]
                }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
              >
                <motion.div 
                  animate={{
                    opacity: [0.35, 0.5, 0.35],
                    scale: [2.3, 2.5, 2.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                  className="w-[700px] h-[700px] rounded-full bg-[#D4AF37] blur-[120px]"
                />
              </motion.div>
              
              {/* Secondary glow ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.25, 0.18, 0.2], 
                  scale: [0, 2.8, 3.2, 3] 
                }}
                transition={{ 
                  duration: 3.5,
                  times: [0, 0.5, 0.8, 1],
                  ease: [0.19, 1, 0.22, 1],
                  delay: 0.2
                }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
              >
                <motion.div 
                  animate={{
                    opacity: [0.18, 0.28, 0.18],
                    scale: [3, 3.3, 3]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="w-[900px] h-[900px] rounded-full bg-[#F4EFE6] blur-[150px]"
                />
              </motion.div>
              
              {/* Tertiary accent glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.15, 0.1], 
                  scale: [0, 1.5, 1.8] 
                }}
                transition={{ 
                  duration: 2.5,
                  times: [0, 0.6, 1],
                  ease: [0.19, 1, 0.22, 1],
                  delay: 0.5
                }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
              >
                <motion.div 
                  animate={{
                    opacity: [0.1, 0.2, 0.1],
                    scale: [1.8, 2, 1.8]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                  className="w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#E5C158] to-transparent blur-[100px]"
                />
              </motion.div>
            </>
          )}
        </div>

        {/* Enhanced floating particles - Batik inspired */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-5">
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                y: "110%", 
                x: `${-10 + i * 7}%`,
                opacity: 0,
                rotate: 0,
                scale: 0.3
              }}
              animate={{
                y: "-120%",
                opacity: [0, 0.7, 0.5, 0.3, 0],
                rotate: i % 2 === 0 ? 360 : -360,
                scale: [0.3, 1.2, 1, 0.6, 0.2]
              }}
              transition={{
                duration: 12 + i * 1.8,
                repeat: Infinity,
                delay: stage === "gunungan" ? i * 0.25 : 0,
                ease: "linear",
                opacity: {
                  duration: 12 + i * 1.8,
                  times: [0, 0.15, 0.4, 0.7, 1]
                },
                scale: {
                  duration: 12 + i * 1.8,
                  times: [0, 0.2, 0.5, 0.8, 1]
                }
              }}
              className="absolute"
              style={{
                left: `${3 + i * 6.5}%`,
              }}
            >
              {i % 4 === 0 ? (
                <motion.div 
                  animate={{ 
                    borderColor: ["#D4AF37", "#E5C158", "#D4AF37"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-3 h-3 border-2 border-[#D4AF37] opacity-50 rotate-45 shadow-[0_0_10px_rgba(212,175,55,0.3)]"
                />
              ) : i % 4 === 1 ? (
                <motion.div 
                  animate={{ 
                    borderColor: ["#D4AF37", "#F4EFE6", "#D4AF37"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-4 h-4 rounded-full border-2 border-[#D4AF37] opacity-40 shadow-[0_0_8px_rgba(212,175,55,0.4)]"
                />
              ) : i % 4 === 2 ? (
                <motion.svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 18 18"
                  animate={{
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <path 
                    d="M9 2 L11 7 L16 9 L11 11 L9 16 L7 11 L2 9 L7 7 Z" 
                    fill="none" 
                    stroke="#D4AF37" 
                    strokeWidth="1.5"
                    opacity="0.5"
                    filter="drop-shadow(0 0 4px rgba(212, 175, 55, 0.5))"
                  />
                </motion.svg>
              ) : (
                <motion.div
                  animate={{
                    rotate: [0, 90, 180, 270, 360],
                    opacity: [0.4, 0.7, 0.4]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="relative"
                >
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full opacity-60 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                  <div className="absolute inset-0 w-2 h-2 bg-[#E5C158] rounded-full blur-sm opacity-40" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Light rays effect */}
        {stage === "reveal" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.15, 0.1] }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 pointer-events-none z-5"
            style={{
              background: 'radial-gradient(circle at center, transparent 20%, rgba(212, 175, 55, 0.05) 50%, transparent 80%)'
            }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
