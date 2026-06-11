import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, HelpCircle } from "lucide-react";

interface ReflectiveCardProps {
  title: string;
  subtitle: string;
  qualities: string[];
  prompt: string;
  color: string;
  borderColor: string;
  svgIcon: React.ReactNode;
}

function ReflectiveCard({ 
  title, 
  subtitle, 
  qualities, 
  prompt, 
  color, 
  borderColor, 
  svgIcon 
}: ReflectiveCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-64 sm:w-72 h-[420px] cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 150, damping: 20 }}
      >
        {/* Card Back (Design when hidden) */}
        <div 
          className="absolute inset-0 w-full h-full bg-[#3F5222] rounded-2xl p-5 border-4 border-double border-[#A8B08D] shadow-md flex flex-col items-center justify-between"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(0deg)" }}
        >
          <div className="w-full h-full border border-[#A8B08D]/35 rounded-xl flex flex-col items-center justify-between p-4 relative overflow-hidden">
            {/* Corner symbols */}
            <div className="absolute top-2 left-2 text-[#A8B08D]/40 text-xs">✧</div>
            <div className="absolute top-2 right-2 text-[#A8B08D]/40 text-xs">✧</div>
            <div className="absolute bottom-2 left-2 text-[#A8B08D]/40 text-xs">✧</div>
            <div className="absolute bottom-2 right-2 text-[#A8B08D]/40 text-xs">✧</div>

            <div className="text-[10px] uppercase tracking-[0.25em] text-[#A8B08D]/60">Explore & Express</div>
            
            <div className="w-20 h-20 rounded-full border border-dashed border-[#A8B08D]/20 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-[#A8B08D]/10 flex items-center justify-center">
                <Sparkles className="text-[#A8B08D] w-6 h-6 opacity-60" />
              </div>
            </div>
            
            <div className="text-center">
              <span className="text-[#A8B08D]/50 text-xl font-normal">✧</span>
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#F7F4EE]/60 mt-1">Reveal Prompts</p>
            </div>
          </div>
        </div>

        {/* Card Front (Design when revealed) */}
        <div 
          className={`absolute inset-0 w-full h-full rounded-2xl p-5 shadow-lg flex flex-col items-center justify-between border-4 border-double ${borderColor} ${color}`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="w-full h-full flex flex-col items-center justify-between text-center relative">
            <div className="text-[9px] uppercase tracking-widest text-[#374038]/60 pt-0.5">The Whole Being Deck</div>
            
            {/* Symbol Illustration */}
            <div className="w-20 h-20 flex items-center justify-center text-[#556F2D] my-3">
              {svgIcon}
            </div>

            {/* Title & Sub */}
            <div className="space-y-1">
              <h3 className="text-2xl font-medium text-[#3F5222] tracking-tight">{title}</h3>
              <p className="text-[10px] uppercase tracking-widest text-[#556F2D] font-bold">{subtitle}</p>
            </div>

            {/* Qualities */}
            <div className="flex flex-wrap justify-center gap-1 py-2">
              {qualities.map((q) => (
                <span key={q} className="px-2 py-0.5 rounded-full bg-[#F7F4EE]/80 border border-[#A8B08D]/30 text-[9px] text-[#374038]/80 font-medium">
                  {q}
                </span>
              ))}
            </div>

            {/* Journal prompt */}
            <div className="w-full bg-[#F7F4EE]/50 border border-[#A8B08D]/20 p-3 rounded-lg shadow-2xs">
              <p className="text-[9px] uppercase tracking-wider text-[#556F2D] font-bold mb-0.5">Journal Prompt</p>
              <p className="text-xs text-[#374038] leading-relaxed">
                “{prompt}”
              </p>
            </div>
            
            <div className="text-[8px] uppercase tracking-widest text-[#374038]/50 mt-2">Click to flip back</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function InteractiveDeck() {
  const cards = [
    {
      title: "The Anchor",
      subtitle: "Memory & Origin",
      qualities: ["Identity", "Roots", "Past Lessons", "Foundations"],
      prompt: "What part of my story still shapes me today?",
      color: "bg-[#F7F4EE]/90",
      borderColor: "border-[#A8B08D]/50",
      svgIcon: (
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
          {/* Wave */}
          <path d="M20 75 Q35 72 50 75 Q65 78 80 75" />
          <path d="M25 80 Q40 77 50 80 Q60 83 75 80" strokeDasharray="2 2" />
          {/* Anchor central shaft */}
          <path d="M50 25 V65" />
          <circle cx="50" cy="20" r="4" />
          <path d="M45 32 H55" />
          {/* Anchor curved base */}
          <path d="M30 50 C30 65 40 70 50 70 C60 70 70 65 70 50" />
          <path d="M28 48 L32 50 L28 52 Z" fill="currentColor" />
          <path d="M72 48 L68 50 L72 52 Z" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "The Mirror",
      subtitle: "Projection & Truth",
      qualities: ["Perception", "Beliefs", "Inheritance", "Clarity"],
      prompt: "What belief about myself came from someone else?",
      color: "bg-[#DAD5E7]/25",
      borderColor: "border-[#DAD5E7]/70",
      svgIcon: (
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
          {/* Hand mirror shape */}
          <ellipse cx="50" cy="40" rx="20" ry="25" />
          <path d="M50 65 V85" />
          {/* Mirror reflection lines */}
          <path d="M42 30 Q50 35 58 30" strokeDasharray="3 3" />
          <path d="M45 42 Q50 45 55 42" />
          <path d="M48 50 Q50 52 52 50" />
          {/* Decorative small stars */}
          <path d="M24 24 L27 27 M76 24 L73 27" strokeWidth="0.8" />
        </svg>
      )
    },
    {
      title: "The Release",
      subtitle: "Letting Go",
      qualities: ["Surrender", "Cleansing", "Slowing Down", "Lightness"],
      prompt: "What am I holding onto that no longer serves me?",
      color: "bg-[#E4CDD3]/25",
      borderColor: "border-[#E4CDD3]/70",
      svgIcon: (
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
          {/* Hand releasing seeds or leaves */}
          <path d="M20 50 C35 52 45 48 55 45 C65 42 75 48 85 45" />
          <path d="M20 55 C32 57 42 53 50 50 C62 46 72 52 82 50" strokeDasharray="3 3" />
          {/* Falling leaves floating down */}
          <path d="M60 25 C58 20 62 15 67 18 C69 22 65 27 60 25 Z" fill="#A8B08D" stroke="currentColor" strokeWidth="0.8" />
          <path d="M40 30 C38 27 40 22 45 24 C47 27 44 32 40 30 Z" fill="#E4CDD3" stroke="currentColor" strokeWidth="0.8" />
          <path d="M75 35 C72 33 73 28 78 29 C80 32 78 37 75 35 Z" fill="#DAD5E7" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      )
    },
    {
      title: "The Horizon",
      subtitle: "Unexplored Creation",
      qualities: ["Possibility", "Courage", "Future Self", "Vision"],
      prompt: "What would I create if fear wasn't involved?",
      color: "bg-[#F7F4EE]/90",
      borderColor: "border-[#556F2D]/35",
      svgIcon: (
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
          {/* Horizon line */}
          <path d="M15 60 H85" />
          {/* Rising Sun */}
          <path d="M35 60 C35 45 45 35 50 35 C55 35 65 45 65 60" />
          {/* Sun rays */}
          <path d="M50 20 V28" />
          <path d="M32 35 L38 40" />
          <path d="M68 35 L62 40" />
          <path d="M22 50 H28" />
          <path d="M78 50 H72" />
          {/* Soft ripples in the lower half */}
          <path d="M30 70 H70" strokeDasharray="4 4" />
          <path d="M40 80 H60" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      title: "The Spark",
      subtitle: "Attention & Growth",
      qualities: ["Presence", "Desire", "Focus", "Nurturing"],
      prompt: "What deserves more attention in my life right now?",
      color: "bg-[#A8B08D]/20",
      borderColor: "border-[#A8B08D]/65",
      svgIcon: (
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
          {/* Candle/Flame */}
          <path d="M46 65 H54 V80 H46 Z" />
          <path d="M50 65 V55" />
          {/* Flame shape */}
          <path d="M50 55 C46 50 44 42 50 30 C56 42 54 50 50 55 Z" fill="#E4CDD3" stroke="currentColor" strokeWidth="1" />
          {/* Spark rays */}
          <path d="M35 30 L40 33" />
          <path d="M65 30 L60 33" />
          <path d="M50 15 V22" />
          <path d="M30 42 H36" />
          <path d="M70 42 H64" />
        </svg>
      )
    },
    {
      title: "The Compass",
      subtitle: "Purpose & Meaning",
      qualities: ["Navigation", "Core Values", "Intention", "Direction"],
      prompt: "What does a meaningful life look like for me?",
      color: "bg-[#F7F4EE]/90",
      borderColor: "border-[#3F5222]/35",
      svgIcon: (
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
          {/* Compass outer circle */}
          <circle cx="50" cy="50" r="35" />
          <circle cx="50" cy="50" r="38" strokeDasharray="3 3" />
          {/* Center pin */}
          <circle cx="50" cy="50" r="2" fill="currentColor" />
          {/* Needle */}
          <path d="M50 22 L54 44 L50 50 L46 44 Z" fill="#556F2D" stroke="currentColor" strokeWidth="1" />
          <path d="M50 78 L54 56 L50 50 L46 56 Z" fill="none" stroke="currentColor" strokeWidth="1" />
          {/* Cardinal Directions */}
          <path d="M50 14 V17 M50 86 V83 M14 50 H17 M86 50 H83" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-6">
      {/* Editorial Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm uppercase tracking-[0.2em] text-[#556F2D] font-bold block mb-3">
          Interactive Tool
        </span>
        <h1 className="text-4xl md:text-5xl font-normal text-[#3F5222] tracking-tight leading-tight">
          The Whole Being Deck
        </h1>
        <p className="text-lg text-[#374038]/85 mt-4 leading-relaxed">
          This digital deck is designed to mimic the tactile cards used in our workshops. 
          Draw a card below by clicking it, let the symbol resonate, and take a few minutes to journal your thoughts.
        </p>
        <div className="flex items-center justify-center space-x-2 mt-4 text-[#556F2D]">
          <HelpCircle size={14} />
          <span className="text-xs uppercase tracking-widest">Click on any card to flip and reveal its prompt</span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-wrap justify-center gap-8 py-4">
        {cards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
          >
            <ReflectiveCard 
              title={card.title} 
              subtitle={card.subtitle} 
              qualities={card.qualities}
              prompt={card.prompt}
              color={card.color} 
              borderColor={card.borderColor}
              svgIcon={card.svgIcon}
            />
          </motion.div>
        ))}
      </div>

      {/* Journaling Guidelines */}
      <div className="mt-20 max-w-2xl mx-auto bg-[#F7F4EE]/90 p-8 border border-[#A8B08D]/40 rounded-2xl paper-card shadow-xs">
        <h3 className="text-xl font-medium text-[#3F5222] mb-3">How to use these prompts for self-reflection</h3>
        <ul className="space-y-3 text-sm text-[#374038]/90 leading-relaxed">
          <li className="flex items-start space-x-2">
            <span className="text-[#556F2D] font-bold mr-1">1.</span>
            <span><strong>Write without editing.</strong> Let your thoughts flow onto paper. Do not worry about spelling, grammar, or making sense. Write the raw truth.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-[#556F2D] font-bold mr-1">2.</span>
            <span><strong>Observe your emotions.</strong> If a prompt makes you feel uncomfortable, curious, or sad, write down that reaction. The reaction is a mark itself.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-[#556F2D] font-bold mr-1">3.</span>
            <span><strong>Express via shapes or colors.</strong> If words fail you, draw. Sketch what the prompt represents in your mind. Remember: art is the doorway.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
