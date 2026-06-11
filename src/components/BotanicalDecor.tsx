import { motion } from "framer-motion";

interface LeafBranchProps {
  fillColor: string;
  strokeColor: string;
  opacity?: number;
  scale?: number;
  rotate?: number;
  xOffset?: number;
  yOffset?: number;
}

// Sub-component to draw a single branch of lanceolate leaves (olive/bamboo style)
function LeafBranch({ 
  fillColor, 
  strokeColor, 
  opacity = 1,
  scale = 1,
  rotate = 0,
  xOffset = 0,
  yOffset = 0
}: LeafBranchProps) {
  return (
    <g 
      style={{ 
        transform: `translate(${xOffset}px, ${yOffset}px) rotate(${rotate}deg) scale(${scale})`,
        transformOrigin: "240px 100px",
        opacity 
      }}
    >
      {/* Central Stem */}
      <path
        d="M 240 100 C 180 110, 120 120, 60 140"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Pointed lanceolate leaves growing along the stem */}
      {/* Leaf 1 (Tip) */}
      <path d="M 60 140 C 40 135, 10 130, 0 135 C 10 145, 40 150, 60 140 Z" fill={fillColor} stroke={strokeColor} strokeWidth="0.8" />
      {/* Leaf 2 (Upper left) */}
      <path d="M 100 123 C 70 100, 40 90, 30 95 C 45 110, 80 120, 100 123 Z" fill={fillColor} stroke={strokeColor} strokeWidth="0.8" />
      {/* Leaf 3 (Lower left) */}
      <path d="M 110 122 C 90 140, 60 160, 50 165 C 65 155, 95 135, 110 122 Z" fill={fillColor} stroke={strokeColor} strokeWidth="0.8" />
      {/* Leaf 4 (Upper mid) */}
      <path d="M 150 115 C 120 90, 90 80, 80 85 C 95 100, 130 110, 150 115 Z" fill={fillColor} stroke={strokeColor} strokeWidth="0.8" />
      {/* Leaf 5 (Lower mid) */}
      <path d="M 160 113 C 140 135, 110 160, 100 165 C 115 150, 145 130, 160 113 Z" fill={fillColor} stroke={strokeColor} strokeWidth="0.8" />
      {/* Leaf 6 (Upper base) */}
      <path d="M 200 107 C 170 80, 140 70, 130 75 C 145 90, 180 100, 200 107 Z" fill={fillColor} stroke={strokeColor} strokeWidth="0.8" />
      {/* Leaf 7 (Lower base) */}
      <path d="M 210 105 C 190 130, 160 155, 150 160 C 165 145, 195 125, 210 105 Z" fill={fillColor} stroke={strokeColor} strokeWidth="0.8" />
    </g>
  );
}

interface PalmLeafProps {
  className?: string;
  side?: "left" | "right";
  delay?: number;
  duration?: number;
  size?: number;
}

// Main component that layers multiple branches with customizable colors based on the design system
export function PalmLeaf({ 
  className = "", 
  side = "right", 
  delay = 0, 
  duration = 8, 
  size = 200
}: PalmLeafProps) {
  const strokeColor = "#3F5222"; // Deep Green
  const isLeft = side === "left";

  // Using our specific muted color palette
  const fillColors = {
    layer1: "#DAD5E7", // Soft Lavender
    layer2: "#E4CDD3", // Muted Pink
    layer3: "#A8B08D", // Soft Sage
    layer4: "#556F2D", // Primary Green
    layer5: "#3F5222"  // Deep Green
  };

  return (
    <motion.svg
      className={`absolute pointer-events-none select-none z-10 ${className}`}
      width={size}
      height={size}
      viewBox="0 0 250 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ 
        transformOrigin: isLeft ? "top left" : "top right"
      }}
      animate={{ 
        rotate: isLeft ? [-1, 2, -2, 2, -1] : [1, -2, 2, -2, 1],
        y: [0, -6, 1, -6, 0]
      }}
      transition={{ 
        duration: duration + 4, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay 
      }}
    >
      <g transform={isLeft ? "scale(-1, 1) translate(-250, 0)" : "translate(0, 0)"}>
        {/* Layer 1: Back layer */}
        <LeafBranch 
          fillColor={fillColors.layer1} 
          strokeColor={strokeColor} 
          scale={0.9} 
          rotate={-20} 
          xOffset={15} 
          yOffset={-15} 
          opacity={0.6}
        />

        {/* Layer 2: Second Back layer */}
        <LeafBranch 
          fillColor={fillColors.layer2} 
          strokeColor={strokeColor} 
          scale={0.85} 
          rotate={18} 
          xOffset={5} 
          yOffset={25} 
          opacity={0.7}
        />

        {/* Layer 3: Middle layer */}
        <LeafBranch 
          fillColor={fillColors.layer3} 
          strokeColor={strokeColor} 
          scale={0.95} 
          rotate={-5} 
          xOffset={8} 
          yOffset={-5} 
          opacity={0.8}
        />

        {/* Layer 4: Middle-front layer */}
        <LeafBranch 
          fillColor={fillColors.layer4} 
          strokeColor={strokeColor} 
          scale={0.9} 
          rotate={10} 
          xOffset={10} 
          yOffset={10} 
          opacity={0.9}
        />

        {/* Layer 5: Front Layer */}
        <LeafBranch 
          fillColor={fillColors.layer5} 
          strokeColor={strokeColor} 
          scale={1.0} 
          rotate={0} 
          xOffset={0} 
          yOffset={0} 
        />
      </g>
    </motion.svg>
  );
}

interface WashiTapeProps {
  className?: string;
  rotate?: number;
}

export function WashiTape({ className = "", rotate = -2 }: WashiTapeProps) {
  return (
    <div 
      className={`w-24 h-6 bg-[#E4CDD3]/40 backdrop-blur-xs border-y border-white/20 shadow-xs relative overflow-hidden select-none pointer-events-none ${className}`}
      style={{ 
        transform: `rotate(${rotate}deg)`,
        clipPath: "polygon(0% 15%, 10% 0%, 90% 0%, 100% 15%, 98% 85%, 90% 100%, 10% 100%, 0% 85%)" 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}

interface OrganicBlobProps {
  className?: string;
  color?: string;
  delay?: number;
}

export function OrganicBlob({ className = "", color = "bg-[#DAD5E7]/30", delay = 0 }: OrganicBlobProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none -z-10 ${color} ${className}`}
      initial={{ scale: 0.9, opacity: 0.4 }}
      animate={{ 
        scale: [0.9, 1.1, 1.0, 0.9],
        opacity: [0.4, 0.5, 0.45, 0.4]
      }}
      transition={{ 
        duration: 12, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay 
      }}
    />
  );
}

interface FlowerBadgeProps {
  className?: string;
  color?: "lavender" | "pink" | "sage" | "ivory";
  size?: number;
  text?: string;
  spinDuration?: number;
}

export function FlowerBadge({ 
  className = "", 
  color = "pink", 
  size = 70, 
  text = "", 
  spinDuration = 24 
}: FlowerBadgeProps) {
  const fillColors = {
    pink: "#E4CDD3",
    lavender: "#DAD5E7",
    sage: "#A8B08D",
    ivory: "#F7F4EE"
  };

  const selectedFill = fillColors[color] || fillColors.pink;

  return (
    <div className={`relative flex items-center justify-center pointer-events-none select-none ${className}`} style={{ width: size, height: size }}>
      <motion.svg
        className="w-full h-full text-[#556F2D]"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: 360 }}
        transition={{ duration: spinDuration, repeat: Infinity, ease: "linear" }}
      >
        <path
          d="M50 15 C54 28 46 28 50 40 C54 28 66 28 70 32 C58 36 58 44 68 42 C56 46 56 58 60 68 C52 56 44 56 42 68 C38 56 26 56 22 50 C34 46 34 38 24 36 C36 32 36 20 40 22 C44 34 46 34 50 15 Z"
          fill={selectedFill}
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle cx="50" cy="45" r="7" fill="#F7F4EE" stroke="currentColor" strokeWidth="1.2" />
      </motion.svg>
      {text && (
        <span className="absolute text-[8px] uppercase tracking-wider text-[#374038] font-bold">
          {text}
        </span>
      )}
    </div>
  );
}

interface WaveDividerProps {
  className?: string;
  flip?: boolean;
  colorClass?: string;
}

export function WaveDivider({ className = "", flip = false, colorClass = "text-[#F7F4EE]" }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-0 ${className}`}>
      <svg
        className={`relative block w-[calc(100%+1.3px)] h-[40px] ${flip ? "rotate-180" : ""}`}
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,128 C280,240 560,40 840,160 C1120,280 1320,160 1440,128 L1440,200 L0,200 Z"
          className={`fill-current ${colorClass}`}
        />
      </svg>
    </div>
  );
}

export function CurvedDivider({ className = "", colorClass = "fill-[#F7F4EE]" }: { className?: string; colorClass?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-0 ${className}`}>
      <svg 
        viewBox="0 0 1440 74" 
        className="w-full h-10 relative block"
        preserveAspectRatio="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M0,32 C240,74 480,74 720,32 C960,-10 1200,-10 1440,32 L1440,74 L0,74 Z" 
          className={colorClass}
        />
      </svg>
    </div>
  );
}

interface BotanicalFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function BotanicalFrame({ children, className = "" }: BotanicalFrameProps) {
  return (
    <div className={`relative p-4 bg-[#F7F4EE]/90 rounded-2xl border border-[#A8B08D]/40 shadow-xs ${className}`}>
      {/* Decorative Washi Tape */}
      <WashiTape className="absolute -top-3 left-1/2 -translate-x-1/2 z-10" />
      
      {/* Photo frame border inner */}
      <div className="border border-[#A8B08D]/20 rounded-xl overflow-hidden p-2 bg-[#F7F4EE]/40">
        {children}
      </div>
      
      {/* Corner Flower Sketch */}
      <svg
        className="absolute -bottom-4 -right-4 text-[#556F2D] opacity-70 pointer-events-none"
        width="40"
        height="40"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 38C15 35 25 35 30 38M24 38C24 30 20 20 12 18M24 30C28 26 38 24 40 16M24 24C28 18 26 12 20 10"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="18" r="1.5" fill="currentColor" />
        <circle cx="40" cy="16" r="1.5" fill="currentColor" />
        <circle cx="20" cy="10" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
}
