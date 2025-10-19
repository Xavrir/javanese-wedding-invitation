import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Home, Heart, Calendar, Image, MapPin, MessageCircle, Instagram, CheckSquare, Gift } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "event", label: "Acara", icon: Calendar },
    { id: "rsvp", label: "RSVP", icon: CheckSquare },
    { id: "gift", label: "Hadiah", icon: Gift },
    { id: "gallery", label: "Galeri", icon: Image },
  ];

  return (
    <>
      {/* Top Bar - Desktop & Mobile */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#2A3B6C] to-[#5C1F1F] rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg text-[#2A3B6C] font-['Playfair_Display']">
                D<span className="text-[#D4AF37]">❤️</span>S
              </h1>
            </div>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#2A3B6C] hover:text-[#D4AF37] transition-colors font-['Plus_Jakarta_Sans'] text-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 flex items-center justify-center text-[#2A3B6C] hover:text-[#D4AF37] transition-colors lg:hidden"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Hamburger Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-gradient-to-br from-[#2A3B6C] to-[#5C1F1F] z-50 shadow-2xl lg:hidden"
          >
            <div className="p-6">
              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-[#D4AF37] hover:text-[#F4EFE6] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Menu Header */}
            <div className="mb-12 mt-4">
              <h2 className="text-3xl text-[#F4EFE6] font-['Playfair_Display'] mb-2">
                Ganang & Shakila
              </h2>
              <p className="text-[#D4AF37] font-['Plus_Jakarta_Sans'] text-sm">
                30 November 2025
              </p>
            </div>              {/* Menu Items */}
              <nav className="space-y-2">
                {navItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full flex items-center gap-4 px-6 py-4 text-[#F4EFE6] hover:bg-[#D4AF37]/20 rounded-xl transition-all group"
                    >
                      <Icon className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                      <span className="font-['Plus_Jakarta_Sans']">{item.label}</span>
                    </motion.button>
                  );
                })}
              </nav>

            
            
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation Bar - Mobile Only */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.1)] lg:hidden"
      >
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex flex-col items-center gap-1 px-3 py-2 text-[#5C1F1F] hover:text-[#D4AF37] transition-colors group"
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-['Plus_Jakarta_Sans']">
                  {item.label.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}
