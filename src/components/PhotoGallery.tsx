import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { WayangDivider, BatikPattern } from "./JavaneseOrnaments";

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const photos = [
    {
      src: "/images/gallery/photo1.jpg",
      caption: "Ganang & Shakila di Candi Plaosan",
    },
    {
      src: "/images/gallery/photo2.jpg",
      caption: "Ganang & Shakila - Pose Elegan",
    },
    {
      src: "/images/gallery/photo3.jpg",
      caption: "Ganang & Shakila - Kebersamaan",
    },
    {
      src: "/images/gallery/photo4.jpg",
      caption: "Ganang & Shakila - Berlari Bersama",
    },
    {
      src: "/images/gallery/photo5.jpg",
      caption: "Ganang & Shakila - Bergandengan Tangan",
    },
    {
      src: "/images/gallery/photo6.jpg",
      caption: "Ganang & Shakila - Moment Romantis",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#F4EFE6] to-[#FEFDFB] relative overflow-hidden">
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
            Galeri Foto
          </h2>
          <div className="flex justify-center mb-4">
            <WayangDivider className="opacity-70" />
          </div>
          <p className="text-[#5C1F1F] font-['Plus_Jakarta_Sans'] text-lg">
            Momen indah Ganang & Shakila di Candi Plaosan
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer ${
                idx === 2 || idx === 5 ? "md:col-span-1 md:row-span-2" : ""
              }`}
              style={{
                aspectRatio: idx === 2 || idx === 5 ? "2/3" : "1/1",
              }}
              onClick={() => setSelectedImage(idx)}
            >
              <ImageWithFallback
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Batik border overlay */}
              <div className="absolute inset-0 border-4 border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 transition-all pointer-events-none"></div>
              
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A3B6C]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-['Plus_Jakarta_Sans'] text-sm">
                  {photo.caption}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-[#2A3B6C]/95 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#F4EFE6] transition-colors z-10"
              >
                <X className="w-6 h-6 text-[#2A3B6C]" />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full"
              >
                <div className="relative rounded-2xl overflow-hidden border-4 border-[#D4AF37]">
                  <ImageWithFallback
                    src={photos[selectedImage].src}
                    alt={photos[selectedImage].caption}
                    className="w-full h-auto max-h-[85vh] object-contain"
                  />
                </div>
                <p className="text-center text-[#F4EFE6] mt-4 font-['Plus_Jakarta_Sans']">
                  {photos[selectedImage].caption}
                </p>
              </motion.div>

              {/* Navigation dots */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                {photos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === selectedImage
                        ? "bg-[#D4AF37] w-8"
                        : "bg-[#F4EFE6]/50 hover:bg-[#F4EFE6]"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
