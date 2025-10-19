import { Heart, Instagram } from "lucide-react";
import { motion } from "motion/react";

export function NewFooter() {
  return (
    <footer className="relative bg-gradient-to-br from-[#2A3B6C] via-[#5C1F1F] to-[#2A3B6C] text-white overflow-hidden">
      {/* Background decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-4 border-[#D4AF37] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 border-4 border-[#D4AF37] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-[#D4AF37] rounded-lg rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Heart Icon */}
          <Heart className="w-12 h-12 mx-auto mb-6 fill-[#D4AF37] text-[#D4AF37]" />

          {/* Thank You Message */}
          <h3 className="text-3xl md:text-4xl font-['Playfair_Display'] mb-4 text-[#F4EFE6]">
            Terima Kasih
          </h3>
          <p className="text-[#D4AF37] text-xl font-['Cormorant_Garamond'] mb-8">
            Thank You
          </p>

          {/* Names */}
          <div className="mb-8">
                      <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[#F4EFE6] text-lg font-['Cormorant_Garamond'] mb-2"
          >
            Ganang & Shakila
          </motion.p>
            <p className="text-[#D4AF37] text-lg font-['Plus_Jakarta_Sans']">
              30 November 2025
            </p>
          </div>

          {/* Quote */}
          <div className="mb-8 max-w-2xl mx-auto">
            <p className="text-[#F4EFE6] font-['Cormorant_Garamond'] text-lg md:text-xl italic leading-relaxed">
              "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri,
              agar kamu cenderung dan merasa tenteram kepadanya."
            </p>
            <p className="text-[#D4AF37] mt-4 font-['Plus_Jakarta_Sans']">
              (QS. Ar-Rum: 21)
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-[#D4AF37] mx-auto my-8"></div>

          {/* Final Message */}
          <p className="text-[#F4EFE6] mb-2 font-['Plus_Jakarta_Sans']">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami
            <br className="hidden sm:block" />
            jika Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
          </p>
          <p className="text-[#D4AF37] text-lg mt-4 font-['Cormorant_Garamond']">
            Wassalamu'alaikum Warahmatullahi Wabarakatuh
          </p>

          {/* Social Media */}
          <div className="mt-12">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4EFE6] transition-colors font-['Plus_Jakarta_Sans']"
            >
              
            
            </a>
          </div>

          {/* Credits */}
          <div className="mt-12 pt-8 border-t border-[#F4EFE6]/20">
            
          </div>
        </motion.div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
    </footer>
  );
}
