import { motion } from "motion/react";
import { Calendar, Clock, MapPin, Navigation } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { LotusFlower, BouquetFlower, WayangDivider, BatikPattern } from "./JavaneseOrnaments";

export function Event() {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <BatikPattern className="w-full h-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="javanese-title text-4xl md:text-5xl text-[#2A3B6C] mb-4">
            Acara Pernikahan
          </h2>
          <div className="flex justify-center mb-4">
            <WayangDivider className="opacity-70" />
          </div>
          <p className="text-[#5C1F1F] font-['Plus_Jakarta_Sans'] text-lg">
            Sabtu, 30 November 2025 - Gedung Granadi
          </p>
        </motion.div>

        <div className="flex justify-center px-4">
          {/* Akad Nikah */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#F4EFE6] to-[#FEFDFB] rounded-3xl shadow-xl overflow-hidden border-2 border-[#D4AF37]/20 hover:shadow-2xl transition-shadow max-w-2xl w-full mx-auto"
          >
            {/* Image Header */}
            <div className="h-48 overflow-hidden relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1610425303802-f09737e52e28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwd2VkZGluZyUyMHZlbnVlfGVufDF8fHx8MTc2MDc2NDMzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Akad Nikah"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A3B6C]/80 to-transparent"></div>
              <div className="absolute bottom-4 left-6 right-6 flex items-center gap-3">
                <LotusFlower className="flex-shrink-0" size={40} />
                <h3 className="text-white text-3xl font-['Playfair_Display']">
                  Akad Nikah & Resepsi
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2A3B6C] rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-[#2A3B6C] font-['Plus_Jakarta_Sans']">
                    Sabtu, 30 November 2025
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2A3B6C] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-[#2A3B6C] font-['Plus_Jakarta_Sans']">
                    Akad - 08:00 WIB - 11.00 WIB
                  </p>
                  <p className="text-[#2A3B6C] font-['Plus_Jakarta_Sans']">
                    Resepsi - 11.00 WIB - Selesai
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2A3B6C] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-[#2A3B6C] font-['Plus_Jakarta_Sans']">
                    Gedung Granadi
                  </p>
                  <p className="text-[#5C1F1F] text-sm mt-1 font-['Plus_Jakarta_Sans']">
                    Jl. H. R. Rasuna Said No.Kav. 8-9, Kuningan, Jakarta Selatan
                  </p>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/fS4mLdTNEqpQiSfA9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full mt-6 bg-[#2A3B6C] text-white py-3 rounded-xl hover:bg-[#D4AF37] hover:text-[#2A3B6C] transition-all font-['Plus_Jakarta_Sans']"
              >
                <Navigation className="w-5 h-5" />
                Lihat Lokasi
              </a>
            </div>
          </motion.div>
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 rounded-3xl overflow-hidden shadow-xl border-4 border-[#D4AF37]/30"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2596736768594!2d106.83359279999999!3d-6.2307539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3eee94caceb%3A0x67220994e4c5fb2c!2sGedung%20Granadi!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Gedung Granadi"
            className="w-full"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
