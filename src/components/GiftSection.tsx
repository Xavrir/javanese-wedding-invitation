import { motion } from "motion/react";
import { Gift, Heart, Sparkles, ExternalLink, Package, Send } from "lucide-react";
import { BatikDivider } from "./BatikDivider";

export function GiftSection() {
  // Ganti URL ini dengan URL Google Form Anda
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";

  const handleGiftClick = () => {
    window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#F4EFE6] via-[#FEFDFB] to-[#F4EFE6] relative overflow-hidden">
      <BatikDivider />
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#5C1F1F]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2A3B6C]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating ornaments */}
      <div className="absolute top-10 left-10 opacity-20">
        <Sparkles className="w-8 h-8 text-[#D4AF37] animate-pulse" />
      </div>
      <div className="absolute top-20 right-20 opacity-20">
        <Sparkles className="w-6 h-6 text-[#D4AF37] animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>
      <div className="absolute bottom-20 left-20 opacity-20">
        <Sparkles className="w-7 h-7 text-[#D4AF37] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-[#D4AF37] to-[#E5C158] p-6 rounded-full shadow-2xl">
                <Gift className="w-16 h-16 text-white" />
              </div>
            </div>
          </motion.div>

          <h2 className="javanese-title text-5xl md:text-7xl text-[#2A3B6C] mb-6 drop-shadow-sm">
            Kirim Hadiah
          </h2>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent to-[#D4AF37] rounded-full"></div>
            <div className="w-4 h-4 bg-[#D4AF37] rounded-full animate-pulse"></div>
            <div className="w-20 h-1 bg-gradient-to-l from-transparent to-[#D4AF37] rounded-full"></div>
          </div>

          <p className="text-[#5C1F1F] font-['Plus_Jakarta_Sans'] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 font-medium">
            Kehadiran dan doa restu Anda adalah hadiah terbesar bagi kami. 
            Namun jika memberi adalah ungkapan tanda kasih Anda, 
            kami dengan senang hati menerimanya melalui formulir berikut.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-white via-[#FEFDFB] to-white rounded-3xl shadow-2xl border-2 border-[#D4AF37]/30 overflow-hidden">
            {/* Decorative corner patterns */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-br-full"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#D4AF37]/10 to-transparent rounded-tl-full"></div>
            
            {/* Floating background shapes */}
            <div className="absolute top-10 right-10 w-24 h-24 bg-[#5C1F1F]/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#2A3B6C]/5 rounded-full blur-2xl"></div>

            <div className="relative z-10 p-8 md:p-12">
              {/* Icon Feature List */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#2A3B6C] to-[#1A2B5C] rounded-2xl mb-4 shadow-lg">
                    <Package className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-[#2A3B6C] font-['Plus_Jakarta_Sans'] font-bold text-lg mb-2">
                    Aman & Terpercaya
                  </h3>
                  <p className="text-[#5C1F1F]/70 font-['Plus_Jakarta_Sans'] text-sm">
                    Informasi Anda tersimpan dengan aman
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#5C1F1F] to-[#4C1F1F] rounded-2xl mb-4 shadow-lg">
                    <Heart className="w-8 h-8 text-[#D4AF37] fill-[#D4AF37]" />
                  </div>
                  <h3 className="text-[#2A3B6C] font-['Plus_Jakarta_Sans'] font-bold text-lg mb-2">
                    Mudah & Cepat
                  </h3>
                  <p className="text-[#5C1F1F]/70 font-['Plus_Jakarta_Sans'] text-sm">
                    Isi formulir dalam hitungan menit
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#C49F27] rounded-2xl mb-4 shadow-lg">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-[#2A3B6C] font-['Plus_Jakarta_Sans'] font-bold text-lg mb-2">
                    Langsung Terkirim
                  </h3>
                  <p className="text-[#5C1F1F]/70 font-['Plus_Jakarta_Sans'] text-sm">
                    Notifikasi otomatis ke mempelai
                  </p>
                </motion.div>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-10">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#D4AF37] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
              </div>

              {/* Info Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#2A3B6C]/5 via-[#D4AF37]/10 to-[#5C1F1F]/5 border-2 border-[#D4AF37]/20 rounded-2xl p-6 mb-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Gift className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#2A3B6C] font-['Plus_Jakarta_Sans'] font-bold text-lg mb-2">
                      Formulir Pengiriman Hadiah
                    </h4>
                    <p className="text-[#5C1F1F] font-['Plus_Jakarta_Sans'] text-sm leading-relaxed">
                      Silakan isi formulir dengan informasi Anda. Kami akan menghubungi Anda 
                      untuk detail pengiriman hadiah atau jika Anda ingin mengirim hadiah langsung 
                      ke alamat kami.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGiftClick}
                className="group w-full bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] hover:from-[#C49F27] hover:via-[#D4AF37] hover:to-[#C49F27] text-white py-5 px-8 rounded-2xl font-['Plus_Jakarta_Sans'] font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl hover:shadow-2xl relative overflow-hidden"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                
                {/* Button content */}
                <Gift className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Buka Formulir Hadiah</span>
                <ExternalLink className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.button>

              {/* Helper text */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-center text-[#5C1F1F]/60 font-['Plus_Jakarta_Sans'] text-sm mt-4"
              >
                Formulir akan dibuka di tab baru
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Thank You Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border-2 border-[#D4AF37]/30 rounded-full px-8 py-4 shadow-lg">
            <Heart className="w-6 h-6 text-[#5C1F1F] fill-[#5C1F1F] animate-pulse" />
            <p className="text-[#2A3B6C] font-['Plus_Jakarta_Sans'] font-bold text-lg">
              Terima kasih atas perhatian dan kemurahan hati Anda
            </p>
            <Heart className="w-6 h-6 text-[#5C1F1F] fill-[#5C1F1F] animate-pulse" />
          </div>
        </motion.div>

        {/* Additional Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center max-w-2xl mx-auto"
        >
          <p className="text-[#5C1F1F]/70 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed italic">
            Kehadiran Anda di hari bahagia kami sudah lebih dari cukup. 
            Namun jika memberi adalah ungkapan tanda kasih dan doa restu Anda, 
            kami menerimanya dengan penuh rasa syukur dan terima kasih.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
