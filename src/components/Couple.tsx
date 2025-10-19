import { motion } from "motion/react";
import { Instagram } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { WayangDivider, BatikPattern } from "./JavaneseOrnaments";

export function Couple() {
  return (
    <section className="py-20 px-4 bg-[#FEFDFB] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <BatikPattern className="w-full h-full" />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5C1F1F]/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="javanese-title text-4xl md:text-5xl text-[#2A3B6C] mb-4">
            Mempelai
          </h2>
          <div className="flex justify-center">
            <WayangDivider className="opacity-70" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Groom - Arjuna */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <div className="relative inline-block group">
              {/* Photo */}
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-[#D4AF37]/30 shadow-2xl">
                <ImageWithFallback
                  src="/images/gallery/danang.jpg"
                  alt="Danang"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Wayang Arjuna Icon */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#2A3B6C] rounded-full flex items-center justify-center shadow-xl border-4 border-white"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Simplified Arjuna wayang silhouette */}
                  <path
                    d="M20 5 L25 12 L23 25 L25 35 L20 38 L15 35 L17 25 L15 12 Z"
                    fill="#D4AF37"
                  />
                  <circle cx="20" cy="12" r="4" fill="#F4EFE6" />
                  <path
                    d="M20 15 L22 20 L20 25 L18 20 Z"
                    fill="#5C1F1F"
                    opacity="0.7"
                  />
                </svg>
              </motion.div>
            </div>

            <div>
              <h3 className="javanese-subtitle text-3xl md:text-4xl text-[#2A3B6C] mb-2">
                Aulia Muhammad Hariz S.Kom
              </h3>
              <div className="mt-4 space-y-1">
                <p className="text-[#5C1F1F] text-sm md:text-base font-['Plus_Jakarta_Sans']">
                  Putra dari:
                </p>
                <p className="text-[#2A3B6C] font-medium font-['Cormorant_Garamond'] text-base md:text-lg">
                  Etty Herawati S.H., M.H., C.L.A., CSFA, ERMCP
                </p>
                <p className="text-[#2A3B6C] text-sm md:text-base font-['Plus_Jakarta_Sans']">
                  &
                </p>
                <p className="text-[#2A3B6C] font-medium font-['Cormorant_Garamond'] text-base md:text-lg">
                  Yudho Bintoro S.Si
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bride - Srikandi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <div className="relative inline-block group">
              {/* Photo */}
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-[#D4AF37]/30 shadow-2xl">
                <ImageWithFallback
                  src="/images/gallery/shakila.jpg"
                  alt="Shakila"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Wayang Srikandi Icon */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#2A3B6C] rounded-full flex items-center justify-center shadow-xl border-4 border-white"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Simplified Srikandi wayang silhouette */}
                  <path
                    d="M20 5 L28 12 L25 25 L27 35 L20 38 L13 35 L15 25 L12 12 Z"
                    fill="#D4AF37"
                  />
                  <circle cx="20" cy="12" r="4" fill="#F4EFE6" />
                  <path
                    d="M12 18 L28 18 L26 28 L14 28 Z"
                    fill="#5C1F1F"
                    opacity="0.5"
                  />
                  {/* Crown decoration */}
                  <path
                    d="M15 8 L20 5 L25 8 L23 10 L17 10 Z"
                    fill="#FF6B6B"
                    opacity="0.7"
                  />
                </svg>
              </motion.div>
            </div>

            <div>
              <h3 className="javanese-subtitle text-3xl md:text-4xl text-[#2A3B6C] mb-2">
                Shakila Chrisnadya Dewanti S.E
              </h3>
              <div className="mt-4 space-y-1">
                <p className="text-[#5C1F1F] text-sm md:text-base font-['Plus_Jakarta_Sans']">
                  Putri dari:
                </p>
                <p className="text-[#2A3B6C] font-medium font-['Cormorant_Garamond'] text-base md:text-lg">
                  Ir. Rina Nilakrisna, MM
                </p>
                <p className="text-[#2A3B6C] text-sm md:text-base font-['Plus_Jakarta_Sans']">
                  &
                </p>
                <p className="text-[#2A3B6C] font-medium font-['Cormorant_Garamond'] text-base md:text-lg">
                  Christanto Soegiocaksono S.E
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Connecting Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <svg
            width="200"
            height="60"
            viewBox="0 0 200 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 30 Q50 10, 100 30 T 200 30"
              stroke="#D4AF37"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="100" cy="30" r="20" fill="#F4EFE6" stroke="#D4AF37" strokeWidth="2" />
            <text
              x="100"
              y="37"
              textAnchor="middle"
              fill="#2A3B6C"
              fontSize="24"
              fontFamily="Playfair Display"
            >
              &
            </text>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
