// SVG Ornamen Jawa - Gunungan (Wayang Style) - Authentic Design
export function GununganOrnament({ className = "", fill = "#B18B41" }: { className?: string; fill?: string }) {
  return (
    <svg
      className={className}
      width="200"
      height="280"
      viewBox="0 0 200 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Border - Gold */}
      <path
        d="M100 5 L180 265 L20 265 Z"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="3"
        opacity="0.9"
      />
      
      {/* Main Gunungan Body - Dark Base */}
      <path
        d="M100 8 L177 262 L23 262 Z"
        fill={fill}
        opacity="0.95"
      />
      
      {/* Central Tree of Life Pattern */}
      <path
        d="M100 20 L100 240"
        stroke="#D4AF37"
        strokeWidth="4"
        opacity="0.8"
      />
      
      {/* Tree Branches - Left */}
      <path d="M100 60 Q80 70 75 80" stroke="#D4AF37" strokeWidth="2" opacity="0.7" />
      <path d="M100 90 Q70 100 65 110" stroke="#D4AF37" strokeWidth="2" opacity="0.7" />
      <path d="M100 120 Q60 130 55 140" stroke="#D4AF37" strokeWidth="2" opacity="0.7" />
      <path d="M100 150 Q55 160 50 170" stroke="#D4AF37" strokeWidth="2" opacity="0.7" />
      <path d="M100 180 Q50 190 45 200" stroke="#D4AF37" strokeWidth="2" opacity="0.7" />
      
      {/* Tree Branches - Right */}
      <path d="M100 60 Q120 70 125 80" stroke="#D4AF37" strokeWidth="2" opacity="0.7" />
      <path d="M100 90 Q130 100 135 110" stroke="#D4AF37" strokeWidth="2" opacity="0.7" />
      <path d="M100 120 Q140 130 145 140" stroke="#D4AF37" strokeWidth="2" opacity="0.7" />
      <path d="M100 150 Q145 160 150 170" stroke="#D4AF37" strokeWidth="2" opacity="0.7" />
      <path d="M100 180 Q150 190 155 200" stroke="#D4AF37" strokeWidth="2" opacity="0.7" />
      
      {/* Inner Sacred Space */}
      <path
        d="M100 40 L150 230 L50 230 Z"
        fill="#F4EFE6"
        opacity="0.15"
      />
      
      {/* Decorative Lotus Patterns - Top */}
      <circle cx="100" cy="35" r="8" fill="#D4AF37" opacity="0.6" />
      <ellipse cx="100" cy="25" rx="5" ry="12" fill="#D4AF37" opacity="0.5" />
      <ellipse cx="90" cy="35" rx="12" ry="5" fill="#D4AF37" opacity="0.5" />
      <ellipse cx="110" cy="35" rx="12" ry="5" fill="#D4AF37" opacity="0.5" />
      
      {/* Sacred Symbols - Middle */}
      <circle cx="100" cy="80" r="6" fill="#D4AF37" opacity="0.7" />
      <circle cx="100" cy="110" r="6" fill="#D4AF37" opacity="0.7" />
      <circle cx="100" cy="140" r="6" fill="#D4AF37" opacity="0.7" />
      <circle cx="100" cy="170" r="6" fill="#D4AF37" opacity="0.7" />
      <circle cx="100" cy="200" r="6" fill="#D4AF37" opacity="0.7" />
      
      {/* Decorative Border Dots - Left Side */}
      <circle cx="60" cy="100" r="3" fill="#F4EFE6" opacity="0.8" />
      <circle cx="50" cy="130" r="3" fill="#F4EFE6" opacity="0.8" />
      <circle cx="42" cy="160" r="3" fill="#F4EFE6" opacity="0.8" />
      <circle cx="36" cy="190" r="3" fill="#F4EFE6" opacity="0.8" />
      <circle cx="32" cy="220" r="3" fill="#F4EFE6" opacity="0.8" />
      
      {/* Decorative Border Dots - Right Side */}
      <circle cx="140" cy="100" r="3" fill="#F4EFE6" opacity="0.8" />
      <circle cx="150" cy="130" r="3" fill="#F4EFE6" opacity="0.8" />
      <circle cx="158" cy="160" r="3" fill="#F4EFE6" opacity="0.8" />
      <circle cx="164" cy="190" r="3" fill="#F4EFE6" opacity="0.8" />
      <circle cx="168" cy="220" r="3" fill="#F4EFE6" opacity="0.8" />
      
      {/* Batik Pattern Details */}
      <circle cx="80" cy="90" r="2" fill="#D4AF37" opacity="0.5" />
      <circle cx="120" cy="90" r="2" fill="#D4AF37" opacity="0.5" />
      <circle cx="70" cy="120" r="2" fill="#D4AF37" opacity="0.5" />
      <circle cx="130" cy="120" r="2" fill="#D4AF37" opacity="0.5" />
      <circle cx="60" cy="150" r="2" fill="#D4AF37" opacity="0.5" />
      <circle cx="140" cy="150" r="2" fill="#D4AF37" opacity="0.5" />
      <circle cx="55" cy="180" r="2" fill="#D4AF37" opacity="0.5" />
      <circle cx="145" cy="180" r="2" fill="#D4AF37" opacity="0.5" />
      <circle cx="50" cy="210" r="2" fill="#D4AF37" opacity="0.5" />
      <circle cx="150" cy="210" r="2" fill="#D4AF37" opacity="0.5" />
      
      {/* Crown/Peak Ornament */}
      <path
        d="M90 12 L100 2 L110 12 L100 8 Z"
        fill="#D4AF37"
        opacity="0.9"
      />
      <circle cx="100" cy="8" r="4" fill="#F4EFE6" opacity="0.8" />
      
      {/* Bottom Base Pattern */}
      <path
        d="M40 250 L100 235 L160 250"
        stroke="#D4AF37"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />
      <circle cx="100" cy="240" r="5" fill="#D4AF37" opacity="0.7" />
      
      {/* Flame-like decorations on sides */}
      <path d="M45 220 Q40 210 45 200" stroke="#D4AF37" strokeWidth="1.5" opacity="0.6" fill="none" />
      <path d="M155 220 Q160 210 155 200" stroke="#D4AF37" strokeWidth="1.5" opacity="0.6" fill="none" />
      
      {/* Additional small ornamental details */}
      <circle cx="85" cy="60" r="1.5" fill="#F4EFE6" opacity="0.6" />
      <circle cx="115" cy="60" r="1.5" fill="#F4EFE6" opacity="0.6" />
      <circle cx="75" cy="75" r="1.5" fill="#F4EFE6" opacity="0.6" />
      <circle cx="125" cy="75" r="1.5" fill="#F4EFE6" opacity="0.6" />
    </svg>
  );
}

// Lotus Flower - untuk Akad Nikah
export function LotusFlower({ className = "", size = 60 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Center */}
      <circle cx="30" cy="30" r="8" fill="#D4AF37" />
      {/* Petals */}
      <ellipse cx="30" cy="18" rx="6" ry="14" fill="#B18B41" opacity="0.8" />
      <ellipse cx="30" cy="42" rx="6" ry="14" fill="#B18B41" opacity="0.8" />
      <ellipse cx="18" cy="30" rx="14" ry="6" fill="#B18B41" opacity="0.8" />
      <ellipse cx="42" cy="30" rx="14" ry="6" fill="#B18B41" opacity="0.8" />
      {/* Diagonal petals */}
      <ellipse cx="21" cy="21" rx="10" ry="5" fill="#C9A666" opacity="0.7" transform="rotate(-45 21 21)" />
      <ellipse cx="39" cy="21" rx="10" ry="5" fill="#C9A666" opacity="0.7" transform="rotate(45 39 21)" />
      <ellipse cx="21" cy="39" rx="10" ry="5" fill="#C9A666" opacity="0.7" transform="rotate(45 21 39)" />
      <ellipse cx="39" cy="39" rx="10" ry="5" fill="#C9A666" opacity="0.7" transform="rotate(-45 39 39)" />
    </svg>
  );
}

// Bouquet - untuk Resepsi
export function BouquetFlower({ className = "", size = 60 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stems */}
      <path d="M25 40 Q25 50 20 55" stroke="#6B4423" strokeWidth="2" fill="none" />
      <path d="M30 40 Q30 50 30 55" stroke="#6B4423" strokeWidth="2" fill="none" />
      <path d="M35 40 Q35 50 40 55" stroke="#6B4423" strokeWidth="2" fill="none" />
      
      {/* Flowers */}
      <circle cx="20" cy="25" r="6" fill="#B18B41" />
      <circle cx="30" cy="20" r="7" fill="#D4AF37" />
      <circle cx="40" cy="25" r="6" fill="#B18B41" />
      <circle cx="25" cy="32" r="5" fill="#C9A666" />
      <circle cx="35" cy="32" r="5" fill="#C9A666" />
      
      {/* Ribbon */}
      <path d="M22 40 Q30 42 38 40" stroke="#B18B41" strokeWidth="3" fill="none" />
      <path d="M22 40 L18 50" stroke="#B18B41" strokeWidth="2" />
      <path d="M38 40 L42 50" stroke="#B18B41" strokeWidth="2" />
    </svg>
  );
}

// Batik Corner Ornament - BIGGER & MORE VISIBLE
export function BatikCorner({ className = "", position = "top-left" }: { className?: string; position?: string }) {
  const getTransform = () => {
    switch (position) {
      case "top-right": return "scale(-1, 1)";
      case "bottom-left": return "scale(1, -1)";
      case "bottom-right": return "scale(-1, -1)";
      default: return "scale(1, 1)";
    }
  };

  return (
    <svg
      className={className}
      width="150"
      height="150"
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: getTransform() }}
    >
      {/* Main corner border - THICK & GOLD */}
      <path d="M0 50 L0 0 L50 0" stroke="#D4AF37" strokeWidth="4" fill="none" />
      <path d="M0 70 L0 0 L70 0" stroke="#D4AF37" strokeWidth="2" opacity="0.6" fill="none" />
      
      {/* Curved ornamental lines */}
      <path d="M0 0 Q40 40 0 80" stroke="#B18B41" strokeWidth="3" opacity="0.8" fill="none" />
      <path d="M0 0 Q60 30 0 60" stroke="#B18B41" strokeWidth="2" opacity="0.7" fill="none" />
      <path d="M0 0 Q80 20 0 40" stroke="#B18B41" strokeWidth="2" opacity="0.6" fill="none" />
      
      {/* Decorative circles - LARGER */}
      <circle cx="20" cy="20" r="4" fill="#D4AF37" />
      <circle cx="40" cy="40" r="4" fill="#D4AF37" />
      <circle cx="30" cy="50" r="3" fill="#B18B41" opacity="0.8" />
      <circle cx="50" cy="30" r="3" fill="#B18B41" opacity="0.8" />
      
      {/* Batik pattern dots */}
      <circle cx="15" cy="35" r="2" fill="#D4AF37" opacity="0.7" />
      <circle cx="35" cy="15" r="2" fill="#D4AF37" opacity="0.7" />
      <circle cx="55" cy="20" r="2" fill="#B18B41" opacity="0.6" />
      <circle cx="20" cy="55" r="2" fill="#B18B41" opacity="0.6" />
      
      {/* Small detail dots */}
      <circle cx="10" cy="45" r="1.5" fill="#D4AF37" />
      <circle cx="45" cy="10" r="1.5" fill="#D4AF37" />
      <circle cx="60" cy="35" r="1.5" fill="#B18B41" />
      <circle cx="35" cy="60" r="1.5" fill="#B18B41" />
    </svg>
  );
}

// Wayang Separator/Divider
export function WayangDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="200"
      height="60"
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left ornament */}
      <path
        d="M0 30 Q20 20 40 30 Q20 40 0 30"
        fill="#B18B41"
        opacity="0.6"
      />
      
      {/* Center diamond */}
      <path
        d="M90 30 L100 20 L110 30 L100 40 Z"
        fill="#D4AF37"
      />
      <circle cx="100" cy="30" r="6" fill="#F4EFE6" />
      
      {/* Right ornament */}
      <path
        d="M200 30 Q180 20 160 30 Q180 40 200 30"
        fill="#B18B41"
        opacity="0.6"
      />
      
      {/* Connecting lines */}
      <line x1="40" y1="30" x2="90" y2="30" stroke="#B18B41" strokeWidth="1" opacity="0.4" />
      <line x1="110" y1="30" x2="160" y2="30" stroke="#B18B41" strokeWidth="1" opacity="0.4" />
      
      {/* Decorative dots */}
      <circle cx="50" cy="30" r="2" fill="#D4AF37" opacity="0.5" />
      <circle cx="70" cy="30" r="2" fill="#D4AF37" opacity="0.5" />
      <circle cx="130" cy="30" r="2" fill="#D4AF37" opacity="0.5" />
      <circle cx="150" cy="30" r="2" fill="#D4AF37" opacity="0.5" />
    </svg>
  );
}

// Batik Pattern Background Component
export function BatikPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="batik-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          {/* Diagonal lines */}
          <line x1="0" y1="0" x2="40" y2="40" stroke="#B18B41" strokeWidth="0.5" opacity="0.1" />
          <line x1="40" y1="0" x2="0" y2="40" stroke="#B18B41" strokeWidth="0.5" opacity="0.1" />
          
          {/* Small circles */}
          <circle cx="10" cy="10" r="1" fill="#B18B41" opacity="0.08" />
          <circle cx="30" cy="10" r="1" fill="#B18B41" opacity="0.08" />
          <circle cx="10" cy="30" r="1" fill="#B18B41" opacity="0.08" />
          <circle cx="30" cy="30" r="1" fill="#B18B41" opacity="0.08" />
          <circle cx="20" cy="20" r="1.5" fill="#D4AF37" opacity="0.06" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#batik-pattern)" />
    </svg>
  );
}
