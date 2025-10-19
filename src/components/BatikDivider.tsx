import { motion } from "motion/react";

export function BatikDivider() {
  return (
    <div className="w-full flex items-center justify-center py-8">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex items-center gap-4"
      >
        {/* Left ornament */}
        <svg
          width="60"
          height="20"
          viewBox="0 0 60 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 10 Q15 5, 30 10 T 60 10"
            stroke="#D4AF37"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="15" cy="10" r="3" fill="#D4AF37" opacity="0.6" />
          <circle cx="30" cy="10" r="4" fill="#D4AF37" />
          <circle cx="45" cy="10" r="3" fill="#D4AF37" opacity="0.6" />
        </svg>

        {/* Center diamond */}
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 2 L28 15 L15 28 L2 15 Z"
            fill="#D4AF37"
            opacity="0.3"
          />
          <path
            d="M15 5 L25 15 L15 25 L5 15 Z"
            stroke="#D4AF37"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="15" cy="15" r="4" fill="#5C1F1F" opacity="0.5" />
        </svg>

        {/* Right ornament */}
        <svg
          width="60"
          height="20"
          viewBox="0 0 60 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 10 Q15 5, 30 10 T 60 10"
            stroke="#D4AF37"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="15" cy="10" r="3" fill="#D4AF37" opacity="0.6" />
          <circle cx="30" cy="10" r="4" fill="#D4AF37" />
          <circle cx="45" cy="10" r="3" fill="#D4AF37" opacity="0.6" />
        </svg>
      </motion.div>
    </div>
  );
}
