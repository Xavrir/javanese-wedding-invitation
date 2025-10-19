import { motion } from "motion/react";
import { BatikDivider } from "./BatikDivider";

export function Invitation() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#F4EFE6] to-[#FEFDFB] relative overflow-hidden">
      {/* Floating batik patterns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: "-100%", rotate: 0 }}
            animate={{
              x: "100%",
              rotate: 360,
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
            className="absolute"
            style={{
              top: `${10 + i * 15}%`,
            }}
          >
            <div className="w-24 h-24 border-4 border-[#D4AF37] rounded-lg rotate-45"></div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <BatikDivider />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-2xl md:text-3xl text-[#2A3B6C] font-['Cormorant_Garamond'] italic">
            Assalamualaikum Warahmatullahi Wabarakatuh
          </h2>

          <div className="space-y-6 text-[#5C1F1F] font-['Plus_Jakarta_Sans']">
            <p className="text-lg leading-relaxed">
              Dengan memohon rahmat dan ridho Allah SWT,
              <br />
              kami bermaksud mengundang Bapak/Ibu/Saudara/i
              <br />
              untuk menghadiri pernikahan kami:
            </p>

            <div className="py-8">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-5xl md:text-6xl text-[#2A3B6C] font-['Caveat'] mb-2">
                  Ganang & Shakila
                </h3>
                <div className="w-32 h-1 bg-[#D4AF37] mx-auto mt-4"></div>
              </motion.div>
            </div>

            <p className="text-lg leading-relaxed">
              Yang Insya Allah akan dilaksanakan pada:
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#D4AF37]/20"
            >
              <p className="text-2xl md:text-3xl text-[#2A3B6C] mb-2 font-['Playfair_Display']">
                 Sabtu, 30 November 2025
              </p>
              <p className="text-xl md:text-2xl text-[#D4AF37] font-['Cormorant_Garamond']">
                📍 Gedung Granadi
              </p>
            </motion.div>

            <p className="text-sm text-[#5C1F1F] italic mt-8">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami
              <br />
              apabila Bapak/Ibu/Saudara/i berkenan hadir
              <br />
              untuk memberikan doa restu.
            </p>
          </div>
        </motion.div>

        <BatikDivider />
      </div>
    </section>
  );
}
