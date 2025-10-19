import { useEffect, useState } from "react";
import { Heart, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { BatikCorner, BatikPattern } from "./JavaneseOrnaments";

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-11-30T08:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#2A3B6C]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://i.pinimg.com/1200x/45/5f/4e/455f4e9c8c73bfc2f76a65e51bb4a3bc.jpg"
          alt="Temple Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3A4B7C]/85 via-[#2A3B6C]/70 to-[#2A3B6C]"></div>
      </div>

      {/* Batik Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <BatikPattern className="w-full h-full" />
      </div>

      {/* Floating Batik Motifs */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100%", rotate: 0 }}
            animate={{
              y: "-100%",
              rotate: 360,
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
            className="absolute"
            style={{
              left: `${5 + i * 12}%`,
            }}
          >
            <div className="w-12 h-12 border-2 border-[#D4AF37] opacity-20 rounded-lg rotate-45"></div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 py-20 max-w-4xl mx-auto">
        {/* Gunungan Ornament - Real PNG Image */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
          className="mb-8 flex justify-center"
        >
          <motion.img
            src="/images/gunungan-wayang.png"
            alt="Gunungan Wayang"
            className="h-[200px] md:h-[280px] w-auto object-contain drop-shadow-2xl"
            style={{
              filter: 'brightness(1.1) contrast(1.1) saturate(1.05)',
            }}
            animate={{
              filter: [
                'brightness(1.1) contrast(1.1)',
                'brightness(1.15) contrast(1.15)',
                'brightness(1.1) contrast(1.1)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-[#D4AF37] mb-2 tracking-[0.3em] uppercase text-sm font-['Plus_Jakarta_Sans']">
             The Wedding of 
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 mb-12"
        >
          <h1 className="javanese-title text-6xl md:text-8xl text-[#F4EFE6]">
            Shakila
          </h1>
          <div className="flex items-center justify-center gap-6">
            <div className="w-16 h-px bg-[#D4AF37]"></div>
            <motion.span
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                type: "spring",
                stiffness: 200
              }}
              className="text-4xl md:text-5xl text-[#D4AF37]"
            >
              &
            </motion.span>
            <div className="w-16 h-px bg-[#D4AF37]"></div>
          </div>
          <h1 className="javanese-title text-6xl md:text-8xl text-[#F4EFE6]">
            Ganang
          </h1>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-[#D4AF37] text-xl md:text-2xl mb-4 font-['Cormorant_Garamond']">
             Sabtu, 30 November 2025
          </p>
          <p className="text-[#D4AF37] text-sm mb-6 font-['Plus_Jakarta_Sans'] tracking-wide">
            Counting down to forever...
          </p>

          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { value: timeLeft.days, label: "Hari" },
              { value: timeLeft.hours, label: "Jam" },
              { value: timeLeft.minutes, label: "Menit" },
              { value: timeLeft.seconds, label: "Detik" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                className="bg-[#D4AF37] backdrop-blur-sm rounded-xl p-4 md:p-6 border border-[#D4AF37] shadow-lg"
              >
                <p className="text-3xl md:text-5xl text-white mb-1 font-['Playfair_Display'] font-bold">
                  {String(item.value).padStart(2, "0")}
                </p>
                <p className="text-white/90 text-xs md:text-sm font-['Plus_Jakarta_Sans']">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8 text-[#D4AF37]" />
          </motion.div>
          <p className="text-[#D4AF37] text-sm font-['Plus_Jakarta_Sans']">
            Scroll untuk informasi lebih lanjut
          </p>
        </motion.div>
      </div>

      {/* Top Bar Overlay - covers white navigation bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 h-16 bg-[#2A3B6C] z-[60]"
      />

      {/* Decorative Batik Corners - EXTENDED TO TOP */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed top-0 left-0 z-[70]"
      >
        <BatikCorner position="top-left" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="fixed top-0 right-0 z-[70]"
      >
        <BatikCorner position="top-right" />
      </motion.div>
      
      {/* Decorative Border Lines extending to top */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="fixed top-0 left-0 w-0.5 h-32 bg-gradient-to-b from-[#D4AF37] to-transparent z-[70]"
        style={{ marginLeft: '2rem' }}
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="fixed top-0 right-0 w-0.5 h-32 bg-gradient-to-b from-[#D4AF37] to-transparent z-[70]"
        style={{ marginRight: '2rem' }}
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent z-[70]"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-0 left-0 z-10"
      >
        <BatikCorner position="bottom-left" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 right-0 z-10"
      >
        <BatikCorner position="bottom-right" />
      </motion.div>
    </section>
  );
}
